"""  
enumerate(list, start_index)  同时返回索引和值,用于遍历列表和返回索引或者编号(因为可以设置起始索引)  
zip(list1, list2)  同时遍历多个列表  
list1 = ['alex', 'gus', 'jack']  
list2 = [1, 2, 3, 4]  
print(list(zip(list1, list2)))   输出[('alex', 1), ('gus', 2), ('jack', 3)]  
for name, age in zip(list1, list2):  
    print(name, age)     输出      alex 1                                  gus 2                                  jack 3"""  
  
  
# 1. 遍历列表并编号  
items = ["苹果", "香蕉", "橘子"]  
# for i in range(len(items)):  
#     print(f"{i+1}. {items[i]}")  
for i, name in enumerate(items, 1):  
    print(i, name)  
  
# 2.enumerate + zip 组合  
names = ["Alice", "Bob", "Charlie"]  
scores = [90, 85, 95]  
for i, (name, scores) in enumerate(zip(names, scores), 1):  
    print(f'第{i}名: {name},{scores}')  
# 第1名: Alice, 90分  
# 第2名: Bob, 85分  
# 第3名: Charlie, 95分