const express=require('express')


const router=express.Router()


router.get("",(req,res)=>{
    res.send("You Have called abc route GET method")
})

router.post("",(req,res)=>{
    res.send("You Have called abc route post method")
})

router.put("",(req,res)=>{
    res.send("You Have called abc route PUT  method")
})

router.delete("",(req,res)=>{
    res.send("You Have called abc route DELETE method")
})


module.exports=router;
