import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() { 
  const data = [
    { 
      src :'images/img-5.jpg', 
      text:'Explore the hidden waterfall deep inside the Amazon Jungle', 
      title :"Rocket",
      price: ['9' , '99'],     
      path :'/products',  
      featurelist : [
        {id : '1-1', value : 'Lorem Ipsum is not simply random'},
        {id : '1-2', value : 'It has roots in a piece of'},
        {id : '1-3', value : 'classical Latin literature'},
        {id : '1-4', value : 'from 45 BC, making it over 2000'},
        {id : '1-5', value : 'years old. Richard McClintock'}
        ] 
    },
    { 
        src :'images/img-2.jpg', 
        text:'Latin professor at Hampden-Sydney College in Virginia', 
        title :"Lunar",
        price: ['29' , '99'],      
        path :'/products',  
        featurelist : [
          {id : '2-1', value : 'Lorem Ipsum is not simply random'},
          {id : '2-2', value : 'It has roots in a piece of'},
          {id : '2-3', value : 'classical Latin literature'},
          {id : '2-4', value : 'from 45 BC, making it over 2000'},
          {id : '2-5', value : 'years old. Richard McClintock'},
          {id : '2-6', value : 'Lorem Ipsum is not simply random'},
          {id : '2-7', value : 'It has roots in a piece o'},
          {id : '2-8', value : 'classical Latin literature'},
          {id : '2-9', value : 'from 45 BC, making it over 2000'},
          {id : '2-10', value : 'years old. Richard McClintock'}          
        ] 
      },
      { 
        src :'images/img-7.jpg', 
        text:'Hampden-Sydney College in Virginia  looked up one of the more obscure', 
        title :"Martian",
        price: ['39' , '99'],       
        path :'/products',  
        featurelist : [
          {id : '3-1', value : 'Lorem Ipsum is not simply random'},
          {id : '3-2', value : 'It has roots in a piece of'},
          {id : '3-3', value : 'classical Latin literature'},
          {id : '3-4', value : 'from 45 BC, making it over 2000'},
          {id : '3-5', value : 'years old. Richard McClintock'}
        ]
      },
  ]
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={data[0].src}
              text={data[0].text}            
              title={data[0].title}
              path={data[0].path}                       
              featurelist ={data[0].featurelist}
              price={data[0].price}
            />
            <CardItem
              src={data[1].src}
              text={data[1].text}            
              title={data[1].title}
              path={data[1].path}            
              featurelist ={data[1].featurelist}
              price={data[1].price}
            />
             <CardItem
              src={data[2].src}
              text={data[2].text}            
              title={data[2].title}
              path={data[2].path}                  
              featurelist ={data[2].featurelist}
              price={data[2].price}
            />
          </ul>       
        </div>
      </div>
    </div>
  );
}

export default Cards;