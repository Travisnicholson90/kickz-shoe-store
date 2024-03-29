const jwt = require('jsonwebtoken');
maxAge = 3 * 24 * 60 * 60;
const secret = 'secretssss';
const expiration = '2h';


const authMiddleware = ({ req }) => {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  }

  const createToken = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: expiration
    });
};

module.exports =  { createToken, authMiddleware }; 
