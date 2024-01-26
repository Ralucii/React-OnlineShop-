import React, { useEffect } from 'react'
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../Hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats ? subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    ) : ""}
    &[filters][price][$lte]=${maxPrice}${sort !== null ? `&sort=price:${sort}` : ''}`
  );

  return (
    <div className="list">
      {loading ? (
        "loading"
      ) : (
        data !== null ? (
          data.map((item) => <Card item={item} key={item.id} />)
        ) : (
          "No data available"
        )
      )}
    </div>
  );
};

export default List;