import React, { useState } from 'react'

const Tour = (props) => {
    console.log(props)
    
    const {id, image, price, name, info, removeItem} = props;
  

    const [readMore, setMore] = useState(false)


    const sliceText = () => {

    }

  return (
    <div key={id} className=' flex flex-col flex-1 items-start  h-full justify-between my-2 shadow-md rounded-md  hover:scale-105 transition-all' >
        <div className=' relative'>
        <img src={image} alt="" className=' w-full md:h-[350px]  md:w-[370px] md:object-cover lg:w-[370px]    hover:opacity-70' />
        <p className=' bg-[#10B981] text-white absolute top-0 right-0 py-2 px-5'>{price} $</p>
        </div>
        <div className=' flex flex-col gap-2 p-3'>
            <h1 className=' text-lg tracking-wider leading-6 text-gray-500'>{name}</h1>
            <p className=' leading-7 text-slate-700'> {readMore ? info : `${info.slice(0,170)}...`}
            <button className=' text-blue-500 ml-1'
            onClick={() => setMore(!readMore)}>
            {readMore ? 'less' : 'read'} more</button>
            </p>
        </div>
        <div className=' p-3 w-full'>
        <button className='   border-2 border-[#10B981] hover:bg-[#10B981] transition-colors text-[#10b981] hover:text-white py-2 px-4 w-full block rounded-md cursor-pointer' 
        onClick={() => removeItem(id)}
        >Not Interest</button>
        </div>
    </div>
  )
}

export default Tour