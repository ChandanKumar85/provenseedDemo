import styled from "styled-components";

export const MeinWrapper = styled.div`
    background-color: #fff;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        list-style: none;
        margin-top: 0;
        padding: 0;
        li {
            a {
                text-decoration: none;
                position: relative;
                padding:10px 0;
                font-weight: 700;
                display: flex;
                color: #000;
            }
            &:hover {
                a {
                    color: #465f70;
                }
            }
        }
    }
`;