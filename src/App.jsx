import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Layout from './Components/shared/Layout'
import { ThemeProvider } from '@mui/material'
import { getTheme } from "./theme";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/pages/dashboard/Dashboard';
import Teams from './Components/pages/team/Teams';
import Contacts from './Components/pages/contacts/Contacts';
import Invoices from './Components/pages/invoices/Invoices';
import Profile from './Components/pages/profile/Profile';
import Calender from './Components/pages/calender/Calender';
import Faq from './Components/pages/faq/Faq';
import Bar from './Components/pages/bar/Bar';
import Pie from './Components/pages/pie/Pie';
import Geography from './Components/pages/geography/Geography';
import Line from './Components/pages/line/Line';
import NotFound from './Components/shared/NotFound';

function App() {

  const [mode, setMode] = useState(localStorage.getItem("themeMode") || "light");
  
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
        setMode(savedMode);
    }
  }, []);

  let routers = createBrowserRouter([
    {path:'', element:<Layout toggleMode={toggleMode}/> ,children:[
      {index:true , element:<Dashboard/>},
      {path:"team", element:<Teams/>},
      {path:"contacts", element:<Contacts/>},
      {path:"invoices", element:<Invoices/>},
      {path:"profile", element:<Profile/>},
      {path:"calender", element:<Calender/>},
      {path:"faq", element:<Faq/>},
      {path:"bar", element:<Bar/>},
      {path:"pie", element:<Pie/>},
      {path:"line", element:<Line/>},
      {path:"geography", element:<Geography/>},
      {path:"*", element:<NotFound/>},
    ]},
  ])
  
  return (
    <>
     <ThemeProvider theme={theme}>
      <RouterProvider router={routers}></RouterProvider>
     </ThemeProvider>
    </>
  )
}

export default App
