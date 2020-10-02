const mongoose = ('mongoose')

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    credit:{
        type:long
    }
})
module.exports = User