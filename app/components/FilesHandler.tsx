import React from "react";
import DroppedFile from "./DroppeddFile";

type FilesHandlerProps = {
  label: string;
  name: string;
  multiple: boolean;
};

const FilesHandler = ({ label, name, multiple }: FilesHandlerProps) => {
  const [files, setFiles] = React.useState<File[]>([]);

  function dragOverHandler(ev: React.DragEvent<HTMLDivElement>) {
    console.log("File(s) in drop zone");
    ev.currentTarget.style.background = "lightblue";
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function dragLeaveHandler(ev: React.DragEvent<HTMLDivElement>) {
    ev.currentTarget.style.background = "white";
  }

  function dropHandler(event: React.DragEvent<HTMLDivElement>) {
    console.log("File(s) dropped", event);
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      setFiles([...event.dataTransfer.files]);

      const objectUrl = URL.createObjectURL(event.dataTransfer.files[0]);
      const img = document.createElement("img");
      img.src = objectUrl;
      img.height = 60;
      document.body.append(img);
      img.onload = function () {
        URL.revokeObjectURL(img.src);
      };
    }
  }

  return (
    <div>
      <div
        id="dropZone"
        className="border-dashed border-sky-600 border-2 p-4 flex items-center flex-col gap-2"
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
      >
        {files.length === 0 && <p>Drag one or more files to this Drop Zone</p>}
        {files.map((file) => {
          return <DroppedFile key={file.name} file={file} />;
        })}
        {/* <label className="block" htmlFor={name}>
          {label}
        </label>
        <input
          multiple={multiple}
          type="file"
          className=""
          id={name}
          name={name}
        />*/}
      </div>
    </div>
  );
};

export default FilesHandler;
