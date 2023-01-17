const employees = require('../models/employee')
const getEmployee = async(req,res)=>{
const getEmp = await employees.find()

   res.send(getEmp)
}
module.exports = {getEmployee};