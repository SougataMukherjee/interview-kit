n = 7
if n <= 1:
    print("prime starts from 2")
else:
    is_prime = True
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print("prime")
    else:
        print("not a prime")
