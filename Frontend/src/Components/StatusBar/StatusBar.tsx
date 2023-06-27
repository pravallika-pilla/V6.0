import "./StatusBar.css";
import React from 'react';

/*class StatusBar extends React.Component {
    render(){
        return(
            <section id="status" className="Status">
                <ul className="info">
                    <li className="label">Wallet Address</li>
                    <li id="walletAddress"></li>
                    <li className="label">Balance</li>
                    <li id="balance"></li>
                    <li className="label">Block Number</li>
                    <li id="blockNumber"></li>
                </ul>
            </section>
        )
    }
} */

class StatusBar extends React.Component {
    render(){
        return(
            <section id="status" className="Status">
            <div className="scroll-container">
              <ul className="info1">
                <li className="label">Block Number</li>
                <li id="blockNumber"></li>
                <li className="label">Wallet Address</li>
                <li id="walletAddress"></li>
                <li className="label">Balance</li>
                <li id="balance"></li>
              </ul>
            </div>
          </section>
          
        )
    }
} 



export default StatusBar;