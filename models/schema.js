import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    cPersonName: {
        type: String,
    },
    email: {
        type: String,
    },
    ifActive: {
        type: Boolean,
    },
    listName: {
        type: String,
    },
    sdate: {
        type: Date,
    },
    edate: {
        type: Date,
    },
    interest1: {
        type: Number,
    },
    interest2: {
        type: Number,
    },
    interest3: {
        type: Number,
    },
    

})

export const Company = mongoose.model('Company', companySchema)