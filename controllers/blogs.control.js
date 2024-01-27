
const { blogs } = require("../models/blogs.model");

exports.getBlogs=(req,res)=>{
    res.send(blogs)
 }
