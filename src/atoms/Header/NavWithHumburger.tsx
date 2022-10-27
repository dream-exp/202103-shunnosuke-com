import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const NavWithHumburger  = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <NavToggleButton onClick={() => {setIsOpen(!isOpen)}} >
                {isOpen &&
                    <img src="/images/close.png" />
                }
                {!isOpen &&
                    <img src="/images/humburger.png" />
                }
            </NavToggleButton>
            {isOpen &&
                <ModalNav>
                    <Link href="/profile">
                        <span>PROFILE</span>
                    </Link>
                    <Link href="/works">
                        <span>WORKS</span>
                    </Link>
                    {/* <Link href="/">
                        <a>
                            <span>PHOTOS</span>
                        </a>
                    </Link> */}
                    <a href="https://photos.dream-exp.net" target="blank">
                        <span>PHOTO BLOG</span>
                    </a>
                </ModalNav>
            }
        </>
    );
};

const NavToggleButton = styled.button`
    background: none;
    border: none;
    width: 50px;
    height: 50px;
    z-index: 99;
    margin-top: 2px;

    img {
        width: 100%;
    }
`

const ModalNav = styled.nav`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgba(255, 255, 255, 0.95);
    z-index: 98;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 25px;
    font-family: 'NTR', 'Noto Sans JP', sans-serif;

    a {
        display: block;
        padding: 20px;

        span {

        }
    }
`;


export default NavWithHumburger;