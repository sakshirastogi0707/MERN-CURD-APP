const employee = require('../models/employee')
 const update = async (req, res) => {
    // const Data = await product.find({})
    const data = req.body;
    console.log(data)    
    const id = req.params.id 
    const options = { new: true }
    const result = await employee.findByIdAndUpdate(id, data, options)
    res.send(result)
    
} 
module.exports = { update }