pragma solidity ^0.4.18;

contract StudyLog {
    
    address public Controller;
    address public Owner;
    address public Editor;
    
    
    function StudyLog() public {
        Controller = msg.sender;
        Owner = msg.sender;
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
    
    modifier onlyEditor {
        if (msg.sender != Editor) revert();
        _;
    }
    
    
    // set the address of controller contract
    
    event SetController(address newController);
    
    function setController (address _Controller) onlyOwner public returns(bool) {
        Controller = _Controller;
        SetController(_Controller);
        return true;
    }
    
    event TransferOwnerShip(address newOwner);
    
    function transferOwnerShip(address _newOwner) onlyOwner public returns(bool) {
        Owner = _newOwner;
        TransferOwnerShip(_newOwner);
        return true;
    }
    
    event SetOwner(address newOwner);
    
    function setOwner(address _newOwner) onlyController public returns(bool) {
        Owner = _newOwner;
        SetOwner(_newOwner);
        return true;
    }
    
    event SetEditor(address newEditor);
    
    function setEditor(address _newEditor) onlyOwner public returns(bool) {
        Editor = _newEditor;
        SetEditor(_newEditor);
        return true;
    }
    
    
/* Practical Events */

    event AddStuInfo(bool Success, uint _StudentID, string _StudentName, uint _StudentClass, address Operator);
    
    function addStuInfo(bool Success, uint _StudentID, string _StudentName, uint _StudentClass, address Operator)
    onlyEditor public {
        AddStuInfo(Success, _StudentID, _StudentName, _StudentClass, Operator);
    }
    
    
    event AddTeacherInfo(bool Success, uint _TeacherID, string _TeacherName, address Operator);
    
    function addTeacherInfo(bool Success, uint _TeacherID, string _TeacherName, address Operator)
    onlyEditor public {
        AddTeacherInfo(Success, _TeacherID, _TeacherName, Operator);
    }
    
    
    event AddCourseInfo(bool Success, uint _CourseID, string _CourseName, bool _Compulsory, uint _Term, uint _Credit, uint[] _Percentage, address Operator);
    
    function addCourseInfo(bool Success, uint _CourseID, string _CourseName, bool _Compulsory, uint _Term, uint _Credit, uint[] _Percentage, address Operator)
    onlyEditor public {
        AddCourseInfo(Success, _CourseID, _CourseName, _Compulsory, _Term, _Credit, _Percentage, Operator);
    }
    
    
    event AddManagerInfo(bool Success, uint _ManagerID, address Operator);
    
    function addManagerInfo(bool Success, uint _ManagerID, address Operator)
    onlyEditor public {
        AddManagerInfo(Success, _ManagerID, Operator);
    }
    
    
    event AddAccount(bool Success, uint _Identity, uint _ID, address _Addr, address Operator);
    
    function addAccount(bool Success, uint _Identity, uint _ID, address _Addr, address Operator)
    onlyEditor public {
        AddAccount(Success, _Identity, _ID, _Addr, Operator);
    }
    
    
    event SetStuMark(bool Success, uint _TeacherID, uint _CourseID, uint _StudentID, uint[] _Marks, address Operator);
    
    function setStuMark(bool Success, uint _TeacherID, uint _CourseID, uint _StudentID, uint[] _Marks, address Operator)
    onlyEditor public {
        SetStuMark(Success, _TeacherID, _CourseID, _StudentID, _Marks, Operator);
    }
    
    
    event StuChooseCourse(bool Success, uint _CourseID, uint _StudentID, address Operator);
    
    function stuChooseCourse(bool Success, uint _CourseID, uint _StudentID, address Operator)
    onlyEditor public {
        StuChooseCourse(Success, _CourseID, _StudentID, Operator);
    }
    
    
}