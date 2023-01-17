const express = require('express')
const {Delete} = require('../controller/delete-employee')
 const deleteDetails = express();
deleteDetails.delete('/delete/:id', async (req, res) => {
await Delete(req,res)
})
module.exports = deleteDetails;