import styled from 'styled-components';

// Basics / layout

export const AccountPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 190px);
    background: black;
    padding-top: 130px;
    background-image: linear-gradient(to right, #348AC7, #7474BF);
`;

export const AccountPageInnerWrapper = styled.div`
    height: 70vh;
    width: 1500px;
    overflow: auto;
    background: #fff;
`;

export const MultiViewWrapper = styled.div`
    display: flex;
    height: calc(100% - 85px);
    justify-content: space-between;
    padding: 20px 0;
`;

export const MultiView = styled.div`
    flex: 1;
    padding: 0 20px;
    ${props => props.border && `border-right: 1px solid #ccc`};
`;

export const SettingsLineWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

// Text

export const PageHeadline = styled.h1`
    border-bottom: 1px solid #ccc;
    width: 90%;
    padding: 8px 0 4px;
    color: #e79e18;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    margin: 0 auto;
`;

export const MultiViewHeadline = styled.h2`
    width: 90%;
    color: #e79e18;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
`;

export const InfoLine = styled.p`
    font-size: 15px;
    margin-right: 15px;
`;

// Buttons / links

export const UnderlinedButton = styled.p`
    display: inline;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

// Inputs