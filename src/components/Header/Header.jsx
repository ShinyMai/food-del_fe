import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our misson
          is to satisfy your cravings and create memories that will last a
          lifetime.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
