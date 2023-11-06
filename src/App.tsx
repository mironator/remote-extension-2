import * as SDK from "azure-devops-extension-sdk";
import React, { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    try {
      SDK.init()
        .then(() => {
          console.log("SDK Initialized");
          setName(SDK.getUser().name);
          setDisplayName(SDK.getUser().displayName);
        })
        .catch(async (e) => {
          console.log("Failed to initialize:", e);
        });
    } catch (e) {
      console.log("Error:", e);
    }
  }, []);

  return (
    <div>
      <div className="App">Hello</div>
      <div className="App">{displayName}</div>
      <div className="App">{name}</div>
    </div>
  );
};

export default App;
