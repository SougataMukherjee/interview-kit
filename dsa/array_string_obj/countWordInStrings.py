# Count words in a string
s = "Hi ! sam. what's up?"
words = s.split(" ")
count = 0

for w in words:
    if w != "":
        count += 1

print(count)
