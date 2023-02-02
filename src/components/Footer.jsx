import React from 'react';
import { AuthorArea, AuthorNameArea, CreatedBySpan, GithubArea, GithubImg, StyledFooter } from '../styledcomponents/footerStyled';
import githubLogo from '../assets/images/githubLogo.png'

const Footer = () => {
    return (
        <StyledFooter>
            <AuthorArea>
                <AuthorNameArea>
                    <CreatedBySpan>Created by:</CreatedBySpan>Jakub Matracki
                </AuthorNameArea>
                <GithubArea>
                    <nav>
                        <a href="https://github.com/JMatracki"><GithubImg alt="githubLogo" src={githubLogo} /></a>
                    </nav>
                </GithubArea>
            </AuthorArea>
        </StyledFooter >
    )
}
export default Footer