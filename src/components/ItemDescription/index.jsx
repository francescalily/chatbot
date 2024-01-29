import React from 'react'
import macbook from '../../assets/macbook.jpeg'
import iphone from '../../assets/iphone.jpeg'

const things = [ {
    name: "iPhone", description: "The newest iPhone", img: iphone
}, {
    name: "Macbook", description: "Macbook Pro the best one!", img: macbook
}]

const ItemDescription = () => {
    return (
        <>
        {things.map(function(data) {
          return (
            <>
            <div>
              Product name:  {data.name}
              </div>
              <div>
              Product description:  {data.description}
            </div>
            <img src={data.img}></img>
            </>
          )
        })}
        </>
    
      )
    }

export default ItemDescription