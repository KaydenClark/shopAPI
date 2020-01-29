const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require("mongodb").ObjectId;
require('dotenv').config()


// Connection URL
const url = process.env.ATLAS_CONNECTION

// Database Name
const dbName = 'ShopStore';
const settings = {
    useUnifiedTopology: true
}

const newItem = (item) => {
    // Use connect method to connect to the server
    let iou = new Promise ((resolve, reject) =>{

        MongoClient.connect(url, settings, function (err, client) {
            if(err){
                reject(err)
            }
            else { 
                // console.log(list)
                console.log("Connected to server for Creation of an Item");
                const db = client.db(dbName);
                // Get the contacts collection
                const collection = db.collection('Items');
                // Insert a document
                collection.insertOne(item, function (err, result) {
                    if(err){
                        reject(err)
                    }
                    else{
                        client.close();
                        resolve("Inserted a document into the collection");
                    }
                   
                });
            } 
        })
    });
    return iou
}

module.exports = {newItem}