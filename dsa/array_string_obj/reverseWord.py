# Reverse words in a sentence
def reverse_word(s):
    rev = ""
    for ch in s[::-1]:  # iterate backwards
        rev += ch
    return rev

print(reverse_word("hello world"))
