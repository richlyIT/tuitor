import React from 'react';
import Card2 from '../components/card2';
import TitleBar from '../components/title-bar'
import logo from '../assets/jason-goodman-6awfTPLGaCE-unsplash.jpg';
import Slider from 'react-slick';
//import lego from '../assets/quotes.png';

function Signup() {

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      {/*Array.map(item =>  (
        console.log(item.title +" "+ item.cardElements.map(element =>(console.log(element.name))))
      ))*/}
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
    </div>
  )
}

export default Signup