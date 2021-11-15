import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const __dirname = path.resolve();




import userRouter from './routes/userRoute.js';
import applyRouter from './routes/applyRoute.js';

import { globalErrorHandler } from './controllers/errorController.js';

process.on('uncaughtException', (error) => {
    console.log('UNCAUGHT EXCEPTIONS 🌟 shutting down');
    console.log(error.name, error.message);
    process.exit(1);
})

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// if (process.env.NODE_ENV !== 'production' ) {
//     const DB = process.env.DATABASE;
// } else {
//     const DB = "mongodb+srv://client:<password>@cluster0.vx8q1.mongodb.net>/<myFirstDatabase>?retryWrites=true&w=majority"
// }

const DB = "mongodb+srv://client:<pcrtest>@<cluster0.vx8q1.mongodb.net>/<myFirstDatabase>?retryWrites=true&w=majority"


mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("database connection successfully!"))
    .catch((error) => console.log(error));

const port = process.env.PORT || 443;
const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


app.use('/api/v1/user', userRouter);
app.use('/api/v1/apply', applyRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.use(globalErrorHandler);

process.on('unhandledRejection', (error) => {
    console.log("UNHANDLED REJECTION 🌟 shutting down server");
    console.log(error.name, error.message);
    server.close(() => {
        process.exit(1);
    })
})