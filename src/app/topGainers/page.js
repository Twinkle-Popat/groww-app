"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const TopGainers = () => {
  const [data, setData] = useState(null);
  const [topGainers, setTopGainers] = useState([]);

  
    const [visibleCount, setVisibleCount] = useState(10);
    
    const loadMore = () => {
      setVisibleCount(visibleCount + 20);
    };
  

  useEffect(() => {
    console.log('useEffect is running');
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=ODPAGM4ZJI2XYKN5'
        );
        const jsondata = await response.json();
        setData(jsondata);

        const { top_gainers } = jsondata;
        setTopGainers(top_gainers);
        console.log('top_gainers: ', top_gainers);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); 
  }, []); 

  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />

      <Script src="https://kit.fontawesome.com/0351d91eea.js" crossorigin="anonymous"></Script>
      <div className="my-3">
        <Link style={{ marginLeft: '6%' }} className="underline-button2" href="/topGainers">
          <h6 style={{ fontWeight: 'bold', display: 'inline' }}>Top gainers</h6>
        </Link>
        <Link style={{ marginLeft: '1%' }} className="underline-button2" href="/topLosers">
          <h6 style={{ fontWeight: 'bold', display: 'inline' }}>Top Losers</h6>
        </Link>
      </div>

      <div className="container">
  {!topGainers? (
    <p>Might your daily api call reached the limit :(</p>
  ) : (
    <div className="row">
      {topGainers.slice(0, visibleCount).map((gainer, index) => (
        <div className="col-2 card mx-3 my-2" key={index}>
          {/* You can include an image if you have the image source in your data */}
          {/* <img src={gainer.imageSrc} className="card-img-top" alt={gainer.name} /> */}
          <div className="card-body">
            <h6 style={{fontWeight:"bolder"}} className="card-title">{gainer.ticker}</h6>
            <p className="card-text">
              <p >
                ${gainer.price}
              </p>
            </p>
            <p style={{ color: gainer.price >= 0 ? 'green' : 'red' }} className="card-text">{gainer.change_percentage}</p>

            <Link style={{ marginLeft: '6%' }} className="underline-button2" href={`/topGainers/${gainer.ticker}`}>
          <h6 style={{ fontWeight: 'bold', display: 'inline' }}>More Info</h6>
        </Link>
            {/* You can include a link if you have a 'link' property in your data */}
            {/* <a href={gainer.link} className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      ))}
    </div>
  )}
  {topGainers?(visibleCount < topGainers.length && (
    <div className="text-center">
      <button className="underline-button my-3" style={{ color: "#B87333" }} onClick={loadMore}>
        Load More <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  )):(<p></p>)}
</div>

    </>
  );
};

export default TopGainers;
