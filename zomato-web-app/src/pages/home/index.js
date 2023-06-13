import React, { useState } from 'react';
import Header from '../../components/common/header';
import Tab from '../../components/common/tabs';
import Footer from '../../components/common/footer';
import Delivery from '../../components/common/delivery';
import Nightlife from '../../components/common/nightlife/nightlife';
import Dinningout from '../../components/common/dinningout';


const HomePage = () => {

    const[activeTab, setActiveTab]=useState("Delivery");
  return (
    <div>
        <Header/>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
   );

};

const getCorrectScreen = (tab) =>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dinning Out":
                return <Dinningout/>
        case "Nightlife":
                return <Nightlife/>
        default:
            return <Dinningout/>
        
    
      
       
    }
}

export default HomePage