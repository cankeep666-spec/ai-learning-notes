"""  
闭包:1.嵌套(内层函数)  
2.引用外层作用域的自由变量  
3.内层函数脱离外层函数的执行环境,被外层持久引用比如被return出去,被赋值,被传参  
不算闭包的例子:内层函数完全不使用外层变量,内层用到外层变量但没有流出外部  
"""  
  
# 定义一个简单的装饰器  
def simple_decorator(func):     # 传入一个函数作为参数  
    # 包装原始函数的内部函数  
    def wrapper():  
        print("即将执行函数...")  
        func()                  # 执行原始函数  
        print("函数执行完毕。")  
    return wrapper  
  
# 使用装饰器  
@simple_decorator  
def greet():  
    print("你好！")  
  
# 调用被装饰的函数  
greet()  
  
# 简单计时装饰器(不带参数,少一层嵌套)  
import time  
def timer(fun):  
    def wrapper(*args, **kwargs):  
        start_time = time.time()  
        result = fun(*args, **kwargs)  # 引用外层作用域的自由变量fun函数  
        end_time = time.time()  
        print(f"{fun}运行时间为{end_time  - start_time}")  
        return result   # 内层函数脱离外层函数的执行环境时,变量被return出去  
    return wrapper  
  
  
@timer  
def time_texst():  
    time.sleep(1)  
    return '结束'  
  
time_texst()  
  
# 重试装饰器  失败后自动重试，最多重试 max_attempts 次，每次间隔 delay 秒(带参数多一层嵌套)  
def retry(max_attempts=3, delay=1):  
    def decorator_try(fun):  
        def wrapper(*args, **kwargs):  
            for i in range(1, max_attempts+1):  
                try:  
                    return fun(*args, **kwargs)  
                except Exception as e:  
                    print(f"第 {i} 次失败: {e}")  
                    if i == max_attempts:  
                        raise  
                    time.sleep(delay)  
        return wrapper  
    return decorator_try  
  
import random  
  
@retry(max_attempts=3, delay=1)  
def retry_test():  
   if random.random() < 0.6:  
       raise ConnectionError('网络超时')  
   return "数据获取成功"  
  
retry_test()