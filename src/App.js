import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Entries from './pages/Entries';
import Home from './pages/Home';
import Auth from './pages/Auth';
import {action as authAction} from "./pages/Auth";

const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"auth",element:<Auth/>,action:authAction},
  {path:"entries",element:<Entries/>}
])

function App() {
  return(
  <RouterProvider router={router}/>
  )
}

export default App;
