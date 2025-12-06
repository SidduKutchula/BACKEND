import express from 'express';
const app = express();

app.get('/users', (req, res)=>{
    res.send("Hello Backend Baby");
});
app.get('/get-users',(req, res)=>{
    res.send("This is Get-Users");
});
app.listen(8080,()=>{
    console.log(`Server Runnig at Port ${7007}`);
});