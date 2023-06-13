import React from 'react';
import "./filter.css";
import FilterItem from './filteritem';

const Filter = ({filterlist}) => {
  return (
    <div className='filters'>
        {filterlist && 
        filterlist.map((filter)=>{
            return < FilterItem filter ={filter} key={filter.id}/>;
        })}
    </div>
  )
}

export default Filter