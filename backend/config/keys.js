require('dotenv').config()

module.exports={
DB_URL: process.env.MONGODB_URL,
PORT: process.env.APP_PORT,
MSG: process.env.MONGODB_SUCCESS_MSG,
}
