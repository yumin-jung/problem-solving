a = []

for _ in range(5):
    a.append(int(input()))

a.sort()
s = 0

for i in range(5):
    s += a[i]

print(s//5)
print(a[2])
