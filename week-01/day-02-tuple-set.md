# tuple元组不可变实验  
t = (3, 4, 5)  # 单元组必须加逗号例如 t = (3,)try:  
    t[0] = 12  
except TypeError as e:  
    print(f"修改失败{e}")  
try:  
    t.append(6)  
except AttributeError as e:  
    print(f"修改失败{e}")  
try:  
    del t[0]  
except TypeError as e:  
    print(f"修改失败{e}")  
  
# set去重实验  
s = {1, 1, 2, 3, 3, 4, 5, 6, 6, 7}  
print(s)  # {1, 2, 3, 4, 5, 6, 7}  所以可以将列表转为set用来去重  
# 字符串去重（注意字符顺序会打乱）  
text = "hello world"  
print(f"字符串去重: {set(text)}")  # {'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'}  
# 保留顺序的去重技巧  
print(f"保留顺序: {''.join(dict.fromkeys(text))}")  # 'helo wrd'  
  
# 集合运算  
A = {1, 3, 5, 7, 9, 10}  
B = {2, 3, 5, 8, 10, 18, 22}  
  
# 交集、并集、差集  
print(A & B, A.intersection(B))  
print(A | B, A.union(B))  
print(A - B, A.difference(B))