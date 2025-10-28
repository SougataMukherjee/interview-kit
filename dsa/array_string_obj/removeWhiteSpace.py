# Remove all white spaces
s = " a b c "
temp_s = ""

i = 0
while i < len(s):
    if s[i] != " ":
        temp_s += s[i]
    i += 1

print(temp_s)
