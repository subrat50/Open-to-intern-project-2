const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken");
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const createCollege = async function (req, res) {
    let data = req.body
    let saveData = await collegeModel.create(data)
    return res.status(201).send({ status: true, data: saveData })
}

// const getCollegeDetails = async function(req,res){
//     // let responceBody = {}
//     let query = req.query
//     // console.log(req.query)
//     let getDetails = await collegeModel.findOne(query).select({name:1, fullName: 1, logoLink: 1, _id:1})
//      let collegeDetails = await collegeModel.findOne(query).select({name:1, fullName: 1, logoLink: 1, _id:0})


//      let internDetails = await internModel.find({collegeId:getDetails._id}).select({name:1, email: 1, mobile: 1})
//        let allDetails=await 
//     // collegeDetails.interns = internDetails
//     // console.log(internDetails)
//     // getDetails.interns = internDetails
//      let newDetails = collegeDetails.push({internDetails})
//     //let interns = await internModel.find({collegeId : req.query.collegeId}).select({name:1, email: 1, mobile: 1})

//     //return res.status(200).send({status:true, Data:{ getDetails,interns}})

//      return res.send({data:newDetails})
// }
const getCollegeDetails = async function (req, res) {

    let query = req.query

    let getDetails = await collegeModel.findOne(query).select({ name: 1, fullName: 1, logoLink: 1, _id: 1 })
    //let collegeDetails = await collegeModel.findOne(query).select({name:1, fullName: 1, logoLink: 1, _id:0})
    let collegeId = getDetails._id

    let internDetails = await internModel.find({ collegeId: collegeId }).select({ name: 1, email: 1, mobile: 1 })
    let name = getDetails.name;
    let fullName = getDetails.fullName;
    let logoLink = getDetails.logoLink;

    let collegeData = {
        name: name,
        fullName: fullName,
        logoLink: logoLink,
        interns: internDetails
    }

    return res.send({ data: collegeData })
}


module.exports = {
    createCollege,
    getCollegeDetails
}