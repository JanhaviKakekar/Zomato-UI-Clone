import React from 'react';
import "./topbrands.css"
import NextArrow from '../../../carousel/nextArrow';
import PrevArrow from '../../../carousel/prevArrow';
import Slider from 'react-slick';

const topBrandslist=[
    {
        id:1,
        time:" 35 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550060992.png?output-format=webp",
    },
    {
        id:2,
        time:" 27 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521660.png?output-format=webp",
    },
    {
        id:3,
        time:" 15 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210536.png?output-format=webp",
    },
    {
        id:4,
        time:" 40 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432728.png?output-format=webp",
    },
    {
        id:5,
        time:" 19 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/731dbbf982004173d86948717b180d4d_1492874608.png?output-format=webp",
    },
    {
        id:6,
        time:" 8 min ",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/e47dec3eb2950cde399b62b48c5645f6_1675832707.png?output-format=webp",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };


const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandslist.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.time}/>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands