import { FC } from "react";
import ReactPlayer from 'react-player'; 

interface YouTubeVideoProps {
    url: string;
}

const YouTubeVideo: FC<YouTubeVideoProps> = ({url}) => {
    return (
        <>
            <ReactPlayer
                url={url}
                width="530px"
                height="235px"
                controls={true}
                light={true} 
                style={{ borderRadius: '4px', overflow: 'hidden' }}
            />
        </>
    );
}

export default YouTubeVideo;