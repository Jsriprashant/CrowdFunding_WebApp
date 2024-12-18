"use client"

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchPayments, initiate, fetchuser } from '@/actions/userActions'
import connectDb from '@/app/db/connectDb'

import { useSearchParams } from 'next/navigation'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useChat } from 'ai/react';


// import { useSession } from 'next-auth/react'

const PaymentsPage = ({ username }) => {
    // const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [suggestedMessages, setSuggestedMessages] = useState([]);



    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {


        if (searchParams.get("paymentdone") == "true") {

            toast.success('Payment Done 👌', {
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

    }, [])



    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }


    // get the user who has completed their payments
    const getData = async () => {

        await connectDb();
        let u = await fetchuser(username);
        setcurrentUser(u);
        let dbPayments = await fetchPayments(username);
        setpayments(dbPayments);


    };

    // const getsuggestions = async () => {

    //     // const response = await fetch('api/openai', {
    //     //     method: 'POST'
    //     // })
    //     // const { data } = response.data;
    //     const mockResponse = {
    //         data: "What's your favorite book?||If you could travel anywhere, where would you go?||What's your go-to comfort food?"
    //     };

    //     const Data = mockResponse.data;
    //     const suggestions = Data.split('||');
    //     setSuggestedMessages(suggestions);


    // }
    // const handleSuggestionClick = (suggestion) => {
    //     setpaymentform({ ...paymentform, message: suggestion.trim() });
    // };

    const getsuggestions = async () => {


        const response = await fetch('api/googleai', {
            method: 'POST'
        })

        const Data = await response.json();
        const suggestions = Data.data.split('||');
        console.log(suggestions)
        setSuggestedMessages(suggestions);


    }
    const handleSuggestionClick = (suggestion) => {
        setpaymentform({ ...paymentform, message: suggestion.trim() });
    };





    // get the user id from teh serveractions 
    const pay = async (amount) => {

        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": currentUser.razorID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();


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
            <button id="rzp-button1">Pay</button>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="cover relative ">
                <img className='object-cover w-full' src={currentUser.coverpic} alt="" />

                <div className="logo mt-[15px] flex flex-col justify-center items-center gap-2 ">
                    <img className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full border border-white' src={currentUser.profilepic} alt="Tiger" />
                </div>

            </div>
            <div className='flex flex-col items-center justify-center m-2'>

                <div className="name text-white font-bold">
                    @{username}
                </div>
                <div className="name text-slate-400">
                    Let's help {username}
                </div>
                <div className="name text-slate-400">
                    {currentUser.username} has raised ₹{payments.reduce((a, b) => a + b.amount, 0)}
                </div>
            </div>

            <div className="paymets flex md:flex-row flex-col gap-5 md:w-[80%] w-full mx-auto m-5 ">
                <div className="supports text-white bg-slate-800 p-8 rounded-lg shadow-lg md:w-1/2 w-[90%] mx-auto md:mx-0">
                    <h2 className='text-xl mb-6 font-bold'>
                        Top 10 Supporters
                    </h2>


                    <ul>
                        {payments.length == 0 && <li>No Payments Yet</li>}

                        {
                            payments.map((p, i) => {
                                return <li className='p-2'>
                                    {p.name} donated <span className='font-bold'> ₹{p.amount / 100} </span> with a message " {p.message} "
                                </li>

                            })}
                    </ul>

                </div>

                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white md:w-1/2 w-[90%] mx-auto md:mx-0 ">
                    <h2 className="text-xl mb-6 font-bold">Make a Payment</h2>
                    <div className="flex  flex-col space-y-4 mb-6">
                        <input onChange={handlechange} value={paymentform.name} name='name' type="text" placeholder="Enter Name" className="flex-1 p-2 bg-gray-700 rounded-md border-none" />
                        <input onChange={handlechange} value={paymentform.message} name='message' type="text" placeholder="Enter Message" className="flex-1 p-2 bg-gray-700 rounded-md border-none" />
                        <input onChange={handlechange} value={paymentform.amount} name='amount' type="number" placeholder="Enter Amount" className="flex-1 p-2 bg-gray-700 rounded-md border-none" />
                        <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className="p-2 bg-green-500 hover:bg-green-600 rounded-md disabled:bg-slate-200 disabled:text-black" disabled={!paymentform.name || !paymentform.message || !paymentform.amount || paymentform.name.length < 3 || paymentform.amount <= 0}>Pay</button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex-1 p-2 bg-gray-700 hover:bg-gray-600 rounded-md" onClick={() => pay(1000)}>Pay ₹10</button>
                        <button className="flex-1 p-2 bg-gray-700 hover:bg-gray-600 rounded-md" onClick={() => pay(2000)}>Pay ₹20</button>
                        <button className="flex-1 p-2 bg-gray-700 hover:bg-gray-600 rounded-md" onClick={() => pay(3000)}>Pay ₹30</button>
                    </div>

                    <div className='suggest flex flex-col gap-3'>
                        <button className='Suggest button bg-green-500 w-fit mx-auto mt-6 rounded-lg px-10 py-2' onClick={() => getsuggestions()}> Suggested messages</button>

                        {suggestedMessages.map((suggestion, index) => (
                            <button className='bg-slate-950 rounded-lg py-2 cursor-pointer' key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            I
        </>



    )
}

export default PaymentsPage
