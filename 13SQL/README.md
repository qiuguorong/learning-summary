# 数据库
* SQL (Structured Query Language)
* RDBMS（关系型数据库管理系统），如MySQL，SQL Server

## SQL
SQL分为DML和DDL，数据操作语言（DML）和数据定义语言（DDL），SQL 对大小写不敏感

### DML包括
- SELECT
  ```sql
  select * from Table where 1=1
  ```
- UPDATE
  ```sql
  update Table set name=1 where 1=1
  ```
- DELETE
  ```sql
  delete from Table where 1=1
  ```
- INSERT INTO
  ```sql
  insert into Table(name) values(1)
  ```

### DDL 包括
- CREATE DATABASE
- ALTER DATABASE（修改数据库）
- CREATE TABLE
- ALTER TABLE
- DROP TABLE
- CREATE INDEX
- DROP INDEX

## 拓展
* 非关系型数据管理系统，如MongoDB，Redis
* MySQL私有扩展？