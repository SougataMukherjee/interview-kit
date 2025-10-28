def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

a = "listen"
b = "silent"
print(is_anagram(a, b))
