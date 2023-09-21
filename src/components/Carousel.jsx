export default function Carousel({ images }) {

  return <div className="carousel-container">
  <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    {images?.map( (image, index) => <CarouselButton key={index} image={image} index={index} /> )}
  </div>
  <div className="carousel-inner">
    {images?.map( (image, index) => <CarouselImage key={index} image={image} index={index} />)}
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
  </div>
}

function CarouselImage({ image, index }) {

  if (index === 0) {
    return <>
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt={image} />
    </div>
  </>;
  } else {
    return <>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt={image} />
    </div>
    </>;
  }

}

function CarouselButton({ index }) {
  if (index === 0) {
    return <>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${index}`} className="active" aria-current="true" aria-label={`Slide ${index+1}`}></button>
    </>;
  } else {
    return <>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${index}`} aria-label={`Slide ${index+1}`}></button>
    </>;
  }
}