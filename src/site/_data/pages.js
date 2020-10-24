const fetchData = require("../helpers/fetchData.js");

const endPoint = "https://thecurrentla.com/wp-json/wp/v2/pages?per_page=10";

module.exports = async function fetchPages() {
	return fetchData("pages", endPoint);
};
