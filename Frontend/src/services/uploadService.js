export const uploadInitialFarmData = async (data) => {
	const formData = new FormData();
	formData.append('file', data);
	let response = await fetch('http://localhost:3001/upload', {
		method: 'POST',
		body: formData,
	});
	return response.ok;
};

export const addNewFarm = async (data) => {
	let response = await fetch('http://localhost:3001/farm', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify(data),
	});
	return response.json();
};
