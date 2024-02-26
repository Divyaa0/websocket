require('dotenv').config()
const express=require('express')
const http=require('http');
const {Server}=require('socket.io')
const cors=require('cors');
const app=express();
app.use(cors());

// creating instance of server
const ser̥ver=http.createServer(app)
console.log("🚀 ~ ser̥ver:", ser̥ver)
app.use(cors());

const io=new Server(ser̥ver,{cors:
{origin:'http://localhost:3000',
methods:['GET','POST'],
transports:['websocket']}})

// LISTEN EVENTS WHEN CLIENT CONNECTS VIA SOCKET.IO CLIENT
io.on('connection',(socket)=>{
console.log(`user connected with socket and id is ${socket.id}`)
// LISTEN 'JOIN CHAT' EVENT
socket.on('join_room', (data)=>{console.log("join chat entered by user " , data)})
})
ser̥ver.listen(8000,()=>{console.log("user connected")})