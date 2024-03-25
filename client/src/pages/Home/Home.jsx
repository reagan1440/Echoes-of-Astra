import astra from "../../assets/images/Cosmog.png";
import lbubble from "../../assets/images/Lbubble.png";
import mbubble from "../../assets/images/Mbubble.png";
import rbubble from "../../assets/images/Rbubble.png";
import { Box, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import "./Home.css";

// Routing to other pages
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <Grid className="flex-row px-2"  templateColumns="repeat(3, 1fr)" gap={100} >
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
      <div className="thoughtBubbles" style={{ display: "flex", justifyContent: "space-around" }}>
        <Image src={rbubble} boxSize="35%" alt="rbubble" className="rbubble" />
        <Image src={mbubble} boxSize="35%" alt="mbubble" className="mbubble" />
        <Image src={lbubble} boxSize="35%" alt="lbubble" className="lbubble" />
      </div>

      <Center color="white" className="genie">
        <Box boxSize="lg">
          <Image className="float" src={astra} alt="Dream Genie" />
        </Box>
        </Center>
    </div>
  );
};

export default Home;

