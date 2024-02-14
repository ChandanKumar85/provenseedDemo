import styled from "styled-components";

export const CardWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    figure {
        height: 19pc;
        margin: 0;
        img {
            height: 19pc;
            width: 100%;
        }
    }
    .figcaption {
        padding: 26px 2pc 37px 42px;
        article {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: flex-start;
            height: 260px;
        }
    }

    hr {
        border: 2px solid #dcdddf;
        margin: 15px 0;
    }

    .advice-link {
        display: flex;
        align-items: center;
        gap: 10px;
        .cmp-link {
            font-size: 1rem;
            color: #465f70;
            text-decoration: underline;
            font-weight: 700;
            &:hover {
                text-decoration: none;
            }
        }
        .image-radius {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #4e9b47;
            display: flex;
            padding: 5px;
            box-sizing: border-box;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .date {
        font-size: 1rem;
        font-weight: 700;
        margin: auto;
    }

    .title, p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
    }

    .title {
        font-size: 1.625rem;
        line-height: 1.75rem;
        font-weight: 700;
    }
    p {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`;


