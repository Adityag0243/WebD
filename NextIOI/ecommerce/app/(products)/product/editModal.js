'use client'
import styles from "@/app/(admin)/admin/form.module.css"
import Modal from "@/components/ui/modal"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function EditModal({ editData_, isOpen, onClose }) {
    console.log("inside edit modal", editData_);
    const router = useRouter();
    const [dataChanged, setDataChanged] = useState(false);

    const [editData, setEditData] = useState({
        name: editData_?.name,
        price: editData_?.price,
        stock: editData_?.stock,
        image: editData_?.image,
        category: editData_?.category,
        description: editData_?.description
    })

    const handleChange = (e) => {
        setDataChanged(true);
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!dataChanged) onClose();
        setDataChanged(false);
        try {
            const res = await axios.patch(`http://localhost:3000/api/products/${editData_?.id}`, editData);
            router.refresh();
            setDataChanged(false);
        } catch (error) {
            console.log(error);
        }
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-3" onSubmit={handleSubmit}>
                <h2 className={` text-2xl font-semibold text-center text-gray-700 mb-2`}>
                    Edit the Product
                </h2>
                <div className="flex flex-col">
                    <label className={` text-gray-600 font-medium mb-1`}>Product Name ★</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={editData?.name}
                        placeholder="Enter Product Name"
                        required
                        onChange={handleChange}
                        className={` ${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>


                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Price★</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={editData?.price}
                        placeholder="Enter Product Price"
                        required
                        onChange={handleChange}
                        className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Stock★</label>
                    <input
                        type="number"
                        name="stock"
                        defaultValue={editData?.stock}
                        placeholder="Enter Stock Quantity"
                        required
                        onChange={handleChange}
                        min="1"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Image Link</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={editData?.image}
                        onChange={handleChange}
                        placeholder="Enter Image Link"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Category</label>
                    <input
                        type="text"
                        name="category"
                        defaultValue={editData?.category}
                        onChange={handleChange}
                        placeholder="Enter Category name"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Description</label>
                    <input
                        type="text"
                        name="description"
                        defaultValue={editData?.description}
                        placeholder="Enter Product Description"
                        maxLength={100}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
                >
                    Edit Product
                </button>
            </form>
        </Modal>
    );
}