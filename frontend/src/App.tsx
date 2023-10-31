import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Game from "./pages/game/Game";
import type { LandingPageLink } from "./pages/landingPage/LandingPage";
import LandingPage from "./pages/landingPage/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";

const links: LandingPageLink[] = [
  { label: "Play Locally", path: paths.localGame },
  { label: "Play Online", path: "#" },
  { label: "About", path: paths.about },
];

const router = createBrowserRouter([
  {
    path: paths.landingPage,
    element: <Layout />,
    children: [
      {
        path: paths.landingPage,
        element: <LandingPage links={links} />,
      },
      {
        path: paths.localGame,
        element: <Game />,
      },
      {
        path: paths.about,
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
