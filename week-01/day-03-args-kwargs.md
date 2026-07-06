"""  
  *args  接收任意数量的位置参数并打包成元组  
  **kwargs  接收任意数量的键值参数并打包成字典  
"""  
#固定参数 + *args + **kwargsdef register(name, *scores, **info):  
    """注册一个学生，必须有名字，可以有多个成绩和其他信息"""  
    print(f"姓名: {name}")  
    if scores:  
        print(f"成绩列表: {scores}")  
        print(f"平均分: {sum(scores)/len(scores):.1f}")  
    if info:  
        print(f"其他信息: {info}")  
  
register("张三", 90, 85, 95, city="深圳", grade="A")  
# 万能日志生成  
def log(message, **detail):  
    print(f'log---task:{message}')  
    for k, v in detail.items():  
        print(f'{k}:{v}')  
  
  
log('用户登入', name='gus', pw=123456, ip='127.0.0.1')  
log('上传资料', name='EnglishBook', size='2Mb', time='2s')  
# 可选参数聚合,如url拼接  
def build_url(base, **params):  
    if not params:  
        return base  
    query = "&".join(f'{k}={v}' for k, v in params.items())  
    return f'{base}?{query}'  
  
  
print(build_url('api/user', page=1, size=10, sort="name"))