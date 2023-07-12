import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import CategoryListPage from "./components/category/list/CategoryListPage";
import CategoryCreatePage from "./components/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/category/edit/CategoryEditPage";
import AdminLayout from "./components/admin/container/AdminLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import HomePage from "./components/home/HomaPage";
import DefaultLayout from "./components/container/DefaulLayout";
import LoginPage from "./components/auth/login/LoginPage";
import Loader from "./components/common/loader/Loader";

function App() {
  return (
    <>
      <Loader/>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
        <Route path={"/admin"} element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path="category">
              <Route index element={<CategoryListPage/>}/>
              <Route path="create" index element={<CategoryCreatePage/>}/>
              <Route path="edit">
                <Route path=":id" element={<CategoryEditPage/>}/>
              </Route>
            </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
