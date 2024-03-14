const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// var options = {
//     swaggerOptions: {
//       url: 'http://petstore.swagger.io/v2/swagger.json'
//     }
//   }

//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

const createUser = () => {
    const newFakeUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.string.uuid()
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.name(),
        _id: faker.string.uuid(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
            }
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

