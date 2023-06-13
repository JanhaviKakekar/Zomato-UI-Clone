import React from 'react';
import Filter from '../Filter';
import "./delivery.css";
import DeliveryCollections from './deliveryCollections';
import TopBrands from './deliveryCollections/topbrands/topbrands';
import ExploreSection from '../exploreSection';
import { restaurant } from '../../../data/restaurants';



const deliveryFilter=[
  {
    id:1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title:'Filter',
  },
  {
    id:2,
    title:'Rating: 4.0+',
  },
  {
    id:3,
    title:'Safe and Hygenic',
  },
  {
    id:4,
    title:'Pure Veg',
  },
  {
    id:5,
    icon: <i class="fi fi-rr-angle-small-down absolute-center"></i>,
    title:'Cuisine',
  },

];

const restaurantList = restaurant;
const Delivery = () => {
  return (
    <div> 
      <div className="max-width">
        <Filter filterlist ={deliveryFilter}/>
      </div>
        <DeliveryCollections/> 
        <TopBrands/>
        <ExploreSection list = {restaurantList} collectionName='Delivery Restaurant in Aurangabad'/>
        
    </div>
  );
};

export default Delivery