import React, { Suspense } from 'react';
import { PasswordResetPage } from '../pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicLinks from './links';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={publicLinks.home} element={<Home />} />
          <Route path={publicLinks.Login} element={<Login />} />
          <Route path={publicLinks.forgotPassword} element={<ForgotPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
