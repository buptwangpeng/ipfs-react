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
<!-- - 登录
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
``` -->

- 个人信息查询 1
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
                 'class':
                 'major':
                 'grade':
                 'school':
                 'tel':
                 'email':
                 'gender':

                 ....
             }
        }
```

- 个人信息更新 2
```aidl
    //更新之后需要将localStorage用户信息更新，保持用户数据同步
    url:/user/info/update

    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        user:{         //可选，前端传几个字段更新几个字段
            'usre_name':'',
            'user_phone':'',
            'user_email:' ',
            'user_password_log'
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
             'gender':
             'class':
             'major':
             'school':
             'grade':
             'tel':
             'email':
             'password':
             ....
         }
    }       
```

- 选课列表查询 3
```aidl
    url:/student/course/select/list/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        'page':''//要取前端界面第几页的数据
        'number':''//每页显示数量
    }
    response:
    {
         'meta':{'code':200,'message':ok}
         'data':[
            'pages':''//总页数
            'content':{
              '0':{
                 course_id:'',
                 course_name:'',
  //目前先不做               course_avatar:'',//课程封面图URL
                 abstract:''//课程简介,
                 type:'',//课程类型，选修/必修

                 teacher_name:'',
                 teacher_tel:'',
                 teacher_email:''

                 time:,//上课学期
                 credit:'',//学分
                 mark_element:''//成绩组成
                  status://选课状态，0：可选，1：已选，2：课程已满 目前先从数据库返回
                 ....}
             },
             {},
             ...
         ]
    }
```
<!-- - 选课接口              //区块链查询、记录
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
``` -->

- 已选课程列表查询          //区块链查询
```aidl
 url:/student/course/list/query
     request jsondata:
     {
         'timestamp':'',
         'uid':'',
         'page':'',
         'number':'',
         'course_id_list':''        //区块链上获得的学生所选课程id列表，格式问题未定
         // 'next_page':''//下一页
     }
     response:
     {
          'meta':{'code':200,'message':ok}
          'data':[
                'pages':'',     //总页数
                ’content‘:{
                '0':{
                  course_id:'',
                  course_name:'',
                  //course_num:'', //课程编号
                  course_avatar:'',//课程封面图URL
  //区块链查询     course_progress:'',//课程学习进度
                  abstract:''//课程简介,
                  type:'',//课程类型，选修/必修
                  teacher:{
                    teacher_name:'',
                    teacher_tel:'',
                    teacher_email:''
                    }//任课老师信息
                  time:[],//数组形式，可能有多个上课时间
                  credit:'',//学分
                //  grade:'',//成绩，成绩是由区块链返回，可以返回成绩构成
                  }
                  ....
              }
          ]
     }
```

- 课程详情查询 4
```aidl
    通过课程id或者课程名查询课程详情
    url:/student/course/detail/query
    request jsondata:
    {
        'timestamp':'',
        'uid':'',
        /* 'course_name':'',// 可选，第一版不做*/
        'course_id':''//可选
    }
    response:
    {
         'meta':{'code':200,'message':'ok'}
         'data':{
                 course_id:'',
                 course_name:'',
  //先不做               course_avatar:'',//课程封面图URL，先记为Null
  //先不做               course_progress:'',//课程学习进度//区块链
                 abstract:''//课程简介,
                 type:'',//课程类型，选修/必修
                 teacher:{
                   teacher_name:'',
                   teacher_tel:'',
                   teacher_email:''
                   }//任课老师信息
                 time:'',//，学期
                 credit:'',//学分
                 mark_element:'',//成绩组成
                 major:''//适用专业
                 grade:''//适用年级
                 ....
             }
    }
```

- 课程资料查询                //区块链查询，先知道选了什么课，同上返回课程id数组，再发往后台
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
                download_url:'',//下载链接，先设为Null
                ...
            },
            {},
            ...
         ]
    }
```
- 课程资料下载记录接口            //区块链查询学习进度、记录学习进度，资料存在IPFS上
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

- 测试题列表查询               //区块链查询学习进度，
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

- 上传课程报告/作业             //区块链查询学习进度，数据库记录哈希
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

<!-- - 下载成绩单             //区块链查询成绩，可以查询显示，不会做导出

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
``` -->
