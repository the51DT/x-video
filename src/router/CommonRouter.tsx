import React from 'react'
import { Routes, Route } from 'react-router-dom'

// 레이아웃
import Main from '../pages/Main'
import Layout from '../layout/layout';
import OnlyBodyLy from '../layout/onlyBodyLy';

// 페이지
import Shorts from '../pages/media/ShortVideo'

function CommonRouter() {
    return (
      <Routes>        
        <Route element={<Layout />}>          
          <Route path="/Main" element={<Main />}></Route>          
        </Route>        
        <Route element={<OnlyBodyLy />}>                    
          <Route path="/Shorts" element={<Shorts />}></Route>
        </Route>         
        {/*<Route component={NotFound} />*/}
      </Routes>
    )
  }
  
  export default CommonRouter