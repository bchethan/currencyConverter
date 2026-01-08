import http from 'node:http'
import 'dotenv/config'

const port = 8000;

const server = http.createServer(async(req, res)=>{
    if(req.url.startsWith('/api')){
        try{
            const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREE_CURRENCY_API}`)
            const data = await response.json()
            
            const headers = {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
            res.writeHead(200, headers)
            res.end(JSON.stringify(data))
        }catch(err){
            console.log(err)
            res.end(JSON.stringify({message:"error"}))
        }
    }else{
        res.end(JSON.stringify({message:"welcome to currency converter"}))
    }
})

server.listen(port, ()=>console.log(`Server is live at http://localhost:8000`))