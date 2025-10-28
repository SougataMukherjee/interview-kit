arr = [1, 2, 0, 2, 1, 0]
j = 0

for i in range(len(arr)):
    if arr[i] != 0:
        arr[i], arr[j] = arr[j], arr[i]
        j += 1

print(arr)
