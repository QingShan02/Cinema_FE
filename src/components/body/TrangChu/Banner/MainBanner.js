// import { Carousel } from 'bootstrap';
import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
function MainBanner() {
    return (
        <Carousel fade style={{ margin: '10px 0px' }}>
            <Carousel.Item>
                <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/tro_t_n_r_c_r__980wx448h.jpg" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980_x_448__10.jpg" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/o/rolling_banner_980wx448h_1_1.jpg" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainBanner;