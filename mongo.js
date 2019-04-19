import mongoose from 'mongoose';
import models from 'modelData';

const databaseName = "testdb";
const collectionName = "testcol1";
const options = {
    poolSize: 4,
    useNewUrlParser: true,
    reconnectTries: 30
};
connectionurl = "mongodb://mongoapipr:xxx==@mongoapipr.documents.azure.com:10255/" + databaseName + "?ssl=true&replicaSet=globaldb";
connectionurl1 = "mongodb://prcosmostest12:xxxxx==@prcosmostest12.documents.azure.com:10255/" + databaseName + "?ssl=true&replicaSet=globaldb";


const connectDb = () => {
    return mongoose.connect(connectionurl1, options);
};

async function createDatabaseThroughput(con) {
    await con.db.command({ customAction: "CreateDatabase", offerThroughput: 1000 });
    await con.db.command({ customAction: "UpdateDatabase", offerThroughput: 1200 });
    var test = await con.db.command({ customAction: "GetDatabase" });
    console.log(test.provisionedThroughput);
}

async function createDatabase(con) {
    con.db.command({ customAction: "CreateDatabase" });
}

export { models, connectDb };