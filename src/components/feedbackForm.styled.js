import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    z-index: 10;
    margin-top: 30px;
    margin-bottom: 30px;

    @media ${p => p.theme.media.desktop} {
        margin-top: 30px;
        margin-bottom: 23px;
    }
`;

export const Input = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
    padding-left: 23px;

    width: 80%;
    max-width: 460px;
    height: 45px;

    border: ${p => p.theme.borders.input};
    border-color: ${p => p.theme.colors.input};
    border-radius: ${p => p.theme.radius.input};

    :focus {
        outline-color: ${p => p.theme.colors.accent};
    }
    :hover {
        border-color: ${p => p.theme.colors.accent}
    }
    
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${p => p.theme.colors.placeholder};

    @media ${p => p.theme.media.tablet} {
        margin-left: 0;
        width: 55%;
        max-width: 510px;
    }

    @media ${p => p.theme.media.desktop} {
        margin-bottom: 8px;
        height: 93px;
        padding-left: 46px;
        font-size: ${p => p.theme.fontSizes.m};
    }
`;

export const MessageInput = styled.textarea`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    padding-left: 23px;
    padding-top: 15px;

    width: 80%;
    max-width: 460px;
    height: 115px;

    border: ${p => p.theme.borders.input};
    border-color: ${p => p.theme.colors.input};
    border-radius: ${p => p.theme.radius.input};

    :focus {
        outline-color: ${p => p.theme.colors.accent};
    }
    :hover {
        border-color: ${p => p.theme.colors.accent}
    }
    
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${p => p.theme.colors.placeholder};

    @media ${p => p.theme.media.tablet} {
        margin-left: 0;
        width: 55%;
        max-width: 510px;
    }

    @media ${p => p.theme.media.desktop} {
        margin-bottom: 23px;
        height: 189px;
        padding-left: 46px;
        font-size: ${p => p.theme.fontSizes.m};
    }
`;

export const Button = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;

    width: 150px;
    height: 50px;       
    background: ${p => p.theme.colors.btn};
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radius.btn};
    :focus,
    :hover {
        background: ${p => p.theme.colors.hoverBtn};
    }

    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.5;
    color: ${p => p.theme.colors.btnText};

    @media ${p => p.theme.media.tablet} {
        margin-left: 0;
    }

    @media ${p => p.theme.media.desktop} {
        width: 218px;
        height: 73px; 
        font-size: ${p => p.theme.fontSizes.m};
    }
`;
