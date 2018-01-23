- 文档约定
```aidl
    1.除登录接口外所有接口请求字段应该包含用户uid,timestamp(时间戳)
    前端在登录后将uid存到localStorage,退出时清除
    
    2.后台返回数据中包括两个对象：
    (1) meta:{'code':200,'message':ok}
        code = 200,请求及数据返回正确
        code = 400,客户端错误，一般为参数错误，除了登录接口外，正式运行时不应该有这个错误
        code = 500,服务端错误，前端提示服务器异常
    (2) data:{},业务数据
        数据中除了每个接口不同的业务数据之外应该包含以下字段
        create_time :'',//Unix时间戳格式
        update_time :'',//Unix时间戳格式
```

- 个人信息查询
```aidl
    url:/user/info/query
        
        request jsondata:
        {
            'timestamp':'',
            'uid':''
        }
        response:
        {
             'meta':{'code':200,'message':ok}
             'data':{
                 'uid':'',
                 'name':'',
                 'type':''// student/teacher/administrator
                 ....
             }
        }
```



-查看课程信息

```aid1
url:/teacher/course/query

request jsondata:
{
	'uid':'2345',
  'timestamp':''
}  
response:
{
	'meta':{'code':200,'message':'ok'}
	'data':[{'name':'',//课程名称
          'number':'',//选课人数
          'courseId':'',//课程编号
          'time':'',//开课时间
          'type':'',//课程类型
           'score':'',//学分
           'object':'',//面向对象
           'description':''//课程描述
           }, 
          
          ...
         ]
} 
```

-查看选课学生信息

```aid1
url:/teacher/studentlist/query

request jsondata:
{
  'uid':'2345',
  'courseuId':'222',
  'timestamp':'',
  'next_page':''//下一页
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  'data':[{'name':'',//姓名
           'studentId':'',//学号
           'progress':'',//学习进度
           'homework':'',//作业是否提交
           'homeworkScore':'',//作业评分
           'usualGrade':'',//平时成绩
           'totalScore':''//总成绩
         }        
          ...
         ]
} 
```

-提交学生成绩

```aid1
url:/teacher/studentGrade/submit

request jsondata:
{
  'uid':'2345',
  'courseuId':'222',
  'studentId':'1234',
  'timestamp':'',
  'studentGrade':{'homeworkScore':'',//作业评分
                  'usualGrade':'',//平时成绩
                  'totalScore':''//总成绩
                }
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  
} 
```

-查看可申请课程

```aid1
url:/teacher/courseapply/query

request jsondata:
{
  'uid':'2345',
  'timestamp':'',
  'next_page':''//下一页
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  'data':[
          {'name':'',//课程名称
          'number':'',//选课人数
          'courseId':'',//课程编号
          'time':'',//开课时间
          'type':'',//课程类型
           'score':'',//学分
           'object':'',//面向对象
           'description':''//课程描述
           },             
          ...
         ]
} 
```

-教师页面提交可申请课程

```aid1
url:/teacher/courseapply/submit

request jsondata:
{
  'uid':'2345',
  'courseId':'333',
  'timestamp':''
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  
} 
```

-教师页面申请新开课

```aid1
url:/teacher/course/add

request jsondata:
{
  'uid':'2345',
  'timestamp':'',
  'newCourseInfo':{'name':'',//课程名称
                   'courseId':'',//编号
                   'time':'',//开课时间
                   'score':'',//学分
                   'object':'',//面向对象
                   'type':''//课程类型
                 }
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  
} 
```

-教师页面获取课程资料信息

```aid1
url:/teacher/document/Obtain

request jsondata:
{
  'uid':'2345',
  'courseId':'222',
  'timestamp':''
}  
response:
{
  'meta':{'code':200,'message':'ok'}
  'data':{'name':'',//资料名称
          'time':'',//上传时间
          'documentId':'',
          'type':'',//资料类型
          'url':''
        }
} 
```

-教师页面删除课程资料

```aid1
url:/teacher/document/delete

request jsondata:
{
  'uid':'2345',
  'courseId':'222',
  'documentId':'444',
  'timestamp':''
}  
response:
{
  'meta':{'code':200,'message':'ok'}
} 
```
