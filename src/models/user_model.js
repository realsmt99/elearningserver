const mongoose = require('mongoose');

const USERENUM = ["student", "teacher", "admin"];

const userSchema = new mongoose.Schema({
FullName:{
    type: String , 
    required: true, 
    maxlength: 30
},
email:{
type: String,
required: true,
maxlength: 30,

},
avatar: { type: String },
password: { type: String, required: true },
role: { type: String, enum: USERENUM, default: USERENUM[0] },


},
{ timestamps: true }
)


const userModel = mongoose.model("user", userSchema);