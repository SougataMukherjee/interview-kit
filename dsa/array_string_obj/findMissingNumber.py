arr = [0, 1, 2, 3, 5]
count = 0

for i in range(arr[0], arr[-1]):
    if arr[count] == i:
        count += 1
    else:
        print(i)
