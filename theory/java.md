# Core Java Notes (with Java 8 Features)

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
- instance variable should be declare within the class directly but outside of any method or block or constructor

```java
class Test {
    int x = 10;  //if we made 5 obj then 5 diff obj will created with name x
    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.x);   // 10
    }
}
```

### Static / Class Variable
- Single copy shared by **all** objects of the class.
- Declared with `static`, stored at the class level but outside method or constructor or class

```java
class Test {
    static int x = 10;//once obj create for whole class
    public static void main(String[] args) {
        System.out.println(Test.x);   // 10
    }
}
```

### Instance vs Static Variable

| Instance Variable | Static Variable |
|---|---|
| Separate copy per object | Single copy shared by all objects |
| Stored in heap (inside object) | Stored in method/class area |

### Local Variable
- Declared inside a block, method, or constructor for temporary needs.
- **Must be initialized before use** — no default value is given.
- Can be declared inside: a block, a method, a constructor.

```java
class Test {
    public static void main(String[] args) {
        int x;
        System.out.println(x);   // Compile-time error — not initialized do int x=10
    }
}
```

**Q: What is the default value of a local variable?**
A: None — the programmer must explicitly assign a value before use.

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

whenever you are not sure how many input are going to be provided by user or you are not sure how many argument that you need to take inside method.

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
- we can mix var-arg parameter with normal parameter but remember last parameter should be var-arg parameter `m1(String s, int... y)`

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

**Ways to overload:**
- Different number of arguments
- Different types of arguments
- Different order of parameters

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
```java
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

---

## 6. Looping Statements

### While Loop — entry-controlled, condition checked **before** execution
```java
while (condition) {
    // statements
}
```

### Do-While Loop — exit-controlled, executes **at least once**
```java
do {
    // body
} while (condition);
```

### For Loop — entry-controlled, used when iterations are known
```java
for (initialization; condition; update) {
    // body
}
```

### Enhanced For-Each Loop (Java 5+)
```java
int[] x = {10, 20, 30, 40};
for (int i : x) {
    System.out.println(i);   // 10 20 30 40
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

A switch statement allows a variable to be tested for equality against a list of values.each value is called a case and the variable is checked against each case 

Supported types: `byte, short, char, int, String, enum`

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
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5:
        System.out.println("Weekday"); break;
    case 6: 
    case 7:
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

An **array** is an indexed collection of a fixed number of homogeneous elements.

**Advantages:** single variable for multiple values, contiguous memory, fast indexed access.

```java
int[] arr = {10, 20, 30};   // Index: 0 1 2

int[] a;                     // declaration
int[] x = new int[5];        // declaration + creation
int[][] a2 = new int[3][5];  // 2-D
int[] x2 = {10, 20, 30, 40}; // initialization
```

- `array.length` — final field, gives array size.
- `string.length()` — a **method**, not a field.

**Anonymous array** — array without a name:
```java
new int[]{10, 20, 30};
```

**Example — 2-D array addition:**
```java
int[][] c = new int[2][2];
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
        c[i][j] = a[i][j] + b[i][j];
```

---

## 9. Object-Oriented Programming (OOP)

OOP organizes software around **objects** rather than functions.

```
Class
 |-- Variables
 |-- Methods
 |-- Constructors
```

**Object** = State (data) + Behaviour (methods).

```java
Box b1 = new Box();
Box b2 = b1;              // b1 and b2 refer to the SAME object
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

---

## 10. Inner Classes

### Inner Class vs Sub Class

| Inner Class | Sub Class |
|---|---|
| Class within another class | Class that `extends` another |
| Logical grouping | Inheritance / reusability |
| Can access all outer members | — |

### Types
1. **Normal (Regular) Inner Class**
```java
class Outer {
    class Inner { }
}
```
2. **Method-Local Inner Class**
```java
class Test {
    void m1() {
        class Inner { }
    }
}
```
3. **Anonymous Inner Class** — no name, instantiated in one statement, used once.
```java
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Running...");
    }
};
```
4. **Static Nested Class**
```java
class Outer {
    static int x = 10;
    static class Inner {
        void m1() { System.out.println(x); }  // can access only static members
    }
}
Outer.Inner n = new Outer.Inner();   // instantiated without an Outer object
```

**Why use inner classes?** Better encapsulation, logical grouping, readability — widely used in GUI/event handling.

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

## 11. Constructors

A **constructor** is a special member function executed automatically at object creation, used to initialize the object.

- Name = class name.
- **No return type** — not even `void`.
- Can be overloaded, **cannot** be inherited, can be `public`.

### Types

**Default (No-Arg) Constructor**
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
| Available in Java | Not explicitly available in Java (GC handles cleanup) |

---

## 12. Garbage Collection (GC)

**Definition:** GC automatically destroys unreferenced objects and frees memory.

- Can be requested (not forced) via `System.gc()` or `Runtime.getRuntime().gc()`.

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
- Defined in `java.lang.Object`; called by GC just before destroying an object; called at **most once**; should not be invoked directly by the programmer.

### Runtime Class
- Bridge between a Java application and the JVM; **singleton** — one `Runtime` object per JVM.
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

## 13. Internationalization (I18N)

Designing an app to adapt to different languages/regions without major code changes.

**Key classes:** `Locale`, `NumberFormat`, `DateFormat`, `Currency`

```java
Locale l = new Locale("en", "US");

NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.ITALY);
System.out.println(nf.format(123456.789));   // Italy-specific currency form

SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
System.out.println(sdf.format(new Date()));   // e.g. 2026-08-17
```

---

## 14. Enum

Used to represent a **fixed set of constants**.

```java
enum Month { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC }
```

- Every constant is implicitly `public static final` and represents an **object**.
- Can be declared: inside a class, outside a class (top-level), inside an interface.
- **Cannot** create enum objects using `new`.

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

---

## 15. Packages & Imports

A **package** is a container for classes, interfaces, enums, and sub-packages.

**Advantages:** resolves naming conflicts, supports encapsulation, improves modularity/maintainability/reusability.

**Rules**
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

---

## 16. Polymorphism

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

---

## 17. Method Overriding — Rules

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

## 18. Abstract Methods & Abstract Classes

### Abstract Method — declaration only, no body
```java
public abstract void m1();
```
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
4. **Can** have a constructor:
```java
abstract class Test {
    Test() { System.out.println("Constructor"); }
}
```
5. **Can** have static methods and **final** methods.

### Abstract vs Final

| Abstract | Final |
|---|---|
| Incomplete implementation | Complete implementation |
| Must be inherited | Cannot be inherited |
| Requires overriding | Prevents overriding |

### Valid/Invalid combinations
| Combination | Valid? |
|---|---|
| `abstract` method + `final` | ❌ No |
| `abstract` class + `final` | ❌ No |
| `final class extends abstract class` | ✅ Yes |
| `abstract class` contains `final` method | ✅ Yes |
| `final static` variable | ✅ Yes |

---

## 19. Final Variable

Once assigned, a `final` variable's value **cannot change**.
```java
final int x = 10;
// x = 20;   // Compile-time error
```

**Final instance variable** — initialization is compulsory (JVM gives no default). Can be initialized:
1. At declaration: `final int x = 10;`
2. In an instance initializer block: `{ x = 10; }`
3. In the constructor: `Test() { x = 10; }`

**Final local variable** — allowed:
```java
final int x = 10;
```

---

## 20. Interfaces

Achieves **abstraction** and (multiple) **type inheritance**, since Java classes cannot extend multiple classes.

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

## 21. Inheritance & Object Class

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

### Object class
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

## 22. `this` and `super`

### `this` — refers to the current object
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

## 23. Coupling & Cohesion

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

## 24. Exception Handling

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
    e.printStackTrace();      // name + description + stack trace
    System.out.println(e.toString());   // class name + description
    System.out.println(e.getMessage()); // description only
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

| `final` | `finally` | `finalize()` |
|---|---|---|
| Keyword | Block | Method |
| Restriction (no override/no reassign) | Cleanup code | GC callback |

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

---

## 25. Multithreading

### Creating Threads

**Via `Runnable`** (functional interface with `run()`):
```java
class ThreadDemo implements Runnable {
    public void run() { System.out.println("child thread"); }
}
Thread t = new Thread(new ThreadDemo());
t.start();
```

**Via extending `Thread`:**
```java
class A extends Thread {
    public void run() { System.out.println("running..."); }
}
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
    // non-critical code
    synchronized (this) {
        // critical section only
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

## 26. String, StringBuffer, StringBuilder

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

### String Comparison
```java
String s1 = "A", s2 = "A";
System.out.println(s1.compareTo(s2));      // 0

System.out.println(s1.equals(s2));          // true
System.out.println("A".equalsIgnoreCase("a")); // true

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

---

## 27. Object Class Methods (Detail)

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

---

## 28. File I/O

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

## 29. Serialization

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

## 30. Collections Framework

**Why Collections?** Arrays have fixed size, store only homogeneous data, and costly insert/delete. Collections offer dynamic size, rich built-in algorithms, and better utility.

| Array | Collection |
|---|---|
| Fixed size | Dynamic size |
| Mostly homogeneous | Can hold different objects |
| No built-in algorithms | Rich utility methods |

### Collection Hierarchy
```
Iterable
   └── Collection
         ├── List (ArrayList, LinkedList, Vector, Stack)
         ├── Queue (PriorityQueue, Deque → ArrayDeque)
         └── Set (HashSet, LinkedHashSet, SortedSet → TreeSet, NavigableSet)
```
Common `Collection` methods: `add()`, `remove()`, `contains()`, `size()`, `clear()`, `isEmpty()`.

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

### Custom Sorting with `Comparator`
```java
class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) { return b.compareTo(a); }  // descending
}
```

### Cursors

| Enumeration | Iterator | ListIterator |
|---|---|---|
| Legacy | Most common | Bidirectional |
| Read only | Read + Remove | Read + Remove + Add + Replace |
| Forward only | Forward only | Forward and backward |

---

## 31. Generics

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

## 32. Java 8 Features

Java 8 was a landmark release adding functional-programming capabilities.

### 32.1 Lambda Expressions
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

### 32.2 Functional Interfaces (`java.util.function`)
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

### 32.3 Method References
Shorthand for a lambda that just calls an existing method.
```java
// Lambda
list.forEach(s -> System.out.println(s));

// Method reference
list.forEach(System.out::println);
```
Types: `ClassName::staticMethod`, `object::instanceMethod`, `ClassName::instanceMethod`, `ClassName::new` (constructor reference).

### 32.4 Default & Static Methods in Interfaces
Interfaces can now have method **bodies** — allows adding new methods without breaking existing implementations.
```java
interface Vehicle {
    void start();
    default void honk() { System.out.println("Beep beep!"); }   // default method
    static Vehicle create() { return () -> System.out.println("Starting..."); } // static method
}
```

### 32.5 Stream API (`java.util.stream`)
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

### 32.6 `Optional<T>`
Wraps a value that may or may not be present — avoids `NullPointerException`.
```java
Optional<String> opt = Optional.ofNullable(getName());
System.out.println(opt.isPresent());        // true/false
System.out.println(opt.orElse("Default"));   // returns value or "Default"
opt.ifPresent(name -> System.out.println("Name: " + name));
```

### 32.7 New Date & Time API (`java.time`)
Replaces the old, mutable `Date`/`Calendar` classes with **immutable**, thread-safe types.
```java
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dt = LocalDateTime.now();

LocalDate birthday = LocalDate.of(1995, Month.MARCH, 20);
Period age = Period.between(birthday, LocalDate.now());
System.out.println(age.getYears() + " years");
```

### 32.8 `forEach()` on Collections
```java
List<String> names = Arrays.asList("A", "B", "C");
names.forEach(n -> System.out.println(n));
```

### 32.9 Interview-Style Q&A
**Q: Why were default methods added to interfaces in Java 8?**
A: To allow adding new methods to existing interfaces (e.g. `Collection.stream()`) without breaking all classes that already implement them.

**Q: Is a Stream reusable?**
A: No — once a terminal operation runs, the stream is consumed and cannot be reused; a new stream must be created.

**Q: Difference between `map()` and `flatMap()`?**
A: `map()` transforms each element 1-to-1; `flatMap()` transforms each element into a stream and flattens all resulting streams into one.
```java
List<List<Integer>> nested = Arrays.asList(Arrays.asList(1,2), Arrays.asList(3,4));
List<Integer> flat = nested.stream()
        .flatMap(List::stream)
        .collect(Collectors.toList());
System.out.println(flat);   // [1, 2, 3, 4]
```

---

## Quick Reference — Common Interview Comparisons

| Topic | Key Point |
|---|---|
| `==` vs `equals()` | Reference vs content comparison |
| `String` vs `StringBuilder` | Immutable vs mutable, thread-unsafe but fast |
| Overloading vs Overriding | Compile-time vs runtime polymorphism |
| Abstract class vs Interface | Partial vs full abstraction (pre-Java 8), single vs multiple inheritance |
| `throw` vs `throws` | Actually throwing vs declaring possibility |
| `sleep()` vs `wait()` | `sleep()` doesn't release lock; `wait()` does |
| `ArrayList` vs `LinkedList` | Fast access vs fast insert/delete |
| Checked vs Unchecked Exception | Compile-time checked vs runtime |
| Composition vs Aggregation | Strong vs weak HAS-A |
| `Runnable` vs `Callable` | No return value vs returns a value via `Future` |