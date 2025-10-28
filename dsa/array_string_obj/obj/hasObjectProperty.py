def has_property(obj, key):
    return key in obj

user = {"name": "Sam", "age": 25}
print(has_property(user, "name"))  # True
print(has_property(user, "city"))  # False
