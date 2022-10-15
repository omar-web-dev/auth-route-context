import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      children : [
        {path : '/', element : <Home/>},
        {path : 'home', element : <Home/>},
        {path : 'sing-in', element : <SignIn/>},
        {path : 'sing-up', element : <SignUp/>},
      ],
      errorElement : <ErrorPage/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
