const express = require('express');
const app = express();
const mg = require('mongodb').MongoClient;
const url = "mongodb+srv://marek:pieczarek@cluster00.hve3n.mongodb.net/table?retryWrites=true&w=majority";

const dbname = "table";

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.all('*', (req, res) => {
    mg.connect(url, {}, (error,client) => {
        if (error) {
            console.log("Błąd ,",error);
        }
    
        const db = client.db(dbname);
        db.collection('people').find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).json(result);
          });
   
    });
});

app.listen(3000, () => {
    console.log("Serwer chodzi!");
});