import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch'; // Updated import statement


const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products </h1>
        <p>Explore our exclusive selection of Featured Products, where we showcase top-rated and highly recommended items that have captured the attention of our customers. From cutting-edge electronics to luxurious home decor, these handpicked products represent the best of what our online store has to offer, providing you with a curated assortment of standout items that are guaranteed to impress. Don't miss out on our Featured Products collection and discover the latest and greatest products that have earned their spot in the spotlight.</p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
