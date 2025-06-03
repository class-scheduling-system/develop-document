# 数据库设计

## 数据库快捷部署CLI

下载自己电脑系统的版本

[class-scheduling-system/table-install-cli](https://github.com/class-scheduling-system/table-install-cli/releases)

## 数据库结构图

[可点击查看原图](../assets/images/draw.png)

![](../assets/images/draw.png)

## 数据库加载顺序

| 序号 | 名字                                 | 中文解释及用途              |
| ---- | ------------------------------------ | --------------------------- |
| 1    | `cs_system.sql`                      | 系统配置相关表              |
| 2    | `cs_permission.sql`                  | 权限管理表，用于权限配置    |
| 3    | `cs_role.sql`                        | 角色表，定义用户角色        |
| 4    | `cs_user.sql`                        | 用户表，存储用户信息        |
| 5    | `cs_unit_type.sql`                   | 单位类型表，例如学院/部门等 |
| 6    | `cs_unit_category.sql`               | 单位类别表，分类单位属性    |
| 7    | `cs_tables_chairs_type.sql`          | 桌椅类型表，定义教室桌椅    |
| 8    | `cs_semester.sql`                    | 学期表，存储学期信息        |
| 9    | `cs_major.sql`                       | 专业表，存储专业信息        |
| 10   | `cs_credit_hour_type.sql`            | 学时类型表，定义学时分类    |
| 11   | `cs_course_type.sql`                 | 课程类型表，例如必修/选修   |
| 12   | `cs_course_property.sql`             | 课程属性表，描述课程属性    |
| 13   | `cs_course_nature.sql`               | 课程性质表，例如理论/实践   |
| 14   | `cs_course_category.sql`             | 课程类别表，例如公共课等    |
| 15   | `cs_campus.sql`                      | 校区表，存储校区信息        |
| 16   | `cs_building.sql`                    | 教学楼表，存储教学楼信息    |
| 17   | `cs_department.sql`                  | 部门表，存储院系部门信息    |
| 18   | `cs_classroom_tag.sql`               | 教室标签表，用于教室分类    |
| 19   | `cs_classroom_type.sql`              | 教室类型表，例如实验室等    |
| 20   | `cs_classroom.sql`                   | 教室表，存储教室信息        |
| 21   | `cs_student.sql`                     | 学生表，存储学生基本信息    |
| 22   | `cs_teacher.sql`                     | 教师表，存储教师基本信息    |
| 23   | `cs_course_library.sql`              | 课程库表，存储课程基础信息  |
| 24   | `cs_academic_affairs_permission.sql` | 教务权限表，用于教务管理    |
| 25   | `cs_class_assignment.sql`            | 排课表，存储排课信息        |

## 数据库结构

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

#### 3.4.2 数据表详细设计

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