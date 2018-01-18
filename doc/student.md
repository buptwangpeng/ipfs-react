# 学生模块相关接口

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
- 登录
```aidl
    //登录之后将个人信息存到localStorage
    url:/user/login
    
    request jsondata:
    {
        'timestamp':'',
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
                 'uid':'',//用户uid,后台用户的唯一标识，其他接口请求的时候需要带上供后台校验
                 'name':'',
                 'type':''// student/teacher/administrator
                 ....
             }
        }
```
    
- 个人信息更新
```aidl
    //更新之后需要将localStorage用户信息更新，保持用户数据同步
    url:/user/info/update
    
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        user:{         //可选，前端传几个字段更新几个字段
            'name':'',
            'phone':'',
            ....
        }
        
    }
    response:
    {
         'meta':{'code':200,'message':ok}
         'data':{
             'uid':'',//用户uid,后台用户的唯一标识，其他接口请求的时候需要带上供后台校验
             'name':'',
             'type':''// student/teacher/administrator
             ....
         }
    }       
```

- 选课列表查询
```aidl
    url:/student/course/select/list/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'next_page':''//下一页
    }
    response:
    {
         'meta':{'code':200,'message':ok}
         'data':[
             {
                 course_id:'',
                 course_name:'',
                 course_num:'', //课程编号
                 course_avatar:'',//课程封面图URL
                 abstract:''//课程简介,
                 type:'',//课程类型，选修/必修
                 teacher:{}//任课老师信息
                 time:[],//数组形式，可能有多个上课时间
                 credit:'',//学分
                 status:''//选课状态，0：可选，1：已选，2：课程已满
                 ....
             },
             {},
             ...
         ]
    }
```
- 选课接口
```aidl
        url:/student/course/select
        request jsondata:
        {
            'timestamp':'',
            'uid':'',
            'course_id':''
        }
        response:
        {
             'meta':{'code':200,'message':''}
        }
        注：前端需要对message进行特殊处理
        message='ok'，选课成功
        message='full' 课程已满
```

- 已选课程列表查询
```aidl
 url:/student/course/list/query
     request jsondata:
     {
         'timestamp':'',
         'uid':'',
         'next_page':''//下一页
     }
     response:
     {
          'meta':{'code':200,'message':ok}
          'data':[
              {
                  course_id:'',
                  course_name:'',
                  course_num:'', //课程编号
                  course_avatar:'',//课程封面图URL
                  course_progress:'',//课程学习进度
                  abstract:''//课程简介,
                  type:'',//课程类型，选修/必修
                  teacher:{}//任课老师信息
                  time:[],//数组形式，可能有多个上课时间
                  credit:'',//学分
                  grade:'',//成绩
                  ....
              },
              {}
              ...
          ]
     }
```

- 课程详情查询
```aidl
    通过课程id或者课程名查询课程详情
    url:/student/course/detail/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'course_name':'',//可选
        'course_id':''//可选
    }
    response:
    {
         'meta':{'code':200,'message':'ok'}
         'data':{
                 course_id:'',
                 course_name:'',
                 course_num:'', //课程编号
                 course_avatar:'',//课程封面图URL
                 course_progress:'',//课程学习进度
                 abstract:''//课程简介,
                 type:'',//课程类型，选修/必修
                 teacher:{}//任课老师信息
                 time:[],//数组形式，可能有多个上课时间
                 credit:'',//学分
                 grade:'',//课程成绩
                 ....
             }
    }
```

- 课程资料查询
```aidl
    url:/student/course/document/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'course_id':''
    }
    response:
    {
         'meta':{'code':200,'message':'ok'}
         'data':[
            {
                doc_id:'',
                doc_name:'',//资料名称
                type:'',资料类型，doc,pdf...
                download_url:'',//下载链接
                ...
            },
            {},
            ...
         ]
    }
```
- 课程资料下载记录接口
```aidl
    记录学生下载资料，全部资料下载完成后才能进行测试
    url:/student/course/document/download/record
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'doc_id':'',
    }
    response:
    {
         'meta':{'code':200,'message':'ok'}
    }
```

- 测试题列表查询
```aidl
    url:/student/course/exam/list/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'course_id':''
    }
    response:
    {
         'meta':{'code':200,'message':'ok'}
         data:[
            {
                exam_id:'',
                exam_name:'',
                ...
            },
            {},
            ...
         ]
    }
    注：前端对message进行处理
    messege=ok,可以进行测试
    message='download first' 提示学生先下载资料
```

- 上传课程报告/作业
```aidl
    url:/student/course/report/upload
    request jsondata:
        {
            'timestamp':'',
            'uid':'',
            'course_id':'',
            'data':''
        }
        response:
        {
             'meta':{'code':200,'message':'ok'}
        }
```

- 下载成绩单

```aidl
      url:/student/course/grade/download
          request jsondata:
          {
              'timestamp':'',
              'uid':'',
          }
          response:
          {
               'meta':{'code':200,'message':'ok'}
               data:{
                    download_url:''
               }
          }  
          备注：前端用download_url去下载
```








