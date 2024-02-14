import { Card } from '@mui/material'
import { CardWrapper } from "./CardStyled";
import React from 'react'
import { Link } from 'react-router-dom'
import loadingImg from '../../assets/loading.gif'
import crops from '../../assets/crops.png'

const CropCard = (props) => {
    const { ImagePath, adviceText, cropIcon, title, date, description, cropId, insightsTypeId, pagePath } = props.value;
    const baseURL = process.env.REACT_APP_BASE_URL;

    return (
        <CardWrapper>
            <Card>
                <figure><img src={ImagePath ? `${baseURL}${ImagePath}` : loadingImg} alt={title ? title : "loading"} /></figure>
                <div className='figcaption'>
                    <p className="date">{date ? date : 'dd/mm/yyy'}</p>
                    <div className="advice-link">
                        <Link to={pagePath} className="cmp-link">{adviceText ? adviceText : "Advice for Crops"}</Link>
                        <span className="image-radius">
                            <img src={cropIcon ? `${baseURL}${cropIcon}` : crops} alt={title} />
                        </span>
                    </div>
                    <hr />
                    <article>
                        <h2 className='title'>{title ? title : "Title..."}</h2>
                        <p>{description}</p>
                        <Link to={"/"} className='cmp-button'>Read Article</Link>
                    </article>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default CropCard