const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require('./models/user.model.js')
const cors = require('cors')

app.get('/test',(req,res)=>{
    res.send('Hello World')
})
app.use(cors({
    origin: "http://localhost:5173",  // Allow frontend to access backend
    methods: "GET,POST,PUT,DELETE",   // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization" // Allowed headers
}));

app.use(express.json())
app.post('/api/signup',(req,res)=>{
    const {username,password} = req.body
    const user = new User({username,password})
    user.save()
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })

})
mongoose.connect('mongodb+srv://rohith:rohith@cluster0.h0bwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
module.exports = app