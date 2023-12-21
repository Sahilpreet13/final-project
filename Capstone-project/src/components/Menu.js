import React from 'react';
import recipes from '../recipes'

const Menu = () => {

    return (
        <div className='menu-container'>
        <div className='menu-header'>
            <h2>This week specials</h2>
            <button>View Menu</button>
        </div>

        <div className='cards'>
             {
                recipes.map(recipes => <div key={recipes.id} className='menu-items'>
                    <img src={recipes.image} alt=''/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipes.title}</h5>
                            <p>{recipes.price}</p>
                        </div>
                        <p>{recipes.description}</p>
                        <button className='orderBtn'>Order Now</button>
                    </div>
                    </div>)
             }
        </div>
        </div>
    );
};

export default Menu;