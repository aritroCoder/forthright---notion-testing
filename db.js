const mongoose = require('mongoose');

const MONGODB = process.env.MONGODB
// connection().catch(err => console.log(err));

module.exports = async function connection() {
    await mongoose.connect(MONGODB, { useNewUrlParser: true }, () => {
        console.log("Connected to mongo successfully");
    });
}