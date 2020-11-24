var express=require('express')
var app=express();
require('dotenv').config()
var authRoutes=require("./routes/auth")
var userRoutes=require("./routes/user")
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

/////////////////////////////////////////////////
const cors=require('cors');
var morgan=require('morgan')
var bodyParser=require('body-parser')
var cookieParser=require('cookie-parser')
var expressValidator=require("express-validator")
//////////////////////////////////////////////////////


var mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URI,{
  useCreateIndex: true,
  useNewUrlParser: true

}).then(()=>{console.log("database connected")})

var port=process.env.PORT||8000
///////////////////////////////////////////
app.use(morgan('dev'))
app.use(bodyParser.json())
//app.use(cookieParser())
app.use(expressValidator())
app.use(cors());
//////////////////////////////////////


app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
