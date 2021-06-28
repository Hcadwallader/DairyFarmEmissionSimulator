import './App.css';
import React from 'react';
import { uploadFarmData } from './services/uploadService';

function App() {
	const onChangeHandler = (e) => {
		uploadFarmData(e.target.files[0]).then((data) => console.log(data));
	};
	return (
		<div>
			<label>Upload Your File </label>
			<input
				type="file"
				className="form-control"
				onChange={(e) => onChangeHandler(e)}
			/>
		</div>
	);
}

export default App;
