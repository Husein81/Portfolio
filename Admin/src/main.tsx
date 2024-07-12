import React from 'react'
import ReactDOM from 'react-dom/client'
import './apps/layout/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './apps/routes/Routes.tsx'
import { Provider } from 'react-redux'
import { store } from './apps/redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
