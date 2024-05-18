const fs = require('fs');

fs.writeFile('next.txt', 'this is node js.', (err, data) => {
    if (err)
        console.log(err);
    console.log("write file successfully", data),
    fs.readFile('next.txt', 'utf-8', (err, data) => {
        if (err)
            console.log("rename file successfully");
        console.log(data);
    })
    
    fs.rename('next.txt','more.txt',(err,data)=>
        {
            if(err)
                console.log(err);
            console.log("file rename successfully",data)
        })
        fs.unlink('example.txt',(err,data)=>{
            if(err)
                console.log(err);
            console.log("delete file successfully",data);
        })

})





