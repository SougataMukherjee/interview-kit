# Count number of even and odd digits in a number
n = 1234
ev, od = 0, 0

while n > 0:
    rem = n % 10
    if rem % 2 == 0:
        ev += 1
    else:
        od += 1
    n //= 10  # integer division

print(ev, od)
