import { AccountCircleOutlined } from "@mui/icons-material";
import {
  IconButton,
  Toolbar,
  AppBar as MuiAppBar,
  Breadcrumbs,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import classes from './AppBar.module.css'
import './AppBar.css'

export const AppBar = () => {
  const params = useParams();

  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Breadcrumbs sx={{ color: "white" }}>
          <Link to="/">
            LOGO
          </Link>
          {params?.seriesId} ?
          <Link to={`/${params.seriesId}`}>
            {params.seriesId}
          </Link>
          : null;
          {params?.seasonId} ?
          <Link
            to={`/${params.seriesId}/${params.seasonId}`}
          >
            {params.seasonId}
          </Link>
          : null;
          {params?.episodeId} ?
          <Link
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
