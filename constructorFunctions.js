/**
 * Define the Course and Assignment concepts using the constructor functions
 */

//Constructor function for assignment
function Assignment(title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
    //nested function to print out assignment
    this.printAssignment = function(){
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }

}

// constructor function for Course
function Course(courseName, instructor, creditHours, assignments){
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments || [];// empty list if assignments is undefined
    // nested function to print out course info
    this.courseInfo = function(){
        console.log(
            'Course: ' + this.courseName + 
            ' | Instructor: ' + this.instructor + 
            ' | Credit Hours: ' + this.creditHours
        );
        console.log('Assignments >>>');
        for (let a of this.assignments)
            a.printAssignment();
    }
}

// create the objects using the constructor functions
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

let c1 = new Course(
    'Software Engineering',
    'Dr. Pepper',
    3,
    [a1, a2]
);

let c2 = new Course(
    'Data Science',
    'Dr. Evil',
    6,
    [a3, a4]
);

c1.courseInfo();
c2.courseInfo();

