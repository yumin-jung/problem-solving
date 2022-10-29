def is_hansu(num):
    a = list(map(int, str(num)))
    for i in range(len(a)-1):
        if a[i+1] - a[i] != a[1]-a[0]:
            return False
    return True


n = int(input())

sum = 0
for i in range(n):
    if is_hansu(i+1):
        sum += 1

print(sum)
