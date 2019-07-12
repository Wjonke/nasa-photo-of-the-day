import React, {useState, useEffect} from "react";
import { Wrapper, Section, Footer, Header, P } from './AppStyle'




function App() {
  const [Potd, setPotd] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => res.json())
    .then(res=> {
      console.log(res);

      setPotd(res);

    })
    .catch(err => console.log("Error Will Robinson"));
  }, []);


  
  return (

    <Wrapper>
      <Header>
        <h1>NASA Pick Of The Day!!</h1>
      </Header>

      <Section>
        <h2>{Potd.title}</h2>
        <P>Copyright: {Potd.copyright}: {Potd.date}</P>
      </Section>

      <Section>
          <img width= '75%' src={Potd.hdurl} alt="Pick of the day!"/>
          <P>{Potd.explanation}</P>
      </Section>

      <Footer>
        Come Back tomorrow for another Pic!
      </Footer>
    </Wrapper>



  );
};

export default App;
