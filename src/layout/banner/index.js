import React from 'react'
import { BannerWrapper } from "./BannerStyled";
import bannerImg from '../../assets/banner-bg.png'

const Banner = () => {
    return (
        <BannerWrapper style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='container'>
                <h2>PERFORMANCE TRIALS</h2>
                <p>Proven Performance Trials is the largest seed variety comparison program in Western Canada – the most varieties, of the most crops, across a diverse set of geographies. We put our seed to the test by working with hundreds of cooperators to ensure that our seed performs best where it counts – on large scale, producer-managed fields.
                </p>
            </div>
        </BannerWrapper>
    )
}

export default Banner
