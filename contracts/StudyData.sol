pragma solidity ^0.4.18;

contract StudyData {

/* Codes about Authority and Controller */
    address public Controller;
    address public Owner;

    struct Manager {
    uint ManagerID;
    address ManagerAddr;
    }
    mapping (uint => Manager) managers;                 //ManagerID => Manager
    mapping (address => bool) managerTag;
    uint[] ManagerList;                                 //storage ManagerID

/* Things about Data Structure */
    struct Course {
        uint CourseID;
        string CourseName;
        bool Compulsory;  //课程属性，是否必修
        uint Term;  //学期号,筛选课程成绩时使用
        uint Credit;
        uint[] Percentage;  //课程的成绩组成
        uint[] cStuIDs;  //CourseID => StudentID[], 已选该课程的学生号集合
    }
    /* Indexs */
    mapping (uint => Course) public courses;  //CourseID => Course
    uint[] CourseList;

    enum LearningProgress {
        NotStart, Start, PreviewStart, PreviewEnd, Test, NotPass, Pass
    }

    struct Stu_Course {
        uint CourseID;
        uint[] TestGrade;
        uint CourseGrade;
        LearningProgress Lp;
    }

    struct Student {
        uint StudentID;
        string StudentName;
        uint StudentClass;
        address StudentAddr;
        uint[] sCourseIDs;    //StudentID => CourseID[], index of "courses that student takes"
        uint[] sTCourseIDs;  //学生某学期选中的所有课程的的集合
        mapping (uint => Stu_Course) stu_courses;  //CourseID => Course, Coureses that student takes.
    }

    /* Indexs */
    mapping (uint => Student) public students;  //StudentID => Student
    mapping (address => bool) public studentTag;
    uint[] StudentList;

    mapping (uint => uint[]) class_stu;  //StudentClass => StudentID[]

    struct Tch_Course {
        uint CourseID;

    }

    struct Teacher {
        uint TeacherID;
        string TeacherName;
        address TeacherAddr;
        uint[] tCourseIDs;
        mapping (uint => Tch_Course) tch_courses;
    }
    mapping (uint => Teacher) teachers;
    mapping (address => bool) teacherTag;
    uint[] TeacherList;


/* Function Codes */

    function StudyData () public {
        Owner = msg.sender;
        Controller = msg.sender;
        
        //Ser Managers.
        //managers[2001] = Manager(2001, msg.sender);
        //ManagerList.push(2001);
        //managerTag[msg.sender] = true;
        
        //Add test data.
        //uint[] memory uintArr = new uint[](0);
        //Courses Info.
        /*courses[0] = Course(0, "专业课导论", true, 10, 2000, uintArr, uintArr);
        courses[1] = Course(1, "数学分析(上)", true, 10, 6000, uintArr, uintArr);
        courses[2] = Course(2, "线性代数", true, 10, 4000, uintArr, uintArr);
        courses[3] = Course(3, "数学分析(下)", true, 11, 5000, uintArr, uintArr);
        courses[4] = Course(4, "电路分析基础", true, 11, 2000, uintArr, uintArr);
        courses[5] = Course(5, "大学物理", true, 11, 4000, uintArr, uintArr);
        courses[6] = Course(6, "信号与系统", true, 20, 4000, uintArr, uintArr);
        courses[7] = Course(7, "概率论与数理统计", true, 20, 3000, uintArr, uintArr);
        courses[8] = Course(8, "电子电路基础", true, 20, 4000, uintArr, uintArr);
        courses[9] = Course(9, "数据结构与算法", true, 20, 3000, uintArr, uintArr);
        courses[10] = Course(10, "数字信号处理", true, 21, 4000, uintArr, uintArr);
        courses[11] = Course(11, "数字电路与逻辑设计", true, 21, 3000, uintArr, uintArr);
        courses[12] = Course(12, "信息论基础", true, 21, 2000, uintArr, uintArr);
        courses[13] = Course(13, "随机信号分析", true, 21, 3000, uintArr, uintArr);
        courses[14] = Course(14, "工程数学", true, 21, 3000, uintArr, uintArr);
        courses[15] = Course(15, "通信原理", true, 21, 4000, uintArr, uintArr);
        courses[16] = Course(16, "微机原理与接口技术", true, 21, 4000, uintArr, uintArr);
        courses[17] = Course(17, "电磁场与电磁波", true, 21, 3000, uintArr, uintArr);
        courses[18] = Course(18, "数字音视频原理", true, 21, 3000, uintArr, uintArr);*/
        
    }
    /*Student public stu;
    Stu_Course public sc;
    
    function initData_Stu() public {
        //Student Info.
        stu.StudentID = 2015210000; stu.StudentName = "小明";
        for (uint i = 0; i<19; i++) {
            stu.sCourseIDs.push(i);
        }
        students[2015210000] = stu;
        //add another student.
        stu.StudentID = 2015210001; stu.StudentName = "小红";
        students[2015210001] = stu;
    }
    
    function initData_SC() public {
        uint[] memory uintArr = new uint[](0);
        LearningProgress enumtest;
        //Student Info.
        for (uint i = 0; i<19; i++) {
            students[2015210000].stu_courses[i] = Stu_Course(i, uintArr, (60 + i*2)*1000, enumtest);
        }
        for (i = 0; i<19; i++) {
            students[2015210001].stu_courses[i] = Stu_Course(i, uintArr, (60 + i*2 + 1)*1000, enumtest);
        }
    }
    
    function initData_CS() public {
        for(uint i = 0; i < 19; i++) {
           courses[i].cStuIDs.push(2015210000);
           courses[i].cStuIDs.push(2015210001);
        }
    }*/

    // set the address of controller contract
    function setController (address _Controller) onlyOwner public returns(bool) {
        Controller = _Controller;
        return true;
    }
    
    function transferOwnerShip(address _newOwner) onlyOwner public returns(bool) {
        Owner = _newOwner;
        return true;
    }
    
    
    function setOwner(address _newOwner) onlyController public returns(bool) {
        Owner = _newOwner;
        return true;
    }


/* Modifiers */

    modifier onlyOwner {
        if (msg.sender != Owner) revert();
        _;
    }

    modifier onlyController {
        if (msg.sender != Controller) revert();
        _;
    }

    modifier onlyManager {
        if (managerTag[msg.sender] != true) revert();
        _;
    }
    
    modifier onlyManagerAbove {
        if (managerTag[msg.sender] != true && msg.sender != Controller && msg.sender != Owner) revert();
        _;
    }
    
    modifier onlyStudent {
        if (studentTag[msg.sender] != true) revert();
        _;
    }
    
    modifier onlyTeacher {
        if (teacherTag[msg.sender] != true) revert();
        _;
    }
    
    modifier onlyCourseTeacher (uint _TeacherID, uint _CourseID) {
        bool Authenticated = false;
        for (uint i = 0; i < teachers[_TeacherID].tCourseIDs.length; i++) {
            if (teachers[_TeacherID].tCourseIDs[i] == _CourseID) {
                Authenticated = true;
                break;
            }
        }
        if (!Authenticated) revert();
        _;
    }
    
    modifier onlySelfStudent (uint _StudentID) {
        if (studentTag[msg.sender] != true || students[_StudentID].StudentAddr != msg.sender)
            revert();
        _;
    }
    
    modifier onlyUser {
        if (studentTag[msg.sender] != true && managerTag[msg.sender] != true && teacherTag[msg.sender] != true)
            revert();
        _;
    }
    
    modifier only_M_CT_SS (uint _ID, uint _CourseID) {
        bool Authenticated = false;
        // msg.sender is Course Teacher?
        for (uint i = 0; i < teachers[_ID].tCourseIDs.length; i++) {
            if (teachers[_ID].tCourseIDs[i] == _CourseID && teacherTag[msg.sender] == true) {
                Authenticated = true;
                break;
            }
        }
        // msg.sender is Self Student?
        if (studentTag[msg.sender] == true && students[_ID].StudentAddr == msg.sender)
            Authenticated = true;
        // msg.sender is Manager?
        if (managerTag[msg.sender] == true)
            Authenticated = true;
        //Final check.
        if (!Authenticated) revert();
        _;
    }
    
    modifier only_M_T_SS (uint _ID) {
        if (!(studentTag[msg.sender] == true && students[_ID].StudentAddr == msg.sender) && managerTag[msg.sender] != true && teacherTag[msg.sender] != true)
            revert();
        _;
    }



    function getStudentList() public view returns (uint[]) {
        uint[] memory list = StudentList;
        return list;
    }
    
    function getTeacherList() public view returns (uint[]) {
        uint[] memory list = TeacherList;
        return list;
    }
    
    function getManagerList() public view returns (uint[]) {
        uint[] memory list = ManagerList;
        return list;
    }

    function getCourseList() public view returns (uint[]) {
        uint[] memory list = CourseList;
        return list;
    }

/* Functions */

    // check whether the manager address or the managerID is exist or not
    function managerAddrExist (address _ManagerAddr) public view returns (bool) {
        for (uint m = 0; m < ManagerList.length; m++) {
            if(managers[ManagerList[m]].ManagerAddr == _ManagerAddr) {
                return true;
            }
        }
        return false;
    }

    // check whether the student address is exist or not
    function studentAddrExist (address _StudentAddr) public view returns (bool) {
        for (uint s = 0; s < StudentList.length; s++) {
            if (students[StudentList[s]].StudentAddr == _StudentAddr) {
                return true;
            }
        }
        return false;
    }

    // check whether the managerID is exist or not
    function managerIDExist (uint _ManagerID) public view returns (bool) {
        for (uint c = 0; c < ManagerList.length; c++) {
            if(ManagerList[c] == _ManagerID)
            return true;
        }
        return false;
    }

    // check whether the StudentID is exist or not
    function studentIDExist (uint _StudentID) public view returns (bool) {
        for (uint s = 0; s < StudentList.length; s++) {
            if (StudentList[s] == _StudentID) {
                return true;
            }
        }
        return false;
    }

    // check whether the courseID is exist or not
    function courseIDExist (uint _CourseID) public view returns (bool) {
        for (uint c = 0; c < CourseList.length; c++) {
            if(CourseList[c] == _CourseID)
            return true;
        }
        return false;
    }
    
    // check whether the teacherID is exist or not
    function teacherIDExist (uint _TeacherID) public view returns (bool) {
        for (uint c = 0; c < TeacherList.length; c++) {
            if(TeacherList[c] == _TeacherID)
            return true;
        }
        return false;
    }
    
    
/* Add Info functions */
    //set student ID and other info, push student ID into StudentList
    
    event AddStuInfo(bool Success);
    
    function addStuInfo (uint _StudentID, string _StudentName, uint _StudentClass)
    public {
        if (!studentIDExist(_StudentID)) {
            stu_tmp.StudentID = _StudentID;
            stu_tmp.StudentName = _StudentName;
            stu_tmp.StudentClass = _StudentClass;
            students[_StudentID] = stu_tmp;
            StudentList.push(_StudentID);
            AddStuInfo(true);
            return;
        }
        //Fail, already exists.
        revert();
    }
    Student private stu_tmp;
    
    //set teacher ID and other info, push teacher ID into TeacherList
    
    event AddTeacherInfo(bool Success);
    
    function addTchInfo (uint _TeacherID, string _TeacherName) public {
        if (!teacherIDExist(_TeacherID)) {
            tch_tmp.TeacherID = _TeacherID;
            tch_tmp.TeacherName = _TeacherName;
            teachers[_TeacherID] = tch_tmp;
            TeacherList.push(_TeacherID);
            AddTeacherInfo(true);
            return;
        }
        //Fail, already exists.
        revert();
    }
    Teacher public tch_tmp;
    
    //set course basic info.
    
    event AddCourseInfo(bool Success);
    
    function addCourseInfo (uint _CourseID, string _CourseName, bool _Compulsory, uint _Term, uint _Credit, uint[] _Percentage)
    public {
        if (!courseIDExist(_CourseID)) {
            course_tmp.CourseID = _CourseID;
            course_tmp.CourseName = _CourseName;
            course_tmp.Compulsory = _Compulsory;
            course_tmp.Term = _Term;
            course_tmp.Credit = _Credit;
            course_tmp.Percentage = _Percentage;
            courses[_CourseID] = course_tmp;
            CourseList.push(_CourseID);
            AddCourseInfo(true);
            return;
        }
        //Fail, already exists.
        revert();
    }
    Course private course_tmp;
    
    //set manager ID and other info, push manager ID into ManagerList
    
    event AddManagerInfo(bool Success);
    
    function addManagerInfo (uint _ManagerID) public {
        if (!managerIDExist(_ManagerID)) {
            manager_tmp.ManagerID = _ManagerID;
            managers[_ManagerID] = manager_tmp;
            ManagerList.push(_ManagerID);
            AddManagerInfo(true);
            return;
        }
        //Fail, already exists.
        revert();
    }
    Manager private manager_tmp;
    
    
    
/* Set address to registered account */
    // set manager's address, manager info should have been exist.
    function AddStudentAddr (uint _StudentID, address _StudentAddress)
    internal returns (bool) {
        if (studentIDExist(_StudentID)) {
            students[_StudentID].StudentAddr = _StudentAddress;
            studentTag[_StudentAddress] = true;
            return true;
        }
        //student Info not exists.
        revert();
    }

    function AddTeacherAddr (uint _TeacherID, address _TeacherAddress)
    internal returns (bool) {
        if (teacherIDExist(_TeacherID)) {
            teachers[_TeacherID].TeacherAddr = _TeacherAddress;
            teacherTag[_TeacherAddress] = true;
            return true;
        }
        //Fail, teacher Info not exists.
        revert();
    }
    
    function AddManagerAddr (uint _ManagerID, address _ManagerAddress)
    internal returns (bool) {
        if (managerIDExist(_ManagerID)) {
            managers[_ManagerID].ManagerAddr = _ManagerAddress;
            managerTag[_ManagerAddress] = true;
            return true;
        }
        revert();
    }
    
/* After register, user generate a eth address, and record the addresss */

    event AddAccount(bool Success);

    function addAccount (uint _Identity, uint _ID, address _Addr) public {
        bool success;
        if (_Identity == 0) {
            //Students
            success = AddStudentAddr(_ID, _Addr);
        } else if (_Identity == 1) {
            //Teachers
            success = AddTeacherAddr(_ID, _Addr);
        } else if (_Identity == 2) {
            //Managers
            success = AddManagerAddr(_ID, _Addr);
        } else {
            revert();
        }
        AddAccount(true);
    }


    //Calculate student mark.
    function CalcMark(uint _CourseID, uint _StudentID) internal returns(uint mark) {
        uint[] memory grades =  students[_StudentID].stu_courses[_CourseID].TestGrade;
        uint[] memory percents = courses[_CourseID].Percentage;
        uint gradeSum;
        uint percentSum;
        if (grades.length != percents.length) revert();
        for (uint i = 0; i < grades.length; i++) {
            gradeSum += grades[i] * percents[i];
            percentSum += percents[i];
        }
        mark = gradeSum / percentSum;
        students[_StudentID].stu_courses[_CourseID].CourseGrade = mark;
    }
    
    //Teacher set the mark of one student.
    
    event SetStuMark(bool Success);
    
    function setStuMark(uint _TeacherID, uint _CourseID, uint _StudentID, uint[] _Marks)
    public returns(uint){
    //onlyCourseTeacher(_TeacherID,_CourseID) public returns(uint){
        for (uint i = 0; i < students[_StudentID].sCourseIDs.length; i++) {
            if (_CourseID == students[_StudentID].sCourseIDs[i]) {
                students[_StudentID].stu_courses[_CourseID].TestGrade = _Marks;
                uint mark = CalcMark(_CourseID, _StudentID);
                SetStuMark(true);
                return mark;
            }
        }
        //Fail. Stu doesn't take this course.
        SetStuMark(false);
    }



    //How many classes has a student choose.
    function len_sCourseIDs (uint _StudentID) public view returns(uint) {
        return students[_StudentID].sCourseIDs.length;
    }
    
    //How many students a course has.
    function len_cStuIDs (uint _CourseID) public view returns(uint) {
        return courses[_CourseID].cStuIDs.length;
    }
    
    //Student choose Course.
    
    event StuChooseCourse(bool Success);
    
    function stuChooseCourse(uint _CourseID, uint _StudentID)
    public {
        for (uint i = 0; i < courses[_CourseID].cStuIDs.length; i++) {
            if (_StudentID == courses[_CourseID].cStuIDs[i]) {
                StuChooseCourse(true);
                return;
            }
        }
        courses[_CourseID].cStuIDs.push(_StudentID);
        students[_StudentID].sCourseIDs.push(_CourseID);
        students[_StudentID].stu_courses[_CourseID].Lp = LearningProgress.Start;
        StuChooseCourse(true);
    }
    
    // return one course Mark of a student.
    function getStuMark (uint _StudentID, uint _CourseID)
    public view returns(uint) {
        return students[_StudentID].stu_courses[_CourseID].CourseGrade;
    }
    
    function getStuMarks5 (uint _StudentID, uint _Page)
    public view returns (uint[5] Terms, bool[5] Compulsorys, uint[5] Credits, uint[5] Marks) {
        uint len = len_sCourseIDs(_StudentID);  //Number of courses that student takes.
        uint _NumOfLables = 5;
        uint endpoint;  //return how many data.
        uint i = 0;
        uint j = 0;
        if (len/_NumOfLables < _Page) {
            if (len/_NumOfLables + 1 == _Page && _Page != 0) {
                endpoint = len;
            } else {
                revert();
            }
        } else {
            endpoint = _Page*_NumOfLables;
        }
        for (i = _NumOfLables*(_Page-1); i < endpoint; i++) {
            //make a Stu_Course instance, name as sci.
            Stu_Course storage sci = students[_StudentID].stu_courses[i];
            Course storage ci = courses[sci.CourseID];
            (Terms[j],Compulsorys[j],Credits[j],Marks[j]) = (ci.Term,ci.Compulsory,ci.Credit,sci.CourseGrade);
            j++;
        }
        return;
    }
    
    //Filt students' marks by course
    /*function getStuMarksByCourseAll (uint _CourseID)
    public view returns(uint[], uint[]) {
        uint[] memory StuIDs = courses[_CourseID].cStuIDs;
        uint[] memory Marks = new uint[](StuIDs.length);
        for (uint i = 0; i < StuIDs.length; i++)
            Marks[i] = students[StuIDs[i]].stu_courses[_CourseID].CourseGrade;
        return(StuIDs, Marks);
    }*/
    
    function getStuMarksByCourse (uint _CourseID, uint _StudentID)
    public view returns(uint) {
        return students[_StudentID].stu_courses[_CourseID].CourseGrade;
    }
    
    function getStuMarksByCourse10 (uint _CourseID, uint _Page)
    public view returns (uint[10] StuIDs, uint[10] Marks) {
        uint len = len_cStuIDs(_CourseID);  //Number of students that course has.
        uint _NumOfLables = 10;
        uint endpoint;  //return how many data.
        uint i = 0;
        uint j = 0;
        if (len/_NumOfLables < _Page) {
            if (len/_NumOfLables + 1 == _Page && _Page != 0) {
                endpoint = len;
            } else {
                revert();
            }
        } else {
            endpoint = _Page*_NumOfLables;
        }
        for (i = _NumOfLables*(_Page-1); i < endpoint; i++) {
            //make a Stu_Course instance, name as sci.
            Course storage ci = courses[_CourseID];
            Stu_Course storage sci = students[ci.cStuIDs[i]].stu_courses[_CourseID];
            (StuIDs[j],Marks[j]) = (ci.cStuIDs[i],sci.CourseGrade);
            j++;
        }
        return;
    }
    
    /*
    // return Marks of one student
    function getStuMarkOfCourse (uint _StudentID, uint _CourseID) public view returns(string, uint, bool, uint, uint) {
        if(managerAuthority(msg.sender) || studentAuthority(_StudentID, msg.sender) || controllerAuthority(msg.sender)) {
            //make a Stu_Course instance, name as sci.
            Stu_Course storage sci = students[_StudentID].stu_courses[students[_StudentID].sCourseIDs[_index]];
            Course storage ci = courses[sci.CourseID];
            return (ci.CourseName, ci.Term, ci.Compulsory, ci.Credit, sci.CourseGrade);
        }
        else revert();
    }
    */
    
    /*function getStuMarks (uint _StudentID, uint _Term, uint _Page, uint _NumOfLables)
    public view returns (string Names, uint[] Terms, bool[] Compulsorys, uint[] Credits, uint[] Marks) {
        uint len = len_sCourseIDs(_StudentID);  //Number of courses that student takes.
        string memory str;  //temp str for string concat.
        string memory str_tmp;
        //bytes32[4] memory bt32;
        uint i = 0;
        uint j = 0;
        if (_Term == 0) {
            if (len/_NumOfLables < _Page) {
                if (len/_NumOfLables + 1 == _Page) {
                    for (i = _NumOfLables*(_Page-1); i < len; i++) {
                        (str_tmp,Terms[j], Compulsorys[j], Credits[j], Marks[j]) = getStuMark(_StudentID, i);
                        str = strConcat(str, "/", str_tmp);
                        j++;
                    }
                } else {
                    revert();
                }
            } else {
                for (i = _NumOfLables*(_Page-1); i < _Page*_NumOfLables; i++) {
                    (str_tmp,Terms[j], Compulsorys[j], Credits[j], Marks[j]) = getStuMark(_StudentID, i);
                    str = strConcat(str, "/", str_tmp);
                    j++;
                }
                Names = str;
            }
        } else {
            //返回学生某学期所学课程的信息和成绩
        }
        return;
    }*/
    
    
/*
    // check whether the address belongs to the administrator or not
    function managerAuthority (address _senderAddress) public view returns (bool) {
        for (uint i = 0; i < ManagerList.length; i++) {
            if(_senderAddress == managers[ManagerList[i]].ManagerAddr){
                return true;
            }
        }
        return false;
    }

    // check whether the address belongs to the controller contract or not
    function controllerAuthority (address _senderAddress) private view returns (bool) {
        return _senderAddress == Controller;
    }

    // check whether the address belongs to the student or not
    function studentAuthority (uint _StudentID, address _StudentAddr) public view returns (bool) {
        return students[_StudentID].StudentAddr == _StudentAddr;
    }
    
    // check whether the address belongs to the Teacher or not
    function teacherAuthority (uint _TeacherID, address _TecherAddr) public view returns (bool) {
        return teachers[_TeacherID].TeacherAddr == _TecherAddr;
    }
*/
    
    
    /*
    
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
    
    // connect three string
    function strConcat(string _a, string _b, string _c) private pure returns (string){
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
    function arrayConcat(uint[] _a, uint[] _c) private returns(uint[]) {
        r = _a;
        r.push(101);
        for (uint j = 0; j < _c.length; j++) {
            r.push(_c[j]);
        }
        return r;
    }
    */
    
/*
    // convert string to bytes32[4]
    function StrToBytes32Array(string p_str) internal pure returns(bytes32[4]) {
        bytes memory lbts_para;  //the result of convert p_str to bytes
        uint li_paralength;   //lbts_para's length
        string memory ls_new; //the result of convert ont bytes32 to string
        bytes32 lbt_row;      // the new bytes32 data  
        bytes32[4] memory lbt_result32;    //the return bytes32 array     
        uint li_rowcount = 4; // bytes32 array's length
        uint li_temp;  
        uint li_sum; //the total byte32 array's bytes amount
        uint li_colidx;  //the new column's index
        uint li_rowidx = 0; // the result bytes32 array's length

        lbts_para = bytes(p_str); //ex:'1234' = 0x31323334
        li_paralength = lbts_para.length;  //ex: 4 
        bytes memory lbts_new = new bytes(32); //for store to arrays32 array
        li_sum = li_rowcount *32;
        li_colidx = 0;
        for (uint p = 1;p<= li_sum;p++){
            //decide whether to add a new row
            li_temp = p%32;  //if equal 0,add a new row
            if (li_temp == 0 ){
                if (p > li_paralength) 
                    lbts_new[li_colidx] = 0x0;
                else
                    lbts_new[li_colidx] = lbts_para[p - 1];
                li_colidx = 0;
                ls_new = string(lbts_new);
                assembly {
                    lbt_row := mload(add(ls_new, 32))
                }
                li_rowidx += 1;
                lbt_result32[li_rowidx - 1] = lbt_row;
            }
            else {
                if (p > li_paralength) 
                    lbts_new[li_colidx] = 0x0;
                else
                    lbts_new[li_colidx] = lbts_para[p - 1];
                li_colidx = li_colidx +1;
            }
        }
        return lbt_result32;
    }
*/
    
    
}