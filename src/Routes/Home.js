// Home.js
import React from 'react';
import './Home.css';
import Image1 from '../Images/Image1.jpeg'
import Image2 from '../Images/Image2.jpeg'
import Image3 from '../Images/Image3.jpeg'



const Home = () => {
  return (
    <div className='container'>
      <div className='leftColumn'>
        
      </div>

      <div className='rightColumn'>
        <div className='stackedContent'>

          <div className='container'>
            <div className="content">
              <div className='contentTitle'>
                La Route tournante à Montgeroult (1898)– Paving the Artistic Future
              </div>
              <div className='contentText'>
                As the 19th century folded into the pages of history, the art world 
                found itself at the threshold of a new era, with Paul Cézanne leading 
                the charge. “La Route tournante à Montgeroult,” painted in 1898, stands 
                as a remarkable testament to Cézanne’s pivotal role in shaping the future 
                of visual art. This masterpiece not…
              </div>
            </div>

            <div className = "imageContainer">
              <img className = "image" src={Image1}></img>
            </div>
          </div>


          <div className='container'>
            <div className="content">
              <div className='contentTitle'>
                The Road Bridge at L’Estaque (1879-1882): Constructing the Modern Landscape
              </div>
              <div className='contentText'>
                In the rich tapestry of Paul Cézanne’s artistic oeuvre, “The Road Bridge at
                 L’Estaque” holds a distinct place, stitched with the delicate threads of 
                 transition and anticipation of the modern art movement. Created between 1879 
                 and 1882, this landscape painting is more than a visual record of the Provençal 
                 countryside; it is a reflection of…
              </div>
            </div>

            <div className ="imageContainer">
              <img className ="image" src={Image2} height={"640px"} ></img>
            </div>
          </div>


          <div className='container'>
            <div className="content">
              <div className='contentTitle'>
                Mount Sainte-Victoire (ca. 1904): The Pinnacle of Perception
              </div>
              <div className='contentText'>
                Paul Cézanne’s series of paintings featuring Mount Sainte-Victoire, a 
                limestone mountain overlooking Aix-en-Provence, stand as some of the 
                most celebrated landscapes in art history. Among these, the version 
                created around 1904 is particularly noteworthy, encapsulating the 
                quintessence of Cézanne’s later work and his impact on the trajectory 
                of modern art. This blog post will ascend…
              </div>
            </div>

            <div className ="imageContainer">
              <img className ="image withBottomPadding" src={Image3} height={"620px"} ></img>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
