process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let mongoUrl;

if (process.env.NODE_ENV === 'dev') {
  mongoUrl = 'mongodb://localhost:27017/coffee';
} else {
  mongoUrl = 'mongodb://coffee-user:coffee-123456@ds015334.mlab.com:15334/coffee';
}

process.env.URLDB = mongoUrl;
