import React from 'react';
import '../index.css';
import Navbar from '../Component/Navbar';
import Mimage from '../Component/Mimage';
import Footer from '../Component/Footer';
import FasilitasSingkat from '../Component/FasilitasSingkat';
import reportWebVitals from '../reportWebVitals';


 function Home() {

return(
  <React.StrictMode>
    <Navbar />
    <Mimage />
    <FasilitasSingkat />
    <Footer />
  </React.StrictMode>
);

}


export default Home;

reportWebVitals();
