import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GeneratorPage from "../pages/GeneratorPage";
import ContactPage from "../pages/ContactPage";
import Root from "../components/Root";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
            index: true,
            element: <HomePage/>,
        },
        {
            path: 'generator',
            element: <GeneratorPage/>,
        },
        {
            path: 'contact',
            element: <ContactPage/>,
        }
      ]
    }
  ])


  export default router;