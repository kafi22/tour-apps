import React from 'react'
import Tour from './Tour'

const Tours = ({data, removeItem}) => {


   const getItem = data.map(item => {
    return (<Tour key={item.id} {...item} removeItem={removeItem} />)
   })

  return (
    <div className=' grid grid-cols-1 gap-4 justify-between items-stretch  md:grid-cols-2 lg:grid-cols-3 my-4'>
        {getItem}
    </div>
  )
}

export default Tours