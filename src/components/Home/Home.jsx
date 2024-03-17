import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import SectionText from '../SectionText/SectionText';
import ShoppingEssentials from '../ShoppingEssentials/ShoppingEssentials';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionPicture from '../SectionPicture/SectionPicture';

function Home() {
  return (
    <>
      <Header />
      <SectionText>
        <h2
          className="section-text p-5 fw-bolder  responsive-font-example  text-center cabin   mx-auto "
          style={{
            // fontSize: '3.9rem',

            lineHeight: '1.5',
          }}
        >
          Puremod Elegance for Elevated Everyday Life. Styles change with
          seasons, united by the liberating essence of travel-inspired
          lightheartedness.
        </h2>
      </SectionText>
      <ShoppingEssentials />
      <SectionTwo />
      <SectionText>
        <h2
          className="section-text p-5 fw-bolder  responsive-font-example  text-center cabin   mx-auto  "
          style={{
            // fontSize: 'rem',

            lineHeight: '1.5',
          }}
        >
          WANT TO DESIGN YOUR OWN?
          <br />
          <span>CALM, WE CAN DO IT</span>
        </h2>
      </SectionText>
      <SectionPicture />
    </>
  );
}

export default Home;
