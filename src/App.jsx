import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './pages/Home';
import Benefits from './components/Benefits';
import Environment from './components/Environment';
import Technology from './components/Technology';
import About from './components/About';
import Content from './components/Content';


const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/technology",
        element: <Technology />
      },
      {
        path: "/benefits",
        element: <Benefits />
      },
      {
        path: "/environment",
        element: <Environment />
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/contact",
        element: <Content/>
      }
    ]
  }
]);

function App() {

  
  
  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
