const express = require('express');
const app = express();

//port :3001
const port = 3001;

app.use(express.json());

//root route or root path
app.get('/', (req,res) => {
    res.send("Hello team");
});

// route person
//res.json({})

// route weather


//route /user
app.post('/user', (req,res) => {
 const userId = req.body.userId;
 console.log(`User received:  ${userId}`);
}
);


app.listen(port, () => {
    console.log("my server is running" + port);
});

console.log("hello");

