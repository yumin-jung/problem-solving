n = int(input())
a = list(map(int, input().split()))
res = 0

for i in range(n):
    cnt = 0
    for j in range(1, a[i]+1):
        if a[i] % j == 0:
            cnt += 1
    if cnt == 2:
        res += 1

print(res)
