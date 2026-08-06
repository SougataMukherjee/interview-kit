# 🐍 Python Notes

---

## 1. What is Python?

📝 Python is a high-level, interpreted, object-oriented, and general-purpose dynamic-typed programming language.

**Features**
- Easy to learn and read
- Platform independent
- Large community support
- Supports Object Oriented Programming (OOP)
- Supports Functional Programming
- Used in Web Development, Data Science, AI, Automation, APIs, etc.

**Indentation**

📝 Python uses indentation to define blocks, instead of curly braces.

```python
# Block1
    # Block2
    # Block2
# Block1
```

---

## 2. Identifiers, Keywords, Variables & Data Types

📝 **Identifier** — a name (variable/method name) used for identification.

📝 **Keywords** — reserved words like `True`, `continue`, `for`, `del`, `from`, `pass`, `in`, etc.

📝 **Variable** — a container that stores values in memory.Examples of a few variable names are: sam, two4, emp_, _id etc.

**Variable naming rules**
- Cannot contain spaces
- Case sensitive
- Cannot start with a number or special symbol
- Cannot use reserved keywords as variable names

**Data Types**

| Type | Example |
|------|---------|
| int | `10` |
| float | `10.5` |
| str | `"Python"` |
| bool | `True` |
| list | `[1, 2, 3]` |
| tuple | `(1, 2, 3)` |
| dict | `{"a": 1}` |
| set | `{1, 2, 3}` |

**Instance vs Class vs Local Variable**
- **Class variable** — shared by all objects (e.g. `company`)
- **Instance variable** — unique to each object (e.g. `name`)
- **Local variable** — exists only inside a method (e.g. `salary`)

```python
class Employee:
    company = "ABC"       # Class variable

    def __init__(self, name):
        self.name = name  # Instance variable

    def show(self):
        salary = 5000      # Local variable
        print(self.name, salary)

e1 = Employee("John")
```

**Type Casting**

📝 Converting one data type to another. Two types: **implicit** and **explicit** type conversion.

```python
x = "100"
num = int(x)      # string → int
price = float(x)  # string → float

print(num + 1)     # 101
print(type(num))
```

**Dynamic Memory Allocation**

📝 Python handles memory allocation automatically using a memory manager and garbage collector. Memory is released when objects are no longer referenced. Python uses heap memory for objects.

```python
x = [1, 2, 3]   # Memory allocated automatically
y = x           # Reference created
```

---

## 3. Input and Output

📝 `input()` displays a message and returns the value (default type is `string`). Use `print()` to show output.

```python
#exp1
name = input("Enter your name: ")
print("Hello", name)

#exp 2
weight_lbs = input('Weight (lbs): ')
weight_kg = int(weight_lbs) * 0.45
print(weight_kg)
```

---

## 4. Operators

📝 Operators indicate what operation is to be performed.

| Category | Operators |
|---|---|
| Arithmetic | `+ - * / % **` |
| Assignment | `= += *= -=` |
| Relational | `< > == >= <= !=` |
| Logical | `and or not` |
| Comparison | `< <= == >= >` |
| Bitwise | `& \| << >>` |
| Identity | `is` `is not` |

---

## 5. Strings

📝 A string is an **immutable** collection of characters. Syntax: `s[begin:end:step]`

```python
#exp 1
s = 'sam'
print(s[2] == s[-1])  # True — last char == index 2

#exp 2
first = 'John'
last = 'Smith'

message = first + ' [' + last + '] is a coder'
msg = f'{first} [{last}] is a coder'

print(msg)
```

**String Functions**
Some commonly used functions to manipulate strings are:
1. `len()` returns the length of the string.
2. `endswith()` checks if a string ends with given text.
3. `count()` counts total occurrences of a character.
4. `capitalize()` capitalizes the first character.
5. `find()` returns the index of first occurrence.
6. `replace(old word, new word)` replaces the old word with the new word in the string.

**docstrings**

A docstring (documentation string) is a string literal enclosed in triple quotes (""" """ or ''' ''') that appears as the first statement in a module, function, class, or method.

**Types of Docstrings**
1. `Module Docstring`

Describes the purpose of an entire Python file.
```
"""
This module contains utility functions
for employee management.
"""
```

2. `Function Docstring`

Describes a function's purpose, parameters, and return value.
```python
def add(a, b):
    """Add two numbers and return the result."""
    return a + b
```
3. `Class Docstring`

Describes a class and its attributes.
```python
class Employee:
    """Represents an employee."""
```
4. `Method Docstring`

Documents a class method.
```python
class Employee:
    def display(self):
        """Displays employee details."""
```

**Comments**
```python
# single-line comment

'''
multi-line
comment style
'''
```

---

## 6. Conditional Statements

```python
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

```python
#exp 1
marks = 85

if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
else:
    print("C")

#exp 2
food = input("food : ")
eat = "Yes" if food == "rice" else "no"
print(eat)

#exp 3
age = int(input("age : "))
vote = ("yes", "no")[age >= 18]
print(vote)

#exp 4
is_hot = False
is_cold = False

if is_hot:
    print("It's a hot day")
    print("Drink plenty of water")
elif is_cold:
    print("It's a cold day")
    print("Wear warm clothes")
else:
    print("It's a lovely day")

#exp 5
good_credit = True
criminal_record = False

if good_credit and not criminal_record:
    print("Eligible for loan")
```

**Biggest of three numbers**
```python
n1 = eval(input('Enter first number: '))
n2 = eval(input('Enter second number: '))
n3 = eval(input('Enter third number: '))

if n1 > n2 and n1 > n3:
    print("Biggest is", n1)
elif n2 > n3:
    print(n2)
else:
    print(n3)
```

**Ternary operator**
```python
result = x if (x > y) else y
```

---

## 7. Loops

📝 Loops execute code repeatedly.

**for loop**
```python
for element in sequence:
    statement(s)
```

```python
x = 'sougata'
for i in x:
    print(i)
```

```python
s = input('Enter some string: ')
for i, x in enumerate(s):
    print('The char present at', i, 'is', x)
```

```python
for i in range(5):
    print(i)
```

**Example — Multiplication table & odd numbers**
```python
for i in range(1, 11):
    print(15 * i)

for i in range(1, 100, 2):
    print(i)
```

**while loop**

📝 Executes while/until a condition is true.

```python
while expression:
    statement(s)
```

```python
secret_word = 'sex'
guess = ''

while guess != secret_word:
    guess = input('Enter guess: ')

print('You win')
```

---

## 8. break, continue, pass

📝 `break` — exits the loop.'break' is used to come out of the loop when encountered. It instructs the program to – exit the loop now.
```python
for i in range (0,80):
  print(i) # this will print 0,1,2 and 3
  if i==3:
  break
```

📝 `continue` — skips the rest of the current iteration.continue is used to stop the current iteration of the loop and continue with the next one. It instructs the
Program to 'skip this iteration'.

📝 `pass` — placeholder that performs no action.pass is a null statement in python.
It instructs to 'do nothing'

```python
# continue example
for i in range(1, 11):
    if i % 3 == 0 or i % 5 == 0:
        continue
    print(i)
```

```python
# pass example
for i in range(1, 11):
    if i % 2 != 0:
        pass
    else:
        print(i)

print('bye')
```

---

## 9. Functions

📝 Functions are reusable, callable blocks of code.

```python

def sum(a,b):
  s=a+b
  return s
print(sum(2,3))


def greet(name):
    return f"Hello, {name}!"

print(greet("Sam"))
```

**Function with parameters**
```python
def add(a, b):
    return a + b

print(add(10, 20))
```
**function with default parameter**
```python
def greet(name = "sam"):
 # function body
greet() # name will be "sam" in function body (default)
greet("Rik") # name will be "Rik" in function body (passed)
```
**recursion**
Recursion is a function which calls itself.
It is used to directly use a mathematical formula as function

```python
def factorial(n):
 if i == 0 or i==1:
 return 1
 else:
 return n*factorial(n-1)

```
**Multiple functions**
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

print(add(10, 5))
print(subtract(10, 5))
```

**Variable-length arguments**
```python
def sum_squares(*n):
    res = 0
    for x in n:
        res = res + x * x
    return res

print(sum_squares())
print(sum_squares(10, 20))
print(sum_squares(10, 20, 30))
```

**Instance vs Static Method**
- **Instance method** — uses `self`
- **Static method** — doesn't use `self` or class data

```python
class Math:

    def square(self, x):       # Instance method
        return x * x

    @staticmethod
    def add(a, b):              # Static method
        return a + b

m = Math()
print(m.square(4))       # 16
print(Math.add(2, 3))    # 5
```

---

## 10. Anonymous/Lambda Functions

📝 A function without a name, reduces code. Normal functions use `def`; lambda functions use `lambda`.

```python
square = lambda x: x * x
print(square(5))

s = lambda a, b: a + b
print(s(2, 3))
```

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = filter(lambda x: x % 2 == 0, numbers)
print("Even numbers:", list(evens))

numbers = [1, 2, 3, 4]
squared = map(lambda x: x ** 2, numbers)
print(list(squared))
```

---

## 11. Decorators

📝 Decorators modify the behavior of a function.

`@.getters and @.setters`

The method name with '@property' decorator is called getter method.
We can define a function + @ name.setter decorator like below:

```python
@name.setter
def name(self,value):
 self.ename = value
```

```python
def logger(func):
    def wrapper():
        print("Executing")
        func()
    return wrapper

@logger
def greet():
    print("Hello")
```

---

## 12. Scope

**Local variable**
```python
def test():
    x = 10
    print(x)
```

**Global variable**
```python
x = 10

def show():
    print(x)
```

---

## 13. Classes and Objects

📝 **Class** — a blueprint of data and functions.

📝 **Object** — a real instance of a class.

```python
#exp 1
class Student:
    pass
s1 = Student()

#exp 2
class Student:
    def __init__(self):
        print(self)

s1 = Student()
print(s1) # s1 object reff == self

#exp 3

class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def get_avg(self):
        sum = 0
        for val in self.marks:
            sum += val
        print("hi", self.name, "your avg score is:", sum/4)


s1 = Student("Sam", [55, 76, 36, 47])
s1.get_avg()
```

**Deep Copy vs Shallow Copy**

📝 A **deep copy** creates a completely independent copy, including nested objects.

📝 A **shallow copy** creates a new object, but nested objects remain shared.

```python
import copy

original = [[1, 2], [3, 4]]

deep = copy.deepcopy(original)
deep[0][0] = 100
print(original)  # [[1, 2], [3, 4]]
print(deep)       # [[100, 2], [3, 4]]

shallow = copy.copy(original)
shallow[0][0] = 100
print(original)  # [[100, 2], [3, 4]]
print(shallow)    # [[100, 2], [3, 4]]
```

## Dataclasses (@dataclass)

A Dataclass is a Python feature introduced in Python 3.7 that automatically generates special methods such as:
```
__init__()
__repr__()
__eq__()
__hash__() (optional)
```
using the `@dataclass` decorator.

It reduces boilerplate code when creating classes primarily used to store data.

Without @dataclass:

```python
class Employee:
    def __init__(self, name, age):
        self.name = name
        self.age = age

emp = Employee("John", 25)
print(emp.name)
```
With @dataclass:

```python
from dataclasses import dataclass

@dataclass
class Employee:
    name: str
    age: int

emp = Employee("John", 25)
print(emp.name)
```
---

## 14. Constructor (`__init__`)

📝 Automatically called when an object is created. `__init__(self)` is the default constructor.All classes have a function called __init__(), which is always executed when the object is being initiated

**Public Members**

📝 Accessible from anywhere, inside and outside the class.
```python
#exp 1
class Employee:
    def __init__(self):
        self.name = "Harry"  # Public variable

emp = Employee()
print(emp.name)

#exp 2
class Student:

def __init__( self, fullname ):

self.name = fullname
s1=Student("sam")
print(s1.name)
```

**Private Members**

📝 Prefixed with double underscore (`__`), intended for internal use only.
```python
class Employee:
    def __init__(self):
        self.__salary = 50000

emp = Employee()
# print(emp.__salary)  # ❌ Error — not accessible directly
```

---

## 15. Encapsulation

```python
class Account:

    def __init__(self, bal, acc):
        self.bal = bal
        self.acc = acc

    def debit(self, amount):
        self.bal -= amount

    def credit(self, amount):
        self.bal += amount

    def get_balance(self):
        return self.bal

acc1 = Account(10000, 12000)
acc1.debit(5000)
acc1.credit(20000)

print(acc1.get_balance())
```

---

## 16. Inheritance

📝 Inheritance lets one class acquire properties of another class.

**Types Of Inheritance**

- Single inheritance

- Multiple inheritance

- Multilevel inheritance

```python
class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def introduce(self):
        print(self.name)

employee = Employee("Rupai")
employee.introduce()
```
**super() Method**

super() method is used to access the methods of a super class in the derived class.

**Implicit inheritance**

📝 If no parent class is specified, Python automatically inherits from `object`.
```python
class Student:
    pass

s = Student()
print(isinstance(s, object))  # True
```

---

## 17. Polymorphism

📝 Same method behaves differently depending on context.

**Method Overloading** — same method name, different parameters
```python
class Calculator:
    def add(self, *nums):
        return sum(nums)

obj = Calculator()
print(obj.add(1, 2))
print(obj.add(1, 2, 3, 4))
```

**Method Overriding** — child class provides its own implementation of a parent method
```python
class Animal:
    def make_sound(self):
        print("Animal Sound")

class Dog(Animal):
    def make_sound(self):
        print("Bark")

class Cat(Animal):
    def make_sound(self):
        print("Meow")

dog = Dog()
cat = Cat()
dog.make_sound()
cat.make_sound()
```

---

## 18. Property (`@property`)

📝 Works with class variables; acts like an attribute but calls a method internally.its a class methods

```python
class Person:
    compile = "dev"

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._email = None

    def introduce(self):
        return f"Hi, I am {self.name}, and {self.age} years old"

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, value):
        if "@" in value:
            self._email = value
        else:
            raise ValueError('invalid email')

person1 = Person('Sam', 29)
person1.email = "sam@gmail.com"
print(person1.introduce(), person1.email)
```

**Property decorator — alternate example**
```python
class Employee:

    @property
    def name(self):
        return self.ename

    @name.setter
    def name(self, value):
        self.ename = value

e = Employee()
e.name = "Harry"
print(e.name)
```

---

## 19. Closures

📝 An inner function that remembers variables from its outer (enclosing) function.

```python
def create_multiply(factor):
    def multiply(num):
        return num * factor
    return multiply

double = create_multiply(2)
triple = create_multiply(3)

print(double(2))
print(triple(2))
```

---

## 20. Generators

📝 Produce values one at a time using `yield`. Memory efficient — suitable for large datasets.

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
print(next(gen))
print(next(gen))
print(next(gen))
```

---
## 20.1  __main__

 `__main__` is a special Python identifier used to determine whether a Python file is being:Run directly
Imported as a module into another file

Python automatically sets the special variable main.

`Purpose of __main__`

✅ Prevent specific code from running during imports

✅ Separate reusable code from executable code

✅ Improve module organization

✅ Support testing and debugging

✅ Follow Python best practices

```python
#EXP 1
def greet():
    print("Hello")

if __name__ == "__main__":
    greet()

#EXP 2
def add(a, b):
    return a + b

if __name__ == "__main__":
    result = add(10, 20)
    print(result)
```
---

## 21. Exception Handling

📝 Used to handle runtime errors gracefully.

```python
def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "cannot divide by zero"
    except TypeError:
        return "invalid input type"
    except (Exception, ValueError) as e:
        return f"an error occurred: {e}"
    finally:
        print("division operation attempted")

if __name__ == "__main__":
    print(divide_numbers(10, 2))
    print(divide_numbers(10, 0))
```

📝 A `try` block **without** `except` or `finally` is always invalid. `try` with `finally`, or `try` with `except`, is valid.

```python
try:
    pass  # do operation
except Exception:
    pass  # handle exception
finally:
    pass  # always executes
```
```python
try:
 # Code
except ZeroDivisionError:
 # Code
except TypeError:
 # Code
except:
 # All other exceptions
```

```python

try:
 # Some code
except:
 # Some code
else:
 # Executed if try was successful
```

**Custom exceptions**

```python
class InvalidAgeError(Exception):
    pass

try:
    age = -10

    if age < 0:
        raise InvalidAgeError(
            "Age cannot be negative"
        )

except InvalidAgeError as e:
    print("Error:", e)
```


---

## 22. File Handling

 A file is data stored in a storage device. A python program can talk to the file by reading content from it and
writing content to it.
There are 2 types of files:
1. Text files (.txt, .c, etc)
2. Binary files (.jpg, .dat, etc)

```python
# Read file
def read_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            return file.read()
    except FileNotFoundError:
        return "file not found"
    except PermissionError:
        return "permission denied"

# Write file
def write_file(filename, content):
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content + '\n')

# Append file
def append_file(filename, content):
    with open(filename, 'a', encoding='utf-8') as file:
        file.write(content + '\n')

if __name__ == "__main__":
    file_name = "myfile.txt"
    print(read_file(file_name))
    write_file(file_name, "Hello, this is from python side.")
    print(read_file(file_name))
```

---

## 23. Modules and PIP

📝 A module is a Python file containing code, used for code reusability.A module is a file containing code written by somebody else which can be imported and used in our programs.
Pip is the package manager for Python. You can use pip to install external modules on your system.

```python
import math
print(math.sqrt(25))

import random
print(random)
```

---

## 24. Packages

📝 A package is a collection of modules.

```python
from python.my_class_two import Person
```

---

## 25. Regular Expressions (Regex)

📝 Used for pattern matching.

```python
import re

def is_valid_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(pattern, email))

print(is_valid_email("user@gmail.com"))
```

---

## 26. API Calling

📝 API = Application Programming Interface, used to communicate with external systems.

```bash
pip install requests
```

```python
import requests

response = requests.get("https://jsonplaceholder.typicode.com/todos/1")
print(response.json())
```

---

## 27. Dictionary

📝 A collection of key-value pairs; values are accessed by key. Common methods: `get`, `values`, `keys`, `items`, `update`.

```python
student = {
    "name": "Sam",
    "age": 25
}

print(student["name"])

d = dict(((100, 'sam'), (200, 'rik')))
print(d.get(100))
print(d.popitem())
```
```python
{
 "key": "value",
 "harry": "code",
 "marks": "100",
 "list": [1, 2, 9]
 }
 print(a["key"]) # Output: "value"
 print(a["list"]) # Output: [1, 2, 9]
```
**dictionary method**

a.items(): Returns a list of (key,value) tuples.

a.keys(): Returns a list containing dictionary's keys.

a.values( ) #returns all values

a.update({"friends":}): Updates the dictionary with supplied key-value pairs.

a.get("key_name"): Returns the value of the specified keys.

---

## 28. Sets

📝 Store unique values; does not follow any order/sequence.

**property of sets**

Sets are unordered => Element’s order doesn’t matter

Sets are unindexed => Cannot access elements by index

There is no way to change items in sets.

Sets cannot contain duplicate values.

**operation on sets**

len(s),remove(),pop(),clear(),union(),intersection()

```python
nums = {1, 2, 3, 3, 4}
print(nums)  # {1, 2, 3, 4}
```

---

## 29. Tuples

📝 Similar to a list but **immutable**. Iteration is faster than a list.

```python
point = (10, 20)
print(point[0])

# Swap variables using tuple packing/unpacking
(x, y) = (y, x)
```
**Tuple Methods**

a.count(1): a count (1) will return number of times 1 occurs in a.

a.index(1) will return the index of first occurrence of 1 in a.

---

## 30. List

📝 A mutable sequence of Python objects, defined with `[]`. Can store multiple values of any type.

```python
l1 = [2,4,"sam"]
l1[2] # sam
l1[0:2] # [2,4]

nums = [10, 20, 30, 40]
print(nums[2:])    # [30, 40]
nums.pop()
print(nums)         # [10, 20, 30]
nums.insert(2, 99)
print(nums)         # [10, 20, 99, 30]
```
**List Methods**

l1.sort(): updates the list to [1,2,4,6,10,20]

l1.reverse(): updates the list to [20,10,6,4,2,1]

l1.append(8): adds 8 at the end of the list

l1.insert(3,8): This will add 8 at 3 index

l1.pop(2): Will delete element at index 2 and return its value.

l1.remove(21): Will remove 21 from the list.

---
## 31. async, await, and asyncio

Asynchronous Programming allows a program to perform multiple tasks concurrently without waiting for one task to finish before starting another.

Python provides asynchronous programming through:

1. async
2. await
3. asyncio module

It is mainly useful for:

- API calls
- Database operations
- File operations
- Network requests
- Web applications (FastAPI, LangGraph)

Key Components

1. `async`

Used to define an asynchronous function (coroutine).
async def greet():
    print("Hello")

2. `await`

Used inside an async function to wait for an asynchronous operation.
await some_function()

3. `asyncio`

Built-in Python library for asynchronous programming.

```python
import asyncio

async def demo():

    print("Begin")

    await asyncio.sleep(3)

    print("End")

asyncio.run(demo())
```
---
## 32. Python *args and **kwargs

`*args`

*args allows a function to accept any number of positional arguments.

args stands for arguments.
Arguments are stored as a tuple.
The name args is a convention; any name can be used.
```python
def show(*args):
    print(args)

show(10, 20, 30)
```
`**kwargs`

**kwargs allows a function to accept any number of keyword arguments.

kwargs stands for keyword arguments.
Arguments are stored as a dictionary.
The name kwargs is a convention; any name can be used.

```python
def show(**kwargs):
    print(kwargs)

show(name="John", age=25)
```
---
## 📦 Project 1: quiz game
```python
print("🐳 Welcome to Docker Quiz!")

playing = input("Do you want to play? (yes/no): ")

if playing.lower() != "yes":
    quit()

print("Okay! Let's play 😊")
score = 0

# Question 1
answer = input("1. What is Docker Hub? ")

if answer.lower() == "docker registry":
    print("✅ Correct!")
    score += 1
else:
    print("❌ Incorrect! Docker Hub is a Docker registry.")

# Question 2
answer = input("2. Which Docker component manages images, containers, networks, and volumes? ")

if answer.lower() == "docker daemon":
    print("✅ Correct!")
    score += 1
else:
    print("❌ Incorrect! Correct answer: Docker Daemon")

# Question 3
answer = input("3. What command-line tool is used to interact with Docker? ")

if answer.lower() == "docker cli":
    print("✅ Correct!")
    score += 1
else:
    print("❌ Incorrect! Correct answer: Docker CLI")

# Question 4
answer = input("4. What does REST API allow in Docker? ")

if answer.lower() == "communication":
    print("✅ Correct!")
    score += 1
else:
    print("❌ Incorrect! It allows communication between Docker CLI and Docker Daemon.")



print("\n📊 Quiz Completed!")
print("Your score:", score, "/ 4")

percentage = (score / 4) * 100
print("Percentage:", percentage, "%")

if percentage >= 80:
    print("🏆 Excellent!")
elif percentage >= 50:
    print("👍 Good Job!")
else:
    print("📚 Keep Learning Docker!")
```
---

## 📦 Project 2:password manager application

```python
master_pwd = "admin123"

pwd = input("What is the master password? ")

if pwd != master_pwd:
    print("Incorrect master password!")
    quit()


def view():
    try:
        with open("passwords.txt", "r") as f:
            for line in f.readlines():
                data = line.rstrip()
                user, passw = data.split("|")
                print(f"Account: {user} | Password: {passw}")
    except FileNotFoundError:
        print("No passwords saved yet.")


def add():
    name = input("Account Name: ")
    pwd = input("Password: ")

    with open("passwords.txt", "a") as f:
        f.write(name + "|" + pwd + "\n")

    print("Password added successfully!")


while True:
    mode = input(
        "\nWould you like to add a new password or view existing passwords? (view/add, q to quit): "
    ).lower()

    if mode == "q":
        break

    if mode == "view":
        view()

    elif mode == "add":
        add()

    else:
        print("Invalid mode.")


print("Goodbye!")
```
---

## 📦 Project 3:Rock-Paper-Scissors game
```python
import random

choices = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissors"
}

user_score = 0
computer_score = 0


def is_win(player, computer):
    return (
        (player == "r" and computer == "s") or
        (player == "s" and computer == "p") or
        (player == "p" and computer == "r")
    )


while True:
    user = input("\nEnter 'r' for Rock, 'p' for Paper, 's' for Scissors (q to quit): ").lower()

    if user == "q":
        break

    if user not in ["r", "p", "s"]:
        print("❌ Invalid choice. Try again!")
        continue

    computer = random.choice(["r", "p", "s"])

    print(f"\nYou chose: {choices[user]}")
    print(f"Computer chose: {choices[computer]}")

    if user == computer:
        print("🤝 It's a Tie!")

    elif is_win(user, computer):
        print("✅ You Won this round!")
        user_score += 1

    else:
        print("❌ Computer Won this round!")
        computer_score += 1

    print(f"\nCurrent Score:")
    print(f"You: {user_score}")
    print(f"Computer: {computer_score}")

print("\n===== GAME OVER =====")
print(f"Final Score -> You: {user_score} | Computer: {computer_score}")

if user_score > computer_score:
    print("🏆 Congratulations! You are the overall winner.")
elif computer_score > user_score:
    print("💻 Computer wins the game!")
else:
    print("🤝 The game ended in a tie.")

print("Thanks for playing!")
```
---
## 📦 Project 4: guess game

```python
secret_number = 9
guess_count = 0
guess_limit = 5

while guess_count < guess_limit:
    guess = int(input('Guess: '))
    guess_count += 1

    if guess == secret_number:
        print(f"Correct! You guessed the number in {guess_count} attempts.")
        break
    elif guess > secret_number:
        print("Lower number please")
    elif guess < secret_number:
        print("Higher number please")
```

## 📦 Project 2: snake game

```python
import random

choices = ["snake", "water", "gun"]

user = input("Enter Snake, Water or Gun: ").lower()
computer = random.choice(choices)

print("Computer chose:", computer)

if user == computer:
    print("It's a Draw!")
elif (user == "snake" and computer == "water") or \
     (user == "water" and computer == "gun") or \
     (user == "gun" and computer == "snake"):
    print("You Win!")
else:
    print("Computer Wins!")
```

## 📦 Project 5: emoji converter

```python
message = input("> ")
words = message.split(' ')

emojis = {
    ":)": "😀",
    ":(": "😞"
}

output = ""

for word in words:
    output += emojis.get(word, word) + " "

print(output)
```

## 📦 Project 6: Realtime Voice Bot (Streamlit)

**Setup**
```bash
python -m venv .venv
.venv\Scripts\activate

# create requirements.txt with: streamlit, gtts
pip install streamlit gtts
pip install -r requirements.txt

# run
streamlit run main.py
```

**main.py**
```python
import streamlit as st
from gtts import gTTS
import tempfile

st.title("🎙️ Simple Voice Bot")

# Dummy Responses
responses = {
    "hello": "Hi, nice to meet you.",
    "how are you": "I am fine and ready to help.",
    "your name": "I am a simple voice bot.",
    "bye": "Goodbye. Have a great day."
}

# Voice Input
audio = st.audio_input("Speak Something")

if audio:
    # Dummy converted text — replace with real speech-to-text if needed
    user_text = st.text_input("Enter recognized text", value="hello")

    st.success(f"You: {user_text}")

    # Find Response
    reply = "Sorry, I don't understand."
    for key in responses:
        if key in user_text.lower():
            reply = responses[key]
            break

    st.success(f"Bot: {reply}")

    # Text To Speech
    tts = gTTS(reply)

    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as f:
        tts.save(f.name)

        with open(f.name, "rb") as audio_file:
            st.audio(audio_file.read(), format="audio/mp3")
```

---

## What is an API?

API (Application Programming Interface) is a contract that allows two software systems to communicate using predefined rules.
Response comes back through the API from db.
```
Database
   |
Backend
   |
API
   |
Frontend
```
## Why Do We Need APIs?

Without APIs, every application would need direct access to backend logic and databases.
Problems:
- Security Risk
- Tight Coupling
- Difficult Maintenance
------------------------
## what is FastAPI?
FastAPI is a modern high-performance Python framework used to build APIs quickly and efficiently.
It acts as a communication layer between frontend applications and backend services. It is considered fast because it supports asynchronous processing using async and await. Similar to a restaurant waiter who takes multiple orders while food is being prepared, FastAPI can handle other requests while waiting for database queries, external APIs, or LLM responses, resulting in better performance, scalability, and user experience.
FastAPI supports automatic request and input validation using Pydantic, reducing boilerplate code and improving reliability. It also integrates seamlessly with modern technologies and tools such as JWT authentication, Docker, Kubernetes, databases, and cloud-native applications.

FastAPI HTTP Methods -

HTTP methods define what action a client wants to perform on a resource.FastAPI supports standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE

1. GET Method
Used to retrieve data.
2. POST Method
Used to create new data.
3. PUT Method
Used to update an entire resource.
4. PATCH Method
Used to partially update data.
5. DELETE Method
Used to remove data.

**patients.json**
```
[
    {
        "id": 1,
        "name": "John Doe",
        "age": 35,
        "disease": "Diabetes",
        "city": "New York"
    },
    {
        "id": 2,
        "name": "Alice Smith",
        "age": 28,
        "disease": "Fever",
        "city": "Chicago"
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "age": 42,
        "disease": "Hypertension",
        "city": "Dallas"
    }
]
```

**main.ts**

```python
from fastapi import FastAPI, HTTPException
import json
from pydantic import BaseModel, Field
from typing import Annotated
from fastapi.responses import JSONResponse

app = FastAPI()

class Patient(BaseModel):
    id: Annotated[
        int,
        Field(
            ...,
            description="Unique ID of the patient",
            examples=[1]
        )
    ]

    name: Annotated[
        str,
        Field(
            ...,
            description="Name of the patient",
            examples=["John Doe"]
        )
    ]

    age: Annotated[
        int,
        Field(
            ...,
            description="Age of the patient"
        )
    ]

    disease: Annotated[
        str,
        Field(
            ...,
            description="Disease diagnosed for the patient",
            examples=["Diabetes"]
        )
    ]

    city: Annotated[
        str,
        Field(
            ...,
            description="City where the patient lives",
            examples=["New York"]
        )
    ]

def load_data():
    with open("patients.json", "r") as f:
        data = json.load(f)
    return data
def save_data(data):
    with open("patients.json", "w") as f:
        json.dump(data, f, indent=4)


@app.get("/patients")
def get_patients(city: str = None, sort_by: str = None):
    data = load_data()

    # Filter by city
    if city:
        data = [patient for patient in data
                if patient["city"].lower() == city.lower()]

    # Sort by age
    if sort_by == "age":
        data = sorted(data, key=lambda x: x["age"])

    return data

@app.get("/patient/{patient_id}")
def get_patient(patient_id: int):
    data = load_data()

    for patient in data:
        if patient["id"] == patient_id:
            return patient

    raise HTTPException(
        status_code=404,
        detail="Patient not found"
    )



@app.post("/create")
def create_patient(patient: Patient):
    data = load_data()

    # Check if patient already exists
    for existing_patient in data:
        if existing_patient["id"] == patient.id:
            raise HTTPException(
                status_code=400,
                detail="Patient already exists"
            )

    # Add new patient
    data.append(patient.model_dump())

    # Save updated data
    save_data(data)

    return {
        "message": "Patient created successfully",
        "patient": patient
    }


@app.delete("/delete/{patient_id}")
def delete_patient(patient_id: int):

    # load data
    data = load_data()

    # find patient
    patient = next(
        (p for p in data if p["id"] == patient_id),
        None
    )

    if patient is None:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    # remove patient
    data.remove(patient)

    # save updated data
    save_data(data)

    return JSONResponse(
        status_code=200,
        content={"message": "Patient deleted"}
    )
```
---

## 📦 Project 5: FastAPI CRUD App

**Setup**
```bash
python -m venv venv
.\venv\Scripts\Activate.ps1

pip install fastapi uvicorn
uvicorn main:app --reload

# Root:        http://127.0.0.1:8000
# Swagger UI:  http://127.0.0.1:8000/docs

deactivate
```

**main.py**
```python
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List

app = FastAPI(
    title="Model API",
    description="CRUD API using FastAPI",
    version="1.0.0"
)

# Pydantic Model
class Model(BaseModel):
    id: int
    name: str
    origin: str

# In-memory storage
models: List[Model] = [
    Model(id=1, name="Model A", origin="India"),
    Model(id=2, name="Model B", origin="Japan"),
    Model(id=3, name="Model C", origin="Germany"),
]

# Root route
@app.get("/")
def home():
    if not models:
        return {"message": "No models found"}
    return {
        "message": "Models fetched successfully",
        "count": len(models),
        "data": models
    }

# Get all models
@app.get("/model", response_model=List[Model], status_code=status.HTTP_200_OK)
def get_models():
    return models

# Get model by ID
@app.get("/model/{model_id}", response_model=Model, status_code=status.HTTP_200_OK)
def get_model(model_id: int):
    for item in models:
        if item.id == model_id:
            return item
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Model not found")

# Add new model
@app.post("/model", response_model=Model, status_code=status.HTTP_201_CREATED)
def add_model(model: Model):
    for item in models:
        if item.id == model.id:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Model ID already exists")
    models.append(model)
    return model

# Update model
@app.put("/model/{model_id}", response_model=Model, status_code=status.HTTP_200_OK)
def update_model(model_id: int, updated_model: Model):
    for index, item in enumerate(models):
        if item.id == model_id:
            models[index] = updated_model
            return updated_model
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Model not found")

# Delete model
@app.delete("/model/{model_id}", status_code=status.HTTP_200_OK)
def delete_model(model_id: int):
    for index, item in enumerate(models):
        if item.id == model_id:
            deleted = models.pop(index)
            return {"message": "Model deleted successfully", "deleted": deleted}
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Model not found")
```

# 🔢 NumPy & 🐼 Pandas Notes

---

# 🔢 NumPy

## 1. What is NumPy?

📝 NumPy (**Num**erical **Py**thon) is a popular Python library used for numerical computing and scientific calculations.

**Uses of NumPy**
- Numerical operations
- Scientific computing
- Matrix operations
- Statistical analysis
- Data processing
- Foundation for Pandas

**Why NumPy?**
- Faster than Python lists
- Less memory usage
- Supports multidimensional arrays
- Stores data in rows and columns.
- Can hold only one data type

---

## 2. Install & Run

```bash
python --version
pip --version

python -m venv myenv
.\myenv\Scripts\Activate.ps1

pip install numpy
python app.py

pip install notebook
jupyter notebook
```

---

## 3. ndarray (N-Dimensional Array)

📝 The main data structure in NumPy is `ndarray`.

**Features**
- Stores same-datatype elements
- Supports 1D, 2D, 3D arrays
- Fast calculations
- Can hold only one data type.

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

print(arr)
print(type(arr))
```

---

## 4. Creating Arrays

```python
import numpy as np

arr = np.array([10, 20, 30])
print(arr)

np.zeros((2,3))
np.ones((3,2))
np.empty((2,2))
np.full((2,2),5)
```

---

## 5. Structured Array

📝 Different fields can be stored using custom datatypes.It's stores multiple data types in one array (like database rows).

```python
student_dtype = [
    ('name', 'U20'),
    ('age', 'i4'),
    ('marks', 'f4')
]

students = np.array([
    ("Alice", 21, 85.5),
    ("Bob", 22, 90.0),
    ("Charlie", 20, 72.3)
], dtype=student_dtype)

print(students)

student = np.array([
    (1,"Rahul",85.5),
    (2,"Amit",90.0)
],dtype=[("id","i4"),("name","U10"),("marks","f4")])

print(student["name"]) #['Rahul' 'Amit']
```

---

## 6. Shape of Array

📝 Shape tells the dimensions of an array.
Shape = Number of rows and columns.

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a.shape)
print(b.shape)
print(a.shape == b.shape)

a.ndim      # dimensions
a.size      # total elements
a.dtype     # datatype
```

---

## 7. Datatype (`dtype`)

📝 `dtype` specifies the datatype stored in an array.

```python
arr = np.array([2, 5, 6], dtype=int)
print(arr.dtype)
```

---

## 8. Change Datatype

📝 Use `astype()`.

```python
arr = np.array([2, 5, 6])

new_arr = arr.astype(float)

print(new_arr)
print(new_arr.dtype)
```

---

## 9. Creating a Range of Values

**`np.arange()`** — creates evenly spaced values

```python
# np.arange(start, stop, step)
arr = np.arange(0, 10, 2)
print(arr)
```

**`np.linspace()`** — creates equal intervals between numbers

```python
# np.linspace(start, stop, number_of_values)
arr = np.linspace(0, 160, 5)
print(arr)
```

---

## 10. Reshaping Arrays

📝 Convert one shape into another.

```python
arr = np.arange(12)
reshaped = arr.reshape(3, 4)
print(reshaped)
```

---

## 11. Flattening Arrays

📝 Convert a multidimensional array into 1D.

```python
flat = reshaped.flatten()
print(flat)
```

---

## 12. Broadcasting

📝 Allows operations between arrays of different sizes.

```python
arr = np.array([1, 2, 3])
result = arr + 10
print(result)
```

---

## 13. Accessing Elements

**Positive & negative indexing**
```python
arr = np.array([10, 20, 30, 40])

print(arr[0])    # 10
print(arr[2])    # 30
# using negative index
print(arr[-1])   # 40
print(arr[-2])   # 30
```

---

## 14. Indexing and Slicing

`s=array[start:end]`

```python
arr = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

arr[0, 2]     # single element
arr[:, 0]     # first column
arr[1, :]     # entire row
arr[0:2, :]   # first two rows
arr[::-1]     # reverse array
```

---

## 15. Mathematical Functions

```python
a = np.array([10, 20, 30, 40])

np.min(a)
np.max(a)
np.sum(a)
np.mean(a)
np.sqrt(a)
np.var(a)
```

---

## 16. Boolean Filtering

Filter using conditions.

**Values less than 100**
```python
products = np.array([10, 40, 300, 100, 55])
print(products[products < 100])
```

**Employees with salary greater than 50000**
```python
employee = np.array([
    [101, 25, 30000],
    [102, 32, 55000],
    [103, 40, 80000]
])

print(employee[employee[:, 2] > 50000])
```

---
## 17.Mathematical Operations

```python
arr.sum()
arr.mean()
arr.max()
arr.min()
arr.std()
np.random.rand(3)
```
---

# 🐼 Pandas

## 1. What is Pandas?

📝 Pandas is an open-source Python library used for:
- Data Analysis
- Data Cleaning
- Data Manipulation
- Data Processing
- Reading and Writing Files (Excel, CSV, JSON)

📝 Built on top of NumPy. Handles large structured datasets efficiently. Can create visualizations like bar charts, scatter plots, and box plots.

```bash
pip install pandas
```

```python
import pandas as pd
```

---

## 2. Series Object

📝 A `Series` is a one-dimensional labeled array that can store integers, floats, strings, etc.

```python
# Syntax
pd.Series(data, index=None, dtype=None)
```

**Example 1**
```python
import pandas as pd

s = pd.Series([10, 20, 30, 40, 50], name="Numbers")

print(s)
print(s.values)
print(s.index)
print(s[1])
print(s[1:3])
```

**Example 2 — custom index**
```python
cars = pd.Series(
    [70000, 20000, 30000],
    index=['Swift', 'BMW', 'McLaren']
)

print(cars['Swift'])
```

---

## 3. DataFrame Object

📝 A `DataFrame` is a two-dimensional data structure consisting of rows and columns.

**Ways to create a DataFrame**
- Dictionary
- List of Dictionaries
- List of Lists
- Series

**From a dictionary**
```python
data = {
    "Name": ["John", "Sam"],
    "Age": [25, 30]
}

df = pd.DataFrame(data)

print(df)
print(df.shape)
```

**Adding a column**
```python
df["Salary"] = [50000, 60000]
print(df)
```

**From a list of dictionaries**
```python
data = [
    {"Name": "Sam", "Marks": 50},
    {"Name": "Rupai", "Marks": 66}
]

df = pd.DataFrame(data)
```

---

## 4. Data Selection

```python
# Single column
print(df["Name"])

# Multiple columns
print(df[["Name", "Salary"]])

# Row by loc
print(df.loc[0])

# Row by position
print(df.iloc[0])

# Rows and columns by position
print(df.iloc[0:2, 0:2])

# Using loc (label-based)
df.loc['p', 'a']
```

---

## 5. Statistical Operations

📝 Common operations on numeric columns.

```python
df["Age"].mean()     # Average
df["Age"].max()      # Maximum
df["Age"].min()      # Minimum
df["Age"].sum()       # Sum
df["Age"].count()    # Count
```

---

## 6. Handling Missing Values (NaN)

📝 `NaN` means "Not a Number" and represents missing data.

```python
import numpy as np

data = {
    "A": [1, 2, np.nan, 4],
    "B": [np.nan, 2, 3, 4]
}

df = pd.DataFrame(data)
```

**Check, remove, and replace missing values**
```python
df.isnull()
df.notnull()
df.isna()
df.isna().sum()
df.isna().any()
df.dropna()

df["Salary"] = df["Salary"].replace(np.nan, 30000)
```

---

## 7. Reading Files

```python
df = pd.read_csv("customer.csv")
df = pd.read_excel("customer.xlsx")
df = pd.read_json("data.json")
```

**Useful inspection functions**
```python
df.head(10)
df.describe()
df.isnull().sum()
df.duplicated()
```

---

## 8. Data Cleaning

📝 The process of detecting and fixing incorrect, missing, duplicate, or irrelevant data.

**Common steps**
- Remove duplicates
- Handle missing values
- Correct data types
- Standardize data formats

```python
#Rename columns
df.rename(columns={"Age":"StudentAge"})

#Replace datatype
df.replace("NA",0)

#Remove dupliicate
df.drop_duplicates()
```

---

## 9. GroupBy (Data Summary)

📝 Used to summarize data by categories.

**Count employees by department**
```python
df.groupby("Department")["Salary"].mean()

gp = df.groupby("Department").agg({"Gender": "count"})
print(gp)
```

**Department and gender count**
```python
gp = df.groupby(["Department", "Gender"]).agg({"Gender": "count"})
```

**Maximum salary by country**
```python
gp = df.groupby("Country").agg({"Annual Salary": "max"})
```

---

## 10. Merge, Join, and Concatenate

**Merge** — combine DataFrames using a common column
```python
pd.merge(df1, df2, on="Id")
```

**Concatenate**
```python
pd.concat([df1, df2])
```

**Compare**
```python
df1.compare(df2)
```

---

## 11. Pivot Table

📝 A pivot table summarizes and reorganizes data.

```python
pd.pivot_table(
    df,
    values="Salary",
    index="Department",
    aggfunc="mean"
)
```

---

## 12. Creating DataFrames — More Patterns

**Using a dictionary**
```python
dc = {
    "C1": ["1", "3"],
    "C2": ["2", "4"]
}

df = pd.DataFrame(dc)
```

**Using a list of dictionaries**
```python
lst = [
    {"C1": 1, "C2": 2},
    {"C1": 5, "C2": 10, "C3": 20}
]

df = pd.DataFrame(lst)
```

**Using a list of lists (with custom index/columns)**
```python
lst = [[53, 32], [45, 85]]

df = pd.DataFrame(
    lst,
    index=['p', 'q'],
    columns=['a', 'b']
)
```

---

## 13. Filtering Data

**Multiple condition**
```python
df[(df["Age"]>20) & (df["Marks"]>80)]
```

**Row names ending with 'e'**
```python
df.filter(regex='e$', axis=0)
```

**Column names starting with 'c'**
```python
df.filter(regex='^c', axis=1)
```

---

## 14. Reshaping with MultiIndex

```python
multi_ind = pd.MultiIndex.from_tuples(
    [('IND', 'Game1'),
     ('US', 'Game2')],
    names=['Country', 'Games']
)

df = pd.DataFrame(
    [[1, 2], [3, 4]],
    index=multi_ind,
    columns=['Year1', 'Year2']
)
```
---
## 15.String operation
```python
df["Name"].str.upper()

df["Name"].str.lower()

df["Name"].str.contains("A")
```
---
## 16.Date & time
```python
df["Date"] = pd.to_datetime(df["Date"])

df["Year"] = df["Date"].dt.year

df["Month"] = df["Date"].dt.month
```
---