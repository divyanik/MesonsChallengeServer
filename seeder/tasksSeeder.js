const mongoose = require('mongoose');
const Tasks = require('../models/tasks');

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

const seedTasks = async () => {
    await connectDB();

    const tasks = [
        {
            taskName: 'Planning',
            taskDescription: 'Planning a sprint for the comming week.',
            taskStatus: 'Created',
            createdBy: 'Divyani'
        },
        {
            taskName: 'Task Estimations',
            taskDescription: 'Estimating the splitted tasks and assigning to the developers.',
            taskStatus: 'Created',
            createdBy: 'Divyani'
        },
        {
            taskName: 'Development',
            taskDescription: 'Implementing solutions for the assignmed tasks.',
            taskStatus: 'Created',
            createdBy: 'Divyani'
        },
        {
            taskName: 'Monitoring',
            taskDescription: 'Monitoring the progress and tracking the pending tasks.',
            taskStatus: 'Created',
            createdBy: 'Divyani'
        },
    ];
    

    try {
        await Tasks.insertMany(tasks);
        console.log('Tasks seeded');
        process.exit();
    } catch (error) {
        console.error('Error seeding tasks:', error);
        process.exit(1);
    }
};

seedTasks();