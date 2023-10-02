function getData() {
  const arguments = {
    teacherId: 'me',
    courseStates: 'ACTIVE'
  };
  const response = Classroom.Courses.list(arguments);
  const course = response.courses
  for(let i = 0; i < course.length; i++){
    let courseName = course[i].name
    let courseId = course[i].id
    console.log("Name:"+ courseName, "Id:"+ courseId)
  }

}
