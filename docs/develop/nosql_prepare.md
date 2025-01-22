# 非关系型数据库准备

> **说明**：本文档主要指导 Redis 数据库的安装与初始化配置，以确保环境满足系统运行需求。

## 数据库版本要求

- **支持版本**：Redis 最新稳定版。
- **推荐使用场景**：开发与生产环境。

## 数据库安装

<div style="color: lightblue;">若已安装 Redis 数据库程序，可跳过此部分。</div>

本文不详细描述 Redis 数据库的安装过程，推荐使用 Docker 部署以简化配置。

### 使用 Docker 安装 Redis

1. 打开命令行终端，输入以下命令以拉取并启动 Redis 容器：

    ```bash
    docker run --name <ContainerName> -p 6379:6379 -d redis:latest
    ```

    **参数说明**：

    - `<ContainerName>`：容器名称，自定义命名，例如 `Redis_Latest`。
    - `-p 6379:6379`：将 Redis 默认端口映射到本地端口。

2. 验证容器是否成功运行：

    ```bash
    docker ps
    ```

    若容器未正常启动，可通过以下命令检查错误日志：

    ```bash
    docker logs <ContainerName>
    ```

## 数据库管理工具（可选项）

为便于数据库管理，推荐使用 **RedisInsight** 作为图形化管理工具。

### 使用 Docker 部署 RedisInsight

1. 在命令行输入以下命令以启动 RedisInsight 容器：

    ```bash
    docker run --name <ContainerName> -d -p <YourPort>:8001 redislabs/redisinsight
    ```

    **参数说明**：

    - `<ContainerName>`：容器名称，自定义命名，例如 `RedisInsight`。
    - `<YourPort>`：映射到本地的端口，例如 `8081`。

2. 在浏览器中访问 `http://localhost:<YourPort>`，即可打开 RedisInsight 管理页面。

## 数据库初始化

### 获取 Redis 容器的 IP 地址

1. 在 Docker Desktop 中选择已启动的 Redis 容器，点击 `Inspect`，找到 `Network` 中的 `IPAddress`。

    **说明**：`IPAddress` 是 Redis 容器的内部网络地址，后续将用于连接数据库。

    ![](../assets/images/develop-database-redis.png)

### 配置 RedisInsight 登录

1. 打开 RedisInsight 页面，在 **Add Redis Database** 页面中输入 Redis 容器的连接信息：
    - **Address**：输入 Redis 容器的 `IPAddress`。
    - **Port**：默认端口 `6379`。
    - **Database Name**：自定义数据库名称，例如 `class_scheduling_system`。

    ![](../assets/images/develop-database-redisinsight-add.png)

2. 点击 `Add Redis Database` 完成连接配置。

## 注意事项

- 确保 Redis 和 RedisInsight 容器均正常运行。
- 避免直接在生产环境中使用无密码保护的 Redis 配置，建议在 Docker 启动命令中添加密码保护，例如：
    ```bash
    docker run --name <ContainerName> -p 6379:6379 -d redis:latest --requirepass <YourPassword>
    ```

## 结语

Redis 数据库安装与配置教程到此结束。如需进一步操作，可查阅 Redis 官方文档或 RedisInsight 的使用说明。
