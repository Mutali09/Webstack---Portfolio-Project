import React from 'react'
import './Services.css'
import service_1 from '../../assets/personal.jpg'
import service_2 from '../../assets/group.jpg'
import service_3 from '../../assets/nutrition.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service_1} alt="" />
            <div className="caption">
                <h1>Personal Training</h1>
                <p>Get one-on-one training sessions tailored to your needs and goals.</p>
            </div>
        </div>
        <div className="service">
            <img src={service_2} alt="" />
            <div className="caption">
                <h1>Group Classes</h1>
                <p>Join our group classes for a fun and motivating workout experience.</p>
            </div>
        </div>
        <div className="service">
            <img src={service_3} alt="" />
            <div className="caption">
                <h1>Nutrition Coaching</h1>
                <p>Work with our nutritionists to create a personalized meal plan.</p>
            </div>
        </div>

    </div>
  )
}

export default Services