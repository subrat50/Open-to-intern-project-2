const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken");
const collegeModel = require("../models/collegeModel")


const createCollege = async function(req,res){
    let data = req.body
    let saveData = await collegeModel.create(data)
    return res.status(201).send({status:true, data:saveData})
}

const getCollegeDetails = async function(req,res){
    // let responceBody = {}
    let query = req.query
    // console.log(req.query)
    let getDetails = await collegeModel.findOne(query).select({name:1, fullName: 1, logoLink: 1, _id:1})
    let collegeDetails = await collegeModel.findOne(query).select({name:1, fullName: 1, logoLink: 1, _id:0})


    let internDetails = await internModel.find({collegeId:getDetails._id}).select({name:1, email: 1, mobile: 1})

    // collegeDetails.interns = internDetails
    // console.log(internDetails)
    // getDetails.interns = internDetails
    // let newDetails = collegeDetails.$push({internDetails})
    return res.send({data:newDetails})
}


module.exports= {
    createCollege,
    getCollegeDetails
}