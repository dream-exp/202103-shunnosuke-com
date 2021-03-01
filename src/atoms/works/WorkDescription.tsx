import { ReactNode } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

interface WorkDescriptionProps {
    children: ReactNode
}

const WorkDescription = (props: WorkDescriptionProps) => {
    return(
        <WorkDescriptionComponent>{props.children}</WorkDescriptionComponent>
    );
}

const WorkDescriptionComponent = styled.div`
    margin: 80px 0;
    font-size: 14px;
    font-family: 'Noto Sans JP', sans-serif;

    ${media.lessThan("medium")`
        line-height: 2.5em;
    `}

    ${media.greaterThan("medium")`
        line-height: 3em;
    `}

    p {
        margin: 20px 0;
    }

    a {
        text-decoration: underline;
    }
`;

export default WorkDescription;