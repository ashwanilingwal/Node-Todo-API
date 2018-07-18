
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>
{
  if(err)
  {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Users').insertOne({
    name: 'Ashwani',
    age: 20,
    location: 'India'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(result.ops);
  });

  db.close();
});
