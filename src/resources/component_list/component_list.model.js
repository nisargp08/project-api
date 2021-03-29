import mongoose from 'mongoose';

const componentListSchema = new mongoose.Schema({
    subtype : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    linkedTo : {
        type : String,
        required : true,
    },
})

export const ComponentList = mongoose.model('component_list',componentListSchema)