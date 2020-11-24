var express=require('express')
var router=express.Router()
const { signup,signin,signout } = require('../controllers/auth');
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
module.exports=router
