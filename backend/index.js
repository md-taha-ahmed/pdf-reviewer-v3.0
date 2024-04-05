import app from "./server";
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000;

MongoClient.connect(process.env.MONGODB_CONNECTION_STRING).catch(err => {
    console.log(err);
    // process.exit(1)
})
    .then(async client => {
        app.listen(port, () => {
            console.log(`listing at ${port}`)
        })
    })
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
//     console.log("connected to the database");
//     app.listen(port, () => {
//         console.log("server started");
//     });
// }).catch(console.error)