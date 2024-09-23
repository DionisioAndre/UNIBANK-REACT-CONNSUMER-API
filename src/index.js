import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './routes/outhers/Home';
import Conta from './routes/Admin/Add/Conta';

import ConsultarBanco from './routes/Admin/get/Consultar_Banco';
import ConsultarConta from './routes/Admin/get/Consultar_conta';
import Banco from './routes/Admin/Add/Banco';
import HomeAdmin from './routes/Admin/Home';
import UpdateBanco from './routes/Admin/up/Banco'
import ConsultarPorNome from './routes/Admin/get/ConsularPorNome';
import DeleteBanco from './routes/Admin/del/Banco';
import DeleteConta from './routes/Admin/del/Conta';
const router1=createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"admin/add/banco/",
        element:<Banco/>
      },
      {
        path:"admin/add/conta/",
        element:<Conta/>
      },
      {
        path:"admin/deleteBanco/",
        element:<DeleteBanco/>
      },
      {
        path:"admin/deleteConta/",
        element:<DeleteConta/>
      },
      {
        path:"homeadmin",
        element:<HomeAdmin/>
      },
      {
        path:"admin/get/consultarPorNome/",
        element:<ConsultarPorNome/>
      },
      {
        path:"admin/add/conta/",
        element:<Conta/>
      },{
        path:"admin/get/ConsultarBanco/",
        element:<ConsultarBanco/>
      
      },
      {
        path:"admin/get/ConsultarConta/",
        element:<ConsultarConta/>
      }
      ,{
        path:"admin/updateBanco/",
        element:<UpdateBanco/>
      },
    ]
  }]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router1}>
    <App/>
  </RouterProvider>
);