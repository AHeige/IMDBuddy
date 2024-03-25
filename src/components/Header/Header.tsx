import React, { ReactNode } from 'react'

//MUI
import { AppBar, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

//Styles
import './Header.css'

//Services

interface HeaderProps {
  children?: ReactNode
  toggleTheme: () => void
  darkMode: boolean
}

/**
 * This component render the header with a Toolbar
 * @param {ChildNode} children
 * @returns {ReactNode} A react element that renders an header with Toolbar and child elements
 */
const Header: React.FC<HeaderProps> = ({ children, toggleTheme, darkMode }) => {
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
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color='inherit'>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
