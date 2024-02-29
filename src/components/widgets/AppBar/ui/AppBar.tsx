import { AccountCircleOutlined } from "@mui/icons-material";
import {
  IconButton,
  Toolbar,
  AppBar as MuiAppBar,
  Breadcrumbs,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

export const AppBar = () => {
  const params = useParams();

  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Breadcrumbs sx={{ color: "white" }}>
          <Link style={{ color: "white" }} to="/">
            ...
          </Link>
          {params?.seriesId} ?
          <Link style={{ color: "white" }} to={`/${params.seriesId}`}>
            {params.seriesId}
          </Link>
          : null;
          {params?.seasonId} ?
          <Link
            style={{ color: "white" }}
            to={`/${params.seriesId}/${params.seasonId}`}
          >
            {params.seasonId}
          </Link>
          : null;
          {params?.episodeId} ?
          <Link
            style={{ color: "white" }}
            to={`/${params.seriesId}/${params.seasonId}/${params.episodeId}`}
          >
            {params.episodeId}
          </Link>
          : null;
        </Breadcrumbs>
        <IconButton sx={{ color: "white" }}>
          <AccountCircleOutlined />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
