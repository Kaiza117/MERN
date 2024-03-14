const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

app.listen(port, () => console.log(`Listening on port: ${port}`));


const createUser = () => {
    const newFakeUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.name(),
        }
    return newFakeCompany;
};
    
const newCompany = createCompany();
console.log(newCompany);

const newUser = createUser();
console.log(newUser);

app.get("/api/users/new", (req, res) => {
    res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany );
});

app.get("/api/user/company", (req, res) => {
    res.json( [newUser, newCompany] );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

