import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_DREAM } from "../../utils/mutations";
import { TbMessageCircleUp } from "react-icons/tb";

const ChatbotApp = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [saveDream] = useMutation(SAVE_DREAM);
  const loading = false;

  const handleSubmit = async (event) => {
    event.preventDefault();

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
  };
  
  return (
    <>
      <div className="chatbox-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="chatbox-input"
            type="text"
            value={prompt}
            placeholder="Describe your dream..."
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button disabled={loading || prompt.length === 0} type="submit" className="chatbox-submit">
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

