'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Trash2, Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useState } from 'react'
import Modal from "@/components/ui/modal"
import styles from '@/app/(admin)/admin/form.module.css'


function Card({ id_, imgSrc, itemName, itemPrice, desc, itemRating = 4, onEdit }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: id_,
    imgSrc: imgSrc,
    itemName: itemName,
    itemPrice: itemPrice,
    desc: desc,
    itemRating: itemRating
  })

  const handleDelete = async (e) => {
    e.stopPropagation();
    let payload = {
      "id": id_
    }
    try {
      const res = await axios.delete(`http://localhost:3000/api/products`, { data: payload });
      router.refresh();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/products`, editData);
      router.refresh();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  }


  const handleEdit = async (e) => {
    e.stopPropagation();
    try {
      console.log("I am here");
      if (onEdit) {
        onEdit();
      }
      // let payload = {
      //   "id": id_
      // }
      // setIsModalOpen(true);
      // console.log("Modal Opened:  ", isModalOpen);


    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div
      className="rounded-xl overflow-hidden shadow-xl hover:scale-102 transition-transform duration-400 cursor-pointer border border-gray-200"
      onClick={() => { router.push(`/product/${id_}`) }}
    >
      <div
        className='flex items-center justify-center object-cover p-2'
      >
        <Image
          src={imgSrc}
          width={260}
          height={260}
          alt={"test"}
        />
      </div>
      <div className="px-4 py-4 ">
        <div className="font-bold text-xl mb-1">{itemName}</div>
        <div className='flex justify-between  bg-gray-100 rounded-lg'>
          <p className='text-xl font-bold text-gray-700 p-2' >₹ {itemPrice} </p>
          <p className='text-md text-amber-600 bg-amber-200 p-2 m-1 rounded-xl font-bold' >{itemRating} ⭐</p>
        </div>
        <p className="text-gray-700 text-base truncate ">
          {desc}
        </p>
        <div className='flex justify-end gap-3'>
          <Button variant="outline" size="icon" aria-label="Submit" onClick={handleDelete}>
            <Trash2 className='text-red-500' />
          </Button>
          <Button variant="outline" size="icon" aria-label="Submit" onClick={handleEdit}>
            <Pencil className='text-green-500' />
          </Button>
        </div>

        {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-5" onSubmit={handleSubmit}>
            <h2 className={` text-2xl font-semibold text-center text-gray-700 mb-4`}>
              Add New Product
            </h2>
            <div className="flex flex-col">
              <label className={` text-gray-600 font-medium mb-1`}>Product Name ★</label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter Product Description"
                maxLength={100}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
            >
              Add Product
            </button>
          </form>
        </Modal> */}
      </div>
    </div>
  )
}

export default Card