def remove_property(obj, key):
    obj.pop(key, None)  # remove key if exists
    return obj

person = {"name": "Sam", "age": 25, "city": "Bangalore"}
print(remove_property(person, "city"))
