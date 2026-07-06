# get的简单介绍  
dict1 = {'name': 'jack', 'age': 25}  
a = dict1.get('city', 0)  # get用于预防字典取值时key不存在时的报错,key存在返回对应value不存在返回0  
  
# defaultdict访问不存在的 key 时，自动用工厂函数生成默认值  
from collections import defaultdict  
defaultdict(int)  # 创建一个value为int类的字典,访问key发现不存在,自动调用int()并把值赋给key,int()=0  
  
# 写一个函数：输入句子，返回单词频率字典（用 get + defaultdict）  
names = ['jack', 'gus', 'jack', 'white', 'pink', 'white', 'jack']  
freq = {}  
# freq字典构建,因为字典freq是空的,所以第一次不管哪个key都返回0,freq.get('jack', 0) = 0再加1并赋值给'jack'这个key  
for name in names:  
        freq[name] = freq.get(name, 0) + 1  
        print(freq)  
# defaultdict写法  
freq2 = defaultdict(int)  
for name in names:  
        freq2[name] += 1  
print(freq2, dict(freq2))