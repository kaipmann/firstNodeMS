const express = require('express');
const app = express();

//port :3001
const port = process.env.VCAP_APP_PORT || 3001;

app.use(express.json());

//root route or root path
app.get('/', (req,res) => {
    res.send("Hello team Sastrageek BTP Developers");
});

// route person
app.get('/person', (req,res) => {
    res.json({"personTab":[ {"firstName":"Ron","age":25},{"firstName":"Sam","age":35},{"firstName":"Tom","age":20}]});
});
// res.json({})

// route weather
app.get('/weather', (req, res) => {var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315&hourly=temperature_2m&forecast_days=1',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    });


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

