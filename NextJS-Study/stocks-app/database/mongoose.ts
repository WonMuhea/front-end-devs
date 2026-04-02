import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;
if (!cached) {
    cached = global.mongooseCache = {conn: null, promise: null};
}

export const connectionToDatabase = async () => {
    if(!MONGODB_URL) throw new Error(`No MongoDB URL set for environment ${process.env.NODE_ENV}`);
    if(cached.conn) return cached.conn;
    if(!cached.conn) {
        cached.promise = mongoose.connect(MONGODB_URL, { bufferCommands: false });
    }

    try{
        cached.conn = await cached.promise;
    }catch(e){
        cached.promise = null;
        throw e;
    }

    console.log(`Connected to Mongo database ${process.env.NODE_ENV} - ${MONGODB_URL}`, cached.promise);
}