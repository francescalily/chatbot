import React from "react";
import { Link } from "react-router-dom";
import Shop from '../../components/Shop'

const ShopPage = () => {
    return (
        <div>
          <Shop name='Amazon Echo' description='Your AI assistant' price={59.99} />
        </div>
      );
}

export default ShopPage;