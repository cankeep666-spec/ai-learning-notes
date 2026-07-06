dict1 = {'name': 'gus', 'age': 20, 'city': 'ShenZhen'}  
  
# get(key,default)  返回对应key的值,如果key不存在则返回默认值  
print(dict1.get('high', 'nodata'))  
# 用于词频统计字典  
freq = {}  
list1 = ['a', 'a', 'b', 'a', 'c']  
for i in list1:  
    freq[i] = freq.get(i, 0) + 1  
    print(freq)  
  
# setdefault(key,default)  返回对应key的值,如果key不存在则把默认值写入字典,没传默认值参数写入None  
print(dict1.setdefault('high', 182))  
# pop(key,default) 删除key和对应value,并返回value 如果没有对应key返回默认值,如果没有key且没传默认值则报错  
a = dict1.pop('city', 'no key')  
# items() 用于遍历字典输出元组(key, value)的视图  
print(dict1.items())  
for k, v in dict1.items():  
    print(f"{k},{v}")  
  
# keys() 返回所有key的视图  
print(dict1.keys())  
# values()  返回所有value的试图  
print(dict1.values())  
# updade() 批量更新合并字典,有则覆盖(key对应value值会被覆盖),无则添加  
dict1.update({'name': 'jack', 'weight': 70})  
  
# 字典的传参形式  
d = {"a": 1}  
d.update({"b": 2, "c": 3})           # 传字典  
d.update(d=4, e=5)                   # 传关键字参数  
d.update([("f", 6), ("g", 7)])       # (key,value)元组视图传参  
print(d)   # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7}