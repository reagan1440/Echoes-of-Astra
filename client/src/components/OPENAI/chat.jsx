import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_DREAM } from "../../utils/mutations";
import astra from "../../assets/images/Cosmog.png";
import sbubble from "../../assets/images/speechBubble.png";
import { Link } from "react-router-dom";
import { TbMessageCircleUp } from "react-icons/tb";
import { Image } from "@chakra-ui/react"; // Import Image component

const ChatbotApp = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [saveDream] = useMutation(SAVE_DREAM);
  const loading = false;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Please interpret this dream for me. ${prompt}`,
            },
          ],
          model: "gpt-3.5-turbo",
        }),
      };

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response from AI service.");
      }

      const aiResponse = await response.json();

      const dataObj = {
        usersDream: prompt,
        aiResponse: aiResponse.choices[0].message.content,
      };

      const { data } = await saveDream({
        variables: dataObj,
      });

      console.log(aiResponse);
      setResponse(aiResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Link to="/dreamJournal">
        <div className="speechBubbleContainer">
          <Image
            src={sbubble}
            boxSize="16%"
            alt="lbubble"
            className="speechBubble"
          />
          <p>
            Hi, I'm Astra, <br />
            your dream interpretation AI! <br />
            Click me to view your <br />
            dream journal!!
          </p>
          <Image src={astra} boxSize="20%" alt="genie" className="float" />
        </div>
      </Link>
      <div className="chatbox-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="chatbox-input"
            type="text"
            value={prompt}
            placeholder="Describe your dream..."
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
            className="chatbox-submit"
          >
            <TbMessageCircleUp />
          </button>
        </form>
      </div>
      {response ? (
        <div className="chatbox-response">
          <p>{response?.choices[0].message.content}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatbotApp;
