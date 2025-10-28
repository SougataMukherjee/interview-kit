# Check if string has only digits
s = "12345"
is_digit_only = all('0' <= ch <= '9' for ch in s)
print(is_digit_only)
