var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {

        if(err){
            res.end('Unable to open the file');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();

        // fs.appendFile('log.txt', 'Wrote to log file', function (err) {
        //     if (err) throw err;
        //   });
    });
}).listen(8080);