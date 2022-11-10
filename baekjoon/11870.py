import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().rstrip().split()))

num_set = set(a)
num_list = list(num_set)
num_list.sort()
num_dict = {}

for i in range(len(num_list)):
    num_dict[num_list[i]] = i

for i in a:
    print(num_dict[i], end=' ')
