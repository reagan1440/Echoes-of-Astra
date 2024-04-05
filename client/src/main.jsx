import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import DreamDictionary from './pages/Dream Dictionary/DreamDictionary.jsx';
import NoMatch from './pages/NoMatch';
import AuthPage from './pages/Auth';
import Success from './pages/Success';
import ChatbotApp from './components/OPENAI/Chats.jsx';
import DreamJournal from './pages/DreamJournal/DreamJournal.jsx';
import Donations from './pages/donation/Donations';
import auth from './utils/auth.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/auth',
        element: <AuthPage />
      }, 
      {
        path: '/success',
        element: <Success />
      },  
      {
        path: '/dreamDictionary',
        element: <DreamDictionary />
        // element: auth.loggedIn() ? <DreamDictionary /> : <AuthPage />
      },
      {
        path: '/dreamInterpretation',
        element: <ChatbotApp />
        // element: auth.loggedIn() ? <ChatbotApp /> : <AuthPage />
      },
      {
        path: '/dreamJournal',
        element: auth.loggedIn() ? <DreamJournal /> : <AuthPage />
      },
      {
        path: '/donations',
        element: <Donations />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
