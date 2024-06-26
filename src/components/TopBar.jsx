import React from 'react';
import './TopBar.css'

const TopBar = () => {
  return (
    <div className='top-section'>
        <div className="name-bar">
            <h3>
                F<span>oo</span>dy Z<span>o</span>ne
            </h3>
            <input type="text" placeholder='Search Food .....' className='input-box'/>
        </div>
        <div className="items-names">
            <button className='all'>All</button>
            <button className='breakfast'>Breakfast</button>
            <button className='lunch'>Lunch</button>
            <button className='dinner'>Dinner</button>
        </div>
    </div>
  )
}

export default TopBar
