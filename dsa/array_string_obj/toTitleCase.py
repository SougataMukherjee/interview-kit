def to_title_case(s):
    return ' '.join(word.capitalize() for word in s.lower().split())

print(to_title_case('hello world'))
