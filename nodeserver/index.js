 const http = require("http"); // http module for http method request.
 const fs = require("fs"); // file system module.
 const path = require("path"); // path defining module.
 const url = require("url"); // url module.
 const hostname = "localhost"; // name of the localhost.
 const port = 8081; // port on which localhost is running.

 const server = http.createServer((req, res) => {
    console.log(req.headers);
    console.log('request for' + req.url + 'by method' + req.method)
    if (req.method == 'GET') {
        var fileUrl;
        if(req.url == "/"){
            fileUrl = "/index.html";
        } else {fileUrl = req.url};
        var filePath = path.resolve('./public' + fileUrl);
        var fileExt = path.extname(filePath);
        if (fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-type', "text/html");
                    res.end('<html> <body> <h1> error 4040' + req.url  + 'does not exists</h1> </body> </h1>');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-type', "text/html");
                    fs.createReadStream(filePath).pipe(res);
                    }
                });
        } else{
            res.statusCode = 404;
            res.setHeader('Content-type', "text/html");
            res.end('<html> <body> <h1> error 4040' + req.url  + ' not html  file</h1> </body> </h1>');
            }
    } 
    else{}
 });

 server.listen(port, hostname, () => {   // server listening on port 8081
    console.log(`Server is runnig at http://${hostname} : ${port}`);
 });