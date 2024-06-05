import './Download.css';

const Download = () => {
  return (
    <div className="download-container">
      <div className="download-content">
        <h1>Download app</h1>
        <p>Click the button below to download app.</p>
        <a href="/path/to/your/file.zip" download className="download-button">
          Download
        </a>
      </div>
    </div>
  );
};

export default Download;
