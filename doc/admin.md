- 登录界面
```
url:/user/login

request jsondata:
{
    'user':{
        'account':'',
        'password':'',//MD5加密
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'uid':'',//用户uid,后台用户的唯一标识，其他接口请求的时候需要带上供后台校验
         'name':'',
         'type':''// student/teacher/administrator
     }
}
```

- 管理员界面添加学生
```
url:/admin/student/info/add
request jsondata:
{
    'uid':'1111'
    'student':{
        'student_id':'',//学号
        'student_name': '',
        'student_class': '',
        'student_grade': '',
        'student_password': '',//学生登录本系统的登录密码
        'student_tel': '',
    }
}
response:
{
     'meta':{'code':200,'message':ok}
}
```

- 管理员界面学生信息查看修改
```
url:/admin/student/info/query   //查看
request jsondata:
{
    'uid':'1111'
    'student':{
        'student_id':'',//学号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'student_id':'',//学号
         'student_name': '',
         'student_address': '',//学生在区块链上的账户地址
         'student_password_log': '',//学生登录本系统的登录密码
         'student_password_unlock': '',//学生的区块链账户地址的解锁密码
     }
}

url:/admin/student/info/modify    //修改
request jsondata:
{
    'uid':'1111'
    'student':{
        'student_id':'',//学号
        'student_name':'',
        'student_address':'',//学生在区块链上的账户地址
        'student_password_log':'',//学生登录本系统的登录密码
        'student_password_unlock':'',//学生的区块链账户地址的解锁密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}

}
```

- 管理员界面学生成绩查询
```
url:/admin/student/grade/query
request jsondata:
{
    'uid':'1111'
    'student':{
        'student_id':'',//学号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'course_name':'',
         'course_credit':'',//课程学分
         'course_property':'',// 必修/选修
         'course_semester':'',//开课学期
         'course_mark':'',
     }

}
```

- 管理员界面添加教师
```
url:/admin/teacher/info/add
request jsondata:
{
    'uid':'1111'
    'teacher':{
        'teacher_id':'',//教师编号
        'teacher_name':'',
        'teacher_tel':'',//电话
        'teacher_password':'',//教师登录本系统的登录密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'teacher_address':''//教师在区块链上的账户地址
     }
}
```

- 管理员界面教师信息查看修改
```
url:/admin/teacher/info/query   //查看
request jsondata:
{
    'uid':'1111'
    'teacher':{
        'teacher_id':'',//教师编号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'teacher_id':'',//教师编号
         'teacher_name':'',
         'teacher_tel':'',//电话
         'teacher_address':'',//教师在区块链上的账户地址
         'teacher_password_log':'',//教师登录本系统的登录密码
         'teacher_password_unlock':'',//教师的区块链账户地址的解锁密码
     }
}

url:/admin/teacher/info/modify    //修改
request jsondata:
{
    'uid':'1111'
    'teacher':{
        'teacher_id':'',//教师编号
        'teacher_name':'',
        'teacher_tel':'',//电话
        'teacher_address':'',//教师在区块链上的账户地址
        'teacher_password_log':'',//教师登录本系统的登录密码
        'teacher_password_unlock':'',//教师的区块链账户地址的解锁密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}

}
```

- 管理员界面教师开课申请
```
url:/admin/teacher/course/apply/query   //获取开课申请数据
request jsondata:
{
    'uid':'1111'
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
        'course_name':'',
        'academy':'',//学院
        'course_property':'',// 必修/选修
        'course_id':'',//课程编号
        'teacher_name':'',
        'time':'',//上课时间
        'grade':'',//面向年级
        'mark_element':'',//成绩组成 如：100%期末
        'credit':'',//课程学分
        'status':''//status: 1可选，2已同意，3已拒绝
     }
}

url:/admin/teacher/course/apply/approve    //审批开课申请
request jsondata:
{
    'uid':'1111'
    'course_approve':{
        'course_id':'',//课程编号
        'status':'',//status: 2同意，3拒绝
    }
}
response:
{
     'meta':{'code':200,'message':ok}
}
```

- 管理员界面添加课程
```
url:/admin/course/info/add
request jsondata:
{
    'uid':'1111'
    'course':{
        'teacher_name':'',
        'course_id':'',//课程编号
        'course_name':'',//课程名称
        'academy':'',//面向院系
        'grade':'',//面向年级
        'course_time':'',//开课时间
        'credit':'',//学分
        'mark_element':'',//成绩组成 如：100%期末
        'course_property':'',// 必修/选修
    }
}
response:
{
     'meta':{'code':200,'message':ok}
}
```

- 管理员界面课程信息查看修改
```
url:/admin/course/info/query   //查看
request jsondata:
{
    'uid':'1111'
    'course':{
        'course_id':'',//教师编号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'course_id':'',//课程编号
         'course_name':'',//课程名称
         'academy':'',//面向院系
         'grade':'',//面向年级
         'course_time':'',//开课时间
         'credit':'',//学分
         'mark_element':'',//成绩组成 如：100%期末
         'course_property':'',// 必修/选修
     }
}

url:/admin/course/info/modify    //修改
request jsondata:
{
    'uid':'1111'
    'course':{
       'course_id':'',//课程编号
       'course_name':'',//课程名称
       'academy':'',//面向院系
       'grade':'',//面向年级
       'course_time':'',//开课时间
       'credit':'',//学分
       'mark_element':'',//成绩组成 如：100%期末
       'course_property':'',// 必修/选修
    }
}
response:
{
     'meta':{'code':200,'message':ok}
}
```

- 管理员界面添加管理员
```
url:/admin/administrator/info/add
request jsondata:
{
    'uid':'1111'
    'administrator':{
        'administrator_id':'',//管理员编号
        'administrator_name':'',
        'administrator_tel':'',//电话
        'administrator_password':'',//管理员登录本系统的登录密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'administrator_address':''//管理员在区块链上的账户地址
     }
}
```

- 管理员界面管理员信息查看修改
```
url:/admin/administrator/info/query   //查看
request jsondata:
{
    'uid':'1111'
    'administrator':{
        'administrator_id':'',//管理员编号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'administrator_id':'',//管理员编号
         'administrator_name':'',
         'administrator_tel':'',//电话
         'administrator_address':'',//管理员在区块链上的账户地址
         'administrator_password_log':'',//管理员登录本系统的登录密码
         'administrator_password_unlock':'',//管理员的区块链账户地址的解锁密码
     }
}

url:/admin/administrator/info/modify    //修改
request jsondata:
{
    'uid':'1111'
    'administrator':{
        'administrator_id':'',//管理员编号
        'administrator_name':'',
        'administrator_tel':'',//电话
        'administrator_address':'',//管理员在区块链上的账户地址
        'administrator_password_log':'',//管理员登录本系统的登录密码
        'administrator_password_unlock':'',//管理员的区块链账户地址的解锁密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}

}
```