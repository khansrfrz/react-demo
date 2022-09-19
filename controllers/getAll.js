const express=require('express')
const router=express.Router()
const MgrDetails=require('../models/MgrDetails')


router.get('/getall',async(req,res)=>{
    try {
        const result=await MgrDetails.find({})
        res.send(result)
        
    } catch (e) {
        res.send("some error occured")
        
    }
})


module.exports=router