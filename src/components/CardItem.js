import React from 'react';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__wrap' >
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt={props.text}
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h2>{props.title}</h2>  
            <div className="sPrice-amount">
                <sup>$</sup>{props.price[0]}<sup>.{props.price[1]}</sup><span className="sPrice-unit">/mo</span>
            </div>
            <h5 className='cards__item__text'>{props.text}</h5>            
            <div className='features'>
                <ul>
                   {props.featurelist.map((features) =>(<li key={features.id}>{features.value}</li>))}                  
                </ul>               
            </div>  
            <Button> Learn More </Button>              
           
          </div> 
        </div> 
      </li>
    </>
  );
}

export default CardItem;