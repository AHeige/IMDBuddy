import { ReactNode } from 'react'

//MUI
import { AppBar, Toolbar } from '@mui/material'

//Styles
import './Header.css'

//Services

interface HeaderProps {
  children?: ReactNode
}

/**
 * This component render the header with a Toolbar
 * @param {ChildNode} children
 * @returns {ReactNode} A react element that renders an header with Toolbar and child elements
 */
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
