'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from 'lucide-react'
import store_1 from '@/assets/images/shop_4.webp'
import store_2 from '@/assets/images/store_2.png'
import store_3 from '@/assets/images/store_3.png'
import { useState } from 'react'
import Modal from './modal'


function Shopcard({ shopName, shopImg, shopLocation, isImageOnRight = false }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardClassName = `m-6 p-2 flex
            image-description-card ${isImageOnRight ? 'reverse-layout' : ''}
            border border-gray-200 rounded-lg 
            hover:scale-102 transition duration-400 cursor-pointer
            shadow-lg
        `
    return (
        <div className={cardClassName}>
            <div>
                <Image
                    src={shopImg}
                    width={450}
                    height={450}
                    alt={"test"}
                    className='rounded-xl'
                />
            </div>
            <div className='m-4'>
                <h1 className='font-bold text-2xl p-2'>{shopName}</h1>
                <p
                    className="flex text-gray-700 gap-2 text-base min-w-[50px] truncate p-2"
                >
                    <MapPin className='text-red-500' /> Location : {shopLocation}
                </p>
                <p className='flex text-gray-700 gap-2 text-base min-w-[50px] truncate p-2'>
                    <Clock className='text-gray-500' /> Timing :  9 AM - 6 PM
                </p>
                <p className='flex text-gray-700 gap-2 text-base min-w-[50px] truncate p-2'>
                    <Phone className='text-stone-500' /> Contact Us :  +91 9876543210
                </p>
                <div className='grid grid-cols-2 gap-3 text-white p-2'>
                    <Button variant="outline"
                        className='shadow-md w-48 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:font-bold hover:text-white ' >View Store</Button>
                    <Button variant="outline"
                        onClick={() => setIsModalOpen(true)}
                        className='shadow-md w-48 bg-green-500 hover:bg-green-600 hover:scale-105 hover:font-bold hover:text-white' >Add Booking</Button>
                    <Button variant="outline"
                        className='shadow-md w-48 bg-yellow-600 hover:bg-yellow-700 hover:scale-105 hover:font-bold hover:text-white' >Edit Store</Button>
                    <Button variant="outline"
                        className='w-48 bg-red-500 hover:bg-red-600 hover:scale-105 hover:font-bold hover:text-white' >Delete Store</Button>
                </div>
            </div>


            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className='text-2xl font-bold text-center m-2'>Book your time slot</h2>
                <p className='text-gray-700 text-center m-2'>Select a date and time slot to book your appointment.</p>
                <div className='flex justify-center m-2'>
                    <input type="date" min={new Date().toISOString().split('T')[0]} className='w-48' />
                    <select className='w-48'>
                        <option value="9:00 AM">9:00 AM - 12:00 PM</option>
                        <option value="12:00 PM">12:00 PM - 3:00 PM</option>
                        <option value="3:00 PM">3:00 PM - 6:00 PM</option>
                        <option value="6:00 PM">6:00 PM - 9:00 PM</option>

                    </select>
                </div>

                <div className='flex justify-center m-2'>
                    <Button variant="outline"
                        onClick={() => setIsModalOpen(false)}
                        className='w-48 bg-green-500 hover:bg-green-600 hover:scale-105 hover:font-bold hover:text-white' >Book</Button>
                </div>
            </Modal>
        </div>
    )
}

const storeData = [
    {
        shopName: "Phoenix Market City",
        shopImg: store_1,
        shopLocation: "Whitefield Main Road, Mahadevpura, Bengaluru. Pincode: 560066"
    },
    {
        shopName: "Banglore Night Bazaar",
        shopImg: store_2,
        shopLocation: "Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru. Pincode 560055"
    },
    {
        shopName: "Royal Mart Fresh & Daily",
        shopImg: store_3,
        shopLocation: "No. 21, Hosur Road, Koramangala, Bengaluru. Pincode: 560034"
    },
]

export default function StorePage() {

    return (
        <div className='mx-4 px-4' >
            <h1 className='text-4xl justify-center text-center font-bold my-4' >Store Page</h1>
            {storeData.map((shop, idx) => (
                <Shopcard
                    key={shop.shopName}
                    shopName={shop.shopName}
                    shopImg={shop.shopImg}
                    shopLocation={shop.shopLocation}
                    isImageOnRight={idx % 2 === 0}
                />
            ))}
        </div>
    )
}