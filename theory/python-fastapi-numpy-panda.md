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

📝 **Variable** — a container that stores values in memory.

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
name = input("Enter your name: ")
print("Hello", name)
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
s = 'sam'
print(s[2] == s[-1])  # True — last char == index 2
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
marks = 85

if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
else:
    print("C")
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

📝 `break` — exits the loop.
📝 `continue` — skips the rest of the current iteration.
📝 `pass` — placeholder that performs no action.

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
class Student:
    pass

s1 = Student()
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

---

## 14. Constructor (`__init__`)

📝 Automatically called when an object is created. `__init__(self)` is the default constructor.

**Public Members**

📝 Accessible from anywhere, inside and outside the class.
```python
class Employee:
    def __init__(self):
        self.name = "Harry"  # Public variable

emp = Employee()
print(emp.name)
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

📝 Works with class variables; acts like an attribute but calls a method internally.

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

---

## 22. File Handling

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

## 23. Modules

📝 A module is a Python file containing code, used for code reusability.

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

---

## 28. Sets

📝 Store unique values; does not follow any order/sequence.

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

---

## 30. List

📝 A mutable sequence of Python objects, defined with `[]`. Can store multiple values of any type.

```python
nums = [10, 20, 30, 40]

print(nums[2:])    # [30, 40]

nums.pop()
print(nums)         # [10, 20, 30]

nums.insert(2, 99)
print(nums)         # [10, 20, 99, 30]
```

---

## 📦 Project 1: Realtime Voice Bot (Streamlit)

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

## 📦 Project 2: FastAPI CRUD App

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
- Efficient mathematical calculations
- Supports vectorized operations

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
- Efficient memory usage

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
```

---

## 5. Structured Array

📝 Different fields can be stored using custom datatypes.

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
```

---

## 6. Shape of Array

📝 Shape tells the dimensions of an array.

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a.shape)
print(b.shape)
print(a.shape == b.shape)
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

📝 Allows operations between arrays and scalars of different sizes.

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
print(arr[-1])   # 40
print(arr[-2])   # 30
```

---

## 14. Indexing and Slicing

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
df.dropna()
df.drop_duplicates()
```

---

## 9. GroupBy (Data Summary)

📝 Used to summarize data by categories.

**Count employees by department**
```python
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