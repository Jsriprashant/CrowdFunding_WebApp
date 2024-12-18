
import React from 'react'
import PaymentsPage from '@/components/PaymentsPage'
import { fetchPayments, initiate, fetchuser } from '@/actions/userActions'
import { notFound } from 'next/navigation'


const page = async ({ params }) => {

    const checkUser = async () => {

        let u = await fetchuser(params.username)
        if (!u) {

            return notFound()
        }

    }
    await checkUser()

    return (
        <PaymentsPage username={params.username} />

    )
}

export default page

export async function generateMetadata({ params }) {
    return {
        title: params.username,

    }
}
