require('cors')
const exp = require('express')
const { success, error } = require('consola')
require('mongoose')
require('joi')
require('./config/mongo_conn')
const { PORT } = require('./config/keys')
require('./models/employee')
const app = exp()
app.use(exp.json())
require('./utils/middlware')(app)
app.listen(PORT, () => {
    success({ measage: `Your port is runing on ${PORT}` })
})
module.exports = app;

