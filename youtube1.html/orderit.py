import sys, re
from collections import deque
import heapq

def clean_input():
    text = sys.stdin.read()
    text = re.sub(r'[^ -~\n]', '', text)
    lines = [x.strip() for x in text.splitlines() if x.strip()]
    if not lines:
        sys.exit(0)
    n = int(lines[0])
    data = lines[1:]
    if any("shuffled" in x.lower() for x in data) and any("original" in x.lower() for x in data):
        a = next(i for i, v in enumerate(data) if "shuffled" in v.lower())
        b = next(i for i, v in enumerate(data) if "original" in v.lower())
        part1 = data[a + 1 : a + 1 + n]
        part2 = data[b + 1 : b + 1 + n]
    else:
        part1, part2 = data[:n], data[n:]
    return part1, part2

def all_swaps(seq):
    ln = len(seq)
    for i in range(ln):
        for j in range(i, ln):
            cut = seq[i:j + 1]
            rest = seq[:i] + seq[j + 1:]
            for pos in range(len(rest) + 1):
                fixed = i if pos < i else i - (j - i + 1)
                if pos == fixed:
                    continue
                yield tuple(rest[:pos] + cut + rest[pos:])

def heuristic(curr, target):
    idx = {v: i for i, v in enumerate(target)}
    score = 0
    for i in range(len(curr) - 1):
        if idx[curr[i]] < idx[curr[i + 1]]:
            score += 1
    return len(curr) - score  

def fewest_steps(source, target):
    start = tuple(source)
    goal = tuple(target)
    if start == goal:
        return 0

    pq = [(heuristic(start, goal), 0, start)]  
    seen = {start: 0}

    while pq:
        _, steps, curr = heapq.heappop(pq)
        if curr == goal:
            return steps

        for nxt in all_swaps(list(curr)):
            if nxt not in seen or steps + 1 < seen[nxt]:
                seen[nxt] = steps + 1
                heapq.heappush(pq, (steps + 1 + heuristic(nxt, goal), steps + 1, nxt))
    return -1

if __name__ == "__main__":
    start, end = clean_input()
    if set(start) != set(end):
        sys.stdout.write("0")
        sys.exit(0)
    moves = fewest_steps(start, end)
    sys.stdout.write(str(moves))