function courseSubmissions(courseId, assignmentId) {
  var courseId = '';
  var assignmentId = '';
  var submissions = Classroom.Courses.CourseWork.StudentSubmissions.list(
    courseId,
    assignmentId
  ).studentSubmissions;
  var reponse = Classroom.Courses.Students.list(courseId)
  var students = reponse.students
  var names = [];
  for(var i = 0; i < students.length; i++){
    names.push(students[i].profile.name.fullName)
  }

   if (submissions && submissions.length > 0) {
    Logger.log('Student Submissions for Assignment: ' + assignment.title);

    for (let i = 0; i < submissions.length; i++) {
      var submission = submissions[i];
      var student = Classroom.Courses.Students.get(courseId, submission.userId);
      Logger.log('Student Name: ' + student.profile.name.fullName);
      Logger.log('Submission Time: ' + submission.updateTime);
    }
    var submissionNames = [];
    for (let i = 0; i < names.length; i++) {
      submissionNames.push(submission[i].profile.name.fullName)
    }
      Logger.log('Missing Student Submissions');
     for (let i = 0; i < names.length; i++) {
      if (!submissionNames.includes(names[i])){
      Logger.log('Student Name: ' + names[i]);
      }
    }
  } else {
    Logger.log('No student submissions found for this assignment.');
  }
}
