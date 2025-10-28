arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
n = len(arr)
majority = n // 4

for i in range(n - majority):
    if arr[i] == arr[i + majority]:
        print(arr[i])
