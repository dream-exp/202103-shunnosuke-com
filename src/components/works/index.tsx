import styled from 'styled-components';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorksEyecatch from 'atoms/works/WorksEyecatch';
import WorksEyecatchSpace from 'atoms/works/WorksEyecatchSpace';
import Link from 'next/link';

const worksAll = [
    {
        href: "/works/mealie",
        title: <>食券オンライン予約システム<br />Mealie</>,
        imgPath: "/images/works/eyecatch/mealie.jpg"
    },
    {
        href: "/works/smartmakura",
        title: <>Smart枕</>,
        imgPath: "/images/works/eyecatch/smartmakura.png"
    },
    {
        href: "/works/aqua_synthesizer",
        title: <>Aqua Synthesizer</>,
        imgPath: "/images/works/eyecatch/aqua_synthesizer.png"
    },
    {
        href: "/works/soar",
        title: <>SOAR</>,
        imgPath: "/images/works/eyecatch/soar.png"
    },
    {
        href: "/works/kazeoke",
        title: <>風が吹けば桶屋が儲かる</>,
        imgPath: "/images/works/eyecatch/kazeoke.png"
    },
    {
        href: "/works/shaper",
        title: <>論文翻訳支援ツール<br />Shaper</>,
        imgPath: "/images/works/eyecatch/shaper.png"
    },
    {
        href: "/works/lightsync",
        title: <>LightSync</>,
        imgPath: "/images/works/eyecatch/lightsync.png"
    },
    {
        href: "/works/shunyan_camera",
        title: <>しゅうニャン思い出カメラ</>,
        imgPath: "/images/works/eyecatch/shunyan_camera.jpg"
    },
    {
        href: "/works/ikyoukoujitsu",
        title: <>フォトブログ<br />異郷好実</>,
        imgPath: "/images/works/eyecatch/ikyoukoujitsu.png"
    },
    {
        href: "/works/chemicaldesignlab",
        title: <>ケミカルデザインラボ<br />Webデザイン</>,
        imgPath: "/images/works/eyecatch/chemicaldesignlab.png"
    },
    {
        href: "/works/wien_xmas_menu",
        title: <>オーストリッヒカフェウィーン<br />リーフレットデザイン</>,
        imgPath: "/images/works/eyecatch/wien_xmas_menu.jpg"
    },
    {
        href: "/works/tea_t_scone_web",
        title: <>Tea & T scone<br />Webデザイン</>,
        imgPath: "/images/works/eyecatch/tea-t-scone-web.png"
    },
    {
        href: "/works/tea_t_scone_menu",
        title: <>Tea & T scone<br />メニューデザイン</>,
        imgPath: "/images/works/eyecatch/tea-t-scone-menu.jpg"
    },
    {
        href: "/works/creative_kids_camp",
        title: <>クリエイティブキッズキャンプ</>,
        imgPath: "/images/works/eyecatch/creative_kids_camp.jpg"
    },
    {
        href: "/works/aonofukei",
        title: <>写真展<br />碧の風景</>,
        imgPath: "/images/works/eyecatch/aonofukei.jpg"
    }
]

const Works = () => {
    return(
        <ContentsWrapper>
            <WorksComponent>
                {
                    worksAll.map(work => {
                        return(
                            <Link href={work.href} as={work.href}>
                                <a>
                                    <WorksEyecatch title={work.title} imgPath={work.imgPath} />
                                </a>
                            </Link>
                        );
                    })
                }
                <WorksEyecatchSpace />
            </WorksComponent>
        </ContentsWrapper>
    );
}

const WorksComponent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export default Works;

