# Merge dictionaries
obj1 = {'a': 1, 'b': 2}
obj2 = {'b': 3, 'c': 4}
merged_object = {**obj1, **obj2}  # similar to JS spread operator
print(merged_object)  # {'a': 1, 'b': 3, 'c': 4}

# Group dictionaries
def group_obj(*objs):
    return list(objs)

print(group_obj(obj1, obj2))  # [{'a': 1, 'b': 2}, {'b': 3, 'c': 4}]
