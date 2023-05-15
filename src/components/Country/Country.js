import React from 'react';
import './Country.css'

const Country = (props) => {
    /* console.log(props.country.area);
    const{area, region, population, name} =props.country; */
    const {area, region, name, flags} =props.country;
    /* console.log(props.country ) */

    return (
        <div className ='country bg-danger'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Area: {area}</p>



            {/* <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small> </p>
            <p><small>Area: {area}</small></p> */}


           {/*  <p><small>Area: {props.country.area}</small></p> */}
      
            
        </div>
    );
};

export default Country;