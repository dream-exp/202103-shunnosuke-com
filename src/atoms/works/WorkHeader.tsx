import styled from 'styled-components';

interface WorkHeaderProps {
    title: string
}

const WorkHeader = (props: WorkHeaderProps) => {
    return(
        <WorkHeaderH2>{props.title}</WorkHeaderH2>
    );
}

const WorkHeaderH2 = styled.h2`
    margin: 50px 0;
    font-size: 25px;
    font-family: 'Noto Sans JP', sans-serif;
    letter-spacing: 0.2em;
`;

export default WorkHeader;