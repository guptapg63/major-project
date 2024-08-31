import './App.css';
import Candidate from './candidate/Candidate';
import Forgot from './forgot-password/Forgot';
import Login from './login/Login';
import Verify from './otp-verification/Verify';
import Password from './password/Password';
import Signup from './signup/Signup';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Signup/>

    },
    {
      path:"/login",
      element:<Login/>

    },
    {
      path:"/forgot",
      element:<Forgot/>

    },

    {
      path:"/verify",
      element:<Verify/>
    },

    {
      path:"/password",
      element:<Password/>
    },
    {
      path:"/candidate",
      element:<Candidate/>
    }

    

    

  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
