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
		const uploadSuccess = uploadInitialFarmData(e.target.files[0]).then(
			(data) => console.log(data)
		);
		setFileUploaded(uploadSuccess);
	};

	const handleFarmFormChange = (e) => {
		const { name, value } = e.target;
		setFarmDetails({ ...farmDetails, [name]: value });
	};

	const handleSubmitFarmForm = (e, farmDetails) => {
		const emissionsResponse = addNewFarm(farmDetails);
		setFarmDataAdded(true);
		// setFarmDataAdded(emissionsResponse.ok);
		// setEmissionData(emissionsResponse.data);
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
