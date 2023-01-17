const User = require('../models/user');

exports.postAddUser= async(req,res,next)=>{
    try{
        console.log(req.body);
        if(!req.body.phonenumber){
            throw new Error ('number is mandatory');
        }
        const name= req.body.name;
        const email= req.body.email;
    
        const data= await User.create({name:name, email:email})
        console.log(data);
        res.status(200).json({newUserDetail : data});
    }
    catch(error){
        res.status(500).json({
            error:error
        })
    }
      
}

exports.getUser=async(req, res, next)=>{
    try{
        const user = await User.findAll();
        res.status(200).json({allUsers : user});
    }
    catch(error){
        console.log(' get user is failing', JSON.stringify(error));
        res.status(500).json({error:error})
    }
}

exports.deleteUser=async(req,res,next)=>{
    try{
        const uId = req.params.id;
        await User.destroy({ where : { id : uId}});
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}