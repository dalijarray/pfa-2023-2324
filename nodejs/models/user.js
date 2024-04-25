const mongoose = require('mongoose');

<<<<<<< HEAD
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String // Assuming the image will be stored as a URL
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
=======
const User = new mongoose.model('User',{

name: {
    type: String
},
lastname:{
    type:String
},
age:{
    type:Number
},
email:{
    type:String
},
password:{
    type:String
}
})
module.exports= User;

>>>>>>> origin/master
