import React from 'react';
import './About.css';
import Image4 from '../Images/Image4.jpeg'

const About = () => {
  return (
    <div className='container'>
      <div className='leftColumn'>
        
      </div>

      <div className='rightColumn'>

          <div className='container'>
            <div className="content">
              <div className='contentTitle'>
                The Father of Modern Art
              </div>
              <div className='contentText'>
                <span id="bold">Paul Cézanne</span> (19 January 1839 – 22 October 1906) was a French artist 
                and Post-Impressionist painter whose work laid the foundations of the 
                transition from the 19th-century conception of artistic endeavor to a 
                new and radically different world of art in the 20th century. Cézanne’s 
                often repetitive, exploratory brushstrokes are highly characteristic and 
                clearly recognizable. He used planes of color and small brushstrokes that 
                build up to form complex fields, at once both a direct expression of the 
                sensations of the observing eye and an abstraction from observed nature. 
                The paintings of Cézanne signal the beginning of a new era in art history.
              </div>

              <div className='contentTitle'>
                Early Life
              </div>
              <div className='contentText'>
                Born in Aix-en-Provence, France, to a wealthy family, Cézanne had the support 
                necessary to pursue his passion for painting. Despite his father’s wishes for 
                him to become a lawyer, Cézanne’s desire for art was irrepressible. He moved 
                to Paris, where he met Impressionist painters such as Camille Pissarro, a 
                meeting that would lead him to break away from dark hues and towards the 
                light and airy palette for which he is known today.
              </div>

              <div className='contentTitle'>
                Artistic Journey
              </div>
              <div className='contentText'>
                Cézanne’s initial works reflected the influences of the dark tones of the Romanticism 
                period, and he later transitioned to the lighter Impressionist technique after being 
                influenced by the work of friends like Édouard Manet and Claude Monet. However, Cézanne’s 
                unique method of building form with color and his analytical approach to nature influenced 
                the art of Cubists, Fauvists, and successive generations of avant-garde artists.

                <br></br>
                <br></br>
                <br></br>

                Paul Cézanne’s approach to creating art was meticulous and involved intense, almost meditative, 
                concentration. This laborious method was also evident in his repeated studies of a single subject, 
                such as the iconic Mont Sainte-Victoire series, which he painted many times to capture the varying 
                light and seasons.
              </div>

              <div className='contentTitle'>
                Legacy
              </div>
              <div className='contentText'>
                Cézanne’s exploration of geometric simplification and optical phenomena inspired many artists who followed. 
                His work reflects a mastery of design, color, tone, composition, and draftsmanship. His legacy is a testimony 
                to the statement made by both Matisse and Picasso: “Cézanne is the father of us all.”

                <br></br>
                <br></br>
                <br></br>

                Despite his profound influence on modern art, Cézanne was not widely appreciated until the end of his life. 
                Today, his works are exhibited in the world’s most prestigious museums, and he is celebrated for his contribution 
                to the evolution of modern art.
              </div>


              <div className='contentTitle'>
                A Visionary
              </div>
              <div className='contentText'>
                Cézanne’s work constitutes a dialogue between the artist’s inner vision and the outer reality, 
                often giving precedence to the former. He himself famously remarked, “I want to make of 
                impressionism something solid and lasting like the art in the museums.” It is this ambition 
                and his deep study of his subjects that make Cézanne’s art both timeless and revolutionary.
              </div>


              <div className='contentTitle'>
                Celebrating Cézanne
              </div>
              <div className='contentText'>
                This website is dedicated to celebrating the life, work, and enduring impact of Paul Cézanne.
                 Here, you will find a comprehensive collection of his paintings, a detailed biography, an 
                 examination of his techniques, and a look at his influence on subsequent generations of artists. 
                 Join us in exploring the world of Cézanne, and gain insight into the man who forever changed the 
                 face of art.
              </div>
              <br></br>
              <br></br>

              <div className='container'>
                <div className='verticalLine'></div>
                <div className='contentText withBottomPadding'>
                  <span id="bold">“To paint is not to copy the object slavishly, it is to grasp a harmony among many 
                  relationships.”</span>
                  <br></br>
                  <br></br>
                  Paul Cézanne
                </div>
              </div>

            </div>

            <div className = "imageContainer">
              <img className = "image" src={Image4} ></img>
            </div>
 

          </div>





        </div>

      </div>
  );
}

export default About;
