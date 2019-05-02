//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Schema
var asgnSchema = new Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});
//courseName - string
//assignmentName - string/req/
//dueDate - date


//Export for use elsewhere
module.exports = mongoose.model('Assignment', asgnSchema);
