const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_ENDPOINT, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('no connection');
})