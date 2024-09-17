import React from 'react'
import './Trainers.css'
import trainer_1 from'../../assets/trainer 1.jpg'
import trainer_2 from'../../assets/trainer 2.jpg'
import trainer_3 from'../../assets/trainer 3.jpg'

const Trainers = () => {
  return (
    <div className='trainers'>
        <div className="trainer">
            <img src={trainer_1} alt="" />
            <div className="caption">
                <h1>Nelson</h1>
                <p>Specializes in strength training and conditioning with over 5 years of experience.</p>
            </div>
        </div>
        <div className="service">
            <img src={trainer_2} alt="" />
            <div className="caption">
                <h1>Kelvin</h1>
                <p>A certified yoga instructor and wellness coach focused on holistic health.</p>
            </div>
        </div>
        <div className="service">
            <img src={trainer_3} alt="" />
            <div className="caption">
                <h1>Carla</h1>
                <p>Expert in high-intensity interval training (HIIT) and cardiovascular fitness.</p>
            </div>
        </div>
    </div>
  )
}

export default Trainers