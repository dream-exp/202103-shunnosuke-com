import styled from 'styled-components';
// import ContentsWrapper from 'components/common/ContentWrapper';
import { useEffect, useState } from 'react';
import media from 'styled-media-query';

const imageFiles = [
    '/images/home_backgrounds/bg_1.png',
    '/images/home_backgrounds/bg_2.png',
    '/images/home_backgrounds/bg_3.png',
    '/images/home_backgrounds/bg_4.png',
    '/images/home_backgrounds/bg_5.png',
    '/images/home_backgrounds/bg_6.png',
    '/images/home_backgrounds/bg_7.png',
    '/images/home_backgrounds/bg_8.png',
    '/images/home_backgrounds/bg_9.png'
];

const Index = () => {
    const [imagePath, setImagePath] = useState("");

    useEffect(() => {
        setImagePath(imageFiles[Math.floor(Math.random() * imageFiles.length)]);
    }, []);

    return(
        <Home imagePath={imagePath}>
            <div />
        </Home>
    );
}

const Home = styled.div<{ imagePath: string }>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    overflow: hidden;

    div {
        height: 100vh;
        background: url(${({ imagePath }) => imagePath});
        background-position: bottom center;
        background-repeat: no-repeat;
        overflow: hidden;
        ${media.lessThan("medium")`
            margin-top: 40%;
            background-size: auto 100%;
        `}

        ${media.greaterThan("medium")`
            margin-top: 15%;  
            background-size: cover;
        `}
    }
`

export default Index;