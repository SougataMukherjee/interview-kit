def dec_to_bin(num):
    bin_str = ""
    while num > 0:
        bin_str = str(num % 2) + bin_str
        num //= 2
    return bin_str or "0"

print(dec_to_bin(10))  # Output: 1010
