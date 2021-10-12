import { useContext } from "react";
import { FoodContext } from "../context/FoodProvider";

const useAllFoods = () => {
  return useContext(FoodContext);
};
export default useAllFoods;
