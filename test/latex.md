T(n) = 4T(n/2) + n^2 \lg n 



4f(n/2) \le cf(n) \\
\Rightarrow 4 \times (\frac{n}{2})^2 \times \lg \frac{n}{2} \le cn^2\lg n \\
\Rightarrow \lg \frac{n}{2} \le c \lg n \\
\Rightarrow \lg n - 1 \le c \lg n \\
\Rightarrow 1 - c \le \frac{1}{\lg n} \to 0 \\
\Rightarrow c \ge 1 \\
T(n) = aT(n/b)+f(n)