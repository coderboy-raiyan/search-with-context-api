import { useEffect, useState } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return {
    foods,
    setFoods,
  };
};

export default useFoods;
