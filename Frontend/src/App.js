import './App.css';
import React, { useState } from 'react';
import { uploadInitialFarmData, addNewFarm } from './services/uploadService';
import Upload from './components/upload';
import FarmDataForm from './components/farmDataForm';

const App = () => {
	const [farmDetails, setFarmDetails] = useState({
		name: '',
		size: '',
		numberOfCows: '',
		quatityOfMilk: '',
		tractors: '',
		milkMachines: '',
	});

	const onFileUpload = (e) => {
		uploadInitialFarmData(e.target.files[0]).then((data) =>
			console.log(data)
		);
	};

	const handleFarmFormChange = (e) => {
		const { name, value } = e.target;
		setFarmDetails({ ...farmDetails, [name]: value });
	};

	const handleSubmitFarmForm = (e, farmDetails) => {
		addNewFarm(farmDetails);
	};

	return (
		<>
			<Upload onFileUpload={onFileUpload} />
			<FarmDataForm
				handleFarmFormChange={handleFarmFormChange}
				handleSubmitFarmForm={handleSubmitFarmForm}
				farmDetails={farmDetails}
			/>
		</>
	);
};

export default App;
