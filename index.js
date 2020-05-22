const express = require('express')
const bodyParser=require('body-parser')
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const PORT=process.env.PORT ||5000

const film_data=[
    {
        id:1,
        name:"Joker",
        genre:"Drama",
        duration:"2h 2m"
    },
    {
        id:2,
        name:"Andhadhun",
        genre:"Romance",
        duration:"1h 45m"
    },
    {
        id:3,
        name:"Aakrosh",
        genre:"Action",
        duration:"2h 13m"
    },
    {
        id:4,
        name:"Badhaai Ho",
        genre:"Comedy",
        duration:"1h 54m"
    },
    {
        id:5,
        name:"Aashiqui",
        genre:"Romance",
        duration:"1h 45m"
    },
    {
        id:6,
        name:"Aashiqui 2",
        genre:"Romance",
        duration:"2h 3m"
    }
]


app.get('/film_names',(req,res,next)=>{

    let { userInput } = req.query;
    var regex = new RegExp(userInput.toLowerCase(), 'g');

    let answer=film_data.filter(elm=>{
        return elm.name.toLowerCase().match(regex)!=null;
    })

    return res.json({result:answer})
})

app.get('/film_info',(req,res,next)=>{

    let { films } = req.query

    let answer=film_data.filter(elm=>{
        return films.indexOf(elm.name)!=-1
    })

    return res.json({result:answer})
})

app.listen(PORT,()=>console.log(`listening on ${PORT}`))