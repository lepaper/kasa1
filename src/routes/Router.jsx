import { createBrowserRouter } from "react-router-dom"
import About from "../pages/About"
export const router = createBrowserRouter([
  {
    
    children: [
      {
        path: "about",
        element: <About />,
      },
     
    ],
  },
])