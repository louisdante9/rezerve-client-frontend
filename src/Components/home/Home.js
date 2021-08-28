import React from "react";
import { Helmet } from 'react-helmet';
import Nav from '../Nav'
import Footer from '../Footer'
import Header from './Header'
import { Popular } from './PopularDetination'
import CustomerPointer from "./CustomerPointers";
// import { TopTrends } from './TopTrends'
// import { BestDeals } from './BestDeals'
import { Travel } from './Travel'
import CtaBanner from "./CtaBanner";


function Home(props) {
  return (
    <>
      <Helmet>
        <title>Homepage - Rezerve Homes</title>
      </Helmet>
      <Nav />
      <Header />
      <Popular />
      <CustomerPointer />
      {/* <TopTrends />
      <BestDeals /> */}
      <Travel />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
