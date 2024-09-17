import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/message.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "59ecdb6b-e924-4452-9768-e16b085a55aa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='cont'>
        <div className="cont-column">
            <h3>Email Us <img src={mail_icon} alt="" /></h3>
            <p>We would love to hear from you! Please fill out the form to get in touch with us.</p>
            <ul>
                <li>Contact@nelsonsimiyu@gmail.com</li>
                <li>+2547070939152</li>
                <li>Nairobi CBD, Kenya</li>
            </ul>
        </div>
        <div className="cont-column">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="telephone" name='phone' placeholder='Enter your mobile' required/>
                <label>Write your message</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='button'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact