def is_prime(n):
    if n == 1:
        return False
    else:
        for i in range(2, int(n**0.5)+1):
            if n % i == 0:
                return False
        return True


a = list(range(2, 123456*2))
prime_list = []

for i in a:
    if is_prime(i):
        prime_list.append(i)

while True:
    cnt = 0
    n = int(input())

    if n == 0:
        break

    for i in prime_list:
        if n < i < 2 * n + 1:
            cnt += 1

    print(cnt)
