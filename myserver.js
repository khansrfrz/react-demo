const express=require('express')
const server=express()
const SearchMgr=require('./controllers/SearchMgr')
const DeleteMgr=require('./controllers/DeleteMgr')
const path=require('path')
const CreateMgr=require('./controllers/CreateMgr')
const getAll=require('./controllers/getAll')
const cors=require('cors')
const bp=require('body-parser')
const favicon = require("serve-favicon");
server.use(favicon(path.join(__dirname,'client', "build", "favicon.ico")));
server.use(express.static(path.join(__dirname,'/client', "build")));


server.use(bp.json())
server.use(cors())
server.use('/',SearchMgr) 
server.use('/',DeleteMgr)
server.use('/',CreateMgr)
server.use('/',getAll)

server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname,'client', "build", "favicon.ico"));
});

const port=3001;
const host = '0.0.0.0';
server.listen(process.env.PORT||port,host, () => console.log('server started'))

