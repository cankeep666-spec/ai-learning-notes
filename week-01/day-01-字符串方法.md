s = 'Hello World, Welcome to python. '  
# 大小写替换类  
s.upper()  # 全部变成大写  
s.lower()     # 全部变成小写  
s.capitalize()  # 首字母全变成小写  
s.title()           # 首字母全变成大写  
s.swapcase()  # 大写变小写，小写变大写  
  
# 去除符号类  
s.strip()    # 去除字符串两端空格  
s.lstrip()   # 去除字符串左边空格  
s.rstrip()   # 去除字符串右边空格  
s.strip('@')  # 去除指定符号  
  
# 分割与拼接类  
s.strip().split()  # 去除字符串两端空格并按空格分割  
s.split('l', 2)      # 按'l'分割两次，第二个参数代表分割次数  
s.split(',')       # 按指定符号分割  
d = '-'.join(['2026', '7', '4'])  # 用 - 将2026，7，4连接起来  
  
# 查找与替换类  
s.find('World')  # 查找word返回索引，没有则返回-1  
s.index('World')  # 返回索引，没有则返回Value Error  
s.rfind('.')  # 从右往左找，通常用于找文件名后缀  
s.count('o')  # 计算o的数量  
e = s.replace('word', 'hello')  # 将字符串中world改成hello，但原字符串没有变  
  
table = str.maketrans('aeiou', '12345')  # 用元组批量替换,a用1替换，e用2  
s.translate(table)  
  
# 判断  
s.strip().startswith('Hello')  # 判断开头  
s.strip().endswith('.')  # 判断结尾  
s.isalnum()  # 判断数字或字母  
s.isalpha()  # 判断是否全是字母  
s.isdigit()  # 判断是否全是数字  
s.isspace()  # 判断是否纯空白  
s.isupper()  # 判断是否全是大写  
s.islower()  # 判断是否全是小写  
s.istitle()  # 判断是否为标题格式(首字母大写)  
  
# 格式化  
name = "Alice"  
age = 25  
print(f"{name} is {age} years old")  
print("{} is {} years old".format(name, age))  
print("{n} is {a} years old".format(n=name, a=age))  
  
'42'.zfill(5)  # 用0补齐5位数，'00042'  
  
# 编码转换  
m = s.encode()  # 将字符串转为二进制编码  
n = m.decode()  # 解码