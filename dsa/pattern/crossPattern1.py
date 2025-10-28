for i in range(1, 6):
    row = ""
    for j in range(1, 6):
        row += "*" if i == j or i + j == 6 else " "
    print(row)
