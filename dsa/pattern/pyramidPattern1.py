for i in range(1, 5):
    row = ""
    for j in range(1, 8):
        if 5 - i <= j <= 3 + i:
            row += "* "
        else:
            row += "  "
    print(row)
