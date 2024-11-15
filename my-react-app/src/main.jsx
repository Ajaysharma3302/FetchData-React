import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import UserList from './Component/UserList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserList />
  </StrictMode>,
)
