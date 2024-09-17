import React, { useRef } from 'react'
import './Endorsements.css'
import forward_icon from '../../assets/icon 1.png'
import prev_icon from '../../assets/icon 2.png'



const Endorsements = () => {

    const slider = useRef();
    let t = 0;

const slideForward = ()=>{
    if(t > -40){
        t -= 20;
    }
    slider.current.style.transform = `translateX(${t}%)`

}
const slideBackward = () => {
    if(t < 0){
        t += 20;
    }
    slider.current.style.transform = `translateX(${t}%)`
}

  return (
    <div className='endorsements'>
        <img src={forward_icon} alt="" className='forward-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="endoser-info">
                            <h3>Alex</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <p>The trainers are incredibly supportive, and the atmosphere keeps me coming back every day. The variety of classes ensures that my routine never gets boring.</p>
                    </div>
                </li>
            <li>
                    <div className="slide">
                        <div className="endoser-info">
                            <h3>Morgan S</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <p>Joining this gym was the best decision for my health and well-being! The friendly community makes every visit enjoyable. The guidance from the trainers has helped me see remarkable progress.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="endoser-info">
                            <h3>Tylor M</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <p>The variety of classes and state-of-the-art equipment make every workout exciting and effective. I appreciate the expert advice and motivation from the staff. It’s been a game-changer for my fitness routine.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="endoser-info">
                            <h3>Carla C</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <p>This gym transformed my fitness journey—I have never felt stronger or more motivated! 
                            The trainers are incredibly supportive and the atmosphere keeps me coming back every day. 
                            Joining this gym was the best decision for my health and well-being!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="endoser-info">
                            <h3>Valencia</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <p>The coaching staff here is exceptional—knowledgeable, encouraging, and always ready to help you push your limits. The gym offers the best services and amenities, making every workout a great experience. With flexible hours and late-night openings, it's easy to fit a workout into my busy schedule.</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Endorsements