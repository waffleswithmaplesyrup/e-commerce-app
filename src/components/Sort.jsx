export default function Sort({ products, sortByPrice }) {

  const handleChange = (event) => {
    let sortedArray = [];

    if (event.target.value === "ascending") {
      sortedArray = products.slice().sort((a, b) => {
        return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0;
      });
    } else {
      sortedArray = products.slice().sort((a, b) => {
        return (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0;
      });
    }

    sortByPrice(sortedArray);

  };

  const style = {
    borderLeft: "1px solid rgba(0,0,0,.14)"
  };

  return <>
  <select style={style} className="sort-by-price" onChange={handleChange}>
    <option selected disabled >Sort by Price</option>
    <option value="ascending">lowest to highest</option>
    <option value="descending">highest to lowest</option>
  </select>
  </>
}