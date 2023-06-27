
import "./DeployContract.css";
import React from "react";
import {ethers} from "ethers";
import ABI from '../../artifacts/contracts/BasicDutchAuction.sol/BasicDutchAuction.json';
import MyImage from "/Users/pravallikapilla/Desktop/V6.0/Frontend/src/Components/DeployContract/MyImage.jpg";

class DeployContract extends React.Component {
    deploy = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const BasicDutchAuction = new ethers.ContractFactory( ABI.abi, ABI.bytecode, signer);

        try {

            const basePriceInput = document.getElementById("Base Price") as HTMLInputElement;
            const tenureInput = document.getElementById("Tenure") as HTMLInputElement;
            const decrementInput = document.getElementById("Decrement") as HTMLInputElement;

            const basePrice = basePriceInput.value;
            const tenure = tenureInput.value;
            const decrement = decrementInput.value;

            const deployed = document.getElementById("deployedAt") as HTMLElement;

            const basicDutchAuction = await BasicDutchAuction.deploy(basePrice,tenure,decrement);
            deployed.textContent = `Please wait...`;
            await basicDutchAuction.deployed();
            const deployedAddress = basicDutchAuction.address;

            window.alert(`Contract deployed to: ${deployedAddress}`);
            deployed.textContent = `Deployed at ${deployedAddress}`;

        } catch (error: any) {
            window.alert(
                'Error!' + (error && error.reason ? `\n\n${error.reason}` : `${error.message}`)
            );
        }
    }


    render(){
        return (
            <section id="DeployContract" className="deploy-contract">
                <div className="how-it-works">
                    <h3>Dutch Auction Process:</h3>
                    
                    <div className="image-section">
          <img src={MyImage} alt="My Image" style={{ width: '90%' }} />
        </div>
                </div>
                <div className="space"></div>
                
                <div className="youtube-section">
          <h3>Basic Dutch Auction: Everything You Need to Know</h3>
     
          <div className="About">
          <iframe
           width="100%"
           height="400"
            src="https://www.youtube.com/embed/AauT6PCqzdA"
          title="YouTube video player"
   
          allowFullScreen
  ></iframe>
          </div>
          <div className="space"></div>
        </div>


                <div className={"params"}>
                    <label htmlFor="Base Price" className="paramLabel">Base Price</label>
                    <input id="Base Price" type="text" placeholder="<Minimum price>" ></input>
                    <label htmlFor="Tenure" className="paramLabel">Tenure</label>
                    <input id="Tenure" type="text" placeholder="<Tenure of Auction>" ></input>
                    <label htmlFor="Decrement" className="paramLabel">Decrement</label>
                    <input id="Decrement" type="text" placeholder="<Decrement by Block>" ></input>
                </div>

                <div className="space"></div>
                <div>
                    <button onClick={this.deploy}> <a href="#DeployContract"> Deploy Contract </a></button>
                </div>

                <div id = "deployedAt" className={"deployedAt"}></div>
            </section>
        );
    }


} 

export default DeployContract; 




