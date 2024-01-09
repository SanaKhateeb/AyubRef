import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'


export const NavBar = ({navLinks}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState)
    }

    return (
        <AppBar component='nav'>
            <Toolbar>
                <IconButton color='inherit' edge="start" sx={{mr: 2}}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}