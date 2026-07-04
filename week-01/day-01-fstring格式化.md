from datetime import datetime  
name = 'Ben'  
age = 23  
f = 1.234567  
chance = 0.355  
price = 12345.68  
now = datetime.now()  
table = ['apple', 'tomato']  
d = {'a': 'apple', 'b': 'banana'}  
  
# 1.普通格式化输出  
print(f"我叫{name}, 我{age}")  
# 2.可以加入合规的运算  
print(f"明年我{age + 1}岁")  
# 3.保留小数点后几位(.n)  
print(f"保留3位小数{f:.3f}")  
# 4.百分数和保留几位小数  
print(f"概率为{chance:.1%}")  
# 5.千分位(,) 用于财务  
print(f"今年收入{price:,}元")  
print(f"今年收入{price:,.2f}元")  
# 6.左右居中对齐  
print(f"[{'左对齐':<20}]")  # 左对齐宽度20 [左对齐                 ]print(f"[{'右对齐':>20}]")  
print(f"[{'居中':-^20}]")  # [---------居中---------]  '-'为填充  
# 7.用0扩充，0Nd  
print(f"{5:03d}")  # 005  
print(f"{now.month:02d}/{now.date():02d}")  
# 8.列表和字典取值  
print(f"I like {table[1]}")  
print(f"My mom like {d['a']}")  
# 9.调用函数和方法  
print(f"大写：{name.upper()}，长度：{len(name)}")  
# 10.日期时间格式化(%加年月日时分秒首字母大写)  
print(f"{now:%Y-%M-%D %H:%M:%S}")  
# 11.调试模式（= 语法)  
print(f"{name=},{age=}")  
# 12.多行 f-stringprint(f"""  
姓名：{name}  
年龄：{age}岁  
价格：¥{price:,.2f}  
""")