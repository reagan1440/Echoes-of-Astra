import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import DreamDictionary from './pages/DreamDictionary';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import AuthPage from './pages/Auth';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import ChatbotApp from './components/OPENAI/chat.jsx';
import DreamJournal from './components/DreamJournal/DreamJournal.jsx';

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
        path: '/orderHistory',
        element: <OrderHistory />
      }, 
      {
        path: '/products/:id',
        element: <Detail />
      }, 
      {
        path: '/dreamDictionary',
        element: <DreamDictionary />
      },
      {
        path: '/chat',
        element: <ChatbotApp />
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
