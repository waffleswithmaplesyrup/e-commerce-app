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

  return <>
    <p>Categories:</p>
    <select onChange={handleChange} name="categories" >
      {categories?.map(category => <option key={category} value={category} >{category}</option>)}
    </select>
  </>
}