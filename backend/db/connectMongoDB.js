import mongoose from "mongoose"; 

const connectMongoDb = async ()=>{
    try {
        
    } catch (error) {
        console.error(`Error connection to mongodB : ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDb;
