// @ts-nocheck
import { FC } from 'react';
import ReactPlayer from 'react-player';
import subtitles from 'assets/subtitles/subtitles.vtt';
import video from 'assets/video/video.webm';

interface IProps {
  withSubtitles?: boolean;
}

export const Player: FC<IProps> = ({ withSubtitles = false }) => {
  return (
    <div>
      <ReactPlayer
        url={video}
        width="100%"
        height="100%"
        controls
        config={{
          file: {
            tracks: [
              {
                label: 'subtitles',
                kind: 'subtitles',
                src: subtitles,
                srcLang: 'en',
                default: withSubtitles,
              },
            ],
          },
        }}
        onProgress={(e) => console.log(e)}
      />
    </div>
  );
};
