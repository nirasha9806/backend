const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();

var fileUpload = require('express-fileupload');
const conferenceRoute=require('./routes/conference-route');
const researcherRoute = require('./routes/researcher-route');
const attendeeRoute = require('./routes/attendee-route');
const workshopRoute = require('./routes/workshopPresenter-route');
const accountRoute = require('./routes/research-payment-route');
const viewconferenceRoute = require('./routes/viewconferencedetails-route');
const attendeePaymentRoute = require('./routes/payment-route');
const workshopProposalRoute = require('./routes/workshopProposal-route');
const researchPaperRoute = require('./routes/researchPaper-route');
const ApprovedResearcherRoute = require('./routes/approvedResearches-route');
const ApprovedProposalsRoute = require('./routes/approvedProposals-route');
const FileRoutes = require('./routes/fileUpload-route');
const loginRoute =  require('./routes/login-route');

require('dotenv').config();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//sanduni
// conference route
app.use('/conference',conferenceRoute);
app.use('/template', FileRoutes);
app.use('/uploads', express.static('uploads'));


//kaveena
app.use('/api/payment',attendeePaymentRoute);
app.use('/api/workshopProposal',workshopProposalRoute);
app.use('/api/researchPaper',researchPaperRoute);
app.use('/api/ApprovedResearcher',ApprovedResearcherRoute);
app.use('/api/ApprovedProposals',ApprovedProposalsRoute);

//nethmi
app.use('/api/account', accountRoute);
app.use('/api/retrieve', viewconferenceRoute);
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/approved-conferencedetails-route'));
app.use('/api/viewapprovedresearchpaper', require('./routes/viewresearchpaper-route'));
app.use('/api/viewapprovedproposal', require('./routes/viewproposal-route'));


//nirasha
app.use('/api/researcher', researcherRoute);
app.use('/api/workshop', workshopRoute);
app.use('/api/attendee', attendeeRoute);
app.use('/api/login', loginRoute);


//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db, {
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
      })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));