# Count vowels in a string
st = "javascript"
count = 0

for ch in st:
    if ch in "aeiou":
        count += 1

print("Total vowels:", count)
