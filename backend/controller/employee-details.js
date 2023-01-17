const employees = require('../models/employee')
const employee = async(req,res)=>{
const data = req.body;
const Data = await employees.findOne({ email: data.email })
if (Data != null) {
   return res.json({ msg: 'alrady exist with this email..' })
} else {
   saveItems = new employees(data)
   saveItems.save().then((res) => {
      console.log(res)
   }).catch((err) => {
      console.log(err)
   })
}

}
module.exports = {employee};