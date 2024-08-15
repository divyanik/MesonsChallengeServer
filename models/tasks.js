
// Requirement: Database (MongoDB):
// Define a "tasks" collection with fields like 
// taskId, taskName, taskDescription, taskStatus, etc.

const mongoose = require('mongoose');
require('dotenv').config();

const taskSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    taskStatus: {
        type: String,
        enum: ['Created', 'In Progress', 'Completed'],
        default: 'Created'
    },
    // Tracking columns
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    //
});

// Creating the tasks model
const tasks = mongoose.model('tasks', taskSchema);

module.exports = tasks;
