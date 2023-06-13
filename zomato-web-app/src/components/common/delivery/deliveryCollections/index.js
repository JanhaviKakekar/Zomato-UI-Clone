import React from 'react'
import "./DeliveryCollections.css"
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryitem';

const deliveryItems=[
  {
    id:1,
    title:"Pizza",
    cover :"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
  },
  {
    id:2,
    title:"Burger",
    cover :"https://b.zmtcdn.com/data/dish_photos/a9a/59c14a7c2e4f776a70f9fae11b889a9a.jpg"
  },
  {
    id:3,
    title:"Biryani",
    cover :"https://b.zmtcdn.com/data/dish_photos/1ed/4b33d1a40a6dfaa14b7229d71974b1ed.jpg"
  },
  {
    id:4,
    title:"Cakes",
    cover :"https://b.zmtcdn.com/data/dish_photos/01f/8e07eb4af558591be283eae86460701f.jpg"
  },
  {
    id:5,
    title:"Chicken",
    cover :"https://b.zmtcdn.com/data/dish_photos/4a1/80ebb3a28187e80c4899d2f89a9a74a1.jpg"
  },
  {
    id:6,
    title:"Rolls",
    cover :"https://b.zmtcdn.com/data/pictures/6/20691156/9adc38d7f21038ea6b62971df17c0ac2_o2_featured_v2.jpg"
  },
  {
    id:7,
    title:"Noodles",
    cover :"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
  },
  {
    id:8,
    title:"Thali",
    cover :"https://b.zmtcdn.com/data/dish_photos/f51/8b2c230f6656620c05ffe374f2db8f51.jpg"
  },
  {
    id:9,
    title:"Momos",
    cover :"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
  },
  {
    id:10,
    title:"Dosa",
    cover :"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:<NextArrow/>,
  prevArrow:<PrevArrow/>,
};
const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider{...settings}>
              {deliveryItems.map((item)=>{
                return <DeliveryItem item = {item}/>;
              })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections
