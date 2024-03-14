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
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contacts',
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