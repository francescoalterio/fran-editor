import React, { useState, useEffect } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";
import Console from "./components/Console";
import { newConsoleLog } from "./utils/newConsoleLog";

import draculaData from "monaco-themes/themes/Dracula.json";

function App() {
  const [code, setCode] = useState("");
  const monaco = useMonaco();

  const handleWriteCode = (value) => {
    setCode(value);
  };

  console.log = newConsoleLog;

  useEffect(() => {
    monaco?.editor.defineTheme("dracula", draculaData);
    monaco?.editor.setTheme("dracula");
  }, [monaco]);

  useEffect(() => {
    const $console = document.getElementById("console");
    $console.innerHTML = "";

    try {
      const userCode = eval(`() => {${code}}`);
      userCode();
    } catch (error) {
      const errorSpan = `<span id="console-error">${error}</span>`;
      const $console = document.getElementById("console");
      $console.innerHTML += `${errorSpan}<br/><br/>`;
    }
  }, [code]);

  return (
    <div style={{ width: "100vw", height: "100%", display: "flex" }}>
      <div>
        <Editor
          height="100vh"
          width="70vw"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleWriteCode}
          options={{
            fontSize: "18px",
          }}
        />
      </div>
      <Console />
    </div>
  );
}

export default App;
