N = int(input())
cnt = 0
res = -1

while N >= 0:
    if N % 5 == 0:
        res = cnt + N // 5
        break
    N -= 3
    cnt += 1
    if N % 3 == 0:
        res = cnt
print(res)
