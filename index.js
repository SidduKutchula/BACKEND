import express from "express"
import http from 'http';

const app = express()

import { getStudents, addStudents, updateStudents } from "./Routers/StudentRouter.js"
app.use('/get-data', getStudents);
app.use('/post-data', addStudents);
app.use('/update', updateStudents);
const server = http.createServer(app);
server.listen(8080, () => {
    console.log(`Server is Running at Port ${8080}`);
})