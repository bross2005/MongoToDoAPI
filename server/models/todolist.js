const mongoose = require('mongoose');

var toDo = mongoose.model('ToDoa', {
    text: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

module.exports = {toDo};

// var newToDo = new toDo({
//     text: 'Cook something'
// });

// newToDo.save().then((res) => {
//     console.log('saved', res)
// }, (err) => {
//     console.log ('oops: ', err)
// });