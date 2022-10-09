import mongoose, { Types } from "mongoose";

const OrderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "foods"
    },
    ordersDetails : [
        {
            food :
            [
                {
                    details : {type:mongoose.Types.ObjectId, ref: "foods"},
                    quantity : {type : String, required: true},
                },
            ],
            paymode : {type: String , required:true},
            status : {type : String, default:"Placed"},
            paymentDetails : {
                itemsTotal : {type :Number, required:true},
                promo : {type :Number, required:true},
                tax  : {type :Number, required:true},
                razorpay_payment_id : {type :Number, required:true},
            }
        }
    ]
},
{
    timestamps: true
}
)

export const OrderModel = mongoose.model("orders",OrderSchema)