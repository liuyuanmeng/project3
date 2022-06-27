import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './styles/main.scss'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(<ChakraProvider>
  <ColorModeScript initialColorMode='light'/>
  <App /></ChakraProvider>)
