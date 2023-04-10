import './App.css';
import logo from './img/logo.png'
import hero from './img/hero-image.jpg'
import logo1 from './img/company-logo-layer.png'
import logo2 from './img/company-logo-catalog.png'
import logo3 from './img/company-logo-sisyphus.png'
import logo4 from './img/company-logo-circooles.png'
import logo5 from './img/company-logo-quotient.png'
import about from './img/about-image.png'
import play from './img/play-circle.svg'
import message from './img/message-chat-circle.svg'
import zag from './img/zap.svg'
import {AiOutlineMenu} from "react-icons/ai"

function App() {
  const options = ['One', 'Two', 'Three', 'Four', 'Five'];
  const onOptionChangeHandler = (event) => {

  }
  return (
    <div className='body'>
      <div className='first'>
        <div className='firstfirst'>
          <div className='nav'>
            <div className='left'>
              <img src={logo} alt='logo' className='logo-image'></img>
              <div className='hourglass'>Hourglass</div>

              <div className='home'>Home</div>
              <select onChange={onOptionChangeHandler} className='products'>

                <option>Products</option>
                {options.map((option, index) => {
                  return <option key={index} >
                    {option}
                  </option>
                })}
              </select>
              <select onChange={onOptionChangeHandler} className='products'>
                <option>Resources</option>
                {options.map((option, index) => {
                  return <option key={index} >
                    {option}
                  </option>
                })}
              </select>
            </div>
            <div className='right'>
              <div className='support'>Support</div>
              <div className='sales'>Talk to sales</div>
            </div>
          </div>
          <div className='nav2'>
          <img src={logo} alt='logo' className='logo-image'></img>
                <AiOutlineMenu style={{fontSize:"xx-large"}}/>
          </div>
          <div className='bada'>
            We design physical <span style={{textDecoration:"underline"}}>experiences</span> that create more happy in the world
          </div>
          <div className='chotta'>
            -- we are a full- service interior  design agency who specialise in simple, useful and beautiful solutions for any space.
          </div>
          <div className='both'>
            <div className='showreel'>
              <img src={play} alt='play' style={{ marginRight: "10px" }}></img>
              Showreel
            </div>
            <div className='touch'>Get in touch</div>
          </div>
          <div className='photo'>
            <img src={hero} className='hero' alt='hero'></img>
          </div>
        </div>
        <hr ></hr>
        <div className='firstsecond'>
          <div className='great'>We have worked with some great startups
          </div>
          <div className='logos'>
            <img src={logo1} className='logo1' alt='hero'></img>
            <img src={logo2} className='logo1' alt='hero'></img>
            <img src={logo3} className='logo1' alt='hero'></img>
            <img src={logo4} className='logo1' alt='hero'></img>
            <img src={logo5} className='logo1' alt='hero'></img>
          </div>

        </div>
      </div>

      <div className='second'>
        <div className='badiclass'>

          <div className='leftwala'>
            <div className='we'>
              Who we are
            </div>
            <div className='designer'>
              Commercial interior designers
            </div>
            <div className='untitled'>
              Untitled are a commercial interior design studeo. We specialise in customised office design, restaurant design, shop design and studio design.
            </div >
          </div>

          <div className='rightwala'>
            <div className='share'>
              <div className='chottashare'>

                <img src={message} className='message' alt='hero'></img>
                Share team inboxes
              </div>
              <div className='badashare'>
                Wheather you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in loop.
              </div>
            </div>

            <div className='deliver'>
              <div className='chottadeliver'>
                <img src={zag} className='message' alt='hero'></img>
                Deliver instant answers
              </div>
              <div className='badadeliver'>
                All all in one customer service plateform that helps you balance everything your customers need to be happy.
              </div>
            </div>
          </div>
         
        </div>
        
        <div className='bottomphoto'>
          <img src={about} className='about' alt='about'></img>
        </div>
        <hr></hr> 
        <div className='secondbottom'>
          <div className='leftside'>
            <div className='leftsidefirst'>
              <img src={logo} alt='logo' className='logo-image'></img>
              <div className='hourglass'>Hourglass</div>
            </div>

            <div className='leftsidesecond'>
              <div className='don'> Overview</div>
              <div className='don'>Features</div>
              <div className='don'>Pricing</div>
              <div className='don'>Careers</div>
              <div className='don'> Help</div>
              <div className='don'>Privacy</div>
            </div>
          </div>
          <div className='rightside'>
            <div className='rightsidefirst'>
              Stay up to date
            </div>
            <div className='rightsidesecond'>


              <input type="email" placeholder='Enter your email' id="email" name="email"></input>

              <div className='button'>Subscribe</div>

            </div>
          </div>
        </div>
        <hr></hr>
         
         <div className='firstbottom'>
          <div className='firstbottomleft'>
            &copy; 2077 Fake Company. All rights reserved
          </div>
          <div className='firstbottomright'>
            <div className='term'>Terms </div>
            <div className='term'>Privacy</div>
            <div className='term'>Cookies</div>
          </div>
         </div>

      </div>

    </div>
  );
}

export default App;
