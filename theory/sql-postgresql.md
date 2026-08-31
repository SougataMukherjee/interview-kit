# Database Design Strategy

## 1. Identify Entities

Entities represent real-world objects.

Examples:

- Book
- Author
- Order

---

## 2. Identify Attributes

### Book

```js
Book {
  id: string (PK)
  title: string
  price: number
  isAvailable: boolean
  publishYear: Date
}
```

### Author

```js
Author {
  id: string (PK)
  name: string
  phone?: string
}
```

### Order

```js
Order {
  id: string (PK)
  orderType: "online" | "offline"
  total: number
}
```

---

## 3. Define Relationships

### Book ↔ Author

```text
Many-to-Many (M:M)

One Book can have many Authors.
One Author can write many Books.
```

```text
Book 1 ─────┐
            ├── Author 1
Book 2 ─────┘

Book 1 ─────┐
            ├── Author 2
Book 2 ─────┘
```

### Junction Table

```sql
BookAuthors
-----------
bookId
authorId
```

---

## 4. Define Cardinality

```text
1 : 1  → User ↔ Profile

1 : M  → Customer ↔ Orders

M : M  → Book ↔ Author
```

---

## 5. Create ERD

```text
Book
-----
id (PK)
title
price
publishYear

        M:M

Author
------
id (PK)
name
phone
```

---

## 6. Define Keys

### Primary Keys (PK)

```text
Book.id
Author.id
Order.id
```

### Foreign Keys (FK)

```text
BookAuthors.bookId  → Book.id
BookAuthors.authorId → Author.id
```

---

## 7. Normalize Data

Apply:

```text
1NF
2NF
3NF
```

Goals:

- Eliminate duplicate data
- Reduce redundancy
- Improve consistency

---

## 8. Add Constraints

Examples:

```sql
title VARCHAR(255) NOT NULL

price DECIMAL(10,2) NOT NULL

phone VARCHAR(20) UNIQUE

isAvailable BOOLEAN DEFAULT true
```

Common Constraints:

```text
NOT NULL
UNIQUE
DEFAULT
CHECK
PRIMARY KEY
FOREIGN KEY
```

---

## 9. Add Indexes

Create indexes on frequently searched fields.

Examples:

```sql
INDEX(title)

INDEX(authorId)

INDEX(phone)
```

Benefits:

- Faster search
- Faster filtering
- Better query performance

---

# SQL Notes

## 1. What is SQL?

SQL (Structured Query Language) is used to store, retrieve, manage, and manipulate data in relational databases.

## What is Schema, what is table?

A Schema is the logical structure or blueprint of a database that contains tables, views, relationships, indexes,functions, triggers and other database objects.

A table is the basic structure used to store data in a database. It organizes data into rows and columns, similar to an Excel spreadsheet.

`Columns(Field)` — also referred to as attributes or fields. A column represents one property of all the entities.
`Rows(Records)` — also referred to as records or tuples. A row represents all the properties of a single entity.

## what is data?

📝 Data is a raw fact which describes the attributes of an entity. Data is stored in a database in a systematic and organized manner.

## What is Database (DB), types of databases?

A Database is an organized collection of data stored electronically so that it can be easily accessed, managed, and updated.
| Student_ID | Name | Course |
|------------|--------|---------|
| 101 | Rahul | Java |
| 102 | Priya | SQL |

**types of databases:**

1. Relational Database (RDBMS): Data is stored in the form of tables (rows and columns).
2. Hierarchical Database : Data is stored in a tree-like structure with Parent-Child relationships.
3. Network Database: Data is stored as a graph structure.
4. Object-Oriented Database (OODBMS): Stores data in the form of objects similar to programming languages.
5. Distributed Database: Database is distributed across multiple locations but appears as a single database.
6. Cloud Database: Database hosted on cloud platforms.
7. NoSQL Database : Stores data in formats other than tables.

## What is DBMS (Database Management System)?
A DBMS is software used to create, store, manage, and manipulate databases.
Functions of DBMS

- Store data

- Retrieve data

- Update data
 
- Delete data

- Manage security

- Backup and recovery

## DBMS Software
`RDBMS` — stores data in the form of tables

`ERDBMS` — Extended/Enhanced RDBMS

## What is RDBMS (Relational Database Management System)?
An RDBMS is a type of DBMS that stores data in the form of tables (rows and columns) and maintains relationships between tables using keys.
Features

- Data stored in tables
- Supports Primary Key and Foreign Key
- Reduces data redundancy
- Supports SQL
- Maintains data integrity

---

## 2. SQL vs NoSQL

| SQL | NoSQL |
|------|--------|
| Uses structured tables (rows and columns) | Uses flexible data models (documents, key-value, graph, column-family) |
| Fixed schema | Flexible or dynamic schema |
| Relational database | Non-relational database |
| Best for structured data | Best for structured, semi-structured, and unstructured data |
| Supports complex joins | Usually avoids joins for better scalability |
| Scales vertically (more powerful hardware) | Scales horizontally (more servers) |
| Uses SQL language | Uses database-specific query languages/APIs |
| ACID compliance (strong consistency) | Often follows BASE/eventual consistency (varies by database) |
| **Examples:** MySQL, PostgreSQL, SQL Server, Oracle | **Examples:** MongoDB, Cassandra, Redis, CouchDB |

---

## 3. SQL Query Execution Order

```sql
FROM
WHERE
GROUP BY
HAVING
SELECT
DISTINCT
ORDER BY
LIMIT/TOP
```

---
## 4. Types of SQL Commands

SQL commands are grouped into 5 categories: **DDL**, **DML**, **DQL**, **DCL**, and **TCL**.


### 1. DDL (Data Definition Language)

📝 Used to define, modify, or remove database structures (tables, schemas). Commands: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`.

#### CREATE

```sql
CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint
);
```

**Create table only if it doesn't already exist**
```sql
CREATE TABLE IF NOT EXISTS employee (
    id INT,
    name VARCHAR(50)
);
```

**Show all tables**
```sql
SHOW TABLES;
```

#### ALTER

**Add a column**
```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;
```

**Drop a column**
```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

**Drop a PRIMARY KEY**

📝 Yes, a primary key can be dropped — but it's more restricted than dropping a `UNIQUE` constraint.
```sql
ALTER TABLE users
DROP PRIMARY KEY;
```

**Move a column to the first position**
```sql
ALTER TABLE users
MODIFY COLUMN email VARCHAR(100) FIRST;
```

**Rename a column**
```sql
ALTER TABLE users
RENAME COLUMN phone TO mobile_number;
```

#### RENAME

**Rename a table**
```sql
RENAME TABLE old TO new;
```

#### DROP

**Drop a table if it exists**
```sql
DROP TABLE IF EXISTS employee;
```

#### TRUNCATE

📝 Removes **all rows** from a table quickly, without removing the table structure itself.

```sql
TRUNCATE TABLE employee;
```

**TRUNCATE ... RESTART IDENTITY**

📝 Removes all records **and** resets the auto-increment/identity counter.
```sql
TRUNCATE TABLE employee RESTART IDENTITY;
```

### 2. DML (Data Manipulation Language)

📝 Used to insert, update, or delete data within tables. Commands: `INSERT`, `UPDATE`, `DELETE`.

#### INSERT

**Insert by specifying column names (best practice)**

📝 Safer and more readable — only inserts into the specified columns.
```sql
INSERT INTO users
(name, email, gender, date_of_birth)
VALUES
('Bob', 'bob@example.com', 'Male', '1990-11-23');
```

#### UPDATE

**General syntax**
```sql
UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;
```

**Example**
```sql
UPDATE users
SET name = 'Robert', email = 'robert@example.com'
WHERE id = 2;
```

**Change the name of the user with email `aisha@example.com` to `Aisha Khan`**
```sql
UPDATE users
SET name = 'Aisha Khan'
WHERE email = 'aisha@example.com';
```

**Update the salary of user with `id = 5` to ₹70,000**
```sql
UPDATE users
SET salary = 70000
WHERE id = 5;
```

#### DELETE

📝 Removes specific rows from a table based on a condition (unlike `TRUNCATE`, which removes all rows).

```sql
DELETE FROM employee
WHERE condition;
```

### 3. DQL (Data Query Language)

📝 Used to fetch/query data from the database.These statements are used to retrieve data from the database. There are 4 categories:

`Select` — retrieves data from the database and displays it

`Projection` — retrieves data by selecting only specific columns; all values in those columns are selected by default

`Selection` — retrieves data by selecting both specific columns as well as specific records

`Joins` — retrieves data from multiple tables simultaneously

```sql
SELECT column1, column2
FROM table_name
WHERE condition;

-- Find name with a 25% hike
SELECT sname, sal + (sal * 0.25) FROM student;

-- Find name and salary with a 12% deduction
SELECT sname, sal - sal * 12 / 100 FROM student;

-- Employee name, annual salary, and salary with a 34% hike
SELECT ename, sal * 12, sal * 1.34 FROM Emp;
```
#### WHERE Clause

📝 Used to filter records.

We pass a filter condition as an argument to WHERE
- WHERE executes row by row
- WHERE executes after the FROM clause
- We can pass multiple conditions using logical operators

```sql
-- Details of employees working in dept 20 and earning salary more than 1500
SELECT * FROM Emp WHERE Deptno = 20 AND sal > 1500;

-- Details of employees who are salesmen or earning more than 1500
SELECT * FROM emp WHERE Job = 'SALESMAN' OR sal > 1500;

-- Name, salary, annual salary, and dept no — dept 20, salary > 1100, annual salary exceeds 12000
SELECT ename, sal, sal * 12 AS annual_sal, deptno
FROM emp
WHERE deptno = 20 AND sal > 1100 AND sal * 12 > 12000;

-- Names of employees hired after 1995 and before 1999
SELECT ename FROM emp
WHERE hiredate >= '01-JAN-1995' AND hiredate <= '01-JAN-1999';
```

### 4. DCL (Data Control Language)

📝 Used to control access/permissions on database objects. Commands: `GRANT`, `REVOKE`.

```sql
-- Grant permission
GRANT SELECT, INSERT ON employee TO user_name;

-- Revoke permission
REVOKE INSERT ON employee FROM user_name;
```


### 5. TCL (Transaction Control Language)

📝 Used to manage transactions in the database. Commands: `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

```sql
BEGIN;

UPDATE employee SET salary = salary + 1000 WHERE id = 1;

SAVEPOINT before_delete;

DELETE FROM employee WHERE id = 2;

-- Undo back to the savepoint
ROLLBACK TO before_delete;

-- Permanently save all changes
COMMIT;
```

- **COMMIT** — saves all changes permanently
- **ROLLBACK** — undoes changes since the last commit (or savepoint)
- **SAVEPOINT** — sets a point within a transaction to roll back to

---

## 5. DELETE vs TRUNCATE vs DROP
| DELETE | TRUNCATE | DROP |
|--------|-----------|------|
| Removes selected rows | Removes all rows | Removes the entire table |
| Supports `WHERE` clause | Does **not** support `WHERE` | Does not support `WHERE` |
| Table structure remains | Table structure remains | Table structure is deleted |
| Can be rolled back (inside a transaction in most DBMS) | Usually can be rolled back only in transactional DBMS | Cannot usually be rolled back after commit |
| Slower (logs each row deletion) | Faster (minimal logging) | Fastest (removes table completely) |
| Identity/auto-increment value is usually preserved | Identity/auto-increment is usually reset | Table no longer exists |
| **Example:** `DELETE FROM Employee WHERE id = 1;` | **Example:** `TRUNCATE TABLE Employee;` | **Example:** `DROP TABLE Employee;` |

---

## 6. WHERE vs HAVING
- WHERE → Filters rows before grouping.
```sql
SELECT *
FROM Employee
WHERE salary > 50000;
```
- HAVING → Filters grouped data.used when we want to apply any condition after grouping

```sql
SELECT dept_id, COUNT(*)
FROM Employee
GROUP BY dept_id
HAVING COUNT(*) > 5;
```

---
## 7. Joins
📝 Used to retrieve data from multiple tables simultaneously.
`Types of Joins`

### Cartesian / Cross Join 
every record from table 1 is merged with every record of table 2

### INNER JOIN
returns only matched records from both table (records that have a pair), using a join condition. We can join up to 256 tables using inner join

**Example:**
```sql
SELECT *
FROM orders o
INNER JOIN customers c
ON o.customer_id=c.id;
```

### LEFT JOIN
Returns all records from the left table and matching records from the right table.
Example:
Customer without order 
```sql
SELECT column(s)  
FROM customers c
LEFT JOIN orders o
ON c.id=o.customer_id;
```

### RIGHT JOIN
Returns all records from the right table and matching data from the left.
Example:
All orders returned even if customer data is missing.
```sql
SELECT *
FROM customers c
RIGHT JOIN orders o
ON c.id=o.customer_id;
```

### FULL JOIN
Returns all records from both tables.
Example:
All customers + all orders.
```sql
SELECT *
FROM customers c
FULL JOIN orders o
ON c.id=o.customer_id;
```
### Outer Join 
returns unmatched records along with matched records. Has three types:
1. Left Outer Join
2. Right Outer Join
3. Full Outer Join
### Self Join
 used to join a table with itself
 ```sql
 -- Employee name and manager name if both are working in the same job
SELECT e1.ename, e2.ename
FROM emp e1, emp e2
WHERE e1.mgr = e2.empno AND e1.job = e2.job;

-- Employee name and manager's designation for all employees
SELECT e1.ename, e2.job
FROM emp e1, emp e2
WHERE e1.mgr = e2.empno;
 ```
### Natural Join
 no join condition is written explicitly
- If the tables contain a similar column, we get the output of an inner join
- If the tables don't have a similar column, we get the output of a cartesian join
- If there is no common column name between tables, use natural join; otherwise, use inner join

---

## 8. Aggregate / Multi-row Functions

`Aggregate function` perform a calculation on a set of values and return a single values.
SQL functions help you analyze, transform, or summarize data in your tables.
- A multi-row function can accept only a single argument — a column name or an expression
- MAX() and MIN() can be used with any datatype: CHAR, VARCHAR, NUMBER, and DATE
- SUM() and AVG() can only take a numeric column as an argument
- Multi-row functions ignore NULL values
- We cannot use a multi-row function in the WHERE clause
- We cannot mix a plain column name with a multi-row function in the SELECT clause (without GROUP BY)

```sql
-- Number of employees getting salary less than 2000 in dept 10
SELECT COUNT(ename) FROM emp WHERE sal < 2000 AND deptno = 10;

-- Total salary needed to pay employees working as clerks
SELECT SUM(sal) FROM emp WHERE job = 'CLERK';

-- Number of employees getting commission in dept 30
SELECT COUNT(*) FROM emp WHERE comm IS NOT NULL AND deptno = 30;
```
### COUNT()
Count total number of users:
```sql
SELECT COUNT(*) FROM users
WHERE gender = 'Female';

SELECT COUNT(*) FROM Employee;
```
### MIN() and MAX()
Get the minimum and maximum salary:
```sql
SELECT MIN(salary) AS min_salary,
MAX(salary) AS max_salary
FROM users;

```
### SUM()
Calculate total salary payout:
```sql
SELECT SUM(salary) AS total_payroll
FROM users;
```
### AVG()
Find average salary:
```sql
SELECT AVG(salary) AS avg_salary
FROM users;
--Grouping with GROUP BY
-- Average salary by gender:
SELECT gender,
AVG(salary) AS avg_salary
FROM users
GROUP BY gender;
```
### Aggregate vs Window Functions

| Aggregate Functions | Window Functions |
|---------------------|------------------|
| Return a single summarized value | Return a value for each row while preserving all rows |
| Reduce the number of rows | Do not reduce the number of rows |
| Used with `GROUP BY` | Used with `OVER()` clause |
| Perform calculations on groups of rows | Perform calculations across related rows |
| **Examples:** `SUM()`, `AVG()`, `COUNT()`, `MAX()`, `MIN()` | **Examples:** `RANK()`, `ROW_NUMBER()`, `DENSE_RANK()`, `LAG()`, `LEAD()` |

---

## 9.1. GROUP BY
GROUP BY groups rows having the same values into summary rows.Used to perform calculations on groups of data.

Used to group records. It executes row by row (the HAVING clause then executes group by group). We can pass a column name or an expression to GROUP BY.

- We can write a GROUP BY expression along with a multi-row function in the SELECT clause
- Any column name/expression written in GROUP BY is known as the group by expression 
- after GROUP BY executes, it creates groups, and any clause that runs afterward executes group by group

**syntax**
```sql
SELECT column_name,
       aggregate_function(column_name)
FROM table_name
GROUP BY column_name;
```
**example**
```sql
SELECT dept_id,
       COUNT(*) AS total
FROM Employee
GROUP BY dept_id;

--Calculate Total Salary per Department

SELECT dept,
       SUM(salary)
FROM employees
GROUP BY dept;

-- Total salary needed to pay all employees, per job
SELECT SUM(sal), job FROM emp GROUP BY job;

-- Number of employees working in each department, having at least 2 employees per dept
SELECT COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) >= 2;
```

## 9.2. HAVING Clause
HAVING filters grouped data after GROUP BY.
- We can pass a multi-row function condition in HAVING
- It executes group by group
- If using HAVING, it should come after GROUP BY

**Order of execution**

FROM → WHERE → GROUP BY → HAVING → SELECT

**syntax**
```sql
SELECT column_name,
       aggregate_function(column_name)
FROM table_name
GROUP BY column_name
HAVING condition;
```
**example**

```sql
-- Deptno and number of employees per dept, if there are at least 2 clerks in each dept
SELECT deptno, COUNT(*) FROM emp
WHERE job = 'CLERK'
GROUP BY deptno
HAVING COUNT(*) >= 2;

-- Number of employees earning salary > 1200 per job, and total salary per job must exceed 3800
SELECT COUNT(*), job FROM emp
WHERE sal > 1200
GROUP BY job
HAVING SUM(sal) > 3800;

SELECT dept_id,
       COUNT(*) AS total
FROM Employee
GROUP BY dept_id
HAVING COUNT(*) > 5;

SELECT dept,
       SUM(salary) AS total_salary
FROM employees
GROUP BY dept
HAVING SUM(salary) > 100000;
```

## 9.3. ORDER BY

📝 Used to sort records in ascending or descending order. ORDER BY executes after the SELECT clause. By default, it sorts in ascending order. We can pass a column name or expression as an argument.

**order of execution**

FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY

**example**
```sql
-- Annual salary in descending order
SELECT sal * 12 FROM emp ORDER BY sal * 12 DESC;
```
---

## 10. Subqueries
Query inside another query.Subqueries are useful for breaking down complex
problems into smaller parts.There will be a minimum of 2 queries: an outer query and an inner query.
- The inner query executes first and generates output
- The outer query then executes using that output, and generates the final result

**They can be used in:**
- SELECT statements
- WHERE clauses
- FROM clauses
**Why Use Subquery?**
Retrieve data based on another query
Simplify complex conditions
Avoid temporary tables

### Single Row Subquery
a subquery that returns exactly one output. Operators used: =, IN, NOT IN, ALL, ANY.
Returns one value.

```sql
-- ename and salary of all employees earning more than Miller but less than Allen
SELECT ename, sal FROM emp
WHERE sal > (SELECT sal FROM emp WHERE ename = 'MILLER')
  AND sal < (SELECT sal FROM emp WHERE ename = 'ALLEN');

-- All details of employees working in dept 20 with the same designation as Smith
SELECT * FROM emp
WHERE deptno = 20
  AND job = (SELECT job FROM emp WHERE ename = 'SMITH');

-- Number of employees hired after King
SELECT COUNT(*) FROM emp
WHERE hiredate > (SELECT hiredate FROM emp WHERE ename = 'KING');

-- Total salary given to employees working in the same dept as Ward
SELECT SUM(sal) FROM emp
WHERE deptno IN (SELECT deptno FROM emp WHERE ename = 'WARD');

-- Name and salary along with annual salary for employees earning less than Blake or more than 3500
SELECT ename, sal, sal * 12 AS annualsal FROM emp
WHERE sal > 3500
   OR sal < (SELECT sal FROM emp WHERE ename = 'BLAKE');

-- 3rd maximum salary
SELECT MAX(sal) FROM emp
WHERE sal < (SELECT MAX(sal) FROM emp
             WHERE sal < (SELECT MAX(sal) FROM emp));

-- Name of the employee earning the 3rd maximum salary
SELECT ename FROM emp
WHERE sal IN (SELECT MAX(sal) FROM emp
              WHERE sal < (SELECT MAX(sal) FROM emp
                           WHERE sal < (SELECT MAX(sal) FROM emp)));

-- Name of the employee hired before the last-hired employee
SELECT ename FROM emp
WHERE hiredate IN (SELECT MAX(hiredate) FROM emp
                   WHERE hiredate < (SELECT MAX(hiredate) FROM emp));

-- Location of the employee who was hired first
SELECT loc FROM dept
WHERE deptno IN (SELECT deptno FROM emp
                 WHERE hiredate IN (SELECT MIN(hiredate) FROM emp));

SELECT column_name
FROM table_name
WHERE column_name OPERATOR
(
    SELECT column_name
    FROM table_name
);
```

### Multi Row Subquery

a subquery that returns more than one output. Operators used: IN, NOT IN, ALL, ANY.
Returns multiple values.
```sql
-- Details of employees hired after all the clerks
SELECT * FROM emp
WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE job = 'CLERK');

-- Names of employees hired after all managers and earning more than all clerks
SELECT ename FROM emp
WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE job = 'MANAGER')
  AND sal > ALL (SELECT sal FROM emp WHERE job = 'CLERK');

-- Employee name if hired after all employees of dept 101
SELECT ename FROM emp
WHERE hiredate > ALL (SELECT hiredate FROM emp WHERE deptno = 101);

-- Name of the employee where the department has fewer than 2 employees
SELECT ename FROM emp
WHERE deptno IN (SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*) < 2);
```
---

## 11. Common Table Expression CTE (WITH Clause)

A Common Table Expression (CTE) is a temporary named result set that exists only during query execution.
CTEs improve query readability and simplify complex SQL.
**Why Use CTE?**
- Makes queries easier to read
- Simplifies complex joins
- Replaces nested subqueries

**syntax**
```sql
WITH cte_name AS
(
    SELECT columns
    FROM table_name
)
SELECT *
FROM cte_name;
```
**example**

```sql
WITH high_salary AS
(
    SELECT *
    FROM employees
    WHERE salary > 50000
)
SELECT *
FROM high_salary;
```
---

## 12. Constraints and data types
Constraints enforce rules on table columns.
- UNIQUE :Does not allow duplicate values.Ensures that all values in a column are different.
```sql
CREATE TABLE users (
 id INT PRIMARY KEY,
 email VARCHAR(100) UNIQUE
);
```
- NOT NULL :Cannot contain NULL values.
```sql
CREATE TABLE users (
 id INT PRIMARY KEY,
 name VARCHAR(100) NOT NULL
);
```
- CHECK :Ensures that values in a column satisfy a specific condition.
```sql
ADD CONSTRAINT chk_dob
CHECK (date_of_birth > '2020-03-01');
```
- Default:Sets a default value for a column if none is provided during insert.
```sql
CREATE TABLE users (
 id INT PRIMARY KEY,
 is_active BOOLEAN DEFAULT TRUE
);
```
- PRIMARY KEY: 

A primary key is a constraint assigned to a column to uniquely identify a record in a table. Example: Aadhar card number for a human.

`Characteristics of a primary key`

- We can have only one primary key in a table
- It cannot accept repeated or duplicate values
- It cannot accept NULL
- It is a combination of UNIQUE and NOT NULL
- A primary key is not mandatory, but recommended, for a table
```sql
CREATE TABLE users (
 id INT PRIMARY KEY,
 name VARCHAR(100)
);
```
- FOREIGN KEY:
A foreign key is a constraint used to establish a connection between two tables.

`Characteristics of a foreign key`

- We can have any number (n) of foreign keys in a table
- It can accept repeated or duplicate values
- It can accept NULL
- It is not a combination of UNIQUE and NOT NULL
- It is present in the child table, but actually refers to the parent table
- Also referred to as a referential integrity constraint
- COMPOSITE KEY:Combination of multiple columns as primary key.
- AUTO_INCREMENT:Used with PRIMARY KEY to automatically assign the next number.
```sql
CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100)
);
```

Feature         PRIMARY KEY UNIQUE
Must be unique      Yes Yes
Allows NULL values   No Yes (one or more NULLs allowed)
How many allowed Only one per table Can have multiple
Required by table Recommended, often required Optional
Dropping Cannot be easily dropped Can be dropped anytime

### Data Types Explained
📝 Data types are used to determine what type or kind of data will be stored in a particular memory location.

- INT : Integer type, used for whole numbers.
- VARCHAR(100) : Variable-length string, up to 100 characters.
- ENUM : A string object with a value chosen from a list of permitted values.
- DATE : Stores date values.A date should always be enclosed in single quotes.
```sql
'DD-MON-YY'
'DD-MON-YYYY'
```
- TIMESTAMP : Stores date and time, automatically set to the current timestamp.
- BOOLEAN : Stores TRUE or FALSE values.
- CHAR : 
- NUMBER :This datatype is used to store numerical values. It accepts two arguments precision and scale
```sql
NUMBER(precision, [scale])
```
- DECIMAL(10, 2) : Stores exact numeric data values, useful for financial data. The first number is the
total number of digits, and the second is the number of digits after the decimal point.

---

## 13. Large Objects
### CLOB (Character Large Object) 
used to store characters up to 4GB in size, whereas VARCHAR2 can store a maximum of 4000 characters.

### BLOB (Binary Large Object)
used to store binary data such as images, videos, files, etc., up to 4GB in size.

---

## 14. DISTINCT

DISTINCT is used to remove duplicate values and return only unique records from a column or combination of columns.
- We can pass a column name or an expression as an argument to DISTINCT
- DISTINCT should be used as the first keyword in the SELECT clause
- We can pass multiple columns to DISTINCT — it removes the duplicate combination across all the columns

```sql
SELECT DISTINCT column_name
FROM table_name;

SELECT DISTINCT department, city
FROM Employee;
```
---

## 15. Alias

An alias is an alternative name given to a column or an expression in the result table.

- An alias name can be used with or without the AS keyword
- An alias name should be a single word, or a string enclosed within double quotes
- An alias is not mandatory but recommended

```sql
SELECT salary AS EmployeeSalary
FROM Employee;

--Example — name of salary and salary with a 10% hike
SELECT ename, sal, sal + sal * 10 / 100 "Hike10%" FROM Emp;
```
---

## 16. Operators
- AND :Both conditions must be true.
- OR  :At least one condition must be true.
- BETWEEN : Used when we have a range of values. BETWEEN is inclusive of both endpoints. The range cannot be interchanged (lower bound must come first).
- NOT BETWEEN : Similar to BETWEEN, but rejects the values in the range instead of selecting them.
```sql
-- Display ename, hiredate except those hired in the year 1980
SELECT ename, hiredate FROM emp
WHERE hiredate NOT BETWEEN '01-JAN-80' AND '31-DEC-80';
```
- IN Operator

📝 The IN operator is a multivalue operator that accepts multiple values on the right-hand side (RHS). It returns TRUE if any one of the given conditions is satisfied.

```sql
-- Details of employees working in dept 10, 20, 30, 40, 50
SELECT * FROM emp WHERE deptno IN (10, 20, 30, 40, 50);
```

- NOT IN Operator

📝 Similar to IN, but rejects the given values instead of selecting them.

column_name / expression NOT IN (v1, v2, ... vn)
```sql
-- Details of employees except those working as salesman or analyst
SELECT ename FROM emp
WHERE job NOT IN ('SALESMAN', 'ANALYST');
```
```sql
-- ename column of employees if they are earning commission
SELECT ename FROM emp WHERE comm IS NOT NULL;
```
- LIKE : Used for pattern matching.
  Special characters used for pattern matching:

`% (percentile)` — matches any character, any number of times (including zero)
`_ (underscore)` — matches exactly one character
Pattern	Meaning
'A%'	First character must be A
'%A'	Last character must be A
'_A%'	Second character must be A
'%A_'	Second-last character must be A
'___A%'	Fourth-last... i.e. 4th character must be

```sql
-- ename and hiredate, if they were hired in year 95
SELECT ename, hiredate FROM emp
WHERE hiredate LIKE '%95';

-- ename and salary if they are earning a three-digit salary
SELECT ename, sal FROM emp WHERE sal LIKE '%___';

-- Details of employees having 'A' in first place, 'D' in second place, and 'S' in last place
SELECT * FROM emp WHERE ename LIKE 'AD%S';

-- ename if they have 'A' in first place and are working in dept 10 or 20
SELECT ename FROM emp
WHERE ename LIKE 'A%' AND deptno IN (10, 20);
```
- NOT LIKE:Similar to LIKE, but rejects the value instead of selecting it.
```sql
-- ename except those having character 's' in the last place
SELECT ename FROM emp WHERE ename NOT LIKE '%s';
```

- ANY :Accepts multiple values on the right side.

```sql
SELECT *
FROM Employee
WHERE salary NOT BETWEEN 30000 AND 70000 OR manager_id IS NOT NULL;
```
---

## 17. SQL Functions
- MOD():Returns remainder. SELECT MOD(10,4);
- NVL() :Returns replacement when value is NULL.
- NVL2()
- INSTR() :Returns position of substring.

---

## 18. Pseudo Columns
- ROWID : Unique physical address of a row.
- ROWNUM : Sequential number generated for result rows.

---

## 19. Indexing
Improves query performance by reducing full table scans.An Index is a database object used to speed up data retrieval from a table.

It works like the index of a book:

Instead of scanning the entire table,
The database uses the index to quickly locate rows.

**syntax**
```sql
CREATE INDEX index_name
ON table_name(column_name);
```

**example**
```sql
CREATE INDEX idx_employee_name
ON Employee(name);

CREATE INDEX idx_emp_id
ON employees(emp_id);
```
---

## 20. ACID Properties
- Atomicity :All operations succeed or all fail.
- Consistency: Database remains valid.
- Isolation:Transactions do not interfere with each other.
- Durability: Committed changes are permanent.

---

## 21. DB vs DBMS
DB = Data storage.
DBMS = Software used to manage databases (MySQL,PostgreSQL,Oracle)

---
## 22. What does RESTART IDENTITY do?

 It resets the auto-increment/identity sequence back to its starting value after truncating the table.

---

## 23. SET Operations vs JOIN
SET → Vertical combination.
JOIN → Horizontal combination.

---

## 24. UNION vs UNION ALL
- UNION → Removes duplicates.
- UNION ALL → Keeps duplicates.

---



---

## 26. Normalization
📝 The process of reducing a large table into smaller tables in order to remove redundancy.

📝 Normal Form — a table without redundancy is said to be in normal form.
Levels of Normal Form

### First Normal Form (1NF)

A table is said to be in 1NF if it satisfies the following conditions:

- The table should not contain multi-valued data
- The table should not have duplicate or repeated values

### Second Normal Form (2NF)

A table is said to be in 2NF if it satisfies the following conditions:

- The table should already be in 1NF
- The table should not have partial functional dependency

### Third Normal Form (3NF)

A table is said to be in 3NF if it satisfies the following conditions:

- The table should already be in 2NF
- The table should not have transitive functional dependency

### BCNF (Boyce-Codd Normal Form)

📝 An updated version of 3NF, also called 3.5NF.

---

## 27. Views
Virtual table based on query.
A view in MySQL is a virtual table based on the result of a SELECT query. It does not store data itself — it always reflects the current data in the base tables.
Views are useful when:
- You want to simplify complex queries
- You want to reuse logic
- You want to hide certain columns from users

view can not store result but Materialized view can store result

```sql

CREATE VIEW view_name AS
SELECT columns
FROM table_name
WHERE condition;

SELECT * FROM view_name;
DROP VIEW view_name;

CREATE VIEW employee_view AS
SELECT *
FROM Employee;
```
---

## 28. Triggers
Automatically execute on database events.
Auto execute on INSERT, UPDATE, DELETE.

---

## 29. Cursor
A pointer used to process query results row-by-row.

---

## 31. Temporary Table
Exists only during session.

---

## 32. EXISTS vs IN

| EXISTS | IN |
|---------|----|
| Checks whether matching rows exist | Checks whether a value exists in a list or subquery |
| Stops searching after finding the first match | Evaluates all values in the list/subquery |
| Generally faster for large datasets | Better for small lists |
| Commonly used with correlated subqueries | Commonly used with fixed value lists or subqueries |
| Returns `TRUE` or `FALSE` | Compares values directly |
| **Example:** `WHERE EXISTS (SELECT 1 FROM Orders WHERE Orders.CustomerID = Customers.CustomerID)` | **Example:** `WHERE DepartmentID IN (10, 20, 30)` |

---

## 33. CHAR vs VARCHAR
| CHAR | VARCHAR |
|------|----------|
| Stands for **Character** | Stands for **Variable Character** |
| Fixed-length data type | Variable-length data type |
| Always occupies the specified length | Uses only the required storage (plus small overhead) |
| Pads remaining space with blank characters | Does not pad unused space |
| Better performance for fixed-length values | Slightly slower due to variable length |
| Best for fixed-size values (e.g., Gender, Country Code) | Best for variable-length values (e.g., Name, Address) |
| Maximum size: **255 characters** (commonly) | Maximum size depends on the database system |

---

## 34. Expression
Statement that produces a result using operands and operators.
A statement which gives us a result is known as an expression.

An expression consists of two parts:

1. Operand
2. Operator (+, -, *, /)

Operand types

1. Column name
2. Literals

Literal types

1. Numeric literal
2. Character literal
3. Date literal

---
	
# PostgreSQL Notes

## 1. What is PostgreSQL?
PostgreSQL (Postgres) is an open-source Relational Database Management System (RDBMS) and use SQL to manage relational data.

### Features
- Open Source
- SQL Compliant
- ACID Compliant
- Advanced Indexing
- JSON Support
- Window Functions
- Partitioning
- Triggers

## 2. PostgreSQL Data Types
### Numeric
- SMALLINT: 
	Stores small whole numbers.Use: Age, rating, small counters.
- INTEGER: 
	Stores normal whole numbers.Use: Employee ID, quantity, order count.
- BIGINT:
	Stores very large whole numbers.Use: Social media post IDs, large transaction IDs.
- NUMERIC(10,2): 
	Stores exact decimal numbers.Use: Money, salary, product price.
- REAL: 
	Stores decimal numbers with less precision.
- DOUBLE PRECISION:
	Stores decimal numbers with higher precision than REAL.

Example:
```sql
price NUMERIC(10,2)
```

### Character
- CHAR(n): 
  Fixed-length text.Use: Country codes like IN, US.
- VARCHAR(n): 
  Variable-length text with a limit.Use: Name, email, username.
- TEXT: 
  Unlimited-length text.Use: Comments, descriptions, articles.

### BOOLEAN
```sql
is_active BOOLEAN
```

### UUID
Unique identifier.
```sql
id UUID
```

### Arrays
	Store multiple values in one column.
```sql
skills TEXT[]
```

### JSON
Stores structured data in JSON format.
```sql
details JSON
```

## 3. String Functions and conditional functions
### UPPER()
Converts text to uppercase.
```sql
SELECT UPPER('hello');
```

### LOWER()
Converts text to lowercase.
```sql
SELECT LOWER('HELLO');
```

### TRIM()
Removes spaces from start and end.
```sql
SELECT TRIM(' PostgreSQL ');
```

### LENGTH()
Returns character count.
```sql
SELECT LENGTH('Database');
```

### SUBSTRING()
Extracts part of a string.
```sql
SELECT SUBSTRING('PostgreSQL',1,4);
```
### REVERSE() 
reverse the given string
```sql
SELECT REVERSE('123') FROM Dual;
```
### TO_CHAR() 
 convert a date to string format
```sql
SELECT TO_CHAR(SYSDATE, 'YEAR') FROM dual;
```
### TO_DATE() 
 convert a date string to date format
 ```sql
SELECT TO_CHAR(TO_DATE('15-AUG-1949'), 'DAY') FROM dual;
```
### SUBSTR() 
 extract part of a string from the original string
 ```sql
SELECT SUBSTR('Bangalore', 7, 3) FROM dual;
```
### MOD() 
 obtain the modulus (remainder) of the given numbers
 ```sql
SELECT * FROM emp WHERE MOD(Empno, 2) = 0;
```
### NVL() (Null Value Logic)
 Accepts 2 arguments:
- arg1: a column/expression that could be NULL
- arg2: the value to substitute in place of NULL
- If arg1 is not NULL, NVL returns the same value present in arg1
SELECT sal + NVL(comm, 0) FROM emp;

### INSTR() 
 obtain the index position of a substring within the original string
 ```sql
SELECT * FROM emp WHERE INSTR(Ename, 'A', 1, 1) > 0;
```
### REPLACE()
 replace a substring with a new string in the original string
 ```sql
SELECT REPLACE('Jline', 'J', 'PY') FROM dual;
```
## 4. Date & Time Functions
Used to work with dates and timestamps.
```sql
SELECT CURRENT_DATE;
SELECT NOW();
```

## IF()

```sql
SELECT name,
gender,
IF(gender = 'Female', 'Yes', 'No')
AS is_female
FROM users;
```

## 5. Common Table Expressions (CTE)
```sql
WITH sales_data AS (
 SELECT * FROM sales
)
SELECT * FROM sales_data;
```

### Create Table
```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL
        CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0
        CHECK (stock >= 0),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Insert One Row
```sql
INSERT INTO products(name,price)
VALUES('Laptop',50000);
```

### Insert Multiple Rows
```sql
INSERT INTO products
(name, category, price, stock)
VALUES
('Laptop', 'Electronics', 900.00, 10),
('Book', 'Education', 20.00, 50),
('Pen', 'Stationery', 5.00, 100);
```

### Insert If Not Exists
if exist : Used to avoid errors if an object already exists or does not exist.

```sql
INSERT INTO products(id,name,price)
SELECT 1,'Laptop',50000
WHERE NOT EXISTS (
 SELECT 1 FROM products WHERE id=1
);
```

### Update
```sql
UPDATE products
SET price=55000
WHERE id=1;

```
### Conditional select
```sql
SELECT *
FROM products
WHERE category IN ('Electronics', 'Mobile', 'Laptop');


SELECT *
FROM products
WHERE (
        category = 'Electronics'
        OR category = 'Mobile'
      )
  AND name LIKE 'P%'
  AND is_active = TRUE
ORDER BY price ASC;
```

### Delete
```sql
DELETE FROM products
WHERE id=1;
```

## 6. Window Functions
### ROW_NUMBER()
Gives a unique sequential number to each row.
```sql
SELECT ROW_NUMBER() OVER() FROM employees;
```

### RANK()
Assigns rank but skips numbers when tied.
```sql
SELECT RANK() OVER(ORDER BY salary DESC) FROM employees;
```

### DENSE_RANK()
Assigns rank without skipping numbers.
```sql
SELECT DENSE_RANK() OVER(ORDER BY salary DESC) FROM employees;
```

### LAG()
Gets value from the previous row.
```sql
SELECT LAG(salary) OVER(ORDER BY id) FROM employees;
```

### LEAD()
Gets value from the next row.
```sql
SELECT LEAD(salary) OVER(ORDER BY id) FROM employees;
```

## 7. Views & Materialized Views
A virtual table created from a query.
Doesn't store data itself (usually).
### View
```sql
CREATE VIEW employee_view AS
SELECT * FROM employees;
```

### Materialized View
```sql
CREATE MATERIALIZED VIEW employee_mv AS
SELECT * FROM employees;
```

```sql
REFRESH MATERIALIZED VIEW employee_mv;
```

## 8. Indexes
Speed up data searches.
### Normal Index
```sql
CREATE INDEX idx_name ON employees(name);
```

### Unique Index
```sql
CREATE UNIQUE INDEX idx_email ON employees(email);
```

### Composite Index
```sql
CREATE INDEX idx_dept_salary
ON employees(department,salary);
```

### Partial Index
```sql
CREATE INDEX idx_active_users
ON users(id)
WHERE is_active = TRUE;
```


## 10. Stored Procedures
A reusable set of SQL statements stored inside the database.Use: Salary calculation, batch processing, business logic.
**It helps in:**
- Reusing SQL code
- Improving performance

**syntax**
 
```sql
DELIMITER $$

CREATE PROCEDURE procedure_name()
BEGIN
    -- SQL Statements
END $$

DELIMITER ;
```
**example**

```sql
CREATE OR REPLACE PROCEDURE increase_salary()
LANGUAGE plpgsql
AS $$
BEGIN
 UPDATE employees
 SET salary=salary+1000;
END;
$$;
CALL increase_salary();

```

```sql
DELIMITER $$

CREATE PROCEDURE emp_info()
BEGIN
    SELECT *
    FROM employees
    ORDER BY salary;
END $$

DELIMITER ;

CALL emp_info();
```

## 11. Triggers

Automatically runs when an event occurs.Use: Logging, auditing, automatic updates.A Trigger is a special stored procedure(set of statements) that automatically executes (fires) when a specific event occurs on a table, such as:INSERT,UPDATE,DELETE

```sql

CREATE TRIGGER trigger_name
BEFORE | AFTER event_type
ON table_name
FOR EACH ROW | FOR EACH COLUMN
BEGIN
    -- Trigger body
    -- SQL statements
END;


CREATE TRIGGER trigger_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END;
```

## 12. Partitioning
Splits a large table into smaller pieces (partitions).Use: Improve performance and manage massive datasets efficiently.
```sql
CREATE TABLE sales (
 id INT,
 sale_date DATE,
 amount NUMERIC
) PARTITION BY RANGE (sale_date);
```

```sql
CREATE TABLE sales_2025
PARTITION OF sales
FOR VALUES FROM ('2025-01-01')
TO ('2026-01-01');
```
# 🗄️ SQL Practice Notes

---

## 📦 Project 1: Customers / Products / OrderDetails

### sample data

| CustomerID | CustomerName | ContactName | City | Country |
|------------|-------------|-------------|------|----------|
| 1 | Sam | Boss1 | Berlin | Germany |
| 2 | Mike | Boss2 | Mexico City | Mexico |
| 3 | Jake | Boss3 | Madrid | Spain |
| 4 | Rupai | Boss4 | London | UK |
| 5 | Rik | Boss5 | Mannheim | Germany |
| 6 | Sou | NULL | Milan | Italy |


| ProductID | ProductName | Price |
|------------|-------------|--------|
| 1 | Chais | 18.00 |
| 2 | Chang | 19.00 |
| 3 | Aniseed Syrup | 10.00 |
| 4 | Chef Anton's Cajun Seasoning | 22.00 |
| 5 | Chef Anton's Gumbo Mix | 21.35 |
| 6 | Ikura | 35.00 |


| OrderID | ProductID | Quantity |
|----------|-----------|----------|
| 101 | 1 | 10 |
| 102 | 2 | 20 |
| 103 | 3 | 15 |
| 104 | 4 | 25 |
| 105 | 2 | 12 |
| 106 | 5 | 30 |

### Schema & Sample Data

```sql
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  CustomerName VARCHAR(100) UNIQUE NOT NULL,
  ContactName VARCHAR(100),
  Address VARCHAR(150),
  City VARCHAR(50),
  PostalCode VARCHAR(10),
  Country VARCHAR(50)
);

CREATE TABLE Products (
  ProductID INT PRIMARY KEY,
  ProductName VARCHAR(100),
  Price DECIMAL(10,2)
);

CREATE TABLE OrderDetails (
  OrderID INT,
  ProductID INT,
  Quantity INT
);
```

```sql
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country) VALUES
(1, 'Sam', 'Boss1', 'BK street', '12209', 'Germany'),
(2, 'Mike', 'Boss2', 'Green Garden', 'México D.F.', '05021', 'Mexico'),
(3, 'Jake', 'Boss3', 'MK houl', 'Madrid', '28023', 'Spain'),
(4, 'Rupai', 'Boss4', '5 sq road', 'London', 'WA1 1DP', 'UK'),
(5, 'Rik', 'Boss5', 'BK colony', 'Mannheim', '68163', 'Germany'),
(6, 'Sou', NULL, 'Lord Bunglo', 'Milan', '20100', 'Italy');

INSERT INTO Products (ProductID, ProductName, Price) VALUES
(1, 'Chais', 18.00),
(2, 'Chang', 19.00),
(3, 'Aniseed Syrup', 10.00),
(4, 'Chef Anton''s Cajun Seasoning', 22.00),
(5, 'Chef Anton''s Gumbo Mix', 21.35);

INSERT INTO OrderDetails (OrderID, ProductID, Quantity) VALUES
(101, 1, 10),
(102, 2, 20),
(103, 3, 15),
(104, 4, 25);
```

### Basic Select & Filtering

```sql
-- All rows/columns
SELECT * FROM Customers;

-- Specific columns
SELECT CustomerName, City FROM Customers;

-- Remove duplicate values
SELECT DISTINCT Country FROM Customers;

-- Filter by condition
SELECT * FROM Customers WHERE Country = 'Mexico';

-- OR condition
SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'Spain';

-- NOT condition
SELECT * FROM Customers WHERE NOT Country = 'Spain';

-- Top N rows
SELECT TOP 3 * FROM Customers;              -- SQL Server
SELECT * FROM Customers LIMIT 3;             -- MySQL / PostgreSQL
```

### Sorting

```sql
-- Ascending order of price
SELECT * FROM Products ORDER BY Price;
```

### Aggregate Functions

```sql
SELECT MIN(Price) FROM Products;        -- smallest price
SELECT COUNT(*) FROM Products;          -- total rows
SELECT SUM(Quantity) FROM OrderDetails; -- sum of quantities
SELECT AVG(Price) FROM Products;        -- average price
```

### Pattern Matching & Ranges

```sql
-- Names starting with 'a'
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

-- Match against a list
SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');

-- Value within a range
SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;

-- Multiple LIKE conditions
SELECT * FROM Customers
WHERE CustomerName LIKE 'R%' OR CustomerName LIKE 'S%';

-- Case-insensitive exact match
SELECT * FROM Customers WHERE LOWER(CustomerName) = 'sam';
```

### Aliasing & Grouping

```sql
-- Rename column in output
SELECT CustomerID AS ID FROM Customers;

-- Group and aggregate
SELECT ProductName, AVG(Price) AS price
FROM Products
GROUP BY ProductName;
```

---

## 📦 Project 2: Customer Scoring Table

### Sample Table

| id | first_name | country | score | email         |
|----|-------------|---------|-------|---------------|
| 1  | Sam         | India   | 450   | sam@email.com |
| 2  | Sou         | USA     | 0     | sou@email.com |
| 3  | Rik         | Germany | 700   | rik@email.com |
| 4  | Mia         | India   | 900   | mia@email.com |
| 5  | Leo         | UK      | 350   | leo@email.com |
| 6  | Ava         | Germany | 820   | ava@email.com |

### Basic Select

```sql
SELECT * FROM customer;                      -- all columns
SELECT name, country FROM customer;          -- specific columns
SELECT DISTINCT country FROM customer;       -- unique countries
SELECT TOP 3 * FROM customer;                -- top 3 rows
SELECT TOP 3 * FROM customer ORDER BY score DESC; -- top 3 by highest score
```
```sql
--update the score by 5 for even id and 10 for odd id
UPDATE employee
SET score =
    CASE
        WHEN id % 2 = 0 THEN score + 5
        ELSE score + 10
    END;
--add new column grade in that table
ALTER TABLE employee
ADD COLUMN grade VARCHAR(10);

--delete all employees whose score <400
DELETE FROM employee
WHERE score < 400;

--rename the id column with emp_id
ALTER TABLE employee
MODIFY score VARCHAR(20);

ALTER TABLE employee
RENAME COLUMN id TO emp_id;

--change the datatype of the score as string
insert a new employee in between sou and rik
INSERT INTO employee(emp_id, first_name, country, score, email)
VALUES
(2.5, 'John', 'Canada', '600', 'john@email.com');
```

### Filtering

```sql
SELECT * FROM customer WHERE score != 0;

SELECT first_name, country FROM customer WHERE country = 'India';

SELECT * FROM customer WHERE country = 'USA' AND NOT score > 500;

SELECT * FROM customer WHERE score BETWEEN 100 AND 500;

SELECT * FROM customer WHERE country IN ('Germany', 'USA');

-- Names starting with M
SELECT * FROM customer WHERE first_name LIKE 'M%';

-- Names ending with M and one extra character
SELECT * FROM customer WHERE first_name LIKE '%M_';
```

### Sorting

```sql
-- Descending by score
SELECT * FROM customer ORDER BY score DESC;

-- Multi-column sort
SELECT * FROM customer ORDER BY country ASC, score DESC;
```

### Grouping & Aggregation

```sql
-- Sum of scores by country
SELECT country, SUM(score) AS total FROM customer GROUP BY country;

-- Filter after grouping
SELECT country, SUM(score) AS total
FROM customer
GROUP BY country
HAVING SUM(score) > 800;

SELECT id, country, AVG(score) AS avg_score
FROM customer
WHERE score != 0
GROUP BY country
HAVING AVG(score) >= 430;
```

### Alter & Update

```sql
-- Add new column
ALTER TABLE customer ADD email VARCHAR(50) NOT NULL;

-- Update with conditions
UPDATE customer SET score = 0, country = 'UK'
WHERE id = 10 AND score IS NULL;
```

### Joins

📝 **Inner Join** — only matching rows from both tables
```sql
SELECT * FROM customer
INNER JOIN orders ON customer.id = orders.customer_id;
```

📝 **Left Join** — all rows from left, matching from right
```sql
SELECT c.id, c.first_name, o.order_id, o.sales
FROM customer c
LEFT JOIN orders o ON c.id = o.customer_id;
```

📝 **Full Join** — all rows from both tables
```sql
SELECT c.id, c.first_name, o.order_id, o.sales
FROM customer c
FULL JOIN orders o ON c.id = o.customer_id;
```

📝 **Left Anti Join** — left rows with no match in right
```sql
SELECT c.id, c.first_name
FROM customer c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.order_id IS NULL;
```

📝 **Right Anti Join** — right rows with no match in left
```sql
SELECT o.order_id, o.sales
FROM orders o
LEFT JOIN customer c ON c.id = o.customer_id
WHERE c.id IS NULL;
```

📝 **Full Anti Join** — rows with no match in either table
```sql
SELECT c.id, o.order_id
FROM customer c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE c.id IS NULL OR o.order_id IS NULL;
```

### Set Operators

📝 Combine results of multiple queries. Rules: columns/datatypes must match; `ORDER BY` allowed only once, at the end.

```sql
-- UNION — unique rows from both queries
SELECT c.id, c.name FROM customer
UNION
SELECT o.id, o.name FROM orders;

-- EXCEPT (MINUS) — rows in first query not in second
SELECT c.id, c.name FROM customer
EXCEPT
SELECT o.id, o.name FROM orders;

-- INTERSECT — only common rows
SELECT c.id, c.name FROM customer
INTERSECT
SELECT o.id, o.name FROM orders;
```

### String Functions

```sql
SELECT CONCAT(name, ' ', country) AS name_country FROM customer;
SELECT UPPER(name) AS up_name, LOWER(country) AS low_country FROM customer;
SELECT name, LEN(TRIM(name)) AS len_name FROM customer;
SELECT REPLACE('123-456-7890', '-', '/') AS clean_phone;
SELECT LEFT(name, 2) AS first_2_char, RIGHT(name, 2) AS last_2_char FROM customer;
SELECT SUBSTRING(TRIM(name), 1, 4) AS sub_name FROM customer;
```

### Date Functions

```sql
SELECT YEAR(created_at), MONTH(created_at), DAY(created_at) FROM customer;
SELECT FORMAT(created_at, 'MM-dd-yyyy') AS date_format FROM customer;
SELECT DATEDIFF(DAY, start_date, end_date) AS days_diff FROM orders;
SELECT ISDATE('2024-10-01') AS valid_date;
```

### Window Function

```sql
SELECT order_id, product_id,
       SUM(sales) OVER(PARTITION BY product_id) AS total_sales
FROM orders;
```

### Type & Null Handling

```sql
SELECT CAST('123' AS INT) AS string_to_int;
SELECT ISNULL(score, 0) AS safe_score FROM customer;
SELECT COALESCE(email, 'N/A') AS email_value FROM customer;
SELECT NULLIF(score, 0) AS null_if_zero FROM customer;
```

### CASE Statements

```sql
SELECT score,
  CASE WHEN score IS NULL THEN 1 ELSE 0 END AS score_flag
FROM customer;

SELECT id, score,
  CASE
    WHEN score > 100 THEN 'High'
    WHEN score > 50 THEN 'Medium'
    ELSE 'Low'
  END AS score_category
FROM customer;
```

---

## 📦 Project 3: Emp_Data (Simple CRUD Practice)

```sql
CREATE TABLE Emp_Data (
  Id    int,
  name  varchar(255),
  email varchar(255)
);

INSERT INTO Emp_Data VALUES (1, 'sam', 'sam@gmail.com');
```

```sql
SELECT * FROM Emp_Data;

-- Rename column with alias
SELECT email AS "Email Address"
FROM Emp_Data;

-- Distinct values across columns
SELECT DISTINCT id, name
FROM Emp_Data;

-- Filter by email
SELECT *
FROM Emp_Data
WHERE email = 'sougata@gmail.com';

-- Combine BETWEEN with AND
SELECT *
FROM Emp_Data
WHERE id BETWEEN 1 AND 3
  AND email = 'sougata@gmail.com';

-- Pattern match: starts with 's', ends with 'm'
SELECT name
FROM Emp_Data
WHERE name LIKE 's%m';

-- Sort descending
SELECT *
FROM Emp_Data
ORDER BY name DESC;

-- Update record
UPDATE Emp_Data
SET name = 'sougata', email = 'sougata@gmail.com'
WHERE Emp_Data.Id = 1;
```

---

## 📦 Project 4: Employees / Departments / Job Grades (Oracle-style)

### Schema

```sql
CREATE TABLE employees (
    employee_id     NUMBER,
    last_name       VARCHAR2(20),
    department_id   NUMBER,
    salary          NUMBER,
    commission_pct  NUMBER
);

CREATE TABLE departments (
    department_id   NUMBER,
    department_name VARCHAR2(20),
    location_id     NUMBER
);

CREATE TABLE job_grades (
    grade_level  VARCHAR2(10),
    lowest_sal   NUMBER,
    highest_sal  NUMBER
);
```

### Sample Data

```sql
INSERT INTO employees VALUES (101, 'King', 10, 24000, NULL);
INSERT INTO employees VALUES (102, 'Kochhar', 20, 17000, 0.2);
INSERT INTO employees VALUES (103, 'Fay', 20, 6000, NULL);
INSERT INTO employees VALUES (104, 'Higgins', 30, 12000, NULL); -- ⚠️ original note was incomplete, closed here

INSERT INTO departments VALUES (10, 'Administration', 1700);
INSERT INTO departments VALUES (20, 'Marketing', 1800);
INSERT INTO departments VALUES (30, 'IT', 1400);

INSERT INTO job_grades VALUES ('GRADE 1', 20000, 30000);
INSERT INTO job_grades VALUES ('GRADE 2', 10000, 19999);
INSERT INTO job_grades VALUES ('GRADE 3', 5000, 9999);
```

### Joins (Old-style vs ANSI)

```sql
-- Old-style join (implicit)
SELECT e.employee_id,
       e.last_name,
       e.department_id,
       d.department_name,
       d.location_id
FROM employees e, departments d
WHERE e.department_id = d.department_id;

-- ANSI-style INNER JOIN (preferred)
SELECT e.employee_id,
       e.last_name,
       d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;
```

### Join with Range Condition + Grouping

```sql
SELECT j.grade_level,
       COUNT(e.employee_id) AS emp_count
FROM employees e, job_grades j
WHERE e.salary BETWEEN j.lowest_sal AND j.highest_sal
GROUP BY j.grade_level
HAVING j.grade_level = 'GRADE 1';
```

### Aggregate Functions

```sql
SELECT MAX(salary) AS max_salary FROM employees;
SELECT SUM(salary) AS total_salary FROM employees;
SELECT COUNT(DISTINCT department_id) AS dept_count FROM employees;

-- Replace NULL with 0 using NVL (Oracle)
SELECT last_name,
       NVL(commission_pct, 0) AS commission
FROM employees;
```

---

### Views

```sql
CREATE TABLE employee (
    emp_id   NUMBER PRIMARY KEY,
    emp_name VARCHAR2(50),
    dept_id  NUMBER,
    salary   NUMBER
);

INSERT INTO employee VALUES (1, 'Amit',  10, 30000);
INSERT INTO employee VALUES (2, 'Ravi',  20, 35000);
INSERT INTO employee VALUES (3, 'Neha',  10, 32000);
INSERT INTO employee VALUES (4, 'Pooja', 30, 40000);
INSERT INTO employee VALUES (5, 'Ankit', 20, 36000);
INSERT INTO employee VALUES (6, 'Suman', 10, 31000);
INSERT INTO employee VALUES (7, 'Raj',   30, 42000);
INSERT INTO employee VALUES (8, 'Kiran', 20, 38000);
INSERT INTO employee VALUES (9, 'Meena', 10, 33000);
INSERT INTO employee VALUES (10,'Vikas', 30, 45000);
```

**Create a view**
```sql
CREATE VIEW dept10_view AS
SELECT emp_id, emp_name, salary
FROM employee
WHERE dept_id = 10;
```

**Query the view**
```sql
SELECT *
FROM dept10_view
ORDER BY salary DESC;
```

**Check view definition (Oracle)**
```sql
SELECT text
FROM user_views
WHERE view_name = 'DEPT10_VIEW';
```

**Create/replace view with custom column names**
```sql
CREATE OR REPLACE VIEW empvu80
(
  id_number,
  name,
  sal,
  department_id
)
AS
SELECT employee_id,
       first_name || ' ' || last_name,
       salary,
       department_id
FROM employees
WHERE department_id = 80;
```

**Drop a view**
```sql
DROP VIEW dept10_view;
```

---

### Sequences

📝 A sequence is a database object used to generate unique numeric values, commonly for primary keys.

```sql
CREATE SEQUENCE dept_deptid_seq
    INCREMENT BY 10
    START WITH 120
    MAXVALUE 9999;

ALTER SEQUENCE dept_deptid_seq
INCREMENT BY 5;

DROP SEQUENCE dept_deptid_seq;
```
## 📦 Project 5: Import csv file

### sample data

| employee_id | first_name | last_name | department | salary   | joining_date | age |
|-------------|------------|-----------|------------|----------|--------------|-----|
| 1           | Sam        | Muk       | Operations | 65446.80 | 23-05-2024   | 12  |
| 2           | Mik        | Pal       | IT         | 58763.33 | 02-10-2021   | 34  |
| 3           | Rik        | Doe       | Operations | 57123.32 | 30-04-2020   | 44  |
| 4           | Sou        |           | HR         | 45666.64 | 04-04-2021   | 53  |


```sql
CREATE TABLE employee(
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    department VARCHAR(20),
    salary NUMERIC(10,2),
    joining_date DATE,
    age INT
);

SELECT * FROM employee;
COPY employee(employee_id, first_name, last_name, department, salary, joining_date, age)
FROM 'C:\CSV\employee_data.csv'
DELIMITER ','
CSV HEADER;

-- Retrieve First Name, Salary and 10% Bonus
SELECT first_name,
       salary,
       salary * 0.10 AS bonus
FROM employee;

-- compute annual salary of each employee create a new column and add
ALTER TABLE employee
ADD COLUMN annual_salary NUMERIC(12,2);

UPDATE employee
SET annual_salary = salary * 12;

--retrieve employee whose salary in between 50000-70000 without in 
SELECT *
FROM employee
WHERE salary >= 50000
  AND salary <= 70000;
  
--retrieve employee whose belong to either 'IT' or 'HR' department
SELECT *
FROM employee
WHERE department IN ('IT', 'HR');

--find employee whose lastname is null
SELECT *
FROM employee
WHERE last_name IS NULL;

--find top 3 employee sorted by salary in descending orders
SELECT *
FROM employee
ORDER BY salary DESC
LIMIT 3;

--find average salary of each employee by department
SELECT department,
       AVG(salary) AS avg_salary
FROM employee
GROUP BY department;

--join firstname and lastname text with _ using concat
SELECT CONCAT(first_name, '_', last_name) AS full_name
FROM employee;

--remove leading and trailing space from first_name
SELECT TRIM(first_name) AS cleaned_name
FROM employee;

--find the employee whose second character is either 'a' or 'o'
SELECT *
FROM employee
WHERE first_name LIKE '_a%'
   OR first_name LIKE '_o%';
   
replace the first_name with emp
SELECT REPLACE(first_name, first_name, 'emp') AS new_name
FROM employee;

--Salary Category Using CASE
SELECT first_name,department,
       CASE
           WHEN salary >= 50000 THEN 'Expensive'
           WHEN salary >= 10000 AND salary <= 49999 THEN 'Moderate'
           ELSE 'Affordable'
       END AS price_category
FROM employee;
```