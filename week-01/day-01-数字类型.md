# 整数  
a = 1  
b = 2  
print(a+b, a-b, a*b, a/b)  
print(b // a)  
print(a % b)  
print(b ** 3)  
type(a)  
  
# 浮点数  
c = 4.6  
d = 2  
print(c+d)  
print(c*d)  
print(c/d)  
print(c**0.5)  
print(0.1+0.2)   # 不等于0.3，应为二进制无法精确表示十进制小数,使用round函数计算  
round(0.1+0.2)  
type(c)  
int(c)  # 浮点数转整数会截断  
  
# 复数  
e = 1 + 3j  
f = 2 - 1j  
print(e+f, e-f, e*f, e/f)  
print(e.real, e.imag, abs(e), e.conjugate())  # 实部，虚部，模，共轭  
complex(1, 2)  # 构造复数  
  
# 布尔值，int的子类所以可以参与运算  
g = True  
h = False  
type(g)  
print(g+h, g-h)  
# 逻辑运算  
print(g and h, g or h, not g)  
# 比较运算产生布尔值  
print(10 > 5, 1 == 2)  
print(bool(0.0))  # 转bool非0非空就是True