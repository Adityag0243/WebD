import React from 'react'



function UserTable({ users, search = '' }) {
    console.log(users);

    return (
        <>
            <div className="overflow-x-auto bg-white mt-4">
                <table className="min-w-full border border-gray-400 ">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 border border-gray-400">Name</th>
                            <th className="px-3 py-2 border border-gray-400">Gender</th>
                            <th className="px-3 py-2 border border-gray-400">Age</th>
                            <th className="px-3 py-2 border border-gray-400">Email</th>
                            <th className="px-3 py-2 border border-gray-400">Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users?.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-3 py-2 border border-gray-400">{user.full_name}</td>
                                <td className="px-3 py-2 border border-gray-400">{user.gender}</td>
                                <td className="px-3 py-2 border border-gray-400">{user.age}</td>
                                <td className="px-3 py-2 border border-gray-400  text-blue-400">{user.email}</td>
                                <td className="px-3 py-2 border border-gray-400">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default UserTable