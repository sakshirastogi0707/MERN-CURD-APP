const express = require('express');
const Joi = require('joi');
const {employee} = require('../controller/employee-details')
const employeeDetails = express()
//user Signup-user route.
employeeDetails.post('/employee-details', async (req, res) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(50)
            .required(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        skills: Joi.string()
            .max(100)
            .required(),
        profile: Joi.string()
            .required(),
        address: Joi.string()
            .max(100)
            .min(3)
            .required(),
        designation: Joi.string()
            .required(),
        salary: Joi.string()
            .required(),
        experience: Joi.string()
            .required(),
            phone: Joi.number()
         
    })
    try {
        let valiDateUser = schema.validate(req.body)
        if (!valiDateUser.error) {
            await employee(req,res)
           res.status(200).send()
        } else {
            res.send(valiDateUser.error.details[0].message)
        }
    }
    catch (err) {
        console.log(`err`, err)
        res.send(err)
    }
})
module.exports = employeeDetails;

