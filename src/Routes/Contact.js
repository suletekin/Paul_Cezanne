import React from 'react';
import './Contact.css';
import Image5 from '../Images/Image5.jpeg'

const Contact = () => {
  return (
    <div className='container'>
      <div className='leftColumn'>
        
      </div>

      <div className='rightColumn'>

          <div className='container'>
            <div className="content">
              <div className='contentTitle'>
                Connect with the Master of Aix
              </div>
              <div className='contentText'>
                Paul Cézanne remains a pivotal figure in the world of art, bridging the past 
                and present with every stroke of his brush. Now, in a world where the lines 
                between time and space are artistically blurred, you have the unique opportunity 
                to reach out to the artist himself. Whether you’re an aspiring painter, an art 
                historian, or a lover of beauty, your insights and inquiries are most welcome.
              </div>

              <div className='contentTitle'>
                Studio Visits
              </div>
              <div className='contentText'>
                <span id ="bold">Atelier Cézanne</span> 1, Rue de l’Hermitage 13100 Aix-en-Provence France

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                To arrange a private viewing or a studio visit, please use the contact 
                form on our website or reach out to us via email. Kindly note that visits 
                are by appointment only to ensure the tranquility necessary for the artist’s work.
              </div>

              <div className='contentTitle'>
                Workshop Enquiries
              </div>
              <div className='contentText'>
                For information on upcoming workshops, lectures, and live painting sessions 
                with Paul Cézanne, please subscribe to our newsletter. We welcome artists of 
                all skill levels who wish to learn from the master himself.

                <br></br>
                <br></br>
                <br></br>

                Paul Cézanne’s approach to creating art was meticulous and involved intense, almost meditative, 
                concentration. This laborious method was also evident in his repeated studies of a single subject, 
                such as the iconic Mont Sainte-Victoire series, which he painted many times to capture the varying 
                light and seasons.
              </div>

              <div className='contentTitle'>
                Press & Media
              </div>
              <div className='contentText'>
                For press inquiries, interviews, and public appearances, please contact Cézanne’s publicist at:

                <br></br>
                <br></br>
                <br></br>

                <span id ="bold">Email:</span><span id="email">press@cezanne-art.com</span>

                <br></br>
                <br></br>
                <br></br>

                Please include the nature of your inquiry and your media affiliation in your communication.
              </div>


              <div className='contentTitle'>
                Art Sales & Exhibition
              </div>
              <div className='contentText'>
                Interested collectors, galleries, and institutions looking to acquire works by Paul Cézanne, 
                or wishing to feature his paintings in upcoming exhibitions, should direct their inquiries to:

                <br></br>
                <br></br>
                <br></br>

                <span id ="bold">Email:</span> <span id="email">exhibitions@cezanne-art.com</span>
              </div>


              <div className='contentTitle'>
                General Inquiries
              </div>
              <div className='contentText'>
                For all other questions or comments:

                <br></br>
                <br></br>
                <br></br>

                <span id ="bold">Email:</span> <span id="email">info@cezanne-art.com</span>

                <br></br>
                <br></br>
                <br></br>

                Or use the provided form on our website.
              </div>

              <div className='contentTitle'>
                Stay Connected
              </div>
              <div className='contentText withBottomPadding'>
                Follow Paul Cézanne on social media to get daily inspiration and 
                updates on his current projects and musings.

                <br></br>
                <br></br>
                <br></br>

                <ul>
                  <li>
                    Instagram: @PaulCezanneArt
                  </li>
                  <li>
                    Twitter: @Cezanne_Modern
                  </li>
                  <li>
                    Facebook: Paul Cézanne
                  </li>
                </ul>

                <br></br>
                <br></br>
                <br></br>

                <span id ="bold">Please Note</span>: Paul Cézanne dedicates a significant portion of 
                his day to his art; hence, while he deeply appreciates your messages, 
                there may be a delay in response. We thank you for your understanding and patience.
              </div>


            </div>

            <div className = "imageContainer">
              <img className = "image" src={Image5} ></img>
            </div>
 

          </div>





        </div>

      </div>
  );
}

export default Contact;
