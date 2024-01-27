const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())


const { getBlogs } = require('./controllers/blogs.control')
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(getBlogs); 

app.use((req,res,next)=>{
    res.status(404).json({
        message:"resourse not found",
    })
 })



app.listen(port, () => {
  console.log(`Blogend ServerSide app listening on port ${port}`)
})