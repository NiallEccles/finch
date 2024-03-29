const useSaveFile = () => {
  async function saveFile() {
    // Open file picker and destructure the result the first handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write(imgBlob);

    // close the file and write the contents to disk.
    await writableStream.close();
  }
  return saveFile;
};

export default useSaveFile;