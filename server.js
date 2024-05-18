const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('server is created');
//     res.end('hello');

// })

// server.listen(1234);


// const data = http.createServer((req,res)=>{
//     console.log('server is created')
//     res.end('<h1>answer</h1>');

// })

// data.listen(9091);


// const answer = http.createServer((req,res)=>{
//     console.log('server is created')
//     res.end('<h1>more</h1>');

// })

// answer.listen(9092);

// const more = http.createServer((req,res)=>{
//     console.log('server is created')
//     res.end('<h1>ok</h1>');

// })

// more.listen(9093);



const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('<h1>answer</h1>');
})

server.listen(9094,()=>{
    console.log('server running on port 9094')
})

const more = http.createServer();

more.on('request',(req,res)=>{
    res.end('<h1>hello</h1>');
})

more.listen(9095,()=>{
    console.log('server running on port 9095')
})




