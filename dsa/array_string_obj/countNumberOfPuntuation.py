# Count number of punctuation in a string
s = "Hi ! sam. what's up?"
count = 0

for ch in s:
    if ch in ['!', ',', ';', '.', '?', '-', "'", '"', ':']:
        count += 1

print(count)
