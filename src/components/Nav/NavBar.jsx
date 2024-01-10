import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, Typography, ListItem, ListItemButton, ListItemText, Box, Divider, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'


export const NavBar = ({navLinks}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
            <Typography variant='h6'>
                LOGO
            </Typography>
            <Divider />
            <List>
                {navLinks.map((link) => (
                    <ListItem key={`${link}-key`} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} >
                            <ListItemText primary={link} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <AppBar component='nav'>
            <Toolbar>
                <IconButton
                    onClick={handleDrawerToggle}
                    color='inherit' edge="start" sx={{mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        // Took this from MUI docs, supposed to be optimized for mobile
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </AppBar>
    )
}