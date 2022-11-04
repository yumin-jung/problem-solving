def is_prime(num):
    if num == 1:
        return False
    else:
        for i in range(2, int(num**0.5)+1):
            if num % i == 0:
                return False
        return True


n = int(input())

for _ in range(n):
    x = int(input())

    l_prime = x//2
    r_prime = x//2

    while l_prime > 0:
        if is_prime(l_prime) and is_prime(r_prime):
            print(f'{l_prime} {r_prime}')
            break
        else:
            l_prime -= 1
            r_prime += 1
