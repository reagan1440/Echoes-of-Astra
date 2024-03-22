import {
    ChakraBaseProvider,
    extendTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  
  const { Button } = chakraTheme.components
  
  const Theme = extendTheme({
    colors:{
        primary: 'b8336a',
        primaryB: 'c490d1',
        secondary: 'acacde',
        tertiary: 'abdafc',
    },
    components: {
      Button,
    },
  })

  export default Theme;