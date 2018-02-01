# 公共模块

## 查询某学生多条成绩：request(学号，学期号，当前页，每页信息条数), response(课程名称，开课学期，课程属性，学分，成绩)

```
学期号格式(uint)(十进制数XYZW)(前两位本科/研究生，第三位年级，第四位上下学期)
XY：00-本科，01-研究生
Z：数字表示年级(最小是1)
W：0-上学期,1-下学期
例如：本科大三上半年即为0030，研究生二年级下半年为0121

学期号0000代表返回该学生所有成绩

request: getStuMark {
    uint _StudentID;
    uint _Term;
    uint _Page;
    uint _NumOfLables;
}

response: {
    strig Names; //拼接string
    uint[] Terms;
    bool[] Compulsorys;
    uint[] Credits; //按比例乘1000
    uint[] Marks; //按比例乘1000
}
```


## 查询某学生成绩总条数：request(学号), response(条数)

```
request: getStuMarkNum {
    uint _StudentID;
}

response: {
    uint MarkNum;
}
```


## ！！！添加学生信息:request(学号，姓名，班级), response用Event(是否成功)代替

```
request: addStuInfo {
    uint _StudentID;
    string _StudentName;
    uint _StudentClass;
}

event: AddStuInfo {
    bool Success;
}

//以下是第二版的event
Event(是否成功，学号，姓名，班级，操作者)
event: AddStuInfo {
    bool Success;
    uint StudentID;
    string StudentName;
    uint StudentClass;
    addresss Operator;
}
```


## ！！！添加管理员信息:request(管理员ID), response用Event(是否成功)代替

```
request: addManagerInfo {
    uint _ManagerID;
    }

event: AddManagerInfo {
    bool Success;
}

//以下是第二版的event
Event(是否成功，管理员ID，操作者)
event: AddManagerInfo {
    bool Success;
    uint ManagerID;
    addresss Operator;
}
```


## ！！！添加教师信息:request(教师ID，姓名), response用Event(是否成功)代替

```
request: addTchInfo {
    uint _TeacherID;
    string _TeacherName;
}

event: AddTchInfo {
    bool Success;
}

//以下是第二版的event
Event(是否成功，教师ID，操作者)
event: AddTeacherInfo {
    bool Success;
    uint TeacherID;
    addresss Operator;
}
```


## ！！！添加课程信息:request(ID，课程名，课程属性，学期号，学分，成绩组成), response用Event(是否成功)代替

```
request: addCourseInfo {
    uint _CourseID;
    string _CourseName;
    bool _Compulsory;  //课程属性，是否必修
    uint _Term;  //学期号,筛选课程成绩时使用
    uint _Credit;
    uint[] _Percentage;  //课程的成绩组成
}

event: AddCourseInfo {
    bool Success;
}

//以下是第二版的event
Event(是否成功，课程名，课程属性，学期号，学分，成绩组成，操作者)
event: AddCourseInfo {
    bool Success;
    uint CourseID;
    string CourseName;
    bool Compulsory;  //课程属性，是否必修
    uint Term;  //学期号,筛选课程成绩时使用
    uint Credit;
    uint[] Percentage;  //课程的成绩组成
    address Operator;
}
```


# 登陆界面(所有人用同一个)

## ！！！添加账户:request(类型, ID，地址), response用Event(是否成功)代替

```
"类型"(即_Identity):用uint, 0-学生，1-教师，2-管理员

request: addAccount {
    uint _Identity;
    uint _ID;
    address _Addr;
}

event: AddAccount {
    bool Success;
}

//以下是第二版的event
Event(是否成功，类型，ID，地址，操作者)
event: AddAccount {
    bool Success;
    uint Identity;
    uint ID;
    address Addr;
    address Operator;
}
```


# 教师页面

## ！！！提交成绩:request(教师ID，课程ID，学生ID，成绩)，response用Event(是否成功)代替

```
request: setStuMark {
    uint _TeacherID;
    uint _CourseID;
    uint _StudentID;
    uint[] _Marks;  //成绩的数值应是原成绩的1000倍
}

event: SetStuMark {
    bool Success;
}

//以下是第二版的event
Event(是否成功，教师ID，课程ID，学生ID，成绩，操作者)
event: SetStuMark {
    bool Success;
    uint _TeacherID;
    uint _CourseID;
    uint _StudentID;
    uint[] _Marks;
    address Operator;
}
```


## 查询学生名单:request(课程ID)，response(学生ID数组)


## 查询某课共有多少学生:request(课程ID)，response(学生数量)

```
request: len_cStuIDs {
    uint _CourseID;
}

response: {
    uint numOfStus;
}
```


## 按课查询10条学生成绩:request(课程ID，页数)，response(学生ID数组，期末成绩数组)

```
request: getStuMarksByCourse10 {
    uint _CourseID;
    uint _Page;
}

response: {
    uint[10] StuIDs;
    uint[10] Marks;  //数值是原成绩乘1000的结果
}
```


## ！！！按课查询1条学生成绩:request(课程ID，学生ID)，response(期末成绩)

```
request: getStuMarksByCourse {
    uint _CourseID;
    uint _StudentID;
}

response: {
    uint Mark;  //数值是原成绩乘1000的结果
}
```


# 学生界面

## ！！！选课:request(课程ID，学生ID),返回event(是否成功)

```
request: stuChooseCourse {
    uint _CourseID;
    uint _StudentID;
}

event: StuChooseCourse {
    bool Success;
}
```


## ！！！按课查询1条学生成绩:request(课程ID，学生ID)，response(期末成绩)

```
同教师页面 getStuMarksByCourse(_CourseID, _StudentID);

request: getStuMarksByCourse {
    uint _CourseID;
    uint _StudentID;
}

response: {
    uint Mark;  //数值是原成绩乘1000的结果
}
```