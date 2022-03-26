import * as React from "react";

type DroppedFileProps = {
  file: File;
};

function formatSizeUnits(bytes: number) {
  if (bytes >= 1073741824) {
    return (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    return bytes + " bytes";
  } else if (bytes == 1) {
    return bytes + " byte";
  } else {
    return "0 bytes";
  }
}

const DroppedFile = ({ file }: DroppedFileProps) => {
  return (
    <div className="border border-black border-solid flex items-center flex-col bg-white justify-center w-full">
      <div>{file.name}</div>
      <div>{formatSizeUnits(file.size)}</div>
    </div>
  );
};

export default DroppedFile;
