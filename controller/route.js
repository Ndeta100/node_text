const fs=require('fs')
const data2=fs.readFileSync('words.json','utf-8',()=>{

})
const words=JSON.parse(data2)
console.log(words)
exports.addWord=(req, res)=>{
    const data=req.params
    const word=data.word
    let score =data.score
    let reply
    if(!score){
        reply={
            msg:'Score is required'
        } 
    }else{
        words[word]=score*1
        const data4=JSON.stringify(words, null, 2)
        fs.writeFile('words.json', data4, (err)=>{
            console.log(err)
        })
         reply={
            msg:'Thank you for your word'
        }
    }
    
    
    
    res.send(reply)
}
exports.searchWord=(req,res)=>{
let word=req.params.word
let reply
if(words[word]){
    reply={
       status:'found',
       word:word,
       score:words[word] 
    }
}else{
    
    reply={
        status:'Not found',
        word:word      
     }
}
res.send(reply)
}
exports.sendAll=(req,res)=>{
res.send(words)
}