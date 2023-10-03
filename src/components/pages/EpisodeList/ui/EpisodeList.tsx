import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { CommentOutlined } from "@mui/icons-material";
import { series } from "../../../../content";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppBar } from "components/widgets/AppBar";

export const EpisodeList = () => {
  const { seriesId, seasonId, episodeId } = useParams();
  const selected = localStorage.getItem(`${seriesId}.${seasonId}.${episodeId}`);
  const [selectedSubtitles, setSelectedSubtitles] = useState<number[]>(
    selected ? JSON.parse(selected) : []
  );
  // @ts-ignore
  const currentEpisode = series[seriesId].seasons[seasonId][episodeId];

  const checkboxHandler = (index: number) => {
    let foundIndex = selectedSubtitles.indexOf(index);
    console.log(foundIndex);
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

  useEffect(() => {
    localStorage.setItem(
      `${seriesId}.${seasonId}.${episodeId}`,
      JSON.stringify(selectedSubtitles)
    );
  }, [selectedSubtitles, seriesId, seasonId, episodeId]);

  return (
    <>
      <AppBar />
      <h2>{currentEpisode.name}</h2>
      <List>
        {currentEpisode.subtitles.map((value: any, index: number) => {
          const labelId = `checkbox-list-label-${value}`;
          const isSelected = selectedSubtitles.includes(index);

          return (
            <ListItem
              key={Math.random()}
              disablePadding
              onClick={() => checkboxHandler(index)}
              secondaryAction={
                <Tooltip title={value.rus} placement="top-start">
                  <IconButton edge="end" aria-label="comments">
                    <CommentOutlined />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemButton dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isSelected}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.eng} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
