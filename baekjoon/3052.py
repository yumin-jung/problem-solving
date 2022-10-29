a = []

for _ in range(10):
    r = int(input()) % 42
    if a.count(r) == 0:
        a.append(r)

print(len(a))
