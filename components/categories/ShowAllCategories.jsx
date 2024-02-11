import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../Redux/fetchData/allCategories";
import { Text } from "react-native";
import ModelCategory from "./showModel/ModelCategory";
import Loading from "../tools/loading/Loading";



const ShowAllCategories = () => {

  // use redux fetch all category from api
  const fetchAllCategory = useSelector((state) => state.category);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


  return (
    <>
      {fetchAllCategory.loading ? (
        <Loading />
      ) : !fetchAllCategory.loading && fetchAllCategory.error ? (
        <Text>Error: {fetchAllCategory.error}</Text>
      ) : null}

      {!fetchAllCategory.loading ? (
         // show all categories
        <ModelCategory dataCard={fetchAllCategory.Categories} />
      ) : null}
    </>
  );
};


export default ShowAllCategories;