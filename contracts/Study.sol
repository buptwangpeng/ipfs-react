pragma solidity ^0.4.18;

import './StudyData.sol';

contract Study {
    StudyData sd = StudyData(0x9d1c942956fb29eeb19861f40ddd02baba34db9e);//0x64bcdE263fb27C29368fAD031A0Ff86482C73B17

    function Study(uint _ManagerID) {
        sd.dataManagerInsert(_ManagerID, msg.sender);
    }



    function managerInsert(uint _ManagerID, address _ManagerAddress) returns (bool) {
        if(sd.managerAuthority(msg.sender) && sd.managerAvailable(_ManagerID, _ManagerAddress))
            return sd.dataManagerInsert(_ManagerID, _ManagerAddress);
        else return false;
    }

    function studentInsert(uint _StudentID, string _StudentName, uint _StudentClass, string _LoginKey, string _UnlockKey, address _StudentAddress) returns(bool) {
        if(sd.managerAuthority(msg.sender) && !sd.studentIDExist(_StudentID) && !sd.studentAddrExist(_StudentAddress)) {
            sd.setStudentID (_StudentID);
            sd.setStudentName(_StudentID, _StudentName);
            sd.setStudentClass(_StudentID, _StudentClass);
            sd.setStudentLoginKey(_StudentID, _LoginKey);
            sd.setStudentUnLockKey (_StudentID, _UnlockKey);
            sd.setStudentAddr(_StudentID, _StudentAddress);
            sd.classPushStudentID(_StudentClass, _StudentID);
            return true;
        }
        else return false;
    }

    function studentInfoChange(uint _StudentID, uint _StudentClass, string _StudentName) returns (bool) {
        if(sd.managerAuthority(msg.sender) && sd.studentIDExist(_StudentID)) {
            if(_StudentClass != sd.getStudentClass(_StudentID)) {
                sd.classClearStudentID(sd.getStudentClass(_StudentID), _StudentID);
                sd.classPushStudentID(_StudentClass, _StudentID);
            }
            sd.setStudentName(_StudentID, _StudentName);
            sd.setStudentClass(_StudentID, _StudentClass);
            return true;
        }
        else return false;
    }

    function studentLoginKeyChange(uint _StudentID, string _LoginKey) returns (bool) {
        if((sd.managerAuthority(msg.sender) || sd.studentAuthority(_StudentID, msg.sender)) && sd.studentIDExist(_StudentID)) {
            sd.setStudentLoginKey(_StudentID, _LoginKey);
            return true;
        }
        else return false;
    }

    function studentAddressChange(uint _StudentID, address _StudentAddress, string _UnlockKey) returns (bool) {
        if(sd.managerAuthority(msg.sender) && sd.studentIDExist(_StudentID) && !sd.studentAddrExist(_StudentAddress)) {
            sd.setStudentUnLockKey(_StudentID, _UnlockKey);
            sd.setStudentAddr(_StudentID, _StudentAddress);
        }
        else return false;
    }

    //    function classCourseSearch(uint[] _Class, uint _CourseID) returns (uint[], uint[], string, string, uint[], uint[], LearningProgress[]) {
    //        string memory _ccsStudentsName;
    //        string memory _ccsCourseName = courses[_CourseID].CourseName;
    //        for (uint c = 0; c < _Class.length; c++) {
    //            uint[] a = class_stu[_Class[c]];
    //            for (uint s = 0; s < a.length; s++) {
    //                string memory sn = students[a[s]].StudentName;
    //                if (s == 0) {
    //                    _ccsStudentsName = StudentFunction.strConcat(sn, "", "");
    //                }
    //                else {
    //                    _ccsStudentsName = StudentFunction.strConcat(_ccsStudentsName, ", ", sn);
    //                }
    //                Stu_Courses b = students[a[s]].stu_courses[_CourseID];
    //                ccsClass.push(_Class[c]);
    //                ccsStudentID.push(a[s]);
    //                ccsStudyTime.push(b.PreviewTime);
    //                ccsCourseGrade.push(b.CourseGrade);
    //                ccsLp.push(b.Lp);
    //            }
    //        }
    //        return (ccsClass, ccsStudentID, _ccsStudentsName, _ccsCourseName, ccsStudyTime, ccsCourseGrade, ccsLp);
    //    }

    function courseInsert(uint _CourseID, string _CourseName, uint _RequiredTime,uint[] _Advanced, uint[] _Percentage, bool _Compulsory) returns (bool) {
        if(sd.managerAuthority(msg.sender) && (!sd.courseIDExist(_CourseID))) {
            sd.setCourseID(_CourseID);
            sd.setCourseName(_CourseID, _CourseName);
            sd.setCourseRequiredTime(_CourseID, _RequiredTime);
            sd.setCourseAdvanced(_CourseID, _Advanced);
            sd.setCoursePercentage(_CourseID, _Percentage);
            sd.setCourseCompulsory(_CourseID, _Compulsory);
            return true;
        }
        else return false;
    }

    function courseInfoChange(uint _CourseID, string _CourseName, uint _RequiredTime,uint[] _Advanced, uint[] _Percentage, bool _Compulsory) returns (bool) {
        if (sd.managerAuthority(msg.sender) && sd.courseIDExist(_CourseID)) {
            sd.setCourseID(_CourseID);
            sd.setCourseName(_CourseID, _CourseName);
            sd.setCourseRequiredTime(_CourseID, _RequiredTime);
            sd.setCourseAdvanced(_CourseID, _Advanced);
            sd.setCoursePercentage(_CourseID, _Percentage);
            sd.setCourseCompulsory(_CourseID, _Compulsory);
            return true;
        }
        else return false;
    }

    function chooseCourse(uint _StudentID, uint _CourseID) returns (bool) {
        if(sd.studentAuthority(_StudentID, msg.sender) && sd.studentIDExist(_StudentID) && sd.courseIDExist(_CourseID) && sd.courseAdvanced(_StudentID, _CourseID) && sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.NotStart) {
            sd.setStuCourseID(_StudentID, _CourseID, _CourseID);
            sd.stuCourseIDPush(_StudentID, _CourseID);
            sd.courseStuIDPush(_StudentID, _CourseID);
            sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.Start);
            return true;
        }

        else return false;
    }

    function withdrew(uint _StudentID, uint _CourseID) returns (bool) {
        if(sd.studentAuthority(_StudentID, msg.sender) && sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.Start) {
            sd.setStuCourseID(_StudentID, _CourseID, 0);
            sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.NotStart);
            sd.stuCourseIDClear(_StudentID, _CourseID);
            sd.courseStuIDClear(_StudentID, _CourseID);
            return true;
        }
        else return false;
    }

    function previewStart(uint _StudentID, uint _CourseID) returns (bool) {
        if(sd.studentAuthority(_StudentID, msg.sender) && sd.getCourseRequiredTime(_CourseID) > 0 && (sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.Start || sd.getStuCoursePreviewTime(_StudentID, _CourseID) > sd.getCourseRequiredTime(_CourseID))) {
            sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.PreviewStart);
            sd.setStuCourseStartTime(_StudentID, _CourseID, now);
            return true;
        }
        else return false;
    }

    function previewEnd(uint _StudentID, uint _CourseID) returns (bool) {
        if(sd.studentAuthority(_StudentID, msg.sender) && sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.PreviewStart) {
            uint _StudyTime;
            _StudyTime = now - sd.getStuCourseStartTime(_StudentID, _CourseID) + sd.getStuCoursePreviewTime(_StudentID, _CourseID);
            sd.setStuCourseStartTime(_StudentID, _CourseID, 0);
            if ((_StudyTime) < sd.getCourseRequiredTime(_CourseID)) {
                sd.setStuCoursePreviewTime(_StudentID, _CourseID, _StudyTime);
                sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.Start);
                return false;
            }
            else {
                sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.PreviewEnd);
                sd.setStuCoursePreviewTime(_StudentID, _CourseID, _StudyTime);
                return true;
            }
        }
        else return false;
    }

    function previewTest(uint _StudentID, uint _CourseID, uint _TestGrade) returns (bool) {
        if(sd.studentAuthority(_StudentID, msg.sender) && sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.PreviewEnd && _TestGrade >= 60) {
            sd.setStuCourseTestGrade(_StudentID, _CourseID, 0, _TestGrade * 1000);
            sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.Test);
            return true;
        }
        else return false;
    }

    function testGradeSave(uint _StudentID, uint _CourseID, uint _TestTimes, uint _TestGrade) returns (bool) {
        if(sd.managerAuthority(msg.sender)) {
            if (sd.getCourseRequiredTime(_CourseID) > 0) {
                if (sd.getStuCourseLearningProgress(_StudentID, _CourseID) != StudyData.LearningProgress.Test) {
                    return false;
                }
                else {
                    if (sd.getStuCourseTestGradeLength(_StudentID, _CourseID) < _TestTimes+1) {
                        sd.setStuCourseTestGradeLength(_StudentID, _CourseID, _TestTimes+1);
                    }
                    sd.setStuCourseTestGrade(_StudentID, _CourseID, _TestTimes, _TestGrade * 1000);
                    return true;
                }
            }
            else {
                if (sd.getStuCourseLearningProgress(_StudentID, _CourseID) != StudyData.LearningProgress.Start && sd.getStuCourseLearningProgress(_StudentID, _CourseID) != StudyData.LearningProgress.Test) {
                    return false;
                }
                else {
                    if (sd.getStuCourseTestGradeLength(_StudentID, _CourseID) < _TestTimes) {
                        sd.setStuCourseTestGradeLength(_StudentID, _CourseID, _TestTimes);
                    }
                    sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.Test);
                    sd.setStuCourseTestGrade(_StudentID, _CourseID, _TestTimes-1, _TestGrade * 1000);
                    return true;
                }
            }
        }
        else return false;
    }

    function learningEnd(uint _StudentID, uint _CourseID) returns (bool) {
        if(sd.managerAuthority(msg.sender) && sd.getStuCourseLearningProgress(_StudentID, _CourseID) == StudyData.LearningProgress.Test) {
            uint percentageall = 0;
            uint gradeall = 0;
            uint averagescore;
            for (uint p = 0; p < sd.getCoursePercentageLength(_CourseID) && p < sd.getStuCourseTestGradeLength(_StudentID, _CourseID); p++) {
                percentageall += sd.getCoursePercentageIndex(_CourseID, p);
                gradeall += sd.getCoursePercentageIndex(_CourseID, p) * sd.getStuCourseTestGradeIndex(_StudentID, _CourseID, p);
            }
            averagescore = gradeall / percentageall;
            sd.setStuCourseGrade(_StudentID, _CourseID, averagescore);
            if (averagescore < 60 * 1000)
                sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.NotPass);
            else
                sd.setStuCourseLearningProgress(_StudentID, _CourseID, StudyData.LearningProgress.Pass);
            return true;
        }
        else return false;
    }

}
