# Define operations
operations = {
    'A': lambda a, b: a + b,
    'B': lambda a, b: a - b,
    'C': lambda a, b: a * b,
    'D': lambda a, b: a / b
}

# Function to compute
def compute(a, b, op):
    return operations[op](a, b)

# Test cases
print(compute(4, 2, 'A'))  # 6
print(compute(4, 2, 'C'))  # 8
