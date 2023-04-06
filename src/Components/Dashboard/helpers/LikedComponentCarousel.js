import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MediumCollege } from '../../MyComponents/MyColleges/College';
import { MediumCourse } from '../../MyComponents/MyCourses/Course';
import { MediumCareer } from '../../MyComponents/MyCareers/Career';
import "./DashboardHelper.css"

export const MediumCollegeCarousel = ({ items }) => {
  const slides = [];
  for (let i = 0; i < items.length; i += 4) {
    const slideItems = items.slice(i, i + 4);
    const slide = (
        <div key={i} className="centered-slide">
        <div className="slide-container">
          {slideItems.map(item => (
            <MediumCollege college={item} />
          ))}
        </div>
      </div>
      );
    slides.push(slide);
  }

  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showThumbs={false} showStatus={false}>
      {slides}
    </Carousel>
  );
};

export const MediumCareerCarousel = ({ items }) => {
    const slides = [];
    for (let i = 0; i < items.length; i += 4) {
      const slideItems = items.slice(i, i + 4);
      const slide = (
        <div key={i} className="centered-slide">
        <div className="slide-container">
          {slideItems.map(item => (
            <MediumCareer career={item} />
          ))}
        </div>
      </div>
      );
      slides.push(slide);
    }
  
    return (
      <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showThumbs={false} showStatus={false}>
        {slides}
      </Carousel>
    );
  };

  
  export const MediumCourseCarousel = ({ items }) => {
    const slides = [];
    for (let i = 0; i < items.length; i += 4) {
      const slideItems = items.slice(i, i + 4);
      const slide = (
        <div key={i} className="centered-slide">
        <div className="slide-container">
          {slideItems.map(item => (
            <MediumCourse course={item} />
          ))}
        </div>
      </div>
      );
      slides.push(slide);
    }
  
    return (
      <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showThumbs={false} showStatus={false}>
        {slides}
      </Carousel>
    );
  };
  



