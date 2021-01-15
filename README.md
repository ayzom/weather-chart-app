build a weather forecast chart.

 

Using the API below:

 

https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1

 

Please create both Middleware API and frontend.

 

+ Middleware API (Node JS)

 

Make a call to the API provided above. Clean up the data return JSON response in format:

 

{
    current: {
      temp_f: 
    },
    forecast: [
      {
        time:
        temp_f:
      },
      {
        time:
        temp_f:
      },
      {
        time:
        temp_f:
      },
      ...
    ]
  }

 
 Make Ajax Polling every 5 seconds to Middleware API to get data and display these in a chart. Make the chart is updated every 5 seconds. Below is the mock:


 

+ Frontend (React)

Output:

https://i.ibb.co/XxcxpGc/output.png

<img width="900" alt="example" src="https://i.ibb.co/XxcxpGc/output.png"/>
