import mongoose from "mongoose";
require('dotenv').config();

let db_url;
if(process.env.NODE_ENV === "production"){
    db_url = process.env.PROD_DB_URL;
} else {
    db_url = process.env.DEV_DB_URL;
}
export const connect = (url = db_url, opts = {}) => {
    return mongoose.connect(url,
        { ...opts,useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false }
    );
}