def sort012(arr):
    count0 = arr.count(0)
    count1 = arr.count(1)
    count2 = arr.count(2)
    return [0]*count0 + [1]*count1 + [2]*count2

# Example usage
arr = [0, 2, 1, 0, 1, 2, 0]
print(sort012(arr))  # Output: [0, 0, 0, 1, 1, 2, 2]
