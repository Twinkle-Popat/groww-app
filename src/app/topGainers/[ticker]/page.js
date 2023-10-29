'use client'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Barchart from '../../../../components/Barchart'
import Linechart from '../../../../components/Linechart'

// labels: ['2023-06', '2023-03', '2022-12', '2022-09','2022-06','2022-03','2021-12', '2021-09', '2021-06', '2021-03','2020-12','2020-09','2020-06', '2020-03', '2019-12', '2019-09','2019-06','2019-03','2018-12', '2018-09'],
const Page = ({ params }) => {

  

  const[data, setData] = useState(null);
    const [value, setValue] = useState(157); 
  const[grossProfitData1, setGrossProfitData1] = useState(null);
  const[grossProfitData2, setGrossProfitData2] = useState(null);
  const[totalrevenue, setTotalrevenue] = useState(null);
  const[netincome, setNetincome] = useState(null);

  const[Yearly, setYearly] = useState(null);

  

    const handleChange = (e) => {
        setValue(e.target.value); 
    };

    

 


    useEffect(() => {
      console.log('useEffect is running');
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.ticker}&apikey=ODPAGM4ZJI2XYKN5`);
          const jsondata = await response.json();
         console.log(jsondata);
          setData(jsondata);
  
          const response2 = await fetch(
            `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${params.ticker}&apikey=ODPAGM4ZJI2XYKN5`);
          const jsondata2 = await response2.json();
        console.log('jsondata2',jsondata2);

        const grossProfits = jsondata2.annualReports.map(report => parseFloat(report.grossProfit) / 1000000);
        setGrossProfitData1(grossProfits);

        const grossProfits2 = jsondata2.quarterlyReports.map(report => parseFloat(report.grossProfit) / 1000000);
        setGrossProfitData2(grossProfits2);

        const totalrevenue = jsondata2.annualReports.map(report => parseFloat(report.totalRevenue) / 1000000);
        setTotalrevenue(totalrevenue);

        const netincome = jsondata2.annualReports.map(report => parseFloat(report.netIncome) / 1000000);
        setNetincome(netincome);

        console.log('grossProfits',grossProfits);
        console.log('grossProfits2',grossProfits2);
        console.log('totalrevenue',totalrevenue);
        console.log('netincome',netincome);
          
          
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData(); 
     
      // Run the fetchData function when the component is mounted
    }, [params.ticker]); // Empty dependency array ensures this runs only once on component mount


  
  
    const handleclick1 = () => {
      console.log('clicked');
     
      setYearly(true);
      console.log(Yearly);
      
    }

    const handleclick2 = () => {
      console.log('clicked');
      
      setYearly(false);
      
    }
  

  
    
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

<Script src="https://kit.fontawesome.com/0351d91eea.js" crossorigin="anonymous" />
<Script
  src="path/to/chartjs/dist/chart.umd.js"
  
/>



      <div className='container my-3' style={{width:"50%", height:"50%", border:"gray 1px solid", borderRadius:"8px", marginTop:'3%'}}> 
      <div className='my-3'>
      <Linechart yearly={Yearly} data1={grossProfitData1} data2={grossProfitData2} />
      </div>
     <div className="row my-3" style={{marginLeft:"35%",width:"30%", borderRadius:"50px", border:"1px solid gray"}}>
      <div className="col-6 my-2" style={{textAlign:"right"}}>
<button className="circle-button" onClick={handleclick1} style={{fontSize:"13px",fontWeight:"bold"}}>3M</button>
      </div>
      <div className="col-6 my-2">
        <button className="circle-button" style={{fontSize:"13px",fontWeight:"bold"}} onClick={handleclick2}>1Y</button>
      </div>
     </div>

<div className='my-3'>
     <Barchart totalRevenue={totalrevenue} netIncome={netincome} />
     </div>
    
      </div>
{data? (
      <div className='container my-2' style={{ width: "50%", height: "50%", border: "gray 1px solid", borderRadius: "8px", marginTop: '3%' }}>
  <div className='my-2' style={{ borderBottom: "1px solid gray" }}>
    <h6 style={{fontWeight:"bold"}} className='my-2'>{data.Symbol} - {data.Name}</h6>
  </div>

  <div>
    <p className='my-2' style={{fontSize:"12px"}}>{data.Description}</p>
  </div>
  
  <div className="row">
  <div className='col-3'style={{margin:"15px",borderRadius:"15px", backgroundColor:"#edbd91"}}>
  <p  className='my-2' style={{fontSize:"10px", color:"#774213", fontWeight:"bold"}}> 
  SECTOR: {data.Sector}
  </p>
  </div>
  <div className='col-5' style={{marginTop:"15px", marginBottom:"15px",borderRadius:"15px", backgroundColor:"#edbd91"}}>
  <p className='my-2' style={{fontSize:"10px",color:"#774213", fontWeight:"bold"}}> 
  INDUSTRY: {data.Industry}
  </p>
  </div>
  </div>

<div className="row">
  <div className="col-2" style={{textAlign:"right"}}>
    <p style={{fontSize:"12px",marginBottom:"0"}}>52-week Low</p>
    <p style={{ fontSize: "13px", fontWeight: "bold" }}>
  ${data['52WeekLow']}
</p>

  </div>
  <div className="col-8">
  <input  
                className='range-slider'
                type="range" 
                min="123" 
                max="197" 
                value={value} 
                onChange={handleChange}
                style={{display:"inline", width:"100%" }}
            />
  </div>
  <div className="col-2">
    <p  style={{fontSize:"12px",marginBottom:"0"}}>52-week High</p>
    <p style={{ fontSize: "13px", fontWeight: "bold" }}>
  ${data['52WeekHigh']}</p>
  </div>
</div>

<div style={{width:"22%",marginTop:"15px", marginBottom:"15px",borderRadius:"15px", backgroundColor:"#edbd91"}}>
<p className='my-2' style={{fontSize:"10px",color:"#774213", fontWeight:"bold",padding:"8px"}}> 
  CURRENT VALUE: ${value}
  </p>
</div>

<div className="row my-3">
  <div className="col-2 mx-3">
    <p style={{fontSize:"12px",marginBottom:"0"}}>Market Cap</p>
    <p style={{fontSize:"13px", fontWeight:"bold"}}>${data.MarketCapitalization}</p>
  </div>
  <div className="col-2 mx-2">
    <p style={{fontSize:"12px",marginBottom:"0"}}>P/E Ratio</p>
    <p style={{fontSize:"13px", fontWeight:"bold"}}>{data.PERatio}</p>
  </div>
  <div className="col-2 mx-2">
    <p style={{fontSize:"12px",marginBottom:"0"}}>Dividend Yield</p>
    <p style={{fontSize:"13px", fontWeight:"bold"}}>{data.DividendYield}%</p>
  </div>
  <div className="col-2 mx-2">
    <p style={{fontSize:"12px",marginBottom:"0"}}>Beta</p>
    <p style={{fontSize:"13px", fontWeight:"bold"}}>{data.Beta}</p>
  </div>
  <div className="col-2 mx-2">
    <p style={{fontSize:"12px",marginBottom:"0"}}>Profit Margin</p>
    <p style={{fontSize:"13px", fontWeight:"bold"}}>{data.ProfitMargin}</p>
  </div>
</div>

  
  
</div>):(<p>nothing to show</p>)
}

    
      </>
    );
};

export default Page;
