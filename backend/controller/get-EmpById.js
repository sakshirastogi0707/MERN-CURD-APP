const employees = require('../models/employee')
//Search employee by id.
const getEmpById = async(req,res)=>{
const id = req.params.id;
 const emp = await employees.findById(id);
res.send(emp)
}


module.exports = {getEmpById};