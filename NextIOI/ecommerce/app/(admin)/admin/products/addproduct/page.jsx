'use client'

import styles from '@/app/(admin)/admin/form.module.css'
import { useState } from 'react'
import axios from 'axios'

function AddProduct() {
    const [formData, setData] = useState({
        name: "",
        price: "",
        stock: "",
        image: "",
        category: "other",
        description: "",
        is_active: true
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitData = {
            ...formData,
            price: parseFloat(formData.price),
            stock: parseFloat(formData.stock)
        };
        console.log(submitData)
        axios.post("http://localhost:3000/api/products", submitData)
            .then((res) => {
                console.log(res.data);
                setData({
                    name: "",
                    price: "",
                    stock: "",
                    image: "",
                    category: "other",
                    description: "",
                    is_active: true
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="w-full flex justify-center mt-10">
            <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-5" onSubmit={handleSubmit}>
                <h2 className={`text-2xl font-semibold text-center text-gray-700 mb-4`}>
                    Add New Product
                </h2>

                <div className="flex flex-col">
                    <label className={`text-gray-600 font-medium mb-1`}>Product Name ★</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter Product Name"
                        required
                        onChange={handleChange}
                        className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Price ★</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        placeholder="Enter Product Price"
                        required
                        min="0"
                        step="0.01"
                        onChange={handleChange}
                        className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Stock ★</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        placeholder="Enter Stock Quantity"
                        required
                        min="0"
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Category ★</label>
                    <select
                        name="category"
                        value={formData.category}
                        required
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                        <option value="books">Books</option>
                        <option value="homedecor">Home Decor</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Image Link</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter Image Link"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        placeholder="Enter Product Description"
                        maxLength={550}
                        onChange={handleChange}
                        rows="3"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="is_active"
                        id="is_active"
                        checked={formData.is_active}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="is_active" className="text-gray-600 font-medium mb-0 ml-2 cursor-pointer">
                        Active Product
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct