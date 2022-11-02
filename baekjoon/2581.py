a = int(input())
b = int(input())

res = 0
min_num = 0

for i in range(a, b+1):
    cnt = 0
    for j in range(1, i+1):
        if i % j == 0:
            cnt += 1
    if cnt == 2:
        if res == 0:
            min_num = i
        res += i

if res == 0:
    print(-1)
else:
    print(res)
    print(min_num)
