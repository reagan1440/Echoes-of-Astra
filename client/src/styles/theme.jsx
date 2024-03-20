import {
    ChakraBaseProvider,
    extendTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  
  const { Button } = chakraTheme.components
  
  const Theme = extendTheme({
    colors:{
        primary: "#FFCBF2",
        primaryB: "#F3C4FB",
        primaryC: "#ECBCFD",
        secondary: "#C0FDFF",
        secondaryB: "#D0D1FF",
        secondaryC: "#C8E7FF",
        tertiary: "#D8BBFF",
        teritaryB: "#E5B3FE",
        teritaryC: "#E2AFFF"
    },
    components: {
      Button,
    },
  })

  export default Theme;