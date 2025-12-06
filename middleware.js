//npx nodemon install
import express from 'express';
const app = express();
app.use(express.json());
app.get('/get-user', (req, res) => {
    res.send("api Success");
});
app.post('/add-users', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('data added');
});
app.put('/put-user', (req, res) => {
    let datavalue = req.body;
    console.log("Updated", datavalue);
    res.send('Updated Successfully.');
});
app.delete('/delete-user', (req, res) => {
    const deletedata = req.body;
    console.log("Deleted", deletedata);
    res.send("Deleted Successfully");
});
app.listen(8080, () => {
    console.log("Server is Running");
})