from collections import Counter
import sys
int(sys.stdin.readline())

a = []

for _ in range(int(sys.stdin.readline())):
    a.append(int(sys.stdin.readline()))

a.sort()

c = Counter(a).most_common(2)

print(round(sum(a) / len(a)))
print(a[len(a) // 2])
if len(a) > 1:
    if c[0][1] == c[1][1]:
        print(c[1][0])
    else:
        print(c[0][0])
else:
    print(c[0][0])
print(max(a) - min(a))
