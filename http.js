const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>
{
    const data=fs.readFileSync('demo.txt','utf-8')
    if(req.url=='/')
    {
        res.write(data)
    }
    else if(req.url=='/about')
    {
        res.write('This is about view')
    }
    else if(req.url=='/contact')
    {
        res.write('This is contact view')
    }
    res.end()
})
server.listen(2000)