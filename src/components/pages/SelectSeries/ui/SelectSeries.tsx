import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { seriesRequest } from "../../../../content";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { OutlinedFlag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AppBar } from "components/widgets/AppBar";

export const SelectSeries = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar />
      <List>
        {seriesRequest.map(({ name, id }) => (
          <ListItem disablePadding key={id}>
            <ListItemButton onClick={() => navigate(`/${id}`)}>
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
