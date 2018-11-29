let express = require('express');
let app = express();

let router = require('./route/route');
let http = require('http').Server(app);
let socket =require('socket.io')(http);
let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    database : 'user',
    user     : 'root',
    password : 'root',
//    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});
/*
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});
*/
//We are setting up our static
app.use(express.static(__dirname + "/static"));

//xontrol function serving the URL > /api
app.get('/api', router.getAllMessages);

app.get('/api/messages/:name', router.myGetSpecificUserHandler);

//connection.end();

app.listen(8083);
