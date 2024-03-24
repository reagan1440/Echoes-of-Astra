import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import DreamDictionary from './pages/DreamDictionary';
import NoMatch from './pages/NoMatch';
import AuthPage from './pages/Auth';
import Success from './pages/Success';
import ChatbotApp from './components/OPENAI/chat.jsx';
import DreamJournal from './pages/DreamJournal/DreamJournal.jsx';

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
      },
      {
        path: '/dreamInterpretation',
        element: <ChatbotApp />
      },
      {
        path: '/dreamJournal',
        element: <DreamJournal />
      },
      {
        path: '/dreamJournal',
        element: <DreamJournal />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
