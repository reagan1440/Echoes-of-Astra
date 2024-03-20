import astra from "../assets/images/Cosmog.png"
import { Box, Text, Center, Grid, GridItem } from "@chakra-ui/react"


const Home = () => {
  return (
    <div className="container">


<Grid templateColumns='repeat(3, 1fr)' gap={100}>
  <h1> <GridItem />Dream Journal</h1>
  <h1> <GridItem />Dream Interpretation</h1>
  <h1> <GridItem />Dream Dictionary</h1>
</Grid>

<Center color='white'>
<Box boxSize='lg'>
  <img src={astra} alt='Dream Genie' />
</Box>
</Center>

    </div>
  );
};

export default Home;
