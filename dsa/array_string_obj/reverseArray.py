def reverse_array(arr):
    n = len(arr)
    i, j = 0, n - 1
    while i < j:
        arr[i], arr[j] = arr[j], arr[i]
        i += 1
        j -= 1
    return arr

print(reverse_array([2, 4, 7, 8, 9]))
