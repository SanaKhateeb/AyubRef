import { Box, Toolbar } from '@mui/material'
import React from 'react'

export const MainPage = () => {
    return (
        <Box component="main" sx={{ p: 3, pt: 1 }}>
            {/* TODO: Wtf */}
            <Toolbar /> 
            <h1>
                This is a main page lmao
            </h1>
        </Box>
    )
}