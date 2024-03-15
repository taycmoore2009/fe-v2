import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Root} from './base';
import {Resume, Home} from './pages'

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
        path: "problems",
        element: <Home />,
      }
    ],
  }]);
  return <RouterProvider router={router} />;
}

export default App;
