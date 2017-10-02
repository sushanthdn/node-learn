var http = require('http');
var url = require('url');
var dt = require('./firstmodule'); // Import ur module

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    
    res.write(req.url); // Read the request url
    var q = url.parse(req.url,true).query;
    res.write("<div>Name "+ q.name + "</div>");
    res.write("Age "+ q.age);

    res.write("<div>The date is "+ dt.myDateTime() + "</div>"); // use the imported function
    res.end(dt.getMyName());
}).listen(8080);