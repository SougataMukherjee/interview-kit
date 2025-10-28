n = 153
sum = 0
temp = n

while temp > 0:
    r = temp % 10
    sum += r ** 3
    temp //= 10

if n == sum:
    print(f"{n} is an Armstrong number")
else:
    print(f"{n} is not an Armstrong number")
