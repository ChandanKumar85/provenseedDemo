import { Button } from '@mui/material'
import { CropWrapper } from "./CropStyled";
import React from 'react'
import crops from '../../assets/crops.png'

const CropTab = (props) => {
    const { cropIcon, title, cropId, disabled } = props.value
    const baseURL = process.env.REACT_APP_BASE_URL;

    return (
        <CropWrapper>
            <Button className='btn_styles' data-value={cropId} disabled={!disabled}>
                {
                    cropIcon !== "" &&
                    <span className="image-radius">
                        <img src={cropIcon ? `${baseURL}${cropIcon}` : crops} alt={title} />
                    </span>
                }
                <span>{title}</span>
            </Button>
        </CropWrapper>
    )
}

export default CropTab
