if(process.env.NODE_ENV !="production"){
    require('dotenv').config()

}
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js")
const path=require("path");
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
const wrapAsync=require("./utils/wrapAsync.js")
const expressError=require("./utils/expressError.js")
const {listingSchema,reviewSchema}=require("./schema.js")
const Review=require("./models/review.js")

const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js")
const user=require("./routes/user.js")

const session=require("express-session")
const MongoStore = require('connect-mongo');
const flash=require("connect-flash")
const passport=require("passport")
const LocalStretegy=require("passport-local")
const User=require("./models/user.js")


// const MONGO_URL="mongodb://127.0.0.1:27017/mainProject";
const dburl=process.env.ATLASDB_URL

async function main() {
    await mongoose.connect(dburl);
} 
 
main().then(()=>{
    console.log("connect to db");
}).catch((err)=>{
    console.log(err);
})

app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))

app.get("/", (req, res) => {
  res.redirect("listings/index.ejs"); // or `res.render("home");` if you have a homepage view
});

// app.get("/",(req,res)=>{
//       res.send("hii, im root");
//  })

let store=MongoStore.create({
    mongoUrl:dburl,
    crypto: {
      secret: process.env.SECRET
    },
    touchAfter:24*3600,
  })
  store.on("error",(err)=>{
    console.log("ERROR IN MONGO SESSION STORE",err)
  })
  const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
      expires:Date.now()+7*24*60*60*1000,
      maxAge:7*24*60*60*1000,
      httpOnly:true
    }
  }

app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStretegy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success")
    res.locals.error=req.flash("error")
    res.locals.currUser=req.user 
    next()
})


app.use("/listings",listings)
app.use("/listings/:id/reviews",reviews)
app.use("/",user)

app.all("*",(req,res,next)=>{
    next(new expressError(404,"Page not found"))
})

app.use((err,req,res,next)=>{
    let {statuscode=500,message="Something went wrong"}=err
    res.render("error.ejs",{message})
})
app.listen(8000,()=>{
    console.log("server is listing on port 8000")
})