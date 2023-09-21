import { useEffect, useState } from "react";

export default function Categories({ filterByCategory }) {
  const [categories, setCategories] = useState([]);

  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    const fetchCategories = async () => {
      const request = await fetch(`${BASE_URL}/products/categories`);
        const data = await request.json();
        // console.log("categories", data);
        setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    filterByCategory(event.target.value);
  };

  const style = {
    borderRight: "1px solid rgba(0,0,0,.14)"
  };

  return <>
    <select style={style}  onChange={handleChange} name="categories" >
      <option selected disabled >Categories</option>
      {categories?.map(category => <option key={category} value={category} >{category}</option>)}
    </select>
  </>
}