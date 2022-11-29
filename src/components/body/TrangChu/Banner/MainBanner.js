// import { Carousel } from 'bootstrap';
import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
function MainBanner() {
    return (
        <Carousel fade style={{ margin: '10px 0px' }}>
            <Carousel.Item>
                <img src="https://images5.alphacoders.com/115/1150292.jpg" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://i.pinimg.com/originals/81/bd/f0/81bdf036773c7bc12d2155b65a0a3b54.jpg" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://wallpapercave.com/wp/wp7037716.png" className="d-block w-100" alt="" width={1550} height={500} />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainBanner;