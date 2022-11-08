s = input()
a = []

for i in range(len(s)):
    a.append(int(s[i]))

a.sort()

res = ""

for num in a:
    res = str(num) + res

print(res)
