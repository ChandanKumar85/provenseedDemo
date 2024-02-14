import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    text-align: center;
    background-color: #f8f8f8;
    padding: 70px 0 40px;
    margin-top: 80px;
    border-top: 5px solid #dcdddf;
    position: relative;
    &:after, &:before {
        content: "";
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    &:before {
        top: -12px;
        border-left: 65px solid transparent;
        border-top: 40px solid #fff;
        border-right: 65px solid transparent;
        z-index: 1;
    }
    &:after {
        top: -5px;
        border-left: 65px solid transparent;
        border-top: 40px solid #dcdddf;
        border-right: 65px solid transparent;
    }
    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        figure {
            padding: 0;
            margin: 0;
        }
        .foo-left {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 40%;
            figcaption {
                font-size: 14px;
            }
        }
        .middle-logo {
            img {
                max-width: 120px;
                height: auto;
            }
        }
        .foo-right {
            display: flex;
            gap: 20px;
            width: 40%;
            justify-content: flex-end;
            nav {
                text-align: right;
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
                justify-content: flex-end;
                a {
                    color: #465f70;
                    font-size: 14px;
                    text-decoration: underline;
                    font-weight: 700;
                    display: inline-block;
                    line-height: auto;
                    &:hover {
                        text-decoration: none;
                    }
                }
            }
            .cmp-navigation__group {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                img {
                    max-width: 30px;
                    height: auto;
                }
            }
        }
    }
`;