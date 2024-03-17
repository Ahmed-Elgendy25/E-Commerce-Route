import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import longArrow from '../../assets/arrow-long-right-svgrepo-com.svg';
import img1 from '../../assets/1.webp';
import img2 from '../../assets/front-view-man-relaxing-with-basketball.jpg';
import img3 from '../../assets/window-bars.jpg';
import React from 'react';
import Masonry from 'react-masonry-css';

function Header() {
  const breakpointColumnsObj = {
    default: 2,

    700: 1,
    500: 1, // Adjust the number of columns for screens narrower than 700px
  };

  return (
    <header className="mt-5">
      <div className="container-fluid">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div
            key="col"
            className="rounded-4"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div className="text-lg-start p-5">
              <h2 className="responsive-font-example museomoderno fw-bolder me-4 w-100">
                <span className="me-5">FOR </span>
                <img src={longArrow} className="w-50 p-2" alt="longARROW" />
                EVERYONE BUT NOT ANYONE
              </h2>
            </div>
            <p className="p-5 fs-5">
              We establish personal relationships with our boutiques, to make
              <br />
              sure each is vetted for a stress-free shopping experience
            </p>
          </div>

          <div key="col2">
            <img
              src={img1}
              className="w-100 rounded-4"
              style={{
                height: '82.2rem',
                objectFit: 'cover',
              }}
              alt="boy"
            />
          </div>
          {/* 62.5rem */}
          <div key="col2" className="rounded-4">
            <div className="d-flex  gap-3">
              <img src={img2} className=" w-50 rounded-4" alt="boy" />
              <img src={img3} className="w-50 rounded-4" alt="boy" />
            </div>
          </div>
        </Masonry>
      </div>
    </header>
  );
}

export default Header;
