import json

def is_equal(obj1, obj2):
    return json.dumps(obj1, sort_keys=True) == json.dumps(obj2, sort_keys=True)

a = {"name": "Sam", "age": 25}
b = {"name": "Sam", "age": 25}

print(is_equal(a, b))
