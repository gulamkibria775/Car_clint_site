import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: "https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg",
        prev: 2,
        id: 3,
        next: 1
    },
    // {
    //     image: img4,
    //     prev: 3,
    //     id: 4,
    //     next: 5
    // },
    // {
    //     image: img5,
    //     prev: 4,
    //     id: 5,
    //     next: 6
    // },
    // {
    //     image: img6,
    //     prev: 5,
    //     id: 6,
    //     next: 1
    // }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;