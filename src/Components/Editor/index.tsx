/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as React from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export const Editor = () => {
  const editor = React.useRef<SunEditorCore>();

  // ! The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  return (
    <div>
      <SunEditor
        width="100%"
        height="100%"
        setOptions={{
          buttonList: [
            [
              "undo",
              "redo",
              "fontSize",
              "formatBlock",
              "fontColor",
              "bold",
              "italic",
              "underline",
              "strike",
              "link",
              "image"
            ]
          ]
        }}
        placeholder="Please type here..."
        getSunEditorInstance={getSunEditorInstance}
      />
    </div>
  );
};
