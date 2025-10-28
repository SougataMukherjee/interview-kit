s = "abcabcbb"
temp_str = ""

for i in range(len(s)):
    substr = ""
    for j in range(i, len(s)):
        if s[j] in substr:
            break
        substr += s[j]
    if len(substr) > len(temp_str):
        temp_str = substr

print(temp_str)
