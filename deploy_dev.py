# -*- coding: utf-8 -*-
'''
线上打包脚本,主测试分支,打包测试时拉取develop分支
1.更新源码
2.备份老版本js
3.重新打包生成新的bundle.[hash].js
4.生成新的index.html
'''
import os, datetime

def yieldcommand(cmd):
    r = os.popen(cmd)
    l = r.readline()
    while l:
        l = l[0:-1]
        print '>>>%s' % l
        yield l
        l = r.readline()

def findjshash():
    hash = None
    for l in yieldcommand('ls assets/*.js'):
        if l.startswith('assets/bundle') and l.endswith('.js'):
            hash = l.split('.')[1]
            break
    return hash

def findbundlejs():
    bundeljs = None
    for l in yieldcommand('ls assets/*.js'):
        if l.startswith('assets/bundle') and l.endswith('.js'):
            bundeljs = l
            break
    return bundeljs

def findoldbundlejs(hash):
    bundeljs = None
    for l in yieldcommand('ls assets/*.js'):
        if l.startswith('assets/bundle') and l.endswith(hash+'.js'):
            bundeljs = l
            break
    return bundeljs


def findcommonjs():
    commonjs = None
    for l in yieldcommand('ls assets/*.js'):
        if l.startswith('assets/common') and l.endswith('.js'):
            commonjs = l
            break
    return commonjs

def findoldcommonjs(hash):
    commonjs = None
    for l in yieldcommand('ls assets/*.js'):
        if l.startswith('assets/common') and l.endswith(hash+'.js'):
            commonjs = l
            break
    return commonjs

def stash():
    print '-------------> start stash workspace '
    for l in yieldcommand('git stash'):
        pass
    print '-------------> finish '

def pull():
    print '-------------> start pull the lastest verson from develop branch'
    for l in yieldcommand('git add --all'):
        pass
    for l in yieldcommand('git commit -m"pull"'):
        pass
    for l in yieldcommand('git pull origin develop'):
        pass
    print '------------->pull finish '

def initlibs():
    print '-------------> start install the libs depended'
    for l in yieldcommand('npm install'):
        pass
    print '-------------> finish '

def backup(hash):
    print '-------------> start backup old *.[hash].js'
    # 先找到需要备份的js文件

    if not hash:
        print '-------------> not need to backup'
    else:
        commonjs = findoldcommonjs(hash)
        bundlejs = findoldbundlejs(hash)
        print '-------------> found old file with hash: %s' % hash
        os.popen('mkdir -p assets/history; mv %s assets/history' % commonjs)
        os.popen('mkdir -p assets/history; mv %s assets/history' % bundlejs)
        print '-------------> backup %s to assets/history' % bundlejs
        print '-------------> backup %s to assets/history' % commonjs
    print '-------------> finish '


def package():
    # 打包
    print '------------->开始打包新的js文件'
    for l in yieldcommand('npm run deploy'):
        pass
    print '-------------> js文件打包成功 '


def gennewhtml():
    print '------------->开始生成新的index.html文件'
    # 找到最新生成bundlejs文件
    commonjs = findcommonjs()
    bundlejs = findbundlejs()
    # 生成新的index.html
    templatefile = open('assets/template.html', 'rb')
    indexfile = open('assets/index.html', 'wb')
    c = templatefile.read()
    c = c.replace('__commonjs__', commonjs.replace('assets/', ''))
    c = c.replace('__bundlejs__', bundlejs.replace('assets/', ''))
    indexfile.write(c)
    indexfile.close()
    templatefile.close()
    print '-------------> 生成index.html成功 '

def publish():
    print '------------->打包文件push到git'
    for l in yieldcommand('git add --all'):
        pass
    for l in yieldcommand('git commit -m"上传新的打包文件"'):
        pass
    for l in yieldcommand('git push origin develop'):
        pass
    print '------------->js文件上传成功'

if __name__ == '__main__':
    pull()
    initlibs()
    hash = findjshash()
    package()
    backup(hash)
    gennewhtml()
    publish()




