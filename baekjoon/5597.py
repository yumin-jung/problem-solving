a = []

for _ in range(30):
    a.append(0)

for _ in range(28):
    a[int(input())-1] = 1

s1 = a.index(0)
a[s1] = 1
s2 = a.index(0)

print(s1+1)
print(s2+1)
