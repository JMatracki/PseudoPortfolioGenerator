import React from 'react'
import { MainPageText, PageContainer, ClickButton, NavigationLink } from '../styledcomponents/homepageStyled'

const HomePage = () => {
    return (
        <PageContainer>
            <MainPageText>Wygeneruj swoje CV z Pseudo Generatorem!</MainPageText>
            <ClickButton><NavigationLink to="/generator/">Kliknij tutaj</NavigationLink></ClickButton>
        </PageContainer>
    )
}

export default HomePage