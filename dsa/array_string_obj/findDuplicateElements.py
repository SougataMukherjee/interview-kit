a = [1, 2, 3, 4, 5, 4]

for i in range(len(a)):
    for j in range(i + 1, len(a)):
        if a[i] == a[j] and i != j:
            print(a[j])
