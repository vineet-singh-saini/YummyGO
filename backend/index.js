const express = require ('express');
const app = express();
const port = 3001;
const {Server} = require ('socket.io');
const http = require ('http');
const cors = require ('cors');
const path = require ('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
app.use(cors());
const io = new Server(server,{
    cors: {
        origin: "http://localhost:5173", 
    methods: ["GET", "POST"]
    },
});

const agents = {};
const deliveryAgentInfo = {};


io.on('connection',(socket)=> {
    console.log('a new client connected');

    socket.on('agentLocation',({agentId,lat,lng,name,phone,ratings}) => {
        console.log('Received:', { agentId, lat, lng, phone, name, ratings });

        agents[agentId] = {lat,lng};
        deliveryAgentInfo[agentId] = {name,phone,ratings}
        io.emit('updatedLocation',{agentId,lat,lng});
        io.emit('agentInfo',{agentId,name,phone,ratings} );
    });

    

    socket.on('disconnect',()=> {
        console.log(`Client ${socket.id} disconnected`);
    })
})


app.get ('/',(req,res) => {
    res.send ('Hello World!');
});

server.listen(port , (req,res)=> {
    console.log (`Server is running on port ${port}`);
})