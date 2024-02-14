import styled from "styled-components";

export const MainWrapper = styled.div`
   .cmp-blog-filters {
        background-color: #465f70;
        border-radius: 15px 15px 0 0;
        padding: 30px;
        hr {
            margin: 25px 0;
            border: 2px solid #323e48;
        }
        .cmp-blog-filters__list {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #fff;
            padding: 0;
            gap: 10px;
            flex-wrap: wrap;
            button {
                color: #fff;
                font-size:16px;
                font-weight: 600;
                text-transform: capitalize;
                border-radius: 50px;
                padding: 10px 20px;
                display: flex;
                align-items: center;
                gap: 5px;
                height: 55px;
                border: 1px solid #323e48;
                &:hover {
                    background-color: #323e48;
                }
                &.selected {
                    background-color: #fff;
                    color: #000;
                }
            }
            .clear-filters {
                margin-left: auto;
                border-color: transparent;
            }
            
        }
        .cmp-blog-filters_tab {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #fff;
            padding: 0;
            gap: 10px;
            flex-wrap: wrap;
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
                &:nth-child(2) {
                    padding-left: 20px;
                    height: 55px;
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
                    color: #aab9c6;
                    background-color: #5c7485;
                    border-color: #7b95a6;
                    .image-radius {
                        background-color: #6d7e8d;
                    }
                }
            }
        }
        .list-title {
            font-weight: 400;
            padding-right: 15px;
        }
    }

    .back-to-top {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
        span {
            cursor: pointer;
        }
    }

    .cmp-blog-list {
        padding: 35px 15px;
        background-color: #dcdddf;
        border-radius: 0 0 15px 15px;
        margin: 0 0 26px;
        display: flex;
        flex-wrap: wrap;
        & > div {
            border-radius: 10px;
            flex:0 0 33.33%;
            padding: 0 20px;
            margin-bottom: 30px;
            box-sizing: border-box;
            &:not(:first-child) {
                flex:0 0 1;
            }
            &:first-child {
                width: 100%;
                flex: 100%;
                .MuiPaper-root {
                    display: flex;
                    flex-direction: row-reverse;
                    figure img {
                        height: 27pc;
                        width: 30pc;
                    }
                }
                .date {
                    float: left;
                    margin-top: 5px;
                }
                .advice-link {
                    justify-content: flex-end;
                }
            }
        }
    }
`;