def get_min_max(arr):
    min_val = float('inf')
    max_val = float('-inf')
    for num in arr:
        if num < min_val:
            min_val = num
        if num > max_val:
            max_val = num
    return min_val, max_val

print(get_min_max([5, 2, 8, 1]))
