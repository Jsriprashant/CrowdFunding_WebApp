import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDb from "@/app/db/connectDb";
import Payment from "@/models/Payment";

export const POST = async (req) => {
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check if the razorpay id is present or not in the server

    let p = await Payment.findOne({ oid: body.razorpay_order_id })

    if (!p) {
        return NextResponse.json({ success: false, message: "order id not found" })
    }

    // verify the payment

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, process.env.KEY_SECRET)

    if (xx) {
        const updated_payment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updated_payment.to_user}?paymentdone=true`)
    }
    else {
        return NextResponse.json({ success: false, message: "Not validated" })

    }


}
