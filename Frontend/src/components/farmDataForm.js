const FarmDataForm = ({
	handleFarmFormChange,
	handleSubmitFarmForm,
	farmDetails,
}) => {
	return (
		<div className="white-box farm-form-container">
			<div className="component-container">
				<div className="item">
					<h1>Enter farm details</h1>
				</div>
				<div className="item">
					<input
						type="text"
						name="name"
						id="name"
						value={farmDetails.name}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter the farm name"
					/>
				</div>
				<div className="item">
					<input
						type="text"
						name="size"
						id="size"
						value={farmDetails.size}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter size of the farm in acres"
					/>
				</div>
				<div className="item">
					<input
						type="text"
						name="numberOfCows"
						id="numberOfCows"
						value={farmDetails.numberOfCows}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter the number of cows on your farm"
					/>
				</div>
				<div className="item">
					<input
						type="text"
						name="quantityOfMilk"
						id="quantityOfMilk"
						value={farmDetails.quantityOfMilk}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter the number of litres of milk produced"
					/>
				</div>
				<div className="item">
					<input
						type="text"
						name="tractors"
						id="tractors"
						value={farmDetails.tractors}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter the number of diesel tractors"
					/>
				</div>
				<div className="item">
					<input
						type="text"
						name="milkMachines"
						id="milkMachines"
						value={farmDetails.milkMachines}
						onChange={(e) => handleFarmFormChange(e)}
						onBlur={(e) => handleFarmFormChange(e)}
						placeholder="Please enter the number of milk machines"
					/>
				</div>
				<div className="item">
					<button
						type="button"
						onClick={(e) => handleSubmitFarmForm(e)}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default FarmDataForm;
