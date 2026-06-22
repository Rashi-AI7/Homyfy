const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a33cbd71f404638edd19bbf",
    }))
    await listing.insertMany(initData.data);
    console.log("data was initalised");
}

initDB();