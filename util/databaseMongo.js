const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://nodeuser:nodeuserpw@node-complete-cluster.7fvy3qw.mongodb.net/'
  )
    .then(result => {
      console.log('Connected to mongodb atlas');
      callback(result);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
