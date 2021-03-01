import styled from 'styled-components';
import YouTube from 'react-youtube';

interface WorkYoutubeProps {
    VideoID: string
}

const WorkYoutube = (props: WorkYoutubeProps) => {
    return(
        <WorkYoutubeComponent>
            <YouTube 
                videoId={props.VideoID}
                id={"youtube_player"}
                containerClassName={"youtube_player"}
            />
        </WorkYoutubeComponent>
    );
}

const WorkYoutubeComponent = styled.div`
    margin: 80px 0;
    position: relative;
    padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
    height: 0;
    overflow: hidden;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export default WorkYoutube;