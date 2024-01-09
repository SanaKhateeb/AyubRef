import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'


export const NavBar = ({navLinks}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState)
    }

    return (
        <h1>Here is a test</h1>
    )
}