const database = require('../database');

const db = database.pool;

module.exports.getIndustryNames = async (req, res) => {
    try {
        const [results] = await db.query('SELECT DISTINCT industry FROM companies_2019');
        
        // Map results to ensure clean response
        // const industries = results.map(row => row.industry).filter(industry => industry);

        return results
    } catch (error) {
        console.error('Error fetching industry names:', error);
    }
};

module.exports.getCompanyNames = async (req, res) => {
    try {
        const [results] = await db.query('SELECT DISTINCT name FROM companies_2019');
        
        // Map results to ensure clean response
        // const industries = results.map(row => row.industry).filter(industry => industry);

        return results
    } catch (error) {
        console.error('Error fetching industry names:', error);
    }
};
