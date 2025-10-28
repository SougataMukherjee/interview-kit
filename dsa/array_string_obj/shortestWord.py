# Find shortest word
s = "I love programming"
words = s.split()
shortest = min(words, key=len)
print(shortest)  # Output: I
