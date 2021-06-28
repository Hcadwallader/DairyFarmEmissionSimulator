export const uploadFarmData = async (data) => {
	const formData = new FormData();
	formData.append('file', data);
	let response = await fetch('http://localhost:3001/upload', {
		method: 'POST',
		body: formData,
	});
	return response.json();
};
