import React, { useState, useEffect} from 'react'
import Heading from '../core/Heading'
import Book from './Book'
import {getAllDoctors} from './petApi'


const PetServices = () => {

    const [data, setData] = useState({});
    
    const getDoctors = () =>{
        getAllDoctors()
        .then(data => {
            setData(data)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    

    useEffect(() => {
        getDoctors();
    }, [])
    return (
        <div className="container">
            <br/>
            <Heading text="Pet Services" />
            <br/>
            <div className="row">
                {data.length>0 && data.map((d,i)=>{
                    return <Book key={i} text={d.title} img={d.image} />
                })}
            </div>
        </div>
    )
}

export default PetServices
