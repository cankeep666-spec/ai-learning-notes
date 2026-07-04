// ============================================================
// DATA: 24-Week AI Application Engineer Curriculum
// All Chinese quotation uses 「」 to avoid JS string conflicts
// ============================================================

const CURRICULUM = [
  // ===== MONTH 1 =====
  { week:1, month:"第1个月：Python 工程基础", theme:"Python 深度筑基",
    desc:"把 Python 从「会用」练到「精通」，建立工程思维。这一周决定你后面能走多快。",
    objectives:["熟练 Python 所有核心数据类型和操作","掌握文件 I/O、异常处理、虚拟环境","能用 list/dict/set 推导式写出简洁代码","建立 Pythonic 代码审美"],
    days:[
      {day:1, title:"环境搭建 + 数字/字符串/布尔", tasks:[
        "安装 Python 3.11+ 和 VS Code（配置 Python 插件、自动格式化）","用 python -m venv 创建虚拟环境，理解为什么要隔离环境","在终端运行 python 交互模式，把整数、浮点、复数、布尔值全部操作一遍","写代码实验：字符串的 20+ 个方法（split/join/strip/replace/find/format...）","用 f-string 写 10 种不同的格式化输出","提交今日代码到 GitHub"
      ]},
      {day:2, title:"列表/元组/集合 + 推导式", tasks:[
        "手写 list 的增删改查方法：append/pop/insert/remove/sort/sorted","理解切片 [start:stop:step]，写出 10 个切片示例","用列表推导式替代 for 循环： [x*2 for x in range(10) if x%2==0]","实验 tuple 不可变、set 去重和集合运算（交集/并集/差集）","写一个函数：输入句子，返回单词频率字典（用 get + defaultdict）","LeetCode 练手：Two Sum, Valid Anagram, Group Anagrams（3 题）"
      ]},
      {day:3, title:"字典/循环/函数", tasks:[
        "字典操作大全：get/setdefault/pop/items/keys/values/update","用 *args 和 **kwargs 写灵活的函数","理解作用域：global/nonlocal/enclosing 变量","写装饰器雏形：一个计时装饰器和一个重试装饰器","用 enumerate/zip 重写你之前写的所有 range(len(...)) 循环","LeetCode：Roman to Integer, Longest Common Prefix"
      ]},
      {day:4, title:"文件 I/O + 异常处理 + 上下文管理器", tasks:[
        "用 with open 读写文件（r/w/a/r+/rb），理解编码（utf-8/gbk）","写一个函数递归遍历目录，统计所有 .py 文件行数","用 try/except/else/finally 处理 5 种不同异常","自定义异常类，理解异常继承链","实现一个上下文管理器类（__enter__/__exit__）和一个 contextlib 版本","用 json/csv 模块读写数据文件"
      ]},
      {day:5, title:"面向对象编程（上）", tasks:[
        "写一个完整的类：__init__/__str__/__repr__/__eq__","理解 @property/@setter/@classmethod/@staticmethod 的用法和区别","实现 __slots__ 减少内存占用","写一个简单的继承链（3 层），调用 super()","理解 MRO（方法解析顺序），用 Class.__mro__ 验证"
      ]},
      {day:6, title:"面向对象编程（下）+ 模块", tasks:[
        "实现一个抽象基类（ABC）和至少 2 个子类","理解 if __name__ == '__main__' 的真正含义","组织一个 Python 包（__init__.py 的多种用法）","用相对导入和绝对导入组织代码","理解 __all__ 变量的作用","用 dataclass 重构之前写的类"
      ]},
      {day:7, title:"本周复习 + 综合练习", tasks:[
        "写一个命令行地址簿：增删改查联系人，存 JSON 文件","代码规范检查：用 black/flake8 格式化本周所有代码","写本周学习笔记（至少 500 字），发布到掘金/知乎/博客","整理本周的 Git commit 记录，确保每天都有提交","预习：阅读 Python typing 模块文档"
      ]}
    ]},

  { week:2, month:"第1个月：Python 工程基础", theme:"类型系统 + 测试 + 异步入门",
    desc:"建立类型安全意识，学会写测试，理解并发模型差异。",
    objectives:["全面使用类型标注（type hints）","会用 pytest 写单元测试和参数化测试","理解 async/await 异步模型","能区分线程/进程/协程的适用场景"],
    days:[
      {day:1, title:"类型标注（Type Hints）", tasks:[
        "学习 typing 模块：List/Dict/Optional/Union/Tuple/Callable","给上周地址簿项目的所有函数加上类型标注","用 mypy 做静态类型检查，修复所有类型错误","理解 TypeAlias、NewType 的使用场景","阅读 typing 模块官方文档的前半部分"
      ]},
      {day:2, title:"高级类型 + 泛型", tasks:[
        "理解 Generic、TypeVar、Protocol 的用法","写一个泛型函数 def first[T](xs: list[T]) -> T","用 TypedDict 定义 JSON 数据结构的类型","理解 TYPE_CHECKING 避免循环导入","实验 pydantic 的 BaseModel（为 FastAPI 做准备）"
      ]},
      {day:3, title:"测试基础（pytest）", tasks:[
        "安装 pytest，写第一个测试文件 test_xxx.py","用 assert 写 10 个测试用例（覆盖正常/异常/边界）","用 @pytest.mark.parametrize 写参数化测试","用 @pytest.fixture 管理测试数据","理解 conftest.py 的作用","测试上周的地址簿项目，目标覆盖率 > 70%"
      ]},
      {day:4, title:"测试进阶 + 调试", tasks:[
        "用 pytest-cov 查看测试覆盖率","用 unittest.mock 替换外部依赖（mock/open/requests）","学习 pdb 调试：breakpoint()、n/s/c/w 命令","用 VS Code 的 debugger 调试一个 bug","写一个测试：验证函数抛出特定异常 pytest.raises(Exception)"
      ]},
      {day:5, title:"并发概念 + 线程", tasks:[
        "理解 GIL（全局解释器锁）是什么、影响什么","用 threading 模块下载 10 个 URL（I/O 密集型任务的正确姿势）","用 concurrent.futures.ThreadPoolExecutor 简化线程管理","理解竞态条件，用 Lock 保护共享变量","画出线程的生命周期图"
      ]},
      {day:6, title:"异步编程（asyncio）", tasks:[
        "理解 async/await 语法（与生成器的关系）","用 asyncio 改写昨天的下载器，对比性能","学习 asyncio.gather/create_task/wait_for","用 aiohttp 发异步 HTTP 请求","理解事件循环（event loop）的概念"
      ]},
      {day:7, title:"本周复习 + 性能对比实验", tasks:[
        "写一个脚本：用同步/多线程/异步三种方式下载 50 个 URL","记录三种方式的耗时，写一篇对比博客","复习所有类型标注知识点，用 mypy 严格模式检查代码","LeetCode：3 道字符串/数组题","整理笔记，发布本周学习总结"
      ]}
    ]},

  { week:3, month:"第1个月：Python 工程基础", theme:"FastAPI 后端开发（上）",
    desc:"掌握现代 Python Web 框架，写出带文档、带校验的 REST API。",
    objectives:["能用 FastAPI 写出完整的 CRUD REST API","理解 Pydantic 数据校验模型","会用自动生成的 Swagger 文档调试 API","掌握路径参数/查询参数/请求体的设计规范"],
    days:[
      {day:1, title:"FastAPI 入门", tasks:[
        "安装 FastAPI + uvicorn：pip install fastapi uvicorn[standard]","写第一个 API：@app.get('/') 返回 {message: 'hello'}","用 uvicorn main:app --reload 跑起来","访问 http://localhost:8000/docs 看自动生成的 Swagger 文档","理解 ASGI 和 Uvicorn 的关系"
      ]},
      {day:2, title:"路径参数 + 查询参数", tasks:[
        "写 GET/POST/PUT/DELETE 五个端点的 CRUD","路径参数类型校验：@app.get('/users/{user_id}')","查询参数默认值、必填、枚举类型","用 response_model 控制返回数据的字段","理解 HTTP 状态码的语义（200/201/204/400/404/422/500）"
      ]},
      {day:3, title:"Pydantic 模型深度使用", tasks:[
        "写 UserCreate/UserUpdate/UserResponse 三个 Schema","用 Field 加约束：min_length/max_length/gt/lt/regex","理解 Optional 字段 vs 必填字段","嵌套模型（一个模型包含另一个模型）","用 model_dump() / model_validate() 序列化/反序列化"
      ]},
      {day:4, title:"请求体 + 表单 + 文件上传", tasks:[
        "JSON 请求体：@app.post + Pydantic 模型","表单数据：Form(...)","文件上传：UploadFile（单文件/多文件）","理解 Content-Type 头（application/json vs multipart/form-data）","用 HTTPie 或 curl 测试所有端点"
      ]},
      {day:5, title:"错误处理 + 日志", tasks:[
        "自定义 HTTPException（404/400/401）","全局异常处理器 @app.exception_handler","用 logging 模块记录请求日志","结构化日志：每条日志包含时间/级别/请求路径/用户","理解中间件（middleware）的概念"
      ]},
      {day:6, title:"项目：Todo API", tasks:[
        "写一个完整的 Todo List API（内存存储）","功能：创建/列出/更新/删除 Todo，标记完成/未完成","添加搜索功能（按标题模糊搜索）","添加分页（limit + offset）","写完整的 docstring + response_model，让 Swagger 文档好看"
      ]},
      {day:7, title:"本周复习 + API 测试", tasks:[
        "用 pytest + httpx（或 TestClient）给 Todo API 写测试","测试覆盖：正常流程 + 不存在的 ID + 空列表 + 边界值","用 httpie 录一个 5 分钟的 API 演示（终端录屏）","写一篇 FastAPI 入门教程博客","代码全部 push 到 GitHub"
      ]}
    ]},

  { week:4, month:"第1个月：Python 工程基础", theme:"数据库 + Docker 入门",
    desc:"数据持久化和容器化是现代应用的基本功。",
    objectives:["能用 SQL 写增删改查、联表、聚合查询","用 SQLAlchemy ORM 操作 PostgreSQL","理解数据库迁移（migration）的作用","能把应用 Docker 化并跑起来"],
    days:[
      {day:1, title:"SQL 基础", tasks:[
        "安装 PostgreSQL，用 psql 连接数据库","CREATE TABLE：定义字段类型、主键、NOT NULL、DEFAULT","INSERT/UPDATE/DELETE 数据的各种写法","SELECT + WHERE + ORDER BY + LIMIT 组合查询","理解 NULL 的三值逻辑（IS NULL vs = NULL）"
      ]},
      {day:2, title:"SQL 进阶", tasks:[
        "JOIN：INNER/LEFT/RIGHT/FULL，画 Venn 图理解","GROUP BY + HAVING + 聚合函数（COUNT/SUM/AVG/MAX/MIN）","子查询和 CTE（WITH ... AS ...）","索引基础：什么时候该建索引，什么时候不该","练习：在 SQLZoo 或 LeetCode SQL 做 10 题"
      ]},
      {day:3, title:"SQLAlchemy ORM 入门", tasks:[
        "安装 SQLAlchemy + asyncpg/psycopg2","理解 Engine/Connection/Session 的关系","定义 Model：继承 DeclarativeBase，映射 Python 类到表","用 Session 做 CRUD（add/query/filter/update/delete）","理解 session.commit() 和 session.rollback()"
      ]},
      {day:4, title:"SQLAlchemy 进阶 + Migration", tasks:[
        "关系建模：一对多(relationship)、多对多(association table)","懒加载 vs 急加载（lazy/eager loading）","安装 Alembic，生成第一次 migration","修改模型 → 生成 migration → 升级数据库的完整流程","理解 Alembic 的 upgrade/downgrade 机制"
      ]},
      {day:5, title:"Docker 基础", tasks:[
        "安装 Docker Desktop","理解镜像(Image)和容器(Container)的区别","拉取并运行：docker run -d -p 5432:5432 postgres","写第一个 Dockerfile（把你的 Todo API 打包成镜像）","常用命令：build/run/ps/logs/exec/stop/rm"
      ]},
      {day:6, title:"Docker Compose", tasks:[
        "写 docker-compose.yml：FastAPI 容器 + PostgreSQL 容器","理解 volumes（数据持久化）和 networks（容器通信）","用环境变量 .env 管理数据库连接字符串","docker compose up -d 一键启动整个应用","把上周的 Todo API 改成用 PostgreSQL 存储"
      ]},
      {day:7, title:"本周复习 + 全栈整合", tasks:[
        "Todo API 全栈化：FastAPI + PostgreSQL + Docker Compose","写完整的 README（包含架构图和启动步骤）","添加健康检查端点 /health（检查数据库连接）","用 pytest 写集成测试（用真实数据库或 testcontainers）","发布本周学习总结"
      ]}
    ]},

  // ===== MONTH 2 =====
  { week:5, month:"第2个月：后端工程化", theme:"FastAPI 进阶 + 认证授权",
    desc:"学习生产级 API 的必备技能：认证、中间件、依赖注入。",
    objectives:["掌握 FastAPI 依赖注入系统","实现 JWT 认证 + OAuth2 流程","理解中间件链和请求生命周期","写出生产级别的 API 结构"],
    days:[
      {day:1, title:"依赖注入（Depends）", tasks:[
        "理解 FastAPI Depends 的设计思想","写可复用的依赖函数（分页、数据库 session、当前用户）","依赖嵌套：一个依赖依赖另一个依赖","用 yield 实现依赖的清理逻辑（如关闭数据库连接）","对比 FastAPI Depends 和其他框架的 DI 容器"
      ]},
      {day:2, title:"认证基础", tasks:[
        "理解 HTTP Basic Auth 和 Bearer Token 的区别","实现简单的 API Key 认证","理解「不要自己造加密算法」","用 passlib + bcrypt 哈希密码（绝不明文存密码）","写注册和登录接口"
      ]},
      {day:3, title:"JWT 深入", tasks:[
        "理解 JWT 结构：Header.Payload.Signature","用 python-jose 生成和验证 JWT","access token 和 refresh token 的设计","token 过期处理、黑名单策略","把 JWT 认证写成 FastAPI Depends"
      ]},
      {day:4, title:"权限控制", tasks:[
        "实现 RBAC（基于角色的访问控制）：admin/user/guest","用 Depends 实现权限检查装饰器","API 限流（Rate Limiting）的简单实现","理解 CORS 的作用和配置","实现请求 ID 追踪（request_id 贯穿日志）"
      ]},
      {day:5, title:"中间件 + 请求生命周期", tasks:[
        "理解请求生命周期：middleware → router → depends → endpoint","写自定义中间件（计时、日志、错误处理）","理解 ASGI middleware 的执行顺序","用 app.add_middleware 添加 CORS/TrustedHost 等内置中间件","对比 middleware 和 depends 的使用场景"
      ]},
      {day:6, title:"项目结构重构", tasks:[
        "重构 Todo API 为企业级项目结构","api/v1/endpoints/, core/config.py, models/, schemas/, services/, db/","用 Pydantic Settings 管理配置（开发/测试/生产环境）","写统一的 API 响应格式 {code, message, data}","写接口文档的 description/tags/summary"
      ]},
      {day:7, title:"本周复习 + 安全加固", tasks:[
        "审计 Todo API 的安全性（OWASP Top 10 对照）","添加请求体大小限制、SQL 注入防护","用 HTTPie 写一个集成测试脚本（shell 脚本）","写一篇「FastAPI 生产级项目结构」博客","push 代码，README 更新为完整的企业级模板"
      ]}
    ]},

  { week:6, month:"第2个月：后端工程化", theme:"Docker 深度 + Linux 基础",
    desc:"容器化和 Linux 是云原生时代的必备技能。",
    objectives:["写出生产级 Dockerfile（多阶段构建、安全最佳实践）","熟练掌握 Docker Compose 编排多服务","能在 Linux 服务器上独立部署应用","理解基本的网络和安全概念"],
    days:[
      {day:1, title:"Dockerfile 最佳实践", tasks:[
        "多阶段构建：build stage + runtime stage，镜像体积减 80%","选择正确的基础镜像（slim/alpine 的取舍）","layer 缓存优化：先 COPY requirements.txt 再 pip install","用非 root 用户运行容器（USER 指令）",".dockerignore 文件的作用和写法"
      ]},
      {day:2, title:"Docker 网络 + 存储", tasks:[
        "理解 bridge/host/none 网络模式","docker network create 自定义网络，容器间 DNS 通信","volume vs bind mount vs tmpfs 的区别","用 named volume 持久化数据库数据","备份和恢复 Docker volume"
      ]},
      {day:3, title:"Docker Compose 生产模式", tasks:[
        "多服务编排：API + DB + Redis + Nginx","healthcheck：让容器告诉你它是否就绪","depends_on vs 应用层重试的区别","多环境 compose 文件：docker-compose.prod.yml","docker compose config 验证配置"
      ]},
      {day:4, title:"Linux 基础（开发者视角）", tasks:[
        "文件系统结构：/etc /var /opt /tmp /home 干什么的","权限模型：chmod/chown/用户/组/umask","进程管理：ps/top/kill/nohup/systemd","文本处理：grep/awk/sed/sort/uniq/wc 实战","ssh 远程连接：密钥认证、config 文件、端口转发"
      ]},
      {day:5, title:"Shell 脚本", tasks:[
        "写一个部署脚本 deploy.sh（拉代码→构建→重启容器）","理解 exit code、set -e、trap 的作用","用 cron 定时执行任务","环境变量管理：.env vs export vs source","写一个日志清理脚本（保留最近 7 天日志）"
      ]},
      {day:6, title:"Nginx 反向代理 + HTTPS", tasks:[
        "Nginx 作为反向代理：把请求转发到 FastAPI","location/upstream/proxy_pass 的配置","用 Let's Encrypt + certbot 配置免费 HTTPS","理解 SSL/TLS 握手过程（面试高频）","配置 gzip 压缩、静态文件缓存"
      ]},
      {day:7, title:"本周复习 + 云服务器实践", tasks:[
        "在云服务器（阿里云/腾讯云/AWS）上部署 Todo API","完整流程：ssh → 装 Docker → docker compose up → 配置 Nginx → HTTPS","用 curl/浏览器访问你的公网 API","写部署文档（让一个初学者也能照着操作）","本周总结博客：Docker + Linux + 部署实战"
      ]}
    ]},

  { week:7, month:"第2个月：后端工程化", theme:"Git 进阶 + CI/CD + 测试策略",
    desc:"工程化能力是区分初级和高级工程师的关键。",
    objectives:["掌握 Git 的非线性历史操作","能用 GitHub Actions 搭建 CI/CD 流水线","理解测试金字塔（单元/集成/端到端）","建立代码审查（code review）思维"],
    days:[
      {day:1, title:"Git 进阶操作", tasks:[
        "rebase vs merge：理解原理和适用场景","交互式 rebase（squash/fixup/reword/drop）","git reflog：拯救误操作的最后防线","git bisect：二分法定位引入 bug 的 commit","git cherry-pick：把特定 commit 应用到其他分支"
      ]},
      {day:2, title:"Git 工作流", tasks:[
        "理解 Git Flow / GitHub Flow / Trunk-Based Development","写规范的 commit message（Conventional Commits）","Pull Request 的正确姿势：小、聚焦、有描述","Code Review 清单：逻辑/安全/性能/可读性","用 pre-commit hook 自动检查代码格式"
      ]},
      {day:3, title:"GitHub Actions 入门", tasks:[
        "理解 CI/CD 的概念（持续集成/持续部署）","写第一个 workflow：push 时自动跑 pytest","理解 workflow/step/action 的层级关系","设置 Python 版本矩阵测试（3.10/3.11/3.12）","缓存 pip 依赖加速 CI"
      ]},
      {day:4, title:"CI/CD 进阶", tasks:[
        "添加 lint 步骤：black + flake8 + mypy","添加安全扫描：bandit 或 safety","构建 Docker 镜像并推送到容器仓库（Docker Hub/阿里云）","自动部署到云服务器（用 SSH action）","理解蓝绿部署和滚动更新的概念"
      ]},
      {day:5, title:"测试策略", tasks:[
        "理解测试金字塔：单元测试 > 集成测试 > E2E 测试","单元测试：测试单个函数/类的逻辑","集成测试：测试 API + 数据库 + 外部服务一起工作","E2E 测试：模拟用户操作完整流程（了解即可）","测试替身：fake/stub/mock/spy 的区别和使用场景"
      ]},
      {day:6, title:"代码质量工具链", tasks:[
        "配置 ruff（新一代 Python linter，替代 flake8）","配置 pre-commit：自动格式化+检查+类型校验","理解技术债务的概念，建立 TODO/FIXME 标记习惯","用 SonarQube 或 CodeClimate 分析代码质量（了解）","写一个 .pre-commit-config.yaml，队友 clone 即生效"
      ]},
      {day:7, title:"本周复习 + 流水线实践", tasks:[
        "给 Todo API 项目添加完整的 CI/CD 流水线","流水线：lint → test → build docker → deploy","写 CONTRIBUTING.md（代码规范 + PR 流程）","模拟一次 code review：review 自己一周前的代码","本周总结博客：从小白到 CI/CD 自动化"
      ]}
    ]},

  { week:8, month:"第2个月：后端工程化", theme:"后端综合项目 + 第一个月回顾",
    desc:"用一个综合项目串联前 8 周所有技能，查漏补缺。",
    objectives:["独立完成一个全栈后端项目","能部署并提供公网可访问的 API","识别自己的薄弱环节","建立自学能力（官方文档 + 源码 + 社区）"],
    days:[
      {day:1, title:"综合项目设计", tasks:[
        "项目选题（三选一）：\n① 博客 API（文章/标签/评论/用户）\n② 任务管理系统（项目/任务/成员/看板）\n③ 个人知识库 API（笔记/分类/搜索/导出）","设计数据库 ER 图（至少 4 张表）","设计 API 端点列表（至少 15 个）","写项目 README 的计划部分"
      ]},
      {day:2, title:"模型 + 数据库", tasks:[
        "实现所有 SQLAlchemy 模型和关系","写 Alembic migration","写 seed 脚本（填充测试数据）","用 pytest 测试所有模型关系"
      ]},
      {day:3, title:"API 层实现", tasks:[
        "实现全部 CRUD 端点","添加分页、搜索、排序功能","实现用户注册/登录/认证","添加权限检查（只能修改自己的资源）"
      ]},
      {day:4, title:"高级功能 + 测试", tasks:[
        "实现至少一个高级功能：全文搜索/导出/批量操作/缓存","写完整的测试（目标覆盖率 > 80%）","用 TestClient 做集成测试","性能测试：用 wrk/ab 压测 API"
      ]},
      {day:5, title:"Docker 化 + 部署", tasks:[
        "写生产级 Dockerfile（多阶段构建）","写 docker-compose.yml（含健康检查）","部署到云服务器","配置 HTTPS + Nginx 反向代理"
      ]},
      {day:6, title:"CI/CD + 文档", tasks:[
        "配置 GitHub Actions 自动测试 + 部署","写完整的 API 文档（Swagger tags + description）","写项目 README（架构图 + 启动 + 部署 + API 列表）","录一个 3 分钟的 API 演示视频（可选）"
      ]},
      {day:7, title:"8 周回顾 + 查漏补缺", tasks:[
        "回顾前 8 周所有笔记，列出薄弱项","针对薄弱项各做 1 小时强化练习","更新 GitHub Profile（pin 这个项目到首页）","写一篇「8 周从零到全栈 Python 后端」总结博客","调整后续学习计划，确认继续冲刺的决心"
      ]}
    ]},

  // ===== MONTH 3 =====
  { week:9, month:"第3个月：LLM 基础与应用层", theme:"LLM 原理 + API 实战",
    desc:"理解大语言模型的工作原理，掌握 API 调用和流式处理。这是 AI 应用工程师的核心能力起点。",
    objectives:["理解 token/temperature/top-p/context window 等核心概念","能用 Python 调用 Claude API 和 OpenAI API","实现流式输出（streaming）","理解不同模型的性能/成本取舍"],
    days:[
      {day:1, title:"LLM 核心概念", tasks:[
        "阅读 Anthropic 文档：什么是 token？为什么模型按 token 计费？","了解 tokenizer：用 tiktoken 或 anthropic 的 tokenizer 数 token","理解 context window（上下文窗口）及其限制","理解 temperature（温度）控制随机性：0 = 确定，1 = 随机","理解 top_p/top_k 采样的直觉（不需要数学推导）"
      ]},
      {day:2, title:"API 调用实战", tasks:[
        "注册 Anthropic Console / OpenAI Platform，获取 API Key","绝不要把 API Key 提交到 Git！用 .env + .gitignore","用 Python SDK 发送第一个 API 请求","调试：打印 response 对象，理解 choices/message/usage","理解 System Prompt vs User Message 的区别和最佳实践"
      ]},
      {day:3, title:"多轮对话 + 历史管理", tasks:[
        "实现多轮对话：把之前的消息放进 messages 数组","对话历史的 token 管理：超过上下文窗口怎么办？","实现滑动窗口截断策略（保留最后 N 轮对话）","用 summary 压缩历史对话（让 LLM 总结之前的内容）","写一个简单的命令行聊天机器人"
      ]},
      {day:4, title:"流式输出 (Streaming)", tasks:[
        "理解 SSE（Server-Sent Events）和流式输出的原理","用 stream=True 实现逐字输出","对比 Claude 和 OpenAI 的 streaming API 差异","在 FastAPI 中实现 StreamingResponse（为后续项目做准备）","写一个 streaming 版本的命令行聊天机器人"
      ]},
      {day:5, title:"模型选型 + 成本优化", tasks:[
        "理解各模型的定位：Claude Haiku/Sonnet/Opus vs GPT-4o/GPT-4o-mini","什么时候用便宜的快模型？什么时候用贵的大模型？","计算 API 成本：$ per 1K tokens x 你的用量","实现简单的 token 计数和成本追踪","缓存策略：相同 prompt 不重复调用 API"
      ]},
      {day:6, title:"错误处理 + 重试", tasks:[
        "处理 API 调用的常见错误：rate limit/超时/服务不可用/content filter","实现指数退避重试（exponential backoff）","用 tenacity 库优雅实现重试逻辑","日志记录每次 API 调用的延迟和 token 消耗","写一个 LLM 调用封装类（统一 Claude/OpenAI 的接口）"
      ]},
      {day:7, title:"本周复习 + 小项目", tasks:[
        "写一个「AI 代码审查助手」CLI 工具","功能：读 Git diff → 发给 LLM → 输出审查意见（streaming）","发布到 PyPI 或至少 GitHub（README + 安装 + 使用说明）","写一篇「LLM API 实战：从入门到封装」博客"
      ]}
    ]},

  { week:10, month:"第3个月：LLM 基础与应用层", theme:"Prompt Engineering 深度",
    desc:"Prompt Engineering 不是玄学，是一门需要刻意练习的工程技能。好 prompt 和差 prompt 的效果差距可能是 10 倍。",
    objectives:["掌握 few-shot/chain-of-thought/structured output 等核心技巧","能为不同场景设计最优 prompt","理解 prompt 的 token 效率","建立 prompt 调试的系统方法论"],
    days:[
      {day:1, title:"Prompt 基础模式", tasks:[
        "理解 Prompt 的 4 要素：角色/任务/上下文/格式","写 10 个不同角色的 System Prompt，对比输出质量","Few-shot prompting：给 2-3 个示例，大幅提升准确率","Zero-shot vs One-shot vs Few-shot 的适用场景测试","用同一个问题测试 3 种模型，记录差异"
      ]},
      {day:2, title:"Chain of Thought (CoT)", tasks:[
        "理解 CoT：让模型「一步一步思考」","在 prompt 中加 Let's think step by step 的效果对比","Zero-shot CoT vs Few-shot CoT 的准确率差异","读 Anthropic 的 prompt engineering 指南（全文）","用 CoT 解决 3 个复杂推理问题，观察思考链的质量"
      ]},
      {day:3, title:"结构化输出", tasks:[
        "理解为什么需要结构化输出（程序解析 vs 人类阅读）","用 Pydantic + Instructor 或 LangChain 的 with_structured_output","让 LLM 输出 JSON/JSONL/CSV 等结构化格式","处理 LLM 输出不合规的情况（多打了一个逗号/引号）","实现一个「文章→结构化摘要」的 pipeline"
      ]},
      {day:4, title:"Prompt 调试方法论", tasks:[
        "建立 Prompt 版本管理（用 Git 管理 .md 文件）","A/B 测试两个 prompt 的效果差异","量化评估：定义准确率/召回率/格式符合率","写 eval script：自动用测试集评估 prompt 质量","分析 bad case：LLM 在什么情况下会出错？"
      ]},
      {day:5, title:"模板化 + 变量注入", tasks:[
        "用 Jinja2 或 Python string.Template 管理 prompt 模板","设计可复用的 prompt 组件（角色描述、格式说明、示例库）","动态选择 few-shot 示例：根据输入选择最相似的示例","理解和防止 prompt injection（提示词注入攻击）","写一个 PromptManager 类：加载/渲染/版本管理"
      ]},
      {day:6, title:"Advanced Prompt 技巧", tasks:[
        "学习 Self-Consistency：多次采样取多数","学习 React（Reason + Act）模式","学习结构化 CoT：先规划再执行","了解 DSPy（声明式 prompt 优化框架）的概念","用不同技巧解决同一个复杂任务，横向对比"
      ]},
      {day:7, title:"本周复习 + Prompt 库", tasks:[
        "建立自己的 Prompt 模板库（至少 10 个场景）","场景覆盖：总结/翻译/分类/提取/生成/推理/代码审查","每个 prompt 标注：模型/温度/预期输出格式/已知局限","写一篇「Prompt Engineering 系统方法论」博客","开源你的 prompt 模板库到 GitHub"
      ]}
    ]},

  { week:11, month:"第3个月：LLM 基础与应用层", theme:"RAG 架构与实现（上）",
    desc:"RAG 是 80% 企业 AI 项目的核心架构。这周从理论到实现，建立完整的 RAG 知识体系。",
    objectives:["理解 RAG 的完整 pipeline（索引→检索→增强→生成）","能处理多种文档格式（PDF/HTML/Markdown/代码）","掌握文档切分（chunking）的各种策略","理解向量检索的基本原理"],
    days:[
      {day:1, title:"RAG 架构概览", tasks:[
        "理解 RAG（Retrieval-Augmented Generation）的核心思想","画出 RAG 的数据流图：文档→切分→embedding→向量库→检索→LLM","理解为什么需要 RAG（解决幻觉、知识截止、私有数据）","RAG vs 微调 vs 长上下文：各自的适用场景","读 LangChain 或 LlamaIndex 的 RAG 概念文档"
      ]},
      {day:2, title:"文档加载与解析", tasks:[
        "用 PyPDF2/pdfplumber 解析 PDF（理解为什么 PDF 解析这么难）","用 BeautifulSoup 解析 HTML","用 python-docx 解析 Word","用 markdown 库解析 Markdown","写一个 DocumentLoader 类：自动识别文件类型并加载"
      ]},
      {day:3, title:"文档切分 (Chunking)", tasks:[
        "理解 chunking 的 tradeoff：太大→不精确，太小→缺上下文","固定大小切分（character/sentence/paragraph level）","递归切分（按段落→句子→字符的优先级逐级切分）","语义切分（用 embedding 相似度判断段落边界）","实验不同 chunk_size 和 chunk_overlap 对检索质量的影响"
      ]},
      {day:4, title:"Embedding 模型", tasks:[
        "理解 Embedding：把文本变成向量（高维空间中的点）","用 text-embedding-3-small 或 bge-large 生成 embedding","对比不同 embedding 模型的质量和成本","理解余弦相似度和欧氏距离","可视化：把 embedding 降到 2D（t-SNE/UMAP）看聚类效果"
      ]},
      {day:5, title:"向量数据库基础", tasks:[
        "理解向量数据库和传统数据库的区别","用 Chroma 搭建本地向量存储","实现：存入文档 → 生成 embedding → 存入 Chroma","实现：输入问题 → 生成 embedding → 语义搜索 → 返回 top-k","理解 k-NN 和 ANN（近似最近邻）的区别"
      ]},
      {day:6, title:"RAG 检索实战", tasks:[
        "搭建完整的 RAG pipeline（文档→切分→embed→存储→检索）","用你的 Todo API 文档做知识库，测试问答质量","实验不同的 chunk_size → 对比检索质量","实验不同的 k 值（检索多少条）→ 对比答案质量","写一个评估脚本：问题集 + 预期答案 → 自动评分"
      ]},
      {day:7, title:"本周复习 + RAG Demo", tasks:[
        "做一个完整的 RAG Demo：上传 PDF → 问答（Streamlit/Gradio UI）","把上周的 Prompt 模板库作为知识库，用 RAG 检索最佳 prompt","写一篇「从零实现 RAG」博客，附完整代码","push 代码，README 包含架构图 + 运行截图"
      ]}
    ]},

  { week:12, month:"第3个月：LLM 基础与应用层", theme:"RAG 进阶 + 向量检索优化",
    desc:"把 RAG 从「能用」提升到「好用」，掌握检索优化的关键技术。",
    objectives:["掌握 HyDE/Reranker/多路召回等检索优化技术","理解不同向量数据库的取舍","能处理多模态文档（图片中的文字）","建立 RAG 系统的评估体系"],
    days:[
      {day:1, title:"检索优化：HyDE + 查询改写", tasks:[
        "理解 HyDE（Hypothetical Document Embedding）：用 LLM 生成假设答案→用假设答案检索","实现 HyDE：问「怎么做 RAG？」→ LLM 生成假答案 → 用假答案检索","查询改写：扩展/分解复杂问题","多轮对话中的查询消解（指代消解：它→具体名词）","对比优化前后的检索命中率"
      ]},
      {day:2, title:"Reranker（重排序）", tasks:[
        "理解 Reranker：粗检+精排的两阶段策略","用 bge-reranker 或 Cohere Rerank 对检索结果重排序","对比有无 Reranker 的答案质量差异","理解多路召回（Multi-Vector Retrieval）：BM25 + 向量检索混合","实现混合检索的简单版本"
      ]},
      {day:3, title:"向量数据库选型", tasks:[
        "主流向量数据库对比：Chroma/Milvus/Qdrant/Pinecone/Weaviate","理解 HNSW 索引的工作原理（面试高频）","理解量化（PQ/SQ）压缩向量的原理","用 Milvus Lite 或 Qdrant 替换 Chroma 做测试","选型决策框架：数据量/延迟/成本/运维复杂度"
      ]},
      {day:4, title:"多模态 RAG", tasks:[
        "理解多模态 embedding（CLIP 等）","处理 PDF 中的图片（用 OCR 提取文字）","用视觉模型总结图片内容→存入知识库","表格数据的处理策略（转 Markdown 表格→切分→检索）","构建混合文档（文字+图片+表格）的 RAG 系统"
      ]},
      {day:5, title:"RAG 评估体系", tasks:[
        "RAG 评估的三个维度：检索质量/答案质量/端到端质量","检索评估：MRR/Recall@k/NDCG","答案评估：忠实度/相关性/完整性","用 RAGAS 框架做自动化评估","建立评估数据集（问题+标准答案+相关文档）"
      ]},
      {day:6, title:"RAG 生产化考量", tasks:[
        "增量索引：新文档来了如何更新（不重建整个索引）","元数据过滤：按时间/作者/类别筛选后再检索","缓存策略：相似问题不重复检索","成本优化：embedding 缓存 + LLM 缓存","监控：检索延迟/embedding 失败率/答案质量下降"
      ]},
      {day:7, title:"本周复习 + RAG 深度项目", tasks:[
        "升级上周的 RAG Demo：HyDE + Reranker + 混合检索 + 评估","写 RAG 系统的完整技术文档（架构/选型/评估结果）","整理 RAG 最佳实践清单（checklist 形式）","写一篇「RAG 从入门到生产」博客"
      ]}
    ]},

  // ===== MONTH 4 =====
  { week:13, month:"第4个月：LLM 高级模式", theme:"Function Calling / Tool Use",
    desc:"让 LLM 不止会说话，还能做事——调用 API、查数据库、发邮件。",
    objectives:["掌握 Claude/OpenAI 的 Tool Use 机制","能用 Pydantic 定义工具 Schema","实现 LLM 的自主工具选择和调用","处理工具调用的各种异常情况"],
    days:[
      {day:1, title:"Tool Use 概念 + Schema 定义", tasks:[
        "理解 Tool Use：LLM 决定何时调用哪个工具，传什么参数","用 JSON Schema 定义一个工具（查天气/计算器/搜索）","理解 tool_choice：auto/any/none/tool 的区别","理解 parallel_tool_calls 的执行模型","用 Pydantic 生成 JSON Schema（更可维护）"
      ]},
      {day:2, title:"实现工具调用循环", tasks:[
        "写 Tool Use loop：LLM 输出 tool_call → 执行函数 → 把结果发回 LLM","处理 LLM 可能不调用工具的情况（直接文本回复）","处理 LLM 参数错误（缺少必填参数/类型不对）","限制最大工具调用次数（防止无限循环烧 token）","写一个带工具的命令行 AI 助手"
      ]},
      {day:3, title:"工具设计最佳实践", tasks:[
        "工具描述（description）怎么写 LLM 才容易选对？","参数描述怎么写？给出有效示例","一个工具应该做什么——粒度设计（太细/太粗都不好）","错误返回的设计：工具失败了告诉 LLM 什么？","工具数量限制（10-20 个以内，太多 LLM 会选错）"
      ]},
      {day:4, title:"工具集实战", tasks:[
        "实现 5 个实用工具：网页搜索/计算器/数据库查询/天气/当前时间","测试 LLM 在多个工具时的选择准确率","实现工具链（一个工具的输出是另一个工具的输入）","处理搜索结果太长的问题（截断 + 让 LLM 知道被截断了）","测试：给一个需要多工具协作才能完成的任务"
      ]},
      {day:5, title:"Tool Use + RAG 结合", tasks:[
        "把 RAG 检索做成一个 tool（search_knowledge_base）","Agent 可以决定：检索知识库 or 调用外部 API or 直接回答","实现带工具的客服 Agent（查订单/查物流/知识库检索）","处理工具结果和知识库结果冲突的情况","用 Tool Use 实现 SQL 查询（自然语言→SQL→执行→自然语言回答）"
      ]},
      {day:6, title:"安全管理 + 成本控制", tasks:[
        "工具白名单：哪些工具可以被调用（防止 harmful tool use）","人机协同（Human-in-the-loop）：危险操作需要确认","工具调用的 token 成本追踪","超时处理：工具调用超过 N 秒就放弃","并发工具调用的限制和排队"
      ]},
      {day:7, title:"本周复习 + Tool Use 项目", tasks:[
        "做一个「AI 个人助理」：日历/搜索/邮件/笔记 4 个工具","写完整的工具文档和使用说明","录 Demo：展示 AI 如何自主调用多个工具完成复杂任务","写一篇「LLM Tool Use 实战」博客"
      ]}
    ]},

  { week:14, month:"第4个月：LLM 高级模式", theme:"Agent 架构设计",
    desc:"理解 Agent 的设计模式，从简单的 ReAct 到复杂的多 Agent 协作。",
    objectives:["理解 ReAct / Plan-Execute / Multi-Agent 三种范式","能从头实现 Agent 循环（不依赖框架）","掌握 Agent 的记忆管理","理解 Agent 的局限性和安全边界"],
    days:[
      {day:1, title:"Agent 核心概念", tasks:[
        "理解 Agent：能自主规划+执行+反思的 AI 系统","Agent = LLM + Tool + Memory + Planning","对比 Workflow（固定流程）vs Agent（自主决策）","什么时候用 Agent？什么时候不该用？（不是越自主越好）","读 Anthropic 的「Building effective agents」博客"
      ]},
      {day:2, title:"ReAct 模式实战", tasks:[
        "理解 ReAct：Reasoning（思考）+ Acting（行动）交替","实现 ReAct loop：Thought → Action → Observation → Thought → ...","对比纯 CoT vs ReAct 在信息检索任务上的表现","实验：改变 Thought 的详细程度，观察对最终答案的影响","用 ReAct 做一个 web research agent"
      ]},
      {day:3, title:"Plan-Execute 模式", tasks:[
        "理解 Plan-Execute：先制定计划 → 逐步执行 → 检查结果","实现 Planner：把复杂任务分解为有序的子任务列表","实现 Executor：按计划执行，遇到问题重新规划","动态重规划：执行结果不符合预期时调整计划","对比 ReAct vs Plan-Execute 的适用场景"
      ]},
      {day:4, title:"Agent 记忆系统", tasks:[
        "理解三层记忆：工作记忆/短期记忆/长期记忆","工作记忆：当前对话的上下文","短期记忆：滑动窗口 + 摘要压缩","长期记忆：向量数据库存储历史交互，语义检索","实现一个有长期记忆的 Agent（记住用户偏好）"
      ]},
      {day:5, title:"Multi-Agent 系统", tasks:[
        "理解多 Agent 的两种模式：协作 vs 辩论","顺序协作：A 写初稿 → B 审查修改 → C 润色","辩论模式：多个 Agent 讨论，达成共识","实现一个「AI 编辑部」：写手+编辑+校对 三个 Agent","理解多 Agent 的成本（token 消耗 x N）"
      ]},
      {day:6, title:"Agent 安全与可控性", tasks:[
        "Agent 的失控风险：无限循环/错误放大/权限滥用","设置最大步数限制和 token 预算","沙箱执行：工具调用在隔离环境中运行","审计日志：记录 Agent 的每一步决策","何时需要 Human-in-the-loop？原则和实现"
      ]},
      {day:7, title:"本周复习 + Agent 项目", tasks:[
        "做一个「研究助手 Agent」：给定主题→搜索→读网页→写报告","实现全部 3 层记忆","加上工具调用的安全审计","写一篇「从零构建 AI Agent」博客（含架构图和代码）"
      ]}
    ]},

  { week:15, month:"第4个月：LLM 高级模式", theme:"LangChain + LangGraph（框架实战）",
    desc:"理解并熟练使用主流 AI 框架，加速开发效率。同时保持对框架原理的理解。",
    objectives:["掌握 LangChain 的核心抽象（Chain/Prompt/Tool）","用 LangGraph 构建有状态的 Agent","理解框架的优势和陷阱","能不看文档读懂 LangChain 源码的核心部分"],
    days:[
      {day:1, title:"LangChain 核心概念", tasks:[
        "理解 LangChain 的设计哲学：Chain/Agent/Tool/Retriever","用 LangChain 重写 Prompt Engineering 和 RAG pipeline","理解 LCEL（LangChain Expression Language）管道语法","对比原生代码 vs LangChain 的代码量","理解 LangChain 的模块化设计（可以只用一部分）"
      ]},
      {day:2, title:"LangChain RAG 实战", tasks:[
        "用 LangChain 的 Document Loader 全家桶加载各种格式","用 LangChain 的 Text Splitter 做高级切分","用 LangChain 的 Retriever 和 VectorStore 抽象","构建完整的 LangChain RAG chain","对比手写 RAG vs LangChain RAG 的性能和灵活性"
      ]},
      {day:3, title:"LangGraph 入门", tasks:[
        "理解 LangGraph：用图（Graph）表示 Agent 流程","StateGraph 的概念：节点 + 边 + 条件边","写一个简单的 LangGraph：步骤 A → B → C","添加条件路由：根据步骤 A 的结果决定去 B 还是 C","可视化你的 Graph（Mermaid 图）"
      ]},
      {day:4, title:"LangGraph Agent 实战", tasks:[
        "用 LangGraph 实现 ReAct Agent","节点：think_node / tool_node / answer_node","条件边：需要工具？→ tool_node，不需要？→ answer_node","添加记忆节点：存储和检索历史","checkpoint 和中断恢复"
      ]},
      {day:5, title:"LangGraph 高级特性", tasks:[
        "SubGraph：把一个 Graph 作为另一个 Graph 的节点","Human-in-the-loop：用 interrupt 暂停等人工确认","并行执行：Send API 实现 Map-Reduce 模式","Streaming：流式输出中间状态","理解 LangGraph 的底层：消息状态 + 图执行引擎"
      ]},
      {day:6, title:"框架 vs 手写：深度思考", tasks:[
        "读 LangChain 源码中的 Chain 类（理解其抽象）","读 LangGraph 源码中的 StateGraph（约 300 行核心）","理解框架的代价：调试困难/版本升级/抽象泄漏","决策框架：什么时候该用框架？什么时候该手写？","写一篇文章：我为什么选择/不选择 LangChain"
      ]},
      {day:7, title:"本周复习 + 框架实战", tasks:[
        "用 LangGraph 重写上周的「研究助手 Agent」","对比两种实现（手写 vs LangGraph）的差异","记录踩过的坑（框架版本冲突/文档过时/隐藏行为）","整理 LangChain/LangGraph 的使用 checklist"
      ]}
    ]},

  { week:16, month:"第4个月：LLM 高级模式", theme:"多模态 + 流式架构 + 中间件",
    desc:"掌握多模态 AI 和流式处理，让应用更实时、更丰富。",
    objectives:["集成视觉模型处理图片","理解语音交互（TTS/STT）的工作流","掌握 SSE/WebSocket 实时通信","建立 AI 应用的监控和日志体系"],
    days:[
      {day:1, title:"视觉模型集成", tasks:[
        "理解多模态模型（GPT-4V/Claude Vision）的能力和限制","用 Claude API 分析图片内容（base64 编码图片）","实现：上传截图 → LLM 描述图片内容 → 结构化输出","图片预处理：压缩/裁剪/分辨率调整（减少 token 消耗）","理解视觉模型的 token 计算方式"
      ]},
      {day:2, title:"语音交互（TTS/STT）", tasks:[
        "用 OpenAI Whisper（或本地模型）做语音转文字","用 OpenAI TTS 或 Edge TTS 做文字转语音","实现语音对话 pipeline：STT → LLM → TTS","延迟优化：流式 STT + 流式 LLM + 流式 TTS","做一个语音版个人助理 Demo"
      ]},
      {day:3, title:"实时通信：SSE + WebSocket", tasks:[
        "理解 SSE（Server-Sent Events）vs WebSocket 的区别","在 FastAPI 中实现 SSE：服务器主动推送数据","实现 Agent 执行过程的实时展示（每步都推送给前端）","WebSocket 基础：双向通信","用 WebSocket 实现实时对话（你说一句 AI 回一句）"
      ]},
      {day:4, title:"流式架构设计", tasks:[
        "设计一个全流式 pipeline：请求 → 流式 LLM → 流式后处理 → 流式响应","用 async generator（Python）优雅实现流式处理","处理流中的错误（LLM 中途出错怎么通知前端）","背压（backpressure）处理：前端消费慢于后端生产","对比同步/异步/流式三种架构的延迟"
      ]},
      {day:5, title:"AI 应用监控", tasks:[
        "需要监控什么？延迟/token 消耗/成本/错误率/用户满意度","用 LangSmith 或自建 tracing 追踪 Agent 执行链","结构化日志：每个 LLM 调用都记录 prompt/tokens/latency","告警设置：成本异常/错误率飙升/延迟变慢","Grafana + Prometheus 基础了解"
      ]},
      {day:6, title:"安全最佳实践", tasks:[
        "Prompt Injection 防护：输入过滤/输出限制/权限分离","敏感信息泄露：防止 LLM 输出 API Key/密码/用户数据","内容安全：有害内容识别和过滤","速率限制：防止滥用","合规性：数据隐私/GDPR/日志脱敏（了解即可）"
      ]},
      {day:7, title:"本周复习 + 综合实验", tasks:[
        "把视觉/语音/流式集成到一个应用中（多模态 AI 助手）","添加完整的监控和日志","写架构设计文档（包含所有组件的交互图）","本周总结：多模态 + 实时 + 安全"
      ]}
    ]},

  // ===== MONTH 5 =====
  { week:17, month:"第5个月：生产化与实战项目", theme:"模型部署：本地 + 云端",
    desc:"不只会用 API，还要能自己部署开源模型。这是 AI 应用 → ML 工程的桥梁。",
    objectives:["会用 Ollama 在本地运行开源模型","理解模型量化的概念和收益","能用 vLLM 部署高性能推理服务","了解 GPU 的基础知识"],
    days:[
      {day:1, title:"Ollama 本地部署", tasks:[
        "安装 Ollama，下载并运行 llama3/qwen 等开源模型","理解 Ollama 的 Modelfile（类似 Dockerfile for 模型）","用 Ollama Python SDK 调用本地模型","对比 API 模型 vs 本地模型的延迟/质量","理解 GGUF 格式（量化模型格式）"
      ]},
      {day:2, title:"模型量化基础", tasks:[
        "理解量化：FP16 → INT8 → INT4 对精度和速度的影响","用 llama.cpp 或 Ollama 测试不同量化级别","理解 GPTQ/AWQ 量化方法的区别","计算内存需求：7B 模型需要多少显存/内存？","选择量化级别的决策框架"
      ]},
      {day:3, title:"vLLM 高性能推理", tasks:[
        "理解 vLLM 为什么快：PagedAttention + 连续批处理","安装 vLLM，部署一个模型 API","用 vLLM 的 OpenAI 兼容 API 端点","理解推理性能指标：TTFT/TPOT/throughput","压力测试：对比 vLLM vs 原生 transformers 的吞吐量"
      ]},
      {day:4, title:"GPU 与推理优化", tasks:[
        "GPU 基础概念：CUDA/显存/TFLOPS/带宽","理解推理的瓶颈：计算密集 vs 显存带宽密集","用 Nvidia Nsight 或 nvidia-smi 查看 GPU 使用情况","Flash Attention 是什么？为什么重要？","KV Cache 和 continuous batching 的关系"
      ]},
      {day:5, title:"模型服务化", tasks:[
        "把 vLLM 封装成 FastAPI 服务","添加认证/限流/日志到模型服务","A/B 测试框架：同时部署两个模型版本对比","模型热切换：不停机更新模型","健康检查和优雅关闭"
      ]},
      {day:6, title:"成本分析", tasks:[
        "API 服务 vs 自部署的经济对比","GPU 云服务器价格调研（AWS/AutoDL/Vast.ai）","计算 ROI：多少 QPS 后自部署比 API 便宜","混合策略：热数据用自部署，冷数据用 API","写一个成本计算器工具"
      ]},
      {day:7, title:"本周复习 + 部署实验", tasks:[
        "在云 GPU 服务器上部署 vLLM + FastAPI","对比自部署 vs Anthropic API 的成本和质量","写一篇「开源模型部署实战」博客","整理模型部署决策树（什么时候用 API/自部署/微调）"
      ]}
    ]},

  { week:18, month:"第5个月：生产化与实战项目", theme:"生产环境：缓存/队列/性能",
    desc:"把 AI 应用从 Demo 提升到生产级别。",
    objectives:["掌握 AI 应用的缓存策略","能用消息队列处理异步任务","理解生产环境的性能优化","建立生产故障的排查能力"],
    days:[
      {day:1, title:"AI 缓存策略", tasks:[
        "精确缓存：相同 prompt → 相同 response（用 prompt hash 做 key）","语义缓存：相似 prompt → 相同 response（用 embedding 相似度）","理解 Anthropic 的 Prompt Caching 机制（降低成本 90%）","用 Redis 实现多层缓存（内存缓存 + 持久化缓存）","缓存失效策略：什么时候该清缓存？"
      ]},
      {day:2, title:"消息队列 + 异步处理", tasks:[
        "理解消息队列的作用：削峰/解耦/异步","用 Redis Queue（RQ）或 Celery 处理异步 AI 任务","场景：用户提交文档→后台处理→完成后通知","任务优先级：付费用户优先处理","处理失败的策略：重试/死信队列/告警"
      ]},
      {day:3, title:"数据库设计 for AI 应用", tasks:[
        "AI 应用的数据库设计模式","对话历史的存储（PostgreSQL JSONB vs 专门的消息表）","向量+标量混合查询（pgvector: PostgreSQL 原生向量扩展）","全文搜索 + 向量搜索的组合","数据归档和清理策略"
      ]},
      {day:4, title:"性能优化", tasks:[
        "性能分析：cProfile/py-spy 找到瓶颈","数据库查询优化：N+1 问题/索引/连接池","并发优化：async/await + connection pooling","内存优化：generator 代替 list/del 大对象","用 wrk/locust 做负载测试"
      ]},
      {day:5, title:"故障排查", tasks:[
        "常见故障场景和排查思路","LLM 调用超时/返回空/返回错误格式 → 排查流程","向量数据库不可用 → 降级策略","内存泄漏排查（tracemalloc）","建立故障处理 Runbook"
      ]},
      {day:6, title:"生产 checklist", tasks:[
        "生产环境上线前检查清单","日志/监控/告警/备份/恢复/灰度发布","SLA/SLO/SLI 基础概念","容量规划：一台服务器能支撑多少 QPS？","灾备和回滚演练"
      ]},
      {day:7, title:"本周复习", tasks:[
        "给 Todo API + AI 功能添加缓存/队列/监控","写一份生产环境部署手册","对比优化前后的性能指标","本周总结博客"
      ]}
    ]},

  { week:19, month:"第5个月：生产化与实战项目", theme:"🏆 项目一：企业知识库问答系统",
    desc:"你的第一个旗舰项目。把前 18 周的所有技能整合到一个完整产品中。这个项目占简历 50% 的含金量。",
    objectives:["独立完成一个完整的 AI SaaS 产品","从需求分析到上线部署全流程","代码质量和文档达到开源项目标准","能给面试官做 5 分钟的完整 Demo"],
    days:[
      {day:1, title:"需求分析 + 系统设计", tasks:[
        "定义核心功能：文档上传→知识库管理→智能问答→对话历史","画出系统架构图（前端/后端/数据库/向量库/LLM）","设计 API 端点（至少 20 个）","设计数据库模型（用户/知识库/文档/对话/消息）","写 PRD 文档（目标用户/核心功能/非功能需求）"
      ]},
      {day:2, title:"项目初始化 + 基础设施", tasks:[
        "初始化项目结构（企业级目录布局）","配置开发环境：Docker Compose（FastAPI + PostgreSQL + Redis + Chroma）","配置 CI/CD（GitHub Actions：lint → test → build）","写项目 README 框架（架构图 + 技术栈 + 快速开始）","建立开发规范（branch 策略/commit 规范/code review 清单）"
      ]},
      {day:3, title:"用户系统 + 认证", tasks:[
        "实现用户注册/登录（JWT + refresh token）","邮箱验证（发送验证邮件）","RBAC：admin/user 两种角色","API Key 管理（给开发者用）","用户设置和个人资料"
      ]},
      {day:4, title:"知识库管理", tasks:[
        "知识库 CRUD（创建/列表/更新/删除）","文档上传（支持 PDF/Word/Markdown/TXT）","文档处理 pipeline（解析→切分→embedding→存储）","文档状态管理（处理中/已完成/失败）","知识库公开/私有设置"
      ]},
      {day:5, title:"问答引擎（核心）", tasks:[
        "实现 RAG 问答 pipeline（检索→重排→生成）","多轮对话支持（历史管理 + 指代消解）","流式输出（SSE → 前端逐字展示）","引用溯源（答案引用具体文档段落）","问题建议（根据知识库内容推荐问题）"
      ]},
      {day:6, title:"对话管理 + 前端 MVP", tasks:[
        "对话 CRUD（创建/列表/继续对话/删除）","对话历史搜索","用 Streamlit 或 Gradio 做一个能用的前端","或者用 Next.js 模板快速搭前端（如果懂前端）","前后端联调，确保核心流程跑通"
      ]},
      {day:7, title:"本周总结 + 第一轮测试", tasks:[
        "写端到端测试（注册→上传文档→问答→检查答案含引用）","邀请朋友试用，收集反馈","记录所有 bug 和改进点","本周总结：架构/技术选型/遇到的坑"
      ]}
    ]},

  { week:20, month:"第5个月：生产化与实战项目", theme:"🏆 项目一：打磨 + 部署 + 开源",
    desc:"好项目需要打磨。这周把项目从「能跑」提升到「专业」。",
    objectives:["项目部署到公网可访问","优化用户体验和性能","达到开源项目的文档标准","录一个产品 Demo 视频"],
    days:[
      {day:1, title:"功能完善", tasks:[
        "根据上周反馈修复 bug","添加批量导入（上传 zip 包含多个文档）","添加知识库导出功能","添加使用统计（文档数/token 消耗/问答次数）","添加简单的管理后台（管理员看全站数据）"
      ]},
      {day:2, title:"性能优化", tasks:[
        "embedding 缓存（相同文本不重复 embedding）","LLM 响应缓存（相同问题复用答案）","数据库查询优化（N+1/索引/批量查询）","异步处理文档（上传后异步解析→处理完通知）","前端加载优化（骨架屏/懒加载）"
      ]},
      {day:3, title:"安全加固", tasks:[
        "输入验证和过滤（防止 prompt injection）","文件上传安全（类型检查/大小限制/病毒扫描）","API 限流（每用户每分钟 N 次）","敏感信息脱敏（日志中隐藏 API Key/密码）","安全审计清单逐项检查"
      ]},
      {day:4, title:"部署上线", tasks:[
        "购买域名 + DNS 配置","部署到云服务器（阿里云/腾讯云/AWS）","配置 Nginx + HTTPS","配置环境变量和密钥管理","设置自动备份（数据库 + 文件存储）"
      ]},
      {day:5, title:"文档 + 开源准备", tasks:[
        "写完整的 README（必须包含：介绍/功能/架构图/技术栈/安装/使用/API 文档/部署/贡献指南）","写 CONTRIBUTING.md","写 LICENSE（MIT 或 Apache 2.0）","添加 badges（CI passing/coverage/license 等）","在 GitHub 上发布 Release v1.0"
      ]},
      {day:6, title:"Demo + 推广", tasks:[
        "录一个 3-5 分钟的产品 Demo 视频","写一篇项目介绍博客（技术选型/架构设计/踩坑记录）","在掘金/V2EX/Hacker News/Reddit 等社区分享","收集 star 和反馈","回复 issue 和讨论"
      ]},
      {day:7, title:"项目复盘", tasks:[
        "写项目复盘文档：做得好的/不好的/下次改进","更新简历：把这个项目作为重点项目","准备面试中的项目介绍（5 分钟版本和 1 分钟版本）","整理技术债务列表（后续可以做哪些改进）"
      ]}
    ]},

  // ===== MONTH 6 =====
  { week:21, month:"第6个月：打磨与求职", theme:"🏆 项目二：AI Agent 助手",
    desc:"第二个旗舰项目，展示 Agent 设计和复杂系统能力。",
    objectives:["完成一个多工具 Agent 系统","展示复杂的工程架构能力","项目二进一步丰富简历"],
    days:[
      {day:1, title:"项目设计", tasks:[
        "选题方向（选一个你感兴趣的）：\n① AI 代码助手（读代码库→分析→生成代码/修复建议）\n② 个人研究助手（给定主题→搜索→阅读→写报告）\n③ AI 客服 Agent（查知识库/查数据库/转人工）","定义 Agent 的工具集和能力边界","设计系统架构（Agent 引擎 + 工具集 + 记忆 + 前端）"
      ]},
      {day:2, title:"Agent 核心实现", tasks:[
        "实现 Agent 循环（ReAct 或 Plan-Execute 模式）","实现工具调用框架（统一的 Tool 接口）","实现至少 5 个工具","添加工具调用的错误处理和重试"
      ]},
      {day:3, title:"记忆 + 状态管理", tasks:[
        "实现三层记忆系统","对话持久化和恢复","用户偏好学习（从历史中提取用户习惯）","Agent 状态的可视化展示"
      ]},
      {day:4, title:"前端 + 交互", tasks:[
        "用 Streamlit/Gradio/Next.js 做前端","实时展示 Agent 的思考过程（不是黑盒）","用户可以对 Agent 的决策进行干预（Human-in-the-loop）","对话历史管理和搜索"
      ]},
      {day:5, title:"安全 + 监控", tasks:[
        "危险操作确认机制","Agent 执行日志和审计","成本追踪和预算控制","错误降级（工具不可用时的 fallback）"
      ]},
      {day:6, title:"测试 + 文档", tasks:[
        "写 Agent 行为测试（给定输入→期望调用哪些工具→期望输出）","写完整的 README 和使用文档","录 Demo 视频","部署上线（公网可访问）"
      ]},
      {day:7, title:"本周总结", tasks:[
        "对比项目一和项目二：架构差异/技术挑战/收获","更新简历：添加项目二","整理 Agent 开发的最佳实践","休息半天，回顾 21 周的学习历程"
      ]}
    ]},

  { week:22, month:"第6个月：打磨与求职", theme:"🏆 项目三 + 作品集打磨",
    desc:"第三个项目展示你的广度，同时打磨全部作品集。",
    objectives:["完成第三个项目（方向不同于前两个）","建立专业的开发者 Profile","GitHub/博客/简历三位一体"],
    days:[
      {day:1, title:"项目三：LoRA 微调 + 部署", tasks:[
        "选题：微调一个开源模型（如 Qwen）到垂直领域","收集和清洗训练数据（至少 1000 条）","用 QLoRA 微调模型（Colab 或 AutoDL）","评估微调效果（微调前 vs 微调后的对比）"
      ]},
      {day:2, title:"模型部署 + API", tasks:[
        "用 vLLM 部署微调后的模型","写 FastAPI 包装","对比微调模型的 API 成本优势","写使用文档：别人也能用你微调的模型"
      ]},
      {day:3, title:"开源贡献", tasks:[
        "找一个你用过且觉得有改进空间的 AI 开源项目","至少提交 1 个 PR（修 bug/加文档/加 feature）","即使 PR 不被 merge，contributing 的经历也很有价值","写一篇「我的第一次开源贡献」博客"
      ]},
      {day:4, title:"GitHub Profile 优化", tasks:[
        "整理所有项目的 README（统一风格 + 截图 + 安装指南）","创建 GitHub Profile README（介绍自己的技能和项目）","Pin 最好的 6 个项目到首页","确保 commit 历史好看（最近半年每天都有绿色）"
      ]},
      {day:5, title:"技术博客", tasks:[
        "列出 3-5 篇待写博客的标题和大纲","写一篇深度技术博客（2000+ 字，有代码有图有思考）","在其他博客平台交叉发布（掘金/知乎/Medium/个人博客）","建立自己的技术品牌：统一的头像/ID/bio"
      ]},
      {day:6, title:"简历撰写", tasks:[
        "写简历：一页纸，3 个项目的量化成果","简历结构：技能 → 项目经验 → 工作经历 → 教育","每个项目写 3 个 bullet points：技术 + 成果 + 数据","找 3 个人 review 简历（朋友/前辈/网上找人）","根据反馈迭代至少 3 版"
      ]},
      {day:7, title:"本周总结 + LinkedIn", tasks:[
        "创建/优化 LinkedIn 主页（英文）","添加所有项目和技能标签","连接 50+ 个 AI 领域的同行","发一条帖子介绍自己的学习历程和求职意向"
      ]}
    ]},

  { week:23, month:"第6个月：打磨与求职", theme:"面试准备：算法 + ML 基础",
    desc:"面试是门技术活。系统准备算法题和 ML 八股文。",
    objectives:["LeetCode 刷到中等难度无障碍","掌握 ML 面试的常见八股文","能流畅介绍自己的项目（STAR 法则）","了解 AI 应用工程师面试的常见流程"],
    days:[
      {day:1, title:"LeetCode 冲刺（数组/字符串）", tasks:[
        "复习数组和字符串的经典题（10 题）","重点：双指针/滑动窗口/前缀和","每道题写出来 + 说出来（模拟面试场景）","时间复杂度分析（大 O）脱口而出","LeetCode Hot 100 逐题过"
      ]},
      {day:2, title:"LeetCode 冲刺（哈希表/链表/栈）", tasks:[
        "哈希表应用题（10 题）","链表操作（反转/合并/环检测）","栈和队列（括号匹配/单调栈）","用 Python 写出所有解法","整理算法题解题模板"
      ]},
      {day:3, title:"LeetCode 冲刺（树/递归/DP 入门）", tasks:[
        "二叉树遍历（前中后序/层序遍历）","DFS vs BFS 的 Python 模板","动态规划入门（爬楼梯/背包/最长子序列）","每道题写出递推公式再写代码","总结常见 DP 模式（线性/区间/背包/状态机）"
      ]},
      {day:4, title:"ML 八股文（上）", tasks:[
        "整理常见 ML 问题清单（50 题）","重点掌握：过拟合/欠拟合 → 原因和解决方案","偏差-方差分解 → 概念和权衡","正则化 L1/L2 → 原理和区别","交叉验证 → K-Fold/Stratified/Leave-one-out"
      ]},
      {day:5, title:"ML 八股文（下）", tasks:[
        "常见损失函数（MSE/Cross-Entropy/Hinge）→ 适用场景","优化器对比（SGD/Adam/AdamW）→ 特点和选择","激活函数（ReLU/GELU/Swish）→ 优缺点","Batch Norm / Layer Norm → 原理和区别","Attention 机制 → 从 QKV 到 Multi-Head Attention"
      ]},
      {day:6, title:"系统设计基础", tasks:[
        "学习系统设计面试框架（Requirements → Estimation → Design → Deep Dive）","练习：设计一个 AI 问答系统","练习：设计一个 AI 代码审查工具","练习：设计一个 RAG 管道","了解基本的容量估算（QPS/存储/带宽）"
      ]},
      {day:7, title:"本周复习 + 模拟面试", tasks:[
        "找朋友或在 pramp.com 做一次模拟面试","录音/录像回看自己的表现","改进：语速/条理性/技术深度/互动","整理面试中不会的问题，会后查漏补缺","本周总结：面试准备的薄弱环节"
      ]}
    ]},

  { week:24, month:"第6个月：打磨与求职", theme:"投递 + 面试 + 入职",
    desc:"最后冲刺！把前面的积累转化为 offer。",
    objectives:["每天投递 5+ 份简历","拿到至少 3 个面试机会","完成至少 5 场面试","收到至少 1 个 offer"],
    days:[
      {day:1, title:"简历投递策略", tasks:[
        "整理目标公司清单（3 个梯队：冲刺/匹配/保底）","定制简历（针对不同公司调整项目描述关键词）","在 BOSS 直聘/猎聘/Lagou 完善个人资料","投递 10 家公司（记录投递时间/职位/渠道）","找 3 个内推渠道（LinkedIn/脉脉/朋友圈/社区）"
      ]},
      {day:2, title:"面试练习", tasks:[
        "准备 1 分钟自我介绍（突出 3 个核心项目）","准备项目介绍 STAR 版（Situation/Task/Action/Result）","准备「你为什么想加入我们公司」的回答","准备「你遇到过最难的技术挑战」的回答","准备反问面试官的问题清单（5-10 个）"
      ]},
      {day:3, title:"继续投递 + 面试", tasks:[
        "投递 5 家公司","参加面试（如果有），认真记录面试问题","面试后 1 小时内写感谢信/反馈","更新面试题记录表（哪些问题回答得不好）","针对薄弱点突击学习"
      ]},
      {day:4, title:"持续面试 + 学习", tasks:[
        "投递 5 家公司","复习今天面试中暴露的问题","看目标公司的技术博客/开源项目（展示诚意）","保持 LeetCode 手感（每天 2-3 题）","整理薪资预期和谈判策略"
      ]},
      {day:5, title:"Offer 评估", tasks:[
        "对比收到的 offer（技术成长/薪资/团队/产品）","不要只看薪资：学习机会和 mentor 更重要（第一份 AI 工作）","学会谈薪资（用其他 offer 作为筹码）","做出决定后及时回复（不要 hold 太久）"
      ]},
      {day:6, title:"入职准备", tasks:[
        "入职前 2 周：深入了解新公司的技术栈和产品","准备入职第一个月的学习计划","建立行业人脉（加入公司的技术群/社区）","整理入职需要的材料（证件/合同/设备）"
      ]},
      {day:7, title:"🎉 里程碑：回顾与展望", tasks:[
        "回顾 24 周的学习之旅：翻看 GitHub commit 历史和笔记","写下最大的收获和最大的挑战","规划下一阶段目标：ML 工程师的学习路线","更新社交媒体：宣布新工作 + 感谢帮助过你的人","给自己一个奖励！你做到了 🎉"
      ]}
    ]}
];

// ============================================================
// RESOURCES
// ============================================================
const RESOURCES = [
  { cat:"📚 书籍（必读）", items:[
    {title:"Python Crash Course", author:"Eric Matthes", desc:"最好的 Python 入门书，项目驱动，读完就能写东西。必读。", url:"https://nostarch.com/python-crash-course-3rd-edition", stars:5, tag:"Python"},
    {title:"Robust Python", author:"Patrick Viafore", desc:"Python 类型系统、工程实践。读完写出专业级代码。", url:"https://www.oreilly.com/library/view/robust-python/9781098100650/", stars:4, tag:"Python"},
    {title:"Architecture Patterns with Python", author:"Harry Percival", desc:"Python 后端架构模式（DDD/事件驱动/CQRS），进阶必读。免费在线。", url:"https://www.cosmicpython.com/", stars:5, tag:"架构"},
    {title:"Building LLM Apps", author:"Valentina Alto", desc:"2024 年出版，专注 LLM 应用开发（RAG/Agent/Prompt），紧跟时代。", url:"https://www.packtpub.com/product/building-llm-apps/9781835462317", stars:4, tag:"LLM"},
    {title:"Hands-On Machine Learning", author:"Aurelien Geron", desc:"ML 工程师方向必读，暂时不用全看，第2章和第10章先看。", url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125974/", stars:5, tag:"ML"},
    {title:"动手学深度学习 (d2l.ai)", author:"李沐等", desc:"深度学习最好的中文教材，代码+数学+图示三位一体。完全免费。", url:"https://d2l.ai/", stars:5, tag:"DL"}
  ]},
  { cat:"🎓 课程（精选）", items:[
    {title:"Fast.ai Practical Deep Learning", author:"Jeremy Howard", desc:"Top-down 学 DL，先写代码再理解理论。完全免费。", url:"https://course.fast.ai/", stars:5, tag:"DL"},
    {title:"Andrew Ng - Deep Learning Specialization", author:"Andrew Ng", desc:"经典中的经典，理论基础打得最扎实。Coursera 可旁听。", url:"https://www.coursera.org/specializations/deep-learning", stars:5, tag:"DL"},
    {title:"李沐 - 动手学深度学习", author:"李沐 (AWS)", desc:"配合 d2l.ai 书使用，B 站有完整视频。讲得极其清晰。", url:"https://space.bilibili.com/1567748478", stars:5, tag:"DL"},
    {title:"FastAPI 官方教程", author:"FastAPI 官方", desc:"官方教程写得极好，跟着走一遍就够了。", url:"https://fastapi.tiangolo.com/tutorial/", stars:5, tag:"后端"},
    {title:"MIT 6.S191 - Intro to Deep Learning", author:"MIT", desc:"每年更新，内容紧凑，适合快速建立 DL 全局观。", url:"https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI", stars:4, tag:"DL"}
  ]},
  { cat:"🔧 工具与框架", items:[
    {title:"FastAPI", desc:"Python 最快的 Web 框架之一，自动生成 API 文档，类型安全。", url:"https://fastapi.tiangolo.com/", stars:5, tag:"框架"},
    {title:"LangChain", desc:"最流行的 LLM 应用框架，社区最大，文档最全。有争议但值得学。", url:"https://python.langchain.com/", stars:4, tag:"框架"},
    {title:"LangGraph", desc:"LangChain 的有状态 Agent 框架，设计优秀。", url:"https://langchain-ai.github.io/langgraph/", stars:5, tag:"框架"},
    {title:"LlamaIndex", desc:"专注于数据索引和检索的 LLM 框架，RAG 场景很好用。", url:"https://docs.llamaindex.ai/", stars:4, tag:"框架"},
    {title:"Chroma", desc:"最易用的向量数据库，Python 几行代码就能跑。", url:"https://docs.trychroma.com/", stars:4, tag:"向量库"},
    {title:"Milvus", desc:"生产级向量数据库，性能强悍，大规模场景首选。", url:"https://milvus.io/", stars:5, tag:"向量库"},
    {title:"Ollama", desc:"一键本地运行开源 LLM，全平台支持。", url:"https://ollama.ai/", stars:5, tag:"模型"},
    {title:"vLLM", desc:"目前最快的开源 LLM 推理引擎，PagedAttention 技术领先。", url:"https://docs.vllm.ai/", stars:5, tag:"推理"},
    {title:"Docker", desc:"容器化的标准答案，学就对了。", url:"https://docs.docker.com/", stars:5, tag:"DevOps"},
    {title:"Streamlit", desc:"最快的 Python UI 框架，做 AI Demo 的首选。", url:"https://streamlit.io/", stars:4, tag:"前端"}
  ]},
  { cat:"📖 必读文档/指南", items:[
    {title:"Anthropic Prompt Engineering Guide", desc:"目前最好的 Prompt Engineering 指南，有理论有实践。", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", stars:5, tag:"LLM"},
    {title:"OpenAI Cookbook", desc:"大量的 LLM 实战代码示例（RAG/Function Calling/Agent）。", url:"https://cookbook.openai.com/", stars:5, tag:"LLM"},
    {title:"Building Effective Agents (Anthropic)", desc:"Agent 设计哲学：什么时候用 workflow，什么时候用 agent。必读。", url:"https://www.anthropic.com/engineering/building-effective-agents", stars:5, tag:"Agent"},
    {title:"HuggingFace NLP Course", desc:"从零学 Transformers，理论和代码结合得很好。", url:"https://huggingface.co/learn/nlp-course", stars:5, tag:"NLP"},
    {title:"Python 官方 Tutorial", desc:"最权威的 Python 入门资料，比大多数博客靠谱。", url:"https://docs.python.org/3/tutorial/", stars:4, tag:"Python"},
    {title:"Real Python", desc:"高质量的 Python 教程，图文并茂，例子实用。", url:"https://realpython.com/", stars:5, tag:"Python"},
    {title:"PostgreSQL 官方文档 Tutorial", desc:"学 PostgreSQL 最好的地方是官方文档的 tutorial 章节。", url:"https://www.postgresql.org/docs/current/tutorial.html", stars:5, tag:"数据库"},
    {title:"SQLZoo", desc:"交互式学 SQL，写 SQL 的同时能看到结果。新手友好。", url:"https://sqlzoo.net/", stars:4, tag:"数据库"}
  ]},
  { cat:"🎯 每日必看（信息源）", items:[
    {title:"Hacker News", desc:"科技圈的头条，每天刷 15 分钟了解行业动态。", url:"https://news.ycombinator.com/", tag:"资讯"},
    {title:"Papers With Code", desc:"看 AI 论文的最新 state-of-the-art 结果。", url:"https://paperswithcode.com/", tag:"论文"},
    {title:"Twitter/X - AI 研究者", desc:"关注 Karpathy/Chollet/Schmidhuber/Jim Fan 等。", url:"https://twitter.com/", tag:"资讯"},
    {title:"GitHub Trending", desc:"每天看什么项目在火，培养技术嗅觉。", url:"https://github.com/trending", tag:"开源"},
    {title:"B 站 - 跟李沐学 AI", desc:"李沐的论文精读系列，质量极高，适合早餐/通勤看。", url:"https://space.bilibili.com/1567748478", tag:"视频"},
    {title:"掘金 - AI 标签", desc:"中文技术社区，找 AI 应用实战文章。", url:"https://juejin.cn/frontend/AI", tag:"中文"}
  ]},
  { cat:"🛠️ 实战平台", items:[
    {title:"Kaggle", desc:"ML 竞赛平台，有丰富的 Notebook 和数据集。去打比赛！", url:"https://kaggle.com/", tag:"练习"},
    {title:"LeetCode", desc:"算法面试必备，AI 岗也考算法。每天刷 1-2 题。", url:"https://leetcode.com/", tag:"面试"},
    {title:"HuggingFace Spaces", desc:"免费部署 ML Demo，展示你的项目。", url:"https://huggingface.co/spaces", tag:"部署"},
    {title:"GitHub Codespaces", desc:"云端开发环境，任何地方都能写代码。", url:"https://github.com/features/codespaces", tag:"工具"}
  ]}
];

// ============================================================
// PROJECTS
// ============================================================
const PROJECTS = [
  { id:1, title:"企业知识库问答系统", weeks:"第 19-20 周", type:"全栈 AI 产品",
    desc:"做一个完整的 SaaS 产品：用户上传文档、创建知识库、智能问答。这是简历上最重要的项目。",
    tech:["FastAPI","PostgreSQL + pgvector","Redis","Chroma/Milvus","Docker Compose","Nginx","Streamlit/Next.js"],
    features:[
      "用户注册/登录（JWT + refresh token）",
      "知识库管理（创建/编辑/删除/公开私有）",
      "文档上传（PDF/Word/Markdown/TXT）自动解析和向量化",
      "智能问答（RAG pipeline：检索→重排→生成）",
      "流式输出（逐字显示答案）",
      "引用溯源（答案标注来源段落）",
      "多轮对话（对话历史管理）",
      "使用统计（文档数/问答次数/token 消耗）",
      "公网部署 + HTTPS + 自定义域名"
    ],
    deliverables:[
      "完整的 GitHub 仓库（README/架构图/安装指南/API 文档）",
      "公网可访问的 Demo",
      "3-5 分钟的产品演示视频",
      "技术博客（架构设计 + 踩坑记录）"
    ],
    scoring:"面试官会看的点：代码质量/架构设计/文档完整度/能否现场演示/对 RAG 的理解深度"
  },
  { id:2, title:"多工具 AI Agent 助手", weeks:"第 21 周", type:"Agent 系统",
    desc:"展示你的 Agent 设计能力。做一个能自主调用多种工具完成复杂任务的 Agent。",
    tech:["FastAPI","LangGraph（或手写）","Redis","PostgreSQL","Chroma","WebSocket/SSE"],
    features:[
      "Agent 循环（ReAct 或 Plan-Execute 模式）",
      "至少 5 个工具（搜索/计算器/数据库/API/文件操作）",
      "三层记忆系统（工作/短期/长期记忆）",
      "实时展示 Agent 的思考过程",
      "Human-in-the-loop 确认危险操作",
      "成本追踪和预算控制",
      "对话持久化和恢复"
    ],
    deliverables:[
      "GitHub 仓库 + 详细文档",
      "Demo 视频（展示 Agent 完成复杂任务）",
      "架构设计文档（Agent 循环详解）"
    ],
    scoring:"面试官会看的点：Agent 设计的合理性/错误处理/安全措施/是否过度设计"
  },
  { id:3, title:"开源模型微调 + 部署", weeks:"第 22 周", type:"ML 工程",
    desc:"展示你能处理模型训练和部署——AI 应用到 ML 工程的桥梁项目。",
    tech:["PyTorch","HuggingFace Transformers/PEFT","QLoRA","vLLM","FastAPI"],
    features:[
      "收集/清洗领域数据（至少 1000 条）",
      "QLoRA 微调开源模型（如 Qwen/Llama）",
      "评估微调效果（微调前 vs 微调后对比）",
      "用 vLLM 部署微调模型",
      "写 FastAPI 包装 + API 文档",
      "分析自部署 vs API 的成本优势"
    ],
    deliverables:[
      "微调后的模型（HuggingFace）",
      "训练脚本和数据处理脚本",
      "部署 API + 文档",
      "技术博客（微调实战全过程）"
    ],
    scoring:"面试官会看的点：数据处理思路/训练过程记录/评估方法/成本意识"
  }
];

// ============================================================
// CHECKPOINTS
// ============================================================
const CHECKPOINTS = [
  { week:4, label:"第 1 个月结束自检", checks:[
    "不看资料能写出 Python 类（含继承/装饰器/静态方法）",
    "能用 FastAPI 写 CRUD API + 自动文档",
    "能用 Pydantic 定义复杂数据模型",
    "能写 SQL 联表查询 + GROUP BY + 子查询",
    "能用 Docker Compose 跑起 FastAPI + PostgreSQL",
    "每天都有 GitHub commit"
  ]},
  { week:8, label:"第 2 个月结束自检", checks:[
    "能独立从零搭建 FastAPI 企业级项目结构",
    "能实现 JWT 认证 + RBAC 权限",
    "能写生产级 Dockerfile（多阶段构建）",
    "能用 GitHub Actions 搭建 CI/CD",
    "能把项目部署到云服务器 + HTTPS",
    "GitHub 上有至少 2 个完整的后端项目"
  ]},
  { week:12, label:"第 3 个月结束自检", checks:[
    "能设计并实现完整的 RAG pipeline",
    "理解 chunking/embedding/检索/生成的每个环节",
    "能用 LangChain 或手写实现 RAG",
    "能对 RAG 系统做质量评估（MRR/Recall）",
    "做过至少一个 RAG Demo 并发布到公网"
  ]},
  { week:16, label:"第 4 个月结束自检", checks:[
    "能从头实现 Tool Use loop",
    "能设计并实现一个 Agent（ReAct 模式）",
    "理解 Agent 的记忆管理和安全边界",
    "能用 LangGraph 构建有状态的 Agent",
    "理解多模态 AI 的基本用法",
    "博客至少 10 篇技术文章"
  ]},
  { week:20, label:"第 5 个月结束自检", checks:[
    "企业知识库问答系统部署上线（公网可访问）",
    "项目 README 达到开源项目标准",
    "有完整的 CI/CD 流水线",
    "能自信地向面试官 Demo 产品",
    "录了产品演示视频"
  ]},
  { week:24, label:"第 6 个月结束自检", checks:[
    "GitHub 上有 3+ 高质量项目（每个都有 README + Demo）",
    "技术博客 15+ 篇",
    "至少一次开源贡献",
    "LeetCode 刷过 100+ 题",
    "拿到至少 1 个 AI 相关 offer",
    "建立了持续学习的习惯和能力"
  ]}
];

// ============================================================
// METHODOLOGY: Learning principles from the masters
// ============================================================
const METHODOLOGY = {
  masters: [
    { name:"Andrej Karpathy", role:"前 Tesla AI 总监、OpenAI 创始成员", quote:"What I cannot create, I do not understand.", principles:[
      "从零造一遍你学的东西——打开空白 .py 文件，从 import numpy 开始亲手实现",
      "永远不要只「理解概念」，必须写到代码跑通才算学会",
      "学 transformer 就手写 attention（30 行），学反向传播就手写 backprop",
      "第 1 周学装饰器：关掉教程，盲写一个带参数的装饰器",
      "第 9 周学 LLM：用 numpy 实现单头 attention，真的算一遍 Q x K^T",
      "第 11 周学 RAG：不用 LangChain，手写 chunk → embed → search → generate 全链路"
    ]},
    { name:"Jeremy Howard", role:"fast.ai 创始人", quote:"先会开车，再学修引擎。", principles:[
      "Top-Down Learning：每个新领域，先跑通一个完整项目，获得正反馈",
      "再倒推理论——看到效果后问「为什么这里用了这个？」然后深挖",
      "不要从数学开始学 ML，从训练一个能识别猫狗的模型开始",
      "第 3 周 FastAPI：先 uvicorn main:app 看到浏览器返回 JSON，再学原理",
      "第 11 周 RAG：先用 LangChain 5 行代码跑通 QA，再拆开自己写",
      "第 13 周 Tool Use：先调现成的 function calling demo，再实现 loop"
    ]},
    { name:"李沐", role:"AWS AI 科学家、MXNet 创始人", quote:"论文不是用来读的，是用来复现的。", principles:[
      "选一篇论文 → 1h 读懂核心 idea → 5h 复现核心算法 → 1h 思考「为什么这个设计更好」→ 30min 写笔记",
      "输入 → 处理 → 输出形成闭环。只看不写 = 没看。只写不教 = 半懂",
      "第 10 周：每学一个 Prompt 技巧写一篇博客",
      "每个项目做完写 README + 架构图，假装在给新同事做 onboarding",
      "第 14 周 Agent：录一个 5 分钟视频讲解 ReAct loop 每一步",
      "B 站「跟李沐学 AI」论文精读系列是最好的范例"
    ]},
    { name:"Richard Feynman", role:"诺贝尔物理学奖得主", quote:"If you can't explain it to a six-year-old, you don't understand it yourself.", principles:[
      "费曼学习法四步：选概念 → 假装教给别人 → 卡住就回去重学 → 简化再讲",
      "学到新东西后，用「外婆都能听懂」的语言写出来，不准用术语",
      "写不出来 = 没真懂。术语是掩盖不懂的工具",
      "学完 JWT 认证（第 5 周）：用一段话解释给非程序员听",
      "学完 Embedding（第 11 周）：用「图书馆书架」类比解释向量检索",
      "每周末笔记不写「今天我学了 X」，写「如果让我教 X，我会这么说…」"
    ]},
    { name:"Josh Waitzkin", role:"国际象棋神童 + 太极世界冠军", quote:"The growth happens at the edge of your comfort zone.", principles:[
      "每天只练 3-4 小时「深度刻意训练」，其余时间消化",
      "质量 > 数量：4 小时高度专注 > 12 小时磨洋工",
      "每次只聚焦一个极窄的技能点，练到肌肉记忆",
      "练完必须休息让潜意识消化（散步/冥想/睡眠）",
      "早上 7-11 点 = 黄金深度工作时（4h），处理最难内容",
      "下午做项目/补漏，晚上写笔记+计划明天"
    ]},
    { name:"Paul Graham", role:"Y Combinator 创始人", quote:"Make things. Ship fast. Iterate.", principles:[
      "Done > Perfect：每阶段产出物必须可交付（可演示/可访问）",
      "GitHub 就是你的市场——每个项目 1 周内上线能 demo 的版本",
      "绝不在本地打磨 2 个月。3 天上 MVP，根据反馈迭代",
      "Todo API（第 3 周）：当天部署到公网，当天发链接给朋友",
      "RAG Demo（第 11 周）：3 天内上线能用的版本，后续迭代",
      "旗舰项目（第 19 周）：第一周出 MVP，第二周打磨"
    ]}
  ],
  laws: [
    { num:1, title:"建造 > 消费（Build > Consume）", desc:"黄金比例：30% 输入，70% 输出。如果今天学了 8 小时，至少 5.5 小时在写代码/写博客/做项目，最多 2.5 小时在看资料。视频可以倍速看，代码不能倍速写。"},
    { num:2, title:"从零实现一切（Implement from Scratch）", desc:"每学一个新概念，必须经过三层：理解层（看懂概念）→ 实现层（从零写代码）→ 教授层（讲给别人听）。至少达到第二层才能进入下一个概念。"},
    { num:3, title:"费曼学习法（Teach to Learn）", desc:"每周末花 1 小时：打开空白文档 → 标题「如果我给新人讲 XXX」→ 用最朴素的语言写 → 标注解释不清的地方 → 发布到博客。24 周后拥有 24 篇博客 + 面试时答案自己流出来。"},
    { num:4, title:"交叉训练（Interleaving）", desc:"研究表明交错练习比集中练习的记忆保持率高 50%。每天至少切换 3 个不同技能领域。不要一整周只做一件事。"},
    { num:5, title:"刻意练习（Deliberate Practice）", desc:"每知识点练三遍：第一遍看教程跟着做（理解）→ 第二遍关教程回忆着做（巩固）→ 第三遍隔一天完全不看任何东西做（内化）。如果第一遍就能做出来，说明在舒适区，换更难的。"},
    { num:6, title:"深度工作（Deep Work）", desc:"高质量产出 = 专注时间 x 专注强度。番茄钟 50 分钟只做一件事，手机放另一个房间。每 50 分钟休息 10 分钟。每天目标是 3-4 小时的真正深度工作，不是 10 小时的假装学习。"},
    { num:7, title:"学习闭环（Input → Process → Output）", desc:"每完成一个闭环，大脑释放多巴胺驱动正向反馈。输入（看 30min）→ 处理（写代码/画图）→ 输出（博客/项目/Demo）。大多数人停在第一步。"},
    { num:8, title:"睡眠是学习的一部分", desc:"神经科学：睡眠时大脑重放白日神经活动强化记忆。学完新知识 24h 内睡够 7-8h → 记忆保留率 +40%。睡前去 30 分钟复习最难概念 → 睡眠中优先巩固。"},
    { num:9, title:"坚持公开展示（Learn in Public）", desc:"创建博客/GitHub/社交媒体 → 每学一样就输出一篇 → 不担心写得不好 → 持续 6 个月。面试说「我写了 20 篇 AI 技术博客」比「我学了 6 个月 AI」强 100 倍。"},
    { num:10, title:"迭代速度 > 完美质量", desc:"learning_speed = output_frequency / perfectionism_level。项目不要本地打磨 3 周上线 → 3 天上 MVP。博客不要写到完美再发 → 先发再改。面试不要等完全准备好再投 → 先投小公司练手。"}
  ],
  dailyActions: [
    { rule:"建造 > 消费", action:"每天写代码时间 ≥ 看资料时间 × 2.3" },
    { rule:"从零实现", action:"至少有一个概念是不看教程盲写的" },
    { rule:"费曼学习", action:"每个周末写一篇「教别人」的博客" },
    { rule:"交叉训练", action:"每天切换 3+ 个技能领域" },
    { rule:"刻意练习", action:"每道题/每个功能不看教程做第二遍" },
    { rule:"深度工作", action:"上午 4 小时手机放另一个房间" },
    { rule:"学习闭环", action:"每天有可交付物（代码 commit/博客/笔记）" },
    { rule:"睡眠", action:"每天 7-8 小时，周末也不例外" },
    { rule:"坚持输出", action:"每篇博客发到掘金/知乎/V2EX" },
    { rule:"快速迭代", action:"任何项目 3 天内上线 MVP" }
  ],
  cheatCode: "如果只记住一句话——Don't just read about it. Don't just watch a video about it. Open a blank file and build it from scratch. That's the only way. — Andrej Karpathy\n\n如果只做一个改变——每天最后 1 小时，关掉所有教程，打开空白文档，用自己的话写下今天学到了什么。写不出来 = 明天重学。"
};

// ============================================================
// WEEKLY RESOURCES: Specific high-quality links per week
// Each entry: {title, url, source, desc}
// ============================================================
const WEEKLY_RESOURCES = {
0:[ // Week 1
  {title:"Python 官方教程 §3-5", url:"https://docs.python.org/3/tutorial/introduction.html", source:"docs.python.org", desc:"重点读 3.1-3.2（数字/字符串）、5.1-5.5（列表/元组/集合/字典）"},
  {title:"Real Python: Python Basics", url:"https://realpython.com/python-basics/", source:"realpython.com", desc:"跟着做每一节，不要跳。代码全部自己手打一遍"},
  {title:"Python Crash Course 第2-6章", url:"https://nostarch.com/python-crash-course-3rd-edition", source:"书籍", desc:"项目驱动，每章末尾的练习必做"},
  {title:"LeetCode 热题 100 - 哈希表", url:"https://leetcode.cn/problem-list/2cktkvj/", source:"leetcode.cn", desc:"Two Sum, Valid Anagram, Group Anagrams 先做这三道"}
],
1:[ // Week 2
  {title:"mypy 官方文档", url:"https://mypy.readthedocs.io/en/stable/getting_started.html", source:"mypy.readthedocs.io", desc:"从 Getting Started 开始，给一个函数加上类型标注跑一遍"},
  {title:"pytest 官方文档", url:"https://docs.pytest.org/en/stable/getting-started.html", source:"docs.pytest.org", desc:"重点：fixture、parametrize、raises。不必全读"},
  {title:"Real Python: Async IO in Python", url:"https://realpython.com/async-io-python/", source:"realpython.com", desc:"最好的 asyncio 教程，从生成器讲到事件循环"},
  {title:"Python 类型系统 (PEP 484)", url:"https://peps.python.org/pep-0484/", source:"python.org", desc:"不需要全部看懂，浏览一遍知道有哪些类型即可"}
],
2:[ // Week 3
  {title:"FastAPI 官方教程（必读）", url:"https://fastapi.tiangolo.com/tutorial/", source:"fastapi.tiangolo.com", desc:"从 First Steps 做到 Body - Updates。代码全部手打"},
  {title:"Pydantic 官方文档", url:"https://docs.pydantic.dev/latest/concepts/models/", source:"docs.pydantic.dev", desc:"重点读 Models、Fields、Validators 三章"},
  {title:"FastAPI + Pydantic 实战 (TestDriven)", url:"https://testdriven.io/blog/fastapi-react/", source:"testdriven.io", desc:"跟着做一个完整的 FastAPI 项目（可以跳过 React 部分）"}
],
3:[ // Week 4
  {title:"PostgreSQL 官方 Tutorial（1-4章）", url:"https://www.postgresql.org/docs/current/tutorial.html", source:"postgresql.org", desc:" 1.入门 → 2.SQL语言 → 3.高级特性。边看边在 psql 里敲"},
  {title:"SQLZoo 交互练习", url:"https://sqlzoo.net/wiki/SQL_Tutorial", source:"sqlzoo.net", desc:"从第 1 节做到第 9 节，每节所有题目都做"},
  {title:"SQLAlchemy 2.0 官方教程", url:"https://docs.sqlalchemy.org/en/20/tutorial/index.html", source:"docs.sqlalchemy.org", desc:"跟着做一遍 Unified Tutorial，代码全部自己写"},
  {title:"Docker 官方 Get Started", url:"https://docs.docker.com/get-started/", source:"docs.docker.com", desc:"从 Part 1 做到 Part 6，每步都在本地跑通"},
  {title:"Alembic 官方教程", url:"https://alembic.sqlalchemy.org/en/latest/tutorial.html", source:"alembic.sqlalchemy.org", desc:"边看边创建第一个 migration"}
],
4:[ // Week 5
  {title:"FastAPI 依赖注入详解", url:"https://fastapi.tiangolo.com/tutorial/dependencies/", source:"fastapi.tiangolo.com", desc:"从 First Steps 到 Advanced Dependencies 全读"},
  {title:"FastAPI Security 教程", url:"https://fastapi.tiangolo.com/tutorial/security/", source:"fastapi.tiangolo.com", desc:"OAuth2 + JWT 的完整实现"},
  {title:"JWT 官方介绍", url:"https://jwt.io/introduction", source:"jwt.io", desc:"理解 JWT 三部分结构（Header/Payload/Signature）"},
  {title:"passlib + bcrypt 文档", url:"https://passlib.readthedocs.io/en/stable/", source:"passlib.readthedocs.io", desc:"重点看 CryptContext 和 bcrypt 部分"}
],
5:[ // Week 6
  {title:"Dockerfile 最佳实践", url:"https://docs.docker.com/build/building/best-practices/", source:"docs.docker.com", desc:"每一条规则都用在你的 Dockerfile 里"},
  {title:"Docker Compose 官方文档", url:"https://docs.docker.com/compose/compose-file/", source:"docs.docker.com", desc:"对着你的 docker-compose.yml 逐条理解配置项"},
  {title:"Linux Journey（免费中文友好）", url:"https://linuxjourney.com/", source:"linuxjourney.com", desc:"从 Command Line 做到 Processes"},
  {title:"Nginx 入门指南", url:"https://nginx.org/en/docs/beginners_guide.html", source:"nginx.org", desc:"官方入门，proxy_pass/upstream 是重点"},
  {title:"Let's Encrypt 官方文档", url:"https://letsencrypt.org/getting-started/", source:"letsencrypt.org", desc:"用 certbot 一键配置 HTTPS"}
],
6:[ // Week 7
  {title:"Learn Git Branching（游戏化学习）", url:"https://learngitbranching.js.org/", source:"GitHub.io", desc:"把 rebase/merge/cherry-pick 全部玩一遍，比看书有意思多了"},
  {title:"Pro Git 书籍（免费）§6-7", url:"https://git-scm.com/book/zh/v2", source:"git-scm.com", desc:"第6章 GitHub、第7章 Git工具。最权威的 Git 书"},
  {title:"GitHub Actions 官方文档", url:"https://docs.github.com/en/actions/quickstart", source:"docs.github.com", desc:"从 Quickstart 开始，然后看 Python 模板"},
  {title:"Conventional Commits 规范", url:"https://www.conventionalcommits.org/zh-hans/", source:"conventionalcommits.org", desc:"5分钟看完，以后所有 commit 都按这个格式"}
],
7:[ // Week 8
  {title:"Cosmic Python（免费在线书）", url:"https://www.cosmicpython.com/", source:"cosmicpython.com", desc:"第1章 Domain Modeling，学企业级项目结构"},
  {title:"FastAPI 项目结构最佳实践", url:"https://github.com/zhanymkanov/fastapi-best-practices", source:"GitHub", desc:"一个浓缩的 FastAPI 最佳实践清单"},
  {title:"12 Factor App（SaaS 方法论）", url:"https://12factor.net/zh_cn/", source:"12factor.net", desc:"你的项目应该满足这 12 条原则"}
],
8:[ // Week 9
  {title:"Anthropic 文档：Models & Pricing", url:"https://docs.anthropic.com/en/docs/about-claude/models", source:"docs.anthropic.com", desc:"理解各模型的定位和 token 计费方式"},
  {title:"OpenAI Cookbook（Python SDK 示例）", url:"https://cookbook.openai.com/", source:"cookbook.openai.com", desc:"看最新的 SDK 用法，里面的代码拷下来就能跑"},
  {title:"OpenAI Tokenizer 在线工具", url:"https://platform.openai.com/tokenizer", source:"platform.openai.com", desc:"输入一段中文看被切成多少个 token"},
  {title:"Karpathy: Let's build GPT from scratch", url:"https://www.youtube.com/watch?v=kCc8FmEb1nY", source:"YouTube", desc:"2小时视频，理解 tokenization → attention → generation"}
],
9:[ // Week 10
  {title:"Anthropic Prompt Engineering Guide ★必读★", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", source:"docs.anthropic.com", desc:"当前最好的 Prompt 工程文档，每节都读"},
  {title:"OpenAI Prompt Engineering Guide", url:"https://platform.openai.com/docs/guides/prompt-engineering", source:"platform.openai.com", desc:"六大策略 + 具体示例，对着你的 prompt 逐条检查"},
  {title:"Instructor 库文档（结构化输出）", url:"https://python.useinstructor.com/", source:"useinstructor.com", desc:"用 Pydantic 控制 LLM 输出 JSON，比裸写 prompt 靠谱"},
  {title:"DSPy 官方文档（声明式 Prompt 优化）", url:"https://dspy-docs.vercel.app/", source:"dspy.ai", desc:"了解即可——让你知道 prompt 还可以这么写"}
],
10:[ // Week 11
  {title:"LangChain RAG 教程", url:"https://python.langchain.com/docs/tutorials/rag/", source:"python.langchain.com", desc:"跟着从头到尾做完，理解 RAG 的每个环节"},
  {title:"LlamaIndex RAG 教程", url:"https://docs.llamaindex.ai/en/stable/understanding/", source:"docs.llamaindex.ai", desc:"另一个视角看 RAG，对比 LangChain 的区别"},
  {title:"Chroma 官方文档 - Usage Guide", url:"https://docs.trychroma.com/docs/overview/introduction", source:"docs.trychroma.com", desc:"从 Getting Started 看完，5 行代码搞定向量存储"},
  {title:"Pinecone: Chunking Strategies", url:"https://www.pinecone.io/learn/chunking-strategies/", source:"pinecone.io", desc:"最好的 chunking 策略综述，直接影响 RAG 质量"},
  {title:"t-SNE/UMAP 可视化 embedding", url:"https://projector.tensorflow.org/", source:"tensorflow.org", desc:"上传你的 embedding 向量，看聚类效果"}
],
11:[ // Week 12
  {title:"Pinecone: RAG Evaluation", url:"https://www.pinecone.io/learn/rag-evaluation/", source:"pinecone.io", desc:"MRR/Recall@k/NDCG 详解，建立评估思维"},
  {title:"RAGAS 框架文档", url:"https://docs.ragas.io/", source:"docs.ragas.io", desc:"RAG 专用评估框架，自动评分你的 RAG 系统"},
  {title:"Cohere Rerank 文档", url:"https://docs.cohere.com/docs/reranking", source:"docs.cohere.com", desc:"理解 reranker 在 RAG pipeline 中的位置"},
  {title:"Milvus 文档：索引类型", url:"https://milvus.io/docs/index.md", source:"milvus.io", desc:"理解 HNSW/IVF_FLAT 等不同索引的 tradeoff"},
  {title:"LlamaIndex: 多模态 RAG", url:"https://docs.llamaindex.ai/en/stable/examples/multi_modal/", source:"docs.llamaindex.ai", desc:"处理 PDF 中的图片和表格"}
],
12:[ // Week 13
  {title:"Anthropic Tool Use 文档 ★必读★", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use", source:"docs.anthropic.com", desc:"从 Overview 看到 Best Practices，所有代码示例跑一遍"},
  {title:"OpenAI Function Calling 文档", url:"https://platform.openai.com/docs/guides/function-calling", source:"platform.openai.com", desc:"对比 Anthropic 的 Tool Use，理解差异"},
  {title:"Pydantic + Tool Use 整合", url:"https://python.useinstructor.com/concepts/function-calls/", source:"useinstructor.com", desc:"用 Pydantic 生成 Tool Schema，比手写 JSON Schema 强"},
  {title:"LangChain Tool 文档", url:"https://python.langchain.com/docs/how_to/custom_tools/", source:"python.langchain.com", desc:"看 LangChain 如何抽象 Tool，理解其设计"}
],
13:[ // Week 14
  {title:"Anthropic: Building Effective Agents ★必读★", url:"https://www.anthropic.com/engineering/building-effective-agents", source:"anthropic.com", desc:"Agent 设计的圣经。Workflow vs Agent 的决策框架"},
  {title:"LangGraph 官方教程", url:"https://langchain-ai.github.io/langgraph/tutorials/", source:"langchain-ai.github.io", desc:"从 Introduction 做到 Agent 教程"},
  {title:"Lilian Weng: LLM Powered Autonomous Agents", url:"https://lilianweng.github.io/posts/2023-06-23-agent/", source:"lilianweng.github.io", desc:"Agent 架构综述：Planning/Memory/Tool Use 三大组件"},
  {title:"ReAct 论文", url:"https://arxiv.org/abs/2210.03629", source:"arxiv.org", desc:"读摘要和第3节方法部分，理解 Thought-Action-Observation 循环"}
],
14:[ // Week 15
  {title:"LangChain 官方文档", url:"https://python.langchain.com/docs/introduction/", source:"python.langchain.com", desc:"系统过一遍文档，理解 Chain/Agent/Retriever 三大抽象"},
  {title:"LangGraph 官方文档", url:"https://langchain-ai.github.io/langgraph/concepts/", source:"langchain-ai.github.io", desc:"High Level Concepts 必读：StateGraph/Nodes/Edges"},
  {title:"LCEL (LangChain Expression Language)", url:"https://python.langchain.com/docs/concepts/lcel/", source:"python.langchain.com", desc:"管道语法，一行代码串联整个 chain"},
  {title:"LangChain 源码阅读：Chain 类", url:"https://github.com/langchain-ai/langchain/blob/master/libs/langchain/langchain/chains/base.py", source:"GitHub", desc:"看 Chain.__call__ 方法（约 50 行），理解其核心抽象"}
],
15:[ // Week 16
  {title:"Anthropic Vision API 文档", url:"https://docs.anthropic.com/en/docs/build-with-claude/vision", source:"docs.anthropic.com", desc:"base64 编码图片，传给 Claude 理解图片内容"},
  {title:"OpenAI Whisper 文档", url:"https://platform.openai.com/docs/guides/speech-to-text", source:"platform.openai.com", desc:"语音转文字，Python SDK 几行代码就搞定"},
  {title:"FastAPI SSE 教程", url:"https://fastapi.tiangolo.com/advanced/events/", source:"fastapi.tiangolo.com", desc:"用 StreamingResponse 实现服务端推送"},
  {title:"LangSmith 文档", url:"https://docs.smith.langchain.com/", source:"docs.smith.langchain.com", desc:"Agent 执行链的 tracing 和监控"}
],
16:[ // Week 17
  {title:"Ollama 官方文档", url:"https://github.com/ollama/ollama", source:"GitHub", desc:"README 看完就会用。下载 → run → 调 API"},
  {title:"vLLM 官方文档", url:"https://docs.vllm.ai/en/stable/", source:"docs.vllm.ai", desc:"从 Quickstart 开始，部署第一个模型服务"},
  {title:"HuggingFace: Quantization Guide", url:"https://huggingface.co/docs/transformers/quantization", source:"huggingface.co", desc:"理解 GPTQ/AWQ/BNB 等量化方法"},
  {title:"Tim Dettmers: LLM.int8() 论文", url:"https://arxiv.org/abs/2208.07339", source:"arxiv.org", desc:"读 Introduction 理解为什么量化可行"},
  {title:"Flash Attention 论文", url:"https://arxiv.org/abs/2205.14135", source:"arxiv.org", desc:"读 Abstract 和 Figure 1，理解 IO-aware attention"}
],
17:[ // Week 18
  {title:"Anthropic Prompt Caching 文档", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching", source:"docs.anthropic.com", desc:"最实用的成本优化：相同的 prompt 前缀不重复计费"},
  {title:"Redis 官方教程", url:"https://redis.io/docs/latest/develop/get-started/", source:"redis.io", desc:"从安装到数据类型到 Pub/Sub，数据结构和缓存"},
  {title:"Celery 官方文档", url:"https://docs.celeryq.dev/en/stable/getting-started/", source:"docs.celeryq.dev", desc:"Python 分布式任务队列，异步处理 AI 任务"},
  {title:"pgvector 文档", url:"https://github.com/pgvector/pgvector", source:"GitHub", desc:"PostgreSQL 原生向量扩展，混合查询（标量+向量）"}
],
18:[ // Week 19
  {title:"FastAPI + PostgreSQL + Docker 项目模板", url:"https://github.com/tiangolo/full-stack-fastapi-template", source:"GitHub", desc:"官方全栈模板，结构清晰，直接参考项目布局"},
  {title:"Streamlit 官方文档", url:"https://docs.streamlit.io/", source:"docs.streamlit.io", desc:"Python 写前端，30 分钟出一个能看的 AI Demo"},
  {title:"Gradio 官方文档", url:"https://www.gradio.app/docs", source:"gradio.app", desc:"Streamlit 的替代方案，更适合 ML Demo"},
  {title:"PRD 模板（供参考）", url:"https://www.atlassian.com/software/confluence/templates/product-requirements", source:"atlassian.com", desc:"写 PRD 的模板，定义核心功能和非功能需求"}
],
19:[ // Week 20
  {title:"GitHub Release 文档", url:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository", source:"docs.github.com", desc:"如何发布 Release v1.0"},
  {title:"README 模板（Awesome README）", url:"https://github.com/matiassingers/awesome-readme", source:"GitHub", desc:"参考这个写 README，面试官打开会眼前一亮"},
  {title:"Shields.io（GitHub Badges）", url:"https://shields.io/", source:"shields.io", desc:"给项目加 CI passing/coverage/license badges"},
  {title:"OBS Studio（免费录屏）", url:"https://obsproject.com/", source:"obsproject.com", desc:"录产品 Demo 视频，免费好用"}
],
20:[ // Week 21
  {title:"LangGraph Agent 教程", url:"https://langchain-ai.github.io/langgraph/tutorials/introduction/", source:"langchain-ai.github.io", desc:"跟着做一个完整的 Agent"},
  {title:"CrewAI 文档（多 Agent 框架）", url:"https://docs.crewai.com/", source:"docs.crewai.com", desc:"多 Agent 协作框架，了解不同的 Agent 设计"},
  {title:"Anthropic: Tool Use Best Practices", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview#best-practices", source:"docs.anthropic.com", desc:"工具设计的 6 条最佳实践"}
],
21:[ // Week 22
  {title:"HuggingFace PEFT 文档", url:"https://huggingface.co/docs/peft/", source:"huggingface.co", desc:"QLoRA 微调的全套工具"},
  {title:"HuggingFace TRL 文档", url:"https://huggingface.co/docs/trl/", source:"huggingface.co", desc:"SFT/DPO/RLHF 训练的统一接口"},
  {title:"GitHub Profile README 灵感", url:"https://github.com/abhisheknaiidu/awesome-github-profile-readme", source:"GitHub", desc:"参考别人的 Profile README，做出你的"},
  {title:"Good First Issue 汇总", url:"https://goodfirstissue.dev/", source:"goodfirstissue.dev", desc:"找开源项目的 first issue 来贡献"}
],
22:[ // Week 23
  {title:"LeetCode Hot 100", url:"https://leetcode.cn/problem-list/2cktkvj/", source:"leetcode.cn", desc:"逐题过，每道题先自己想 10 分钟再看题解"},
  {title:"NeetCode 算法路线图", url:"https://neetcode.io/roadmap", source:"neetcode.io", desc:"结构化的算法学习路径，按数据结构分类"},
  {title:"System Design Interview 入门 (ByteByteGo)", url:"https://bytebytego.com/", source:"bytebytego.com", desc:"系统设计面试框架 + 经典案例"},
  {title:"ML 面试题汇总 (GitHub)", url:"https://github.com/khangich/machine-learning-interview", source:"GitHub", desc:"ML 八股文题库，对着准备"}
],
23:[ // Week 24
  {title:"BOSS直聘 / BOSS直聘 AI 岗位", url:"https://www.zhipin.com/", source:"zhipin.com", desc:"搜索「AI 应用工程师」「LLM 应用开发」「RAG 工程师」"},
  {title:"脉脉 AI 圈", url:"https://maimai.cn/", source:"maimai.cn", desc:"找内推、看面经、了解薪资"},
  {title:"pramp.com（免费模拟面试）", url:"https://www.pramp.com/", source:"pramp.com", desc:"和老外互相做模拟面试，练英语 + 技术"},
  {title:"Offer 评估指南 (levels.fyi)", url:"https://www.levels.fyi/", source:"levels.fyi", desc:"对比各家薪资，心中有数"},
  {title:"入职 90 天计划模板", url:"https://www.atlassian.com/software/confluence/templates/90-day-plan", source:"atlassian.com", desc:"入职前写一份 30-60-90 天计划"}
]
};

// ============================================================
// DAY RESOURCES: 1-2 specific links per day, mapped to tasks
// Key: "{weekIdx}-{dayIdx}"
// Each entry: {title, url, for}
// ============================================================
const DAY_RESOURCES = {
// ===== WEEK 1: Python 深度筑基 =====
"0-0":[{title:"Python 下载页 → 选 3.11.x", url:"https://www.python.org/downloads/", for:"安装 Python 3.11+"},
       {title:"VS Code 下载 + Python 扩展安装", url:"https://code.visualstudio.com/docs/languages/python", for:"安装 VS Code 和 Python 插件"}],
"0-1":[{title:"Python 官方：列表操作大全", url:"https://docs.python.org/3/tutorial/datastructures.html#more-on-lists", for:"手写 list 增删改查 + 切片 + 推导式"},
       {title:"LeetCode: Two Sum", url:"https://leetcode.cn/problems/two-sum/", for:"LeetCode 练手"}],
"0-2":[{title:"Real Python: 字典使用指南", url:"https://realpython.com/python-dicts/", for:"字典操作 + defaultdict"},
       {title:"Real Python: 函数参数 *args **kwargs", url:"https://realpython.com/python-kwargs-and-args/", for:"灵活的函数 + 装饰器入门"}],
"0-3":[{title:"Python 官方：文件读写", url:"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files", for:"with open 读写文件"},
       {title:"Python 官方：异常处理", url:"https://docs.python.org/3/tutorial/errors.html", for:"try/except + 自定义异常"}],
"0-4":[{title:"Real Python: OOP 入门", url:"https://realpython.com/python3-object-oriented-programming/", for:"类/继承/特殊方法"},
       {title:"Python 官方：property 装饰器", url:"https://docs.python.org/3/library/functions.html#property", for:"@property/@setter"}],
"0-5":[{title:"Real Python: super() 详解", url:"https://realpython.com/python-super/", for:"继承链 + super() + MRO"},
       {title:"Python 官方：dataclasses", url:"https://docs.python.org/3/library/dataclasses.html", for:"dataclass 重构类"}],
"0-6":[{title:"black 格式化工具文档", url:"https://black.readthedocs.io/en/stable/getting_started.html", for:"代码规范检查"},
       {title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"发布学习笔记"}],
// ===== WEEK 2 =====
"1-0":[{title:"mypy 快速入门", url:"https://mypy.readthedocs.io/en/stable/getting_started.html", for:"类型标注 + mypy 静态检查"},
       {title:"Python 官方 typing 模块文档", url:"https://docs.python.org/3/library/typing.html", for:"List/Dict/Optional/Union 等"}],
"1-1":[{title:"Python 官方：Generics", url:"https://docs.python.org/3/library/typing.html#generics", for:"TypeVar/Generic/Protocol"},
       {title:"Pydantic 官方文档：Models", url:"https://docs.pydantic.dev/latest/concepts/models/", for:"BaseModel 入门"}],
"1-2":[{title:"pytest 官方快速入门", url:"https://docs.pytest.org/en/stable/getting-started.html", for:"第一个测试 + assert + fixture"},
       {title:"pytest parametrize 文档", url:"https://docs.pytest.org/en/stable/how-to/parametrize.html", for:"参数化测试"}],
"1-3":[{title:"pytest-cov 文档", url:"https://pytest-cov.readthedocs.io/en/latest/", for:"测试覆盖率"},
       {title:"Python 官方 pdb 文档", url:"https://docs.python.org/3/library/pdb.html", for:"pdb 调试命令"}],
"1-4":[{title:"Real Python: 线程入门", url:"https://realpython.com/intro-to-python-threading/", for:"threading + GIL + Lock"},
       {title:"Python 官方：concurrent.futures", url:"https://docs.python.org/3/library/concurrent.futures.html", for:"ThreadPoolExecutor"}],
"1-5":[{title:"Real Python: Async IO", url:"https://realpython.com/async-io-python/", for:"asyncio + async/await + gather"},
       {title:"aiohttp 官方文档", url:"https://docs.aiohttp.org/en/stable/", for:"异步 HTTP 请求"}],
"1-6":[{title:"Real Python: 并发对比指南", url:"https://realpython.com/python-concurrency/", for:"同步 vs 多线程 vs 异步对比实验"},
       {title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"发布本周总结博客"}],
// ===== WEEK 3 =====
"2-0":[{title:"FastAPI 官方：First Steps", url:"https://fastapi.tiangolo.com/tutorial/first-steps/", for:"第一个 API + uvicorn + Swagger"}],
"2-1":[{title:"FastAPI 官方：Path Params", url:"https://fastapi.tiangolo.com/tutorial/path-params/", for:"路径参数 + 查询参数"},
       {title:"FastAPI 官方：Query Params", url:"https://fastapi.tiangolo.com/tutorial/query-params/", for:"查询参数校验"}],
"2-2":[{title:"FastAPI 官方：Body", url:"https://fastapi.tiangolo.com/tutorial/body/", for:"Pydantic + 请求体"},
       {title:"Pydantic 官方：Field types", url:"https://docs.pydantic.dev/latest/concepts/fields/", for:"Field 约束"}],
"2-3":[{title:"FastAPI 官方：Form + File Upload", url:"https://fastapi.tiangolo.com/tutorial/request-forms-and-files/", for:"表单 + 文件上传"},
       {title:"HTTPie 官方文档", url:"https://httpie.io/docs/cli", for:"用 HTTPie 测试 API"}],
"2-4":[{title:"FastAPI 官方：Handling Errors", url:"https://fastapi.tiangolo.com/tutorial/handling-errors/", for:"HTTPException + 全局异常处理"},
       {title:"Python 官方 logging 教程", url:"https://docs.python.org/3/howto/logging.html", for:"结构化日志"}],
"2-5":[{title:"FastAPI 官方：First Steps 回顾", url:"https://fastapi.tiangolo.com/tutorial/first-steps/", for:"完整 CRUD + 搜索 + 分页"}],
"2-6":[{title:"FastAPI 官方：Testing", url:"https://fastapi.tiangolo.com/tutorial/testing/", for:"TestClient + pytest"},
       {title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"发布 FastAPI 入门教程博客"}],
// ===== WEEK 4 =====
"3-0":[{title:"PostgreSQL 官方 Tutorial §2", url:"https://www.postgresql.org/docs/current/tutorial-sql.html", for:"CREATE TABLE + INSERT + SELECT"},
       {title:"psql 命令行速查", url:"https://www.postgresql.org/docs/current/app-psql.html", for:"psql 基本命令"}],
"3-1":[{title:"PostgreSQL 官方 Tutorial §3", url:"https://www.postgresql.org/docs/current/tutorial-advanced.html", for:"JOIN + GROUP BY + 子查询"},
       {title:"SQLZoo 交互练习", url:"https://sqlzoo.net/wiki/SQL_Tutorial", for:"10 道 SQL 练习题"}],
"3-2":[{title:"SQLAlchemy 2.0 官方教程 §1-2", url:"https://docs.sqlalchemy.org/en/20/tutorial/index.html", for:"Engine/Session/Model 定义"},
       {title:"SQLAlchemy ORM Quick Start", url:"https://docs.sqlalchemy.org/en/20/orm/quickstart.html", for:"Session CRUD"}],
"3-3":[{title:"SQLAlchemy 官方：Relationships", url:"https://docs.sqlalchemy.org/en/20/orm/basic_relationships.html", for:"一对多 + 多对多"},
       {title:"Alembic 官方教程", url:"https://alembic.sqlalchemy.org/en/latest/tutorial.html", for:"第一次 migration"}],
"3-4":[{title:"Docker 官方 Get Started Part 1", url:"https://docs.docker.com/get-started/", for:"安装 Docker + 基本概念"},
       {title:"Docker 官方：docker run 参考", url:"https://docs.docker.com/engine/reference/run/", for:"docker run/ps/logs 命令"}],
"3-5":[{title:"Docker Compose 官方 Getting Started", url:"https://docs.docker.com/compose/gettingstarted/", for:"docker-compose.yml + docker compose up"}],
"3-6":[{title:"Docker 官方：多容器应用", url:"https://docs.docker.com/compose/compose-file/", for:"FastAPI + PostgreSQL 整合"},
       {title:"pytest 官方文档", url:"https://docs.pytest.org/en/stable/", for:"集成测试"}],
// ===== WEEK 5 =====
"4-0":[{title:"FastAPI 官方：Dependencies", url:"https://fastapi.tiangolo.com/tutorial/dependencies/", for:"Depends + 可复用依赖"},
       {title:"FastAPI 官方：Advanced Dependencies", url:"https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/", for:"yield 依赖清理"}],
"4-1":[{title:"FastAPI 官方：Security Intro", url:"https://fastapi.tiangolo.com/tutorial/security/", for:"认证概念"},
       {title:"passlib 官方文档", url:"https://passlib.readthedocs.io/en/stable/", for:"bcrypt 哈希密码"}],
"4-2":[{title:"FastAPI 官方：OAuth2 + JWT", url:"https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/", for:"JWT 生成 + 验证"},
       {title:"python-jose 文档", url:"https://python-jose.readthedocs.io/", for:"JWT encode/decode"}],
"4-3":[{title:"FastAPI 官方：Bigger Applications", url:"https://fastapi.tiangolo.com/tutorial/bigger-applications/", for:"RBAC + 项目结构"},
       {title:"MDN: CORS 详解", url:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS", for:"理解 CORS"}],
"4-4":[{title:"FastAPI 官方：Middleware", url:"https://fastapi.tiangolo.com/tutorial/middleware/", for:"自定义中间件"},
       {title:"Starlette 官方：Middleware", url:"https://www.starlette.io/middleware/", for:"ASGI middleware 执行顺序"}],
"4-5":[{title:"FastAPI 官方：Bigger Applications", url:"https://fastapi.tiangolo.com/tutorial/bigger-applications/", for:"企业级项目结构重构"},
       {title:"Pydantic Settings 文档", url:"https://docs.pydantic.dev/latest/concepts/pydantic_settings/", for:"多环境配置管理"}],
"4-6":[{title:"OWASP Top 10 (2021)", url:"https://owasp.org/www-project-top-ten/", for:"安全审计清单"},
       {title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"发布 FastAPI 项目结构博客"}],
// ===== WEEK 6 =====
"5-0":[{title:"Docker 官方：Dockerfile Best Practices", url:"https://docs.docker.com/build/building/best-practices/", for:"多阶段构建 + 安全最佳实践"}],
"5-1":[{title:"Docker 官方：网络概览", url:"https://docs.docker.com/network/", for:"bridge/host/none"},
       {title:"Docker 官方：Volumes", url:"https://docs.docker.com/storage/volumes/", for:"volume vs bind mount"}],
"5-2":[{title:"Docker Compose 官方文档", url:"https://docs.docker.com/compose/compose-file/", for:"多服务编排 + healthcheck"},
       {title:"Docker 官方：docker compose config", url:"https://docs.docker.com/compose/reference/config/", for:"验证配置"}],
"5-3":[{title:"Linux Journey", url:"https://linuxjourney.com/", for:"文件系统 + 权限 + 进程"},
       {title:"SSH 官方手册", url:"https://www.openssh.com/manual.html", for:"ssh 密钥认证 + config"}],
"5-4":[{title:"Bash 脚本入门（Linuxize）", url:"https://linuxize.com/post/bash-scripting-tutorial-for-beginners/", for:"deploy.sh + set -e + cron"}],
"5-5":[{title:"Nginx 官方入门指南", url:"https://nginx.org/en/docs/beginners_guide.html", for:"反向代理 + upstream"},
       {title:"Let's Encrypt 官方文档", url:"https://letsencrypt.org/getting-started/", for:"certbot + HTTPS"}],
"5-6":[{title:"阿里云 ECS 文档", url:"https://help.aliyun.com/product/25365.html", for:"云服务器部署"},
       {title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"Docker + Linux 部署博客"}],
// ===== WEEK 7 =====
"6-0":[{title:"Learn Git Branching（游戏）", url:"https://learngitbranching.js.org/", for:"rebase/merge/cherry-pick 全部练习"},
       {title:"Pro Git 书籍 §7（免费）", url:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%80%89%E6%8B%A9%E4%BF%AE%E8%AE%A2%E7%89%88%E6%9C%AC", for:"git bisect + reflog"}],
"6-1":[{title:"Conventional Commits 规范", url:"https://www.conventionalcommits.org/zh-hans/", for:"commit message 规范"},
       {title:"pre-commit 官方文档", url:"https://pre-commit.com/", for:"自动检查代码格式"}],
"6-2":[{title:"GitHub Actions 快速入门", url:"https://docs.github.com/en/actions/quickstart", for:"第一个 workflow"}],
"6-3":[{title:"GitHub Actions: Python 模板", url:"https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python", for:"lint + test + build"}],
"6-4":[{title:"Martin Fowler: 测试金字塔", url:"https://martinfowler.com/bliki/TestPyramid.html", for:"测试策略理解"},
       {title:"Python 官方：unittest.mock", url:"https://docs.python.org/3/library/unittest.mock.html", for:"mock/stub/fake"}],
"6-5":[{title:"ruff 官方文档", url:"https://docs.astral.sh/ruff/", for:"新一代 Python linter"}],
"6-6":[{title:"GitHub Actions: 部署到云服务器", url:"https://docs.github.com/en/actions/deployment/about-deployments", for:"自动化部署流水线"}],
// ===== WEEK 8 =====
"7-0":[{title:"Cosmic Python §1: Domain Modeling", url:"https://www.cosmicpython.com/book/chapter_01_domain_model.html", for:"ER 图 + API 设计"},
       {title:"draw.io（在线画图）", url:"https://app.diagrams.net/", for:"画数据库 ER 图"}],
"7-1":[{title:"SQLAlchemy 官方：ORM 教程", url:"https://docs.sqlalchemy.org/en/20/orm/quickstart.html", for:"全部模型 + 关系"},
       {title:"Alembic 自动生成迁移", url:"https://alembic.sqlalchemy.org/en/latest/autogenerate.html", for:"自动生成 migration"}],
"7-2":[{title:"FastAPI 官方教程回顾", url:"https://fastapi.tiangolo.com/tutorial/", for:"全部 CRUD + 认证 + 权限"}],
"7-3":[{title:"pytest 官方文档", url:"https://docs.pytest.org/en/stable/", for:"完整测试"},
       {title:"wrk HTTP 压测工具", url:"https://github.com/wg/wrk", for:"压测 API"}],
"7-4":[{title:"Docker 官方：Dockerfile 参考", url:"https://docs.docker.com/engine/reference/builder/", for:"生产级 Dockerfile"},
       {title:"Nginx 配置文档", url:"https://nginx.org/en/docs/", for:"HTTPS + 反向代理"}],
"7-5":[{title:"GitHub Actions 部署文档", url:"https://docs.github.com/en/actions/deployment", for:"自动部署流水线"}],
"7-6":[{title:"GitHub Profile 设置", url:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile", for:"Pin 项目到首页"}],
// ===== WEEK 9: LLM 原理 + API 实战 =====
"8-0":[{title:"Anthropic 文档：Models Overview", url:"https://docs.anthropic.com/en/docs/about-claude/models", for:"token/context window/temperature"},
       {title:"OpenAI Tokenizer 在线工具", url:"https://platform.openai.com/tokenizer", for:"理解 token 切分"}],
"8-1":[{title:"Anthropic 文档：Quickstart", url:"https://docs.anthropic.com/en/docs/quickstart", for:"第一个 API 请求"},
       {title:"OpenAI Python SDK 文档", url:"https://github.com/openai/openai-python", for:"API Key + 基本调用"}],
"8-2":[{title:"Anthropic 文档：Messages API", url:"https://docs.anthropic.com/en/docs/build-with-claude/messages", for:"多轮对话 + 历史管理"}],
"8-3":[{title:"Anthropic 文档：Streaming", url:"https://docs.anthropic.com/en/docs/build-with-claude/streaming", for:"流式输出 + SSE"},
       {title:"FastAPI: StreamingResponse", url:"https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse", for:"FastAPI 中实现流式"}],
"8-4":[{title:"Anthropic 文档：Pricing", url:"https://www.anthropic.com/pricing", for:"模型价格对比"},
       {title:"OpenAI 定价页", url:"https://openai.com/api/pricing/", for:"成本计算"}],
"8-5":[{title:"tenacity 官方文档", url:"https://tenacity.readthedocs.io/en/latest/", for:"指数退避重试"},
       {title:"Anthropic 文档：Errors", url:"https://docs.anthropic.com/en/docs/build-with-claude/errors", for:"错误处理"}],
"8-6":[{title:"GitHub: 发布 Python 包指南", url:"https://packaging.python.org/tutorials/packaging-projects/", for:"发布到 PyPI"}],
// ===== WEEK 10 =====
"9-0":[{title:"Anthropic: Prompt Engineering Guide", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", for:"4 要素 + Few-shot"}],
"9-1":[{title:"Anthropic: Chain of Thought", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought", for:"CoT prompting"}],
"9-2":[{title:"Instructor 库文档", url:"https://python.useinstructor.com/", for:"结构化输出 + Pydantic"}],
"9-3":[{title:"Anthropic: Prompt Evaluator", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/evaluate-prompts", for:"Prompt 评估方法论"}],
"9-4":[{title:"Jinja2 官方文档", url:"https://jinja.palletsprojects.com/", for:"Prompt 模板化"}],
"9-5":[{title:"DSPy 官方文档", url:"https://dspy-docs.vercel.app/", for:"声明式 prompt 优化（了解）"}],
"9-6":[{title:"GitHub: Prompt 模板库示例", url:"https://github.com/f/awesome-chatgpt-prompts", for:"参考别人的 prompt 库结构"}],
// ===== WEEK 11: RAG 架构与实现 =====
"10-0":[{title:"LangChain: RAG 概念", url:"https://python.langchain.com/docs/tutorials/rag/", for:"RAG 架构全景 + 数据流图"}],
"10-1":[{title:"PyPDF2 官方文档", url:"https://pypdf2.readthedocs.io/", for:"PDF 解析"},
       {title:"BeautifulSoup 文档", url:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/", for:"HTML 解析"}],
"10-2":[{title:"LangChain: Text Splitters", url:"https://python.langchain.com/docs/how_to/#text-splitters", for:"固定/递归/语义切分"}],
"10-3":[{title:"OpenAI Embeddings 文档", url:"https://platform.openai.com/docs/guides/embeddings", for:"生成 embedding"},
       {title:"TensorFlow Embedding Projector", url:"https://projector.tensorflow.org/", for:"可视化 embedding 聚类"}],
"10-4":[{title:"Chroma 官方: Getting Started", url:"https://docs.trychroma.com/docs/overview/getting-started", for:"搭建本地向量存储"}],
"10-5":[{title:"LlamaIndex: RAG 教程", url:"https://docs.llamaindex.ai/en/stable/understanding/", for:"完整 RAG pipeline 实现"}],
"10-6":[{title:"Streamlit 官方文档", url:"https://docs.streamlit.io/", for:"RAG Demo UI"}],
// ===== WEEK 12 =====
"11-0":[{title:"Pinecone: HyDE Explained", url:"https://www.pinecone.io/learn/hypothetical-document-embeddings/", for:"HyDE 检索优化"}],
"11-1":[{title:"Cohere Rerank 文档", url:"https://docs.cohere.com/docs/reranking", for:"Reranker 实战"},
       {title:"Pinecone: Hybrid Search", url:"https://www.pinecone.io/learn/hybrid-search/", for:"BM25 + 向量混合检索"}],
"11-2":[{title:"Milvus 官方文档", url:"https://milvus.io/docs/", for:"向量数据库选型"},
       {title:"Pinecone: HNSW Index", url:"https://www.pinecone.io/learn/hnsw/", for:"HNSW 索引原理"}],
"11-3":[{title:"LlamaIndex: Multi-Modal", url:"https://docs.llamaindex.ai/en/stable/examples/multi_modal/", for:"多模态 RAG + OCR"}],
"11-4":[{title:"RAGAS 官方文档", url:"https://docs.ragas.io/", for:"RAG 自动评估框架"}],
"11-5":[{title:"Pinecone: RAG in Production", url:"https://www.pinecone.io/learn/rag-in-production/", for:"增量索引 + 缓存 + 监控"}],
"11-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"RAG 从入门到生产博客"}],
// ===== WEEK 13: Function Calling / Tool Use =====
"12-0":[{title:"Anthropic: Tool Use Overview", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use", for:"Tool Use 概念 + JSON Schema"},
       {title:"OpenAI: Function Calling", url:"https://platform.openai.com/docs/guides/function-calling", for:"对比两种实现"}],
"12-1":[{title:"Anthropic: Tool Use Examples", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use#example-implementation", for:"Tool Use loop 参考实现"}],
"12-2":[{title:"Anthropic: Tool Use Best Practices", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use#best-practices", for:"工具设计粒度 + 描述写法"}],
"12-3":[{title:"Anthropic: Tool Use 完整指南", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use", for:"5 个实用工具实现"}],
"12-4":[{title:"LangChain: Tool + RAG 结合", url:"https://python.langchain.com/docs/how_to/custom_tools/", for:"RAG 检索做成 tool"}],
"12-5":[{title:"Anthropic: Tool Use 安全考量", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use#security-considerations", for:"安全 + token 成本"}],
"12-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"Tool Use 实战博客"}],
// ===== WEEK 14: Agent 架构设计 =====
"13-0":[{title:"Anthropic: Building Effective Agents ★必读★", url:"https://www.anthropic.com/engineering/building-effective-agents", for:"Agent 定义 + Workflow vs Agent"}],
"13-1":[{title:"Lilian Weng: LLM Agents", url:"https://lilianweng.github.io/posts/2023-06-23-agent/", for:"ReAct + Planning/Memory/Tool Use"},
       {title:"ReAct 论文", url:"https://arxiv.org/abs/2210.03629", for:"ReAct 原论文"}],
"13-2":[{title:"LangGraph: Plan-Execute 教程", url:"https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/", for:"Plan-Execute Agent 实现"}],
"13-3":[{title:"LangGraph: Memory 教程", url:"https://langchain-ai.github.io/langgraph/how-tos/memory/", for:"Agent 三层记忆系统"}],
"13-4":[{title:"CrewAI 文档", url:"https://docs.crewai.com/", for:"Multi-Agent 协作"}],
"13-5":[{title:"Anthropic: Tool Use 安全最佳实践", url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use#security-considerations", for:"Agent 安全 + Human-in-the-loop"}],
"13-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"从零构建 AI Agent 博客"}],
// ===== WEEK 15: LangChain + LangGraph =====
"14-0":[{title:"LangChain 官方文档首页", url:"https://python.langchain.com/docs/introduction/", for:"LangChain 设计哲学"},
       {title:"LCEL 文档", url:"https://python.langchain.com/docs/concepts/lcel/", for:"管道语法"}],
"14-1":[{title:"LangChain: RAG Tutorial", url:"https://python.langchain.com/docs/tutorials/rag/", for:"LangChain RAG 实战"}],
"14-2":[{title:"LangGraph: Quick Start", url:"https://langchain-ai.github.io/langgraph/tutorials/introduction/", for:"StateGraph + 节点 + 边"},
       {title:"Mermaid Live Editor", url:"https://mermaid.live/", for:"可视化 Graph 流程图"}],
"14-3":[{title:"LangGraph: Agent 教程", url:"https://langchain-ai.github.io/langgraph/tutorials/", for:"ReAct Agent + checkpoint"}],
"14-4":[{title:"LangGraph: SubGraphs", url:"https://langchain-ai.github.io/langgraph/how-tos/subgraph/", for:"SubGraph + Human-in-the-loop"}],
"14-5":[{title:"LangChain 源码: base.py", url:"https://github.com/langchain-ai/langchain/blob/master/libs/langchain/langchain/chains/base.py", for:"读 Chain 类源码"},
       {title:"LangGraph 源码: graph.py", url:"https://github.com/langchain-ai/langgraph/blob/main/libs/langgraph/langgraph/graph/state.py", for:"读 StateGraph 核心"}],
"14-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"框架 vs 手写 博客"}],
// ===== WEEK 16: 多模态 + 流式 =====
"15-0":[{title:"Anthropic: Vision API", url:"https://docs.anthropic.com/en/docs/build-with-claude/vision", for:"图片理解 + base64"},
       {title:"Pillow 官方文档", url:"https://pillow.readthedocs.io/", for:"图片预处理"}],
"15-1":[{title:"OpenAI: Whisper 文档", url:"https://platform.openai.com/docs/guides/speech-to-text", for:"语音转文字"},
       {title:"OpenAI: TTS 文档", url:"https://platform.openai.com/docs/guides/text-to-speech", for:"文字转语音"}],
"15-2":[{title:"FastAPI: SSE 实现", url:"https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse", for:"服务端推送"},
       {title:"MDN: WebSocket 文档", url:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket", for:"双向通信"}],
"15-3":[{title:"Python 官方: Async Generator", url:"https://docs.python.org/3/reference/expressions.html#asynchronous-generator", for:"流式 pipeline 设计"}],
"15-4":[{title:"LangSmith 官方文档", url:"https://docs.smith.langchain.com/", for:"AI 应用 tracing 和监控"},
       {title:"Grafana 官方文档", url:"https://grafana.com/docs/", for:"监控大盘（了解）"}],
"15-5":[{title:"OWASP: LLM Security Top 10", url:"https://owasp.org/www-project-top-10-for-large-language-model-applications/", for:"AI 安全清单"}],
"15-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"多模态 + 安全周记"}],
// ===== WEEK 17: 模型部署 =====
"16-0":[{title:"Ollama GitHub", url:"https://github.com/ollama/ollama", for:"安装 + 下载模型 + Python SDK"},
       {title:"Ollama 模型库", url:"https://ollama.ai/library", for:"浏览可用模型"}],
"16-1":[{title:"HuggingFace: Quantization Guide", url:"https://huggingface.co/docs/transformers/quantization", for:"GPTQ/AWQ 量化"},
       {title:"llama.cpp GitHub", url:"https://github.com/ggerganov/llama.cpp", for:"GGUF 格式理解"}],
"16-2":[{title:"vLLM 官方文档: Quickstart", url:"https://docs.vllm.ai/en/stable/getting_started/quickstart.html", for:"安装 + 部署第一个模型"},
       {title:"vLLM: OpenAI Compatible Server", url:"https://docs.vllm.ai/en/stable/serving/openai_compatible_server.html", for:"OpenAI 兼容 API"}],
"16-3":[{title:"NVIDIA nvidia-smi 文档", url:"https://developer.nvidia.com/nvidia-system-management-interface", for:"GPU 监控"},
       {title:"Flash Attention GitHub", url:"https://github.com/Dao-AILab/flash-attention", for:"Flash Attention 理解"}],
"16-4":[{title:"FastAPI + vLLM 整合", url:"https://fastapi.tiangolo.com/tutorial/first-steps/", for:"封装 vLLM 为 API 服务"}],
"16-5":[{title:"AutoDL GPU 云", url:"https://www.autodl.com/", for:"GPU 服务器租用"},
       {title:"Vast.ai", url:"https://vast.ai/", for:"便宜 GPU 比价"}],
"16-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"模型部署实战博客"}],
// ===== WEEK 18: 生产环境 =====
"17-0":[{title:"Anthropic: Prompt Caching", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching", for:"Prompt 缓存节省 90% 成本"},
       {title:"Redis 官方教程", url:"https://redis.io/docs/latest/develop/get-started/", for:"多层缓存"}],
"17-1":[{title:"Celery 官方入门", url:"https://docs.celeryq.dev/en/stable/getting-started/", for:"异步任务处理"}],
"17-2":[{title:"pgvector GitHub", url:"https://github.com/pgvector/pgvector", for:"PostgreSQL 向量扩展"}],
"17-3":[{title:"Python 官方: cProfile", url:"https://docs.python.org/3/library/profile.html", for:"性能分析"},
       {title:"locust 官方文档", url:"https://docs.locust.io/", for:"负载测试"}],
"17-4":[{title:"tracemalloc 官方文档", url:"https://docs.python.org/3/library/tracemalloc.html", for:"内存泄漏排查"}],
"17-5":[{title:"Google SRE Book（免费）", url:"https://sre.google/books/", for:"SLA/SLO/SLI 方法论"}],
"17-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"本周总结博客"}],
// ===== WEEK 19: 项目一 - 企业知识库 =====
"18-0":[{title:"draw.io 在线画图", url:"https://app.diagrams.net/", for:"系统架构图"},
       {title:"Atlassian: PRD 模板", url:"https://www.atlassian.com/software/confluence/templates/product-requirements", for:"PRD 文档"}],
"18-1":[{title:"FastAPI 全栈模板（官方）", url:"https://github.com/tiangolo/full-stack-fastapi-template", for:"企业级项目结构"},
       {title:"GitHub Actions: Python 模板", url:"https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python", for:"CI/CD 配置"}],
"18-2":[{title:"FastAPI: Security 教程", url:"https://fastapi.tiangolo.com/tutorial/security/", for:"JWT + refresh token + 邮箱验证"}],
"18-3":[{title:"LlamaIndex: Document Loading", url:"https://docs.llamaindex.ai/en/stable/module_guides/loading/documents_and_nodes/", for:"文档上传 + 解析 pipeline"}],
"18-4":[{title:"LangChain: RAG 集成", url:"https://python.langchain.com/docs/tutorials/rag/", for:"RAG 问答 pipeline"},
       {title:"FastAPI: SSE Streaming", url:"https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse", for:"流式输出"}],
"18-5":[{title:"Streamlit 官方文档", url:"https://docs.streamlit.io/", for:"前端 UI"}],
"18-6":[{title:"pytest: E2E 测试", url:"https://docs.pytest.org/en/stable/", for:"端到端测试"}],
// ===== WEEK 20: 项目一打磨 =====
"19-0":[{title:"Python zipfile 文档", url:"https://docs.python.org/3/library/zipfile.html", for:"批量导入 zip"},
       {title:"Streamlit: 文件上传组件", url:"https://docs.streamlit.io/develop/api-reference/widgets/st.file_uploader", for:"文件上传 UI"}],
"19-1":[{title:"Redis 缓存文档", url:"https://redis.io/docs/latest/develop/get-started/", for:"embedding 缓存 + LLM 缓存"}],
"19-2":[{title:"OWASP: Input Validation", url:"https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", for:"输入过滤"},
       {title:"python-magic 文档", url:"https://github.com/ahupp/python-magic", for:"文件类型检查"}],
"19-3":[{title:"阿里云 DNS 配置", url:"https://help.aliyun.com/product/25365.html", for:"域名 + DNS"},
       {title:"Nginx 配置文档", url:"https://nginx.org/en/docs/", for:"HTTPS + 反向代理"}],
"19-4":[{title:"Awesome README 示例", url:"https://github.com/matiassingers/awesome-readme", for:"README 写法参考"},
       {title:"Shields.io", url:"https://shields.io/", for:"项目 badges"}],
"19-5":[{title:"OBS Studio 下载", url:"https://obsproject.com/", for:"录 Demo 视频"},
       {title:"V2EX / 掘金", url:"https://www.v2ex.com/", for:"社区分享项目"}],
"19-6":[{title:"Notion 复盘模板", url:"https://www.notion.so/", for:"项目复盘文档"}],
// ===== WEEK 21: 项目二 - Agent =====
"20-0":[{title:"LangGraph: Agent 教程", url:"https://langchain-ai.github.io/langgraph/tutorials/", for:"Agent 架构设计"},
       {title:"Anthropic: Building Effective Agents", url:"https://www.anthropic.com/engineering/building-effective-agents", for:"Agent 设计决策"}],
"20-1":[{title:"LangGraph: Tool 集成", url:"https://langchain-ai.github.io/langgraph/how-tos/tool-calling/", for:"工具调用框架"}],
"20-2":[{title:"LangGraph: Memory", url:"https://langchain-ai.github.io/langgraph/how-tos/memory/", for:"三层记忆实现"}],
"20-3":[{title:"Streamlit: Chat UI", url:"https://docs.streamlit.io/develop/tutorials/llms/build-conversational-apps", for:"对话界面"}],
"20-4":[{title:"LangSmith: Tracing", url:"https://docs.smith.langchain.com/", for:"Agent 执行监控"}],
"20-5":[{title:"pytest: 行为测试", url:"https://docs.pytest.org/en/stable/", for:"Agent 行为测试"}],
"20-6":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"Agent 开发最佳实践博客"}],
// ===== WEEK 22: 项目三 + 作品集 =====
"21-0":[{title:"HuggingFace: PEFT 文档", url:"https://huggingface.co/docs/peft/", for:"QLoRA 微调"},
       {title:"Google Colab（免费 GPU）", url:"https://colab.research.google.com/", for:"云端微调模型"}],
"21-1":[{title:"vLLM: Serving LoRA Models", url:"https://docs.vllm.ai/en/stable/features/lora.html", for:"部署微调模型"}],
"21-2":[{title:"Good First Issue 汇总", url:"https://goodfirstissue.dev/", for:"找开源贡献机会"},
       {title:"GitHub: Fork + PR 指南", url:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests", for:"提交 PR 流程"}],
"21-3":[{title:"GitHub Profile README 灵感", url:"https://github.com/abhisheknaiidu/awesome-github-profile-readme", for:"Profile 优化"},
       {title:"GitHub: Pinning Items", url:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile", for:"Pin 项目"}],
"21-4":[{title:"掘金创作者中心", url:"https://juejin.cn/creator/content", for:"发布深度技术博客"}],
"21-5":[{title:"Resume.io 模板", url:"https://resume.io/", for:"简历模板"},
       {title:"STAR 方法详解", url:"https://www.themuse.com/advice/star-interview-method", for:"简历 bullet point 写法"}],
"21-6":[{title:"LinkedIn 个人主页设置", url:"https://www.linkedin.com/help/linkedin/answer/a528739", for:"LinkedIn 优化"}],
// ===== WEEK 23: 面试准备 =====
"22-0":[{title:"LeetCode Hot 100", url:"https://leetcode.cn/problem-list/2cktkvj/", for:"数组/字符串 经典题"},
       {title:"NeetCode 路线图", url:"https://neetcode.io/roadmap", for:"算法分类学习路径"}],
"22-1":[{title:"LeetCode: 哈希表标签", url:"https://leetcode.cn/tag/hash-table/", for:"哈希表 10 题"},
       {title:"LeetCode: 链表标签", url:"https://leetcode.cn/tag/linked-list/", for:"链表操作"}],
"22-2":[{title:"LeetCode: 树标签", url:"https://leetcode.cn/tag/tree/", for:"二叉树遍历"},
       {title:"LeetCode: 动态规划标签", url:"https://leetcode.cn/tag/dynamic-programming/", for:"DP 入门"}],
"22-3":[{title:"ML 面试题汇总 (GitHub)", url:"https://github.com/khangich/machine-learning-interview", for:"ML 八股文 50 题"}],
"22-4":[{title:"CS229 课程笔记", url:"https://cs229.stanford.edu/syllabus.html", for:"损失函数/优化器/激活函数"},
       {title:"Attention Is All You Need 论文", url:"https://arxiv.org/abs/1706.03762", for:"Attention 机制原论文"}],
"22-5":[{title:"ByteByteGo: 系统设计", url:"https://bytebytego.com/", for:"系统设计面试框架"}],
"22-6":[{title:"pramp.com 免费模拟面试", url:"https://www.pramp.com/", for:"模拟面试"}],
// ===== WEEK 24: 投递 + 入职 =====
"23-0":[{title:"BOSS 直聘", url:"https://www.zhipin.com/", for:"搜索 AI 岗位"},
       {title:"脉脉", url:"https://maimai.cn/", for:"找内推 + 看面经"}],
"23-1":[{title:"STAR 面试方法", url:"https://www.themuse.com/advice/star-interview-method", for:"项目介绍准备"}],
"23-2":[{title:"BOSS 直聘投递技巧", url:"https://www.zhipin.com/", for:"继续投递 + 整理面经"}],
"23-3":[{title:"LeetCode 每日一题", url:"https://leetcode.cn/problemset/all/", for:"保持手感"}],
"23-4":[{title:"levels.fyi 薪资对比", url:"https://www.levels.fyi/", for:"Offer 薪资评估"},
       {title:"Glassdoor 公司评价", url:"https://www.glassdoor.com/", for:"公司口碑查询"}],
"23-5":[{title:"Atlassian: 90-Day Plan 模板", url:"https://www.atlassian.com/software/confluence/templates/90-day-plan", for:"入职 90 天计划"}],
"23-6":[{title:"LinkedIn 个人主页", url:"https://www.linkedin.com/", for:"宣布新工作 + 感谢大家"}]
};

// ============================================================
// LEARNING DIAGNOSIS: Bad habits critique + correct approach
// ============================================================
const LEARNING_DIAGNOSIS = {
  badHabits: [
    { habit:"理论知识：找到资料 → 看懂 → 复制到笔记", why:"你在调用「识别」而非「生成」。大脑看到熟悉的内容会说「我懂了」，但这只是模式匹配，不是真正的理解。关上资料后什么都写不出来，因为知识从未进入长期记忆。", fix:"找到资料 → 看懂 → 关掉资料 → 盲写笔记 → 对照修改。15 分钟倒计时，不准超时。写不出来就写「这里我不确定……」然后继续。" },
    { habit:"实践知识：看视频 → 照着敲一遍 → 跑通了 → 觉得自己会了", why:"照着敲时，你的大脑处于「复制模式」：手在动，脑在休眠。跑通代码的快感让你误以为学会了。但换个场景、改个需求，你就不会了——因为你从未在没有提示的情况下独立写出过代码。", fix:"看视频（仅第一遍）→ 关掉 → 打开空白 .py → 从 import 开始盲写 → 跑不通就调试 → 实在不行看一眼。同一天盲写第二遍，第二天盲写第三遍。卡住的地方 = 你真正需要练的地方。" },
    { habit:"笔记 = 搬运原文 + 摘录要点", why:"抄写时大脑处于最低功耗状态，跟抄课文一样。你生产的只是「信息副本」，不是「理解」。做完了再也不会看——因为你自己也知道那东西没有价值。", fix:"关掉原文。用费曼方式写：「如果我教一个完全不懂的人，我会说...」。不准用术语。用类比。写完后问自己：如果别人读这篇笔记，他能学会吗？" },
    { habit:"学完一个概念立刻学下一个，不做检验", why:"你以为「看完 = 学会」。实际上你只是在消费内容。没有检索练习（主动从大脑调取知识），48 小时后你会遗忘 70%。", fix:"学完任何概念后，做这个自测：「如果有人给我 100 块钱，让我把刚才学的讲清楚，我能不能挣到这 100 块？」能 → 过。不能 → 重学。" },
    { habit:"遇到不懂的立刻查答案", why:"你一遇到阻碍就查，大脑从来不需要在困惑中挣扎。但真正的学习恰恰发生在「困惑 → 思考 → 试错 → 解决」这个过程里。跳过挣扎 = 跳过学习。", fix:"给自己 5-15 分钟的「不查时间」。先看报错信息。用 help() 和 dir()。写最小测试用例。画图。实在不行再查——这时查到的答案你会记住很久。" }
  ],
  correctFlow: [
    { step:1, title:"打开资料，设 15 分钟倒计时", desc:"你只有 15 分钟。这会强迫你集中注意力，而不是「慢慢看反正有时间」。" },
    { step:2, title:"边看边在终端/编辑器里操作", desc:"不要只看。Python 交互模式开着，每个知识点立刻敲一遍。手上在做的同时大脑在建立连接。" },
    { step:3, title:"时间到——关掉所有资料", desc:"浏览器标签全关。这是最关键的一步。你会有冲动「再看一眼」——抵抗它。看一眼 = 废掉一次学习机会。" },
    { step:4, title:"打开空白文档/空白 .py，盲写", desc:"凭记忆写笔记或代码。写不出来的地方标「我不确定...」。这个过程是痛苦的——痛苦 = 大脑在建立新连接。" },
    { step:5, title:"对照原文，用红色标注所有错误/遗漏", desc:"红色部分是你真正需要重学的。绿色部分是你已经掌握的。只看红色。" },
    { step:6, title:"红色部分再来一遍", desc:"关掉资料。只重写红色部分。这次应该全对。如果还错——这就是你今天的核心弱点，花最多时间攻它。" }
  ],
  dailyChecklist: [
    "我今天至少有一个概念是关掉资料盲写的",
    "我今天至少有一段代码是从空文件开始写的",
    "我的笔记里没有原文复制，全是我自己的话",
    "我能回答「如果教别人，我会怎么说」",
    "今天遇到卡住的地方，我先挣扎了至少 10 分钟才查答案"
  ],
  selfTest: "终极自测：\n\n打开一个空白终端。打开一个空白 .py 文件。\n不看任何资料。\n把你今天学的东西从头实现一遍。\n\n能做出来 → 真会了。\n做不出来 → 你今天的「学习」是幻觉。明天重来。"
};

// ============================================================
// KNOWLEDGE CONNECTIONS: How each day links to future weeks
// Format: {week: N, topic: "...", how: "..."}
// ============================================================
const KNOWLEDGE_CONNECTIONS = {
// ===== WEEK 1 =====
"0-0":[{week:3, topic:"FastAPI 项目", how:"今天创建的 venv，三周后每个 FastAPI 项目都会用——项目根目录下永远有一个 venv 文件夹，这是 Python 开发的标准起手式"},
       {week:6, topic:"Docker 容器", how:"Docker 容器是更彻底的 virtualenv——不隔离到文件夹，而是隔离到整个操作系统层。今天理解「为什么要隔离」，六周后秒懂 Docker"},
       {week:11, topic:"RAG 文本切分", how:"今天玩的字符串 split/join/find，六周后做 RAG 时天天用——文档切分(chunking)就是对字符串的各种切割和拼接"}],
"0-1":[{week:11, topic:"RAG 检索", how:"今天学的列表操作（切片/推导式/排序），六周后在 RAG 里检索出的文档片段就是列表，你需要切片取 top-k、用推导式重新排序"},
       {week:4, topic:"数据库查询", how:"两周后学 SQL，SELECT 返回的结果集本质就是列表。今天的列表推导式，到时候就是「从查询结果中筛选符合条件的行」"}],
"0-2":[{week:3, topic:"FastAPI 请求体", how:"今天学的字典，两周后变成 FastAPI 的 JSON 请求体——Pydantic 模型底层就是字典。你会看到 .model_dump() 把对象转成 dict"},
       {week:5, topic:"JWT Token", how:"四周后学 JWT 认证，token 的 payload 就是一个字典：{'user_id': 123, 'exp': 时间戳}。你今天做的字典操作，到时候全部用到"}],
"0-3":[{week:11, topic:"RAG 文档加载", how:"今天用 with open 读文件、json/csv 读写，六周后在 RAG 里加载 PDF/Word/Markdown——本质就是文件 I/O，只是换了解析器"},
       {week:7, topic:"CI/CD 脚本", how:"四周后写 CI 流水线，try/except 和异常处理是你脚本可靠性的底线。上下文管理器(with)保证资源一定释放，CI 里也这么用"}],
"0-4":[{week:3, topic:"Pydantic 模型", how:"今天写的类（__init__/__str__/property），两周后升级成 Pydantic BaseModel——它是 Python 类的超集，自动加类型校验和序列化"},
       {week:15, topic:"LangChain 源码", how:"十二周后读 LangChain 源码，Chain 基类就是今天学的抽象基类(ABC)——你读源码时会发现：这不就是继承+抽象方法吗"}],
"0-5":[{week:14, topic:"Agent 架构", how:"今天写的继承链和 super()，十二周后在 Agent 里定义 Tool 基类——所有工具（搜索/计算器/数据库）继承同一个 Tool 抽象类"},
       {week:3, topic:"FastAPI 依赖注入", how:"今天学的 dataclass，两周后被 Pydantic 替代——但核心思想一样：用一个类描述数据的结构。Pydantic = dataclass + 自动校验"}],
"0-6":[{week:8, topic:"综合项目", how:"今天用 black/flake8 格式化的习惯，六周后写综合项目时你的代码会比大多数人干净——好习惯从第一天开始"},
       {week:22, topic:"简历 + 开源", how:"今天发布的笔记 + GitHub commit，20 周后变成面试官看到的绿色格子墙——168 天不间断 = 任何面试官都会注意到"}],
// ===== WEEK 2 =====
"1-0":[{week:3, topic:"FastAPI 核心", how:"FastAPI 整个框架建立在类型标注上——路径参数的类型自动生成 Swagger 文档。你写的 def get_user(id: int) 直接在 API 文档里显示参数类型"},
       {week:13, topic:"Tool Use Schema", how:"Tool Use 的工具定义就是用 JSON Schema 描述函数签名——今天的类型标注是明天 JSON Schema 的直觉来源"}],
"1-1":[{week:3, topic:"Pydantic BaseModel", how:"TypedDict 的升级版就是 Pydantic BaseModel——你定义字段类型后，FastAPI 自动校验请求体、生成文档、序列化响应"},
       {week:13, topic:"Tool Use 定义", how:"泛型 TypeVar 思想在 Tool Use 中体现为「同一工具对不同输入类型返回不同结果」——你定义泛型工具的时候就在用这个思维"}],
"1-2":[{week:7, topic:"CI/CD 管道", how:"今天写的 pytest 测试，四周后自动跑在 GitHub Actions 里——每次 push 自动测试，不通过就拦截。测试是 CI/CD 的基石"},
       {week:19, topic:"项目一测试", how:"17 周后做企业知识库项目，你需要 80%+ 测试覆盖率。今天学会的 fixture + parametrize，到时候写几百个测试用例全靠它们"}],
"1-3":[{week:19, topic:"项目一调试", how:"17 周后你会在凌晨 2 点 debug 一个诡异的 bug。今天学的 pdb 和 VS Code debugger 到时候能省你 3 小时"},
       {week:8, topic:"综合项目", how:"mock 替换外部依赖——六周后测试含数据库的项目时，你不会想真的连数据库。mock 让你隔离测试每个组件"}],
"1-4":[{week:9, topic:"LLM API 调用", how:"三周后调 LLM API，一个请求可能要等 5-10 秒。你用 ThreadPoolExecutor 同时发 10 个请求，10 秒干完 10 件事，而不是 100 秒"},
       {week:18, topic:"异步任务处理", how:"16 周后做生产优化，用户上传 50 份文档你不能让他等——用线程池异步处理，用户接着用，处理完通知他"}],
"1-5":[{week:9, topic:"流式输出", how:"三周后实现 LLM 流式输出(逐字显示)——底层就是 async/await。理解了今天的事件循环，流式就不会觉得魔法"},
       {week:16, topic:"全流式管道", how:"14 周后设计全流式 pipeline（语音→LLM→TTS），async generator 是核心技术——今天学的是它的雏形"}],
"1-6":[{week:9, topic:"LLM 批量调用", how:"三周后你会同时调 Claude 和 GPT 对比结果——今天三种并发方式的对比直接告诉你：I/O 密集用异步最快"},
       {week:22, topic:"博客输出", how:"今天写的性能对比博客是你的第一篇技术博文。20 周后面试官问「你怎么学 AI 的」，你有 20+ 篇博客证明你的学习轨迹"}],
// ===== WEEK 3 =====
"2-0":[{week:19, topic:"项目一后端", how:"17 周后的企业知识库项目，后端就是 FastAPI。今天写的第一个 @app.get('/') 会长成几百个端点的 API 服务"},
       {week:5, topic:"认证系统", how:"三周后学 JWT 认证时，你会用 @app.post('/login') 写登录接口。今天理解的路由和请求体，到时候直接叠加认证层"}],
"2-1":[{week:13, topic:"Tool Use API", how:"10 周后写 Tool Use 的工具端点——@app.post('/search') 接收查询参数，结构和你今天写的 CRUD 完全一样"}],
"2-2":[{week:19, topic:"项目一数据模型", how:"17 周后项目中几十个 Pydantic 模型（User/Chat/KnowledgeBase），每个都是你今天写的 UserCreate 模式的扩展——嵌套、校验、序列化"}],
"2-3":[{week:11, topic:"RAG 文件上传", how:"八周后做 RAG，用户上传 PDF 的端点就是 @app.post('/upload')——你今天写的文件上传代码，到时候原样复用"}],
"2-4":[{week:18, topic:"生产环境监控", how:"16 周后做生产化，全局异常处理和结构化日志是排查线上问题的第一道防线——你今天建立的日志习惯决定到时候排查效率"}],
"2-5":[{week:19, topic:"项目一核心", how:"今天写的 Todo API 是项目一的微缩版——CRUD + 搜索 + 分页，到时候企业知识库的对话管理就是对 Todo 模式的扩展"}],
"2-6":[{week:19, topic:"项目一测试", how:"今天用 TestClient 写的 API 测试，17 周后测试企业知识库时，你会感谢自己三周前就把这个技能练熟了"}],
// ===== WEEK 4 =====
"3-0":[{week:19, topic:"项目一数据库", how:"15 周后项目一的用户/知识库/对话数据全存在 PostgreSQL 里。今天 CREATE TABLE 时定义的字段约束，到时候保证数据不被污染"},
       {week:18, topic:"pgvector 混合查询", how:"14 周后用 pgvector 做向量+标量混合查询——WHERE 子句里既有相似度比较又有普通条件。今天的 SQL 功力是那时候的基础"}],
"3-1":[{week:11, topic:"RAG 评估", how:"7 周后评估 RAG 检索质量，需要统计检索命中率——今天学的 GROUP BY + COUNT + 聚合函数直接算 MRR/Recall"}],
"3-2":[{week:19, topic:"项目一 ORM", how:"15 周后项目中几十张表全用 SQLAlchemy 管理。今天学的 Session CRUD 到时候变成每天写几十次的 session.add() / session.query()"}],
"3-3":[{week:19, topic:"项目一迁移", how:"15 周后每次改模型（加字段/改关系）都要跑 Alembic migration。今天第一次 migration 的流程到时候重复几十次，你已经烂熟于心"}],
"3-4":[{week:6, topic:"Docker 网络+存储", how:"两周后深入 Docker 网络和 volume，今天理解的「镜像 vs 容器」是基础。如果今天没搞清容器是什么，后面的网络会像天书"},
       {week:17, topic:"模型部署", how:"13 周后部署 vLLM 推理服务，同样是 docker run 启动一个镜像——今天第一次打包 Dockerfile，到时候已经是条件反射"}],
"3-5":[{week:19, topic:"项目一开发环境", how:"15 周后项目一的开发环境就是 docker-compose up 一键启动：FastAPI + PostgreSQL + Redis + Chroma。今天学会的编排逻辑到时候乘以 4 个服务"}],
"3-6":[{week:8, topic:"综合项目", how:"今天是你第一次把 FastAPI + DB + Docker 串起来。四周后的综合项目是同一个模式放大——多几张表、多几个端点、加上认证"}],
// ===== WEEK 5 =====
"4-0":[{week:13, topic:"Tool Use 依赖", how:"8 周后每个 Tool 函数注入数据库 session、当前用户——就是今天写的 Depends。Tool 的参数来自 Depends(get_db)，不用自己管理连接池"}],
"4-1":[{week:19, topic:"项目一认证", how:"14 周后项目一的用户注册/登录系统——bcrypt 哈希密码、JWT 签发。今天写的第一个注册接口到时候扩展成完整的认证模块"}],
"4-2":[{week:21, topic:"项目二 Agent API", how:"16 周后 Agent 助手的 API 认证——用户先登录拿 token，然后每次调 Agent 带 Bearer token。今天写的 JWT 验证逻辑到时候原样复用"}],
"4-3":[{week:19, topic:"项目一权限", how:"14 周后项目中有管理员/普通用户两种角色——管理员看全站数据、用户只能看自己的。今天实现的 RBAC 三周后直接套用"}],
"4-4":[{week:18, topic:"生产监控", how:"13 周后给每个请求加 request_id 贯穿所有日志——线上出问题时靠这个 ID 追踪整个请求链路。今天写的中间件是监控体系的起点"}],
"4-5":[{week:19, topic:"项目一结构", how:"14 周后项目一的目录就是今天重构后的企业级结构——api/v1/endpoints/ + models/ + schemas/ + services/。今天搭的骨架到时候填肉"}],
"4-6":[{week:20, topic:"项目一安全审计", how:"15 周后项目上线前的安全检查——SQL 注入/请求大小限制/OWASP checklist。今天加固的每个点到时候都是生产环境的安全基线"}],
// ===== WEEK 6 =====
"5-0":[{week:17, topic:"vLLM Dockerfile", how:"11 周后部署 vLLM 模型，写的 Dockerfile 也是多阶段构建——builder stage 编译、runtime stage 只放必要的。今天学会的优化到时候直接套用"}],
"5-1":[{week:19, topic:"项目一数据持久化", how:"13 周后项目一的 PostgreSQL 数据、Redis 缓存、文件存储全用 volume——容器删了数据还在。今天理解的 volume 是生产环境的命脉"}],
"5-2":[{week:19, topic:"项目一 compose", how:"13 周后项目一的 docker-compose.yml 含 4 个服务+健康检查——API 等数据库 ready 才启动。今天写的 healthcheck 到时候防止启动顺序混乱"}],
"5-3":[{week:20, topic:"服务器部署", how:"14 周后项目部署到阿里云——ssh 登录、chmod 改权限、ps 查进程、grep 搜日志。今天敲的每一条 Linux 命令到时候都要用"}],
"5-4":[{week:7, topic:"CI/CD 部署脚本", how:"一周后 CI/CD 的自动部署步骤本质就是 shell 脚本——git pull + docker build + docker compose restart。今天写的 deploy.sh 到时候变成 GitHub Actions"}],
"5-5":[{week:20, topic:"项目一上线", how:"14 周后项目一绑定域名 + HTTPS，Nginx 反向代理到 FastAPI。今天配置的 proxy_pass 和 SSL 证书到时候完全复用"}],
"5-6":[{week:20, topic:"项目一公网访问", how:"14 周后别人用 curl 访问你的公网 API——今天的部署流程就是那时候的发布流程。你能在公网上展示一个活的 API，面试时直接打开浏览器演示"}],
// ===== WEEK 7 =====
"6-0":[{week:22, topic:"开源贡献", how:"15 周后你给开源项目提 PR——cherry-pick 特定 commit、rebase 到最新 main。今天学的每个 Git 操作到时候都是日常——没有这些技能连 PR 都提不上去"}],
"6-1":[{week:22, topic:"开源项目规范", how:"15 周后你的项目会有人贡献代码——Conventional Commits + pre-commit 让他们知道怎么提交、代码要什么格式。今天建立的规范就是团队协作标准"}],
"6-2":[{week:19, topic:"项目一 CI", how:"12 周后项目一每次 push 自动跑 pytest+linter——你不需要手动检查代码质量。今天写的第一个 workflow 到时候保护着你的代码不被破坏"}],
"6-3":[{week:20, topic:"项目一自动部署", how:"13 周后你改一行代码 push 到 GitHub，5 分钟后自动上线——今天的 CI/CD 管道让「改代码→上线」从手动的几小时变成自动的几分钟"}],
"6-4":[{week:19, topic:"项目一测试策略", how:"12 周后项目一的测试分三层：单元测函数、集成测 API、E2E 测完整流程。今天理解的测试金字塔到时候指导你「这个该写单元测试还是集成测试」"}],
"6-5":[{week:19, topic:"项目一代码质量", how:"12 周后项目一配置了 ruff + pre-commit，代码在 commit 之前自动格式化。今天配好的工具链到时候让队友 clone 即用——零配置即规范"}],
"6-6":[{week:20, topic:"项目一 CI/CD 全流程", how:"一周后的综合项目、13 周后的项目一，都跑在 CI/CD 上。今天搭好的流水线是未来所有项目的标准模板——lint → test → deploy"}],
// ===== WEEK 8 =====
"7-0":[{week:19, topic:"项目一设计", how:"11 周后的企业知识库项目就是在今天三个选项中选一个的思路延伸——ER 图 x5 复杂度、API 端点 x4 数量。今天做 4 张表的设计是以后的思路雏形"}],
"7-1":[{week:19, topic:"项目一数据库", how:"11 周后项目一几十个模型和关系——今天的 seed 脚本和 migration，到时候就是填充测试数据和版本化数据库结构"}],
"7-2":[{week:19, topic:"项目一 API", how:"11 周后项目一几十个端点——分页/搜索/排序/认证全部复现。今天写的 CRUD 到时候变成每个资源的标配：用户 CRUD、知识库 CRUD、对话 CRUD"}],
"7-3":[{week:19, topic:"项目一完整测试", how:"11 周后项目一要求 80%+ 覆盖率——今天写的集成测试 + 压测，到时候是保证「上线前代码能正常工作」的最后防线"}],
"7-4":[{week:20, topic:"项目一部署", how:"12 周后项目一公网上线——今天部署到云服务器的完整流程到时候再来一遍：ssh → docker compose → HTTPS。多了一步买域名"}],
"7-5":[{week:20, topic:"项目一文档", how:"12 周后项目一的 GitHub Actions 就是今天写的配置的升级版——自动测试+自动部署+README badge 显示 build passing"}],
"7-6":[{week:22, topic:"作品集打磨", how:"今天在 GitHub Profile 上 pin 的项目，14 周后换成三个更牛逼的项目。但今天建立的「让 GitHub 好看」的意识，伴随你整个求职期"}],
// ===== WEEK 9: LLM 原理 + API 实战 =====
"8-0":[{week:10, topic:"Prompt Engineering", how:"下周设计 prompt 时，你能精确计算 token 消耗——每 1000 token 多少钱、这个 prompt 超出上下文窗口了吗。今天是量化的开始"},
       {week:17, topic:"模型部署", how:"八周后自己部署开源模型，你要决定用 7B 还是 13B——今天理解的「上下文窗口」直接影响你的选型：够放用户的历史对话吗？"}],
"8-1":[{week:13, topic:"Tool Use 调用", how:"四周后 Tool Use 的 API 调用格式和今天完全一样——messages 数组里多了一个 tool_calls 字段。今天的请求结构到时候只多一个参数"},
       {week:19, topic:"项目一 LLM 集成", how:"10 周后项目一的 RAG 引擎底层就是调 LLM API——今天的 SDK 调用到时候封装成问答服务的核心函数"}],
"8-2":[{week:14, topic:"Agent 记忆", how:"五周后 Agent 用滑动窗口管理对话历史——就是今天写的「最后 N 轮对话截断」。多轮对话管理是 Agent 记忆系统的前半部分"},
       {week:19, topic:"项目一对话", how:"10 周后项目一的对话功能就是今天多轮对话的升级——存到数据库、支持搜索、加上引用溯源"}],
"8-3":[{week:16, topic:"全流式管道", how:"七周后设计全流式 pipeline，SSE 是核心技术——今天在 FastAPI 里实现的 StreamingResponse，到时候变成逐字显示 Agent 的每一步思考"},
       {week:19, topic:"项目一流式回答", how:"10 周后项目一用户问问题答案逐字显示——就是今天的 streaming 套上 RAG。用户不需要等 5 秒看到完整答案"}],
"8-4":[{week:18, topic:"成本优化", how:"九周后做生产优化，你要算自部署 vs API 哪个更便宜——今天计算的 token 单价到时候乘以 QPS 算总成本，决定「买 API 还是买 GPU」"}],
"8-5":[{week:18, topic:"生产容错", how:"九周后生产环境的 LLM 调用加了重试/降级/熔断——今天写的 tenacity 重试逻辑到时候变成完整的弹性策略"}],
"8-6":[{week:22, topic:"开源工具", how:"十三周后你的代码审查 CLI 工具可能就是你的开源作品——pip install 就能用。今天发布的第一个 AI 小工具是你作品集的起点"}],
// ===== WEEK 10 =====
"9-0":[{week:11, topic:"RAG prompt 模板", how:"下周做 RAG 时，生成答案的 prompt 需要 few-shot 示例——今天学会的「给几个例子大幅提升准确率」，到时候让 RAG 答案质量提升一个档次"},
       {week:19, topic:"项目一问答 prompt", how:"九周后项目一的问答系统 prompt 就是你今天设计的——角色/system prompt/输出格式，用户看不到但它决定了答案质量"}],
"9-1":[{week:14, topic:"ReAct Agent", how:"四周后 ReAct Agent 就是 CoT 的升级版——不仅「一步一步思考」，还「思考完执行、执行完再思考」。今天的 CoT 是 Agent 思考链的起点"},
       {week:23, topic:"面试算法", how:"十三周后面试遇到复杂问题，CoT 思维让你先分析再写代码——面试官更喜欢「我先想清楚再动手」的人"}],
"9-2":[{week:13, topic:"Tool Use 格式", how:"三周后 Tool Use 要求 LLM 输出精确的 JSON——今天学的 structured output 保证 LLM 调工具时参数不写错、格式不出错、不会调用不存在的函数"}],
"9-3":[{week:12, topic:"RAG 评估", how:"两周后评估 RAG 系统质量，需要自动评分标准——今天建立的 eval 脚本模式到时候变成 MRR/Recall 自动计算"}],
"9-4":[{week:15, topic:"LangChain Prompt 模板", how:"五周后 LangChain 的 PromptTemplate 就是今天 Jinja2 模板的封装——核心思想一样：变量注入 + 复用。理解了底层，用框架时知道盒子里面是什么"}],
"9-5":[{week:23, topic:"面试深度", how:"十三周后面试官问「你怎么优化 prompt」，你说「我知道 DSPy 可以自动调参」——今天了解的进阶技巧让你在面试中和其他人拉开知识广度"}],
"9-6":[{week:20, topic:"项目一 prompt 库", how:"十周后项目一的问答 prompt、摘要 prompt、分类 prompt 全来自你今天建的模板库——项目里直接调 PromptManager.get('qa_prompt')"}],
// ===== WEEK 11: RAG =====
"10-0":[{week:19, topic:"项目一核心架构", how:"八周后项目一的核心就是这张数据流图——文档→切分→embedding→向量库→检索→LLM。今天画的第一张图到时候变成系统设计面试的答案"},
       {week:23, topic:"系统设计面试", how:"十二周后面试官问「设计一个 AI 问答系统」——你直接画出今天这张 RAG 数据流图，然后逐层展开。这就是标准答案"}],
"10-1":[{week:19, topic:"项目一文档上传", how:"八周后项目一用户上传 PDF/Word/Markdown——今天写的 DocumentLoader 到时候接收用户上传的文件，自动识别格式、解析内容、传给下一步"}],
"10-2":[{week:19, topic:"项目一切分策略", how:"八周后项目一的检索质量 70% 取决于切分策略——chunk_size 太大答案不精确、太小缺上下文。今天实验的不同参数到时候帮你找到项目的最佳值"}],
"10-3":[{week:19, topic:"项目一向量化", how:"八周后项目一每个文档段落都变成 embedding 向量——今天生成的 embedding 到时候以每秒几千条的速度跑在后台处理管道里"}],
"10-4":[{week:19, topic:"项目一向量存储", how:"八周后项目一的 Chroma 存着几万个文档片段的向量——今天存第一条记录的代码，到时候遍历整个知识库。增量索引让新文档即时可搜"}],
"10-5":[{week:19, topic:"项目一完整 RAG", how:"八周后项目一用户问一个问题→检索这 5 个最相关片段→发给 LLM 生成答案。今天的 pipeline 到时候每秒处理几十个并发提问"}],
"10-6":[{week:19, topic:"项目一前端", how:"八周后项目一的 Streamlit 前端就是今天 RAG Demo 的翻版——上传框 + 提问框 + 答案区域 + 引用来源。功能一样，只是更精致"}],
// ===== WEEK 12 =====
"11-0":[{week:19, topic:"项目一检索优化", how:"七周后项目一用 HyDE 提升检索命中率——用户问「怎么做」→ LLM 生成假设答案 → 用答案检索。今天实现的 HyDE 到时候直接接入项目一"}],
"11-1":[{week:19, topic:"项目一重排序", how:"七周后项目一的 RAG 管道加 Reranker——粗检索 20 条→精排取前 5→发给 LLM。今天对比的「有无 Reranker」到时候决定答案质量天花板"}],
"11-2":[{week:18, topic:"数据库选型", how:"六周后选生产数据库——数据量 < 100 万条用 Chroma，> 100 万条考虑 Milvus。今天理解的 HNSW 索引和量化直接决定你的选型决策和成本"}],
"11-3":[{week:19, topic:"项目一多模态", how:"七周后项目一处理含图片的 PDF——先用 OCR 提取文字、再用视觉模型总结图片、最后一起 embedding。今天的多模态 pipeline 到时候就是文档处理全流程"}],
"11-4":[{week:19, topic:"项目一质量评估", how:"七周后项目一上线前用 RAGAS 跑一遍评估——答案忠实度 95%+？检索 Recall 90%+？今天的评估体系保证项目一不是「能用」而是「好用」"}],
"11-5":[{week:19, topic:"项目一生产化", how:"七周后项目一每天新增几百份文档——今天学的增量索引+缓存+监控，到时候保证新文档秒级可搜、热门问题 0.1 秒出答案"}],
"11-6":[{week:19, topic:"项目一技术文档", how:"七周后项目一的架构文档就是今天这篇博客的完整版——技术选型、评估指标、性能数据。面试官看的就是你对一个系统的完整思考"}],
// ===== WEEK 13: Tool Use =====
"12-0":[{week:14, topic:"Agent 工具集", how:"下周实现 Agent——每个 Agent 工具的 Schema 就是今天定义的 JSON Schema。Agent = LLM + Tool Use loop，今天学的是后一半"},
       {week:21, topic:"项目二工具", how:"八周后项目二 AI Agent 助手有 5 个工具——每个都是今天 Tool Schema 定义的。搜索/计算器/数据查询，结构完全复用"}],
"12-1":[{week:14, topic:"Agent 循环", how:"下周手写 Agent loop——tool_call → 执行 → 结果发回 LLM。今天写的 Tool Use loop 就是 Agent 循环的核心引擎"},
       {week:21, topic:"项目二 Agent 引擎", how:"八周后项目二的 Agent 跑的就是这个循环——循环里多加了记忆读写和安全检查，但核心结构不变"}],
"12-2":[{week:21, topic:"项目二工具设计", how:"八周后项目二设计 5 个工具——每个工具的 description 和参数说明直接决定 LLM 会不会选对。今天学的粒度控制和示例写法是工具好用的关键"}],
"12-3":[{week:21, topic:"项目二工具集", how:"八周后项目二的 5 个工具构成 Agent 的能力边界——能做什么、不能做什么，由工具集决定。今天实现的工具链到时候串联成「搜索→读网页→总结」"}],
"12-4":[{week:21, topic:"项目二混合策略", how:"八周后项目二中 Agent 可以决定：查本地知识库 or 联网搜索 or 直接回答。今天的 RAG-as-tool 到时候让 Agent 自主选择最优策略"}],
"12-5":[{week:21, topic:"项目二安全", how:"八周后项目二有「删除文件」这种危险工具——必须用户确认才能执行。今天实现的白名单 + Human-in-the-loop 到时候拦截所有误操作"}],
"12-6":[{week:21, topic:"项目二文档", how:"八周后项目二的工具使用文档就是今天博客的扩展——每个工具的 description、参数说明、使用示例。别人看文档就能接入你的 Agent"}],
// ===== WEEK 14: Agent =====
"13-0":[{week:21, topic:"项目二架构设计", how:"七周后项目二选择 Agent 模式还是 Workflow 模式——今天读的 Anthropic 博客给你一个决策框架：简单任务用 Workflow，复杂自主用 Agent"},
       {week:23, topic:"面试深度", how:"九周后面试官问「你了解的 Agent 设计模式」——你能把 Workflow vs Agent 的权衡讲清楚，这比只会调 LangChain 的候选人高一个层次"}],
"13-1":[{week:21, topic:"项目二核心循环", how:"七周后项目二实现 ReAct Agent——Thought→Action→Observation 循环。今天手写的第一个 ReAct loop 到时候变成处理复杂任务的通用引擎"}],
"13-2":[{week:21, topic:"项目二任务规划", how:"七周后项目二遇到大任务先拆成子任务——搜索→读网页→对比→写报告。今天实现的 Plan-Execute 让 Agent 不会在长任务中迷失方向"}],
"13-3":[{week:21, topic:"项目二记忆系统", how:"七周后项目二的 Agent 记得你上周问过的偏好——今天实现的三层记忆到时候让 Agent 越来越懂你。长期记忆让每次对话不是从零开始"}],
"13-4":[{week:21, topic:"项目二质量", how:"七周后项目二用多 Agent 辩论提升输出质量——一个写、一个审、一个润色。今天的「AI 编辑部」到时候让项目二的报告质量提升一个档次"}],
"13-5":[{week:21, topic:"项目二安全边界", how:"七周后项目二给 Agent 设了最大步数+token 预算——防止一个循环烧掉几十块钱的 API 费用。今天的审计日志到时候记录每一次决策，方便出了问题回溯"}],
"13-6":[{week:21, topic:"项目二初版", how:"今天的「研究助手 Agent」是七周后项目二的 MVP 版本。你两周后就会有一个能自动搜索+读网页+写报告的 Agent——然后项目二把它产品化"}],
// ===== WEEK 15: LangChain + LangGraph =====
"14-0":[{week:21, topic:"项目二框架选型", how:"六周后项目二决定是否用 LangChain——今天理解了其抽象层，你能做出理性决策：哪些部分用框架加速、哪些部分手写保持灵活性"}],
"14-1":[{week:19, topic:"项目一 RAG 重构", how:"四周后你可以选择用 LangChain 重构项目一的 RAG 管道——减少代码量但增加调试难度。今天对比的「手写 vs LangChain」让你做出知情选择"}],
"14-2":[{week:21, topic:"项目二图编排", how:"六周后项目二的 Agent 流程用 LangGraph 表示——节点是 Agent 步骤，条件边是决策路由。今天画的第一个 Graph 到时候变成 10+ 节点的复杂编排"}],
"14-3":[{week:21, topic:"项目二状态管理", how:"六周后项目二的对话状态用 LangGraph checkpoint 保存——用户关掉浏览器重开，Agent 记得断点继续。今天实现的 checkpoint 让 Agent 有持久记忆"}],
"14-4":[{week:21, topic:"项目二中断机制", how:"六周后项目二的危险操作前用 interrupt 暂停——用户点击「确认」才继续。今天实现的 Human-in-the-loop 到时候拦住所有误操作"}],
"14-5":[{week:22, topic:"技术深度面试", how:"七周后面试官问「你读过什么源码」——你说「LangGraph 的 StateGraph 核心约 300 行，我读过并且理解它的消息传递机制」。这句话让面试官知道你基础扎实"}],
"14-6":[{week:21, topic:"项目二技术选型", how:"六周后写项目二的架构文档——框架 vs 手写的对比分析就是今天博客的核心论点。你知道每种选择的 tradeoff，不是盲目跟风用框架"}],
// ===== WEEK 16: 多模态 + 流式 =====
"15-0":[{week:19, topic:"项目一图片理解", how:"三周后项目一处理含图 PDF——用视觉模型提取图片中的文字和图表信息。今天学的 base64 编码是传给视觉模型的标准方式"}],
"15-1":[{week:21, topic:"项目二语音交互", how:"五周后项目二的 Agent 可以加语音对话——今天搭的 STT→LLM→TTS 管道到时候让 Agent 变成一个能听会说的助手"}],
"15-2":[{week:19, topic:"项目一流式回答", how:"三周后项目一的答案逐字显示——今天学的 SSE 让用户不需要等 5 秒才看到完整答案，第 1 秒就开始出字"}],
"15-3":[{week:19, topic:"项目一流式管道", how:"三周后项目一的流式 pipeline——用户提问→检索→LLM 流式生成→逐字推送到前端。今天设计的 async generator 到时候串联整个管道"}],
"15-4":[{week:19, topic:"项目一监控", how:"三周后项目一上线，你需要知道每天消耗多少 token、API 延迟是否正常——今天的 LangSmith/Prometheus 到时候帮你定位性能瓶颈"}],
"15-5":[{week:20, topic:"项目一上线审计", how:"四周后项目一上线前的安全审计——Prompt Injection 防护、敏感信息脱敏、速率限制。今天对照的 OWASP checklist 到时候逐项检查通过才能上线"}],
"15-6":[{week:19, topic:"项目一综合技术", how:"三周后项目一几乎用到今天的所有技术——视觉模型处理图片、SSE 实时推流、监控追踪链路。今天是你第一次把它们串在一起"}],
// ===== WEEK 17: 模型部署 =====
"16-0":[{week:22, topic:"项目三微调", how:"五周后项目三微调一个开源模型——今天的 Ollama 是先跑通原始模型，微调后回来用 Ollama 加载你的微调版本对比效果"}],
"16-1":[{week:22, topic:"项目三 QLoRA", how:"五周后项目三用 QLoRA 微调——今天的量化知识让你理解为什么 7B 模型微调只需要 16GB 显存而不是 28GB。量化减少了可训参数"}],
"16-2":[{week:22, topic:"项目三部署", how:"五周后微调完的模型用 vLLM 部署——今天的 vLLM 配置到时候开个 API 让别人用你微调的模型。OpenAI 兼容端点让零改动接入现有代码"}],
"16-3":[{week:22, topic:"项目三性能", how:"五周后对比微调前后的吞吐量和延迟——今天理解的 PagedAttention 和 continuous batching 直接决定你的模型能处理多少并发请求"}],
"16-4":[{week:22, topic:"项目三 API", how:"五周后微调模型封装成 FastAPI 服务——今天的认证/限流/日志全部加上。别人通过 API 调你的模型，跟调 OpenAI 一样方便"}],
"16-5":[{week:22, topic:"项目三成本", how:"五周后项目三对比自部署 vs API 的成本——今天调研的 GPU 价格和 API 单价，到时候算出「多少 QPS 后自部署更便宜」的精确拐点"}],
"16-6":[{week:22, topic:"项目三决策树", how:"五周后你有一张清晰的决策图——调用量小用 API、调用量大且稳定用自部署、需要定制用微调。今天的博客到时候就是你面试回答「模型选型」的话术"}],
// ===== WEEK 18: 生产环境 =====
"17-0":[{week:19, topic:"项目一成本", how:"下周项目一问答引擎的缓存策略就是今天学的——相同问题秒回、相似问题查语义缓存、新问题才调 LLM。缓存命中率高 = 成本低 90%"}],
"17-1":[{week:19, topic:"项目一异步处理", how:"下周项目一的文档处理走 Celery——用户上传 50 份文档立刻返回「处理中」，后台异步解析→切分→embedding，处理完通知"}],
"17-2":[{week:19, topic:"项目一混合查询", how:"下周项目一用 pgvector 实现混合查询——WHERE user_id=123 AND embedding <-> query_vector < 0.5。今天学的标量+向量同一条 SQL 全搞定"}],
"17-3":[{week:19, topic:"项目一压测", how:"下周项目一上线前用 locust 压测——模拟 100 个并发用户、问 100 种不同问题。今天的性能分析告诉你哪里是瓶颈：数据库？LLM API？还是 Python 代码？"}],
"17-4":[{week:19, topic:"项目一排障", how:"下周项目一如果在生产环境出问题——你今天建立的排查流程和 runbook 让你在凌晨 3 点不慌：先看日志→定位组件→恢复服务→事后复盘"}],
"17-5":[{week:20, topic:"项目一 SLA", how:"两周后项目一上线，你要定义 SLA——99.5% 的请求在 3 秒内返回、每月最多宕机 22 分钟。今天的 SLO 思维让你定量描述「可用性」"}],
"17-6":[{week:19, topic:"项目一生产评审", how:"下周项目一开发前，对照今天的生产 checklist 确认——缓存/队列/监控/限流/备份。每一项都打勾，项目一不会在生产环境给你惊喜"}],
// ===== WEEK 19-24: Projects & Job =====
"18-0":[{week:20, topic:"项目一上线", how:"下周做的系统设计和 PRD，下周开始逐行变成代码。今天画的架构图到时候作为 README 的第一张图——面试官打开 GitHub 第一眼看到的就是它"}],
"18-1":[{week:20, topic:"项目一 CI/CD", how:"下周 CI/CD 跑起来的绿色 checkmark 让你每次 push 都有信心——lint 通过、测试通过、镜像构建成功。今天的配置是项目一的质量守护者"}],
"18-2":[{week:20, topic:"项目一用户系统", how:"下周用户注册时收到的验证邮件、登录时的 JWT token——今天实现的认证是项目一所有功能的入口。没认证 = 什么都做不了"}],
"18-3":[{week:20, topic:"项目一知识库", how:"下周用户创建知识库、上传文档——今天的文档处理管道到时候变成项目一的差异化功能：支持 PDF/Word/Markdown 混合知识库"}],
"18-4":[{week:20, topic:"项目一核心竞争力", how:"下周的问答引擎是项目一的核心——RAG + 流式 + 引用溯源。今天实现的每个环节到时候直接决定用户体验：答案准不准、快不快、来源靠不靠谱"}],
"18-5":[{week:20, topic:"项目一前端", how:"下周用 Streamlit 做的界面让你能 Demo 给任何人看——面试官打开浏览器就能试用。今天花 1 天写的 UI 到时候是说服力的来源"}],
"18-6":[{week:20, topic:"项目一质量保证", how:"下周写 E2E 测试时发现的问题，是上线前最后能修的 bug。今天邀请朋友试用的反馈，比你自己测试一个月发现的还多——外人的眼睛能看到你的盲区"}],
"19-0":[{week:22, topic:"简历项目", how:"今天完善的批量导入和统计功能，三周后在简历上变成「支持批量文档处理」「日产万条问答」。数字量化成果比「做了一个问答系统」有说服力 10 倍"}],
"19-1":[{week:22, topic:"简历性能数据", how:"今天加上缓存后 90% 的问题命中缓存——三周后在简历上写「缓存命中率 90%，LLM 成本降低 70%」。数字是简历上最有力的武器"}],
"19-2":[{week:22, topic:"简历安全", how:"今天完成的安全加固——三周后面试官问「你的项目有什么安全措施」，你能说 SQL 注入防护/文件类型校验/API 限流/敏感信息脱敏四项"}],
"19-3":[{week:22, topic:"面试现场演示", how:"今天部署的公网地址——三周后面试官打开浏览器输入 URL，看到你做的产品在跑。一个活的 Demo 胜过 10 页简历。链接写在简历第一行"}],
"19-4":[{week:22, topic:"GitHub 第一印象", how:"今天写的完整 README + 架构图 + badges——三周后面试官打开 GitHub，5 秒内判断「这个人专业」。好的 README 是开源项目的名片"}],
"19-5":[{week:22, topic:"作品集 Showcase", how:"今天录的 Demo 视频和项目博客——三周后在你的作品集主页播放。面试官看 3 分钟视频比读 30 分钟简历更能记住你。视频放在简历链接旁边"}],
"19-6":[{week:22, topic:"面试 STAR 素材", how:"今天写的项目复盘——三周后面试官问「你遇到过最大的技术挑战是什么」，你说项目一中遇到的 bug→怎么解决的→学到了什么。完整的 STAR 故事"}],
"20-0":[{week:22, topic:"作品集第二项目", how:"今天选的 Agent 选题——两周后它和项目一并列在你的 GitHub 首页。两个完全不同类型的项目展示你的广度：RAG 应用 + Agent 系统"}],
"20-1":[{week:22, topic:"简历 Agent 经验", how:"今天实现的 Agent 循环——两周后在简历上变成「从零实现 ReAct Agent 引擎，支持 5+ 工具自主调用」。这比「用过 LangChain」有分量"}],
"20-2":[{week:22, topic:"面试 Agent 深度", how:"今天实现的三层记忆——两周后面试官深挖 Agent 细节时，你能讲清楚工作记忆/短期记忆/长期记忆的区别和实现。展示你理解底层而不仅是会调 API"}],
"20-3":[{week:22, topic:"项目二 Demo", how:"今天做的「可看到 Agent 思考过程」的 UI——两周后演示时面试官看到 Agent 每一步在想什么、为什么选这个工具。透明性 = 可信度"}],
"20-4":[{week:22, topic:"简历运维能力", how:"今天加的监控和成本追踪——两周后在简历上变成「集成 Agent 执行链路追踪和 API 成本监控」。运维能力让你从纯开发到全栈 AI 工程师"}],
"20-5":[{week:22, topic:"项目二质量", how:"今天写的 Agent 行为测试——两周后确保 Agent 的行为可预测、可复现。面试官问「你怎么测试 Agent」时，你有完整的测试策略可讲"}],
"20-6":[{week:22, topic:"项目对比分析", how:"今天对比项目一和项目二的差异——两周后你清楚地知道 RAG 应用和 Agent 系统的架构区别、技术挑战、适用场景。面试官问「它们有什么区别」你脱口而出"}],
"21-0":[{week:23, topic:"面试 ML 经验", how:"下周面试时你说「我微调过开源模型」——不是纸上谈兵，你今天真正跑过 QLoRA、比较过微调前后效果。有数据、有模型、有 API 可以 Demo"}],
"21-1":[{week:23, topic:"面试成本分析", how:"下周面试官问「自部署和 API 怎么选」——你拿出今天对比的精确数据：多少 QPS 拐点、微调后的成本优势。定量的答案让面试官觉得你靠谱"}],
"21-2":[{week:23, topic:"面试开源经验", how:"今天的 PR——即使只是修文档/加测试，下周面试时你可以说「我给 X 项目贡献过代码」。90% 的候选人没有开源贡献，你立刻不一样"}],
"21-3":[{week:23, topic:"简历第一页", how:"今天整理的 GitHub Profile——下周 HR 打开链接看到 6 个 pin 的项目、满屏绿色格子、每个项目有 README。10 秒钟判断：这个人值得面试"}],
"21-4":[{week:23, topic:"面试技术深度", how:"今天写的 2000+ 字深度博客——下周面试官搜你名字看到它，知道你不仅会写代码，还能把技术讲清楚（这是高级工程师的核心能力）"}],
"21-5":[{week:23, topic:"简历投递", how:"今天写好的一页简历——下周投给 50 家公司。每个项目有量化成果、有技术栈、有你的角色。简历不是自我介绍，是「为什么要面试我」的答案"}],
"21-6":[{week:23, topic:"人脉渠道", how:"今天建的 LinkedIn + 连接的人——下周有人看到你的帖子，可能就是一个内推机会。50 个连接里有 1 个愿意帮你内推，比海投 100 份简历有效"}],
"22-0":[{week:24, topic:"面试算法", how:"下周面试的算法关——你今天刷的双指针+滑动窗口+前缀和是最高频考点。每天保持 3-5 题，面试时这关就是送分题"}],
"22-1":[{week:24, topic:"面试代码", how:"下周面试让你在白板上实现链表反转——你刷过 10 题，函数签名+边界条件+测试用例一口气写完。面试官说「不错，下一题」"}],
"22-2":[{week:24, topic:"面试难题", how:"下周面试出 DP 题——你能写出递推公式再写代码，这是面试官想看到的「先思考再编码」的习惯。今天的 DP 模板让你不慌"}],
"22-3":[{week:24, topic:"面试 ML 基础", how:"下周面试问「过拟合怎么办」——你从正则化讲到早停讲到数据增强讲到交叉验证。今天的 50 题覆盖了所有 ML 基础问题"}],
"22-4":[{week:24, topic:"面试 Attention", how:"下周面试官问「讲讲 Transformer」——你从 QKV 到 Multi-Head 到 Layer Norm 到残差连接讲一遍。今天读的原论文是你回答的权威来源"}],
"22-5":[{week:24, topic:"面试系统设计", how:"下周面试的系统设计环节——你画的 AI 问答系统架构图、做的容量估算、QPS 计算，就是标准答案。今天练的三道题覆盖了最常考的场景"}],
"22-6":[{week:24, topic:"真实面试", how:"下周真实的面试——今天的模拟暴露了你语速太快/条理不清/某个知识点模糊。现在就改，真面试时你已经迭代过一轮了"}],
"23-0":[{week:24, topic:"面试机会", how:"今天投的 10 家公司——下周可能有 2-3 个面试邀请。记录每家投递情况避免重复投、跟踪进度。海投 + 内推双管齐下，第一周至少 5 个面试"}],
"23-1":[{week:24, topic:"面试表现", how:"今天准备的 STAR 项目介绍——下周每次面试必问「介绍一下你的项目」。你不需要临场组织语言，你的 1 分钟版本、5 分钟版本已经打磨好了"}],
"23-2":[{week:24, topic:"面试复盘", how:"今天面试后 1 小时内写的反馈——下周你就有了一个「面试题库」：这家爱问数据库、那家爱问系统设计。针对性补强，越面越强"}],
"23-3":[{week:24, topic:"持续面试", how:"今天保持的 LeetCode 手感——下周面完 3 家后可能还有 2 家。手感不断，每多面一场就多一个机会"}],
"23-4":[{week:24, topic:"Offer 选择", how:"今天学会的 Offer 评估维度——下周拿到多个 Offer 时你不会只看薪资。技术成长 + mentor + 团队文化 + 产品前景，四个维度决定你的第一份 AI 工作质量"}],
"23-5":[{week:24, topic:"入职表现", how:"今天写的 90 天计划——入职第一天你就知道第一个月学什么、第二个月做什么、第三个月交付什么。老板看到你带着计划入职，印象立刻不一样"}],
"23-6":[{week:24, topic:"新起点", how:"今天回顾的 168 天笔记——你可能已经拿到 Offer。翻看第一天写的「安装 Python」到今天的「入职准备」，这是你职业生涯的纪念碑。"}]
};
