const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async(req, res) => {

    console.log("POST route hit");

    let listing = await Listing.findById(req.params.id);

    console.log("Before push:", listing.reviews);

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    console.log("After push:", listing.reviews);

    await newReview.save();
    await listing.save();

   req.flash("success", "Thankyou for adding a review!!");

    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!!");
    res.redirect(`/listings/${id}`);
}