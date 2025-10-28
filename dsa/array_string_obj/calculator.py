def calculator(a, b, operator):
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        if operator == '+':
            return a + b
        elif operator == '-':
            return a - b
        elif operator == '*':
            return a * b
        elif operator == '/':
            return a / b
        else:
            return "Invalid operator"
    else:
        return "Unknown value"

print(calculator(10, 5, '+'))

