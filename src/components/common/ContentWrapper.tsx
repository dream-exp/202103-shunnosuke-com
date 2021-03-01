import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children?: ReactNode;
    title?: string;
  };

const ContentsWrapper = ({ children }: Props) => {
    return(
        <ContentsComponent>
            <div>
                {children}
            </div>
        </ContentsComponent>
    );
}


const ContentsComponent = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    min-height: 80vh;

    > div {
      width: 80vw;
      max-width: 1000px;
    }
`;

export default ContentsWrapper;
