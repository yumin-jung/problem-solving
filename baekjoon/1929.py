m, n = map(int, input().split())

for num in range(m, n+1):
    cnt = 0
    for r in range(1, m+1):
        if num % r == 0:
            cnt += 1
    if cnt == 2:
        print(num)
