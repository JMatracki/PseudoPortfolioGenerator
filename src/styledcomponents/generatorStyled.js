import styled from 'styled-components'
import { PDFViewer } from '@react-pdf/renderer'

export const WrapperElement = styled.section`
    border: 1px solid #353944;
    width: 90%;
    margin: 0 auto 50px auto;
    border-radius: 10px 10px 0 0;
    color: #FFF;
`

export const WrapperButtonsElement = styled(WrapperElement)`
    border: 0;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #353944;
    padding: 20px;
    align-items: center;
`

export const HeaderTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
`

export const HeaderButton = styled.button`
    color: #1D77C8;
    background-color: #FFF;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    padding: 0 8px;
`

export const SectionContent = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 480px){
        grid-template-columns: 1fr;
    }
`

export const SectionItem = styled.div`
    margin-bottom: 20px;
`

export const SectionItemTitle = styled.p`
    font-weight: 700;
    margin-bottom: 10px;
`

export const ExperienceList = styled.ul`
    list-style: disc;
    margin-left: 15px;
`

export const RemoveSectionInfoButton = styled.button`
    color: #1D77C8;
    background-color: #FFF;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    padding: 0 8px;
`

const ButtonTemplate = styled.button`
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
`

export const GenerateButton = styled(ButtonTemplate)`
    background-color: #4CAF50;
    
`
export const ResetButton = styled(ButtonTemplate)`
    background-color: #F44336;
`

export const PDFWrapper = styled(PDFViewer)`
    width: 90%;
    margin: 0 auto;
    display: block;
    height: 80vh;
    margin-bottom: 15px;
`