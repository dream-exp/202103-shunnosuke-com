import styled from 'styled-components';
import media from "styled-media-query";
import Link from 'next/link';

const Nav = () => {
    return(
        <NavComponent>
            <Link href="/profile">
                <a>
                    <span>PROFILE</span>
                </a>
            </Link>
            <Link href="/works">
                <a>
                    <span>WORKS</span>
                </a>
            </Link>
            {/* <Link href="#">
                <a>
                    <span>PHOTOS</span>
                </a>
            </Link> */}
            <Link href="#">
                <a href="https://photos.dream-exp.net" target="blank">
                    <span>PHOTO BLOG</span>
                </a>
            </Link>
        </NavComponent>
    );
}

const NavComponent = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: 'NTR', 'Noto Sans JP', sans-serif;

    ${media.between("medium", "large")`
        margin-top: 1px;
        width: 50%;
        letter-spacing: 0.2em;
    `}

    ${media.greaterThan("large")`
        margin-top: 2px;
        width: 30%;
        letter-spacing: 0.2em;
    `}

    a:hover {
        * {
            transition: 0.3s ease;
            color: #cccccc;
        }
    }
`

export default Nav;