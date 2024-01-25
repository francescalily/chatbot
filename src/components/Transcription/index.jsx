import React, { useRef, useEffect, useState } from "react";
import axios from "axios";


const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const model = "whisper-1";
console.log(`API Key: ${apiKey}`);

const Whisper = () => {
  const inputRef = useRef();
  const [file, setFile] = useState();
  const [response, setResponse] = useState(null);
  const [showText, setShowText] = useState(true)

  const onChangeFile = () => {
    setFile(inputRef.current.files[0]);
    setShowText(false);
  };

  useEffect(() => {
    const fetchAudioFile = async () => {
      if (!file) {
        return;
      }
      const formData = new FormData();
      formData.append("model", model);
      formData.append("file", file);

      axios
        .post("https://api.openai.com/v1/audio/transcriptions", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${apiKey}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setResponse(res.data);
        })
        .catch((error) => {
       console.log(error)
        });
    };
    fetchAudioFile();
  }, [file]);
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      Whisper
      <input
        type="file"
        ref={inputRef}
        accept=".mp3"
        onChange={onChangeFile}
        style={{ display: "block", marginTop: "20px" }}
      />
      {response && <div>{JSON.stringify(response, null, 2)}</div>}
      <p onClick={() => setShowText(!showText)}>{showText ? 'Your transcript will come here!' : '' }</p> 
      
    </div>
  );
};

export default Whisper;
