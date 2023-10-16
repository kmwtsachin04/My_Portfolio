import AboutImage from '../../assets/hhh.jpg'
import SachinCV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi';
import data from './data'
import Card from'../../components/Card';
import './about.css'


const About = () => {
  return (
    <section id="about">
         <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="About_image" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
            {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
            </div>
            <p>
            I am a highly skilled and versatile software engineer who has expertise in both front-end and back-end development (Fullstack Developer). strong understanding of web development.
            </p>
            <p>
            Technologies such as HTML, CSS, JavaScript, BootStrap, Tailwind CSS and frameworks like ReactJs, and NodeJs. With their ability to work on both the client and server side of an application, I am able to design, develop and maintain complete web applications.
            </p>
            <a href={SachinCV} download className='btn primary'>Download CV<HiDownload/></a>
          </div>
         </div>
    </section>
  )
}

export default About;