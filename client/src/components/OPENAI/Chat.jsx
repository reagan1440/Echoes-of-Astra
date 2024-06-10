import { useState, useEffect } from "react";
import SpeechToText from "../SpeechToText";
import { useMutation } from "@apollo/client";
import { SAVE_DREAM } from "../../utils/mutations";
import auth from "../../utils/auth";
import astra from "../../assets/images/cosmog.png";
import sbubble from "../../assets/images/speechBubble.png";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";
import { MdKeyboardVoice, MdSettingsVoice } from "react-icons/md";
import { Image } from "@chakra-ui/react";

const ChatbotApp = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [saveDream] = useMutation(SAVE_DREAM);
  const [loading, setLoading] = useState(false);
  const [prevTranscript, setPrevTranscript] = useState("");


  const { isListening, transcript, startListening, stopListening } =
    SpeechToText({ continuous: true, onUpdateTranscript: setPrompt });

  const startStopListening = () => {
    if (isListening) {
      setPrompt(prev => prev.trim()); // Clear prompt when starting speech-to-text
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
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
      // Perform interpretation regardless of authentication status
      console.log("Interpreted dream:", aiResponse.choices[0].message.content);
      setResponse(aiResponse);
      setLoading(false);

      // If user is logged in, save dream to journal
      if (auth.loggedIn) {
        try {
          const dataObj = {
            usersDream: prompt,
            aiResponse: aiResponse.choices[0].message.content,
          };

          const { data } = await saveDream({
            variables: dataObj,
          });

          console.log("Dream saved:", data);
        } catch (error) {
          console.error("Error saving dream:", error);
        }
      }
    } catch (error) {
      console.error("Error interpreting dream:", error);
    }
  };

    
useEffect(() => {

  console.log("Transcript:", transcript);
  console.log("Is Listening:", isListening);
  console.log("Previous Transcript:", prevTranscript);


  if (isListening && transcript && transcript !== prevTranscript) {
    setPrompt(prev => prev.trim() + (prev.trim() ? " " : "") + transcript.trim());
    setPrevTranscript(transcript); // Update previous transcript
  }
}, [transcript, isListening, prevTranscript]);

  return (
    <>
      <Link to="/dreamJournal">
        <div className="speechBubbleContainer">
          <Image
            src={sbubble}
            boxSize="16%"
            alt="speechbubble"
            className="speechBubble"
          />

          <p>
            {auth.loggedIn() ? (
              <>
                Hey, it's me, Astra, <br />
                your dream interpreter <br />
                extraordinaire. Click on me <br />
                to view your saved dreams! <br />
              </>
            ) : (
              <>
                Hi, I'm Astra!!! <br />
                Your dream interpreter
                <br />
                extraordinaire. Want to save <br />
                your dreams? Click on me! <br />
              </>
            )}
          </p>
          <Image
            src={astra}
            boxSize="20%"
            alt="genie"
            className="float"
            height={{ base: "100%", sm: "50%" }}
          />
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
            {loading ? <div className="loader-icon"> <BiLoaderCircle /> </div>  : <FiArrowUp />}
          </button>
          <button
            disabled={loading}
            type="button"
            className="chatbox-speech"
            onClick={startStopListening}
          >
            {isListening ? <MdSettingsVoice /> : <MdKeyboardVoice />}
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
