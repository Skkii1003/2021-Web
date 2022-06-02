const mongoose = require('mongoose');
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功……')
})
mongoose.connect('mongodb://localhost/user',{
    useNewUrlParser:true,
});


const User = mongoose.model('User',new mongoose.Schema({
    username:{type: String, unique: true},
    password:{type: String, set(val){
        return require('bcrypt').hashSync(val,10);
    }},
}));

//User.db.dropCollection('users');
module.exports = {User};