1. Wave Function Collapse (WFC)
What it does: Procedural generation algorithm inspired by quantum mechanics—collapses possibilities into a coherent output (e.g., generating game levels, textures).

How it works:

Define tiles and their adjacency rules.

Iteratively collapse cells based on entropy (least possibilities first).

Use Case: Minecraft-like terrain, pixel art.

Example: WFC GitHub repo.

2. Diffusion Algorithms
Types:

Heat Diffusion: Simulates heat spread (used in image processing, physics).

Diffusion-Limited Aggregation (DLA): Simulates particle clustering (e.g., fractal growth).

Example (1D Heat Diffusion):

python
for _ in range(steps):
    new_u = u.copy()
    for i in range(1, len(u)-1):
        new_u[i] = u[i] + k * (u[i-1] - 2*u[i] + u[i+1])
    u = new_u
3. Simulation Algorithms
Monte Carlo Simulation: Random sampling for numerical results (e.g., stock predictions).

N-Body Simulation: Simulates gravitational interactions (O(n²) brute force → Barnes-Hut O(n log n)).

Example: Galaxy Simulator.

4. Sleep Sort
Weirdness: Uses multithreading and sleep() to sort numbers.

How it works:

For each number n, spawn a thread that sleeps for n milliseconds, then prints n.

Code (Python):

python
from threading import Timer
def sleep_sort(arr):
    for n in arr:
        Timer(n, lambda x: print(x, end=' '), [n]).start()
sleep_sort([3, 1, 4])  # Output: 1 3 4
Note: Highly impractical but fun.

5. Bogo Sort
Weirdness: Randomly shuffles the list until it’s sorted.

Complexity: O((n+1)!) (worst-case unbounded).

Code (Python):

python
import random
def bogo_sort(arr):
    while arr != sorted(arr):
        random.shuffle(arr)
    return arr
6. RSA Algorithm
What it does: Public-key cryptography (encryption/decryption).

Weirdness: Relies on the hardness of factoring large primes.

Key Steps:

Choose primes p, q.

Compute n = p*q, ϕ(n) = (p-1)(q-1).

Pick e (public key) where 1 < e < ϕ(n) and gcd(e, ϕ(n)) = 1.

Compute d (private key) as d ≡ e⁻¹ mod ϕ(n).

Use Case: Secure data transmission (SSL/TLS).

7. Marching Cubes
What it does: Generates 3D meshes from voxel data (e.g., medical imaging, terrain).

Weirdness: Uses a lookup table for 256 possible cube configurations.

Example: Unity Marching Cubes.

8. Artificial Life (Alife)
Conway’s Game of Life: Cellular automaton with rules:

Any live cell with <2 or >3 neighbors dies.

Any dead cell with 3 neighbors becomes alive.

Extensions:

Langton’s Ant: Simple ant following rules on a grid.

Neural Cellular Automata: Trainable self-replicating patterns.

9. Advanced String Search
Boyer-Moore (Requested):

Skips characters using "bad character" and "good suffix" heuristics.

Complexity: O(n/m) best case.

Code:

python
def boyer_moore(text, pattern):
    # Preprocess bad-character shift
    skip = {c: i for i, c in enumerate(pattern)}
    i = 0
    while i <= len(text) - len(pattern):
        for j in reversed(range(len(pattern))):
            if text[i+j] != pattern[j]:
                i += max(1, j - skip.get(text[i+j], -1))
                break
        else:
            return i
    return -1
Other Algorithms:

Knuth-Morris-Pratt (KMP): Uses partial match tables.

Rabin-Karp: Hashing + sliding window.

10. More Unusual Algorithms
Stable Marriage Problem: Gale-Shapley algorithm for matching pairs.

FizzBuzz in Hexagony: Esoteric programming solutions.

Quantum Bogosort: Hypothetical O(1) sort via quantum suicide.

When to Use These?
Game Dev: WFC, Marching Cubes, Alife.

Security: RSA.

Data Science: Monte Carlo, Diffusion.

Fun/Challenges: Sleep Sort, Bogo Sort.

Want a deep dive into any of these? 😄