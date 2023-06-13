import React from 'react'
import Collection from '../collections'
import { dinningout } from '../../../data/dinningOut';
import ExploreSection from '../exploreSection';
import Filter from '../Filter';

const collectionList=[
  {
    id:1,
    title :"23 Serene Rooftop Places" ,
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places:"24 places",
  },
  {
    id:2,
    title :"10 Picturesque Cafes" ,
    cover:"https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places:"9 places",
  },
  {
    id:3,
    title :"10 Trending Restaurants " ,
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places:"10 places",
  },
  {
    id:4,
    title :"12 Newly Opened Restaurants" ,
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places:"9 places",
  },
  {
    id:5,
    title :"13 Romantic Dining Places" ,
    cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places:"14 places",
  },
  {
    id:6,
    title :"18 Blissful Breakfast Places" ,
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054220.jpg",
    places:"15 places",
  },
];
const dinningFilter=[
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
    title:'Outdoor Seating',
  },
  {
    id:4,
    title:'Serves Alcohol',
  },
  {
    id:5,
    title:'Open now',
  },

];

const dinningList = dinningout
const Dinningout = () => {
  return (
    <div> 
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filter filterlist={dinningFilter}/>
      </div>
      <ExploreSection list={dinningList} collectionName='Best Dining Restaurants near you in Bengaluru'/>
    </div>
  )
  
}

export default Dinningout