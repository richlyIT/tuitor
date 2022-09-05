import React from 'react'
import Navigation1 from '../components/Navigation1';
import {Container, Row, Col, Card} from 'react-bootstrap';
import home from '../assets/home.png';
import book from '../assets/book.png';
import healthcare from '../assets/healthcare.png';
import more from '../assets/more.png';
import teaching from '../assets/teaching.png';
import planner from '../assets/planner.png';
import './Home.css';

//import slick css
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Home() {
  var discoverArray = [
    {
      title: "Home & Garden",
      logo: home,
      link: "www.youtubee.com"
    },
    {
      title: "Weddings & Events",
      logo: planner,
      link: "www.youtubee.com"
    },
    {
      title: "Health & Wellbeing",
      logo: healthcare,
      link: "www.youtubee.com"
    },
    {
      title: "Business services",
      logo: book,
      link: "www.youtubee.com"
    },
    {
      title: "Lesson & training",
      logo: teaching,
      link: "www.youtubee.com"
    },
    {
      title: "Other services",
      logo: more,
      link: "www.youtubee.com"
    }
  ];

  //Testimonial array of objects
  const testimonialArray = [
    {
      image: teaching,
      name: 'user@3',
      comment: 'Very quickly, had 4 replies. The guy from SJ driveways and landscapes was very efficient and friendly and the work was completed in a short time.'
    },
    {
      image: book,
      name: 'user@3',
      comment: 'Very quickly, had 4 replies. The guy from SJ driveways and landscapes was very efficient and friendly and the work was completed in a short time.'
    },
    {
      image: home,
      name: 'user@3',
      comment: 'Very quickly, had 4 replies. The guy from SJ driveways and landscapes was very efficient and friendly and the work was completed in a short time.'
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Navigation1 />
      <Container className="discover-container">
        <h1 className="text-center mt-4">Discover</h1>
        <Container className="mt-5 discover-container-row-1">
        <Row>
          {discoverArray.map(person =>(
            <Col className="card-col">
              <a href={person.link}>
                <Card className="card-card" style={{ width: '8rem' , height: '12rem'}}>
                  <Container className="card_image d-flex align-items-center justify-content-center mt-2">
                    <img src={person.logo} alt="" style={{width: 50, height: 50, margin: '2rem 0 0 0'}}/>
                  </Container>
                  <Card.Body>
                    <Card.Title className="text-center">{person.title}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        </Container>
      </Container>
      
      {/*Testimonial start */}
      <Container className="light">
        <h1 className="text-center my-5">See what other small businesses have to say about Bark</h1>
        <Slider {...settings}>
        {testimonialArray.map((testimonial)=>(
          <div className="card-container">
            <div className="card-header">
              <img src={testimonial.image} alt='' style={{width: 90, height: 90}}/>
              <span>{testimonial.name}</span>
            </div>
            <div className="card-body">
              <p className="card-text-testimonial" style={{width: 250, height: 'fit-content'}}>
                {testimonial.comment}
              </p>
            </div>
          </div>
        ))}
        </Slider>
        
      </Container>
    </div>
  )
}

export default Home