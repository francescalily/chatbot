import React from "react";
import ItemDescription from "../ItemDescription";




const Shop = ({name, description, price}) => {
    return (
        <div>
            <ItemDescription name={name} description={description} />
            <p>`The price is £{price}`</p>
        </div>
    )
}
export default Shop;

//each product going to take product, name, description, price"