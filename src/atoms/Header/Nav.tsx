import styled from 'styled-components';
import media from "styled-media-query";
import Link from 'next/link';

const Nav = () => {
    return(
        <NavComponent>
            <Link href="/profile">
                <span>PROFILE</span>
            </Link>
            <Link href="/works">
                <span>WORKS</span>
            </Link>
            {/* <Link href="#">
                <a>
                    <span>PHOTOS</span>
                </a>
            </Link> */}
            <a href="https://photos.dream-exp.net" target="blank">
                <span>PHOTO BLOG</span>
            </a>
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