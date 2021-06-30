const Upload = ({ onFileUpload }) => (
	<div className="white-box page-container">
		<div className="component-container">
			<label>Upload Your File </label>
			<input
				type="file"
				className="form-control"
				onChange={(e) => onFileUpload(e)}
			/>
		</div>
	</div>
);

export default Upload;
