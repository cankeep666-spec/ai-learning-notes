1.打开终端，进入项目根目录下，输入 python -m venv venv
意思是调用python自带的venv库创建文件夹名字为venv用于存放虚拟环境，所以第二个venv可以改成别的名字。
回车后根目录下会生成venv文件夹，里面装着独立、纯净的python解释器和它的pip、库安装路径。
venv文件夹的结构：venv/bin (或Scripts)   存放python解释器副本，pip、activate脚本
venv/lib/python311/site-packages  存放第三方包
venv/pyvenv.cfg   配置文件，
里面有一行 include-python-site-packages=false,说明虚拟环境隔绝了系统已安装的包

2.输入 venv\Scripts\activate     用于激活虚拟环境
终端返回 venv,说明python和pip指向隔离环境里的版本,这时使用pip安装的包都会存入隔离环境
输入 pip freeze > requirements.txt  用于一键生成环境依赖
输入 deactivate 退出隔离环境，终端指向系统全局python环境

3.使用虚拟环境的好处
	1.隔离项目环境，解决两个项目使用不同版本库在一台电脑上跑不了的问题
	2.你环境安装的包,不会影响别人和服务器
	3.可以生成环境依赖清单，方便复现


