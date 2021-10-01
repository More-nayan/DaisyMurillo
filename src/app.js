require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
require('./db/conn');
const Register = require('./models/murilloSchema');
// const { equal } = require('assert');

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path)

app.get('/', (req, res)=>{
    res.render("index");
})

app.post('/register', async(req, res)=>{
    try {
        
        const registerMurillo = new Register({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message
        })

        const registered = await registerMurillo.save();
        res.send('your response saved successfully')

    } catch (error) {
        res.send('oops! error occurs', error);
    }
})



app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})