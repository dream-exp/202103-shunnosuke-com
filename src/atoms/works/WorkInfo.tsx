import { ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

interface WorkInfoProps {
    period?: string,
    award?: string,
    technologies?: string,
    member?: string,
    responsible?: string,
    github?: ReactNode,
    link?: ReactNode,
    others?: ReactNode
}

const WorkInfo = (props: WorkInfoProps) => {
    return(
        <WorkInfoComponent>
            {
                props.period && (
                    <div>
                        <p className="head">制作期間</p>
                        <p className="data">{props.period}</p>
                    </div>
                )
            }
            {
                props.award && (
                    <div>
                        <p className="head">受賞</p>
                        <p className="data">{props.award}</p>
                    </div>
                )
            }
            {
                props.technologies && (
                    <div>
                        <p className="head">使用技術</p>
                        <p className="data">{props.technologies}</p>
                    </div>
                )
            }
            {
                props.member && (
                    <div>
                        <p className="head">開発人数</p>
                        <p className="data">{props.member}</p>
                    </div>
                )
            }
            {
                props.responsible && (
                    <div>
                        <p className="head">担当範囲</p>
                        <p className="data">{props.responsible}</p>
                    </div>
                )
            }
            {
                props.github && (
                    <div>
                        <p className="head">Github</p>
                        <p className="data">{props.github}</p>
                    </div>
                )
            }
            {
                props.link && (
                    <div>
                        <p className="head">リンク</p>
                        <p className="data">{props.link}</p>
                    </div>
                )
            }
            {
                props.others && (
                    <div>
                        <p className="head">その他</p>
                        <p className="data">{props.others}</p>
                    </div>
                )
            }
        </WorkInfoComponent>
    );
}

const WorkInfoComponent = styled.div`
    width: 100%;
    margin: 100px 0;

    div {
        ${media.greaterThan("medium")`
            display: flex;
        `}
        margin: 40px 0;
        width: 100%;

        p {
            font-family: 'Noto Sans JP', sans-serif;
            font-size: 14px;
            letter-spacing: 0.2em;
            line-height: 1.7em;
            ${media.lessThan("medium")`
                display: block;
            `}

        }

        p.head {
            ${media.greaterThan("medium")`
                width: 10%;
                margin-right: 30px;
            `}
            ${media.lessThan("medium")`
                width: 100%;
                font-size: 12px;
                margin-bottom: 10px;
            `}
        }

        p.data {
            ${media.greaterThan("medium")`
                width: 80%;
            `}
            ${media.lessThan("medium")`
                width: 100%;
            `}
        }
    }
`;

export default WorkInfo;