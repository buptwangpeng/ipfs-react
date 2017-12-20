pragma solidity ^0.4.18;

contract StudyData {

    address Controller;
    address Owner;

    struct Manager {
    uint ManagerID;
    address ManagerAddr;
    }
    mapping (uint => Manager) managers;                 //ManagerID => Manager
    uint[] ManagerList;                                 //storage ManagerID

    struct Course {
    uint CourseID;
    string CourseName;
    uint RequiredTime;
    uint[] Advanced;
    uint[] Percentage;
    bool Compulsory;
    }
    mapping (uint => Course) courses;           //CourseID => Course
    uint[] CourseList;

    enum LearningProgress {
    NotStart, Start, PreviewStart, PreviewEnd, Test, NotPass, Pass
    }

    struct Stu_Courses {
    uint CourseID;
    //string CourseName;
    uint StartTime;
    uint PreviewTime;
    //bool Compulsory;
    uint[] TestGrade;
    uint CourseGrade;
    LearningProgress Lp;
    }

    struct Student {
    uint StudentID;
    string StudentName;
    uint StudentClass;
    string LoginKey;
    string UnlockKey;
    address StudentAddr;
    mapping (uint => Stu_Courses) stu_courses;       //CourseID => Course
    }
    mapping (uint => uint[]) stu_course_id;     //StudentID => CourseID[]
    mapping (uint => Student) students;      //StudentID => Student
    uint[] StudentList;

    mapping (uint => uint[]) class_stu;             //StudentClass => StudentID[]

    mapping (uint => uint[]) course_stu_id;            //CourseID => StudentID[]

    uint[10] dynUintToFixed10;
    uint[] dyn;
    uint[] r;

    uint[] sciRequiredTime;
    uint[] sciAdvanced;
    uint[] sciPercentage;
    bool[] sciCompulsory;

    uint[] scsStudyTime;
    bool[] scsCompulsory;
    uint[] scsTestGrade;
    uint[] scsCourseGrade;
    LearningProgress[] scsLp;

    uint[] cssStudyTime;
    uint[] cssTestGrade;
    uint[] cssCourseGrade;
    LearningProgress[] cssLp;

    uint[] siStudentClass;



    function StudyData () {
        Owner = msg.sender;
    }

    // set the address of controller contract
    function setController (address _Controller) returns (bool) {
        if(msg.sender != Owner)
        return false;
        else {
            Controller = _Controller;
            return true;
        }
    }



    // connect three string
    function strConcat(string _a, string _b, string _c) private view returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory abc = new string(_ba.length + _bb.length + _bc.length);
        bytes memory babc = bytes(abc);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babc[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babc[k++] = _bb[i];
        for (i = 0; i < _bc.length; i++) babc[k++] = _bc[i];
        return string(babc);
    }

    // connect two arrays, separated by 101
    function arrayConcat(uint[] _a, uint[] _c) private view returns(uint[]) {
        r = _a;
        r.push(101);
        for (uint j = 0; j < _c.length; j++) {
            r.push(_c[j]);
        }
        return r;
    }



    // check whether the address belongs to the administrator or not
    function managerAuthority (address _senderAddress) returns (bool) {
        for (uint i = 0; i < ManagerList.length; i++) {
            if(_senderAddress == managers[ManagerList[i]].ManagerAddr){
                return true;
            }
        }
        return false;
    }

    // check whether the address belongs to the controller contract or not
    function controllerAuthority (address _senderAddress) private view returns (bool) {
        if(msg.sender == Controller)
        return true;
        else return false;
    }

    // check whether the address belongs to the student or not
    function studentAuthority (uint _StudentID, address _StudentAddr) returns (bool) {
        return students[_StudentID].StudentAddr == _StudentAddr;
    }

    // check whether the manager address or the managerID is exist or not
    function managerAvailable (uint _ManagerID, address _ManagerAddr) returns (bool) {
        if (controllerAuthority(msg.sender)) {
            for (uint m = 0; m < ManagerList.length; m++) {
                if(ManagerList[m] == _ManagerID || managers[ManagerList[m]].ManagerAddr == _ManagerAddr) {
                    return false;
                }
            }
            return true;
        }
        else return false;
    }

    // check whether the student address is exist or not
    function studentAddrExist (address _StudentAddr) returns (bool) {
        if (controllerAuthority(msg.sender)) {
            for (uint s = 0; s < StudentList.length; s++) {
                if (students[StudentList[s]].StudentAddr == _StudentAddr) {
                    return true;
                }
            }
            return false;
        }
        else return true;
    }

    // check whether the StudentID is exist or not
    function studentIDExist (uint _StudentID) returns (bool) {
        if (controllerAuthority(msg.sender)) {
            for (uint s = 0; s < StudentList.length; s++) {
                if (StudentList[s] == _StudentID) {
                    return true;
                }
            }
            return false;
        }
        else return true;
    }

    // check whether the courseID is exist or not
    function courseIDExist (uint _CourseID) returns (bool) {
        if (controllerAuthority(msg.sender)) {
            for (uint c = 0; c < CourseList.length; c++) {
                if(CourseList[c] == _CourseID)
                return true;
            }
            return false;
        }
        else return true;
    }

    // check whether the student has passed all advanced courses for this course or not
    function courseAdvanced (uint _StudentID, uint _CourseID) returns (bool) {
        if (controllerAuthority(msg.sender)) {
            for (uint h = 0; h < courses[_CourseID].Advanced.length; h++) {
                if (students[_StudentID].stu_courses[courses[_CourseID].Advanced[h]].CourseGrade < 60){
                    return false;
                }
            }
            return true;
        }
        else return false;
    }



    // return student's name, not for controller contract but for manager or student
    function getStudentName (uint _StudentID) returns (string) {
        if(managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender) || controllerAuthority(msg.sender))
        return students[_StudentID].StudentName;
    }

    // return student's class, for controller contract or manager or student
    function getStudentClass (uint _StudentID) returns (uint) {
        if(managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender) || controllerAuthority(msg.sender))
        return students[_StudentID].StudentClass;
    }

    // return student's LoginKey, not for controller contract but for manager or student
    function getStudentLoginKey (uint _StudentID) returns (string) {
        if(managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender))
        return students[_StudentID].LoginKey;
    }

    // return student's address ande UnlockKey, not for controller contract but for manager or student
    function getStudentAddressAndUnlockKey (uint _StudentID) returns (address, string) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender))
        return (students[_StudentID].StudentAddr, students[_StudentID].UnlockKey);
    }

    // return the course information including course name, required time, advanced courses, test grade and compulsory
    function getCourseInfo (uint _CourseID) returns (string, uint, uint[], uint[], bool) {
        return (courses[_CourseID].CourseName, courses[_CourseID].RequiredTime, courses[_CourseID].Advanced, courses[_CourseID].Percentage, courses[_CourseID].Compulsory);
    }

    // return the required time of the course
    function getCourseRequiredTime (uint _CourseID) returns (uint) {
        if (controllerAuthority(msg.sender))
        return courses[_CourseID].RequiredTime;
    }

    // return the number of components of the course performance
    function getCoursePercentageLength (uint _CourseID) returns (uint) {
        if (controllerAuthority(msg.sender))
        return courses[_CourseID].Percentage.length;
    }

    // return the specified component of the course performance
    function getCoursePercentageIndex (uint _CourseID, uint _Index) returns (uint) {
        if (controllerAuthority(msg.sender))
        return courses[_CourseID].Percentage[_Index];
    }

    // return the preview start time of the course
    function getStuCourseStartTime (uint _StudentID, uint _CourseID) returns (uint) {
        if(controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].StartTime;
    }

    // return the preview time of the course
    function getStuCoursePreviewTime (uint _StudentID, uint _CourseID) returns (uint) {
        if (controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].PreviewTime;
    }

    // return the length of test grade array
    function getStuCourseTestGradeLength (uint _StudentID, uint _CourseID) returns (uint) {
        if (controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].TestGrade.length;
    }

    // return the test grade of course
    function getStuCourseTestGrade (uint _StudentID, uint _CourseID) returns (uint[]) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender)) {
            return students[_StudentID].stu_courses[_CourseID].TestGrade;
        }
    }

    // return the specified component of the testgrade
    function getStuCourseTestGradeIndex (uint _StudentID, uint _CourseID, uint _Index) returns (uint) {
        if (controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].TestGrade[_Index];
    }

    // return the course grade
    function getStuCourseCourseGrade (uint _StudentID, uint _CourseID) returns (uint) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender) || controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].CourseGrade;
    }

    // return the progress of course learning
    function getStuCourseLearningProgress (uint _StudentID, uint _CourseID) returns (LearningProgress) {
        if (controllerAuthority(msg.sender))
        return students[_StudentID].stu_courses[_CourseID].Lp;
    }



    function studentCourseSearch(uint _StudentID, uint _CourseID) returns (uint, uint[], uint, LearningProgress) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender))
        for (uint i = 0; i < ManagerList.length; i++)
        if(msg.sender == managers[ManagerList[i]].ManagerAddr || msg.sender == students[_StudentID].StudentAddr)
        return (students[_StudentID].stu_courses[_CourseID].PreviewTime, students[_StudentID].stu_courses[_CourseID].TestGrade, students[_StudentID].stu_courses[_CourseID].CourseGrade, students[_StudentID].stu_courses[_CourseID].Lp);
    }

    function studentCoursesList(uint _StudentID) returns (uint[]) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender)) {
            return stu_course_id[_StudentID];
        }
    }

    function courseStudentList(uint _CourseID) returns (uint[]) {
        if (managerAuthority(msg.sender)) {
            return course_stu_id[_CourseID];
        }
    }

    function studentCoursesSearch(uint _StudentID, uint[] _CoursesIDList) returns (uint[], uint[], uint[], LearningProgress[]) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender)) {
            scsStudyTime.length = 0;
            scsCourseGrade.length = 0;
            scsLp.length = 0;
            for (uint c = 0; c < _CoursesIDList.length; c++) {
                Stu_Courses memory b = students[_StudentID].stu_courses[_CoursesIDList[c]];
                if (c == 0) {
                    scsTestGrade = b.TestGrade;
                }
                else {
                    scsTestGrade = arrayConcat(scsTestGrade, b.TestGrade);
                }
                scsStudyTime.push(b.PreviewTime);
                scsCourseGrade.push(b.CourseGrade);
                scsLp.push(b.Lp);
            }
            return (scsStudyTime, scsTestGrade, scsCourseGrade, scsLp);
        }

    }

    function CoursesInfo(uint _StudentID, uint[] _CoursesIDList) returns (string, uint[], uint[], uint[], bool[]) {
        if (managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender)) {
            sciRequiredTime.length = 0;
            sciAdvanced.length = 0;
            sciPercentage.length = 0;
            sciCompulsory.length = 0;
            string memory sciCourseName;

            for(uint c = 0; c < _CoursesIDList.length; c++) {
                uint _CourseID = _CoursesIDList[c];
                sciRequiredTime.push(courses[_CourseID].RequiredTime);
                string memory cn = courses[_CourseID].CourseName;
                if(c == 0) {
                    sciCourseName = strConcat(cn, "", "");
                    sciAdvanced = courses[_CourseID].Advanced;
                    sciPercentage = courses[_CourseID].Percentage;
                }
                else {
                    sciCourseName = strConcat(sciCourseName, ", ", cn);
                    sciAdvanced = arrayConcat(sciAdvanced, courses[_CourseID].Advanced);
                    sciPercentage = arrayConcat(sciPercentage, courses[_CourseID].Percentage);
                }
                sciCompulsory.push(courses[_CourseID].Compulsory);
            }
            return (sciCourseName, sciRequiredTime, sciAdvanced, sciPercentage, sciCompulsory);
        }
    }

    function courseStudentsSearch(uint[] _StudentsIDList, uint _CourseID) returns (uint[], uint[], uint[], LearningProgress[]) {
        if (managerAuthority(msg.sender)) {
            cssStudyTime.length = 0;
            cssTestGrade.length = 0;
            cssCourseGrade.length = 0;
            cssLp.length = 0;

            for (uint s = 0; s < _StudentsIDList.length; s++) {
                Stu_Courses memory b = students[_StudentsIDList[s]].stu_courses[_CourseID];
                if (s == 0) {
                    cssTestGrade = b.TestGrade;
                }
                else {
                    cssTestGrade = arrayConcat(cssTestGrade, b.TestGrade);
                }
                cssStudyTime.push(b.PreviewTime);
                cssCourseGrade.push(b.CourseGrade);
                cssLp.push(b.Lp);
            }
            return (cssTestGrade, cssStudyTime, cssCourseGrade, cssLp);
        }

    }

    function studentsInfo(uint[] _StudentsIDList) returns(string, uint[]) {
        if (managerAuthority(msg.sender)) {
            siStudentClass.length = 0;
            string memory siStudentName;
            for (uint s = 0; s < _StudentsIDList.length; s++) {
                string memory sn = students[_StudentsIDList[s]].StudentName;
                if (s == 0)
                siStudentName = strConcat(sn, "", "");
                else
                siStudentName = strConcat(siStudentName, ", ", sn);
                siStudentClass.push(students[_StudentsIDList[s]].StudentClass);
            }
            return (siStudentName, siStudentClass);
        }
    }



    // set the student ID and push student ID into student list
    function setStudentID (uint _StudentID) {
        if (controllerAuthority(msg.sender)) {
            students[_StudentID].StudentID = _StudentID;
            StudentList.push(_StudentID);
        }
    }

    // set student's name
    function setStudentName (uint _StudentID, string _StudentName) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].StudentName = _StudentName;
    }

    // set student's class
    function setStudentClass (uint _StudentID, uint _StudentClass) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].StudentClass = _StudentClass;
    }

    // set student's login key
    function setStudentLoginKey (uint _StudentID, string _LoginKey) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].LoginKey = _LoginKey;
    }

    // set student's unlock key
    function setStudentUnLockKey (uint _StudentID, string _UnlockKey) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].UnlockKey = _UnlockKey;
    }

    // set student's address
    function setStudentAddr (uint _StudentID, address _StudentAddr) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].StudentAddr = _StudentAddr;
    }

    // clear the student ID in the class_stu list
    function classClearStudentID (uint _StudentClass, uint _StudentID) {
        if (controllerAuthority(msg.sender))
        for(uint i = 0; i < class_stu[_StudentClass].length; i++)
        if(class_stu[_StudentClass][i] == _StudentID)
        class_stu[_StudentClass][i] = 0;
    }

    // push the student ID into the class_stu list
    function classPushStudentID (uint _StudentClass, uint _StudentID) {
        if (controllerAuthority(msg.sender))
        class_stu[_StudentClass].push(_StudentID);
    }

    // set course ID and push course ID into course list
    function setCourseID (uint _CourseID) {
        if (controllerAuthority(msg.sender)) {
            courses[_CourseID].CourseID = _CourseID;
            CourseList.push(_CourseID);
        }
    }

    // set course name
    function setCourseName (uint _CourseID, string _CourseName) {
        if (controllerAuthority(msg.sender))
        courses[_CourseID].CourseName = _CourseName;
    }

    // set preview time for the course
    function setCourseRequiredTime (uint _CourseID, uint _RequiredTime) {
        if (controllerAuthority(msg.sender))
        courses[_CourseID].RequiredTime = _RequiredTime;
    }

    // set advanced courses for the course
    function setCourseAdvanced (uint _CourseID, uint[] _Advanced) {
        if (controllerAuthority(msg.sender))
        courses[_CourseID].Advanced = _Advanced;
    }

    // set components of the course performance
    function setCoursePercentage (uint _CourseID, uint[] _Percentage) {
        if (controllerAuthority(msg.sender))
        courses[_CourseID].Percentage = _Percentage;
    }

    // set the course as compulsory or optional
    function setCourseCompulsory (uint _CourseID, bool _Compulsory) {
        if (controllerAuthority(msg.sender))
        courses[_CourseID].Compulsory = _Compulsory;
    }

    // set course ID for student who choose this course
    function setStuCourseID (uint _StudentID, uint _CourseID, uint _C) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].CourseID = _C;
    }

    // push course ID into stu_courses_id list
    function stuCourseIDPush (uint _StudentID, uint _CourseID) {
        if (controllerAuthority(msg.sender))
        stu_course_id[_StudentID].push(_CourseID);
    }

    // clear the courseID in the stu_course_id list
    function stuCourseIDClear (uint _StudentID, uint _CourseID) {
        if (controllerAuthority(msg.sender))
        for (uint sc = 0; sc < stu_course_id[_StudentID].length; sc++)
        if (stu_course_id[_StudentID][sc] == _CourseID)
        stu_course_id[_StudentID][sc] = 0;
    }

    // push student ID into course_stu_id list
    function courseStuIDPush (uint _StudentID, uint _CourseID) {
        if (controllerAuthority(msg.sender))
        course_stu_id[_CourseID].push(_StudentID);
    }

    // clear the student ID in the course_stu_id list
    function courseStuIDClear (uint _StudentID, uint _CourseID) {
        if (controllerAuthority(msg.sender))
        for (uint sc = 0; sc < stu_course_id[_StudentID].length; sc++)
        if (course_stu_id[_CourseID][sc] == _StudentID)
        course_stu_id[_CourseID][sc] = 0;
    }

    // set the start time for preview
    function setStuCourseStartTime (uint _StudentID, uint _CourseID, uint _StartTime) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].StartTime = _StartTime;
    }

    // set the time of preview
    function setStuCoursePreviewTime (uint _StudentID, uint _CourseID, uint _PreviewTime) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].PreviewTime = _PreviewTime;
    }

    // set the length of test grade
    function setStuCourseTestGradeLength (uint _StudentID, uint _CourseID, uint _Length) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].TestGrade.length = _Length;
    }

    // set the specified test grade
    function setStuCourseTestGrade (uint _StudentID, uint _CourseID, uint _TestTimes, uint _TestGrade) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].TestGrade[_TestTimes] = _TestGrade;
    }

    // confirm the course grade
    function setStuCourseGrade (uint _StudentID, uint _CourseID, uint _CourseGrade) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].CourseGrade = _CourseGrade;
    }

    // set learning progress
    function setStuCourseLearningProgress (uint _StudentID, uint _CourseID, LearningProgress _Lp) {
        if (controllerAuthority(msg.sender))
        students[_StudentID].stu_courses[_CourseID].Lp = _Lp;
    }

    // set manager ID and manager's address, push manager ID into manager list
    function dataManagerInsert (uint _ManagerID, address _ManagerAddress) returns (bool){
        if(msg.sender == Controller || (Controller == 0x0 && tx.origin == Owner))
        {
            managers[_ManagerID] = Manager(_ManagerID, _ManagerAddress);
            ManagerList.push(_ManagerID);
            return true;
        }
        else return false;

    }

}
