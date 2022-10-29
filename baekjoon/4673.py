def d(num):
    num = num + sum(map(int, str(num)))
    return num


no_self_num = set()

for n in range(1, 10001):
    no_self_num.add(d(n))
    if n not in no_self_num:
        print(n)
