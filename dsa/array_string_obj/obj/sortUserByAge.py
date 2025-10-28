users = [
    {"id": 1, "age": 20, "name": "sam"},
    {"id": 2, "age": 15, "name": "sou"},
    {"id": 3, "age": 30, "name": "Rik"}
]

# Sort users by age in descending order
users_sorted = sorted(users, key=lambda x: x["age"], reverse=True)

print(users_sorted)
