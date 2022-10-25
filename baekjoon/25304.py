sum = int(input())
n = int(input())

for _ in range(n):
    a, b = input().split()
    a = int(a)
    b = int(b)
    sum = sum - (a*b)

if sum == 0:
    print("Yes")
else:
    print("No")
