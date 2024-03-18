import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Root} from './base';
import {Resume, Home, Personal} from './pages'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },{
        path: "resume",
        element: <Resume />,
      },{
        path: "projects",
        element: <Home />,
      },{
        path: "personal",
        element: <Personal />,
      }
    ],
  }]);
  return <RouterProvider router={router} />;
}

export default App;
