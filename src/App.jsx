import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import NavBar from './Header/NavBar'
import { routes } from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router}>
        <NavBar/>
      </RouterProvider>
      
    </>
  )
}

export default App
