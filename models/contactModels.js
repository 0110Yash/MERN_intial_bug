const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name: {
        type:String,
        required: [true,"PLease add the contact name"],
    },
    email: {
        type:String,
        required: [true,"PLease add the contact emai"],
    },
    phone: {
        type:String,
        required: [true,"PLease add the contact phone number"],
    },
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Contact",contactSchema);