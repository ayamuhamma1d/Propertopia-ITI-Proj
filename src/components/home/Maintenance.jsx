import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/img/Maintenance/gettyimages-1029425412-612x612.jpg";
import img2 from "../../assets/img/Maintenance/gettyimages-1063250820-612x612.jpg";
import img3 from "../../assets/img/Maintenance/gettyimages-1268557129-612x612.jpg";
import img4 from "../../assets/img/Maintenance/gettyimages-1308683122-612x612.jpg";
import img5 from "../../assets/img/Maintenance/gettyimages-1341482840-612x612.jpg";
import img6 from "../../assets/img/Maintenance/gettyimages-961748068-612x612.jpg";
import img7 from "../../assets/img/Maintenance/img7 (1).jpg";
import img8 from "../../assets/img/Maintenance/img7 (2).jpg";
import img9 from "../../assets/img/Maintenance/img7 (3).jpg";
const Maintenance = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10 text-center">
      <h5 className="font-bold text-3xl font-serif capitalize  text-center">
        Maintenance
      </h5>
      <Carousel
        className="mt-10"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        autoPlay={true}
        autoPlaySpeed={500}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Maintenance;
