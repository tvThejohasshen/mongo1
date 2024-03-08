const express = require('express');
const cors = require ('cors');
const mongodb = require ('mongodb');

const MongoClient =mongodb.MongoClient;
const app = express();

app.use(cors());
app.use(express.json());

async function connect(uri , dbname) {
    const client = awaitMongoClient.connect(uri,{
        useUnifiedTopology: true
    });
    let db = client.db(dbname);
    return db;
}
async function main() {
    const uri = mongodb+srv://root:current5@cluster0.blqnvaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
    const db = await connect (uri,"sample_mflix");
    app.get("/", async function(req,res){
        const results = await db.collection("movies").find({}).limit(10).toArray();

        res.json({
            'movies': results
        })
    })
}

main();

app.listen(3000, function(){
    console.log("Server has started");
});
