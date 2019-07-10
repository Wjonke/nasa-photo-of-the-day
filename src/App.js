import React, {useState, useEffect} from "react";


function App() {
  const [Potd, setPotd] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res => res.json())
    .then(res=> {
      console.log(res);

      setPotd(res);

    })
    .catch(err => console.log("Error Will Robinson"));
  }, []);

  return (



    <div className="App">
      <header><h1>NASA Pick Of The Day!!</h1></header>

      
      <section>

        <h2>{Potd.title}</h2>
        <p>Copyright: {Potd.copyright}: {Potd.date}</p>

      </section>

      <section>

          <img src={Potd.hdurl} alt="Pick of the day!"/>
          <p>{Potd.explanation}</p>
          
      </section>

      <footer>footer Section</footer>

    </div>



  );
};

export default App;
