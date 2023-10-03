import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { series } from "../../../../content";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { OutlinedFlag } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { AppBar } from "components/widgets/AppBar";

export const SelectEpisode = () => {
  const navigate = useNavigate();
  const { seriesId, seasonId } = useParams();
  // @ts-ignore
  const currentSeries = series[seriesId];
  const episodesCount = currentSeries
    ? // @ts-ignore
      Object.keys(currentSeries.seasons[seasonId])
    : [];

  return (
    <>
      <AppBar />
      <h2>{currentSeries?.name}</h2>
      <p>{currentSeries?.description}</p>
      <List>
        {episodesCount.map((key) => (
          <ListItem disablePadding key={key}>
            <ListItemButton
              onClick={() => navigate(`/${seriesId}/${seasonId}/${key}`)}
            >
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary={key} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
