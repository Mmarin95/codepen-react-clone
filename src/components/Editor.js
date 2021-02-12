import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const [open, setOpen] = useState(true);

  const { editorName, value, language, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapse"}`}>
      <div className="editor-title">
        {editorName}
        <button
          className="expand-collapse-btn"
          type="button"
          onClick={() => setOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          mode: language,
          theme: "material",
        }}
      />
    </div>
  );
}
