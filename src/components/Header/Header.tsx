import { ReactNode } from 'react'

//MUI
import { AppBar, Toolbar } from '@mui/material'

//Styles
import './Header.css'

//Services

interface HeaderProps {
  children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar
          style={{
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
