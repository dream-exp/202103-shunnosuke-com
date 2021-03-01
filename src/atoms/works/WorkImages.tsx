import { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface WorkImagesProps {
    imagePaths: string[]
}

const WorkImages = (props: WorkImagesProps) => {
    const [displayImagePath, setDisplayImagePath] = useState(props.imagePaths[0]);
    const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

    return(
        <WorkImagesComponent>
            {!isMobile &&
                <> 
                    <div id="currentImg">
                        <img src={displayImagePath} />
                    </div>
                    <div id="thumbnails">
                        {
                            props.imagePaths.map(path => {
                                return(
                                    <img
                                        src={path}
                                        onClick={() => {setDisplayImagePath(path)}}
                                        className={ path === displayImagePath ? "displayed" : "" }
                                    />
                                )
                            })
                        }
                    </div>
                </>
            }
            {isMobile &&
                <div id="mobileImages">
                    {
                    props.imagePaths.map(path => {
                        return(
                            <img
                                src={path}
                            />
                        )
                    })
                }
                </div>
            }
        </WorkImagesComponent>
    );
}

const WorkImagesComponent = styled.div`
    width: 100%;

    div#currentImg {
        width: 100%;

        img {
            width: 100%;
        }
    }

    div#thumbnails {
        display: flex;
        flex-wrap: wrap;

        img {
            width: 150px;
            margin-top: 20px;
            margin-right: 30px;
            cursor: pointer;
            border: solid 2px #bbb;
        }

        img.displayed {
            opacity: 0.4;
        }
    }

    div#mobileImages {
        width: 100%;

        img {
            width: 100%;
        }
    }
`;

export default WorkImages;