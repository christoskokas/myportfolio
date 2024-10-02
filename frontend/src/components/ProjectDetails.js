import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/projects/${id}`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.error("Error fetching project details", error);
      });
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-details-container">
      <h1 className="project-title">{project.title}</h1>

      {/* Video Carousel for up to 3 videos */}
      <div className="project-video-carousel">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={5000} transitionTime={1000}>
          {project.videos.map((video, index) => (
            <div key={index} className="carousel-video">
              <video controls>
                <source src={`http://127.0.0.1:5000/static/videos/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="project-description">
        <p>{project.detailed_description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
