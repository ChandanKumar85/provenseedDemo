import React, { useEffect, useState } from 'react'
import { MainWrapper } from "./AgronomicInsightsStyled";
import { Button } from '@mui/material';
import axios from "axios";
import CropCard from '../../components/card';
import crops from '../../assets/crops.png'
import ContactAnExpert from '../../components/contact-expert';

const tagData = [
    { cropId: "provenseed:crops/all", title: "All Crops", cropIcon: "", disabled: true },
    { cropId: "provenseed:crops/canola", title: "canola", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Canola_White.png" },
    { cropId: "provenseed:crops/wheat", title: "wheat", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Wheat_White.png" },
    { cropId: "provenseed:crops/barley", title: "barley", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Barley_White.png" },
    { cropId: "provenseed:crops/grain-corn", title: "Grain Corn", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Corn_White.png" },
    { cropId: "provenseed:crops/silage-corn", title: "Silage Corn", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Corn_White.png" },
    { cropId: "provenseed:crops/soybean", title: "soybean", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Soybeans_White.png" },
    { cropId: "provenseed:crops/forages", title: "forages", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Forages_White.png" },
    { cropId: "provenseed:crops/mustard", title: "mustard", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Mustard_White.png" },
    { cropId: "provenseed:crops/flax", title: "flax", cropIcon: "/content/dam/provenseed/crops/crops-icons/crops-icons-without-name/white/ProvenSeed_Icon_Flax_White.png" }
]

const tagType = [
    { cropId: "provenseed:insights/type/growing-advice", title: "Growing Advice" },
    { cropId: "provenseed:insights/type/news-from-nutrien", title: "News from Nutrien" }
]

const AgronomicInsights = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const [allBlogData, setAllBlogData] = useState([])
    const [blogData, setBlogData] = useState([])
    const [filterCrop, setFilterCrop] = useState([])
    const [selectedButton, setSelectedButton] = useState(0);
    const [selectedButtonType, setSelectedButtonType] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${baseURL}/bin/provenseed/blogpost/`);
                setBlogData(response.data.data);
                setAllBlogData(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    useEffect(() => {
        const filteredData = blogData?.filter(item => item.cropId !== undefined && item.cropId !== "");
        const uniqueData = filteredData.filter(
            (item, index, self) => index === self.findIndex(t => t.cropId === item.cropId)
        );

        tagData?.forEach(i => {
            if (uniqueData?.find(j => j.cropId === i.cropId)) {
                i.disabled = true;
            }
        })
        setFilterCrop(tagData)
    }, [blogData]);

    const handleClickType = (buttonId, cropId) => {
        setSelectedButtonType(buttonId);
        if (cropId !== "provenseed:insights/type/news-from-nutrien") {
            setBlogData(allBlogData)
        } else {
            setBlogData([])
        }
    }

    const handleClickCrops = (buttonId, cropId) => {
        setSelectedButton(buttonId);
        if (cropId !== "provenseed:crops/all") {
            const filterBlogData = allBlogData.filter((val) => val.cropId === cropId);
            setBlogData(filterBlogData)
        } else {
            setBlogData(allBlogData)
        }
    }

    const clearTypeAndCrop = () => {
        setSelectedButtonType(0);
        setSelectedButton(0);
        setBlogData(allBlogData);
    }

    const backToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
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
                                    data-value={item.cropId}>{item.title}</Button>
                            ))
                        }
                        <Button onClick={clearTypeAndCrop} className='clear-filters'>Clear Filters</Button>
                    </div>
                    <hr />
                    <div className="cmp-blog-filters_tab" id="js-crop-filter">
                        <span className='list-title'>Crops:</span>
                        {filterCrop?.map((value, index) => (
                            <Button data-value={value.cropId} key={index} disabled={!value.disabled}
                                onClick={() => handleClickCrops(index, value.cropId)}
                                className={selectedButton === index ? 'selected' : ''}
                            >
                                {
                                    value.cropIcon !== "" &&
                                    <span className="image-radius">
                                        <img src={value.cropIcon ? `${baseURL}${value.cropIcon}` : crops} alt={value.title} />
                                    </span>
                                }
                                <span>{value.title}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className='cmp-blog-list'>
                    {
                        blogData?.map((value, index) => (
                            <div><CropCard key={value.cropId} value={value} /></div>
                        ))
                    }
                </div>
                <div className='back-to-top'>
                    <span onClick={backToTop}>Back to top</span>
                </div>
                <ContactAnExpert />
            </div>
        </MainWrapper>
    )
}

export default AgronomicInsights