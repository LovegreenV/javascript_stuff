// asyncronos method

console.log('start');

const {readFile, writeFile} = require('fs');

// if we dont add utf coding we will get the buffer, add inb content and path
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
    }
    const second = result
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done');
            }
        )
    })
})
console.log('starting next project');

