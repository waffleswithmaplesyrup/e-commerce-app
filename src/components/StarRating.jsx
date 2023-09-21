export default function StarRating({ score }) {

  const stars = Math.floor(score);
  const starsArray = [];
  for (let i=0; i<stars; i++) {
    starsArray.push(i);
  }

  const style = {fillRule: "nonzero", fill: "#ffd055"};

  return (<>
    {starsArray.map( point => <svg key={point} height="25" width="23" className="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={ style } /></svg> )}
    </>);
}