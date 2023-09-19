export default function Carousel({ images }) {

  const pics = images;

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        { pics.map((pic, index) => <CarouselIndicators key={index} pic={pic} index={index} />) }
      </div>
      <div className="carousel-inner">
        { pics.map((pic, index) => <CarouselImages key={index} pic={pic} index={index} />) }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

//* carousel components
const CarouselIndicators = ({index}) => {
  if (index === 0) {
    return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index+1}`} />;
  } else {
    return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index+1}`} />;
  }
};

const CarouselImages = ({pic, index}) => {
  if (index === 0) {
    return (<div className="carousel-item active">
    <img src={`${pic}`} 
    alt={pic} />
    </div>);
  } else {
    return (<div className="carousel-item">
    <img src={`${pic}`} 
    alt={pic} />
    </div>);
  }
};