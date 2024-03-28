const db = require("../models/index");
const Registration = db.registration;
const bcrypt = require('bcrypt')

const addCustomer = async (req, res) => {
    // console.log("req.body:", req.body);
    const { name,email,password } = req.body;
    const check_email = await Registration.findAll({
      where: {
        email: email,
      },
    });
    // console.log("check:", check_email.length);
    if (check_email.length >= 1) {
      res.json({ msg: "Email Id already exist", status: true, data: [] });
    } else {
        const saltrounds = 10
        bcrypt.hash(password,saltrounds,async(err,hash)=>{
            console.log(err)
            const registration = await Registration.create({name,email,password:hash});
            res
              .status(200)
              .json({
                msg: "Registration Successfull",
                data: registration,
                status: false,
              });           
        })     
    }
  };

module.exports = {addCustomer}