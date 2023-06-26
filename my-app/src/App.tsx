import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import CategoryListPage from "./components/category/list/CategoryListPage";
import CategoryCreatePage from "./components/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/category/edit/CategoryEditPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
            <Route index element={<CategoryListPage/>}/>
            <Route path="category/create" index element={<CategoryCreatePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
