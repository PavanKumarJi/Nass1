const http = require('http');
http.createServer(function (req, res) {
    const jsonData={name:"pavan"};
    res.write("<h1>hello node js server🙂</h1>")
    res.write(JSON.stringify(jsonData));
    res.end();
})
.listen(8001);