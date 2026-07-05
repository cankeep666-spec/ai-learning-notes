# 列表推导式基本结构:[表达式 for 变量 in 可迭代对象 if 过滤条件]  
  
# 1.基础推导式  
print([x+1 for x in range(3)])  
# 2.加过滤条件  
print([x*2 for x in range(10) if x % 2 == 0])  
print(['偶数' if x % 2 == 0 else '奇数' for x in range(8)])  # 当过滤条件用到if-else它就会放到for前面  
# 3.在字符串中利用  
name = ['apple', 'banana', 'tomato', 'potato']  
print([i.upper() for i in name if len(i) > 4])  
# 4.双循环嵌套  
print([(x, y) for x in [1, 2] for y in ['a', 'b']])  
# 5.拆解嵌套列表  
list1 = [[1, 2, 3], ['a', 'b', 'c'], ['!', '@', '#']]  
print([num for row in list1 for num in row])  
# 6.元组解包加条件过滤  
list2 = [('jack', 23), ('gus', 26), ('curry', 37)]  
print([name for name, age in list2 if age < 30])  
  
# 集合,字典推导式和生成器表达式  
# {x for x in range(9) if x % 2 == 0}  
# {x: x**2 for x in rang(6)}  
# (x*2 for x in range(8) if x % 3 == 0)