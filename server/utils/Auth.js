const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxAge
    });
};

module.exports =  { createToken }; 
