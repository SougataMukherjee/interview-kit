for i in range(1, 5):
    row = ""
    k = 1
    for j in range(1, 8):
        if 5 - i <= j <= 3 + i:
            row += str(k) + " "
            if j < 4:
                k += 1
            else:
                k -= 1
        else:
            row += "  "
    print(row)
