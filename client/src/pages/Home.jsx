import astra from "../assets/images/Cosmog.png";
import { Box, Text, Center, Grid, GridItem } from "@chakra-ui/react";
// Routing to other pages
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <Grid templateColumns="repeat(3, 1fr)" gap={100}>
        <h1>
          {" "}
          <GridItem />
          <Link to="/dreamJournal">Dream Journal</Link>
        </h1>
        <h1>
          {" "}
          <GridItem />
          <Link to="/dreamInterpretation">Dream Interpretation</Link>
        </h1>
        <h1>
          {" "}
          <GridItem />
          <Link to="/dreamDictionary">Dream Dictionary</Link>
        </h1>
      </Grid>

      <Center color="white">
        <Box boxSize="lg">
          <img src={astra} alt="Dream Genie" />
        </Box>
      </Center>
    </div>
  );
};

export default Home;
