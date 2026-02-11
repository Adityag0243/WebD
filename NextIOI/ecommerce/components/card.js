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

  const handleDelete = async (e) => {
    e.stopPropagation();
    let payload = {
      "id": id_
    }
    try {
      const res = await axios.delete(`http://localhost:3000/api/products`, { data: payload });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/products`, editData);
      router.refresh();
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
      if (onEdit) {
        onEdit();
      }
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
      </div>
    </div>
  )
}

export default Card