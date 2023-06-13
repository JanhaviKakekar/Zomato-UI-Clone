import React from 'react';
import Filter from '../Filter';
import "./nightlife.css";
import Collection from '../collections';
import ExploreSection from '../exploreSection';
import { nightlife } from '../../../data/nightlife';
const nightlifeFilter=[
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
    icon : <i class="fi fi-rr-sort-alt absolute-center"></i>,
    title:'Distance',
  },
  {
    id:4,
    title:'Pubs and Bars',
  },
 

];
const collectionList=[
  {
    id:1,
    title :"22 Finest Microbreweries" ,
    cover:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"21 places",
  },
  {
    id:2,
    title :"19 Best Bars & Pubs" ,
    cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
    places:"20 places",
  },
  
]

const nightList = nightlife;

const Nightlife = () => {
  return (
    <div> 
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filter filterlist={nightlifeFilter}/>
      </div>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Bengaluru'/>
    </div>
  )
}

export default Nightlife