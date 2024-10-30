const mongoose=require("mongoose");
const initDdata=require("./data.js");
const Listing=require("../models/listing.js")

const MONGO_URL="mongodb://127.0.0.1:27017/mainProject";
async function main() {
    await mongoose.connect(MONGO_URL);
} 
 
main().then(()=>{
    console.log("connect to db");
}).catch((err)=>{
    console.log(err);
})

const initDb=async()=>{
    await Listing.deleteMany({});
    initDdata.data=initDdata.data.map((obj)=>({...obj, owner:"671cb9522156dd4c6b534b49"}))
    await Listing.insertMany(initDdata.data);
    console.log("data was initialized");
}
initDb();