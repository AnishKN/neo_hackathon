import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DocumentUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle the file drop event
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf', // Specify the accepted file extension, e.g., '.pdf'
    multiple: false, // Allow only one file to be uploaded
  });
  function handleSubmit(e) {
    e.preventDefault();
    //code
    


  }

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Drag and drop a PDF document here, or click to select one</p>
      </div>
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
             <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default DocumentUploader;
