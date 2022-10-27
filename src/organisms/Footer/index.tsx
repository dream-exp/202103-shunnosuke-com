import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    return(
        <FooterComponent path={router.pathname}>
            <span>&copy; &nbsp; 2021- &nbsp; Shunnosuke Kataoka </span>
            <span id="caution">
                <Link href={"/terms"} as={"/terms"}>
                    サイトのご利用にあたって
                </Link>
            </span>
        </FooterComponent>
    )
}

const FooterComponent = styled.footer<{ path: string }>`
    width: 100%;
    height: 100px;
    text-align: center;
    position: ${({path}) => path === "/" ? 'fixed' : 'static' };
    ${({path}) => path === "/" ? 'bottom: 0' : '' };

    span {
        display: block;
        margin: 0 10px;
        color: #bfbfbf;
    }
    span#caution {
        font-size: 10px;

        a {
            color: #bfbfbf;
        }
    }
`;

export default Footer;