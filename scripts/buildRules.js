const fs = require('fs');
const path = require('path');

function buildRules(themeName) {
	const rulesDir = path.join(__dirname, '../syntax-highlighting-rules', themeName);
	const ruleFiles = fs.readdirSync(rulesDir);
	return ruleFiles.reduce((accumulator, fileName) => {
		const filePath = path.join(rulesDir, fileName);
		accumulator = accumulator.concat(JSON.parse(fs.readFileSync(filePath, 'utf8')));
		return accumulator;
	}, [])
}

module.exports = buildRules;
