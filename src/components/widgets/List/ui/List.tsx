import {
  Button,
  ButtonGroup,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { IEpisode } from 'content';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
  episodeList: IEpisode[];
  withTranslate?: boolean;
}

export const List: FC<IProps> = ({ episodeList, withTranslate }) => {
  const { seriesId, seasonId, episodeId } = useParams();
  const selected = localStorage.getItem(`${seriesId}.${seasonId}.${episodeId}`);
  const [selectedSubtitles, setSelectedSubtitles] = useState<number[]>(
    selected ? JSON.parse(selected) : []
  );
  const [type, setType] = useState<'all' | 'unstudied'>('all');

  const checkboxHandler = (index: number) => {
    let foundIndex = selectedSubtitles.indexOf(index);
    if (foundIndex !== -1) {
      setSelectedSubtitles([
        ...selectedSubtitles.slice(0, foundIndex),
        ...selectedSubtitles.slice(foundIndex + 1),
      ]);
    } else {
      let lastIndex = 0;
      for (let i = 0; i < selectedSubtitles.length; i++) {
        if (index > selectedSubtitles[i]) {
          lastIndex = i;
          break;
        }
      }
      setSelectedSubtitles([
        ...selectedSubtitles.slice(0, lastIndex),
        index,
        ...selectedSubtitles.slice(lastIndex),
      ]);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => setType('all')}
          variant={type === 'all' ? 'contained' : 'outlined'}
        >
          All
        </Button>
        <Button
          onClick={() => setType('unstudied')}
          variant={type === 'unstudied' ? 'contained' : 'outlined'}
        >
          Unstudied
        </Button>
      </ButtonGroup>
      {episodeList.map((value: any, index: number) => {
        const labelId = `checkbox-list-label-${value}`;
        const isSelected = selectedSubtitles.includes(index);
        if (type === 'unstudied' && isSelected) return null;

        return (
          <ListItem
            key={Math.random()}
            disablePadding
            onClick={() => checkboxHandler(index)}
          >
            <ListItemButton disableRipple dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isSelected}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value.eng}
                secondary={withTranslate && value.rus}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};
