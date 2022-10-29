s = input()

len = len(s)

if "c=" in s:
    len -= s.count("c=")
if "c-" in s:
    len -= s.count("c-")
if "dz=" in s:
    len -= s.count("dz=")*2
if "d-" in s:
    len -= s.count("d-")
if "lj" in s:
    len -= s.count("lj")
if "nj" in s:
    len -= s.count("nj")
if "s=" in s:
    len -= s.count("s=")
if "z=" in s:
    len -= s.count("z=")
    if "dz=" in s:
        len += s.count("dz=")
print(len)
