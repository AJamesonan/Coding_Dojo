import { faker } from '@faker-js/faker';
import express from 'express'
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"


// const { faker } = require('@faker-js/faker');
// const express = require("express");
const app = express();
const port = 8000;


//above any app.get or app.post 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const createRandomUser = () => {
    const newUser = {
        userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        LastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
    };
    return newUser;
}

const createCompany = () => {
    const Company = {
        userId: faker.datatype.uuid(),
        Name: faker.company.name(),
        Address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return Company
}
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World, what it do son?" });
});


app.get("/api/users/new", (req, res) => {
    const newUser = createRandomUser();
    res.json(newUser)
})
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})
app.get("/api/user/company", (req, res) => {
    let newUser = createRandomUser();
    let newCompany = createCompany();
    res.json({
        User: newUser,
        Company: newCompany
    })
})

//needs to be below the other code blocks
app.listen(port, () => console.log(`listening on port of your choosing: ${port}`));
