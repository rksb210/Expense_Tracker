const db = require("../models/index");
const Registration = db.registration;
const bcrypt = require('bcrypt')

const logindata = async (req, res) => {
	console.log("reqqqq:", req.body);
	const { email, password } = req.body;
	const login = await Registration.findAll(
		{
			where: {
				email: email,
			},
		},
		{ raw: true },
	);
	console.log("logggginnn:", login);
	// console.log("logggginLen:", login[0].registration_id);
     
	if (login.length === 1) {
        bcrypt.compare(password,login[0].password, async (error,result)=>{
            if(result){
               await res.status(200).json({ msg: "Success", status: true, data: login[0] });		
	        } else {
		        res.json({
			    msg: "Password Not Match",
			    status: false,
		      });
	        }
         })
    }
    else{
        res.json({
            msg: "Invalid Credentials/Email Id not found",
            status: false,
          });
    }

};

module.exports = { logindata }
