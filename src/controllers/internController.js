const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken");
const internModel = require("../models/internModel")

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === "string")
    return true;
};

const isvalidRequest=function(requestBody){
    return Object.keys(requestBody).length >0
  }
  


const createIntern = async function(req,res){
    try{
        const requestBody=req.body
      if(!isvalidRequest(requestBody)){
        return res.status(400).send({status:false,msg:"invalid request parameter ,please provied author detail"})
      }
        let { name, email, mobile, collegeId} = requestBody
      if(!isValid(name)) return res.status(400).send({status:false, msg:"Name is required"})

      
    
    let saveData = await internModel.create(requestBody)
    return res.status(201).send({status:true, data:saveData})
}catch(err){
    console.log(err)
    return res.send({msg:err.message})
}
}

module.exports= {
    createIntern,
}