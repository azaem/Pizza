import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios"


const CountryInfo = () => {
    const [country, setCountry] = useState([])
    const params = useParams()
    useEffect(() => {
        axios(`https://restcountries.com/v2/name/${params.name}?fullText=true`)
            .then(({data}) => setCountry(data))

    }, [])
    console.log(country)
    return (
        <div className="container">
            <div className="row">
                {
                    country.map(el => (
                        <>
                            <div className="col-4 my-5">
                                <img src={el.flags.png} alt="" className="w-100"/>
                            </div>

                            <div className="col-4 my-5 text-start">
                                <div className="country-content ps-4">
                                    <h3>Аты:{el.name}</h3>
                                    <p>Аянты{el.area}</p>
                                    <p>Борбору{el.capital}</p>
                                    <p>Калкынын саны{el.population}</p>

                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
};

export default CountryInfo;