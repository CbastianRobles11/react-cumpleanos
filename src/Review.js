import React, { useState } from 'react';
import people from './data';

//libreira reaqct icons
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const Review = () => {

    const[index,setIndex]=useState(0);
    const {name,job,image,text}=people[index];

    const prevPerson=()=>{
        
        setIndex(index-1)
    }

    const nextPerson=()=>{
    
        setIndex(index+1)
    }

    const randomPerson=()=>{
       
       
        let random = Math.floor(Math.random() * people.length);
        if(random===index){
           
            random=random+1;
        }
        setIndex(random)
    }

    return <article className="review">
      <div className="img-container">
            <img    src={image} alt="name" className="person-img" />
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
      </div>
      <h4 className="author" >{name}  </h4>
      <p className="job" >{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
      <button className="prev-btn" disabled={index===0} onClick={prevPerson} >
                <FaChevronLeft/>
            </button>
            <button className="next-btn" disabled={index===people.length-1} onClick={nextPerson} >
                <FaChevronRight/>
            </button>
           
            
      </div>
      <button className="random-btn"  onClick={randomPerson} >
                Al azar
            </button>
    </article >;
};

export default Review