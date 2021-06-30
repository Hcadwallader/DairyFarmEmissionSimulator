import './App.css';
import React, { useState } from 'react';
import { uploadInitialFarmData, addNewFarm } from './services/uploadService';
import Upload from './components/upload';
import FarmDataForm from './components/farmDataForm';
import EmissionReport from './components/EmissionsReport';

const App = () => {
	const [fileUploaded, setFileUploaded] = useState(false);
	const [farmDataAdded, setFarmDataAdded] = useState(false);
	const [farmDetails, setFarmDetails] = useState({
		name: '',
		size: '',
		numberOfCows: '',
		quantityOfMilk: '',
		tractors: '',
		milkMachines: '',
	});
	const [emissionData, setEmissionData] = useState({});

	const onFileUpload = (e) => {
		uploadInitialFarmData(e.target.files[0]).then((data) => {
			console.log(data);
			setFileUploaded(data);
		});
	};

	const handleFarmFormChange = (e) => {
		const { name, value } = e.target;
		setFarmDetails({ ...farmDetails, [name]: value });
	};

	const handleSubmitFarmForm = (e) => {
		addNewFarm(farmDetails).then((data) => {
			setFarmDataAdded(data.perLiterOfMilk);
			setEmissionData(data);
		});
		//setFarmDataAdded(true);
	};

	return (
		<>
			{!fileUploaded && <Upload onFileUpload={onFileUpload} />}
			{fileUploaded && !farmDataAdded && (
				<FarmDataForm
					handleFarmFormChange={handleFarmFormChange}
					handleSubmitFarmForm={handleSubmitFarmForm}
					farmDetails={farmDetails}
				/>
			)}
			{fileUploaded && farmDataAdded && (
				<EmissionReport emissionData={emissionData} />
			)}
		</>
	);
};

export default App;
