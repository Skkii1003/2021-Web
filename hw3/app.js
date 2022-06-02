const {User} = require('./models')

const express = require('express');
const path = require('path');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', async(req, res)=> {
    const users = await User.find()
    res.send(users);
});

app.post('/api/register', async(req, res) => {
    //console.log(req);
    var username = String(req.body.username);
    var password = String(req.body.password);
    console.log(username, password);

    const user1 = await User.findOne({
        username: req.body.username,
    })
    if(user1){
        return res.status(422).send({message: 'Username already exists!'})
    }

    const user = await User.create({
        username,
        password,
    });
    res.send(user);
    
});

app.post('/api/login', async(req, res) => {
    const user = await User.findOne({
        username: req.body.username,
    })
    if(!user){
        return res.status(422).send({message: 'Username does not exist!'})
    }
    
    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password,user.password);
    if(!isPasswordValid){
        return res.status(422).send({message:'Password is incorrect!'});
    }

    res.send(user);
});

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});