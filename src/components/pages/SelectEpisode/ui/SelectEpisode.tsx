import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { series } from "../../../../content";
import { ListItemButton, ListItemIcon, Paper } from "@mui/material";
import { Flag, OutlinedFlag, OutlinedFlagRounded } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { AppBar } from "components/widgets/AppBar";

export const SelectEpisode = () => {
  const navigate = useNavigate();
  const { seriesId, seasonId } = useParams();
  // @ts-ignore
  const currentSeries = series[seriesId];
  const episodesCount = currentSeries
    ? // @ts-ignore
      Object.entries(currentSeries.seasons[seasonId])
    : [];

  return (
    <>
      <AppBar />
      <Paper sx={{ padding: "12px", marginBottom: "8px" }}>
        <h2>{currentSeries?.name}</h2>
        <p>{currentSeries?.description}</p>
      </Paper>
      <Paper>
        <List>
          {episodesCount.map(([key, value]: [string, any]) => {
            const selectedStr = localStorage.getItem(
              `${seriesId}.${seasonId}.${key}`
            );
            const selected = selectedStr ? JSON.parse(selectedStr).length : 0;

            return (
              <ListItem disablePadding key={key}>
                <ListItemButton
                  onClick={() => navigate(`/${seriesId}/${seasonId}/${key}`)}
                >
                  <ListItemIcon>
                    {selected !== value.subtitles.length ? (
                      <OutlinedFlag />
                    ) : (
                      <Flag />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={key}
                    secondary={`${selected}/${value.subtitles.length}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </>
  );
};
