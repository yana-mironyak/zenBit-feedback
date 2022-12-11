import styled from "styled-components";
import bgdImgYellow from '../img/yellow-little-smile.svg';
import bgdImgPink from '../img/pink-smile.svg';
import bgdImgGlobe from '../img/globe.png';
import bgdImgBigYellow from '../img/yellow-smile.svg';
import bgdImgClouds from '../img/clouds.svg';
import bgdImgSun from '../img/sun.svg';

export const Container = styled.div`
    padding-top: 75px;

    @media ${p => p.theme.media.tablet} {
        padding-top: 110px;
        padding-left: 50px;
    }

    @media ${p => p.theme.media.desktop} {
        padding-top: 179px;
        padding-left: 150px;
        padding-right: 150px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.text};

    @media ${p => p.theme.media.tablet} {
        text-align: left;
    }

    @media ${p => p.theme.media.desktop} {
        font-size: ${p => p.theme.fontSizes.xl};
    }
`;

export const YellowSmile = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    top: 18px; 
    left: 18px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${bgdImgYellow});

    @media ${p => p.theme.media.tablet} {
        width: 70px;
        height: 70px;
    }

    @media ${p => p.theme.media.desktop} {
        top: 30px; 
        left: 28px;
        width: 128px;
        height: 128px;
    }
`;

export const Globe = styled.div`
    background-image: none;

    @media ${p => p.theme.media.tablet} {
        position: absolute;
        top: 0px;
        right: -294px;
        width: 920px;
        height: 920px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${bgdImgGlobe});
    }

    @media ${p => p.theme.media.desktop} {
        right: -315px;
    }
`;

export const PinkSmile = styled.div`
    position: absolute;
    background-image: none;

    @media ${p => p.theme.media.desktop} {
        background-image: url(${bgdImgPink});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 5;
        top: 558px;
        right: 355px;
        width: 290px;
        height: 290px;   
    }
`;

export const BigYellowSmile = styled.div`
    position: absolute;
    background-image: none;

    @media ${p => p.theme.media.desktop} {
        background-image: url(${bgdImgBigYellow});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 6;
        top: 515px;
        right: 520px;
        width: 127px;
        height: 127px;  
    }
`;

export const Clouds = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${bgdImgClouds});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    width: 1468px;
    height: 877px;

    @media ${p => p.theme.media.desktop} {
        top: 101px;
    }
`;

export const Sun = styled.div`
    @media ${p => p.theme.media.desktop} {
        position: absolute;
        z-index: 4;
        top: 0;
        right: 0;
        background-image: url(${bgdImgSun});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;
        width: 87px;
        height: 87px;
    }   

    @media ${p => p.theme.media.desktop} {
        top: 21px;
        right: 660px;
    }
`;

