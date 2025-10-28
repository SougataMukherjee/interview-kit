# Remove duplicate characters from a string
s = "banana"
unique_str = "".join(sorted(set(s), key=s.index))
print(unique_str)  # Output: "ban"

# Remove duplicates from arrays and merge
arr1 = [1, 2, 2, 3, 4, 4]
arr2 = [4, 5, 5]
merged_unique = list(set(arr1 + arr2))
print(merged_unique)  # Output: [1, 2, 3, 4, 5]

# Remove duplicates from an array while keeping order
arr = [1, 2, 2, 3, 4, 4]
no_duplicates = list(dict.fromkeys(arr))
print(no_duplicates)  # Output: [1, 2, 3, 4]
