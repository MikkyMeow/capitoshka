import { createBrowserRouter } from "react-router-dom";
import { SelectSeries } from "../../pages/SelectSeries";
import { SelectSeason } from "../../pages/SelectSeason";
import { SelectEpisode } from "../../pages/SelectEpisode";
import { EpisodeList } from "../../pages/EpisodeList";
import { Error } from "components/pages/Error/Error";
import { Auth } from "components/pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectSeries />,
  },
  {
    path: "/:seriesId",
    element: <SelectSeason />,
  },
  {
    path: "/:seriesId/:seasonId",
    element: <SelectEpisode />,
  },
  {
    path: "/:seriesId/:seasonId/:episodeId",
    element: <EpisodeList />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
   {
    errorElement: <Error />,
   }
]);
