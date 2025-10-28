for i in range(1, 6):
    row = ""
    for j in range(1, i + 1):
        row += "1 " if (i + j) % 2 == 0 else "0 "
    print(row)
