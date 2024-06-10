import { useState, useEffect, useRef } from 'react';

export default function SpeechToText({ continuous, onUpdateTranscript }) {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const interimTranscript = useRef("");

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            console.error("Web speech is not supported on this browser.");
            return;
        }

        recognitionRef.current = new window.webkitSpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.continuous = continuous || false;

        recognition.onresult = (event) => {
            let finalTranscript = "";
            let interim = "";
            for (let i = 0; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            onUpdateTranscript(finalTranscript); // Update the transcript externally
            interimTranscript.current = interim;
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition error:", event.error);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        return () => {
            recognition.stop();
        };

    }, [continuous, onUpdateTranscript]);

    const startListening = () => {
        if (recognitionRef.current && !isListening) {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const stopListening = () => {
        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    };

    return {
        isListening,
        transcript: interimTranscript.current,
        startListening,
        stopListening,
    };
}
