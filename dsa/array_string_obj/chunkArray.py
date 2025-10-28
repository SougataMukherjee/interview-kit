def chunk(arr, size):
    res = []
    for i in range(0, len(arr), size):
        res.append(arr[i:i+size])
    return res

print(chunk([1, 2, 3, 4, 5], 1))  # [[1], [2], [3], [4], [5]]
print(chunk([1, 2, 3, 4, 5], 2))  # [[1, 2], [3, 4], [5]]
