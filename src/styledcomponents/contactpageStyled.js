import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 70%;
    margin: 70px auto 0 auto;
    text-align: center;
`

export const ContactMainText = styled.h1`
    font-size: 4vw;
    color: white;
    font-weight: bold;
    margin-bottom: 70px;

    @media (max-width: 768px) {
        font-size: 7vw;
      }
`

export const ContactInputs = styled.input`
    padding: 10px;
    margin: 10px 0;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius: 10px;
`

export const ContactTextAreas = styled.textarea`
    padding: 10px;
    margin: 10px 0;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius: 10px;
`

export const ContactAreaButton = styled.button`
    appearance:none;
    -webkit-appearance:none;
    padding:10px;
    border:none;
    background-color:#3F51B5;
    color:#fff;
    font-weight:600;
    border-radius:5px;
    margin-bottom: 150px;
`

export const ErrorsParagraph = styled.p`
      color: grey;
      margin-bottom: 7px;
`