n = int(input())
x = 1
i = 0

while x < n:
    x += i * 6
    i += 1

if n == 1:
    print(1)
else:
    print(i)
