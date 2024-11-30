const mongoose = require('mongoose')

main()
.then( ()=>{
    console.log("connection sucessful")
} )
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    age : Number,
})

const User = mongoose.model( "User", userSchema );




// User.find({age: {$gte:50}})
// .then((res)=>{
//   console.log(res[0].name)
// })
// .catch(err=>{console.log(err)})




// User.insertMany([
//   {name:"Tony", email:"tony@gmail.com",age:48},
//   {name:"Bruce", email:"b23@gmail.com",age:32},
//   {name:"Peter", email:"petu7@gmail.com",age:48},
// ]).then((data)=>{
//   console.log(data)
// })




// const  user2 = new User({
//   name : "EVE",
//   email : "aevem@yahho.com",
//   age :58,
// })

// user2.save().then((res) =>{
//     console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })