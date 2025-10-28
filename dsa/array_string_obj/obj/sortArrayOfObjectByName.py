users = [{"name": "Sam", "age": 25}, {"name": "Ana", "age": 22}]

# Sort by age
sorted_users = sorted(users, key=lambda x: x["age"])

print(sorted_users)
