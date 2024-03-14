import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import Banner from "./views/Banner";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact"
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Layout />,
    children: [
      {
        path: '/portfolio',
        element: <Banner />
      },
      {
        path: '/portfolio/about',
        element: <About />
      },
      {
        path: '/portfolio/skills',
        element: <Skills />
      },
      {
        path: '/portfolio/projects',
        element: <Projects />
      },
      {
        path: '/portfolio/contacts',
        element: <Contact />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },

])

export default router