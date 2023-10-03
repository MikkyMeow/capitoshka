import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { series } from "../../../../content";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { OutlinedFlag } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { AppBar } from "components/widgets/AppBar";

export const SelectSeason = () => {
  const navigate = useNavigate();
  const { seriesId } = useParams();
  // @ts-ignore
  const currentSeries = series[seriesId];
  const seasonsCount = currentSeries ? Object.keys(currentSeries.seasons) : [];

  return (
    <>
      <AppBar />
      <h2>{currentSeries?.name}</h2>
      <p>{currentSeries?.description}</p>
      <List>
        {seasonsCount.map((key) => (
          <ListItem disablePadding key={key}>
            <ListItemButton onClick={() => navigate(`/${seriesId}/${key}`)}>
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
