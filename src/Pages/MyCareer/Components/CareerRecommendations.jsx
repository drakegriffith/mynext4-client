import './CareerRecommendations.css';
import { Carousel } from 'react-responsive-carousel';
import CollegeCard from '../../../Components/CollegeCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function CareerRecommendations () {

    

    return (
        <div className='root-career-recs'>
            <h1>
                Careers picked for you!
            </h1>
            <Carousel infiniteLoop = {true}
            showThumbs={false}>
                <div className='carousel-elements'
                data-testid = "CR-Carousel">
                    <CollegeCard />
                    <CollegeCard />
                    <CollegeCard />
                </div>

                <div className='carousel-elements'>
                    <CollegeCard />
                    <CollegeCard />
                    <CollegeCard />
                </div>

                <div className='carousel-elements'>
                    <CollegeCard />
                    <CollegeCard />
                    <CollegeCard />
                </div>
            </Carousel>
        </div>

       
    );
};

export default CareerRecommendations;