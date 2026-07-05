list1 = [1, 2, 3, 4, 5]  
list2 = [6, 7, 8]  
  
# 增  
list1.append(99)  # 在列表末尾追加 list1 = [1, 2, 3, 4, 5, 99]list1.insert(0, 11)  # 在索引位置插入 list1 = [11, 1, 2, 3, 4, 5, 99]list1.extend(list2)  # 合并两个列表  list1 = [11, 1, 2, 3 ,4 ,5 , 99, 6, 7, 8]  
# 删  
pop1 = list1.pop(6)  # 按索引删除并返回删除项，不传参默认删除返回最后一项 list1 = [11, 1, 2, 3, 4, 5, 6, 7, 8]list1.remove(11)  # 按值删除第一个匹配的项  list1 = [1, 2, 3, 4, 5, 6, 7, 8]list2.clear()  # 清空列表  list2 = []  
# 改  
list2 = [1, 2, 3]  
list2[0] = 6  # list2 = [6, 2, 3]  
list2[1:3] = [7, 8]  # list2 = [6, 7, 8]  
  
# 查  
list1.index(1)  # 查找第一个值为1的项返回它的索引  
list1.index(4, 2)  # 从索引2开始找第一个值为4的项返回它的索引  
list1.count(6)  # 计算列表中项为6的个数  
  
# 排序  
list2.sort()  # 升序排序(改变原列表)  
list2.sort(reverse=True)  # 倒序排序(改变原列表)  
  
list3 = sorted(list2)  # 升序排序(不改变原列表)  
list4 = sorted(list2, reverse=True)  # 倒序排序(不改变原列表)  
  
# 判断  
print(2 in list1)