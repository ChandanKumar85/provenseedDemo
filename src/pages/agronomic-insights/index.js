import React, { useEffect, useState } from 'react'
import { MainWrapper } from "./AgronomicInsightsStyled";
import { Button } from '@mui/material';
import axios from "axios";
import CropCard from '../../components/card';
import crops from '../../assets/crops.png'
import ContactAnExpert from '../../components/contact-expert';

const tagType = [
    { cropId: "provenseed:insights/type/growing-advice", title: "Growing Advice" },
    { cropId: "provenseed:insights/type/news-from-nutrien", title: "News from Nutrien" }
]

const AgronomicInsights = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const [blogData, setBlogData] = useState([])
    const [newsData, setNewsData] = useState([])
    const [allData, setAllData] = useState([])
    const [selectedButtonType, setSelectedButtonType] = useState(0);


    async function fetchBlogData() {
        try {
            const res = await axios.get(`${baseURL}/api/blog/`);
            setBlogData(res.data.response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    async function fetchNewsData() {
        try {
            const resp = await axios.get(`${baseURL}/api/news/`);
            setNewsData(resp.data.response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    const handleClickType = (buttonId, cropId) => {
        let parts = cropId.split("/")
        let lastPart = parts[parts.length - 1]
        setSelectedButtonType(buttonId);
        if (lastPart === 'growing-advice') {
            fetchBlogData()
        }


    }

    return (
        <MainWrapper>
            <div className='container'>
                <div className='cmp-blog-filters'>
                    <div className="cmp-blog-filters__list" id="js-type-filter">
                        <span className='list-title'>Type:</span>
                        {
                            tagType?.map((item, index) => (
                                <Button key={item.cropId}
                                    onClick={() => handleClickType(index, item.cropId)}
                                    className={selectedButtonType === index ? 'selected' : ''}
                                    data-value={item.cropId}>{item.title}
                                </Button>
                            ))
                        }
                    </div>
                    <hr />
                </div>
                <ContactAnExpert />
            </div>
        </MainWrapper>
    )
}

export default AgronomicInsights