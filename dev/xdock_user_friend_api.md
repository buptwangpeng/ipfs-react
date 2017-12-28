#用户好友关系

#好友列表查询接口

    url: /$(appname)/user/friend/query

    request jsondata：
    ｛
        'appid': 1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        //可选项，下一页，默认１
        'next_page': 1
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'friend_uid': [
            ]
        }
    
    }

#好友详情查询接口

    url: /$(appname)/user/friend/query/detail

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'friend_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'friend': {
            'friend_uid': '',
            'name': '',
            'nickname': '',
            'sex': '',
            'age': '',
            'info': '',
            'birthday': ''
            }
        }
    
    }

#新的好友态列表
    url: /$(appname)/user/new_friend/query

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
        'status': 'waiting',
    
         //可选项，下一页，默认１
        'next_page': 1
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'friend_uid': '',
        }
    }
    


#添加好友

    url: /$(appname)/user/friend/add

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'friend_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'status': '' //好友申请状态
    }

#删除好友

    url: /$(appname)/user/friend/remove

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'friend_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'}
    }