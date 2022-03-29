import React, { useState } from 'react';
import people from './data';
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [ind, setInd] = useState(0);

  const { id, name, job, image, text } = people[ind]
  
  const prevPerson = () => {
    setInd((ind) => {
      let newInd = ind - 1;
      const l = people.length;
      // console.log(l)
      if (newInd < 0) {
        return l - 1;
      } else {
        return newInd;
      }
  })
}
  const nextPerson = () => {
    setInd((ind) => {
      let newInd = ind += 1;
      if (newInd < people.length) {
        return newInd
      } else {
        return 0;
      }
  })
}

  const randPerson = () => {
    setInd((ind) => {
      const l = people.length;
      let newInd = Math.floor(Math.random() * l)
// console.log(newInd);
// console.log(l);
      return newInd
  })
}

  return (
    <article className="review" id={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight/></span>
      </div>
      <h3 className='author'>{name}</h3>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>       
      </div>
      <button className="random-btn" onClick={randPerson}>Suprise me</button>
    </article>
  );
};

export default Review;
