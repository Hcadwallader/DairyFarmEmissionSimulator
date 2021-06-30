const EmissionReport = ({ emissionData }) => (
	<div className="white-box page-container">
		<div className="form-container">
			<h3>Emissions per litre</h3>
			<p>
				Emissions per litre for {emissionData.name}:{' '}
				{emissionData.perLiterOfMilk} kgCO2e
			</p>
		</div>
	</div>
);

export default EmissionReport;
