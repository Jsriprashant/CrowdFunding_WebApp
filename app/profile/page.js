"use client"

import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { fetchuser, updateUser } from '@/actions/userActions'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    const getData = async () => {


        let u = await fetchuser(session.user.name)

        setform(u)

    }

    useEffect(() => {

        if (!session) {
            router.push("/login")
        }
        else {

            getData()
        }

    }, [])



    const handlechange = (e) => {

        setform({ ...form, [e.target.name]: e.target.value })

    }

    const handlesubmit = async (e) => {

        update();
        await updateUser(e, session.user.name)
        // updating the username.
        toast.success('User Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });

    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"

            />


            <div className="bg-gray-800 md:p-8 px-4 m-4 rounded-lg shadow-lg text-white w-full max-w-xl mx-auto">
                <h2 className="text-2xl mb-6 text-center">Welcome to your Dashboard</h2>
                <form action={handlesubmit}>
                    <div className="mb-4">
                        <label htmlFor='name' className="block mb-2">Name</label>
                        <input onChange={handlechange} name='name' id='name' value={form.name ? form.name : ""} type="text" placeholder="Name" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='email' className="block mb-2">Email</label>
                        <input onChange={handlechange} name='email' id='email' value={form.email ? form.email : ""} type="email" placeholder="Email" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='username' className="block mb-2">Username</label>
                        <input onChange={handlechange} name='username' id='username' value={form.username ? form.username : ""} type="text" placeholder="Username" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='profilepic' className="block mb-2">Profile Picture</label>
                        <input onChange={handlechange} name='profilepic' id='profilepic' value={form.profilepic ? form.profilepic : ""} type="text" placeholder="Profile Picture" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='coverpic' className="block mb-2">Cover Picture</label>
                        <input onChange={handlechange} name='coverpic' id='coverpic' value={form.coverpic ? form.coverpic : ""} type="text" placeholder="Cover Picture" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='razorId' className="block mb-2">Razorpay ID</label>
                        <input onChange={handlechange} name='razorId' id='razorId' value={form.razorId ? form.razorId : ""} type="text" placeholder="Razorpay Id" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='razorKey' className="block mb-2">Razorpay KEY</label>
                        <input onChange={handlechange} name='razorKey' id='razorKey' value={form.razorKey ? form.razorKey : ""} type="text" placeholder="Razorpay Key" className="w-full p-2 bg-gray-700 rounded-md border-none" />
                    </div>
                    <button type='submit' className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md">Save</button>
                </form>
            </div>
        </>
    )
}

export default page
