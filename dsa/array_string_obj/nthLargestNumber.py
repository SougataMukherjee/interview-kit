def kth_largest(arr, k):
    arr.sort()
    return arr[-k]  # for kth smallest use arr[k-1]

print(kth_largest([1, 2, 9, 10, 4], 2))  # Output: 9
