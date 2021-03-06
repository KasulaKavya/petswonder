import React from 'react'
import photo from '../../../images/img7.jpg'

const Customer = () => {


    const services = (fa, name, intro ) =>{
        return <div class="d-block services d-flex justify-content-between">
        <div class="icon d-flex align-items-center justify-content-center">
        <i class={`fas fa-${fa} fa-lg`} style={{color:"#ffb116"}}></i>
        </div>
        <div class="media-body">
            <h3 class="heading">{name}</h3>
            <p class="mb-0">{intro}</p>
        </div>
    </div>
    }


    return (
        <section class="ftco-section testimony-section img">
            <div class="overlay"></div>
            <div class="container">
                <div class="container">
                    
                    <div class="row">
                        <div class="col-12">  
                            <h1 style={{textAlign:"center"}}>Services</h1>
                            <br/>
                        </div>
                    </div>
                </div>
                
                <div class="container">
                    
                    <div class="row">
                        <div class="col-md-4">
                            {services("stethoscope", "Veterinary Service", "Far far away, behind the word mountains.")}
                        
                        </div>
                        <div class="col-md-4">
                            {services("dog", "Pet Grooming", "Your dog will leave feeling happy, looking and smelling great.")}
                        
                        </div>
                        <div class="col-md-4">
                            {services("paw", "Pet Setting", "Far far away, behind the word mountains.")}
                        
                        </div>
                    </div>
                </div>
                
            </div>
            </section>
    )
}

export default Customer
