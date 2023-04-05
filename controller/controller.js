const home = (req, res) => {

  const courses = [
    {
        courseName: 'Web App from Scratch',
        teacherName: 'Robert en Joost',
        courseWeeks: 'Week 1 t/m Week 3'
    },
    {
        courseName: 'CSS to the Rescue',
        teacherName: 'Sanne en Vasilis',
        courseWeeks: 'Week 1 t/m Week 3'
    },
    {
        courseName: 'Progressive Web Apps',
        teacherName: 'Janno en Declan',
        courseWeeks: 'Week 5 t/m Week 8'
    },
    {
        courseName: 'Browser Technologies',
        teacherName: 'Vasilis en Peter-Paul',
        courseWeeks: 'Week 5 t/m Week 8"'
    },
    {
        courseName: 'Real-Time Web',
        teacherName: 'Joost en Koop',
        courseWeeks: 'Week 10 t/m Week 13'
    },
    {
        courseName: 'Human-Centered Design',
        teacherName: 'Koop en Vasilis',
        courseWeeks: 'Week 10 t/m Week 13'
    }
  ]

  res.render('pages/index', { courses });
};

const formOutput = (req, res) => {
  const { name, studentnumber, email, ...rest } = req.body;

  // console.log(rest);

  const courseDetails = rest.teachers.map((teacherName, index) => ({
    courseName: rest.vak[index],
    teacherName,
    courseWeeks: rest.weeks[index],
    teachingMaterial: rest[`teaching_material_${index}`]?.toString() || '',
    explanation: rest[`explanation_${index}`]?.toString() || '',
    understanding: rest[`understanding_${index}`]?.toString() || ''
  }));

  console.log(courseDetails);

  res.render('pages/form-output', { name, studentnumber, email, courseDetails });
};

module.exports = {
  home,
  formOutput
}