// const demo = require("./sum")

// console.log(demo.difference(5,7))

// console.log(demo.sum(2,5) , demo.summ(5,6))


// import {main,bote} from "./sum.js"
// console.log(main(2,5) , bote(5,6))


// create server

//for start server npm run start

// const http = require('http');
// const fs = require('fs');
// const readdata = fs.readFileSync('index.html','utf-8')
//  const readdata = fs.readFileSync('user.json','utf-8')


// const data = {
//     age : 20
// }

// const server = http.createServer((req,res)=>{
//     console.log('server is created ');
//     console.log(req.url);

//     //  res.setHeader('content-type','text/html');
//     // res.end("hello");


//     //  res.setHeader('content-type','application/json')
//     //  res.end(JSON.stringify(readdata))
//      res.end(readdata)
// })
// server.listen(9090);



// const server = http.createServer();

// server.on('request',(req,res)=>{
//     res.end('<h1>answer</h1>');
// })

// server.listen(9090,()=>{
//     console.log('server running on port 9090')
// })





// //set routes
// const http = require('http');

// const readdata = require("./user.json");

// const server = http.createServer((req, res) => {
//     console.log('server is created');

//     if (req.url.startsWith("/html")) {
//         res.setHeader("content-type", "text/html");
//         res.end("<h1>hello</h1>");
//     }
//     else if (req.url.startsWith("/demo")) {
//         res.setHeader("content-type", "application/json");
//         res.end(JSON.stringify(readdata));
//     }
//     else {
//         res.end('ok more');
//     }
// });

// server.listen(9090);


//with switch case

const http = require('http');
const fs = require('fs');

const readdata = require("./product.json");
const index = fs.readFileSync('index.html','utf-8')
const products = readdata[0];
console.log(products);

const server = http.createServer((req,res)=>{
    console.log("server created");

    switch(req.url){
        case '/html':
            res.setHeader("content-type", "text/html");
            res.end("<h1>hello</h1>");
            break;

            case '/product':
                res.setHeader("content-type", "text/html");
                let modifyindex = index.replace('**title**',products.title).replace('**price**',products.price).replace('**thumbnail**',products.thumbnail)
                // res.end("<h1>hello</h1>");
                // res.end(index);
                res.end(modifyindex);
                break;

         case '/json':
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(readdata));
            break;
            default:
                res.end('404 page not found');
                break;
    }
})

server.listen(9090)



//if-else condition





