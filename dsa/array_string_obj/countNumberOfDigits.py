def count_digit(n):
    count = 0
    temp = n
    while temp > 0:
        temp //= 10
        count += 1
    return count

print(count_digit(2335))
