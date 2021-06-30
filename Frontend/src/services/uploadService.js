export const uploadInitialFarmData = async (data) => {
	const formData = new FormData();
	formData.append('file', data);
	let response = await fetch('http://localhost:3001/upload', {
		method: 'POST',
		body: formData,
	});
	return response.json();
};

export const addNewFarm = async (data) => {
	let response = await fetch('http://localhost:3001/farm', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify(data),
	});
	return response.json();
};

// export const getGuestList = async (guestResponse) => {
// 	let authTokenResponse = await fetch(url + 'login', {
// 		headers: { 'Content-Type': 'application/json; charset=utf-8' },
// 		method: 'POST',
// 		body: JSON.stringify({
// 			name: guestResponse.name,
// 			code: guestResponse.accessCode,
// 		}),
// 	});
// 	let suceessfulLogin = await authTokenResponse.status;
// 	if (suceessfulLogin && !authTokenResponse.ok) {
// 		return null;
// 	}
// 	let data = await authTokenResponse.json();
// 	window.localStorage.setItem('token', data.token);
// 	let guestListResponse = await fetch(url + 'group', {
// 		headers: {
// 			Authorization: `Bearer ${data.token}`,
// 		},
// 		credentials: 'include',
// 		method: 'GET',
// 	});

// 	let guests = await guestListResponse.json();

// 	let mappedGuest = MapToGuests(guests);
// 	return mappedGuest;
// };
