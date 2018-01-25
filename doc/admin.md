#  code==200   正常前后端交互，成功接受数据
   code==400&&message=='NotAuthorized'  非法用户。未授权
   code==500  服务器错误

# 管理员界面相关接口

- 登录
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
     'meta':{'code':'200','message':'ok'}
     'data':{
         'uid':'',//用户uid,后台用户的唯一标识，其他接口请求的时候需要带上供后台校验
         'name':'',
         'type':''// student/teacher/administrator
         'token':''//后台验证
         'address_exist':''//  0/1   0代表用户没有地址，此时需要弹窗或跳转到创建账户地址界面；1代表用户有地址，直接跳转到相应界面即可
         'block_chain':{
             'address':'',
             'password_unlock':''
         }
     }
}
//当用户名或密码错误时返回 'meta':{'code':'400','message':'Account or password is error'}
```

- 添加学生
```
url:/admin/student/info/add
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'student':{
        'student_id':'',//学号
        'student_name': '',
        'student_gender':'',//male/female
        'student_class': '',
        'student_grade': '',
        'student_major':'',//专业
        'student_school':'',
        'student_password_log': '',//学生登录本系统的登录密码
    }
}
response:
{
     'meta':{'code':'200','message':'ok'}
}
//若添加学号已存在于数据库，则返回 'meta':{'code':'400','message':'The student already exists'}
```

- 学生信息查看
```
url:/admin/student/info/query
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'student':{
        'student_id':'',//学号
    }
}
response:
{
     'meta':{'code':'200','message':'ok'}
     'data':{
         'uid':'',
         'student_id':'',//学号
         'student_name': '',
         'student_gender':'',//male/female
         'student_class': '',
         'student_grade': '',
         'student_major':'',//专业
         'student_school':'',
         'student_address': '',//学生在区块链上的账户地址
         'student_password_log': '',//学生登录本系统的登录密码
         'student_password_unlock': '',//学生的区块链账户地址的解锁密码
     }
}
//若学号不存在，则返回'meta':{'code':'400','message':'The student ID does not exist'}
```
- 学生信息修改
```
url:/admin/student/info/modify
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'student':{
       'student_id':'',//学号
       'student_name': '',
       'student_gender':'',//male/female
       'student_class': '',
       'student_grade': '',
       'student_major':'',//专业
       'student_school':'',
       'student_address': '',//学生在区块链上的账户地址
       'student_password_log': '',//学生登录本系统的登录密码
       'student_password_unlock': '',//学生的区块链账户地址的解锁密码
    }
}
response:
{
     'meta':{'code':'200','message':'ok'}


}
```

- 学生成绩查询
```
在区块链上进行查询，接口都是web3接口
url:/admin/student/mark/query
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'student':{
        'student_id':'',//学号
    }
}
response:
{
     'meta':{'code':'200','message':'ok'}
     'data':{
         {
         "course_id"："",         // 新加的，这个还没有和后台沟通
         'course_name':'',
         'course_credit':'',//课程学分
         'course_property':'',// 必修/选修
         'course_semester':'',//开课学期
         'course_mark':'',
         }
     }

}
```

- 添加教师
```
url:/admin/teacher/info/add
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'teacher':{
        'teacher_id':'',//教师编号
        'teacher_name':'',
        'teacher_tel':'',//电话
        'teacher_password_log':'',//教师登录本系统的登录密码

    }
}
response:
{
     'meta':{'code':200,'message':ok}
}
//若教师ID已存在数据库中，则返回'meta':{'code':'400','message':'The teacher already exists'}
```

- 教师信息查看
```
url:/admin/teacher/info/query
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
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
//若教师ID不存在，则返回'meta':{'code':'400','message':'The teacher ID does not exist'}
```

- 教师信息修改
```
url:/admin/teacher/info/modify
request jsondata:
{
   'timestamp':'',
    'uid':'',
    'token':''
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

- 获取教师开课申请数据
```
url:/admin/teacher/course/apply/query
request jsondata:
{
    'timestamp':'',
    'uid':''
    'token':''
    'page':''//  要取前端界面第几页的数据
    'number':'6'//  每页有几条数据

}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
          "pages":"",
           "content":{
                  "0":{
                        'new':'' //  0/1  是否为新课
                        'course_name':'',
                        'academy':'',//学院
                        'course_property':'',// 必修/选修
                        'course_id':'',//课程编号
                        'teacher_id':''
                        'teacher_name':'',
                        'time':'',//上课时间
                        'grade':'',//面向年级
                        'mark_element':'',//成绩组成 如：100%期末
                        'credit':'',//课程学分
                        'status':''//status: "1"可选，"2"已同意，"3’已拒绝}
                  }
                  ...
           }
     }
     ...
}
```

- 审批开课申请
```
url:/admin/teacher/course/apply/approve
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'course_approve':{
             'new':''  //  0/1  是否为新课
             'course_id':'',//课程编号
             'teacher_id':''
             'status':'',//status: 2同意，3拒绝
         }
}
response:
{
     'meta':{'code':200,'message':ok}
}
```

- 添加课程
```
url:/admin/course/info/add
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
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
//若课程ID已存在于数据库，则返回 'meta':{'code':'400','message':'The course already exists'}
```

- 课程信息查看
```
url:/admin/course/info/query
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'course':{
        'course_id':'',//课程编号
    }
}
response:
{
     'meta':{'code':200,'message':ok}
     'data':{
         'teacher_name':'',
         'teacher_id':'',
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
//若课程ID不存在，则返回 'meta':{'code':'400','message':'The course does not exist'}
```

- 课程信息修改
url:/admin/course/info/modify
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'course':{
       'teacher_id_change':{
                  'former':'',
                  'now':''
                }
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

- 添加管理员
```
url:/admin/administrator/info/add
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'administrator':{
        'administrator_id':'',//管理员编号
        'administrator_name':'',
        'administrator_tel':'',//电话
        'administrator_password_log':'',//管理员登录本系统的登录密码

    }
}
response:
{
     'meta':{'code':200,'message':ok}

}
//若管理员ID已存在于数据库，则返回 'meta':{'code':'400','message':'The admin already exists'}
```

- 管理员信息查看
```
url:/admin/administrator/info/query
request jsondata:
{
   'timestamp':'',
    'uid':''
    'token':''
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
         'administrator_password_log':'',//管理员登录本系统的登录密码

     }
}
//若管理员ID不存在，则返回 'meta':{'code':'400','message':'The admin does not exist'}
```

- 管理员信息修改
```
url:/admin/administrator/info/modify
request jsondata:
{
    'timestamp':'',
    'uid':'',
    'token':''
    'administrator':{
        'administrator_id':'',//管理员编号
        'administrator_name':'',
        'administrator_tel':'',//电话
        'administrator_password_log':'',//管理员登录本系统的登录密码
    }
}
response:
{
     'meta':{'code':200,'message':ok}

}
```