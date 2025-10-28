# Find largest word in sentence
s = "Frontend Developer Interview"
largest_word = max(s.split(), key=len)
print(largest_word)  # Developer
