const express = require('express');
const router = express.Router();
const { executeStoredProcedure, queryView } = require('../controllers/storeProc_Views');
const sql_queries = require('../controllers/sql_queries');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/get_companies_by_industry-s-p', async (req, res) => {
    const query = req.body.query;
    console.log(query);
    const results = await executeStoredProcedure('get_companies_by_industry', [query]);
    console.log(results);
    
    res.render('results', { results });
});

// router.get('/analyze_growth_trends-s-p', async (req, res) => {
//     const query = req.body.query;
//     console.log(query);
//     const results = await executeStoredProcedure('analyze_growth_trends', [query]);
//     res.render('results', { results });
// });

router.post('/get_company_info_by_name-s-p', async (req, res) => {
    const query = req.body.query;
    console.log(query);
    const results = await executeStoredProcedure('get_company_info_by_name', [query]);
    console.log(results);
    
    res.render('results', { results });
});

// router.post('/get_top_companies-s-p', async (req, res) => {
//     const query = req.body.query;
//     console.log(query);
//     const results = await executeStoredProcedure('get_top_companies', [query]);
//     res.render('results', { results });
// });

router.get('/top-companies-view', async (req, res) => {
    const results = await queryView('top_companies_by_revenue');
    res.render('results', { results });
});

router.get('/high-growth-companies-view', async (req, res) => {
    const results = await queryView('high_growth_companies');
    res.render('results', { results });
});

router.get('/company-names', async(req,res)=>{
    const cname = await sql_queries.getCompanyNames();
    // console.log(carousel);
    
    res.send(cname)
});

router.get('/industry-names', async(req,res)=>{
    const iname = await sql_queries.getIndustryNames();
    // console.log(carousel);
    
    res.send(iname)
});



module.exports = router;

