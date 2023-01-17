const express = require('express');
const {getEmployee} = require('../controller/get-employees');
const {getEmpById} = require('../controller/get-EmpById')
const getEmployeeDetails = express()
getEmployeeDetails.get('/get-details', async  (req, res) => {
await getEmployee(req,res)
})
getEmployeeDetails.get('/:id', async (req, res) => {
    await getEmpById(req,res)
    })
module.exports = getEmployeeDetails;