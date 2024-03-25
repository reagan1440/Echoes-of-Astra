import astra from "../../assets/images/Cosmog.png";
import lbubble from "../../assets/images/Lbubble.png";
import mbubble from "../../assets/images/Mbubble.png";
import rbubble from "../../assets/images/Rbubble.png";
import { Box, Center, Image } from "@chakra-ui/react";
import "./Home.css";

// Routing to other pages
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="thoughtBubbles" style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/dreamJournal">
          <div className="bubble-container">
            <Image src={rbubble} boxSize="95%" alt="rbubble" className="rbubble" />
            <p>Dream Journal</p>
          </div>
        </Link>
        <Link to="/dreamInterpretation">
          <div className="bubble-container">
            <Image src={mbubble} boxSize="95%" alt="mbubble" className="mbubble" />
            <p>Dream Interpretation</p>
          </div>
        </Link>
        <Link to="/dreamDictionary">
          <div className="bubble-container">
            <Image src={lbubble} boxSize="95%" alt="lbubble" className="lbubble" />
            <p>Dream Dictionary</p>
          </div>
        </Link>
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


