// 1. import our dependencies 
const express = require("express")
const cors= require("cors")
const { faker } = require("@faker-js/faker")

// 2. institate our express server
const app = express() //calling express function and storing it inside app
const PORT = 8000 //defining port number

// 3. setup middleware
app.use(express.json())// allows us to recieve json files and set up post methods
app.use(express.urlencoded({ extended: true} ))
app.use(cors())// to accept request from others

// 4. define our endpoints
app.get("/api", (request, response)=> {
    response.json("HELLO WORLD")
})

app.get("/api/hello", (req, res)=> {
    res.json("HELLO AGAIN")
})

app.get("/api/recipes/:recipe_id", (req, res)=> {
    console.log(req.params.recipe_id)
    res.json(req.params.recipe_id)
})

app.post("/api", (req, res)=> {
    console.log(req.body)
    res.json(req.body)
    //res.json("POST REQUEST RECEIVED")
})




    // adding faker api
    // create api route that returns a new user
app.get("/api/users/new", (req, res)=> {
    let user_obj = {
        UserName:faker.internet.userName(),
        firstName:faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        phonenumber: faker.phone.phoneNumber() ,
        _id:faker.datatype.uuid()
    }
    res.json(user_obj)
})  

// create api route that returns a new company
app.get("/api/companies/new", (req, res)=>{
    let company_obj ={
        _id:faker.datatype.uuid() ,
        name: faker.company.companyName(), 
        address:faker.address.buildingNumber()  , 
            street:faker.address.street() , 
            city: faker.address.cityName() , 
            state: faker.address.state(),
            zipCode: faker.address.zipCode() ,
            country: faker.address.county() 
    }
    res.json(company_obj)
})

// create api route that returns a new user and company
app.get("/api/user/company", (req, res)=>{
    let user_obj ={
            UserName:faker.internet.userName(),
            firstName:faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password:faker.internet.password(),
            phonenumber: faker.phone.phoneNumber() ,
            _id:faker.datatype.uuid()
    }
    let company_obj ={
        _id:faker.datatype.uuid() ,
        name: faker.company.companyName(), 
        address:faker.address.buildingNumber()  , 
            street:faker.address.street() , 
            city: faker.address.cityName() , 
            state: faker.address.state(),
            zipCode: faker.address.zipCode() ,
            country: faker.address.county() 
    }
    // can only return one so must put in { and separate by comma}
    res.json({user_obj, company_obj})
})    


// 5. run your express server
app.listen(PORT, ()=> console.log(`EXPRESS RUNNING ON PORT ${PORT}`))
