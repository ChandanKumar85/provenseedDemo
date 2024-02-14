import styled from "styled-components";

export const CropWrapper = styled.span`
    button {
        color: #fff;
        font-size:16px;
        font-weight: 600;
        text-transform: capitalize;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 20px 8px 10px;
        gap: 10px;
        border: 1px solid #323e48;
        .image-radius {
            /* background-color: #4e9b47; */
            background-color: #323e48;
            width: 37px;
            height: 37px;
            border-radius: 50px;
            display: block;
            padding: 5px;
            box-sizing: border-box;
            transition: all 0.4s ease-in-out;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        &:hover {
            background-color: #323e48;
            .image-radius {
                background-color: #4e9b47;
            }
        }
        &.selected {
            background-color: #fff;
            color: #000;
            .image-radius {
                background-color: #4e9b47;
            }
        }
        &[disabled] {
            color: #323e48;
            background-color: #a9b3bb;
            border-color: #a9b3bb;
            .image-radius {
                background-color: #6d7e8d;
            }
        }
    }
`;