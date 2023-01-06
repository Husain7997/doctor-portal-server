const express =require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port= process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', async(req, res) =>{
    res.send('doctors portal server is running')
})



const uri = "mongodb+srv://trust-kitchens:<password>@cluster0.molyssj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port, ()=>console.log(`doctor portal running ${port}`));