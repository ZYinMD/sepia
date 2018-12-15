const fs = require('fs');
const path = require('path');
const json = require('comment-json');

function buildRules() {
	const rulesDir = path.join(__dirname, '../syntax-highlighting-rules');
	const ruleFiles = fs.readdirSync(rulesDir);
	return ruleFiles.reduce((accumulator, fileName) => {
		const filePath = path.join(rulesDir, fileName);
		const rule = json.parse(fs.readFileSync(filePath, 'utf8'), null, true); // strip comments
		accumulator = accumulator.concat(rule);
		return accumulator;
	}, [])
}

module.exports = buildRules;
