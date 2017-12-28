#用户粉丝关系

#关注方列表查询接口

    url: /$(appname)/user/follower/query

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
        
        'follower_uid': '',
        //可选项，下一页，默认１
        'next_page':1
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'follower_uid': [
            ]
        }
    
    }

#关注方详情查询接口

    url: /$(appname)/user/follower/query/detail

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'follower_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'follower': {
            'follower_uid': '',
            'name': '',
            'nickname': '',
            'sex': '',
            'age': '',
            'info': '',
            'birthday': ''
        }
    
    }

#被关注方列表查询接口

    url: /$(appname)/user/following/query

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
        
        'following_uid': '',
        //可选项，下一页，默认１
        'next_page':1
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'following_uid': [
            ]
        }
    
    }
    
#被关注方详情查询接口

    url: /$(appname)/user/following/query/detail

    request jsondata：
    {
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'following_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'},
        'data': {
            'following': {
            'following_id': '',
            'name': '',
            'nickname': '',
            'sex': '',
            'age': '',
            'info': '',
            'birthday': ''
            }
        }
    
    }

#添加关注

    url: /$(appname)/user/follow/add

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'follower_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'}
    
    }

#取消关注

    url: /$(appname)/user/follow/remove

    request jsondata：
    ｛
        'appid':1,
        'platform': 'ios/android/webapp',
        'uid': '',
        'token': '',
    
        'follower_uid': ''
    }

    response:
    {
        'meta': {'code': 200, 'message': 'ok'}
    }