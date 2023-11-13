import React from 'react'
import ReactCardSlider from "react-card-slider-component";
import CardSlider1 from"../../../assets/img/1.jpg"
import CardSlider2 from"../../../assets/img/2.jpg"
import CardSlider from"../../../assets/img/3.jpg"
import CardSlider4 from"../../../assets/img/4.jpg"
import CardSlider5 from"../../../assets/img/5.jpg"
const Slider = (props) => {

console.log(props[20].image_url);

  const slides = [
    {
      image:CardSlider1,
      title: "This is a title 1",
      description: "Villa",
      clickEvent: "sliderClick"
    },
    {
      image: CardSlider,
      title: "This is a second title 2",
      description: "Flat"
    ,
      clickEvent: "sliderClick"
    },
    {
      image: CardSlider2,
      title: "This is a third title 3",
      description: "Studio",
      clickEvent: "sliderClick"
    },
    {
      image: CardSlider4,
      title: "This is a third title 4",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image:  CardSlider5,
      title: "This is a third title 5",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: props[20].image_url,
      title: "This is a third title 6",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 7",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 8",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 9",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 11",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 12",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 13",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 14",
      description: "This is a third description",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
     <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto py-10">
     <ReactCardSlider slides={slides} />
     </div>
    </>
  );

}

export default Slider