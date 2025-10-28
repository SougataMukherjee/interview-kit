def product_except_self(arr):
    n = len(arr)
    result = []
    for i in range(n):
        prod = 1
        for j in range(n):
            if i != j:
                prod *= arr[j]
        result.append(prod)
    return result

print(product_except_self([2, 3, 4, 5]))
