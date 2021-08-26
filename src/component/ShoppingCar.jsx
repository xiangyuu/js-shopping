import React from 'react';
import garbage from '../static/pictures/garbage.png'
import shop01 from '../static/pictures/001.webp'
import shop02 from '../static/pictures/002.webp'
import shop03 from '../static/pictures/003.webp'
import shop04 from '../static/pictures/004.webp'
import './ShoppingCar.scss'
function ShoppingCar(props) {
  return (
    <div className='shopping-car' className='hide'>
      <div className='shopping-item'>
        <div className='cloth-img'>
          <img src={shop01} alt=''/>
        </div>
        <div className='cloth-txt'>
          <span>Joined® Authentic 寬版上衣【OS綠】</span>
          <h3>S</h3>
          <div className='cloth-money'>2 x NT$1,180<img src={garbage} alt=''/></div>
        </div>
      </div>
      <div className='checkout'>
        訂單結帳
      </div>
    </div>
  );
}

export default ShoppingCar;