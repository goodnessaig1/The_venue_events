import React, { Component } from 'react'
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/Header';
import Featured from './components/Featured';
import VenuInfo from './components/VenuInfo';
import HighLight from './components/Highlight/HighLight';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (

    <div className="App" style={{ height:'1500px', background:'blue' }}>
 
    <Header/>

    <Element name='Featured'>
   <Featured/>
   </Element>
   <Element name='venue_info'>
   <VenuInfo/>
   </Element>
   <Element name='Highlights'>
      <HighLight/>
   </Element>
   <Element name='pricing'>
   <Pricing/>
   </Element>
   <Element name='location'>
   <Location/>
   </Element>
   <Footer/>
    </div>
  );
}
 }
export default App;
