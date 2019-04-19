


var con = mongoose.connection;
con.on('error', (error) => { console.log("error") });
con.once('open', () => {
    console.log("connection successful, total => " + mongoose.connections.length)
    // createDatabaseThroughput();
});