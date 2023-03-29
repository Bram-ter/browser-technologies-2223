const fetch = require('node-fetch')

const home = (req, res) => {

  const courses = [
    {
        courseName: 'Web App from Scratch',
        teacherName: 'Robert & Joost',
        courseWeeks: 'Week 1 t/m Week 3'
    },
    {
        courseName: 'CSS to the Rescue',
        teacherName: 'Sanne & Vasilis',
        courseWeeks: 'Week 1 t/m Week 3'
    },
    {
        courseName: 'Progressive Web Apps',
        teacherName: 'Janno & Declan',
        courseWeeks: 'Week 5 t/m Week 8'
    },
    {
        courseName: 'Browser Technologies',
        teacherName: 'Vasilis & Peter-Paul',
        courseWeeks: 'Week 5 t/m Week 8"'
    },
    {
        courseName: 'Real-Time Web',
        teacherName: 'Joost & Koop',
        courseWeeks: 'Week 10 t/m Week 13'
    },
    {
        courseName: 'Human-Centered Design',
        teacherName: 'Koop & Vasilis',
        courseWeeks: 'Week 10 t/m Week 13'
    }
  ]

  res.render('pages/index', { courses });
};

const formOutput = (req, res) => {

const studentName = req.body.naam;
const studentNumber = req.body.studentnummer;
const studentEmail = req.body.email;

res.render('pages/form-output', { studentName, studentNumber, studentEmail });
};

module.exports = {
  home,
  formOutput
}