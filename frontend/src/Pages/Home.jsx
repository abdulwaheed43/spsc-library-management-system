// import React from "react";
// import Hero from "../Components/Hero";
// import LatestCollection from "../Components/LatestCollection";
// import BestSeller from "../Components/BestSeller";
// import OurPolicy from "../Components/OurPolicy";
// import NewsletterBox from "../Components/NewsletterBox";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <LatestCollection />
//       <BestSeller />
//       <OurPolicy />
//       <NewsletterBox />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import SPSC from "../Components/spsc";
import OurPolicy from "../Components/OurPolicy";
import NewsletterBox from "../Components/NewsletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <SPSC />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;