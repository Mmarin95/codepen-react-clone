import { useState, useEffect } from "react";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
      </html>
    `);
      return () => clearTimeout(timeout);
    }, 1000);
  }, [html, css, javascript]);

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
          className="code-output"
          title="output"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
