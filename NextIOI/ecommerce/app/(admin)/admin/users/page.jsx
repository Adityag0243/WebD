import { User, Building, Search } from 'lucide-react';
import UserTable from './table';
import axios from 'axios';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

async function UserPage() {

    const res = await axios.get('http://localhost:3000/api/users')
    console.log("res: ", res);

    const users = await res.data;
    console.log("users: ", users);

    return (
        <div
            className='bg-blue-950 p-4 m-2 rounded-2xl'
        >
            <div
                className='flex gap-5'
            >
                <div
                    className='flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
                >
                    <User className=" text-emerald-800 bg-emerald-100 p-2 rounded-full h-9 w-9" />
                    1300+ Users
                </div>
                <div
                    className='flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
                >
                    <User className="text-pink-600 bg-pink-200 p-2 rounded-full h-9 w-9" />
                    970+ Users
                </div>
                <div
                    className='flex gap-2 text-2xl font-bold  p-3 rounded-2xl bg-white'
                >
                    <Building className="text-amber-700 bg-amber-200  p-2 rounded-full h-9 w-9" />
                    30+ Cities
                </div>
            </div>
            <div
                className='flex gap-10 bg-white text-gray-600 mt-2 p-2 px-6 shadow-md shadow-orange-400 '
            >
                <Search className="text-amber-700 bg-amber-200 py-2 rounded-full h-10 w-10" />
                <input type="text" className='text-lg p-2 w-100 border rounded-2xl' placeholder='Search' />
            </div>
            <UserTable users={users} search={""} />

            <Pagination>
                <PaginationContent>
                    <PaginationItem >
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>




        </div>
    )
}

export default UserPage