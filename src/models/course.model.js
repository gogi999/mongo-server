import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name of the course!']
    },
    points: {
        type: Number,
        required: [true, 'Please enter points for the course!']
    }
});

export default mongoose.model('Course', CourseSchema);
