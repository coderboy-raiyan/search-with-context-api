import React, { createContext } from "react";
import useFoods from "./../hooks/useFoods";

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const allFoods = useFoods();
  return (
    <FoodContext.Provider value={allFoods}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
