import "./HomePage.css";
import icon from "../../logo.svg";

import React from 'react';

class Homepage extends React.Component {
    render(){
        return (

            <section className={"Home"}>
                <div className={"description"}>
                    <div>
                        <h1> NFT Dutch Auction</h1>
                    </div>

                    <div>
                        <p>
                        A dutch auction is a type of bidding or minting method where an NFT project would be put to sale at a specific value set by the project developers. That value will then decrease over time until a buyer makes the purchase or until it hits the floor price</p>
                    </div>

                  
                </div>

               
            </section>

        );
    }

}

export default Homepage; 

