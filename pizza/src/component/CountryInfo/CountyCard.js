import React from 'react';
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom";
import axios from "axios"
const CountyCard = ({el , key}) => {
    return (

        <div className="col-3  text-center ">
            <Link to={`/countries/${el.name.common}`}>
                <img src={el.flags.png} alt={el.name.common} className="w-75 h-75"/>
            </Link>
            <h5>{el.name.common}</h5>
        </div>


    );
};

export default CountyCard;