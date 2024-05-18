const fs = require('fs');

// 'r' open file or reading

// fs.open('one.txt','r+',(err,data)=>{
//     if(err)
//         console.log(err);
//     console.log('open file successfully...!',data)

// })



// write file

// const r1 = performance.now();

// const data = " \n this is demo of SYNC"
// fs.writeFileSync('one.txt',data)


const r1 = performance.now();
fs.writeFile('one.txt','this is node js.',(err,data)=>{
    if(err)
        console.log(err);
})

const r2 = performance.now();
const difference = r2-r1;
console.log(`difference between r1-r2 ${difference}`);


// appendFile

const data = "\n this is a data of append sync file."
fs.appendFile('one.txt',data,(err,data)=>{
    if(err)
        console.log(err);
    console.log('append file successfully');
})

fs.appendFileSync('one.txt',data)


// // read file

fs.readFile('one.txt','utf-8',(err,data)=>{
    if(err)
        console.log("rename file successfully");
    console.log(data);
})

//rename 
fs.rename('one.txt','two.txt',(err,data)=>
{
    if(err)
        console.log(err);
    console.log("file rename successfully",data)
})



//delete file

fs.unlink('net.txt',(err,data)=>{
    if(err)
        console.log(err);
    console.log("delete file successfully",data);
})


//close file


fs.close('more.txt',(err,data)=>{
        if(err)
            console.log(err);
        console.log('close file successfully...!',data)
    
    })



