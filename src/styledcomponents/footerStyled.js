import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AuthorArea = styled.span`
    margin-left: 8px;
`

export const AuthorNameArea = styled.div`
    font-size: 1vw;
    font-weight: bold;
    color: white;

    @media (max-width: 768px) {
        font-size: 4vw;
      }
`

export const CreatedBySpan = styled.span`
    font-weight: 400;
    margin-right: 5px;
`

export const GithubArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1vw;
    font-weight: bold;
    color: white;
    margin-top: 3px;
`

export const GithubImg = styled.img`
    width: 150px;
`