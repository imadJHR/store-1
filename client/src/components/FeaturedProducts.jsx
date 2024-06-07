import React from 'react'
import Card from './Card'

const FeaturedProducts = ({type}) => {
    const data  = [
        {
            id:1,
            img1:"https://www.pexels.com/fr-fr/photo/femme-debout-a-l-interieur-1926769/" ,
            img2:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title:"SUMMER SALE",
            desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",   
            iNew:true,
            price:17
        },
        {
            id:2,
            img1:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img2:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title:"SUMMER SALE",
            desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",   
            isNew:true,
            price:12
        },
        {
            id:3,
            img1:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img2:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title:"SUMMER SALE",
            desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",   
           
            price:12
        },
        {
            id:4,
            img1:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img2:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title:"SUMMER SALE",
            desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",   
           
            price:12
        }
    ]
  return (
    <div className='m-[100px] '>
        <div id='top' className='flex items-center justify-between mb-[50px]'>
            <h1 className='flex-2 font-bold text-2xl  capitalize'>
               {type} NEW PRODUCTS
            </h1>
            <p className='flex-3 text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quis aut dignissimos eaque</p>

        </div>
        <div className='flex justify-center gap-[50px]' >
            {
                data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))
            }

        </div>
    </div>
  )
}

export default FeaturedProducts