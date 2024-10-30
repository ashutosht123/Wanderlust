const express=require("express")
const router=express.Router()
const User=require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const passport = require("passport")
const { saveRedirectUrl } = require("../midlleware")
const { signup, rendireSignupForm, rendireLoginForm, login, logout } = require("../controllers/user")

router.route("/signup")
.get(rendireSignupForm)
.post(wrapAsync(signup))

router.route("/login")
.get(rendireLoginForm)
.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}) ,login)

router.get("/logout",logout)

module.exports=router

