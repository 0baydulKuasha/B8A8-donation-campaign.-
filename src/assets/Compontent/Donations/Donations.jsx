import { data } from "autoprefixer";
import { useEffect, useState } from "react"; 
import Donated from "./Donated";
 
const Donations = () => {
    const [donations, setDonated]= useState();
    useEffect(() => {
        fetch('/public/Donation.json')
        .then(res => res.json())
        .then(data => setDonated(data))
    },[])





    return (
        <div>
            <h1>boathin: {Donations.length} </h1>
          {/* {
            donations.map(donations => <Donated key={Donation.id} donations={donations}></Donated>)
          } */}
        </div>
    );
};

export default Donations;