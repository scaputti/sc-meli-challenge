import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/layout';
import SearchCard from '../../components/searchCard';
import './styles.scss';

const Search = () => {
  const [itemsList, setItems] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('search');
  
  useEffect(() => {  
    const fetchProducts = async () => {
      return await fetch(`http://localhost:3000/api/items?q=${id}`)
        .then((response) => response.json())
        .then((data) => setItems(data));
    };
    fetchProducts();
  }, [id]);

  return(
    <Layout breadCrumbInfo={itemsList?.categories}>
      <div className='results'>
        {itemsList?.items.map((x, i) => 
          <SearchCard item={x} key={i} />
        )}
      </div>
    </Layout>
  );
}

export default Search;