const express = require("express");
const router  = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//schema validation middleware for listings
const validateListing = (req, res, next) => {
    console.log(req.body);
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

// index & create route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, 
    
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingController.createListing));
// New form
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show, update & delete route
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .patch(isLoggedIn, isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, wrapAsync(listingController.deleteListing));

// Edit form
router.get("/:id/edit", isLoggedIn,  isOwner, wrapAsync(listingController.renderEditform));

module.exports = router;