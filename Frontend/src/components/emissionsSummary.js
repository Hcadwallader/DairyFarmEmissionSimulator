const EmissionsSummary = ({ emissionData }) => (
	<div className="white-box page-container">
		<div className="component-container">
			<h3>Emissions for {emissionData.name} </h3>
			<p>Diesel: {emissionData.scope1} kgCO2e </p>
			<p>Electricity: {emissionData.scope2} kgCO2e</p>
			<p>Food: {emissionData.scope3} kgCO2e</p>
			<p>
				Total emissions:{' '}
				{parseInt(emissionData.totalEmissions).toFixed(2)} kgCO2e
			</p>
			<p>
				Emissions per litre of milk: {emissionData.perLitreOfMilk}{' '}
				kgCO2e/litre
			</p>
		</div>
	</div>
);

export default EmissionsSummary;
