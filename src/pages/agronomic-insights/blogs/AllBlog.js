import axios from "axios";
import React, { useEffect, useState } from 'react'
import CropCard from "../../../components/card";

const tagType = [
    { cropId: "provenseed:insights/type/growing-advice", title: "Growing Advice" },
    { cropId: "provenseed:insights/type/news-from-nutrien", title: "News from Nutrien" }
]
const tagData = [
    { cropId: "provenseed:crops/all", title: "All Crops", cropIcon: "", disabled: true },
    { cropId: "provenseed:crops/canola", title: "canola", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Canola_White.png" },
    { cropId: "provenseed:crops/wheat", title: "wheat", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Wheat_White.png" },
    { cropId: "provenseed:crops/barley", title: "barley", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Barley_White.png" },
    { cropId: "provenseed:crops/grain-corn", title: "Grain Corn", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Corn_White.png" },
    { cropId: "provenseed:crops/silage-corn", title: "Silage Corn", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Corn_White.png" },
    { cropId: "provenseed:crops/soybean", title: "soybean", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Soybeans_White.png" },
    { cropId: "provenseed:crops/forages", title: "forages", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Forages_White.png" },
    { cropId: "provenseed:crops/mustard", title: "mustard", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Mustard_White.png" },
    { cropId: "provenseed:crops/flax", title: "flax", cropIcon: "/uploads/crops-icons/ProvenSeed_Icon_Flax_White.png" }
]

const AllBlog = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const [newsData, setNewsData] = useState([])


    const [allData, setAllData] = useState([])
    const [blogData, setBlogData] = useState([])
    const [blog, setBlog] = useState([])
    const [filterCrop, setFilterCrop] = useState([])
    const [selectedButton, setSelectedButton] = useState(0);
    const [selectedButtonType, setSelectedButtonType] = useState(0);
    const [selectTypeTab, setSelectTypeTab] = useState(0)
    const [selectCropTab, setSelectCropTab] = useState(0)
    const [typeId, setTypeId] = useState("provenseed:insights/type/growing-advice")
    const [cropId, setCropId] = useState('provenseed:crops/all');
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${baseURL}/api/blog/`);
                setAllData(res.data.response)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()

        // async function fetchNewData() {
        //     try {
        //         const res = await axios.get(`${baseURL}/api/news/`);
        //         setNewsData(res.data.response)
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // }
        // fetchNewData()
    }, []);



    const handleClickType = (buttonId, cropId) => {
        setSelectedButtonType(buttonId);
        setTypeId(cropId)
        setSelectTypeTab(buttonId)
        if (cropId === "provenseed:insights/type/growing-advice") {
            setBlogData(allData)
        } else {
            setBlogData([])
        }
    }

    const handleClickCrops = (buttonId, cropId) => {
        setSelectedButton(buttonId);
        setCropId(cropId)
        if (cropId !== "provenseed:crops/all") {
            const filterBlogData = blogData?.filter((val) => val.cropId === cropId);
            setBlog(filterBlogData)
        } else {
            setBlog(blogData)
        }
    }

    useEffect(() => {
        handleClickType(selectTypeTab, typeId);
        handleClickCrops(selectCropTab, cropId)
    }, [allData, typeId])

    useEffect(() => {
        const filteredData = blogData?.filter(item => item.cropId !== undefined && item.cropId !== "");
        const uniqueData = filteredData?.filter(
            (item, index, self) => index === self.findIndex(t => t.cropId === item.cropId)
        );

        tagData?.forEach(i => {
            if (uniqueData?.find(j => j.cropId === i.cropId)) {
                i.disabled = true;
            }
        })
        setFilterCrop(tagData)
    }, [blogData, typeId]);

    const clearTypeAndCrop = () => {
        setSelectedButtonType(0);
        setSelectedButton(0);
        setBlog(blogData);
    }

    const backToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className='cmp-blog-list'>
                {
                    blog?.map((value, index) => (
                        <div><CropCard key={value.cropId} value={value} /></div>
                    ))
                }
            </div>
            <div className='back-to-top'>
                <span onClick={backToTop}>Back to top</span>
            </div>
        </>
    )
}

export default AllBlog
