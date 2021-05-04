import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name!']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name!']
    },
    yearOfBirth: {
        type: Number,
        required: [true, 'Please enter year of your birth!']
    },
    address: {
        type: String
    }
});

export default mongoose.model('Student', StudentSchema);
