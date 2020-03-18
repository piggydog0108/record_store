import React, { useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';
import  PostListPage from './pages/PostListPage';
import  LoginPage from './pages/LoginPage';
import  ReadPage from './pages/ReadPage';
import  RegisterPage from './pages/RegisterPage';
import  WritePage from './pages/WritePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Route component={PostListPage} path={['/@:username','/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={ReadPage} path="/@:username/:postId"/>
    </div>
  );
};

export default App;

