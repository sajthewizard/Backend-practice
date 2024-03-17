const http= require('http')

const fs=require('fs')


const sevrer=http.createServer((req,res)=>{

  if(req.url=='/'){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<p> Welcome to the Full Stack Webdevelopment</p>')
    res.end()

  }
  
  else if(req.url=='/read'){
    fs.readFile('text.txt',(err,data)=>{
if (err){
    console.log('error occured')
}
else{
    res.write(data)

res.end()}
    })
  }
  else   if(req.url=='/append'){
    
    fs.appendFile('text.txt', '  No! It Will Be Full Not Pull ! 😑.', (err) =>{
        if (err) {
            console.log('Updated!');
        }
        else{
            rs.end()
        }
       
      });

  }
  else   if(req.url=='/delete'){
    
    fs.unlink('second.txt', (err) =>{
        if (err) {
            console.log('Updated!');
        }
        else{
            rs.end()
        }
       
      });

  }
  else if(req.url=='/write'){
    fs.readFile('text.txt',(err,data)=>{
if (err){
    console.log('error occured')
}
else{
    fs.writeFile('second.txt',data,(err)=>{
        if (err){
            console.log('error occured')
        }
        else{
            res.write('data written successfully')
            res.end()
        }

    })

res.end()}
    })
  }

})


const PORT=5000;
sevrer.listen(PORT)
console.log(`server is running at port ${PORT}`)