import fs from 'node:fs/promises'
import path from 'node:path'
import _ from "lodash"
import { createServer } from 'node:http'

const port = 8000

const __dirname = import.meta.dirname
const dataPath = path.join(__dirname,'data','data.json')

const server = createServer(async (req,res)=>{
    
    const jsonData = await fs.readFile(dataPath,'utf8')

    res.writeHead(200, {'content-type':'application/json','access-control-allow-origin':'*'})
    res.end(jsonData)
})

server.listen(port, ()=>console.log(`Server is live at http://localhost:8000`))