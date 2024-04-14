import React from "react";

import "./fileInput.css";

export default function FileInput({
  onChange,
  className = "",
  accept = "",
  selectedFile,
}) {
  const onFileChange = async (file) => {
    const fileRefs = file.target.files;
    const allFileReader = await Promise.all(
      Object.values(fileRefs).map(fileDataConvertToText)
    );
    onChange?.(allFileReader);
  };

  return (
    <>
      <div className={`file-upload ${className}`}>
        <label>
          <div>
            <img
              src="https://static.thenounproject.com/png/3546661-200.png"
              height="60"
              width="60"
              alt=""
            />
          </div>
          {selectedFile ? selectedFile : "Drag and drop or browse your files"}
          {onChange && (
            <input
              type="file"
              accept={accept}
              className="file-input"
              onChange={onFileChange}
            />
          )}
        </label>
      </div>
    </>
  );
}

function fileDataConvertToText(file) {
  const { type: fileType, name: fileName } = file;
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onloadend = ({ target: { result: fileData } }) => {
      res({ fileName, fileType, fileData });
    };
    reader.readAsText(file);
  });
}
