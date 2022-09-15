import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { useParams } from "react-router-dom";
import './styles.scss';

const Detail = () => {
  const {id} = useParams();
  const [detailInfo, setDetailInfo] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      return await fetch(`http://localhost:3000/api/items/${id}`)
        .then((response) => response.json())
        .then((data) => setDetailInfo(data.item));
    };
    fetchProducts();
  }, []);

  return(
    <Layout breadCrumbInfo={detailInfo?.categories}>
      {detailInfo && 
        <div className='product-detail'>
        <img className='thumbnail' src={detailInfo.picture} />
        <div className='buy'>
          {detailInfo.condition === "new" && (
          <span className='condition'>
            Nuevo - {detailInfo.sold_quantity} vendidos
          </span> 
          )}
          {detailInfo.condition === "used" && (
          <span className='condition'>
            Usado - {detailInfo.sold_quantity} vendidos
          </span>
          )}
          <span className='title'>{detailInfo.title}</span>
          <span className='price'>
            {detailInfo.price.currency} {detailInfo.price.amount}
          </span>
          <button className='btn-buy'>
            Comprar
          </button>
        </div>
        <div className='product-descr'>
          <span className='title'>Descripción del producto</span>
          <span className='text'>
            {detailInfo.description}
          </span>
        </div>
      </div>
      }
    </Layout>
  );
}

export default Detail;