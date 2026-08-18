# Core Java — Complete Notes (with Java 8 Features)

## Table of Contents
1. Literals
2. Variables
3. Var-Args Methods
4. Method Overloading
5. Operators & Assignment
6. Looping Statements
7. Selection Statements
8. Arrays
9. Access Modifiers
10. Object-Oriented Programming (OOP)
11. Inner Classes
12. Constructors
13. Garbage Collection
14. Wrapper Classes / Boxing
15. `==` vs `equals()`
16. Static Block
17. Enum
18. Packages & Imports
19. Abstraction
20. Internationalization (I18N)
21. Polymorphism
22. Method Overriding — Rules
23. Abstract Methods & Abstract Classes
24. Final Keyword (Variable / Method / Class) 
25. Interfaces
26. Inheritance & Object Class
27. `this` and `super`
28. Type Casting (Upcasting / Downcasting) 
29. Coupling & Cohesion
30. Exception Handling
31. Multithreading
32. String, StringBuffer, StringBuilder
33. Object Class Methods (Detail)
34. File I/O
35. Serialization
36. Collections Framework
37. Generics
38. Java 8 Features

# Spring & Spring Boot — Complete Notes

## Table of Contents
1. Introduction to Spring
2. Inversion of Control (IoC) & Dependency Injection
3. The Spring Container & ApplicationContext
4. Spring Bean Configuration (XML / Java Config / Annotations)
5. Stereotype Annotations
6. Autowiring
7. Bean Scopes
8. Bean Lifecycle
9. Spring AOP (Aspect-Oriented Programming)
10. Spring MVC
11. Introduction to Spring Boot
12. Spring Boot Project Structure & Starters
13. `application.properties` / `application.yml`
14. Spring Boot Auto-Configuration
15. Building REST APIs with Spring Boot
16. Request/Response Handling
17. Exception Handling in Spring Boot
18. Validation (`spring-boot-starter-validation`)
19. Spring Data JPA
20. Connecting to a Database
21. Spring Boot with Lombok
22. Spring Security Basics
23. JWT Authentication in Spring Boot
24. Spring Boot Profiles
25. Spring Boot Actuator
26. Spring Boot Testing
27. Swagger / OpenAPI Documentation
28. Microservices Basics with Spring Boot
29. Quick Reference — Common Interview Comparisons

---

## 1. Literals

**Literal** — a constant value directly assigned to a variable.

- Decimal (base 10), Octal (base 8), Hexadecimal (base 16)
- Character literals: `'a'`, `'A'`, `'@'`, `'\n'`

```java
int dec = 10;
int oct = 012;    // octal
int hex = 0x1A;   // hexadecimal
char ch = 'A';
```

---

## 2. Variables

**Variable Declaration**
```java
[access-modifier] datatype variableName;
private int age;
```

**Method Declaration**
```java
[access-modifier] returnType methodName(parameter-list) {
    // method body
}
```

### Method Signature
A method signature = **method name + parameter list** (number, type, and order of parameters). Return type is **not** part of the signature.

```java
class Demo {
    void display() { }          // Signature: display()
    void display(int a) { }     // Signature: display(int)
    void display(String s) { }  // Signature: display(String)
}
```

### Types of Variables

| Type | Description |
|---|---|
| Primitive Variable | Represents a primitive value, e.g. `int x = 10;` |
| Reference Variable | Represents an object reference, e.g. `Student s = new Student();` |

### Instance Variable (Non-static)
- Value varies from object to object.
- A separate copy is created for **every** object.
- Created when the object is created, destroyed when the object is destroyed.
- Scope = scope of the object.
- Must be declared **directly inside the class**, outside any method, block, or constructor.

```java
class Test {
    int x = 10;   // if we make 5 objects, 5 different copies of x are created
    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.x);   // 10
    }
}
```

### Static / Class Variable
- Single copy shared by **all** objects of the class.
- Declared with `static`, stored at the class level — outside any method/constructor/block.

```java
class BankAccount {

    // Static variable — shared across all accounts
    static double interestRate = 5.0;

    // Instance variables — unique to each account
    double balance;
    String accountHolder;

    BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Static method — can use static members only
    static double calculateInterest(double amount) {
        return amount * interestRate / 100;
    }

    void showAccountDetails() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: " + balance);
    }
}

public class Static_var_method {
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("Rahul", 10000);
        BankAccount acc2 = new BankAccount("Anita", 20000);

        acc1.showAccountDetails();
        System.out.println("Interest: " + BankAccount.calculateInterest(acc1.balance));

        acc2.showAccountDetails();
        System.out.println("Interest: " + BankAccount.calculateInterest(acc2.balance));
    }
}
```

### Instance vs Static Variable

| Instance Variable | Static Variable |
|---|---|
| Separate copy per object | Single copy shared by all objects |
| Stored in heap (inside object) | Stored in method/class area |

### Instance vs Local Variable

| Instance Variable | Local Variable |
|---|---|
| Declared inside a class, outside methods | Declared inside a method, constructor, or block |
| Accessible by all methods of the class | Accessible only within the method/block where declared |
| Gets default values (`0`, `null`, `false`, ...) | Must be initialized before use — no default value |

### Local Variable
- Declared inside a block, method, or constructor for temporary needs.
- **Must be initialized before use** — no default value is given.
- Can be declared inside: a block, a method, a constructor.

```java
class Test {
    public static void main(String[] args) {
        int x;
        System.out.println(x);   // Compile-time error — not initialized; do int x = 10;
    }
}
```

**Q: What is the default value of a local variable?**

A: None — the programmer must explicitly assign a value before use.

### Variable Shadowing
If an instance variable and a local variable share the same name, the **local variable's value** is used inside that method this is called **variable shadowing**.

```java
public class A {
    String s = "xyz";   // instance variable

    public void display() {
        String s = "abc";          // local variable — shadows instance variable
        System.out.println(s);      // prints "abc"
        System.out.println(this.s); // prints "xyz" — use `this` to access the shadowed instance var
    }
}
```

### Summary — Possible Combinations
- Primitive Variable / Reference Variable
- Instance Variable / Static Variable / Local Variable

```java
class Test {
    int i = 10;                     // Instance variable
    static String s = "Sougata";    // Static variable
    public static void main(String[] args) {
        int x = 20;                 // Local variable
    }
}
```

---

## 3. Var-Args Methods

Used when you're **not sure how many arguments** the caller will provide.

```java
return-type methodName(int... x)
```

```java
class Test {
    public static void sum(int... x) {
        int total = 0;
        for (int x1 : x) total += x1;
        System.out.println(total);
    }
    public static void main(String[] args) {
        sum();          // total = 0
        sum(10);         // total = 10
        sum(10, 20);      // total = 30
    }
}
```
Internally implemented using a 1-D array: `sum(int[] x)`.

**Rules**
- Valid: `m1(int... x)`, `m1(int[] x)`
- Invalid: `m1(int x...)`, `m1(...int x)`
- Only **one** var-arg parameter allowed per method — `m1(int... x, double... d)` is invalid.
- A var-arg method **cannot be overloaded** with the same signature as `m1(int[] x)`.
- Var-arg methods have the **lowest priority** — called only when no other method matches.
- Var-args **can be mixed** with normal parameters, but the var-arg parameter **must come last**:
```java
void m1(String s, int... y) { }   // valid
```

---

## 4. Method Overloading

Same method name, different argument list, within the **same class**.

**Advantages:** improves readability, improves reusability.

**Rules**
1. Static methods can be overloaded.
2. **Exact match** gets highest priority.
3. If no exact match, Java performs **automatic promotion** (e.g. `char → int`).

```java
class Test {
    static void m1(int a) { }
    static void m1(float b) { }
}
// m1('a') -> char is promoted to int -> calls m1(int)
```

**Ways to overload:** different number of arguments, different types of arguments, different order of parameters.

### Worked Example
```java
class Calculator {
    public int add(int n1, int n2)              { return n1 + n2; }
    public double add(double n1, double n2)      { return n1 + n2; }
    public int add(int n1, int n2, int n3)       { return n1 + n2 + n3; }
}

public class MethodOverload {
    public static void main(String[] args) {
        Calculator obj = new Calculator();
        System.out.println(obj.add(2, 3));         // 5   -> int version
        System.out.println(obj.add(2.2, 3.3));     // 5.5 -> double version
        System.out.println(obj.add(2, 3, 4));       // 9   -> 3-arg version
    }
}
```

---

## 5. Operators & Assignment

### Increment / Decrement (`++` / `--`)

| Expression | Initial x | Value of y | Final x |
|---|---|---|---|
| `y = ++x` | 10 | 11 | 11 |
| `y = x++` | 10 | 10 | 11 |
| `y = --x` | 10 | 9 | 9 |
| `y = x--` | 10 | 10 | 9 |

**Rules**
- Applicable only to variables, not constants: `++10` is a compile-time error.
- Cannot be applied to `final` variables.
- Applicable to `int`, `char`, `double`... but **not** `boolean`.

### String Concatenation (`+`)
The only overloaded operator in Java.
```java
String a = "sam";
int b = 10, c = 20;
System.out.println(a + b + c);   // sam1020
System.out.println(c + b + a);   // 30sam
```

### Relational Operators `<, <=, >, >=`
```java
System.out.println(10 < 20);      // true
System.out.println('a' < 'A');    // false (ASCII 97 vs 65)
```
Boolean values **cannot** be compared: `true < false` → compile error.

### Equality Operators `==` , `!=`
```java
String s1 = new String("sam");
String s2 = new String("sam");
System.out.println(s1 == s2);        // false — compares references
System.out.println(s1.equals(s2));   // true  — compares content
```

### `instanceof`
```java
String s = "abc";
System.out.println(s instanceof String);   // true
```

### Logical vs Short-Circuit Operators

| Operator | Type | Behavior |
|---|---|---|
| `&` `\|` `^` | Non short-circuit | Both operands always evaluated |
| `&&` | Short-circuit AND | If first is `false`, second is skipped |
| `\|\|` | Short-circuit OR | If first is `true`, second is skipped |

### Bitwise Operators
```
4 = 100
5 = 101
4 & 5 = 100 = 4
4 | 5 = 101 = 5
4 ^ 5 = 001 = 1
```

### Assignment Operators
```java
int a = 10;                 // simple
int a, b, c, d;
a = b = c = d = 10;          // chained
// compound: += -= *= /= %= >>= <<=
```

### Ternary Operator (`?:`)
```java
int x = (10 < 20) ? 30 : 40;
System.out.println(x);   // 30

int y = (10 > 20) ? 30 : ((40 < 50) ? 60 : 70);
System.out.println(y);   // 60
```

### Worked Example

```java
import java.util.Scanner;

public class Ternary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();

        String grade = (marks > 80) ? "Excellent" :
                       (marks >= 60) ? "Good" :
                       (marks >= 30) ? "Average" : "Bad";

        System.out.println("Grade: " + grade);
        sc.close();
    }
}
```

---

## 6. Looping Statements

### While Loop — entry-controlled
```java
while (condition) {
    // statements
}
```
**Rules**
- Used when the number of iterations is not known in advance.
- Condition must be `boolean`.
- Entry-controlled → condition checked **before** the body runs.
- May execute **zero** times.
- Curly braces `{}` optional for a single statement — but you can't put a declaration statement alone without braces.

### Do-While Loop — exit-controlled
```java
do {
    // body
} while (condition);
```
**Rules**
- Executes the body **at least once**.
- Condition checked **after** the body runs.
- Semicolon `;` mandatory after `while(condition)`.

| `while` Loop | `do-while` Loop |
|---|---|
| Entry-controlled | Exit-controlled |
| Checked before body | Checked after body |
| May run zero times | Runs at least once |
| `while(condition){ }` | `do{ }while(condition);` |
| No trailing `;` | Trailing `;` required |

### For Loop — entry-controlled, iterations known
```java
for (initialization; condition; update) {
    // body
}
```
**Rules**
- Initialization executes **only once**.
- Condition must be `boolean`.
- Variable declared in initialization is **local to the loop**.
- Any of the 3 sections can be omitted.

```java
// All valid:
for (int i = 0; ; )                          { }
for ( ; a <= 10; )                            { }
for ( ; ; )                                    { }
for (i = 0, j = 1; i < 10 && j < 20; i++, j--) { }
```

### Enhanced For-Each Loop (Java 5+)
Traverses array/collection elements without an index variable.
```java
for (dataType variable : array) { }
```
```java
int[] x = {10, 20, 30, 40};
for (int i : x) System.out.println(i);   // 10 20 30 40

// 2-D array
int[][] m = { {1, 2}, {3, 4} };
for (int[] row : m) {
    for (int j : row) System.out.print(j + " ");
    System.out.println();
}
```

### `break` — terminates a loop or switch immediately
```java
for ( ; ; ) { break; }                              // directly
for ( ; ; ) { if (true) break; }                     // inside if
for ( ; ; ) { for ( ; ; ) { break; } }                 // breaks only the INNER loop
for ( ; ; ) { switch (1) { case 1: break; } }         // breaks the switch, not the loop
```

### `continue` — skips current iteration
✅ Usable only inside loops. ❌ Cannot be used inside `switch` alone.
```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    System.out.println(i);   // prints odd numbers
}
```

### `break` vs `continue`

| break | continue |
|---|---|
| Usable in loops and `switch` | Usable only in loops |
| Terminates loop immediately | Skips current iteration, continues next |

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    System.out.println(i);   // prints 1 2 3 4
}
for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;
    System.out.println(i);   // prints 1 2 3 4 6 7 8 9 10
}
```

---

## 7. Selection Statements

### if / if-else / if-else-if / nested-if
```java
if (condition) { }
else if (condition2) { }
else { }
```

### Switch Statement
Tests a variable for equality against a list of values (**cases**). Supported types: `byte, short, char, int, String, enum`.

| Rule | Description |
|---|---|
| Braces optional for a single case statement | `case 1: System.out.println("One"); break;` |
| Case label must be a **constant expression** | ✅ `case 10:` ❌ `case y:` (unless `y` is `final`) |
| Duplicate case labels not allowed | Every case value must be unique |
| `break` is optional | Without it, control **falls through** to the next case |
| `default` is optional | Runs when no case matches |
| Switch expression & case types must be compatible | `byte b = 10; switch(b){ case 10: }` |

```java
byte x = 1;
switch (x) {
    case 1: System.out.println("JAN"); break;
    case 2: System.out.println("FEB"); break;
    default: System.out.println("Invalid");
}
```

**Fall-through** (used for code reuse):
```java
switch (day) {
    case 1: case 2: case 3: case 4: case 5:
        System.out.println("Weekday"); break;
    case 6: case 7:
        System.out.println("Weekend"); break;
}
```

### if-else vs switch

| if-else | switch |
|---|---|
| Based on boolean expression | Based on value/expression match |
| Good for ranges/multiple conditions | Good for fixed choices |

---

## 8. Arrays

An **array** is an indexed collection of a fixed number of **homogeneous** (same-type) elements.

**Advantages:** single variable for multiple values, contiguous memory, fast indexed access, simple to use.
**Disadvantages:** fixed size, stores only homogeneous elements.

```java
// Index : 0   1   2   3
// Value : 10 20 30 40
// First index = 0, Last index = length - 1

int[] arr = {10, 20, 30};    // Index: 0 1 2
int[] a;                      // declaration
int[] x = new int[5];         // declaration + creation
int[][] a2 = new int[3][5];   // 2-D
int[] x2 = {10, 20, 30, 40};  // initialization
```

- `array.length` — final field, gives array size.
- `string.length()` — a **method**, not a field.

**Anonymous array** — array without a name:
```java
new int[]{10, 20, 30};
```

### 2-D Array — Declaration Syntax Variants
```java
int[][] a;
int [][]a;
int a[][];
int[] []a;
int [][] a;
int[] a[];
```
Multidimensional arrays are actually **arrays of arrays** (rows and columns).

**Example — 2-D array addition:**
```java
int[][] c = new int[2][2];
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
        c[i][j] = a[i][j] + b[i][j];
```

---

## 9. Access Modifiers 

Referenced throughout the notes (`public`, `private`, `protected`, default) — summarized here since it wasn't centralized:

| Modifier | Same Class | Same Package | Subclass (different package) | Different Package |
|---|---|---|---|---|
| `private` | ✅ | ❌ | ❌ | ❌ |
| default (no modifier) | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

- **Top-level classes** may only be `public` or default (not `private`/`protected`).
- While **overriding**, a subclass method cannot reduce the parent method's visibility (can only keep the same or widen it).

---

## 10. Object-Oriented Programming (OOP)

OOP organizes software around **objects** rather than functions.

```
Class
 |-- Variables
 |-- Methods
 |-- Constructors
```

### Object
An object is a **real-world entity** and an instance of a class, used to access non-static members. It has **identity, behaviour, and state**.

| Property | Meaning | Example |
|---|---|---|
| Identity | Name / unique identification | Car1 |
| Behaviour | Functionality (methods) | `start()`, `stop()` |
| State | Values (data) | Red colour, Speed = 60 |

```java
Box b1 = new Box();
Box b2 = b1;                    // b1 and b2 refer to the SAME object
System.out.println(b1 == b2);   // true

Box b3 = new Box();
System.out.println(b1 == b3);   // false — different objects
```

**Can a top-level class be `private`?**
No — it would be inaccessible outside the file → compile-time error.

**Immutable class** — object state cannot change after creation (e.g. `String`). Benefits: security, thread-safety.

**Singleton class** — allows only **one** object to be created. Used in Runtime, Logger, Service-locator patterns.

### Object Class — root of all classes
| Method | Purpose |
|---|---|
| `toString()` | String representation of object |
| `hashCode()` | Returns hash code |
| `equals()` | Compares objects |
| `wait()` | Makes thread wait |
| `notify()` | Wakes a waiting thread |

### How Are Objects Passed to Methods?
Java is **always pass-by-value** — for objects, the **value of the reference** (i.e. a copy of the pointer) is passed. So changes to the object's **state** are visible outside the method, but reassigning the parameter itself does not affect the caller's reference.

```java
class Box { int x = 10; }

class Test {
    static void change(Box b) { b.x = 100; }   // modifies the SAME object's state

    public static void main(String[] args) {
        Box obj = new Box();
        change(obj);
        System.out.println(obj.x);   // 100 — state change is visible
    }
}
```

### In How Many Ways Can You Create an Object in Java?
**4 ways:**
1. **`new` operator** — `Employee obj = new Employee();`
2. **Factory method** — `NumberFormat obj = NumberFormat.getNumberInstance();`
3. **`newInstance()`** (reflection) — `Employee obj = (Employee) Class.forName("Employee").newInstance();`
4. **Cloning** an existing object — `Employee obj2 = (Employee) obj1.clone();` (requires implementing `Cloneable`)

---

## 11. Inner Classes

### Inner Class vs Sub Class

| Inner Class | Sub Class |
|---|---|
| Class within another class | Class that `extends` another |
| Logical grouping | Inheritance / reusability |
| Can access all outer members | — |

### Types

**1. Normal (Regular) Inner Class** — a named class declared directly inside a class, without `static`.
```java
class Outer {
    class Inner { }
}
```

**2. Method-Local Inner Class** — declared inside a method.
```java
class Test {
    void m1() {
        class Inner { }
    }
}
```

**3. Anonymous Inner Class** — no name, instantiated in one statement, used once.
```java
Runnable r = new Runnable() {
    public void run() { System.out.println("Running..."); }
};
```

**4. Static Nested Class** — declared with `static`.
```java
class Outer {
    static int x = 10;
    static class Inner {
        void m1() { System.out.println(x); }   // can access only static members
    }
}
Outer.Inner n = new Outer.Inner();   // instantiated WITHOUT an Outer object
```

**Why use inner classes?** Better encapsulation, logical grouping, readability — widely used in GUI/event handling.

### Worked Example — Inner Class Accessing Outer's Members
```java
class Car {
    private String model = "Honda City";

    class Engine {
        void start() {
            System.out.println(model + " engine has started");   // accesses outer's field
        }
    }

    void drive() {
        Engine engine = new Engine();
        engine.start();
        System.out.println("Car is driving");
    }
}

public class InnerClass {
    public static void main(String[] args) {
        Car car = new Car();
        car.drive();
        // Output:
        // Honda City engine has started
        // Car is driving
    }
}
```

### Normal Class vs Anonymous Inner Class

| Normal Java Class | Anonymous Inner Class |
|---|---|
| Can extend only one class at a time | Can also extend only one class at a time |
| Can implement multiple interfaces simultaneously | Can implement only one interface at a time |
| Can extend a class AND implement multiple interfaces together | Can either extend a class OR implement an interface, not both |
| Can have any number of constructors | Cannot have constructors (no name) |
| Has a class name | Has no class name |
| Reusable via multiple objects | Generally one-time use |

### Normal Inner Class vs Static Nested Class

| Normal Inner Class | Static Nested Class |
|---|---|
| Cannot exist without an outer class object | Can exist without an outer class object |
| Cannot declare static members | Can declare static members |
| Cannot declare `main()` | Can declare `main()` |
| Can access both static and non-static outer members | Can access only static outer members directly |

### IS-A vs HAS-A
```java
// IS-A (inheritance)
class Dog extends Animal { }

// HAS-A (composition)
class Car {
    Engine e = new Engine();
}
```

---

## 12. Constructors

A **constructor** is a special member function executed automatically at object creation, used to initialize the object.

### Rules
1. Constructor name = class name.
2. **No return type** — not even `void`.
3. Constructors **can be overloaded**.
4. Constructors are **not inherited**.
5. A constructor can call the parent's constructor via `super()`.
6. Multiple constructors with different signatures are allowed.

```java
class Test {
    Test()             { }
    Test(int x)         { }
    Test(String s)       { }
}
```

**Q: Does a constructor return any value?**
A: ✅ Yes — implicitly, the current class object (instance) itself.

**Q: Can a constructor do things other than initialization?**
A: ✅ Yes — it can create objects, start a thread, call methods, open files/connections.

### Types

**Default (No-Arg) Constructor** — the compiler auto-generates one if you don't write any constructor.
```java
class Test {
    Test() { System.out.println("constructor"); }
    public static void main(String[] args) {
        Test t = new Test();   // prints "constructor"
    }
}
```

**Parameterized Constructor**
```java
class Test {
    String name;
    Test(String s) { name = s; }
}
Test t1 = new Test("Ravi");
Test t2 = new Test("Kiran");   // each object initialized differently
```

| Default Constructor | Parameterized Constructor |
|---|---|
| No parameters | One or more parameters |
| Same initial data for all objects | Different data per object |

### Constructor Chaining — calling one constructor from another
```java
class Test {
    Test() { }
    Test(int x) { this(); }   // this() must be the FIRST statement
}
```

### `this()`/`super()` vs `this`/`super`

| `this()` / `super()` | `this` / `super` |
|---|---|
| Constructor calls | Keywords referring to objects |
| Only inside constructors, must be first statement | Usable almost anywhere (not static context) |
| Only one allowed per constructor | Can be used multiple times |

**Rule:** `this()` and `super()` cannot both appear — only one can be the first statement.

### Constructors & Inheritance
- Constructors are **not inherited**.
- **Overloading** possible; **overriding** is **not** possible.
- Abstract classes **can** have constructors; interfaces **cannot**.
- **Recursive constructor invocation** → compile-time error:
```java
class Test {
    Test() { this(10); }
    Test(int i) { this(); }   // Compile-time error
}
```
- Constructors **cannot** be called directly from a normal method:
```java
public void m1() {
    super();   // Error
}
```

### Anonymous Object — object without a reference variable
```java
new Test();
```

### Constructor vs Destructor

| Constructor | Destructor |
|---|---|
| Runs on object creation | Runs on object destruction |
| Can be overloaded | Cannot be overloaded |
| Available in Java | Not explicitly available (GC handles cleanup) |

### Constructor vs Method

| Constructor | Method |
|---|---|
| Name must match the class name | Name can be same or different |
| Called during object creation | Called after object creation |
| Called only once per object creation | Can be called multiple times |
| No return type | Must have a return type (or `void`) |
| Invoked implicitly | Invoked explicitly |

---

## 13. Garbage Collection (GC)

**Definition:** GC automatically destroys unreferenced objects and frees memory.

- Can be **requested** (not forced) via `System.gc()` or `Runtime.getRuntime().gc()`.
- Java is automatically garbage-collected, so **Java does not have destructors**.

### Ways an object becomes eligible for GC
1. **Nullifying reference:** `s1 = null;`
2. **Reassigning reference:** `s1 = s2;` (old object referenced by `s1` becomes eligible)
3. **Local object out of scope:** object created inside a method, eligible after the method returns.
4. **Island of Isolation:** a group of objects reference each other but are unreachable from outside → all become eligible.

```java
class Test {
    Test i;
    public static void main(String[] args) {
        Test t1 = new Test(), t2 = new Test(), t3 = new Test();
        t1.i = t2; t2.i = t3; t3.i = t1;
        t1 = null; t2 = null; t3 = null;   // island of isolation, all eligible for GC
    }
}
```

### `finalize()`
```java
protected void finalize() throws Throwable {
    // cleanup code
}
```
- Defined in `java.lang.Object`; called by GC just before destroying an object.
- Called **at most once**; should never be invoked directly by the programmer.
- It is `protected` so subclasses can override it, while preventing unrestricted access from outside the class.

### Runtime Class
Bridge between a Java application and the JVM — **singleton**, one `Runtime` object per JVM.
```java
Runtime r = Runtime.getRuntime();
```

**Q: Can memory leaks happen in Java despite GC?**
A: **Yes** — if the application keeps live references to unused objects, GC cannot reclaim them.
```java
List<Object> list = new ArrayList<>();
while (true) { list.add(new Object()); }   // memory leak
```

---

## 14. Wrapper Classes / Boxing

A **Wrapper Class** wraps a primitive data type in an object. All wrapper class objects are **immutable** — once created, the value cannot change.

**Objectives:** convert primitives into objects; provide utility methods for primitive types.

| Primitive Type | Wrapper Class |
|---|---|
| byte | Byte |
| short | Short |
| int | Integer |
| long | Long |
| float | Float |
| double | Double |
| char | Character |
| boolean | Boolean |

### Utility Methods

**1. `valueOf()`** — creates a wrapper object from a primitive or String.
```java
Integer i = Integer.valueOf(10);
Integer j = Integer.valueOf("20");
```

**2. `xxxValue()`** — get primitive value from wrapper object.
```java
Integer i = new Integer(10);
System.out.println(i.intValue());    // 10
System.out.println(i.longValue());   // 10
```

**3. `parseXxx()`** — converts a String into a primitive.
```java
int x = Integer.parseInt("100");
System.out.println(x);   // 100
```

**4. `toString()`** — converts wrapper/primitive to String.
```java
Integer i = new Integer(10);
String s = i.toString();
```

### Autoboxing and Auto-Unboxing

**Autoboxing** — automatic conversion of primitive → wrapper object by the compiler.
```java
Integer I = 10;   // compiler internally does: Integer I = Integer.valueOf(10);
```

**Auto-Unboxing** — automatic conversion of wrapper object → primitive by the compiler.
```java
Integer I = new Integer(10);
int i = I;   // auto-unboxing
```

**Immutability of wrapper objects:**
```java
Integer x = 10;
Integer y = x;
x++;
System.out.println(x);        // 11
System.out.println(y);        // 10
System.out.println(x == y);   // false — x now points to a NEW Integer object
```

---

## 15. `==` vs `equals()`

| `==` Operator | `equals()` Method |
|---|---|
| An **operator**, works on both primitives and objects | A **method**, works only on objects |
| For objects, performs **reference comparison** | Default (in `Object`) also performs reference comparison |
| Cannot be overridden | **Can** be overridden for content comparison |
| Generally used for reference comparison | Generally used for content comparison |

```java
String s1 = new String("Java");
String s2 = new String("Java");
System.out.println(s1 == s2);       // false
System.out.println(s1.equals(s2));  // true
```

---

## 16. Static Block

A **static block** is a nameless block declared inside a class using `static`.

```java
class Test {
    static {
        System.out.println("Static Block");
    }
}
```

### Rules
1. **Multiple static blocks allowed** — they execute in the order they're written.
```java
class Test {
    static { System.out.println("Block-1"); }
    static { System.out.println("Block-2"); }
}
```
2. Static block executes **before `main()`**.
3. Static blocks can execute even without a `main()` method (older Java versions allowed this for simple execution).
4. Static block can access **only static members** directly.

** Execution order when an object is created:**
`static block` (once, at class loading) → `instance initializer block` → `constructor`.

---

## 17. Enum

Used to represent a **fixed set of constants**.

```java
enum Month { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC }
```

- Every constant is implicitly `public static final` and represents an **object**.
- Can be declared: inside a class, outside a class (top-level), inside an interface — **never inside a method**.
- **Cannot** create enum objects using `new`.

### Rules
1. Enum can be declared inside or outside a class, but **not** inside a method.
```java
enum X { }         // top-level
class Y { }

class X {
    enum Y { }      // nested inside a class
}
```
2. If declared **outside** a class, allowed modifiers: `public`, default, `strictfp`.
3. If declared **inside** a class, it can also take access modifiers like `private`/`protected`.
4. **Enum constants must be declared first** — before any methods/fields.
```java
enum Fish {
    STAR, GUPPY;      // constants first
    public void m1() { }
}
```

### `values()` — returns all constants
```java
enum Beer { KF, KO, RC }
for (Beer b : Beer.values()) System.out.println(b);
```

### `ordinal()` — returns index/position
```java
System.out.println(Beer.KF.ordinal());   // 0
System.out.println(Beer.KO.ordinal());   // 1
```

### Constructors in enum
```java
enum Beer {
    KF, KO, RC;
    Beer() { System.out.println("Constructor"); }   // called for each constant
}
```

### Worked Example — enum in a switch
```java
package pkg1;

enum Operation { ADD, SUBTRACT, MULTIPLY }

public class Enums {
    public static void main(String[] args) {
        Operation op = Operation.MULTIPLY;
        int a = 10, b = 5;
        switch (op) {
            case ADD:       System.out.println("Result: " + (a + b)); break;
            case SUBTRACT:  System.out.println("Result: " + (a - b)); break;
            case MULTIPLY:  System.out.println("Result: " + (a * b)); break;   // Result: 50
        }
    }
}
```

### Enum vs Constructor

| Enum | Constructor |
|---|---|
| Special data type for a fixed set of constants | Special member used to initialize objects |
| Created using the `enum` keyword | Name must match the class name |
| Can contain variables, methods, constructors | Exists inside a class only |
| Constants are created automatically | Objects created via `new` |
| Cannot create enum objects with `new` | Objects created via constructors |

---

## 18. Packages & Imports

A **package** is a container for classes, interfaces, enums, and sub-packages.

### Advantages
- Resolves **naming conflicts** — two classes can share a name if they're in different packages.
- Packages can contain **hidden (default-access) classes** — accessible only within the same package.
- Improves **modularity** — related classes/interfaces grouped together.
- Improves **maintainability and reusability**.
- Provides **security (access protection)** via package-level access control.

### Rules
1. At most **one** `package` statement per file.
2. It must be the **first statement** in the file.

### Class-Level Modifiers (top-level classes)
| Modifier | Meaning |
|---|---|
| `public` | Accessible everywhere |
| (default) | Package-private |
| `final` | Cannot be inherited |
| `abstract` | Cannot be instantiated |

### Import vs Static Import

| Import | Static Import |
|---|---|
| Imports classes/interfaces | Imports static members |
| `import java.util.Date;` | `import static java.lang.Math.*;` |
| From the beginning of Java | Introduced in Java 1.5 |

- `import java.util.*;` imports only classes **directly** inside `java.util` — sub-packages are **not** imported automatically.
- Two imported packages with the same class name → compile-time ambiguity error.
- **File name rule:** the file name must exactly match the `public` class name.

### 3 Ways to Access a Class From Another Package
1. **Import all classes** of a package: `import java.util.*;`
2. **Import a specific class**: `import java.util.ArrayList;`
3. **Fully qualified name** (no import needed): `java.util.ArrayList list = new java.util.ArrayList();`

---

## 19. Abstraction

**Definition:** Hiding internal implementation and complexity, showing only essential features to the user.

**Example — ATM Machine:** the user only sees "Withdraw", "Deposit", "Check Balance" — not the underlying logic.

**Advantages**
1. **Security** — internal implementation is hidden.
2. **Easy Enhancement** — implementation can change without affecting the user.
3. **Better Maintainability**.

### Abstract Class vs Abstract Method

| Abstract Class | Abstract Method |
|---|---|
| A class declared with `abstract` | A method declared with `abstract` |
| Can contain both abstract and concrete methods | Only declaration, no implementation |
| Cannot be instantiated | Must be implemented by the subclass |
| Can have constructors, variables, static methods | Cannot have a method body |
| Used to achieve **partial** abstraction | Used to **enforce** abstraction |

### IS-A vs HAS-A

| IS-A Relationship | HAS-A Relationship |
|---|---|
| Represents Inheritance | Represents Composition/Aggregation |
| Used for complete functionality of another class | Used for part functionality of another class |
| Achieved with `extends` | Achieved by holding another class as a member |
| Example: Dog IS-A Animal | Example: Car HAS-A Engine |
| Strong relationship | Weak relationship |

---

## 20. Internationalization (I18N)

Designing an app to adapt to different languages/regions without major code changes.

**Key classes:** `Locale`, `NumberFormat`, `DateFormat`, `Currency`

```java
Locale l = new Locale("en", "US");

NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.ITALY);
System.out.println(nf.format(123456.789));   // Italy-specific currency form

SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
System.out.println(sdf.format(new Date()));   // e.g. 2026-08-18
```

---

## 21. Polymorphism

**One task performed in different ways.**

| Static (Compile-Time) Polymorphism | Dynamic (Run-Time) Polymorphism |
|---|---|
| Method Overloading, Constructor Overloading | Method Overriding |

```java
// Overloading
class Test {
    void m1() { }
    void m1(int x) { }
    void m1(String s) { }
}

// Overriding
class Parent { void show() { System.out.println("Parent"); } }
class Child extends Parent { void show() { System.out.println("Child"); } }
```

### Overloading vs Overriding

| Feature | Overloading | Overriding |
|---|---|---|
| Inheritance required | No | Yes |
| Method name | Same | Same |
| Parameters | Must differ | Must be same |
| Return type | Can differ | Same or covariant |
| Binding | Compile-time | Runtime |
| Static methods | Can be overloaded | Cannot be overridden (only hidden) |

### Worked Example — Overriding with `super`
```java
package pkg1;

class Calculators {
    public int add(int n1, int n2) {
        System.out.println("Inside Calculator add()");
        return n1 + n2;
    }
}

class AdvancedCalculator extends Calculators {
    @Override
    public int add(int n1, int n2) {
        System.out.println("Inside AdvancedCalculator add()");
        return (int) (super.add(n1, n2) + (n1 * 0.01));   // calls parent's version too
    }
}

public class MethodOverride {
    public static void main(String[] args) {
        Calculators obj = new AdvancedCalculator();   // upcasting
        int res = obj.add(2, 3);
        System.out.println("Result: " + res);
    }
}
```

---

## 22. Method Overriding — Rules

```java
class Animal {
    void move() { }
    void eat()  { }
}
class Dog extends Animal {
    void move() { super.move(); }   // overriding + calling parent's version
    void bark() { }
}
```

1. Overriding = **runtime polymorphism** / late binding.
2. Method **signature must match exactly**.
3. Return type must be same, or (since Java 5) a **covariant** subtype.
4. Child method **cannot reduce visibility** of the parent method.
```java
class P { protected void m1() { } }
class C extends P { public void m1() { } }   // Valid — widened access
```
5. **`final`** methods cannot be overridden.
6. **Abstract** methods must be overridden by a concrete child (or the child stays abstract).
7. A non-abstract method **can** be overridden as abstract if the child class itself is abstract.
8. **Static methods cannot be overridden** — this is "method hiding", not overriding.

### Method Hiding vs Overriding

| Method Hiding | Method Overriding |
|---|---|
| Both methods `static` | Both methods non-static |
| Resolved by compiler | Resolved by JVM |
| Compile-time | Runtime |

---

## 23. Abstract Methods & Abstract Classes

### Abstract Method — declaration only, no body
```java
public abstract void m1();
```
- A method with **no implementation** — only declaration.
- Must end with `;` — no `{ }` body allowed.
- Can have any return type, and modifiers like `public`/`protected`.
- Invalid: `abstract static void m1();`

### Abstract Class
```java
abstract class Vehicle { }
```
1. **Cannot be instantiated** directly: `new Vehicle();` → compile-time error.
2. May contain abstract **and** concrete methods, variables, and constructors.
3. Subclass **must implement all abstract methods**, or itself be abstract.
4. **Can** have a constructor.
5. **Can** have static methods and **final** methods.

### Worked Example
```java
package pkg1;

abstract class BankAccount1 {
    abstract void calculateInterest();          // abstract

    void accountType() {                         // concrete
        System.out.println("This is a bank account");
    }
}

class SavingsAccount extends BankAccount1 {
    @Override
    void calculateInterest() { System.out.println("Interest for Savings Account is 4%"); }
}

class CurrentAccount extends BankAccount1 {
    @Override
    void calculateInterest() { System.out.println("Current Account has no interest"); }
}

public class Abstract {
    public static void main(String[] args) {
        BankAccount1 account1 = new SavingsAccount();
        account1.calculateInterest();
        account1.accountType();

        BankAccount1 account2 = new CurrentAccount();
        account2.calculateInterest();
        account2.accountType();
    }
}
```

### Valid/Invalid combinations
| Combination | Valid? |
|---|---|
| `abstract` method + `final` | ❌ No |
| `abstract` class + `final` | ❌ No |
| `final class extends abstract class` | ✅ Yes |
| `abstract class` contains `final` method | ✅ Yes |
| `final static` variable | ✅ Yes |

---

## 24. Final Keyword (Variable / Method / Class) 

`final` has three uses, referenced separately throughout the notes — grouped here for clarity.

| Applied to | Effect |
|---|---|
| **Variable** | Value cannot be reassigned once set |
| **Method** | Cannot be overridden by a subclass |
| **Class** | Cannot be extended/inherited |

### Final Variable
```java
final int x = 10;
// x = 20;   // Compile-time error
```

**Final instance variable** — initialization is compulsory (JVM gives no default). Can be initialized:
1. At declaration: `final int x = 10;`
2. In an instance initializer block: `{ x = 10; }`
3. In the constructor: `Test() { x = 10; }`

**Final local variable** is also valid: `final int x = 10;`

### Abstract vs Final
| Abstract | Final |
|---|---|
| Incomplete implementation | Complete implementation |
| Must be inherited | Cannot be inherited |
| Requires overriding | Prevents overriding |

### `final` vs `finally` vs `finalize()`
| `final` | `finally` | `finalize()` |
|---|---|---|
| Keyword | Block | Method |
| Restriction (no override/no reassign) | Cleanup code | GC callback |
| Inheritance control | ❌ | ❌ |
| Exception handling | ❌ | ✅ | ❌ |

---

## 25. Interfaces

An interface is a collection of abstract methods and constants — used to achieve **100% abstraction** (traditionally).

Also achieves **multiple type inheritance**, since Java classes can't extend multiple classes.

### Characteristics
- Interface **variables** are implicitly: `public static final`
- Interface **methods** are implicitly: `public abstract` (traditional interfaces)
```java
interface I { void m1(); }
// same as:
interface I { public abstract void m1(); }

interface I { int x = 10; }
// same as:
interface I { public static final int x = 10; }
```

### Implementing & Inheriting
```java
class A extends B implements C, D, E { }   // extends = class, implements = interface(s)

interface A { }
interface B extends A { }        // interface extending interface
interface C extends A, B { }     // multiple interface inheritance — allowed!
```
- A class can implement **any number** of interfaces.
- If a class doesn't implement all interface methods, it must be declared `abstract`.

### Worked Example — Nested Interface
```java
interface OuterInterface {
    int OUTER_VALUE = 10;   // implicitly public static final

    interface InnerInterface {
        String MESSAGE = "Hello from Inner Interface";
        void methodOne();
        void methodTwo();
    }
}

class InterfaceDemo implements OuterInterface.InnerInterface {
    public void methodOne() {
        System.out.println("Outer Value: " + OuterInterface.OUTER_VALUE);
    }
    public void methodTwo() {
        System.out.println("Message: " + MESSAGE);
    }
}

public class Interfaces {
    public static void main(String[] args) {
        InterfaceDemo obj = new InterfaceDemo();
        obj.methodOne();   // Outer Value: 10
        obj.methodTwo();   // Message: Hello from Inner Interface
    }
}
```

### Marker Interface
Contains **no** methods and **no** variables — provides metadata to JVM/framework.
Examples: `Cloneable`, `Serializable`, `Remote`, `EventListener`.

### Functional Interface
Contains **exactly one** abstract method.
```java
interface I { void m1(); }
```

### Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---|---|---|
| Constructor | ✅ Yes | ❌ No |
| Instance Variable | ✅ Yes | ❌ No |
| Static Variable | ✅ Yes | ✅ Yes |
| Concrete Method | ✅ Yes | Traditionally No (default methods since Java 8) |
| Abstract Method | ✅ Yes | ✅ Yes |
| Multiple Inheritance | ❌ No | ✅ Yes |
| Object Creation | ❌ No | ❌ No |

---

## 26. Inheritance & Object Class

### Advantages
1. **Code Reusability**
2. **Method Overriding**
3. **Runtime Polymorphism**

### Why Java doesn't support multiple inheritance (via classes)
```java
class A { void m1() { System.out.println("A"); } }
class B { void m1() { System.out.println("B"); } }
// class C extends A, B { }   // NOT allowed — ambiguity: which m1()?
```
✅ Java achieves multiple inheritance **through interfaces**:
```java
interface A { void m1(); }
interface B { void m1(); }
class C implements A, B {
    public void m1() { System.out.println("Implementation"); }
}
```

### Object Class
Every class implicitly extends `java.lang.Object`:
```java
class Test { }
// treated as:
class Test extends Object { }
```

### HAS-A Relationship
| Composition (Strong HAS-A) | Aggregation (Weak HAS-A) |
|---|---|
| Contained object **cannot** exist without container | Contained object **can** exist independently |
| Example: University → Department | Example: Department → Professor |

---

## 27. `this` and `super`

### `this` — refers to the current object
- `this` **cannot** be used in a `static` context (no current object exists there).
- `this()` is used for **constructor chaining**.

```java
class A {
    String name;
    A(String name) { this.name = name; }   // distinguishes instance vs local var
    void m1() { System.out.println("M1"); }
    void m2() { this.m1(); }                // invoke current class method
}
```

### `super` — refers to the immediate parent object
```java
class Animal { String colour = "White"; }
class Dog extends Animal {
    String colour = "Black";
    void printColour() {
        System.out.println(colour);         // Black
        System.out.println(super.colour);   // White
    }
}
```

| Feature | `this` | `super` |
|---|---|---|
| Refers to | Current object | Parent object |
| Constructor call | `this()` | `super()` |

**Q: Can `this()` and `super()` be used together in one constructor?**
A: **No** — both must be the first statement, so only one can appear.

**Q: Why is data hiding achieved using `private`?**
A: To prevent direct access to class data from outside the class.

---

## 28. Type Casting (Upcasting / Downcasting) 

Referenced implicitly in overriding/polymorphism but never spelled out — added here.

```java
class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("Dog barks"); }
    void run()   { System.out.println("Dog runs fast"); }
}

public class Casting {
    public static void main(String[] args) {

        // Upcasting (Child -> Parent) — implicit, always safe
        Animal a = new Dog();
        a.sound();   // "Dog barks" — runtime polymorphism picks the actual object's method

        // Downcasting (Parent -> Child) — explicit, needed to access child-only members
        Dog d = (Dog) a;
        d.sound();   // "Dog barks"
        d.run();     // "Dog runs fast" — only accessible after downcasting
    }
}
```

- **Upcasting** happens automatically; you lose access to the subclass-only methods through the parent reference (though the overridden method still runs via dynamic dispatch).
- **Downcasting** requires an explicit cast and throws `ClassCastException` at runtime if the object isn't actually an instance of the target type.

---

## 29. Coupling & Cohesion

### Coupling — dependency **between** classes/modules (lower is better)

**Tight Coupling**
```java
class Engine { }
class Car { Engine e = new Engine(); }   // Car directly depends on Engine
```
Difficult to maintain/test, less flexible.

**Loose Coupling**
```java
interface Engine { void start(); }
class PetrolEngine implements Engine {
    public void start() { System.out.println("Petrol Engine"); }
}
class Car {
    Engine e;
    Car(Engine e) { this.e = e; }   // dependency injected
}
```
Easier maintenance, testing, and scalability.

### Cohesion — how focused responsibilities are **within** a class (higher is better)
```java
class Calculator {
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
}
```

| Coupling | Cohesion |
|---|---|
| Between classes | Within a class |
| Lower is better | Higher is better |

---

## 30. Exception Handling

**Definition:** handling runtime errors so normal execution can continue gracefully.

```java
try {
    int a = 10, b = 0;
    System.out.println(a / b);   // throws ArithmeticException
} catch (Exception e) {
    // handling code
}
```

### Exception Hierarchy
```
Object
 └── Throwable
      ├── Exception
      │     ├── IOException          (checked)
      │     ├── SQLException         (checked)
      │     └── RuntimeException     (unchecked)
      │           ├── ArithmeticException
      │           └── NullPointerException
      └── Error
            ├── StackOverflowError
            └── OutOfMemoryError
```

| Exception | Error |
|---|---|
| Can be handled | Typically not effectively handleable |
| Application-level | JVM/System-level |
| Example: `IOException` | Example: `OutOfMemoryError` |

### Printing Exception Info
```java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    e.printStackTrace();                 // name + description + stack trace
    System.out.println(e.toString());    // class name + description
    System.out.println(e.getMessage());  // description only
}
```

### Multiple Catch Blocks — **specific before general**
```java
try {
    // risky code
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Error");
} catch (NullPointerException e) {
    System.out.println("Null Error");
} catch (Exception e) {
    System.out.println("General Error");
}
```
- Two catch blocks for the **same** exception type → compile error.

### `finally` Block — always runs (cleanup)
```java
try {
    int x = 10 / 2;
} catch (Exception e) {
    System.out.println(e);
} finally {
    System.out.println("Cleanup code");
}
```
- `try` **without** `catch` is valid **if** `finally` is present.
- `try` alone (no `catch`, no `finally`) is **invalid**.

### `throw` vs `throws`
```java
int age = 15;
if (age < 18) throw new ArithmeticException("Not eligible");
// statements after throw are NOT executed

void m1() throws IOException, SQLException, ClassNotFoundException { }
```

| `throw` | `throws` |
|---|---|
| Explicitly throws one exception object | Declares possible exceptions in signature |
| Used in method body | Used in method declaration |
| One at a time | Multiple can be declared |

### try-with-resources (Java 7+) 
Automatically closes any resource implementing `AutoCloseable` (e.g. `FileReader`, `FileWriter`, `Scanner`) — no need for a manual `finally { close(); }`.
```java
try (FileReader fr = new FileReader("abc.txt")) {
    int i;
    while ((i = fr.read()) != -1) System.out.print((char) i);
}   // fr.close() is called automatically, even if an exception occurs
catch (IOException e) {
    e.printStackTrace();
}
```

---

## 31. Multithreading

### Two Ways to Create a Thread
```
                Thread
          /                    \
   Extends                  Implements
 Thread Class          Runnable Interface
          \                    /
             Override run()
                    |
                 start()
```

**1. Extending `Thread`**
```java
class ThreadOne extends Thread {
    public void run() {
        for (int i = 1; i <= 50; i++) System.out.println("Hi");
    }
}
class ThreadTwo extends Thread {
    public void run() {
        for (int i = 1; i <= 50; i++) System.out.println("Hello");
    }
}

public class Threads {
    public static void main(String[] args) {
        ThreadOne t1 = new ThreadOne();
        ThreadTwo t2 = new ThreadTwo();
        t2.setPriority(Thread.MAX_PRIORITY);
        t1.start();
        t2.start();
    }
}
```

**2. Implementing `Runnable`**
```java
class ThreadDemo implements Runnable {
    public void run() { System.out.println("child thread"); }
}
Thread t = new Thread(new ThreadDemo());
t.start();
```

**Q: Which method does a thread execute by default?**
A: `public void run()`

**Q: How can you stop/terminate a thread?**
A: There's no direct "stop" — use a `boolean` flag checked inside `run()`.

**Q: What happens if `run()` is called directly instead of `start()`?**
A: It behaves like a normal method call, executing on the **current** thread — no new thread is created.

```java
A t1 = new A();
t1.start();
// t1.start();   // NOT allowed — a thread cannot be started twice
```

### `start()` vs `run()`

| `start()` | `run()` |
|---|---|
| Creates a **new** thread | Just a normal method call |
| Registers with the scheduler | Runs on the **current** (calling) thread |

### Thread Lifecycle
```
Newborn --start()--> Runnable --scheduler--> Running --> Dead
                                    |
                              Waiting/Blocked
```
Only a **Runnable**-state thread can be scheduled to run.

### Thread Control Methods
| Method | Purpose |
|---|---|
| `yield()` | Hint to let other same-priority threads run (no guarantee) |
| `join()` | Wait for another thread to finish |
| `sleep(ms)` | Pause current thread for a fixed time |

```java
Thread.sleep(1000);
t2.join();
Thread.yield();
```

| `sleep()` | `join()` |
|---|---|
| Time-based wait | Waits for thread completion |
| Static method | Instance method |

### Priorities
```java
MyThread t = new MyThread();
t.setPriority(10);
t.start();
```

### Daemon Thread — background support thread (e.g. Garbage Collector)
```java
MyThread t = new MyThread();
t.setDaemon(true);
t.start();
```

### Synchronization
Prevents **race conditions** when multiple threads access shared data.
```java
public void display() {
    synchronized (this) {   // critical section only
        // ...
    }
}
```

**Ways to acquire a lock:**
1. Current object lock — `synchronized(this)`
2. Particular object lock — `synchronized(obj)`
3. Class-level lock — `synchronized(Display.class)`

| `notify()` | `notifyAll()` |
|---|---|
| Wakes one waiting thread | Wakes all waiting threads |
| Better performance | More overhead |

`suspend()`/`resume()` — deprecated/unsafe, may cause deadlocks.

### Thread Pool (Executor Framework)
A **thread pool** is a collection of pre-created, reusable threads ready to execute tasks.

**Advantages:** improves performance, reduces memory consumption, reuses existing threads, faster task execution, better resource management.

```java
class MyTask implements Runnable {
    public void run() { System.out.println("Task executed"); }
}

ExecutorService executor = Executors.newFixedThreadPool(3);
executor.submit(new MyTask());
executor.shutdown();
```

### `Runnable` vs `Callable`

| Feature | Runnable | Callable |
|---|---|---|
| Package | `java.lang` | `java.util.concurrent` |
| Method | `run()` | `call()` |
| Return value | ❌ No (`void`) | ✅ Yes (`V`) |
| Checked exceptions | ❌ No | ✅ Yes |
| Introduced | Java 1.0 | Java 5 |
| Result retrieval | Not possible directly | Via `Future` |

---

## 32. String, StringBuffer, StringBuilder

**String is immutable** — content cannot change once created.
```java
String s1 = "Hi";
s1 = "123";   // s1 now refers to a NEW string object, "Hi" is unchanged
```
Reasons for immutability: security, String Pool optimization, thread safety, memory efficiency.

**String Pool (SCP)** — special JVM memory area storing string literals.
```java
String s1 = "Java";
String s2 = "Java";
String s3 = "Java";   // all three refer to the SAME pooled object
```
 `intern()` forces a heap `String` object to be pooled (or return the existing pooled reference):
```java
String s4 = new String("Java").intern();
System.out.println(s4 == s1);   // true — now points to the pooled "Java"
```

### String Comparison
```java
String s1 = "A", s2 = "A";
System.out.println(s1.compareTo(s2));           // 0
System.out.println(s1.equals(s2));               // true
System.out.println("A".equalsIgnoreCase("a"));   // true

String s3 = new String("sam");
String s4 = "sam";
System.out.println(s3 == s4);   // false — s3 is a new heap object, not pooled
```

### String vs StringBuffer vs StringBuilder

| Feature | String | StringBuffer | StringBuilder |
|---|---|---|---|
| Mutable | No | Yes | Yes |
| Thread-Safe | Yes (immutable) | Yes | No |
| Performance | Slow for modification | Medium | Fast |
| Synchronized | N/A | Yes | No |

```java
String s = new String("sam");
s.concat("muk");
System.out.println(s);   // "sam" — concat() result was NOT stored anywhere
```

 Common `StringBuilder` methods:
```java
StringBuilder sb = new StringBuilder("Java");
sb.append(" Rocks");     // Java Rocks
sb.insert(0, ">> ");     // >> Java Rocks
sb.reverse();            // skcoR avaJ >>
sb.replace(0, 2, "**");
```

---

## 33. Object Class Methods (Detail)

```java
public String toString()
public int hashCode()
public boolean equals(Object obj)
```

| `==` | `equals()` |
|---|---|
| Compares references | Compares content/state |
| Default: memory address | Default: memory address (unless overridden) |

| `equals()` | `hashCode()` |
|---|---|
| Compares object contents, returns `boolean` | Generates numeric hash, returns `int` |
| Used for logical equality | Used by hash-based collections |
| Must be overridden **together** for consistency | — |

 **The `equals()`/`hashCode()` contract:** if two objects are `equal` per `equals()`, they **must** produce the same `hashCode()`. Breaking this contract causes objects to "get lost" inside `HashMap`/`HashSet` (wrong bucket lookup).

---

## 34. File I/O

### FileWriter — write character data
```java
FileWriter fw = new FileWriter("abc.txt");
fw.write(100);      // writes 'd'
fw.write("hey");
fw.write("\n");
fw.write(new char[]{'a','b','c'});
fw.flush();
fw.close();
```

### FileReader — read character data
```java
FileReader fr = new FileReader("abc.txt");
int i;
while ((i = fr.read()) != -1) System.out.print((char) i);
fr.close();
```

### FileWriter/Reader vs Buffered versions

| FileWriter | BufferedWriter |
|---|---|
| Direct writing (slower) | Buffered writing (faster) |
| No `newLine()` | Has `newLine()` |

| FileReader | BufferedReader |
|---|---|
| Char-by-char (slower) | Buffered (faster) |
| No `readLine()` | Has `readLine()` |

### Scanner Class
Reads different types of input (`int`, `float`, `double`, `String`, etc.) from `java.util`.

| Method | Purpose |
|---|---|
| `nextInt()` | Reads an integer |
| `nextDouble()` | Reads a double value |
| `nextFloat()` | Reads a float value |
| `next()` | Reads a single word |
| `nextLine()` | Reads an entire line |
| `nextBoolean()` | Reads a boolean value |

### Scanner vs BufferedReader

| Scanner | BufferedReader |
|---|---|
| Easy to use, parses primitives directly | Requires manual type conversion |
| Slower | Faster |
| `sc.next()` — one word; `sc.nextLine()` — full line | `br.readLine()` — full line |

```java
Scanner sc = new Scanner(System.in);
String name = sc.next();

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
```

---

## 35. Serialization

**Object Graph:** when an object is serialized, **all** objects reachable from it are serialized too — every reachable object must be `Serializable`, or a `NotSerializableException` occurs at runtime.

```java
class Dog implements Serializable { Cat c = new Cat(); }
class Cat implements Serializable { Rat r = new Rat(); }
class Rat implements Serializable { int j = 20; }
```

### Serialization vs Externalization

| Serialization | Externalization |
|---|---|
| Default persistence, automatic | Programmer explicitly controls what's saved |
| Saves complete state | Can be more storage-efficient |
| Easier to implement | More control, more code |

---

## 36. Collections Framework

**Why Collections?** Arrays have fixed size, store only homogeneous data, and costly insert/delete. Collections offer dynamic size, rich built-in algorithms, and better utility.

| Array | Collection |
|---|---|
| Fixed size | Dynamic size |
| Mostly homogeneous | Can hold different objects |
| No built-in algorithms | Rich utility methods |

### Collection Hierarchy
```
Iterable
   └── Collection(I)
         ├── List(I)  — ArrayList, LinkedList, Vector, Stack
         ├── Queue(I) — PriorityQueue, Deque → ArrayDeque
         └── Set(I)   — HashSet, LinkedHashSet, SortedSet → TreeSet, NavigableSet
```
Common `Collection` methods: `add()`, `remove()`, `contains()`, `size()`, `clear()`, `isEmpty()`.

Java Collections also include the separate **Map** hierarchy (not `Iterable`/`Collection`, but part of the framework):
```
Map(I)
 ├── HashMap
 ├── LinkedHashMap
 ├── Hashtable (legacy)
 └── SortedMap(I) → TreeMap
```

### List — allows duplicates, preserves insertion order, index-based access
```java
List<String> list = new ArrayList<>();
list.add("Java"); list.add("Python"); list.add("Java");   // duplicates OK
```

**ArrayList** — dynamic array; fast random access; slow middle insert/delete.
```java
ArrayList<String> al = new ArrayList<>();
al.add("Java"); al.add("Python");
System.out.println(al.get(0));   // Java
```

**LinkedList** — doubly linked list; fast insert/delete; slow random access.

**Vector** — synchronized, thread-safe, legacy, slower than ArrayList.

**Stack** — `push()` adds, `pop()` removes and returns the top element.

### List Comparisons

| ArrayList | LinkedList |
|---|---|
| Dynamic array | Doubly linked list |
| Fast retrieval | Fast insert/delete |
| Slow modification | Slow random access |

| ArrayList | Vector |
|---|---|
| Not synchronized, faster | Synchronized, thread-safe, slower |
| Introduced Java 1.2 | Introduced Java 1.0 (legacy) |

### Set — no duplicates
**HashSet** — unordered, fast, allows one `null`.
```java
HashSet<String> hs = new HashSet<>();
hs.add("Java"); hs.add("Python"); hs.add("Java");   // duplicate ignored
```
**LinkedHashSet** — HashSet + maintains insertion order.

**TreeSet** — sorted (ascending by default), uses a Red-Black Tree, no `null` preferred.
```java
TreeSet<Integer> t = new TreeSet<>();
t.add(40); t.add(10); t.add(20);
System.out.println(t);   // [10, 20, 40]
```

### List vs Set

| List | Set |
|---|---|
| Duplicates allowed | Duplicates not allowed |
| Order preserved | No guaranteed order (HashSet) |
| Index access | No index access |

### HashSet vs TreeSet vs LinkedHashSet

| HashSet | LinkedHashSet | TreeSet |
|---|---|---|
| Unordered | Insertion order preserved | Sorted order |
| Hash table | Hash table + linked list | Balanced tree |
| Fastest | Slightly slower | Slowest (but sorted) |

### `HashMap` vs `Hashtable` 

```java
HashMap<Integer, String> map = new HashMap<>();
map.put(1, "Java");
map.put(2, "Python");
map.put(null, "AllowedKey");    // one null key allowed

for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}
```

| HashMap | Hashtable |
|---|---|
| Methods not synchronized | Methods synchronized |
| Multiple threads can operate simultaneously | Only one thread at a time |
| Not thread-safe | Thread-safe |
| Higher performance | Lower performance (synchronization overhead) |
| Allows one `null` key + multiple `null` values | Does not allow `null` key or value |

### `Comparable` vs `Comparator`

```java
// Comparable — natural ordering, defined INSIDE the class
class Student implements Comparable<Student> {
    int marks;
    Student(int marks) { this.marks = marks; }
    public int compareTo(Student s) { return this.marks - s.marks; }   // ascending
}

// Comparator — custom ordering, defined OUTSIDE the class
class MarksDescComparator implements Comparator<Student> {
    public int compare(Student a, Student b) { return b.marks - a.marks; }   // descending
}
```

| Comparable | Comparator |
|---|---|
| Default (natural) sorting order | Customized sorting order |
| `java.lang` | `java.util` |
| One method: `compareTo()` | Two methods: `compare()`, `equals()` |
| String and wrapper classes implement it | Custom classes implement sorting logic externally |
| Affects the original class | Does not affect the original class |

### Custom Sorting with `Comparator` (lambda-style, quick reference)
```java
class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) { return b.compareTo(a); }   // descending
}
```

### Cursors
A cursor retrieves objects one by one from a collection.

| Enumeration | Iterator | ListIterator |
|---|---|---|
| Legacy | Most common | Bidirectional |
| Read only | Read + Remove | Read + Remove + Add + Replace |
| Forward only | Forward only | Forward and backward |

---

## 37. Generics

Introduced in **Java 5** — allows specifying the type of an object at compile time (type-safety, no casting needed).

```java
class Test<T> {
    T value;
    Test(T value) { this.value = value; }
    void display() { System.out.println(value); }
}

Test<String> t = new Test<>("Java");
t.display();   // Java
```

---

## 38. Java 8 Features

Java 8 was a landmark release adding functional-programming capabilities.

### 38.1 Lambda Expressions
An **anonymous function** — no name, no explicit return type, no access modifier.
```java
// Before Java 8
Runnable r1 = new Runnable() {
    public void run() { System.out.println("Running"); }
};

// Java 8 Lambda
Runnable r2 = () -> System.out.println("Running");

// With parameters
Comparator<Integer> cmp = (a, b) -> b - a;   // descending

interface Calculator { int operate(int a, int b); }
Calculator add = (a, b) -> a + b;
System.out.println(add.operate(3, 4));   // 7
```
- A lambda can only be used where a **functional interface** (exactly one abstract method) is expected.

### 38.2 Functional Interfaces (`java.util.function`)
```java
@FunctionalInterface
interface Greet { void sayHello(String name); }
```

| Interface | Abstract Method | Purpose |
|---|---|---|
| `Function<T,R>` | `R apply(T t)` | Transform T → R |
| `Predicate<T>` | `boolean test(T t)` | Boolean condition |
| `Consumer<T>` | `void accept(T t)` | Consume a value, no return |
| `Supplier<T>` | `T get()` | Supply/produce a value |
| `BiFunction<T,U,R>` | `R apply(T t, U u)` | Two inputs, one output |

```java
Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5));   // 25

Predicate<Integer> isEven = x -> x % 2 == 0;
System.out.println(isEven.test(4));    // true

Consumer<String> printer = s -> System.out.println("Value: " + s);
printer.accept("Java8");   // Value: Java8

Supplier<Double> randomVal = () -> Math.random();
System.out.println(randomVal.get());
```

### 38.3 Method References
Shorthand for a lambda that just calls an existing method.
```java
// Lambda
list.forEach(s -> System.out.println(s));

// Method reference
list.forEach(System.out::println);
```
Types: `ClassName::staticMethod`, `object::instanceMethod`, `ClassName::instanceMethod`, `ClassName::new` (constructor reference).

### 38.4 Default & Static Methods in Interfaces
Interfaces can now have method **bodies** — allows adding new methods without breaking existing implementations.
```java
interface Vehicle {
    void start();
    default void honk() { System.out.println("Beep beep!"); }   // default method
    static Vehicle create() { return () -> System.out.println("Starting..."); } // static method
}
```

### 38.5 Stream API (`java.util.stream`)
Process collections declaratively — filter, map, reduce, etc.
```java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

List<Integer> evenSquares = nums.stream()
        .filter(n -> n % 2 == 0)
        .map(n -> n * n)
        .collect(Collectors.toList());
System.out.println(evenSquares);   // [4, 16, 36]

int sum = nums.stream().reduce(0, Integer::sum);
System.out.println(sum);   // 21

long count = nums.stream().filter(n -> n > 3).count();
System.out.println(count);   // 3
```
- Streams are **not** data structures — they don't store data, they compute on-the-fly.
- Two kinds of operations: **intermediate** (`filter`, `map`, `sorted` — lazy, return a stream) and **terminal** (`collect`, `forEach`, `reduce`, `count` — trigger execution).

### 38.6 `Optional<T>`
Wraps a value that may or may not be present — avoids `NullPointerException`.
```java
Optional<String> opt = Optional.ofNullable(getName());
System.out.println(opt.isPresent());          // true/false
System.out.println(opt.orElse("Default"));    // returns value or "Default"
opt.ifPresent(name -> System.out.println("Name: " + name));
```

### 38.7 New Date & Time API (`java.time`)
Replaces the old, mutable `Date`/`Calendar` classes with **immutable**, thread-safe types.
```java
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dt = LocalDateTime.now();

LocalDate birthday = LocalDate.of(1995, Month.MARCH, 20);
Period age = Period.between(birthday, LocalDate.now());
System.out.println(age.getYears() + " years");
```

### 38.8 `forEach()` on Collections
```java
List<String> names = Arrays.asList("A", "B", "C");
names.forEach(n -> System.out.println(n));
```


## Spring boot
---

## 1. Introduction to Spring

**Spring Framework** is a lightweight, open-source Java framework used to build enterprise applications. Its core is built around two principles:

- **IoC (Inversion of Control)** — object creation and dependency management is handed over to the Spring **container** instead of being done manually by the programmer.
- **DI (Dependency Injection)** — a design pattern that implements IoC by "injecting" dependencies into a class rather than the class creating them itself.

### Why Spring?
- Reduces boilerplate code (compared to plain Java EE / Servlets).
- Loosely coupled, easily testable code.
- Modular — use only what you need (Core, MVC, Data, Security, etc.).
- Large ecosystem: Spring MVC, Spring Data, Spring Security, Spring Boot, Spring Cloud.

### Spring Modules (High Level)
| Module | Purpose |
|---|---|
| Spring Core | IoC container, DI |
| Spring AOP | Cross-cutting concerns (logging, transactions) |
| Spring MVC | Web applications, REST APIs |
| Spring Data | Simplifies database access (JPA, MongoDB, etc.) |
| Spring Security | Authentication & authorization |
| Spring Boot | Auto-configured, production-ready Spring apps |

---

## 2. Inversion of Control (IoC) & Dependency Injection

### Without Spring (Tight Coupling)
```java
class Engine { }

class Car {
    Engine engine = new Engine();   // Car creates its own dependency — tightly coupled
}
```

### With Spring (IoC / Loose Coupling)
```java
class Engine { }

class Car {
    private Engine engine;

    // Dependency is INJECTED, not created — Car doesn't control "how" Engine is built
    Car(Engine engine) {
        this.engine = engine;
    }
}
```
The Spring **container** creates the `Engine` bean and **injects** it into `Car` — this is **Dependency Injection**, and letting the container manage that flow is **Inversion of Control**.

### Types of Dependency Injection

**1. Constructor Injection** — dependency passed via constructor. Recommended — supports immutability (`final` fields) and makes required dependencies explicit.
```java
@Component
class Car {
    private final Engine engine;

    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }
}
```

**2. Setter Injection** — dependency passed via a setter method. Useful for optional dependencies.
```java
@Component
class Car {
    private Engine engine;

    @Autowired
    public void setEngine(Engine engine) {
        this.engine = engine;
    }
}
```

**3. Field Injection** — dependency injected directly into a field. Concise but **not recommended** — harder to test (can't easily mock without Spring), hides dependencies, prevents `final` fields.
```java
@Component
class Car {
    @Autowired
    private Engine engine;
}
```

| Constructor Injection | Setter Injection | Field Injection |
|---|---|---|
| Best for required dependencies | Best for optional dependencies | Quick but discouraged |
| Supports immutability (`final`) | Mutable | Mutable |
| Easiest to unit test | Testable | Hardest to unit test |

---

## 3. The Spring Container & ApplicationContext

The **Spring IoC Container** is responsible for creating, configuring, and managing the lifecycle of objects called **beans**.

| Interface | Description |
|---|---|
| `BeanFactory` | Basic container — lazy initialization, minimal features |
| `ApplicationContext` | Advanced container (extends `BeanFactory`) — eager initialization, event handling, AOP, i18n. **Used in almost all real applications.** |

```java
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
Car car = context.getBean(Car.class);
```

A **bean** is simply an object that is instantiated, assembled, and managed by the Spring IoC container.

---

## 4. Spring Bean Configuration

There are three ways to configure beans:

### 1. XML-Based Configuration (legacy, rarely used today)
```xml
<beans>
    <bean id="engine" class="com.example.Engine" />
    <bean id="car" class="com.example.Car">
        <constructor-arg ref="engine" />
    </bean>
</beans>
```

### 2. Java-Based Configuration (`@Configuration` + `@Bean`)
```java
@Configuration
class AppConfig {

    @Bean
    public Engine engine() {
        return new Engine();
    }

    @Bean
    public Car car() {
        return new Car(engine());   // manual wiring
    }
}
```

### 3. Annotation-Based Configuration (`@Component` + `@Autowired`) — most common
```java
@Component
class Engine { }

@Component
class Car {
    @Autowired
    private Engine engine;
}
```
Requires **component scanning** to detect annotated classes:
```java
@Configuration
@ComponentScan(basePackages = "com.example")
class AppConfig { }
```
(In **Spring Boot**, `@SpringBootApplication` already includes component scanning — see Section 11.)

---

## 5. Stereotype Annotations

"Stereotype" annotations mark a class as a Spring-managed bean, and communicate its **role** in the application layer.

| Annotation | Purpose |
|---|---|
| `@Component` | Generic Spring-managed bean |
| `@Service` | Business/service layer — semantically clearer, same behavior as `@Component` |
| `@Repository` | Data Access layer — additionally translates DB exceptions into Spring's `DataAccessException` |
| `@Controller` | Web layer — returns view names (used with server-rendered pages) |
| `@RestController` | Web layer — combines `@Controller` + `@ResponseBody`, returns data directly (JSON/XML) |

```java
@Repository
interface UserRepository extends JpaRepository<User, Long> { }

@Service
class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
}

@RestController
class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);   // serialized to JSON automatically
    }
}
```

---

## 6. Autowiring

**Autowiring** lets Spring automatically resolve and inject collaborating beans.

### Modes
| Mode | Behavior |
|---|---|
| `byType` (default with `@Autowired`) | Matches by bean **type** |
| `byName` | Matches by bean **name** |
| `constructor` | Matches constructor parameters by type |

### Handling Multiple Implementations
```java
interface Engine { }

@Component
class PetrolEngine implements Engine { }

@Component
class DieselEngine implements Engine { }

@Component
class Car {
    @Autowired
    @Qualifier("dieselEngine")   // resolves ambiguity — picks the bean named "dieselEngine"
    private Engine engine;
}
```

`@Primary` — marks a bean as the **default choice** when multiple candidates exist:
```java
@Component
@Primary
class PetrolEngine implements Engine { }
```

`@Autowired(required = false)` — makes the dependency optional; won't fail if no matching bean is found.

---

## 7. Bean Scopes

| Scope | Description |
|---|---|
| `singleton` (default) | **One shared instance** per Spring container |
| `prototype` | **New instance** created every time the bean is requested |
| `request` | One instance per HTTP request (web-aware context only) |
| `session` | One instance per HTTP session (web-aware context only) |
| `application` | One instance per `ServletContext` |

```java
@Component
@Scope("prototype")
class Car { }
```

```java
@Component
@Scope("singleton")   // default — can be omitted
class Engine { }
```

**Q: Is a Spring singleton the same as the Singleton design pattern (GoF)?**
A: No — the GoF pattern guarantees one instance **per JVM**; Spring's singleton scope guarantees one instance **per Spring container**. You could have multiple containers, each with its own "singleton" instance.

---

## 8. Bean Lifecycle

```
Container starts
   │
   ▼
Bean instantiated (constructor called)
   │
   ▼
Dependencies injected (via @Autowired / setters)
   │
   ▼
@PostConstruct method called (initialization hook)
   │
   ▼
Bean ready to use
   │
   ▼
@PreDestroy method called (cleanup hook, on container shutdown)
```

```java
@Component
class Car {

    @PostConstruct
    public void init() {
        System.out.println("Car bean initialized");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("Car bean about to be destroyed");
    }
}
```

Alternative — implementing `InitializingBean`/`DisposableBean` interfaces (older style, less common now):
```java
class Car implements InitializingBean, DisposableBean {
    public void afterPropertiesSet() { /* init logic */ }
    public void destroy() { /* cleanup logic */ }
}
```

---

## 9. Spring AOP (Aspect-Oriented Programming)

**AOP** lets you separate **cross-cutting concerns** (logging, security, transactions) from business logic, so they don't clutter every method.

### Key Terms
| Term | Meaning |
|---|---|
| **Aspect** | A module containing cross-cutting logic (e.g. a `LoggingAspect` class) |
| **Advice** | The action taken at a join point (`@Before`, `@After`, `@Around`, etc.) |
| **Join Point** | A point during execution (e.g. a method call) where an aspect can be applied |
| **Pointcut** | An expression that selects which join points the advice applies to |
| **Weaving** | The process of linking aspects with the target objects |

```java
@Aspect
@Component
class LoggingAspect {

    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint jp) {
        System.out.println("Calling method: " + jp.getSignature().getName());
    }

    @AfterReturning(pointcut = "execution(* com.example.service.*.*(..))", returning = "result")
    public void logAfter(Object result) {
        System.out.println("Method returned: " + result);
    }
}
```

| Advice Type | Runs |
|---|---|
| `@Before` | Before the method executes |
| `@After` | After the method executes (regardless of outcome) |
| `@AfterReturning` | After the method returns successfully |
| `@AfterThrowing` | If the method throws an exception |
| `@Around` | Wraps the method — can control whether it even executes |

---

## 10. Spring MVC

**Spring MVC** is Spring's web framework, based on the **Model-View-Controller** pattern.

```
Client Request
     │
     ▼
DispatcherServlet (Front Controller)
     │
     ▼
Handler Mapping → finds the right Controller
     │
     ▼
Controller → calls Service → returns Model + View name
     │
     ▼
ViewResolver → resolves the View (e.g. JSP/Thymeleaf template)
     │
     ▼
Response rendered back to client
```

- **`DispatcherServlet`** — the front controller; every request passes through it first.
- **`@Controller`** — returns a **view name** (for server-rendered pages).
- **`@RestController`** — returns **data directly** (JSON), used for REST APIs (see next sections).

```java
@Controller
class HomeController {
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("message", "Welcome!");
        return "home";   // resolves to home.jsp / home.html via a ViewResolver
    }
}
```

---

## 11. Introduction to Spring Boot

**Spring Boot** is built on top of Spring — it removes the need for extensive manual configuration by providing:

- **Auto-Configuration** — sensible defaults based on what's on the classpath.
- **Embedded servers** — Tomcat/Jetty/Undertow bundled in, no need to deploy a WAR separately.
- **Starter dependencies** — curated dependency bundles (see Section 12).
- **Production-ready features** — Actuator, metrics, health checks.
- **No XML** — configuration is annotation/property-driven.

### Spring vs Spring Boot

| Spring | Spring Boot |
|---|---|
| Requires manual configuration (XML/Java Config) | Auto-configured based on classpath |
| Needs external server (deploy as WAR) | Embedded server (run as a JAR) |
| More boilerplate | Minimal boilerplate |
| Dependency versions managed manually | Managed via starters + parent POM |

### The Entry Point
```java
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

`@SpringBootApplication` is a **combination** of three annotations:
| Annotation | Purpose |
|---|---|
| `@Configuration` | Marks the class as a source of bean definitions |
| `@EnableAutoConfiguration` | Enables Spring Boot's auto-configuration mechanism |
| `@ComponentScan` | Scans the current package (and sub-packages) for components |

---

## 12. Spring Boot Project Structure & Starters

### Typical Structure
```
myapp/
├── src/main/java/com/example/myapp/
│   ├── MyAppApplication.java     # main class
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/ (entity)
│   ├── dto/
│   ├── config/
│   └── exception/
├── src/main/resources/
│   ├── application.properties
│   └── static/ , templates/
├── src/test/java/...
└── pom.xml (or build.gradle)
```

### Common Starters
| Starter | Adds |
|---|---|
| `spring-boot-starter-web` | Spring MVC + embedded Tomcat — for REST APIs/web apps |
| `spring-boot-starter-data-jpa` | Spring Data JPA + Hibernate |
| `spring-boot-starter-security` | Spring Security |
| `spring-boot-starter-validation` | Bean validation (`@Valid`, `@NotNull`, etc.) |
| `spring-boot-starter-test` | JUnit, Mockito, Spring Test |
| `spring-boot-devtools` | Hot reload during development |
| `spring-boot-starter-actuator` | Health checks, metrics, monitoring endpoints |

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

---

## 13. `application.properties` / `application.yml`

Central place for externalized configuration — no hardcoded values in code.

**`application.properties`**
```properties
server.port=8080
spring.application.name=myapp

spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**Equivalent `application.yml`**
```yaml
server:
  port: 8080

spring:
  application:
    name: myapp
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: root
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

### Injecting Property Values
```java
@Value("${server.port}")
private int port;
```

### Type-Safe Configuration Binding
```java
@Component
@ConfigurationProperties(prefix = "app")
class AppProperties {
    private String name;
    private String version;
    // getters/setters
}
```
```properties
app.name=MyApp
app.version=1.0.0
```

---

## 14. Spring Boot Auto-Configuration

Auto-configuration inspects the **classpath** and existing bean definitions, then automatically configures beans that make sense for your setup.

**Example:** if `spring-boot-starter-data-jpa` + a JDBC driver (e.g. `mysql-connector-j`) are on the classpath, Spring Boot automatically configures a `DataSource`, `EntityManagerFactory`, and `TransactionManager` — no manual setup needed.

### Conditional Annotations (used internally by Spring Boot's auto-config, and available for your own config too)
| Annotation | Applies bean only if... |
|---|---|
| `@ConditionalOnClass` | A specified class is present on the classpath |
| `@ConditionalOnMissingBean` | No bean of that type already exists |
| `@ConditionalOnProperty` | A property has a specific value |

```java
@Configuration
class MyConfig {

    @Bean
    @ConditionalOnMissingBean
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

**Excluding auto-configuration:**
```java
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
```

---

## 15. Building REST APIs with Spring Boot

### Mapping Annotations
| Annotation | HTTP Method |
|---|---|
| `@GetMapping` | GET — retrieve data |
| `@PostMapping` | POST — create data |
| `@PutMapping` | PUT — full update |
| `@PatchMapping` | PATCH — partial update |
| `@DeleteMapping` | DELETE — remove data |
| `@RequestMapping` | Generic — method specified via `method =` attribute |

### Full CRUD Example
```java
@RestController
@RequestMapping("/api/products")
class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return productService.getById(id);
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
        return productService.save(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();   // 204
    }
}
```

### Key Request-Handling Annotations
| Annotation | Purpose |
|---|---|
| `@PathVariable` | Extracts a value from the URL path — `/users/{id}` |
| `@RequestParam` | Extracts a query parameter — `/users?role=admin` |
| `@RequestBody` | Binds the JSON request body to a Java object |
| `@RequestHeader` | Extracts an HTTP header value |

```java
@GetMapping("/search")
public List<Product> search(@RequestParam String category,
                              @RequestParam(defaultValue = "0") int page) {
    return productService.search(category, page);
}
```

### `ResponseEntity` — full control over the HTTP response
```java
@GetMapping("/{id}")
public ResponseEntity<Product> getById(@PathVariable Long id) {
    Product p = productService.getById(id);
    if (p == null) return ResponseEntity.notFound().build();       // 404
    return ResponseEntity.ok(p);                                    // 200 + body
}
```

---

## 16. Request/Response Handling

### DTOs (Data Transfer Objects)
Best practice: don't expose your **JPA entity** directly in the API — use a separate DTO to control exactly what's sent/received.

```java
class ProductDTO {
    private String name;
    private Double price;
    // getters/setters — no internal fields like createdAt/updatedBy exposed
}
```

### JSON Serialization — Jackson (default, bundled with `spring-boot-starter-web`)
```java
class Product {
    @JsonIgnore
    private String internalNote;   // excluded from JSON output

    @JsonProperty("product_name")
    private String name;           // renamed in JSON output
}
```

### CORS Configuration
```java
@CrossOrigin(origins = "http://localhost:5173")
@RestController
class ProductController { }
```
Or globally:
```java
@Configuration
class CorsConfig implements WebMvcConfigurer {
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
```

---

## 17. Exception Handling in Spring Boot

### Local — `@ExceptionHandler` inside a controller
```java
@RestController
class ProductController {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<String> handleNotFound(ProductNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
```

### Global — `@ControllerAdvice` / `@RestControllerAdvice` (recommended)
Centralizes exception handling for **all** controllers.
```java
@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ProductNotFoundException e) {
        ErrorResponse error = new ErrorResponse(HttpStatus.NOT_FOUND.value(), e.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneric(Exception e) {
        ErrorResponse error = new ErrorResponse(500, "Something went wrong");
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

class ErrorResponse {
    int status;
    String message;
    ErrorResponse(int status, String message) { this.status = status; this.message = message; }
}
```

### Custom Exception
```java
class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String message) { super(message); }
}
```

| `@ExceptionHandler` (local) | `@ControllerAdvice` (global) |
|---|---|
| Handles exceptions for **one** controller | Handles exceptions across **all** controllers |
| Duplicated across controllers if reused | Written once, centrally |

---

## 18. Validation (`spring-boot-starter-validation`)

```java
class ProductDTO {
    @NotBlank(message = "Name is required")
    private String name;

    @Positive(message = "Price must be positive")
    private Double price;

    @Email
    private String contactEmail;

    @Min(0) @Max(100)
    private int discountPercent;
}
```

### Triggering Validation
```java
@PostMapping
public Product create(@Valid @RequestBody ProductDTO dto) {
    // if validation fails, MethodArgumentNotValidException is thrown automatically
    return productService.save(dto);
}
```

### Handling Validation Errors Globally
```java
@RestControllerAdvice
class ValidationExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getFieldErrors()
            .forEach(err -> errors.put(err.getField(), err.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
}
```

| Common Annotation | Checks |
|---|---|
| `@NotNull` | Value is not `null` |
| `@NotBlank` | String is not `null`/empty/whitespace-only |
| `@NotEmpty` | Collection/String is not `null`/empty |
| `@Size(min=, max=)` | Length/size within bounds |
| `@Min` / `@Max` | Numeric bounds |
| `@Email` | Valid email format |
| `@Pattern(regexp=)` | Matches a regex |

---

## 19. Spring Data JPA

**Spring Data JPA** eliminates most boilerplate DAO code — you just define a **repository interface**.

### Entity
```java
@Entity
@Table(name = "products")
class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Double price;
}
```

### Repository
```java
@Repository
interface ProductRepository extends JpaRepository<Product, Long> {

    // Query derived automatically from the method name
    List<Product> findByNameContaining(String keyword);
    List<Product> findByPriceLessThan(Double price);
    Optional<Product> findByName(String name);

    // Custom JPQL query
    @Query("SELECT p FROM Product p WHERE p.price > :minPrice")
    List<Product> findExpensiveProducts(@Param("minPrice") Double minPrice);
}
```
`JpaRepository<Product, Long>` already provides: `save()`, `findById()`, `findAll()`, `deleteById()`, `count()`, etc. — **no implementation needed**, Spring generates it at runtime.

### Entity Relationships
```java
@Entity
class Order {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items;
}
```

| Annotation | Relationship |
|---|---|
| `@OneToOne` | One-to-one |
| `@OneToMany` | One-to-many |
| `@ManyToOne` | Many-to-one |
| `@ManyToMany` | Many-to-many |

### JPA vs Hibernate vs Spring Data JPA

| JPA | Hibernate | Spring Data JPA |
|---|---|---|
| Specification (interfaces/rules) | An **implementation** of JPA | A layer **on top of** JPA that removes boilerplate |
| Doesn't do anything by itself | Actually persists data | Auto-generates repository implementations |

---

## 20. Connecting to a Database

### MySQL / PostgreSQL
```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>
```
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
```

### H2 (in-memory, great for testing)
```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```
```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
```

### `ddl-auto` values
| Value | Behavior |
|---|---|
| `none` | No schema changes |
| `validate` | Validates schema matches entities, no changes |
| `update` | Updates schema to match entities (safe for dev) |
| `create` | Drops and recreates schema on every startup |
| `create-drop` | Like `create`, but also drops schema on shutdown |

⚠️ Never use `create`/`create-drop`/`update` in **production** — use a migration tool instead (see below).

### Database Migrations — Flyway / Liquibase 🆕
For production, schema changes should be **version-controlled** rather than auto-generated:
```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
```
```
src/main/resources/db/migration/
  V1__create_products_table.sql
  V2__add_stock_column.sql
```
Flyway runs these scripts in order automatically on startup, keeping schema changes traceable.

---

## 21. Spring Boot with Lombok

**Lombok** removes boilerplate (getters, setters, constructors, `toString()`) via annotations processed at compile time.

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

```java
@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
class Product {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private Double price;
}
```

| Annotation | Generates |
|---|---|
| `@Getter` / `@Setter` | Getter/setter methods for all fields |
| `@NoArgsConstructor` | Empty constructor |
| `@AllArgsConstructor` | Constructor with all fields |
| `@Data` | Getters, setters, `toString()`, `equals()`, `hashCode()` — all in one |
| `@Builder` | Builder pattern for object creation |

```java
Product p = Product.builder()
        .name("Laptop")
        .price(999.99)
        .build();
```

---

## 22. Spring Security Basics

Spring Security handles **authentication** (who are you?) and **authorization** (what are you allowed to do?).

### Basic Setup
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
As soon as this starter is added, Spring Boot **auto-secures all endpoints** with a default login form and a generated password (printed in the console on startup).

### Custom Security Configuration
```java
@Configuration
@EnableWebSecurity
class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()      // public endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN") // role-restricted
                .anyRequest().authenticated()                      // everything else needs login
            )
            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();   // never store plaintext passwords
    }
}
```

### `UserDetailsService` — how Spring Security loads user data
```java
@Service
class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole())
                .build();
    }
}
```

### Authentication vs Authorization

| Authentication | Authorization |
|---|---|
| Verifies **who** the user is | Verifies **what** the user can access |
| Example: login with email/password | Example: only `ADMIN` can delete a product |
| Happens first | Happens after authentication |

---

## 23. JWT Authentication in Spring Boot

**JWT (JSON Web Token)** — a stateless way to authenticate requests: the server issues a signed token at login; the client sends it on every subsequent request instead of re-sending credentials.

### Flow
```
1. POST /api/auth/login (email + password)
2. Server validates credentials → generates a signed JWT
3. Client stores the JWT (memory / httpOnly cookie)
4. Client sends "Authorization: Bearer <token>" on every request
5. A JwtFilter validates the token before the request reaches the controller
```

### Generating a Token
```java
@Component
class JwtUtil {

    private final String SECRET_KEY = "your-secret-key";

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))   // 1 hour
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY)
                .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean isTokenValid(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
```

### JWT Filter — runs before every request
```java
class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {

        String header = req.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            if (jwtUtil.isTokenValid(token)) {
                String username = jwtUtil.extractUsername(token);
                UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(req, res);
    }
}
```

**Q: Why is JWT considered "stateless"?**
A: The server doesn't need to store session data — all the info needed to identify the user is inside the signed token itself.

---

## 24. Spring Boot Profiles

Profiles let you maintain **different configurations** for different environments (dev, test, prod).

```
application.properties          # common config
application-dev.properties      # dev-specific overrides
application-prod.properties     # prod-specific overrides
```

```properties
# application-dev.properties
spring.datasource.url=jdbc:h2:mem:devdb
logging.level.root=DEBUG
```
```properties
# application-prod.properties
spring.datasource.url=jdbc:mysql://prod-host:3306/proddb
logging.level.root=WARN
```

**Activating a profile:**
```properties
# in application.properties
spring.profiles.active=dev
```
Or via command line:
```bash
java -jar app.jar --spring.profiles.active=prod
```

**Profile-specific beans:**
```java
@Configuration
@Profile("dev")
class DevConfig {
    @Bean
    public DataSource dataSource() { return new EmbeddedDatabase(); }
}
```

---

## 25. Spring Boot Actuator

`spring-boot-starter-actuator` exposes production-ready **monitoring/management endpoints** out of the box.

```properties
management.endpoints.web.exposure.include=health,info,metrics,env
```

| Endpoint | Purpose |
|---|---|
| `/actuator/health` | Application health status (UP/DOWN) |
| `/actuator/info` | Custom app info |
| `/actuator/metrics` | JVM/HTTP/system metrics |
| `/actuator/env` | Environment properties |
| `/actuator/beans` | List of all Spring beans |

```java
@Component
class DbHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        boolean dbUp = checkDatabaseConnection();
        return dbUp ? Health.up().build() : Health.down().withDetail("reason", "DB unreachable").build();
    }
}
```

---

## 26. Spring Boot Testing

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```
Bundles: **JUnit 5**, **Mockito**, **AssertJ**, **Spring Test**.

### Unit Test — mocking dependencies
```java
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void shouldReturnProductById() {
        Product mockProduct = new Product(1L, "Laptop", 999.99);
        when(productRepository.findById(1L)).thenReturn(Optional.of(mockProduct));

        Product result = productService.getById(1L);

        assertEquals("Laptop", result.getName());
    }
}
```

### Integration Test — full Spring context
```java
@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnProductsList() throws Exception {
        mockMvc.perform(get("/api/products"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$[0].name").exists());
    }
}
```

| `@Mock` / `@InjectMocks` | `@SpringBootTest` |
|---|---|
| Pure unit test — no Spring context loaded | Loads the full (or sliced) application context |
| Very fast | Slower — closer to a real run |
| Use for testing service/business logic in isolation | Use for testing controller/end-to-end wiring |

**Test slices** — load only part of the context for faster, focused tests: `@WebMvcTest` (controller layer only), `@DataJpaTest` (repository layer only).

---

## 27. Swagger / OpenAPI Documentation

Auto-generates interactive API documentation.

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.x.x</version>
</dependency>
```
Once added, Spring Boot auto-exposes:
- `/v3/api-docs` — raw OpenAPI JSON spec
- `/swagger-ui.html` — interactive UI to try out endpoints

```java
@Operation(summary = "Get a product by ID")
@GetMapping("/{id}")
public Product getById(@PathVariable Long id) {
    return productService.getById(id);
}
```

---

## 28. Microservices Basics with Spring Boot

Spring Boot is commonly used to build individual **microservices** — small, independently deployable services, each owning its own data and responsibility.

| Concern | Typical Spring Tool |
|---|---|
| Service discovery | Eureka (`spring-cloud-starter-netflix-eureka-client`) |
| API Gateway | Spring Cloud Gateway |
| Inter-service calls | `RestTemplate` / `WebClient` / OpenFeign |
| Centralized config | Spring Cloud Config Server |
| Fault tolerance | Resilience4j (circuit breaker, retry) |
| Distributed tracing | Micrometer + Zipkin/Sleuth |

```java
@FeignClient(name = "product-service", url = "http://localhost:8081")
interface ProductClient {
    @GetMapping("/api/products/{id}")
    Product getProduct(@PathVariable Long id);
}
```

> Microservices architecture is a broad topic on its own — this section is just an entry point; a dedicated Spring Cloud deep-dive would be its own notes file.

---

