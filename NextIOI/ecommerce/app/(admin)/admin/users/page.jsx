import {User , Building, Search } from 'lucide-react';
import UserTable from './table';

async function UserPage() {
    // const users = [
    // { id: 1, name: "Aditya", email: "aditya@gmail.com", role: "Admin" },
    // { id: 2, name: "Rohit", email: "rohit@gmail.com", role: "User" },
    // { id: 3, name: "Simran", email: "simran@gmail.com", role: "Seller" }
    // ];
    const res = await fetch('https://dummyjson.com/users')
    const resUsers = await res.json()
    const users = resUsers.users;


    // console.log(resUsers.users.length)
    

return (
    <div
        className='bg-blue-950 p-4 m-2 rounded-2xl'
    >
        <div
            className='flex gap-5'
        >
            <div
                className = 'flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
            > 
                <User className=" text-emerald-800 bg-emerald-100 p-2 rounded-full h-9 w-9" />
                1300+ Users
            </div>

            <div
                className = 'flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
            > 
                <User className="text-pink-600 bg-pink-200 p-2 rounded-full h-9 w-9" />
                970+ Users
            </div>


            <div
                className = 'flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
            > 
                <Building className="text-amber-700 bg-amber-200  p-2 rounded-full h-9 w-9" />
                30+ Cities
            </div>
        </div>


    <div
        className = 'flex gap-10 bg-white text-gray-600 mt-2 p-2 px-6 shadow-md shadow-orange-400 '
    > 
        <Search className="text-amber-700 bg-amber-200 py-2 rounded-full h-10 w-10" /> 
        <input type="text" className='text-lg p-2 w-100 border rounded-2xl'  placeholder='Search' />
    </div>
    <UserTable users = {users} search = {""} />


    </div>
)
}

export default UserPage