# SQL Notes

## 1. What is SQL?

SQL (Structured Query Language) is used to store, retrieve, manage, and manipulate data in relational databases.

## What is Schema?

A Schema is the logical structure or blueprint of a database that contains tables, views, relationships, indexes, and other database objects.

## What is Database (DB)?
A Database is an organized collection of data stored electronically so that it can be easily accessed, managed, and updated.
| Student_ID | Name | Course |
|------------|--------|---------|
| 101 | Rahul | Java |
| 102 | Priya | SQL |

## What is DBMS (Database Management System)?
A DBMS is software used to create, store, manage, and manipulate databases.
Functions of DBMS

Store data
Retrieve data
Update data
Delete data
Manage security
Backup and recovery

## What is RDBMS (Relational Database Management System)?
An RDBMS is a type of DBMS that stores data in the form of tables (rows and columns) and maintains relationships between tables using keys.
Features

Data stored in tables
Supports Primary Key and Foreign Key
Reduces data redundancy
Supports SQL
Maintains data integrity

---

## 2. SQL vs NoSQL

### SQL
- Structured tables
- Fixed schema
- Relational databases
- Examples: MySQL, PostgreSQL, SQL Server

### NoSQL
- Flexible schema
- Stores JSON, documents, key-value pairs
- Suitable for unstructured data
- Examples: MongoDB, Cassandra

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

### DDL (Data Definition Language)
CREATE, ALTER, DROP, TRUNCATE

### DML (Data Manipulation Language)
INSERT, UPDATE, DELETE

### DQL (Data Query Language)
SELECT

### DCL (Data Control Language)
GRANT, REVOKE

### TCL (Transaction Control Language)
COMMIT, ROLLBACK, SAVEPOINT

---

## 5. DELETE vs TRUNCATE vs DROP
- DELETE → Removes rows and keeps table. 
  DELETE FROM Employee WHERE id = 1;
- TRUNCATE → Removes all rows.Faster than DELETE
  TRUNCATE TABLE Employee;
- DROP → Removes entire table permanently.
  DROP TABLE Employee;

---

## 6. WHERE vs HAVING
- WHERE → Filters rows before grouping.
  SELECT *
FROM Employee
WHERE salary > 50000;
- HAVING → Filters grouped data.
SELECT dept_id, COUNT(*)
FROM Employee
GROUP BY dept_id
HAVING COUNT(*) > 5;
---

## 7. Joins
- INNER JOIN → Matched records only.
SELECT e.name, d.dept_name
FROM Employee e
INNER JOIN Department d
ON e.dept_id = d.id;
- LEFT JOIN → Returns all records from left table and matching records from right table.
SELECT *
FROM Employee e
LEFT JOIN Department d
ON e.dept_id = d.id;
- RIGHT JOIN → Returns all records from right table and matching records from left table.
SELECT *
FROM Employee e
RIGHT JOIN Department d
ON e.dept_id = d.id;
- FULL JOIN → All matched and unmatched records from both tables.
SELECT *
FROM Employee e
FULL OUTER JOIN Department d
ON e.dept_id = d.id;
- SELF JOIN → Join table with itself.
- CROSS JOIN → Every row from first table combines with every row from second table..
- NATURAL JOIN → Auto join on same column names.

---

## 8. Aggregate Functions
COUNT(), SUM(), AVG(), MIN(), MAX()

SELECT COUNT(*) FROM Employee;
SELECT SUM(salary) FROM Employee;
SELECT AVG(salary) FROM Employee;
SELECT MIN(salary) FROM Employee;

---

## 9.1. GROUP BY
Groups rows having same values.

SELECT dept_id,
       COUNT(*) AS total
FROM Employee
GROUP BY dept_id;

## 9.2. HAVING Clause
SELECT dept_id,
       COUNT(*) AS total
FROM Employee
GROUP BY dept_id
HAVING COUNT(*) > 5;

---

## 10. Subqueries
Query inside another query.

### Single Row Subquery
Returns one value.
SELECT *
FROM Employee
WHERE salary >
(
 *  SELECT AVG(salary)
    FROM Empl*yee
);

### Multi Row Subquery
Returns multiple values.

---

## 11. Common Table Expression CTE (WITH Clause)
Temporary result set used in another query.
WITH HighSalary AS
(
    SELECT *
    FROM Employee
    WHERE*salary > 50000
)
SELECT *
FROM Hig*Salary
WHERE dept_id = 3;
---

## 12. Constraints
Constraints enforce rules on table columns.
- UNIQUE :Does not allow duplicate values.
- NOT NULL :Cannot contain NULL values.
- CHECK :Provides additional validation.
- PRIMARY KEY:Uniquely identifies each record.
- FOREIGN KEY:Creates relationship between tables.
- COMPOSITE KEY:Combination of multiple columns as primary key.

---

## 13. Large Objects
### CLOB
Stores large text data Up to approximately 4GB

### BLOB
Stores images, audio, videos and binary files.

---

## 14. DISTINCT
Removes duplicate records.
SELECT DISTINCT department, city
FROM Employee;

---

## 15. Alias
Alternative name given to a column or expression.
SELECT salary AS EmployeeSalary
FROM Employee;
---

## 16. Operators
- AND :Both conditions must be true.
- OR  :At least one condition must be true.
- BETWEEN
- NOT BETWEEN
- IS NULL
- IS NOT NULL
- LIKE : Used for pattern matching.
  Starts with A ('%A') ,Ends with A('_A%'),Second character is A('_A%'),Second last character is A('%A_')
- ANY :Accepts multiple values on the right side.

SELECT *
FROM Employee
WHERE salary NOT BETWEEN 30000 AND 70000 OR manager_id IS NOT NULL;

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
Improves query performance by reducing full table scans.
CREATE INDEX idx_employee_name
ON Employee(name);

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

## 22. Schema vs Table
Schema = Blueprint or structure of database.
Table = Actual data stored in rows and columns.

---

## 23. SET Operations vs JOIN
SET → Vertical combination.
JOIN → Horizontal combination.

---

## 24. UNION vs UNION ALL
- UNION → Removes duplicates.
- UNION ALL → Keeps duplicates.

---

## 25. Aggregate vs Window Functions
Aggregate : Return a single summarized value.
SUM()
AVG()
COUNT()
Window :Return values for each row with context.
RANK()
ROW_NUMBER()
DENSE_RANK()

---

## 26. Normalization
Reduces redundancy and improves data integrity.
### 1NF
Atomic values.

### 2NF
No partial dependency.

### 3NF
No transitive dependency.

---

## 27. Views
Virtual table based on query.
CREATE VIEW employee_view AS
SELECT *
FROM Employee;

---

## 28. Triggers
Automatically execute on database events.
Auto execute on INSERT, UPDATE, DELETE.

---

## 29. Cursor
A pointer used to process query results row-by-row.

---

## 30. Stored Procedure
Precompiled SQL code stored in the database for reuse.

---

## 31. Temporary Table
Exists only during session.

---

## 32. EXISTS vs IN
- EXISTS → Checks row existence.
- IN → Compares values list.

---

## 33. CHAR vs VARCHAR
- CHAR → Fixed length.
- VARCHAR → Variable length.

---

## 34. Expression
Statement that produces a result using operands and operators.


	
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

## 3. String Functions
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

## 4. Date & Time Functions
Used to work with dates and timestamps.
```sql
SELECT CURRENT_DATE;
SELECT NOW();
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

## 9. Joins
### INNER JOIN
Returns only matching records from both tables.
Example:
Customer has an order
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
SELECT *
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

## 10. Stored Procedures
A reusable set of SQL statements stored inside the database.Use: Salary calculation, batch processing, business logic.
```sql
CREATE OR REPLACE PROCEDURE increase_salary()
LANGUAGE plpgsql
AS $$
BEGIN
 UPDATE employees
 SET salary=salary+1000;
END;
$$;
```

```sql
CALL increase_salary();
```

## 11. Triggers
Automatically runs when an event occurs.Use: Logging, auditing, automatic updates.
```sql
CREATE OR REPLACE FUNCTION log_insert()
RETURNS TRIGGER AS $$
BEGIN
 RAISE NOTICE 'Row Inserted';
 RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

```sql
CREATE TRIGGER trg_insert
AFTER INSERT ON employees
FOR EACH ROW
EXECUTE FUNCTION log_insert();
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

