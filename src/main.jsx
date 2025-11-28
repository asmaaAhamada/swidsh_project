import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import store from './store'

function Main() {
  const [mode, setMode] = useState('light')

  const theme = useMemo(() =>
    createTheme({
    palette: {
  mode,
  primary: {
    main: mode === 'light' ? '#1976d2' : '#90caf9', // أزرق رئيسي لللايت، أزرق فاتح للدارك
    contrastText:mode === 'light' ?'#ffffff' : '#000000', // لون النص على الأزرار
  },
  background: {
    default: mode === 'light' ? '#ffffffff' : '#000000', // الأبيض لللايت، الأسود للدارك
    paper: mode === 'light' ? '#ffffff' : '#121212',   // البطاقات
  },
  text: {
    primary: mode === 'light' ? '#1976d2' : '#ffffff', // النص الرئيسي: أزرق لللايت، أبيض للدارك
    secondary: mode === 'light' ? '#1565c0' : '#b0b0b0', // النص الثانوي
  },
},

      typography: {
        fontFamily: 'CairoBlack, Arial, sans-serif',
      },
       navbar: {
        main: mode === 'light' ? '#c2e0f57c' : '#121212', // لون خلفية  
        contrastText: mode === 'light' ? '#1976d2' : '#ffffff', // لون النص والأيقونات
        hover: mode === 'light' ? '#e3f2fd' : '#1f1f1f', // عند التحويم
        border: mode === 'light' ? '#1976d2' : '#90caf9',
        span:mode === 'light' ? '#627991ff' : '#ffffff',
                body: mode === 'light' ? '#c2e0f52c' : '#000000', // لون خلفية  البودي
button:mode === 'light' ? '#ffffff' : '#1976d2',
            Text:mode === 'light' ? '#000000' :'#1976d2' ,  
               paper: mode === 'light' ? '#ffffff' : '#121212',   // البطاقات
// لون النص مخصص  

      },
    }),
    [mode]
  )

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
