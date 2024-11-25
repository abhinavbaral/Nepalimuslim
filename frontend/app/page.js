'use client'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '@/components/Homepage'
import Signuppage from '@/components/Signuppage';
import Userpage from '@/components/Userpage';


function page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" component={Signuppage} />
        <Route path="/user" component={Userpage} />
      </Routes>
    </BrowserRouter>
  );
}

export default page;
