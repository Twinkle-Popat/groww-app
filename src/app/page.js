import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";
import Link from 'next/link'; 
import stockimg from '/public/images/stockimg.jpg'

export default function Home() {
  
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
<div>
      <div className='row' >
        <div className="col-6">
         <div className='my-3 mx-3' >
            <h1 style={{marginLeft:"10%", marginTop:"14%"}}>Your Premier Destination for In-Depth Stock and ETF Information</h1>
          
          <div className='my-3' style={{top:"6px"}}>
          <Link style={{marginLeft:"10%"}} className='underline-button my-3' href="/topGainers"><h5 style={{color:"#66429",fontWeight:"bold", display:"inline"}}>Top gainers</h5></Link>
      <Link style={{marginLeft:"3%"}}className='underline-button my-3' href="/topLosers"><h5 style={{ color:"#66429",fontWeight:"bold", display:"inline"}}>Top Losers</h5></Link>
          </div>
        
          
        
        </div>
        </div>


        <div className="col-6">
        <Image
      src={stockimg}
      width={500}
      height={500}
      alt="Picture of the author"
    />

        </div>

      </div>
      </div>

      





{/* <div className="row my-3 mx-3">

<div class="col-2 card mx-3">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="col-2 card mx-3">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="col-2 card mx-3">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="col-2 card mx-3">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="col-2 card mx-3">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>
       */}




  
</>
  )
}
