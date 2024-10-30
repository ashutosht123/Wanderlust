const express=require("express")
const router=express.Router({mergeParams:true})
const wrapAsync=require("../utils/wrapAsync.js")
const expressError=require("../utils/expressError.js")
const {listingSchema,reviewSchema}=require("../schema.js")
const Review=require("../models/review.js")
const Listing=require("../models/listing.js")
const {validateReview, isLogedIn, isReviewOuthor}=require("../midlleware.js")
const { createReview, distroyReview } = require("../controllers/review.js")

router.post("/", isLogedIn ,validateReview,wrapAsync(createReview))

router.delete("/:reviewId",isLogedIn, isReviewOuthor, wrapAsync(distroyReview))

module.exports=router