import { useState } from "react";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  return (
    <>
      <div className="pane top-pane">
        <Editor
          editorName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor editorName="CSS" language="css" value={css} onChange={setCss} />
        <Editor
          editorName="JS"
          language="javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
