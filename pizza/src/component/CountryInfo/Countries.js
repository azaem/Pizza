import React, {useEffect, useState} from 'react';
import CountyCard from "./CountyCard";
import axios from "axios";

const Countries = () => {
    const [counter,setCounter]= useState(0)
    const [countries,setCountries]= useState([])

    useEffect(()=>{
        axios("https://restcountries.com/v3.1/all")
            .then(({data})=> setCountries(data))

    },[])
    return(
        <div className="container">
            <div className="row ">


                {
                    countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
                        .map(el => (
                            <CountyCard el={el} key={el.name.common}/>
                        ))

                }


            </div>
        </div>
    )
};

export default Countries;