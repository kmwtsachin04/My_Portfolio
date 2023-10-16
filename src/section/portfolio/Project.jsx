import Card from '../../components/Card'

const Project = ({project}) => {
  return (
  <Card className="portfolio__project">
    <div className="portfolio__project-image">
        {/* <video src={project.video} controls loop muted alt="Portfolio Project Image" ></video> */}
        <img src={project.video} alt="Portfolio_Project_Image" />
    </div>
    <h4>{project.title}</h4>
    <p>{project.desc}</p>
     <div className="portfolio__project-cta">
     <a href={project.demo} className='btn sm' target='_blank' rel='noopner noreferrer'>Live Demo</a>
<a href={project.github} className='btn sm primary' target='_blank' rel='noopner noreferrer'>GitHub</a>
     </div>
  </Card>
  )
}

export default Project