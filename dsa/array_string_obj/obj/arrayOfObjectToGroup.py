arr = [
    {"key": "A", "value": 10},
    {"key": "B", "value": 20},
    {"key": "C", "value": 30}
]

output = {}
for item in arr:
    output.setdefault(item["key"], []).append(item)

print(output)
