import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://staging.greatlibrary.io:8000/art/testalice/');
        //console.log('Data fetched successfully:', result.data);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => { 
    console.log("logging this here");
  }, []);

  useEffect(() => {
    async function loadscript() {
      const result = await axios.get('http://staging.greatlibrary.io:8000/art/testscript/');
      console.log(result);
      console.log("End script");
      window.eval(result.data);
    }
    loadscript();

  }, []);
  

  //console.log('Data:', data);

  return (
    <div className="App" dangerouslySetInnerHTML={{ __html: data }}></div>
  );

}

export default App;