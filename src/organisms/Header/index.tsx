import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { useMediaQuery } from 'react-responsive';
import Nav from 'atoms/Header/Nav';
import NavWithHumburger from 'atoms/Header/NavWithHumburger';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
    const router = useRouter();
    
    return(
        <HeaderComponent path={router.pathname}>
            <Link href="/">
                <a>
                    <h1>
                        SHUNNOSUKE<br />
                        KATAOKA
                    </h1>
                </a>
            </Link>
            {!isMobile &&
                <Nav />
            }
            {isMobile &&
                <NavWithHumburger />
            }
        </HeaderComponent>
    )
}

const HeaderComponent = styled.header<{ path: string }>`
    display: flex;
    justify-content: space-between;
    background: ${({path}) => path === "/" ? 'none' : '#fff' };

    h1 {
        font-family: 'NTR', 'Noto Sans JP', sans-serif;

        &:hover {
            transition: 0.3s ease;
            color: #cccccc;
        }
    }

    ${media.lessThan("medium")`
        padding: 30px;

        h1 {
            letter-spacing: 0.1em;
            font-size: 20px;
            line-height: 40px;
        }
    `}
    
    ${media.between("medium", "large")`
        padding: 50px;

        h1 {
            letter-spacing: 0.2em;
            font-size: 28px;
            line-height: 50px;
        }
    `}

    ${media.greaterThan("large")`
        padding: 70px;

        h1 {
            letter-spacing: 0.3em;
            font-size: 35px;
            line-height: 60px;
        }
    `}
`;

export default Header;