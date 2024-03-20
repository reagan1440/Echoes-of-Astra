import astra from "../assets/images/Cosmog.png"
import { Box, Text } from "@chakra-ui/react"


const Home = () => {
  return (
    <div className="container">

{/* // adding linear gradient and color transitions
<Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />

// adding radial gradient and color transitions
<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

// adding the text gradient
<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
  Welcome to Chakra UI
</Text> */}


// verbose
<Box
  backgroundImage="url('../assets/images/Cosmog.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
/>

// shorthand
<Box
  bgImage="url('../assets/images/Cosmog.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
/>
    </div>
  );
};

export default Home;
