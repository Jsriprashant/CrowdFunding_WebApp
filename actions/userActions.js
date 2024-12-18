"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import Razorpay from "razorpay"
import connectDb from "@/app/db/connectDb"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET });
    let options = {
        amount: Number.parseInt(amount), // amount in the smallest currency unit
        currency: "INR",
    };
    let x = await instance.orders.create(options);
    await Payment.create({ oid: x.id, to_user: to_username, message: paymentform.message, name: paymentform.name, amount: amount });
    return x;
};

export const fetchuser = async (username) => {
    await connectDb();
    let user = await User.findOne({ username: username });
    user = JSON.parse(JSON.stringify(user))

    return user;
};

export const fetchPayments = async (username) => {
    await connectDb();
    let payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10);
    payments = JSON.parse(JSON.stringify(payments))

    return payments;
};

export const updateUser = async (data, oldusername) => {
    try {
        await connectDb();


        // Convert form data to an object
        let ndata = Object.fromEntries(data);



        // Check if the new username is different and already exists
        if (oldusername !== ndata.username) {

            let existingUser = await User.findOne({ username: ndata.username });
            if (existingUser) {

                return { error: "Username already exists" };
            }
            else {
                await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })

            }


        }
        let updatedUser = await User.findOneAndUpdate(
            { email: ndata.email },
            ndata,
            { new: true, runValidators: true, context: 'query' } // Ensure updated document is returned
        );

        if (!updatedUser) {

            return { error: "User not found" };
        }


        return { success: true, user: updatedUser };


    } catch (error) {
        console.error("Error updating user:", error);
        return { error: "Error updating user" };
    }
    // Update user details

};