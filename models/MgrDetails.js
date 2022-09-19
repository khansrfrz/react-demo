const mongoose=require('mongoose')


mongoose.connect(mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://khansrfrz:hesoyam123.zdsqd.mongodb.net/?retryWrites=true&w=majority')

.then((res) => console.log('Connected to database'))
.catch((err) => console.log('Error in connection'))

).then((res)=>console.log('db connected')).catch((err)=>console.log(err))

const MgrDetails=mongoose.model('MgrDetails',{
    id:String,
    fname:String,
    phone:Number,
    email:String
})


//create or insert details
/* 
const mgr= new MgrDetails({
    id:"1",
    fname:"walter",
    phone:258796314,
    email:"walter@gmail.com"
})

mgr.save().then((res)=>console.log('mgr is created')).catch((err)=>console.log('mgr not created',err))
*/

module.exports=MgrDetails