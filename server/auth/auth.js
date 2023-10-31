const express = require("express");
const router = express.Router();
const passport = require("passport")
router.get("/google-auth",(req,res)=>{
    res.send("google auth");
})
