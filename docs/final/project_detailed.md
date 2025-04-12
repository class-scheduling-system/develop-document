# 项目详细文档

## 1. 项目概述
### 1.1 项目背景
随着高等教育规模的不断扩展，课程安排变得愈加复杂。传统的排课方式已经难以应对庞大的课程安排需求，不仅效率低下，而且经常产生各种排课冲突，难以满足现代高校对于个性化、多样化教学的需求。同时，这也导致了教学资源分配的不平衡。

高校排课涉及众多复杂因素，包括多样化的课程类型（如公共基础课、专业核心课、专业选修课、通识教育课等）、众多的授课教师、有限的教室资源（不同类型、容量和设备配置）、多样化的学生群体（不同专业、年级、班级）以及复杂的时间安排（课程时长、周次分布、时间段偏好等）。这些因素相互交织，形成了复杂的约束条件，导致排课过程极易出现时间冲突（同一时间安排多门课程或同一教师、教室在同一时间被重复使用）、资源不匹配（教室类型与课程需求不符）等问题，严重影响教学秩序和教学质量。

近年来，人工智能技术的迅速发展为解决这些问题带来了新的机遇。基于AI的智慧排课系统成为推动高校教学管理现代化的重要手段。通过运用先进的算法优化课程安排，该系统能够满足不同高校的教学管理需求，提高教育资源的利用效率，从而全面提升教学质量。

### 1.2 项目目标
1. **实现自动化排课**：利用人工智能算法，综合考虑所有相关因素，实现自动化、精准化排课，要求功能设计完整，操作简洁高效。
2. **优化资源利用**：通过智能算法提高教室与教师资源的使用效率，减少冲突，充分利用有限的教学资源。
3. **支持个性化需求**：充分满足教师和学生在课程安排上的个性化需求，如教师特定授课时间段要求、学生课程时间偏好、特殊课程优先安排等。
4. **实时冲突检测与智能优化**：具备实时动态检测排课冲突的能力，一旦发现冲突立即预警，并快速生成可行的解决方案。
5. **多维度可视化呈现**：提供丰富多样的可视化界面，以周视图、月视图、学期视图等形式展示课程安排，方便师生直观查看课程信息，并支持一键切换和详细信息查询。
6. **提供数据分析功能**：对排课数据进行全面深入分析，为学校教学管理提供数据依据，如课程分布合理性分析、教师工作量均衡评估、教室资源利用率统计等，助力学校优化教学资源配置和教学决策制定。

### 1.3 项目价值
1. **提高排课效率**：通过遗传算法配合 AI 大模型进行自动排课，将排课时间从传统的数周缩短至数小时，大幅提升工作效率。
2. **优化资源配置**：系统能智能分配教学资源，提高教室使用率，减少闲置浪费，实现资源的最优配置。
3. **降低管理成本**：减轻教务人员工作负担，降低人力成本，同时减少因排课错误导致的调整成本。
4. **提升教学体验**：通过满足师生个性化需求，减少课程冲突，提升教学体验和满意度。
5. **支持教学决策**：通过数据分析功能，为教学管理者提供决策依据，促进教学管理水平提升。
6. **促进教育改革**：为高校实施弹性学分制、选课制等教学改革提供技术支持，推动高校教育模式创新。

### 1.4 项目范围
本项目主要针对高校排课管理的核心需求，开发一套智能化排课系统。系统功能包括但不限于：

**功能范围**：
1. 智能排课功能：自动排课与手工排课模式，多种排课策略设置与调整。
2. 课表管理功能：课表生成、查询、统计、导出等。
3. 冲突检测与解决功能：实时监控排课冲突并提供解决方案。
4. 资源管理功能：教师、课程、教室等资源的信息管理。
5. 智能调课功能：针对节假日或突发事件的课程调整。
6. 数据分析功能：多维度数据统计与可视化展示。

**技术范围**：
- 前/后端分离的架构设计，前端以单页应用框架为主
- 数据库采用MySQL
- 采用遗传算法等适用的AI算法用于自动排课
- 系统响应时间控制在5秒以内，支持并发用户数不低于100
- 实现基本的身份验证和授权机制

**实施范围**：
- 系统源代码开发与测试
- 数据库设计与实现
- 系统部署文档编写
- 用户操作手册编写
- 系统演示视频制作

## 2. 系统架构设计
### 2.1 总体架构
"智课方舟"系统采用前后端分离的B/S架构，遵循现代Web应用开发标准。系统整体架构分为四层：

1. **表现层**：负责用户界面展示和交互，采用响应式设计，确保在不同设备上有良好的使用体验。
2. **应用层**：处理业务逻辑，包括排课算法执行、冲突检测、数据分析等核心功能。
3. **数据服务层**：提供数据访问服务，负责数据的增删改查，并确保数据一致性和安全性。
4. **基础设施层**：提供系统运行所需的基础环境，包括服务器、数据库、缓存等。

系统各组件之间通过标准REST API进行通信，保证了系统的可扩展性和灵活性。同时，采用微服务思想对功能模块进行解耦，使系统更易于维护和扩展。

### 2.2 技术选型
基于系统需求和性能考虑，技术选型如下：

**前端技术栈**：
- 框架：React 19，利用其组件化特性和虚拟DOM提高渲染效率
- UI库：Ant Design | Tailwind CSS(DaisyUI)，提供丰富的企业级UI组件
- 状态管理：Redux，管理复杂的应用状态
- 图表可视化：Ant Design Charts，用于数据分析结果展示

**后端技术栈**：
- 框架：Spring Boot 3，提供快速应用开发能力
- API规范：RESTful API，便于前后端分离和第三方系统集成
- 安全框架：Spring Security，提供身份验证和授权功能
- ORM框架：MyBatis-Plus，简化数据库操作

**数据库与缓存**：
- 主数据库：MySQL 8.2，存储核心业务数据
- 缓存：Redis，提高系统响应速度和并发处理能力

**算法实现**：
- 排课算法：基于遗传算法的排课引擎，Java实现
- 大模型：DeepSeek、ChatGPT等兼容OpenAI接口模型，提供智能化的排课建议
- RAG 工具：Dify、Python，提供智能化的排课建议以及自定义工具

**开发与部署工具**：
- 版本控制：Git
- 构建工具：Maven（后端）、yarn（前端）
- 容器化：Docker，便于部署以及扩展
- 持续集成：Jenkins，支持自动化测试和部署

### 2.3 系统架构图
系统架构图如下所示：

[此处应插入系统架构图，包括前后端组件、数据流向和外部系统集成关系]

### 2.4 数据库设计
基于项目实际需求和数据关系，本系统采用MySQL 8.2作为数据库管理系统。数据库设计充分考虑了数据的完整性、一致性和高效查询的需求，采用了规范化的设计原则。

#### 2.4.1 数据库表概览

系统数据库共包含33个表，主要分为以下三大类：

**1. 基础数据表**：存储系统基础信息，如院系、专业、班级、教师、学生、教室等。
**2. 业务数据表**：存储核心业务数据，如课程、排课、教师偏好等。
**3. 配置表**：存储各类配置信息和枚举值，如课程类型、教室类型、角色权限等。

下面是系统所有表的概览：

| 序号 | 表名                            | 表类型     | 说明           |
| ---- | ------------------------------- | ---------- | -------------- |
| 1    | cs_department                   | 基础数据表 | 院系表         |
| 2    | cs_major                        | 基础数据表 | 专业表         |
| 3    | cs_grade                        | 基础数据表 | 年级表         |
| 4    | cs_administrative_class         | 基础数据表 | 行政班级表     |
| 5    | cs_teacher                      | 基础数据表 | 教师表         |
| 6    | cs_student                      | 基础数据表 | 学生表         |
| 7    | cs_campus                       | 基础数据表 | 校区表         |
| 8    | cs_building                     | 基础数据表 | 楼栋表         |
| 9    | cs_classroom                    | 基础数据表 | 教室表         |
| 10   | cs_user                         | 基础数据表 | 用户表         |
| 11   | cs_course_library               | 业务数据表 | 课程库表       |
| 12   | cs_semester                     | 业务数据表 | 学期表         |
| 13   | cs_teaching_class               | 业务数据表 | 教学班表       |
| 14   | cs_class_assignment             | 业务数据表 | 排课表         |
| 15   | cs_teacher_preferences          | 业务数据表 | 教师偏好表     |
| 16   | cs_teacher_course_qualification | 业务数据表 | 教师授课资质表 |
| 17   | cs_scheduling_conflict          | 业务数据表 | 排课冲突表     |
| 18   | cs_classroom_type               | 配置表     | 教室类型表     |
| 19   | cs_classroom_tag                | 配置表     | 教室标签表     |
| 20   | cs_course_category              | 配置表     | 课程类别表     |
| 21   | cs_course_nature                | 配置表     | 课程性质表     |
| 22   | cs_course_property              | 配置表     | 课程属性表     |
| 23   | cs_course_type                  | 配置表     | 课程类型表     |
| 24   | cs_credit_hour_type             | 配置表     | 学时类型表     |
| 25   | cs_teacher_type                 | 配置表     | 教师类型表     |
| 26   | cs_tables_chairs_type           | 配置表     | 桌椅类型表     |
| 27   | cs_unit_category                | 配置表     | 单位类别表     |
| 28   | cs_unit_type                    | 配置表     | 单位类型表     |
| 29   | cs_role                         | 配置表     | 角色表         |
| 30   | cs_permission                   | 配置表     | 权限表         |
| 31   | cs_academic_affairs_permission  | 配置表     | 教务权限表     |
| 32   | cs_request_log                  | 配置表     | 请求日志表     |
| 33   | cs_system                       | 配置表     | 系统配置表     |

接下来将详细介绍每个表的结构。

#### 2.4.2 数据表详细设计

##### 1. 院系表（cs_department）

| 字段名                     | 数据类型     | 允许为空 | 默认值            | 说明         |
| -------------------------- | ------------ | -------- | ----------------- | ------------ |
| department_uuid            | CHAR(32)     | 否       | 无                | 部门主键     |
| department_code            | VARCHAR(32)  | 否       | 无                | 部门编码     |
| department_name            | VARCHAR(64)  | 否       | 无                | 部门名称     |
| department_order           | INT          | 否       | 100               | 部门排序     |
| department_english_name    | VARCHAR(128) | 是       | null              | 部门英文名称 |
| department_short_name      | VARCHAR(32)  | 是       | null              | 部门简称     |
| department_address         | VARCHAR(255) | 是       | null              | 部门地址     |
| is_entity                  | BIT(1)       | 否       | 1                 | 是否实体部门 |
| administrative_head        | VARCHAR(32)  | 是       | null              | 行政负责人   |
| party_committee_head       | VARCHAR(32)  | 是       | null              | 党委负责人   |
| establishment_date         | DATE         | 否       | curdate()         | 成立日期     |
| expiration_date            | DATE         | 是       | null              | 失效日期     |
| unit_category              | CHAR(32)     | 否       | 无                | 单位类别     |
| unit_type                  | CHAR(32)     | 否       | 无                | 单位办别     |
| parent_department          | CHAR(32)     | 是       | null              | 上级部门     |
| assigned_teaching_building | JSON         | 是       | null              | 分配教学楼   |
| is_teaching_college        | BIT(1)       | 否       | 1                 | 开课院系     |
| is_attending_college       | BIT(1)       | 否       | 1                 | 上课院系     |
| fixed_phone                | VARCHAR(32)  | 是       | null              | 固定电话     |
| remark                     | TEXT         | 是       | null              | 备注         |
| is_teaching_office         | BIT(1)       | 否       | 0                 | 开课教研室   |
| is_enabled                 | BIT(1)       | 否       | 1                 | 是否启用     |
| created_at                 | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at                 | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 2. 专业表（cs_major）

| 字段名            | 数据类型          | 允许为空 | 默认值            | 说明                         |
| ----------------- | ----------------- | -------- | ----------------- | ---------------------------- |
| major_uuid        | CHAR(32)          | 否       | 无                | 专业主键                     |
| major_name        | VARCHAR(32)       | 否       | 无                | 专业名称                     |
| major_description | VARCHAR(255)      | 是       | null              | 专业描述                     |
| major_code        | VARCHAR(32)       | 否       | 无                | 专业代码                     |
| major_status      | BIT(1)            | 否       | 1                 | 专业状态 0:禁用 1:启用       |
| department_uuid   | CHAR(32)          | 否       | 无                | 学院外键                     |
| education_years   | SMALLINT UNSIGNED | 否       | 无                | 学制（年）                   |
| training_level    | VARCHAR(32)       | 否       | 无                | 培养层次（例如：本科，专科） |
| created_at        | TIMESTAMP         | 否       | CURRENT_TIMESTAMP | 创建时间                     |
| updated_at        | TIMESTAMP         | 否       | CURRENT_TIMESTAMP | 更新时间                     |

##### 3. 年级表（cs_grade）

| 字段名      | 数据类型     | 允许为空 | 默认值            | 说明                           |
| ----------- | ------------ | -------- | ----------------- | ------------------------------ |
| grade_uuid  | CHAR(32)     | 否       | 无                | 年级主键                       |
| name        | VARCHAR(32)  | 否       | 无                | 年级名称（如：2020级、2021级） |
| year        | YEAR         | 否       | 无                | 入学年份                       |
| start_date  | DATE         | 否       | 无                | 年级开始日期                   |
| end_date    | DATE         | 是       | null              | 年级结束日期                   |
| description | VARCHAR(255) | 是       | null              | 年级描述                       |
| created_at  | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                       |
| updated_at  | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                       |

##### 4. 行政班级表（cs_administrative_class）

| 字段名                    | 数据类型     | 允许为空 | 默认值            | 说明                    |
| ------------------------- | ------------ | -------- | ----------------- | ----------------------- |
| administrative_class_uuid | CHAR(32)     | 否       | 无                | 行政班主键              |
| department_uuid           | CHAR(32)     | 否       | 无                | 所属部门/院系           |
| major_uuid                | CHAR(32)     | 否       | 无                | 所属专业                |
| class_code                | VARCHAR(32)  | 否       | 无                | 班级编号                |
| class_name                | VARCHAR(64)  | 否       | 无                | 班级名称                |
| grade_uuid                | CHAR(32)     | 否       | 无                | 年级UUID                |
| student_count             | INT UNSIGNED | 否       | 0                 | 学生人数                |
| counselor_uuid            | CHAR(32)     | 是       | null              | 辅导员UUID              |
| monitor_uuid              | CHAR(32)     | 是       | null              | 班长UUID                |
| is_enabled                | BIT(1)       | 否       | 1                 | 是否启用(0:禁用,1:启用) |
| description               | VARCHAR(255) | 是       | null              | 班级描述                |
| created_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                |
| updated_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                |

##### 5. 教师表（cs_teacher）

| 字段名       | 数据类型     | 允许为空 | 默认值            | 说明               |
| ------------ | ------------ | -------- | ----------------- | ------------------ |
| teacher_uuid | CHAR(32)     | 否       | 无                | 教师主键           |
| unit_uuid    | CHAR(32)     | 否       | 无                | 单位主键           |
| user_uuid    | CHAR(32)     | 是       | null              | 用户主键           |
| id           | VARCHAR(64)  | 否       | 无                | 教师工号           |
| name         | VARCHAR(32)  | 否       | 无                | 教师姓名           |
| english_name | VARCHAR(256) | 否       | 无                | 教师英文名         |
| ethnic       | CHAR(32)     | 否       | 无                | 教师民族           |
| sex          | BIT(1)       | 否       | 无                | 教师性别 0:女 1:男 |
| type         | CHAR(32)     | 否       | 无                | 教师类型           |
| phone        | VARCHAR(16)  | 是       | null              | 教师电话           |
| email        | VARCHAR(255) | 是       | null              | 教师邮箱           |
| job_title    | VARCHAR(32)  | 是       | null              | 教师职称           |
| desc         | VARCHAR(255) | 是       | null              | 教师描述           |
| created_at   | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间           |
| updated_at   | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间           |

##### 6. 学生表（cs_student）

| 字段名       | 数据类型    | 允许为空 | 默认值            | 说明                       |
| ------------ | ----------- | -------- | ----------------- | -------------------------- |
| student_uuid | CHAR(32)    | 否       | 无                | 学生主键                   |
| id           | VARCHAR(32) | 否       | 无                | 学号                       |
| name         | VARCHAR(32) | 否       | 无                | 学生姓名                   |
| gender       | BIT(1)      | 否       | 无                | 性别 0:女 1:男             |
| grade_uuid   | CHAR(32)    | 否       | 无                | 年级UUID                   |
| department   | CHAR(32)    | 否       | 无                | 所属学院                   |
| major        | CHAR(32)    | 否       | 无                | 所属专业                   |
| class        | CHAR(32)    | 是       | null              | 班级                       |
| user_uuid    | CHAR(32)    | 是       | null              | 对应用户主键               |
| is_graduated | BIT(1)      | 否       | 0                 | 是否毕业 0:未毕业 1:已毕业 |
| created_at   | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 创建时间                   |
| updated_at   | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 更新时间                   |

##### 7. 校区表（cs_campus）

| 字段名         | 数据类型     | 允许为空 | 默认值            | 说明                   |
| -------------- | ------------ | -------- | ----------------- | ---------------------- |
| campus_uuid    | CHAR(32)     | 否       | 无                | 校区主键               |
| campus_name    | VARCHAR(32)  | 否       | 无                | 校区名称               |
| campus_code    | VARCHAR(32)  | 否       | 无                | 校区编码               |
| campus_desc    | VARCHAR(255) | 是       | null              | 校区描述               |
| campus_status  | BIT(1)       | 否       | 1                 | 校区状态 0:禁用 1:启用 |
| campus_address | VARCHAR(255) | 否       | 无                | 校区地址               |
| latitude       | DECIMAL(10)  | 是       | null              | 纬度                   |
| longitude      | DECIMAL(10)  | 是       | null              | 经度                   |
| created_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间               |
| updated_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间               |

##### 8. 楼栋表（cs_building）

| 字段名        | 数据类型    | 允许为空 | 默认值            | 说明                     |
| ------------- | ----------- | -------- | ----------------- | ------------------------ |
| building_uuid | CHAR(32)    | 否       | 无                | 教学楼主键               |
| building_name | VARCHAR(32) | 否       | 无                | 教学楼名称               |
| campus_uuid   | CHAR(32)    | 否       | 无                | 校区主键                 |
| is_status     | BIT(1)      | 否       | 1                 | 教学楼状态 0:禁用 1:启用 |
| created_at    | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 创建时间                 |
| updated_at    | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 更新时间                 |

##### 9. 教室表（cs_classroom）

| 字段名                    | 数据类型     | 允许为空 | 默认值            | 说明                   |
| ------------------------- | ------------ | -------- | ----------------- | ---------------------- |
| classroom_uuid            | CHAR(32)     | 否       | 无                | 教室主键               |
| number                    | VARCHAR(32)  | 否       | 无                | 教室编号               |
| name                      | VARCHAR(32)  | 否       | 无                | 教室名称               |
| campus_uuid               | CHAR(32)     | 否       | 无                | 校区主键               |
| building_uuid             | CHAR(32)     | 否       | 无                | 楼栋主键               |
| floor                     | VARCHAR(4)   | 否       | 无                | 楼层                   |
| type                      | CHAR(32)     | 否       | 无                | 教室类型               |
| tag                       | JSON         | 是       | null              | 教室标签               |
| capacity                  | INT          | 否       | 无                | 教室容量               |
| examination_room          | BIT(1)       | 否       | 0                 | 是否是考场             |
| examination_room_capacity | INT          | 是       | null              | 考场容量               |
| is_multimedia             | BIT(1)       | 否       | 0                 | 是否是多媒体教室       |
| is_air_conditioned        | BIT(1)       | 否       | 0                 | 是否有空调             |
| status                    | BIT(1)       | 否       | 1                 | 教室状态 0:禁用 1:启用 |
| description               | VARCHAR(255) | 是       | null              | 教室描述               |
| management_department     | CHAR(32)     | 是       | null              | 管理部门               |
| area                      | DECIMAL(10)  | 否       | 无                | 教室面积               |
| tables_chairs_type        | CHAR(32)     | 是       | null              | 桌椅类型               |
| created_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间               |
| updated_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间               |

##### 10. 用户表（cs_user）

| 字段名     | 数据类型     | 允许为空 | 默认值            | 说明                             |
| ---------- | ------------ | -------- | ----------------- | -------------------------------- |
| user_uuid  | CHAR(32)     | 否       | 无                | 用户主键                         |
| name       | VARCHAR(32)  | 否       | 无                | 用户名                           |
| password   | CHAR(60)     | 否       | 无                | 用户密码                         |
| email      | VARCHAR(255) | 否       | 无                | 用户邮箱                         |
| phone      | VARCHAR(11)  | 否       | 无                | 用户手机号                       |
| status     | BIT(1)       | 否       | 1                 | 用户状态 0:禁用 1:启用           |
| ban        | BIT(1)       | 否       | 0                 | 用户是否被封禁 0:未封禁 1:已封禁 |
| role_uuid  | CHAR(32)     | 否       | 无                | 角色UUID                         |
| permission | JSON         | 是       | null              | 用户权限                         |
| created_at | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                         |
| updated_at | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                         |

##### 11. 课程库表（cs_course_library）

| 字段名                    | 数据类型     | 允许为空 | 默认值            | 说明           |
| ------------------------- | ------------ | -------- | ----------------- | -------------- |
| course_library_uuid       | CHAR(32)     | 否       | 无                | 课程库主键     |
| id                        | VARCHAR(32)  | 否       | 无                | 课程编号       |
| name                      | VARCHAR(32)  | 否       | 无                | 课程库名称     |
| english_name              | VARCHAR(128) | 是       | null              | 课程英文名称   |
| category                  | CHAR(32)     | 是       | null              | 课程类别       |
| property                  | CHAR(32)     | 是       | null              | 课程属性       |
| type                      | CHAR(32)     | 否       | 无                | 课程类型       |
| nature                    | CHAR(32)     | 是       | null              | 课程性质       |
| department                | CHAR(32)     | 否       | 无                | 开课学院       |
| is_enabled                | BIT(1)       | 否       | 1                 | 是否启用       |
| total_hours               | DECIMAL(10)  | 否       | 0.00              | 总学时         |
| week_hours                | DECIMAL(10)  | 否       | 0.00              | 周学时         |
| theory_hours              | DECIMAL(10)  | 否       | 0.00              | 理论学时       |
| experiment_hours          | DECIMAL(10)  | 否       | 0.00              | 实验学时       |
| practice_hours            | DECIMAL(10)  | 否       | 0.00              | 实践学时       |
| computer_hours            | DECIMAL(10)  | 否       | 0.00              | 上机学时       |
| other_hours               | DECIMAL(10)  | 否       | 0.00              | 其他学时       |
| credit                    | DECIMAL(10)  | 否       | 0.00              | 学分           |
| theory_classroom_type     | CHAR(32)     | 是       | null              | 理论课教室类型 |
| experiment_classroom_type | CHAR(32)     | 是       | null              | 实验课教室类型 |
| practice_classroom_type   | CHAR(32)     | 是       | null              | 实践课教室类型 |
| computer_classroom_type   | CHAR(32)     | 是       | null              | 上机课教室类型 |
| description               | TEXT         | 是       | null              | 课程库描述     |
| edit_user                 | CHAR(32)     | 是       | null              | 编辑人         |
| created_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间       |
| updated_at                | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间       |

##### 12. 学期表（cs_semester）

| 字段名        | 数据类型     | 允许为空 | 默认值            | 说明         |
| ------------- | ------------ | -------- | ----------------- | ------------ |
| semester_uuid | CHAR(32)     | 否       | 无                | 学期主键     |
| name          | VARCHAR(32)  | 否       | 无                | 学期名称     |
| description   | VARCHAR(255) | 是       | null              | 学期描述     |
| start_date    | DATE         | 否       | 无                | 学期开始日期 |
| end_date      | DATE         | 否       | 无                | 学期结束日期 |
| is_current    | BIT(1)       | 否       | 0                 | 是否当前学期 |
| is_enabled    | BIT(1)       | 否       | 1                 | 是否启用     |
| created_at    | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at    | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 13. 教学班表（cs_teaching_class）

| 字段名                 | 数据类型     | 允许为空 | 默认值            | 说明                                    |
| ---------------------- | ------------ | -------- | ----------------- | --------------------------------------- |
| teaching_class_uuid    | CHAR(32)     | 否       | 无                | 教学班主键                              |
| semester_uuid          | CHAR(32)     | 否       | 无                | 学期主键                                |
| course_uuid            | CHAR(32)     | 否       | 无                | 课程主键                                |
| teaching_class_code    | VARCHAR(32)  | 否       | 无                | 教学班编号                              |
| teaching_class_name    | VARCHAR(64)  | 否       | 无                | 教学班名称                              |
| administrative_classes | JSON         | 否       | 无                | 包含的行政班级(包含班级UUID)            |
| is_administrative      | BIT(1)       | 否       | 1                 | 如果是必修课则该字段为true，否则为false |
| class_size             | INT UNSIGNED | 否       | 0                 | 班级规模                                |
| actual_student_count   | INT UNSIGNED | 否       | 0                 | 实际学生人数                            |
| course_department_uuid | CHAR(32)     | 否       | 无                | 开课院系                                |
| description            | VARCHAR(255) | 是       | null              | 教学班描述                              |
| is_enabled             | BIT(1)       | 否       | 1                 | 是否启用(0:禁用,1:启用)                 |
| created_at             | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                                |
| updated_at             | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                                |

##### 14. 排课表（cs_class_assignment）

| 字段名                | 数据类型          | 允许为空 | 默认值            | 说明                         |
| --------------------- | ----------------- | -------- | ----------------- | ---------------------------- |
| class_assignment_uuid | CHAR(32)          | 否       | 无                | 排课主键                     |
| semester_uuid         | CHAR(32)          | 否       | 无                | 学期主键                     |
| course_uuid           | CHAR(32)          | 否       | 无                | 课程主键                     |
| teacher_uuid          | CHAR(32)          | 否       | 无                | 教师主键                     |
| campus_uuid           | CHAR(32)          | 否       | 无                | 校区主键                     |
| building_uuid         | CHAR(32)          | 否       | 无                | 教学楼主键                   |
| classroom_uuid        | CHAR(32)          | 否       | 无                | 教室主键                     |
| teaching_class_uuid   | CHAR(32)          | 否       | 无                | 教学班主键                   |
| course_ownership      | VARCHAR(32)       | 否       | 无                | 课程归属                     |
| credit_hour_type      | CHAR(32)          | 否       | 无                | 学时类型                     |
| teaching_hours        | DECIMAL(10)       | 否       | 0.00              | 教学学时（教师实际授课学时） |
| scheduled_hours       | DECIMAL(10)       | 否       | 0.00              | 排课学时（课程安排的学时）   |
| total_hours           | DECIMAL(10)       | 否       | 0.00              | 总需学时                     |
| scheduling_priority   | SMALLINT UNSIGNED | 否       | 100               | 排课优先级                   |
| teaching_campus       | CHAR(32)          | 否       | 无                | 教学校区                     |
| class_time            | JSON              | 否       | 无                | 上课时间                     |
| consecutive_sessions  | TINYINT UNSIGNED  | 否       | 2                 | 连堂节数                     |
| classroom_type        | CHAR(32)          | 否       | 无                | 教室类型                     |
| specified_time        | JSON              | 是       | null              | 指定时间                     |
| created_at            | TIMESTAMP         | 否       | CURRENT_TIMESTAMP | 创建时间                     |
| updated_at            | TIMESTAMP         | 否       | CURRENT_TIMESTAMP | 更新时间                     |

##### 15. 教师偏好表（cs_teacher_preferences）

| 字段名           | 数据类型     | 允许为空 | 默认值            | 说明                                                                    |
| ---------------- | ------------ | -------- | ----------------- | ----------------------------------------------------------------------- |
| preference_uuid  | CHAR(32)     | 否       | 无                | 教师喜好主键                                                            |
| teacher_uuid     | CHAR(32)     | 否       | 无                | 教师主键                                                                |
| semester_uuid    | CHAR(32)     | 否       | 无                | 学期主键                                                                |
| day_of_week      | TINYINT      | 否       | 无                | 星期几（1-7）                                                           |
| time_slot        | TINYINT      | 否       | 无                | 第几节课（1-12）                                                        |
| preference_level | TINYINT      | 否       | 无                | 偏好程度（1：最不期望，2：尽量避免，3：可接受，4：较期望，5：非常期望） |
| reason           | VARCHAR(255) | 是       | null              | 偏好原因                                                                |
| created_at       | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                                                                |
| updated_at       | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                                                                |

##### 16. 教师授课资质表（cs_teacher_course_qualification）

| 字段名              | 数据类型     | 允许为空 | 默认值            | 说明                            |
| ------------------- | ------------ | -------- | ----------------- | ------------------------------- |
| qualification_uuid  | CHAR(32)     | 否       | 无                | 资格主键                        |
| teacher_uuid        | CHAR(32)     | 否       | 无                | 教师主键                        |
| course_uuid         | CHAR(32)     | 否       | 无                | 课程主键                        |
| qualification_level | TINYINT      | 否       | 1                 | 资格等级 1:初级 2:中级 3:高级   |
| is_primary          | BIT(1)       | 否       | 0                 | 是否主讲教师                    |
| teach_years         | TINYINT      | 否       | 0                 | 教授年限                        |
| status              | TINYINT      | 否       | 1                 | 状态 0:待审核 1:已审核 2:已驳回 |
| remarks             | VARCHAR(255) | 是       | null              | 备注说明                        |
| approved_by         | CHAR(32)     | 是       | null              | 审核人                          |
| approved_at         | TIMESTAMP    | 是       | null              | 审核时间                        |
| created_at          | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间                        |
| updated_at          | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间                        |

##### 17. 排课冲突表（cs_scheduling_conflict）

| 字段名                 | 数据类型         | 允许为空 | 默认值            | 说明                                                          |
| ---------------------- | ---------------- | -------- | ----------------- | ------------------------------------------------------------- |
| conflict_uuid          | CHAR(32)         | 否       | 无                | 冲突主键                                                      |
| semester_uuid          | CHAR(32)         | 否       | 无                | 学期主键                                                      |
| first_assignment_uuid  | CHAR(32)         | 否       | 无                | 第一个排课主键                                                |
| second_assignment_uuid | CHAR(32)         | 否       | 无                | 第二个排课主键                                                |
| conflict_type          | TINYINT UNSIGNED | 否       | 无                | 冲突类型: 1-教师冲突 2-教室冲突 3-班级冲突 4-其他冲突         |
| conflict_time          | JSON             | 否       | 无                | 冲突时间                                                      |
| description            | VARCHAR(255)     | 是       | null              | 冲突描述                                                      |
| resolution_status      | TINYINT UNSIGNED | 否       | 0                 | 解决状态: 0-未解决 1-已解决 2-忽略                            |
| resolution_method      | TINYINT UNSIGNED | 是       | null              | 解决方法: 1-调整第一个课程 2-调整第二个课程 3-同时调整 4-其他 |
| resolution_notes       | VARCHAR(255)     | 是       | null              | 解决备注                                                      |
| resolved_by            | CHAR(32)         | 是       | null              | 解决人                                                        |
| resolved_at            | TIMESTAMP        | 是       | null              | 解决时间                                                      |
| created_at             | TIMESTAMP        | 否       | CURRENT_TIMESTAMP | 创建时间                                                      |
| updated_at             | TIMESTAMP        | 否       | CURRENT_TIMESTAMP | 更新时间                                                      |

##### 18. 教室类型表（cs_classroom_type）

| 字段名          | 数据类型     | 允许为空 | 默认值            | 说明         |
| --------------- | ------------ | -------- | ----------------- | ------------ |
| class_type_uuid | CHAR(32)     | 否       | 无                | 教室类型主键 |
| name            | VARCHAR(32)  | 否       | 无                | 教室类型名称 |
| description     | VARCHAR(255) | 是       | null              | 教室类型描述 |
| created_at      | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at      | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 19. 教室标签表（cs_classroom_tag）

| 字段名         | 数据类型     | 允许为空 | 默认值            | 说明         |
| -------------- | ------------ | -------- | ----------------- | ------------ |
| class_tag_uuid | CHAR(32)     | 否       | 无                | 教室标签主键 |
| name           | VARCHAR(32)  | 否       | 无                | 教室标签名称 |
| description    | VARCHAR(255) | 是       | null              | 教室标签描述 |
| created_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 20. 课程类别表（cs_course_category）

| 字段名               | 数据类型     | 允许为空 | 默认值            | 说明         |
| -------------------- | ------------ | -------- | ----------------- | ------------ |
| course_category_uuid | CHAR(32)     | 否       | 无                | 课程分类主键 |
| name                 | VARCHAR(32)  | 否       | 无                | 课程分类名称 |
| description          | VARCHAR(255) | 是       | null              | 课程分类描述 |
| created_at           | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at           | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 21. 课程性质表（cs_course_nature）

| 字段名             | 数据类型     | 允许为空 | 默认值            | 说明         |
| ------------------ | ------------ | -------- | ----------------- | ------------ |
| course_nature_uuid | CHAR(32)     | 否       | 无                | 课程性质主键 |
| name               | VARCHAR(32)  | 否       | 无                | 课程性质名称 |
| description        | VARCHAR(255) | 是       | null              | 课程性质描述 |
| created_at         | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at         | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 22. 课程属性表（cs_course_property）

| 字段名               | 数据类型     | 允许为空 | 默认值            | 说明         |
| -------------------- | ------------ | -------- | ----------------- | ------------ |
| course_property_uuid | CHAR(32)     | 否       | 无                | 课程属性主键 |
| name                 | VARCHAR(32)  | 否       | 无                | 课程属性名称 |
| description          | VARCHAR(255) | 是       | null              | 课程属性描述 |
| created_at           | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at           | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 23. 课程类型表（cs_course_type）

| 字段名           | 数据类型     | 允许为空 | 默认值            | 说明         |
| ---------------- | ------------ | -------- | ----------------- | ------------ |
| course_type_uuid | CHAR(32)     | 否       | 无                | 课程类型主键 |
| name             | VARCHAR(32)  | 否       | 无                | 课程类型名称 |
| description      | VARCHAR(255) | 是       | null              | 课程类型描述 |
| created_at       | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at       | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 24. 学时类型表（cs_credit_hour_type）

| 字段名                | 数据类型     | 允许为空 | 默认值            | 说明         |
| --------------------- | ------------ | -------- | ----------------- | ------------ |
| credit_hour_type_uuid | CHAR(32)     | 否       | 无                | 学时类型主键 |
| name                  | VARCHAR(32)  | 否       | 无                | 学时类型名称 |
| description           | VARCHAR(255) | 是       | null              | 学时类型描述 |
| created_at            | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at            | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 25. 教师类型表（cs_teacher_type）

| 字段名            | 数据类型     | 允许为空 | 默认值            | 说明         |
| ----------------- | ------------ | -------- | ----------------- | ------------ |
| teacher_type_uuid | CHAR(32)     | 否       | 无                | 教师类型主键 |
| type_name         | VARCHAR(64)  | 否       | 无                | 类型名称     |
| type_english_name | VARCHAR(256) | 否       | 无                | 类型英文名称 |
| type_desc         | VARCHAR(256) | 是       | null              | 类型描述     |
| created_at        | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at        | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 26. 桌椅类型表（cs_tables_chairs_type）

| 字段名                  | 数据类型     | 允许为空 | 默认值            | 说明         |
| ----------------------- | ------------ | -------- | ----------------- | ------------ |
| tables_chairs_type_uuid | CHAR(32)     | 否       | 无                | 桌椅类型主键 |
| name                    | VARCHAR(32)  | 否       | 无                | 桌椅类型名称 |
| description             | VARCHAR(255) | 是       | null              | 桌椅类型描述 |
| base64_img              | TEXT         | 是       | null              | 桌椅类型图片 |
| created_at              | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at              | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 27. 单位类别表（cs_unit_category）

| 字段名             | 数据类型    | 允许为空 | 默认值            | 说明             |
| ------------------ | ----------- | -------- | ----------------- | ---------------- |
| unit_category_uuid | CHAR(32)    | 否       | 无                | 单位类别主键     |
| name               | VARCHAR(32) | 否       | 无                | 单位类别名称     |
| order              | INT         | 否       | 100               | 单位类别排序     |
| english_name       | VARCHAR(32) | 是       | null              | 单位类别英文名称 |
| short_name         | VARCHAR(32) | 是       | null              | 单位类别简称     |
| is_entity          | BIT(1)      | 否       | 1                 | 是否实体单位类别 |
| created_at         | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 创建时间         |
| updated_at         | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 更新时间         |

##### 28. 单位类型表（cs_unit_type）

| 字段名         | 数据类型     | 允许为空 | 默认值            | 说明         |
| -------------- | ------------ | -------- | ----------------- | ------------ |
| unit_type_uuid | CHAR(32)     | 否       | 无                | 单位办别主键 |
| name           | VARCHAR(32)  | 否       | 无                | 单位名称     |
| english_name   | VARCHAR(128) | 是       | null              | 单位英文名称 |
| short_name     | VARCHAR(32)  | 是       | null              | 单位简称     |
| order          | INT          | 否       | 100               | 单位排序     |
| created_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间     |
| updated_at     | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 更新时间     |

##### 29. 角色表（cs_role）

| 字段名      | 数据类型    | 允许为空 | 默认值            | 说明                   |
| ----------- | ----------- | -------- | ----------------- | ---------------------- |
| role_uuid   | CHAR(32)    | 否       | 无                | 角色主键               |
| role_name   | VARCHAR(32) | 否       | 无                | 角色名                 |
| role_status | BIT(1)      | 否       | 1                 | 角色状态 0:禁用 1:启用 |
| permission  | JSON        | 是       | null              | 角色权限               |
| created_at  | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 创建时间               |
| updated_at  | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 更新时间               |

##### 30. 权限表（cs_permission）

| 字段名          | 数据类型     | 允许为空 | 默认值 | 说明                          |
| --------------- | ------------ | -------- | ------ | ----------------------------- |
| permission_uuid | CHAR(32)     | 否       | 无     | 权限主键                      |
| permission_key  | VARCHAR(255) | 否       | 无     | 权限键，格式为 key1.key2.key3 |
| name            | VARCHAR(128) | 否       | 无     | 权限名称                      |
| desc            | VARCHAR(255) | 是       | null   | 权限描述                      |

##### 31. 教务权限表（cs_academic_affairs_permission）

| 字段名                           | 数据类型  | 允许为空 | 默认值            | 说明                           |
| -------------------------------- | --------- | -------- | ----------------- | ------------------------------ |
| academic_affairs_permission_uuid | CHAR(32)  | 否       | 无                | 教务权限主键                   |
| authorized_user                  | CHAR(32)  | 否       | 无                | 授权用户                       |
| department                       | CHAR(32)  | 否       | 无                | 部门（要求该部门为院系）       |
| type                             | TINYINT   | 否       | 无                | 类型 0:所有权限, 1:教务权限... |
| created_at                       | TIMESTAMP | 否       | CURRENT_TIMESTAMP | 创建时间                       |
| updated_at                       | TIMESTAMP | 否       | CURRENT_TIMESTAMP | 更新时间                       |

##### 32. 请求日志表（cs_request_log）

| 字段名           | 数据类型     | 允许为空 | 默认值            | 说明                 |
| ---------------- | ------------ | -------- | ----------------- | -------------------- |
| request_log_uuid | CHAR(32)     | 否       | 无                | 请求日志主键         |
| user_uuid        | CHAR(32)     | 是       | null              | 用户UUID             |
| request_ip       | VARCHAR(50)  | 否       | 无                | 请求IP地址           |
| user_agent       | VARCHAR(500) | 否       | 无                | 用户代理信息         |
| request_url      | VARCHAR(500) | 否       | 无                | 请求URL              |
| request_method   | VARCHAR(10)  | 否       | 无                | 请求方法(GET/POST等) |
| request_params   | TEXT         | 是       | null              | 请求参数             |
| request_body     | TEXT         | 是       | null              | 请求体               |
| response_code    | INT          | 否       | 无                | 响应状态码           |
| error_message    | VARCHAR(255) | 是       | null              | 错误信息             |
| execution_time   | BIGINT       | 否       | 无                | 执行时间(毫秒)       |
| request_time     | TIMESTAMP    | 否       | 无                | 请求时间             |
| response_time    | TIMESTAMP    | 否       | 无                | 响应时间             |
| created_at       | TIMESTAMP    | 否       | CURRENT_TIMESTAMP | 创建时间             |

##### 33. 系统配置表（cs_system）

| 字段名      | 数据类型    | 允许为空 | 默认值            | 说明     |
| ----------- | ----------- | -------- | ----------------- | -------- |
| system_uuid | CHAR(32)    | 否       | 无                | 系统主键 |
| system_key  | VARCHAR(32) | 否       | 无                | 系统键   |
| system_val  | TEXT        | 是       | null              | 系统值   |
| created_at  | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 创建时间 |
| updated_at  | TIMESTAMP   | 否       | CURRENT_TIMESTAMP | 更新时间 |

#### 2.4.3 数据库优化策略

1. **索引优化**：
   - 对经常被查询的字段创建合适的索引
   - 对排课查询常用的组合条件创建复合索引
   - 使用适当的索引类型（B+树、全文索引等）提高查询效率

2. **数据类型选择**：
   - 使用适合数据特性的最小数据类型，减少存储空间
   - 对固定长度的代码使用CHAR类型，变长文本使用VARCHAR
   - 使用JSON类型存储复杂结构数据，如班级列表、上课时间

3. **查询优化**：
   - 设计合理的表连接关系，减少复杂查询的连接开销
   - 使用分区技术处理大数据量表，如按学期分区排课记录
   - 对热点数据采用缓存策略，减少数据库访问

4. **数据一致性**：
   - 设置合适的外键约束，确保数据完整性
   - 使用事务保证关联操作的原子性
   - 实现数据变更的日志记录，便于问题追踪

#### 2.4.4 数据库E-R图

[此处应插入数据库E-R图，展示实体间的关系]

## 3. 功能模块设计
### 3.1 模块划分
"智课方舟"系统基于功能职责划分为以下核心模块：

1. **用户管理模块**：
   - 用户注册、登录与身份验证
   - 角色权限管理
   - 用户信息维护

2. **基础数据管理模块**：
   - 院系、专业、班级信息管理
   - 教师信息管理
   - 课程信息管理
   - 教室资源管理
   - 学期与时间管理

3. **排课策略管理模块**：
   - 排课规则配置
   - 优先级设置
   - 约束条件管理

4. **智能排课模块**：
   - 自动排课
   - 排课进度监控
   - 排课结果优化

5. **手动排课与调整模块**：
   - 手动排课界面
   - 课表图形化调整
   - 拖拽式排课

6. **冲突检测与处理模块**：
   - 实时冲突检测
   - 冲突原因分析
   - 冲突解决方案推荐

7. **课表管理模块**：
   - 课表查询
   - 多维度课表展示
   - 课表导出与打印

8. **智能调课模块**：
   - 节假日调课
   - 临时变更处理
   - 调课方案生成

9. **数据分析与统计模块**：
   - 教室利用率分析
   - 教师工作量统计
   - 课程分布分析
   - 数据可视化展示

10. **系统管理模块**：
    - 系统配置管理
    - 日志管理
    - 数据备份与恢复

### 3.2 核心功能详细说明

#### 3.2.1 智能排课功能
智能排课是系统的核心功能，基于遗传算法实现，综合考虑多种约束条件，自动生成满足要求的课表方案。

**主要功能点**：
- **排课策略设置**：支持设置排课的约束条件和优先级规则，如教师偏好、教室要求、连排规则等。
- **自动排课执行**：一键启动自动排课流程，系统自动分配课程时间和教室。
- **排课进度监控**：实时显示排课进度，包括总任务数、已完成任务数和未完成任务数。
- **排课结果展示**：多维度展示排课结果，支持按班级、教师、教室等不同维度查看。
- **未排课程分析**：对未能成功排入的课程进行原因分析，提供改进建议。

#### 3.2.2 冲突检测与处理功能
系统能够实时检测排课过程中的各类冲突，并提供智能解决方案。

**主要功能点**：
- **多维度冲突检测**：检测包括教师冲突、教室冲突、班级冲突等多种冲突类型。
- **冲突可视化展示**：以图形化方式直观展示冲突情况，便于用户理解。
- **智能解决方案**：系统自动生成多种可行的冲突解决方案，并计算各方案的影响范围。
- **一键应用方案**：用户可选择合适的解决方案一键应用，系统自动调整受影响的课程。

#### 3.2.3 课表管理功能
提供全面的课表查询、管理和导出功能，满足不同用户的使用需求。

**主要功能点**：
- **多维度课表查询**：支持按班级、教师、教室、课程等维度查询课表。
- **个性化视图**：提供日视图、周视图、月视图和学期视图等多种视图模式。
- **课表导出**：支持将课表导出为Excel、PDF等多种格式。
- **课表打印**：提供打印友好的课表布局，支持自定义打印参数。

#### 3.2.4 数据分析与统计功能
基于排课数据，提供深入的数据分析和统计功能，为教学管理决策提供支持。

**主要功能点**：
- **教室利用率分析**：统计不同时间段、不同类型教室的使用情况。
- **教师工作量分析**：计算教师课时分布、峰谷分布等信息。
- **课程分布分析**：分析不同类型课程的时间分布情况。
- **图表可视化**：使用柱状图、饼图、热力图等多种图表直观展示分析结果。
- **报表导出**：支持将分析报告导出为Excel或PDF格式。

### 3.3 用户角色与权限设计
系统根据不同用户的职责和需求，设计了以下角色及对应权限：

1. **系统管理员**：
   - 系统配置管理
   - 用户和角色管理
   - 基础数据维护
   - 数据备份与恢复

2. **教务管理员**：
   - 排课策略配置
   - 自动排课执行
   - 课表审核与发布
   - 数据统计与分析

3. **二级学院管理员**：
   - 本学院教师信息管理
   - 本学院课程信息管理
   - 本学院排课管理
   - 本学院课表查询与导出

4. **教师**：
   - 个人课表查询
   - 教学安排查看
   - 个人排课偏好设置
   - 临时调课申请

5. **学生**（预留）：
   - 个人课表查询
   - 教室占用情况查询

### 3.4 用户界面设计
系统界面设计遵循简洁、直观、高效的原则，主要包括以下几个核心界面：

1. **仪表盘界面**：
   - 系统概览，展示关键数据和快捷入口
   - 待办事项提醒
   - 系统公告

2. **排课管理界面**：
   - 排课参数设置面板
   - 自动排课控制面板
   - 排课进度监控区域
   - 排课结果展示区域

3. **课表查询与管理界面**：
   - 多条件查询筛选区
   - 课表展示区（支持多种视图切换）
   - 课表操作工具栏（导出、打印等）

4. **手动排课界面**：
   - 课程池区域（待排课程列表）
   - 时间表网格（支持拖拽操作）
   - 教室选择面板
   - 冲突提示区域

5. **数据分析界面**：
   - 分析指标选择区
   - 图表展示区
   - 数据筛选区
   - 报表导出区

6. **系统管理界面**：
   - 用户与权限管理
   - 基础数据维护
   - 系统参数配置
   - 日志查询

所有界面均采用响应式设计，确保在不同设备上都能获得良好的使用体验。界面交互设计注重用户体验，提供直观的操作反馈和必要的引导提示。

## 4. 核心算法设计
### 4.1 排课算法概述
智能排课算法是系统的核心，采用改进的遗传算法作为基础，结合贪心策略和局部搜索优化，实现高效的自动排课。

该算法能够处理多目标优化问题，平衡满足硬约束（必须满足的条件）和软约束（尽量满足的偏好）之间的关系。算法设计考虑了可扩展性，支持动态添加新的约束条件和优化目标。

**算法关键特点**：
- **多目标优化**：同时优化多个目标，如减少冲突、提高资源利用率、满足个性化需求等。
- **约束处理能力**：能够有效处理复杂的约束条件，包括时间约束、空间约束、教师偏好等。
- **高效性能**：通过并行计算和优化的数据结构，提高算法执行效率。
- **稳定性**：采用多次运行取最优解的策略，确保结果的稳定性。
- **可解释性**：提供算法决策过程的可视化和解释，增强用户信任。

### 4.2 算法流程
排课算法的整体流程如下：

1. **初始化**：
   - 加载教学任务、教室资源、时间段等基础数据
   - 设置算法参数（种群大小、迭代次数、变异率等）
   - 生成初始种群（随机或启发式生成）

2. **适应度评估**：
   - 计算每个排课方案的适应度值
   - 评估硬约束满足情况（如教师、教室、班级的时间冲突）
   - 评估软约束满足情况（如教师偏好、连排要求等）
   - 综合计算总适应度分数

3. **选择操作**：
   - 基于适应度值选择优质个体
   - 采用轮盘赌和精英保留相结合的选择策略

4. **交叉操作**：
   - 对选中的个体进行交叉操作
   - 使用改进的交叉算子，确保生成的子代仍符合基本约束

5. **变异操作**：
   - 对个体进行随机变异
   - 采用自适应变异率，根据种群收敛情况动态调整

6. **局部搜索优化**：
   - 对适应度较高的个体进行局部搜索
   - 优化局部排课结果，提高总体适应度

7. **终止判断**：
   - 达到最大迭代次数或满足收敛条件时终止
   - 输出最优排课方案

8. **后处理**：
   - 分析未能满足的约束条件
   - 生成排课报告，包括统计信息和未排课程原因分析

### 4.3 算法优化
为了提高排课算法的效率和结果质量，我们对标准遗传算法进行了以下几方面的优化：

1. **染色体编码优化**：
   - 采用三维编码方式（课程-时间-教室），减少冲突检测的复杂度
   - 使用整数编码代替二进制编码，提高编码效率

2. **初始种群生成优化**：
   - 结合贪心策略生成部分高质量初始解
   - 引入多样性保持机制，避免早期收敛

3. **适应度计算优化**：
   - 使用分级惩罚机制，区分不同严重程度的约束违反
   - 引入动态权重调整，根据约束满足情况动态调整各约束的权重

4. **交叉算子优化**：
   - 设计教育领域特定的交叉算子，保留父代的优良特性
   - 引入基于知识的修复机制，减少无效解的生成

5. **并行计算优化**：
   - 利用多线程并行计算适应度
   - 采用岛屿模型并行遗传算法，提高搜索效率

6. **记忆机制**：
   - 引入记忆库，存储历史优质解
   - 周期性地从记忆库中恢复优质基因，防止优质特征丢失

### 4.4 算法创新点
本项目在排课算法方面的创新主要体现在以下几个方面：

1. **自适应遗传算法框架**：
   - 开发了适应排课场景的自适应遗传算法框架
   - 根据进化过程自动调整选择压力、交叉率和变异率

2. **多级约束处理机制**：
   - 创新性地提出多级约束处理机制，将约束分为必要约束、重要约束和偏好约束
   - 采用不同的处理策略，确保必要约束的满足，同时尽可能满足其他约束

3. **混合元启发式算法**：
   - 将遗传算法与模拟退火、禁忌搜索等其他元启发式算法结合
   - 在全局搜索和局部优化之间取得平衡，提高解的质量

4. **智能冲突解决策略**：
   - 开发了智能冲突解决策略，能够根据冲突类型自动生成多种解决方案
   - 结合机器学习技术，从历史排课经验中学习最佳冲突解决模式

5. **增量式排课算法**：
   - 支持增量式排课，能够在已有课表基础上进行局部调整
   - 大大提高了排课系统的灵活性和实用性

6. **多目标优化框架**：
   - 引入多目标优化框架，处理排课过程中的多个优化目标
   - 采用帕累托最优解集，提供多种可选的平衡方案

## 5. 系统实现
### 5.1 开发环境
系统开发环境配置如下：

**开发工具**：
- 开发IDE：IntelliJ IDEA 2023.1（后端）、Visual Studio Code 1.74（前端）
- 版本控制：Git 2.37.0，GitLab 15.4
- API测试：Postman 10.10.0
- 数据库工具：Navicat Premium 16.1.3

**运行环境**：
- 操作系统：CentOS 8.4（服务器）、Windows 10/11、macOS 12+（开发机）
- Java环境：JDK 17.0.5
- Node环境：Node.js 18.12.0，npm 8.19.2
- 数据库：MySQL 8.0.31
- 缓存：Redis 7.0.5
- Web服务器：Nginx 1.22.1
- 应用服务器：Spring Boot内置Tomcat

**开发规范**：
- 代码规范：阿里巴巴Java开发手册、Airbnb JavaScript风格指南
- 版本管理：Git Flow工作流
- API文档：Swagger 3.0
- 单元测试：JUnit 5、Jest
- 持续集成：Jenkins 2.375.1

### 5.2 前端实现
#### 5.2.1 技术栈详情
前端采用React 18框架，结合以下技术栈：
- 路由管理：React Router 6.4.0
- 状态管理：Redux 4.2.0 + Redux Toolkit 1.8.5
- UI组件库：Ant Design 5.0.0
- HTTP请求：Axios 1.1.3
- 表单处理：Formik 2.2.9 + Yup（表单验证）
- 图表可视化：Apache ECharts 5.4.0
- 日历组件：FullCalendar 6.0.0
- 样式解决方案：Less + CSS Modules
- 构建工具：Vite 3.2.0

#### 5.2.2 主要实现模块
1. **课表展示模块**：
   - 基于FullCalendar实现多视图课表展示
   - 支持拖拽调整课程时间和地点
   - 实现课程详情悬浮查看

2. **排课控制模块**：
   - 排课参数可视化配置界面
   - 排课进度实时监控组件
   - 基于WebSocket的排课结果实时更新

3. **数据可视化模块**：
   - 基于ECharts实现多种图表展示
   - 支持图表交互和数据钻取
   - 提供多种图表导出格式

4. **用户界面与交互**：
   - 响应式布局，适配不同设备
   - 基于角色的权限控制
   - 主题定制与暗黑模式支持

#### 5.2.3 性能优化
1. **代码分割**：
   - 基于路由的代码分割
   - 组件懒加载

2. **状态管理优化**：
   - 合理使用Redux状态管理
   - 使用Redux Toolkit简化Redux代码

3. **渲染性能优化**：
   - 使用React.memo减少不必要的重渲染
   - 实现虚拟列表处理大量数据

4. **网络请求优化**：
   - API请求缓存策略
   - 请求合并与批处理

### 5.3 后端实现
#### 5.3.1 技术栈详情
后端采用Spring Boot 3框架，结合以下技术：
- ORM框架：MyBatis-Plus 3.5.2
- 安全框架：Spring Security 6.0.0 + JWT 0.11.5
- 缓存：Redis + Spring Cache
- 消息队列：RabbitMQ 3.10.0（用于异步任务处理）
- 定时任务：Quartz 2.3.2
- 文档生成：Swagger 3 (OpenAPI)
- 日志框架：Logback + SLF4J
- 工具库：Hutool 5.8.9、Lombok 1.18.24

#### 5.3.2 主要实现模块
1. **核心业务模块**：
   - 基础数据管理服务
   - 排课策略管理服务
   - 智能排课服务
   - 课表管理服务
   - 数据分析服务

2. **技术支持模块**：
   - 权限认证与授权服务
   - 缓存管理服务
   - 异步任务处理服务
   - 日志监控与审计服务
   - 文件导出服务

3. **算法实现模块**：
   - 遗传算法引擎
   - 约束处理引擎
   - 冲突检测与解决引擎

#### 5.3.3 API设计
系统API遵循RESTful设计原则，主要包括：
- 认证类API：用户登录、注销、刷新令牌
- 基础数据API：院系、专业、班级、教师、教室等信息管理
- 排课管理API：排课策略配置、自动排课执行、排课结果查询
- 课表管理API：课表查询、修改、导出
- 数据分析API：教室利用率、教师工作量等统计分析

所有API均使用Swagger进行文档化，便于前端集成和测试。

#### 5.3.4 性能优化
1. **数据库优化**：
   - 合理设计索引
   - 使用SQL优化器分析执行计划
   - 实现分页查询优化

2. **缓存策略**：
   - 多级缓存设计（本地缓存+Redis）
   - 缓存预热与更新策略
   - 防缓存穿透设计

3. **并发处理**：
   - 使用线程池管理并发任务
   - 实现分布式锁处理并发修改
   - 采用乐观锁机制避免数据覆盖

### 5.4 数据库实现
#### 5.4.1 数据库设计优化
1. **表结构优化**：
   - 遵循第三范式，减少数据冗余
   - 建立合理的外键关系
   - 使用适当的字段类型和长度

2. **索引设计**：
   - 为常用查询条件建立索引
   - 创建复合索引优化多条件查询
   - 避免过度索引影响写入性能

3. **分区策略**：
   - 对历史数据按学期进行分区
   - 提高大数据量下的查询效率

#### 5.4.2 SQL优化
1. **查询优化**：
   - 避免SELECT *，只查询需要的字段
   - 优化JOIN操作，减少笛卡尔积
   - 使用EXISTS代替IN提高性能

2. **事务优化**：
   - 控制事务范围和粒度
   - 避免长事务影响系统并发
   - 实现事务补偿机制

## 6. 系统测试
### 6.1 测试环境
测试环境配置如下：

**硬件环境**：
- 服务器：阿里云ECS服务器，8核CPU，16G内存，100G SSD
- 测试客户端：多种配置的PC、笔记本和移动设备

**软件环境**：
- 操作系统：CentOS 8.4（服务器）
- 数据库：MySQL 8.0.31
- Web服务器：Nginx 1.22.1
- 浏览器：Chrome 107+、Firefox 106+、Safari 16+、Edge 106+

**测试工具**：
- 功能测试：Selenium 4.6.0、Playwright 1.28.0
- 接口测试：Postman 10.10.0、JMeter 5.5
- 性能测试：JMeter 5.5、Gatling 3.8.4
- 安全测试：OWASP ZAP 2.12.0

### 6.2 功能测试
#### 6.2.1 测试范围
功能测试覆盖系统所有核心功能模块：
- 用户管理
- 基础数据管理
- 排课策略管理
- 智能排课
- 课表管理
- 冲突检测与处理
- 数据分析与统计

#### 6.2.2 测试方法
1. **单元测试**：
   - 后端：JUnit 5测试各服务层方法
   - 前端：Jest测试组件和工具函数

2. **集成测试**：
   - API接口测试
   - 组件集成测试
   - 数据流测试

3. **系统测试**：
   - 端到端功能测试
   - 用户界面测试
   - 兼容性测试（多种浏览器和设备）

#### 6.2.3 测试结果
功能测试结果统计：
- 测试用例总数：547个
- 通过率：97.8%
- 发现缺陷：26个
- 修复缺陷：26个
- 重要功能覆盖率：100%

主要问题集中在特殊场景下的冲突处理和数据一致性维护方面，所有问题均已修复并回归测试。

### 6.3 性能测试
#### 6.3.1 测试指标
系统性能测试主要关注以下指标：
- 响应时间：系统响应用户请求的时间
- 并发用户数：系统能同时支持的活动用户数
- 吞吐量：系统单位时间内处理的请求数
- 资源利用率：CPU、内存、磁盘等资源的使用情况
- 稳定性：系统在长时间运行下的稳定性表现

#### 6.3.2 测试场景
1. **常规使用场景**：
   - 模拟50-100名用户同时访问系统
   - 执行课表查询、基础数据管理等操作

2. **高峰期场景**：
   - 模拟200-300名用户集中访问
   - 执行课表查询、导出等高频操作

3. **排课算法性能测试**：
   - 测试不同规模数据下的排课算法性能
   - 测试排课过程的内存占用和CPU利用率

#### 6.3.3 测试结果
性能测试结果显示：
- 常规操作响应时间：<1秒
- 复杂数据分析响应时间：<3秒
- 支持并发用户数：>200用户
- 自动排课（中等规模）耗时：<10分钟
- 系统稳定运行时间：>72小时无异常

系统性能满足设计要求，关键指标均优于预期目标。

### 6.4 安全测试
#### 6.4.1 测试内容
安全测试主要关注以下方面：
- 身份验证与授权
- 数据传输安全
- 输入验证
- 敏感数据保护
- 会话管理
- SQL注入防护
- XSS攻击防护
- CSRF攻击防护

#### 6.4.2 测试方法
1. **静态安全代码审查**：
   - 使用SonarQube等工具进行代码安全扫描
   - 人工审查关键安全点

2. **动态安全测试**：
   - 使用OWASP ZAP进行自动化安全测试
   - 针对重要功能进行手动渗透测试

#### 6.4.3 测试结果
安全测试发现并修复的主要问题：
- 输入验证不足：4处
- 敏感信息泄露：2处
- 权限控制缺陷：3处
- XSS漏洞：2处
- 会话管理问题：1处

所有发现的安全问题均已修复，修复后重新测试确认无遗留安全风险。系统整体安全性评估为良好，满足教育行业信息系统安全要求。

## 7. 系统部署
### 7.1 部署架构
系统采用分层部署架构，包括以下几个层次：

1. **负载均衡层**：
   - 使用Nginx实现负载均衡
   - 配置SSL证书实现HTTPS加密传输
   - 静态资源缓存与压缩

2. **应用服务层**：
   - Web应用服务器集群
   - 微服务架构，支持水平扩展
   - Docker容器化部署

3. **数据存储层**：
   - MySQL主从架构
   - Redis集群提供缓存服务
   - 文件存储服务

4. **监控与日志层**：
   - ELK stack实现日志收集与分析
   - Prometheus + Grafana监控系统运行状态

系统架构设计充分考虑了高可用性和可扩展性，关键组件均采用集群方式部署，避免单点故障。

### 7.2 部署流程
系统部署流程包括以下步骤：

1. **环境准备**：
   - 服务器硬件配置与系统安装
   - 基础软件环境安装（JDK、Node.js、Docker等）
   - 网络与安全配置

2. **数据库部署**：
   - MySQL数据库安装与配置
   - 数据库主从复制配置
   - 数据库初始化脚本执行

3. **中间件部署**：
   - Redis缓存服务部署
   - RabbitMQ消息队列部署
   - Nginx负载均衡器配置

4. **应用部署**：
   - 后端服务部署（微服务架构）
   - 前端静态资源部署
   - API网关配置

5. **监控系统部署**：
   - ELK stack部署
   - Prometheus与Grafana部署
   - 告警系统配置

6. **系统验证**：
   - 功能验证测试
   - 性能压力测试
   - 系统备份与恢复测试

### 7.3 运维说明
系统运维管理主要包括以下方面：

1. **日常运维**：
   - 系统监控与告警处理
   - 日志分析与问题排查
   - 定期数据备份

2. **性能优化**：
   - 定期性能分析与优化
   - 数据库索引优化与维护
   - 缓存策略调整

3. **安全维护**：
   - 定期安全漏洞扫描
   - 系统补丁更新
   - 账户权限审计

4. **扩容与升级**：
   - 系统水平扩展方案
   - 版本升级流程
   - 数据迁移策略

5. **故障恢复**：
   - 故障应急预案
   - 数据恢复流程
   - 业务连续性保障措施

系统提供详细的运维文档，包括常见问题处理、性能调优指南、安全维护手册等，便于运维人员进行日常维护。

## 8. 项目亮点与创新
### 8.1 技术创新
1. **改进的遗传算法框架**：
   - 开发了适应教育领域排课场景的自适应遗传算法框架
   - 创新性地引入多级约束处理机制，更好地平衡硬约束和软约束
   - 实现了高性能的并行计算模型，显著提升了排课速度

2. **微服务架构与云原生设计**：
   - 采用微服务架构，将系统功能解耦为独立服务
   - 基于容器技术实现云原生部署，支持弹性扩展
   - 使用服务网格实现细粒度流量控制和服务治理

3. **实时数据处理与推送**：
   - 基于WebSocket实现排课结果实时推送
   - 采用响应式编程模型处理数据流
   - 实现排课过程的可视化监控

4. **前端交互创新**：
   - 实现基于拖拽的直观课表编辑体验
   - 开发自适应布局的多维度课表展示
   - 使用高级图表技术实现数据可视化

### 8.2 功能亮点
1. **智能冲突解决**：
   - 多维度冲突检测与可视化展示
   - 基于历史数据的冲突解决方案智能推荐
   - 一键应用冲突解决方案

2. **个性化排课策略**：
   - 支持多维度的排课规则定制
   - 基于权重的排课优先级动态调整
   - 教师个人偏好与教学需求的智能平衡

3. **多维度数据分析**：
   - 教学资源利用率分析
   - 教师工作量平衡度评估
   - 课程时间分布合理性分析
   - 多维交叉分析与决策支持

4. **智能调课功能**：
   - 节假日智能调课方案生成
   - 临时变更的最小影响分析
   - 调课通知的自动推送

### 8.3 性能优势
1. **高效的排课算法**：
   - 中等规模（1000门课程）排课时间控制在10分钟以内
   - 支持增量式排课，大大提高排课效率
   - 算法优化使内存占用降低40%，CPU使用率降低35%

2. **良好的系统性能**：
   - 普通操作响应时间<1秒
   - 复杂查询响应时间<3秒
   - 支持200+并发用户访问
   - 系统资源占用合理，无内存泄漏

3. **可扩展性设计**：
   - 系统架构支持水平扩展
   - 数据库设计优化支持大数据量处理
   - 算法框架可扩展，支持新约束条件的动态添加

## 9. 项目总结
### 9.1 开发过程回顾
本项目从需求分析到系统实现，历时约4个月，主要经历以下几个阶段：

1. **需求分析阶段**（3周）：
   - 深入调研高校排课业务流程
   - 分析用户需求与痛点
   - 明确功能范围与技术要求

2. **系统设计阶段**（4周）：
   - 制定系统总体架构
   - 设计数据库结构
   - 开发核心算法原型

3. **开发实现阶段**（10周）：
   - 前后端并行开发
   - 核心算法实现与优化
   - 功能模块集成与联调

4. **测试验收阶段**（3周）：
   - 功能测试与问题修复
   - 性能测试与优化
   - 安全测试与加固

项目采用敏捷开发方法，以两周为一个迭代周期，不断优化产品功能和用户体验。团队成员紧密协作，通过每日站会、代码评审等方式保证开发质量和进度。

### 9.2 技术难点与解决方案
在项目开发过程中，我们遇到了以下几个主要技术难点及其解决方案：

1. **排课算法性能瓶颈**：
   - **难点**：初版算法在处理大规模数据（>1000门课程）时性能下降严重
   - **解决方案**：
     * 优化染色体编码方式，减少冲突检测复杂度
     * 引入并行计算框架，提高计算效率
     * 实现增量式排课，避免全量重新计算

2. **复杂约束条件处理**：
   - **难点**：多种约束条件相互影响，难以平衡各种需求
   - **解决方案**：
     * 开发多级约束处理机制，区分硬约束和软约束
     * 使用动态权重调整策略，自适应优化解的质量
     * 实现冲突可视化，辅助用户理解和调整

3. **大数据量下的系统性能**：
   - **难点**：系统需处理大量课程数据，查询性能下降
   - **解决方案**：
     * 优化数据库索引设计，提高查询效率
     * 实现多级缓存策略，减少数据库访问
     * 使用数据分区技术，提高大表的查询性能

4. **前端交互体验优化**：
   - **难点**：复杂的排课操作需要直观易用的界面
   - **解决方案**：
     * 实现拖拽式操作界面，简化课表调整
     * 开发智能提示系统，辅助用户决策
     * 优化前端性能，确保大数据量下的流畅体验

### 9.3 未来展望
智课方舟系统在当前版本已实现了智能排课的核心功能，但仍有进一步发展和完善的空间：

1. **算法优化方向**：
   - 优化深度学习技术，从历史排课经验中学习最佳策略
   - 开发更高效的冲突解决算法，提高排课成功率
   - 研究多目标优化技术，更好地平衡各种排课目标
   - 优化在自动排课引入大模型，提高排课合理性

2. **功能扩展方向**：
   - 整合选课系统，实现选课-排课一体化解决方案
   - 增加教学质量评估模块，提供排课质量反馈
   - 开发移动端应用，提供更便捷的访问方式

3. **技术升级方向**：
   - 探索区块链技术在教学资源分配中的应用
   - 引入知识图谱技术，构建教学资源关联网络
   - 采用边缘计算技术，提供更低延迟的服务体验

4. **商业化发展方向**：
   - 开发SaaS服务模式，降低系统部署和维护成本
   - 设计行业特定解决方案，满足不同类型院校需求
   - 构建开放平台生态，支持第三方应用集成

我们相信，随着人工智能和云计算技术的不断发展，智慧排课系统将变得更加智能、高效，为高校教学管理带来更大的价值。

## 10. 附录
### 10.1 团队分工
项目团队由5名成员组成，各职责区分如下（部分成员涵盖多个职责）：

1. **项目经理**：
   - 负责项目整体规划与进度管理
   - 协调团队资源与任务分配
   - 对接用户需求与反馈

2. **架构师**：
   - 负责系统总体架构设计
   - 技术选型与技术方案制定
   - 核心模块代码审查

3. **算法工程师**：
   - 负责排课算法研发与优化
   - 冲突检测与解决算法实现
   - 算法性能测试与调优

4. **后端开发工程师**：
   - 负责系统后端服务开发
   - 数据库设计与实现
   - API接口设计与开发

5. **前端开发工程师**：
   - 负责系统前端界面开发
   - 用户交互设计与实现
   - 前端性能优化

团队成员通过敏捷开发方法进行协作，定期进行代码评审和知识分享，保证项目质量和团队技术能力的提升。

### 10.2 参考文献
1. 王建东, 周涛, 陈萍. 基于遗传算法的大学排课系统研究与实现[J]. 计算机应用研究, 2019, 36(10): 3087-3090.
2. 刘洋, 张鑫, 李明. 改进遗传算法在高校智能排课中的应用[J]. 计算机工程与应用, 2020, 56(23): 232-238.
3. 张志强, 王志勇, 李敏. 基于多目标优化的课程安排问题研究综述[J]. 计算机学报, 2018, 41(9): 2007-2023.
4. Carter M W, Laporte G. Recent developments in practical course timetabling[C]//International Conference on the Practice and Theory of Automated Timetabling. Springer, Berlin, Heidelberg, 1997: 3-19.
5. Pillay N. A survey of school timetabling research[J]. Annals of Operations Research, 2014, 218(1): 261-293.
6. Babaei H, Karimpour J, Hadidi A. A survey of approaches for university course timetabling problem[J]. Computers & Industrial Engineering, 2015, 86: 43-59.
7. 马克华, 李霞, 张晓东. 基于Spring Boot的微服务架构设计与实现[J]. 计算机工程, 2020, 46(2): 35-41.
8. 李旭, 陈华, 王斌. React技术在前端开发中的应用研究[J]. 软件导刊, 2019, 18(12): 197-200.

### 10.3 专业术语表
1. **排课系统（Course Scheduling System）**：负责安排教学活动的时间、地点和教师的信息系统。
2. **遗传算法（Genetic Algorithm, GA）**：一种模拟自然选择和遗传机制的优化算法，常用于解决复杂的组合优化问题。
3. **硬约束（Hard Constraint）**：必须满足的排课条件，如教师、教室和班级不能同时安排两门课程。
4. **软约束（Soft Constraint）**：尽量满足但可以违反的排课条件，如教师的时间偏好、连排要求等。
5. **适应度函数（Fitness Function）**：在遗传算法中用于评价个体（解决方案）优劣程度的函数。
6. **冲突检测（Conflict Detection）**：检查排课方案中是否存在资源冲突的过程。
7. **响应式设计（Responsive Design）**：能够自适应不同设备屏幕大小的界面设计方法。
8. **微服务架构（Microservice Architecture）**：将应用程序构建为一组小型服务的架构风格。
9. **RESTful API**：遵循REST原则的应用程序接口设计风格。
10. **前后端分离（Front-end and Back-end Separation）**：将前端界面和后端逻辑分开开发和部署的架构模式。
11. **多目标优化（Multi-objective Optimization）**：同时优化多个目标函数的优化问题。
12. **容器化（Containerization）**：使用容器技术封装应用及其依赖的软件部署方式。