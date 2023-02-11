const express=require('express')
const path=require('path')

const contatusController=require('../controllers/contactus')

const contactusRouter=express.Router();

contactusRouter.get('/contact-us',contatusController.getContactus)

module.exports=contactusRouter;