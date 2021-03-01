import styled from 'styled-components';
import { SVG1, SVG2, SVG3 } from 'atoms/svg';
import { ReactNode } from 'react';

interface WorksEyecatchProps {
    imgPath: string,
    title: ReactNode
}

const WorksEyecatch = (props: WorksEyecatchProps) => {
    const rand = Math.floor(Math.random() * Math.floor(3));
    console.log(rand);

    return(
        <WorksEyecatchComponent>
            { rand === 0 &&
                <SVG1 />
            }
            { rand === 1 &&
                <SVG2 />
            }
            { rand === 2 &&
                <SVG3 />
            }
            <Clipped>
                <>
                    <HoverTitle>
                        <h2>{props.title}</h2>
                    </HoverTitle>
                    <img src={props.imgPath} />
                </>
            </Clipped>
        </WorksEyecatchComponent>
    );
};

const WorksEyecatchComponent = styled.div`

`;

const HoverTitle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    clip-path: url(#svgPath);
    opacity: 0;
    transition: 0.3s ease;
    
    &:hover {
        opacity: 1;
    }
    
    h2 {
        font-size: 15px;
        text-align: center;
        font-family: 'Noto Sans JP', sans-serif;
    }
`;

const Clipped = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 20px 10px;
    display: block;

    img {
        position: absolute;
        clip-path: url(#svgPath);
        width: 300px;
    }
`;

export default WorksEyecatch;