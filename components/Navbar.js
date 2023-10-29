'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const handleclear = () => {
    setSearch('');
    setSearchResults(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=VH6DC7T048V5OG4F`
        );
        const jsondata = await response.json();
        setSearchResults(jsondata);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [search]);

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

      <div style={{ position: 'relative' }}>
        <nav className="navbar" style={{ backgroundColor: "#B87333" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link style={{ marginLeft: "20%", color: "black" }} className='navbar-brand' href="/">GrowwStonks <i className="fa-solid fa-arrow-trend-up"></i></Link>
            <form style={{ marginRight: "40%" }}>
              <input style={{ width: "180%" }} className="form-control" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearchChange} />
            </form>
          </div>
        </nav>
        <div style={{ position: 'relative' }}>
          {searchResults && searchResults['bestMatches'] && (
            <ul style={{ position: 'absolute', top: '100%', left: '37%', width: '40%', backgroundColor: 'white', zIndex: 1 }}>
              {Object.entries(searchResults['bestMatches']).map(([key, value]) => (
                <li key={key} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                  <Link onClick={handleclear} href={`/topGainers/${value['1. symbol']}`}>
                    <p className="search-result-link">
                      {value['1. symbol']} ({value['2. name']})
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
