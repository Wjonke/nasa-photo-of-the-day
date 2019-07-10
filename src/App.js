import React, {useState, useEffect} from "react";


function App() {
  const [Potd, setPotd] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res => res.json())
    .then(res=> {
      console.log(res);

      setPotd(
        res
      );
    })
    .catch(err => console.log("Error Will Robinson"));
  }, []);

  return (



    <div className="App">
      <h1>NASA Pick Of The Day!!</h1>

      <img src={Potd.url} alt="Pick of the day!"/>
      <div>{Potd.explanation}</div>
      


    </div>



  );
};

export default App;
