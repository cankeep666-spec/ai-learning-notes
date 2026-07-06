""" python作用域的LEGB规则  
Local        内层函数  
Encoding     外层函数     要在内层函数修改外层函数变量时引入nonlocal  
Global       模块全局     要在局域修改全局变量时引入global  
Built_in     内置  
"""  
x = 100  
  
def outer():  
    x = 99  # 并没有改变全局变量x而是创造了一个本地变量x作用域为外层和内层,内层函数可以读取或用nonlocal声明后修改,但它还是存在外层  
    # global x    # 声明我要用全局变量x  
    # x = 1000    print(f'outer:{x}')  
    def inner():  
        # x = 98     # 并没有改变全局或外层函数里的x变量,而是直接创造了一个本地变量x作用域为内层函数inner()  
        nonlocal x  # 声明我要用外层函数变量x  
        x = 999  
        print(f'outer:{x}')  
    inner()  
  
outer()  
print(f'global:{x}')