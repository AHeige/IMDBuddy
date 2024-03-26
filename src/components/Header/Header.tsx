import React, { ReactNode } from 'react'

//MUI
import { AppBar, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import FavoriteIcon from '@mui/icons-material/Favorite'

//Context
import { useSearchContext } from '../../hooks/useSearchContext'

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
  const { setMovies } = useSearchContext()

  return (
    <>
      <AppBar position='relative' color='default'>
        <Toolbar
          style={{
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'flex-start',
            // flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {children}
          <IconButton
            onClick={() => setMovies(undefined)}
            color='inherit'
            title='Go to favourites'
            aria-label='Go to favourites'
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label='Toggle theme'
            onClick={toggleTheme}
            color='inherit'
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
