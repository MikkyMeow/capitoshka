import { Button, ButtonGroup } from '@mui/material';
import { AppBar } from 'components/widgets/AppBar';
import { useState } from 'react';
import styles from './EpisodeList.module.css';
import { useParams } from 'react-router-dom';
import { series } from 'content';
import { Player } from 'components/widgets/Player';
import { List } from 'components/widgets/List';

export type TSteps =
  | 'trackOnly'
  | 'trackWithSubtitles'
  | 'textForeign'
  | 'textWithTranslate';

export const EpisodeList = () => {
  const { seriesId, seasonId, episodeId } = useParams();
  const [type, setType] = useState<TSteps>('trackOnly');
  // @ts-ignore
  const currentEpisode = series[seriesId].seasons[seasonId][episodeId];

  return (
    <>
      <AppBar />
      <div className={styles.header}>
        <h2>{currentEpisode.name}</h2>
        <ButtonGroup>
          <Button
            onClick={() => setType('trackOnly')}
            variant={type === 'trackOnly' ? 'contained' : 'outlined'}
          >
            Video
          </Button>
          <Button
            onClick={() => setType('trackWithSubtitles')}
            variant={type === 'trackWithSubtitles' ? 'contained' : 'outlined'}
          >
            Video + subtitles
          </Button>
          <Button
            onClick={() => setType('textForeign')}
            variant={type === 'textForeign' ? 'contained' : 'outlined'}
          >
            Foreign Text
          </Button>
          <Button
            onClick={() => setType('textWithTranslate')}
            variant={type === 'textWithTranslate' ? 'contained' : 'outlined'}
          >
            Text + Translate
          </Button>
        </ButtonGroup>
      </div>
      <div className={styles.content}>
        {type === 'trackOnly' && <Player />}
        {type === 'trackWithSubtitles' && <Player withSubtitles />}
        {type === 'textForeign' && (
          <List episodeList={currentEpisode.subtitles} />
        )}
        {type === 'textWithTranslate' && (
          <List episodeList={currentEpisode.subtitles} withTranslate />
        )}
      </div>
    </>
  );
};
