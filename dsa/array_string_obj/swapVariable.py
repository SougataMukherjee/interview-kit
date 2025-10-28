# Swap two variables without a third variable
a, b = 5, 10

# Using Python tuple unpacking (like JS array destructuring)
a, b = b, a
print(a, b)  # 10 5

# Alternatively, using arithmetic method
a, b = 5, 10
a = a + b
b = a - b
a = a - b
print(a, b)  # 10 5
