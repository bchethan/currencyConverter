import http from 'node:http'
import 'dotenv/config'

const port = 8000;

const server = http.createServer(async(req, res)=>{
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREE_CURRENCY_API}`)
    const data = await response.json()
    res.end(data)
})

server.listen(port, ()=>console.log(`Server is live at http://localhost:8000`))