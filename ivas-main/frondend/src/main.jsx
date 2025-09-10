import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Crm from './container/dashboards/crm/crm.jsx';
import Loader from './components/common/loader/loader.jsx';
import Backlog from './container/planning/backlog/backlog.jsx';
import Board from './container/planning/board/board.jsx';
import Issues from './container/planning/issues/issues.jsx';
import Error404 from './container/error/404error/404error.jsx';
import PageError from './container/error/pageerror/pageerror.jsx';
import Auth from './firebase/auth.jsx';
import Login from './firebase/login.jsx';

import AuthProvider from './hooks/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
  <BrowserRouter>
    <React.Suspense fallback={<Loader/>}>
      <AuthProvider>
      <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
            <Route index element={<Login />} />              
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App/>}>
            <Route index element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}dashboards/crm`} element={<Crm/>} />          
            <Route path={`${import.meta.env.BASE_URL}planning/backlog`} element={<Backlog/>} />
            <Route path={`${import.meta.env.BASE_URL}planning/board`} element={<Board/>} />
            <Route path={`${import.meta.env.BASE_URL}planning/issues`} element={<Issues/>} />            
          </Route>         
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<PageError />} />
      </Routes>
      </AuthProvider>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);
