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

import Footer from '../components/footer';
//import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Card1 from '../components/card1';
import logo from '../assets/jason-goodman-6awfTPLGaCE-unsplash.jpg';
import lego from '../assets/quotes.png';
import TitleBar from '../components/title-bar';
import Card2 from '../components/card2';
function Home() {

//This array contains objects
//For the title bar and the cards
//if you want to add some cards or the change some properties as the name of the card for example
//change it here and it will appear in the page 
  var Array = [
    {
      title: "Business services",
      link: "www.youtube.com",
      cardElements: [
        {
          image: logo,
          name:'Web Design',
          link: '',
        },
        {
          image: logo,
          name: 'Accounting',
          link: 'www.youtube.com',
        },
        {
          image: logo,
          name: 'Social Media Marketing',
          link: 'wwww.youtube.com',
        },
      ]
    },
    {
      title: "Weddings & Events",
      link: "www.youtube.com",
      cardElements: [
        {
          image: logo,
          name:'Magician',
          link: '',
        },
        {
          image: logo,
          name: 'Wedding Photography',
          link: 'www.youtube.com',
        },
        {
          image: logo,
          name: 'Social Media Marketing',
          link: 'wwww.youtube.com',
        },
      ]
    },
    {
      title: "Health & Wellbeing",
      link: "www.youtube.com",
      cardElements: [
        {
          image: logo,
          name:'Personal Training',
          link: '',
        },
        {
          image: logo,
          name: 'Counseling',
          link: 'www.youtube.com',
        },
        {
          image: logo,
          name: 'Massage Therapy',
          link: 'wwww.youtube.com',
        },
      ]
    },
  ];

//This array contains all the properties for the discover section (part1)
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


//This array contains the settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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


//This array contains the settings for the testimonials 
  var cardArray = [
    {
      name: 'Deo Obomby',
      image: lego,
      profilePic: logo,
      testimonial: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    },
    {
      name: 'Deo Gerard',
      image: lego,
      profilePic: logo,
      testimonial: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    },
    {
      name: 'Deo Gerard',
      image: lego,
      profilePic: logo,
      testimonial: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    },
    {
      name: 'Deo Gerard',
      image: lego,
      profilePic: logo,
      testimonial: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    },
    {
      name: 'Deo Ondaye',
      image: lego,
      profilePic: logo,
      testimonial: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    }
  ]


  return (
    <div>
      <Navigation1 />
      <Container className="discover-container">
        <h1 className="text-center mt-4">Discover</h1>
        <Container className="mt-5 discover-container-row-1 mb-5">
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
        <Container>
          {/*------discovery part 2 start-------*/}
          {
            Array.map((item) =>{
                return (
                  <div className="container">
                    <TitleBar title={item.title} link={item.link} />
                    <div className="container mb-5">
                      <Slider {...settings}>
                        {
                          item.cardElements.map((element) =>{
                            return(
                              <Card2 link={element.link} image={element.image} name={element.name} />
                            )
                          })
                        }
                      </Slider>
                    </div>
                  </div>
                )
              })
          }
          {/*------discovery part 2 end-------*/}
        </Container>
      </Container>


      {/*Testimonial start */}
        <h1 className="text-center my-5">See what other small businesses have to say about Bark</h1>
            <div className="container">
              <div className="container">
                <Slider {...settings}>
                  {cardArray.map((testimonialObject)=>(
                    <Card1 name={testimonialObject.name} image={testimonialObject.image} testimonial={testimonialObject.testimonial} profilePic={testimonialObject.profilePic}/>
                  ))}        
                </Slider>
              </div>
            </div>
      {/*Testimonial end */}

      <Footer/>      
    </div>
  )
}

export default Home