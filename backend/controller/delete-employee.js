const employee = require('../models/employee');
    // const Data = await product.find({})
  

    const Delete = async (req, res) => {
       try {
          data = req.body;
          const id = req.params.id;
          const result = await employee.findByIdAndDelete(id, (err, docs) => {
             if (err) {
                console.log(err)
             }
             else {
                ("Deleted : ", docs);
             }
          })
          res.send('document has been deleted', result)
       }
       catch (err) {
          console.log(err)
       }
    }
module.exports = { Delete }