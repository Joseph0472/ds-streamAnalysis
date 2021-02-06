import express from 'express';
import addTodoRoutes from './todos';
import addEventRoutes from './events';
import { PythonShell } from 'python-shell';
import { Company } from '../../models/schema'
const router = express.Router();
// addTodoRoutes(router);
// addEventRoutes(router);

//Restful Api
//Getting all
//TODO: directory issue in python DONE
router.get('/company/', async (req, res) => {
    try {
        const companies = await Company.find()
        res.json(companies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

//Getting one
router.get('/company/:id', getCompany, (req, res) => {
    res.json(res.company)
})

//Creating one
router.post('/company/', async (req, res) => {
    //TODO: Add a loop to insert an array one by one
    const company = new Company({
        companyName: req.body.companyName,
        cPersonName: req.body.cPersonName,
        email: req.body.email,
        ifActive: req.body.ifActive,
        listName: req.body.listName,
        sdate: req.body.sdate,
        edate: req.body.edate,
        interest1: req.body.interest1,
        interest2: req.body.interest2,
        interest3: req.body.interest3
    })
    try {
        const newCompany = await company.save()
        res.status(201).json(newCompany)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/company/:id', getCompany, async (req, res) => {
    const {companyName, cPersonName, email, ifActive, listName, sdate, edate, interest1, interest2, interest3 } = req.body
    try {
        if (companyName) res.company.companyName = companyName;
        if (cPersonName) res.company.cPersonName = cPersonName;
        if (email) res.company.email = email;
        if (ifActive) res.company.ifActive = ifActive;
        if (listName) res.company.listName = listName;
        if (sdate) res.company.sdate = sdate;
        if (edate) res.company.edate = edate;
        if (interest1) res.company.interest1 = interest1;
        if (interest2) res.company.interest2 = interest2;
        if (interest3) res.company.interest3 = interest3;
        const upcom = await res.company.save()
        res.json(upcom)
    } catch(err) {
        res.status(400).json({ message: err.message})
    }
})

//Deleting one
router.delete('/company/:id', getCompany, async (req, res) => {
    try {
        await res.company.remove()
        res.json({ message: 'Company Deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// //Connect to Py script
// const {spawn} = require('child_process');
// const childPy = spawn('python', ['D:\\CodeStuff\\InternMainProject\\Forecasting\\mainapp\\server\\api-routes\\hi.py'])

// childPy.stdout.on('data', (data)=> {
//     console.log(`stdout: ${data}`)
// })
// childPy.stderr.on('data', (data)=> {
//     console.log(`stderr: ${data}`)
// })
// childPy.on('close', (code) => {
//     console.log(`child pro exits with code: ${code}`)
// })

// Get a company by id
async function getCompany(req, res, next) {
    let company
    try {
        company = await Company.findById(req.params.id)
        if (company == null) {
            return res.status(404).json({ message: 'Cannot find comnpany' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.company = company
    next()
}

export default router;