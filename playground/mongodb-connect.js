const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect')
    };
    console.log('connected successfully')

    // // db.collection('todoApp').insertOne({
    // //     test: 'Just Something',
    // //     completed: false
    // // }, (err, result) => {
    // //     if (err) {
    // //         return console.log('unable to insert todoapp', err);
    // //     };
    // //     console.log(JSON.stringify(result.ops, undefined, 2));
    // // });

    // // db.collection('Users').insertOne({
    // //     age: 28,
    // //     location: 'Austin'
    // // }, (err, res) => {
    // //     if (err) {
    // //         return console.log('unable to upload new data to users table');
    // //     };
    // //     console.log(JSON.stringify(res.ops, undefined, 2));
    // // });

    db.collection('Users').find({location: 'LA'}).toArray().then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log(`the following error occured ${err}`)
    });


    // db.close();
});