import React from 'react';
import Papa from 'papaparse';

const FileUploader = ({ setData }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
        <span className="text-blue-500 font-medium">Click to upload CSV</span>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUploader;
