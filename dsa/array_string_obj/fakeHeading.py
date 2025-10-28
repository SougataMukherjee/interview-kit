import random

subjects = [
    "Sougata Mukherjee",
    "Rupai",
    "Sam Muk",
    "a group of girls",
    "company CEO",
    "Bus driver in Bangalore"
]

actions = [
    "cancels",
    "swimming with",
    "sleeps",
    "celebrates"
]

def rand(arr):
    return random.choice(arr)

def fake_heading():
    while True:
        subject = rand(subjects)
        action = rand(actions)
        print(f"\nBreaking News: {subject} {action}!")
        user_input = input("Do you want another headline? (yes/no): ").strip().lower()
        if user_input in ("no", "n"):
            print("\nThanks for using Fake Headline Generator!")
            break

fake_heading()
