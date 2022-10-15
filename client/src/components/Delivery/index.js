import React from 'react'

const DeliveryLgcards = ({title, image })=>{
    return (
        <>
        
        </>
    )
}
const DeliverySmcards = ({title, image })=>{

    return (
        <>
            <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-56'>
                <div className='w-full h-24'>
                    <img className='w-full h-full object-cover object-center rounded-t-md'
                    src={image}
                    alt = {title} />    
                </div>
                <div>
                    <h3 className='text-sm my-1 text-center font-light'>{title}</h3>
                </div>
            </div>
            
        </>
    )
}

const Delivery = () => {
  return (
    <div>Delivery</div>
  )
}

export default Delivery