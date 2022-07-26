const Menu=require('../model/menu')


exports.getAllMenu=(req,res)=>{
    Menu.find()
    .then(
        result=>
        res.status(200).json({
            message:"Menu fetches succssefully",
            date:result
        }))
        .catch(error=>
            res.status(500).json({
                message:"error occured in DB",
                error:error
            }))
    }
    exports.getMenuByFilter=(req,res)=>{
        let filter={}
        if(req.body.isVeg){
            filter.isVeg=req.body.isVeg
        }
        console.log(filter)
        Menu.find(filter)
        .then(
            result=>{
                console.log(result)
                res.status(200).json({
                    message:"Menu fetched successfully ",
                    data:result
                })
            }
        )
        .catch(error=>{
            res.status(500).json({
                message:"error in database",error:error
            })
        }
    )}