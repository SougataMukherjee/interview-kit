# ✅ Databases
Databases are the backbone of any system
## DBMS vs RDBMS
### DBMS (Database Management System)
- Manages data storage and retrieval
- May not enforce relationships
- Less strict rules

## RDBMS (Relational DBMS)
- Data stored in **tables with relations**
- Enforces schema and constraints
- Uses SQL
- Examples: MySQL, PostgreSQL, Oracle
## SQL vs NoSQL
<img src="./img/sql-nosql.png" alt="sql-nosql" />

| Feature      | SQL                   | NoSQL                  |
| ------------ | --------------------- | ---------------------- |
| Schema       | Fixed                 | Flexible               |
| Joins        | Yes                   | No (usually)           |
| Consistency  | Strong                | Eventual               |
| Scaling      | Vertical + Horizontal | Horizontal             |
| Transactions | Yes                   | Limited                |
| Use case     | Banking, Orders       | Feeds, Logs, Analytics |

## Reasons for SQL:

Structured data
Strict schema
Relational data
Need for complex joins
Transactions
Clear patterns for scaling
More established: developers, community, code, tools, etc
Lookups by index are very fast

## Reasons for NoSQL:

Semi-structured data
Dynamic or flexible schema
Non-relational data
No need for complex joins
Store many TB (or PB) of data
Very data intensive workload
Very high throughput for IOPS
## SQL:
SQL databases store data in structured tables with predefined schema and follow ACID properties.
it has Fixed schema (columns & types)
Relationships using joins
Strong consistency
Supports transactions
## Table: 
Users
+----+--------+-----------+
| id | name   | email     |
+----+--------+-----------+

## NoSQL :
NoSQL databases store data in a flexible, schema‑less format and are designed for horizontal scalability.
it has Schema‑less or flexible schema
High scalability
Eventual consistency
No joins (usually)
User Document
{
  "id": 1,
  "name": "Alex",
  "posts": [ ... ]
}

## ACID
Atomicity → All or nothing
Consistency → Data remains valid
Isolation → Transactions don’t interfere
Durability → Data persists after commit
Strong consistency
## Joins
## Schema:
Schema defines the structure of data—tables, fields, and data types.
Types of Schema
Schema‑on‑write (SQL)
Data must match schema before writing
Schema‑on‑read (NoSQL)
Schema enforced at read time

## Index:
An index is a data structure that improves read performance by avoiding full scans.

Consistency Models
1)Strong Consistency:All reads return the most recent write immediately.
2)Eventual Consistency:System guarantees data will become consistent over time.

## CAP Theorem:
In a distributed system, you can guarantee only two of the following three at the same time:

Consistency: Every read receives the most recent write or an error
Availability: Every request receives a response, without guarantee that it contains the most recent version of the information
Partition Tolerance:The system continues to operate despite arbitrary partitioning due to network failures
<img src="./img/cap.png" alt="cap" />
