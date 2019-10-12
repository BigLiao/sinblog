---
date: 2019-07-01
author: liao
---

# [算法导论]第四章-主定理

> 上帝说，要有递归，于是有了主定理。

## 主定理的定义

```js
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('../webpack/base-config');
const config = require('../../config');

const { resolve } = require('../util');

function generateWebpackPageConfig({
  pageName,
  template,
  entry,
  filename
}) {
  const webpackConfig = {
    mode: 'development',
    entry: {
      [pageName]: [entry],
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: 'ejs-loader'
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: filename,
            template: template,
            chunks: [pageName]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ]
  };
  return webpackConfig;
}

function getWebpackConfig() {
  const homeWebpackConfig = generateWebpackPageConfig({
    pageName: 'home',
    template: resolve('.temp', 'home.html'),
    entry: resolve('.temp/home-entry.js'),
    filename: 'index.html'
  });

  const blogWebpackConfig = generateWebpackPageConfig({
    pageName: 'blog',
    template: resolve('.temp', 'blog.html'),
    entry: resolve('.temp/blog-entry.js'),
    filename: 'blog/index.html'
  });

  const aboutWebpackConfig = generateWebpackPageConfig({
    pageName: 'about',
    template: resolve('.temp', 'about.html'),
    entry: resolve('.temp/about-entry.js'),
    filename: 'about/index.html'
  });
  return merge(baseWebpackConfig, homeWebpackConfig, blogWebpackConfig, aboutWebpackConfig);
}

module.exports = getWebpackConfig;
```

分治法的三个步骤是：**分**、**治**、**合**，时间复杂度 $T(n)$ 容易用递推式表示。

递推式的求解有三种方法：**代入法**、**递归树法**和**主定理**。**主定理**是一种*无脑推导*的求解方法。对应的一般递推式形如
$$
T(n) = aT(n/b) + f(n)
$$
其中各参赛的含义：

- $a$：把原问题分解为 $a$ 个子问题，$a \ge 1$
- $b$：每个子问题的规模是原问题的 $1/b$，所以 $b \gt 1$ ，但$b$ 不一定是整数。
- $f(n)$：**分**与**合**所花费的时间

**主定理的三种情况**

1. 若存在常数 $\epsilon \gt 0$ 使得 $f(n)=\O(n^{\log_b^{a-\epsilon}})$，则 $T(n)=\Theta(n\log_b^a)$。
2. 若 $f(n)=\Theta(n^{log_b^a})$，则 $T(n)=\Theta(n^{\log_b^a}\lg n)$ 。
3. 若存在常数 $\epsilon \gt 0$ 使得 $f(n) = \Omega(n^{\log_b^{a+\epsilon}})$，且满足**正则**条件（存在常数 $c\gt0$ 有 $af(n/b)\le cf(n)$），则 $T(n)=\Theta(f(n))$。

这是书上对主定理的准确描述。用容易理解的方法，就是用 $f(n)$ 和 **基准** $n^{\log_b^a}$ 进行比较。基准就是 $n^{\log_b^a}$，记住是以就是递推式中的分子$b$为底。

1. 若 $f(n)$ *弱于* 基准，那么结果就等于基准，即 $T(n)=\Theta(n\log_b^a)$；
2. 若 $f(n)$ 等于基准，结果就是基准乘以 $\lg n$，即 $T(n)=\Theta(n^{\log_b^a}\lg n)$；
3. 若 $f(n)$ 强于基准，结果就以 $f(n)$ 为主，即 $T(n)=\Theta(f(n))$；

这里的强弱关系不是普通的大于和小于，而是**多项式意义上**的大于和小于。

## 使用主定理

**练习 4.5-1-a**
$$
T(n) = 2T(n/4) + 1
$$
基准为 $n^{\log_4^2} = n^{1/2}$，$f(n)=\Theta(1)$，显然对应的是情况 1，$f(n)$ 弱于基准。

只要取 $\epsilon=1$，
$$
f(n)=\Theta(n^{\log_4^{2-1}})=\Theta(n^0) = \Theta(1)
$$
所以 $T(n)=\Theta(n^{1/2})$。

**练习 4.5-1-b**
$$
T(n)=2T(n/4)+\sqrt{n}
$$
对应情况 2，$f(n)$ 等于基准，所以 $T(n)=\Theta(n^{1/2}\lg n)$。

**练习 4.5-1-c**
$$
T(n)=2T(n/4)+n
$$
 $f(n)=\Theta(n) > \Theta(n^{1/2})$，对应的是情况 3。这个时候还有检验**正则条件**。
$$
2f(n/4) \le cf(n) \\
\Rightarrow 2 \times \frac{n}{4} \le c \times n \\
\Rightarrow c \ge \frac12
$$
故存在这样的 $c$，$1/2 \le c \lt 1$ 使条件成立，所以满足情况 3，$T(n)=\Theta(n)$ 。

**练习 4.5-1-d**
$$
T(n) = 2T(n/4) + n^2
$$
对应的也是情况 3，直接检验正则条件：
$$
2f(n/4) \le cf(n) \\
\Rightarrow 2 \times \frac{n^2}{16} \le c \times n^2 \\
\Rightarrow c \ge \frac{1}{8} \\
$$
满足正则条件，故 $T(n)=\Theta(n^2)$。

**练习 4.5-3**
$$
T(n) = 4T(n/2) + n^2 \lg n
$$
基准为 $\Theta(n^{\log_2^4}) = \Theta(n^2)$，初看 $f(n)$ 强于基准，应检验正则条件：
$$
4f(n/2) \le cf(n) \\
\Rightarrow 4 \times (\frac{n}{2})^2 \times \lg \frac{n}{2} \le cn^2\lg n \\
\Rightarrow \lg \frac{n}{2} \le c \lg n \\
\Rightarrow \lg n - 1 \le c \lg n \\
\Rightarrow 1 - c \le \frac{1}{\lg n} \to 0 \\
\Rightarrow c \ge 1 \\
$$
最后一步因为当 $n \to \infin$ 时 $1/\lg n \to 0$，所以 $c \ge 1$，不满足正则条件的 $c\lt 1$的要求。所以本题不能用主定理。解的形式见习题 4.6-2。

## 证明主定理

其实会使用主定理其实就够了，证明的思路有利于帮助我们理解和记忆主定理。

**首先分析递推式**
$$
T(n) = aT(n/b)+f(n)
$$
为了方便，只证明原命题的一个子集：$n=b^i $，也就是 $n$ 是 $b$ 的幂，其中 $i$、$a$、$b$ 都是正整数。

画出递归树，那么递归树的高度为 $log_b^n=i$，深度为 $j$ 的节点的代价和为 $a^jf(n/b^j)$。

![主定理递归树](https://cdn.bigliao.com/b60ddb74047cd9644c6d57bd8561374b.jpeg)

那么总代价
$$
T(n) = \Theta(n^{\log_b^n}) + \sum_{j=0}^{log_b^n-1}a^jf(n/b^j)
$$
其中 $\Theta(n^{\log_b^n})$ 为叶子节点的代价，$\sum_{j=0}^{log_b^n-1}a^jf(n/b^j)$ 为其他内部节点的代价。

**分析内部节点的代价**
$$
g(n) = \sum_{j=0}^{log_b^n-1}a^jf(n/b^j)
$$
对应主定理的三种情况，$g(n)$ 有三种渐近界。

情况 1，若存在常数 $\epsilon \gt 0$ 使得 $f(n)=\O(n^{\log_b^{a-\epsilon}})$ ，推出 $g(n)=\O(n^{\log_b^a})$，所以 $T(n)=\Theta(n^{\log_b^a})$。

情况2，$f(n)=\Theta(n^{\log_b^{a-\epsilon}})$，每一层和都是 $\Theta(n^{\log_b^a})$，一共有 $\log_b^n$ 层，推出 $T(n)=\Theta(n^{\log_b^a}\lg n)$ 。

情况3，$f(n)=\Omega(n^{\log_b^{a-\epsilon}})$，则 $g(n)=\Theta(f(n))$，得到 $T(n) = \Omega (n^{\log_b^a})$ 。

## 总结

主定理在于记忆和使用，递推式 $T(n) = aT(n/b) + f(n)$ ，比较基准 $\Theta(n^{\log_b^a})$ 与 $\Theta(f(n))$ 的大小，较大的为递推式的解，如果一样大，那就要再乘以一个 $\lg n$。要注意的有：

1. 基准$\Theta(n^{\log_b^a})$ 底对应的是分母。
2. 这里的大小比较是多项式意义上的大小，可以理解为比较的是“无穷大的阶”。
3. 主定理适用于大部分情况，但也例外，特别是注意正则性条件。

```c++
// 优先级数组随机化算法
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

void quick_sort(int *al, int *ar, int *pl, int *pr);

void permute_by_sort(int list[], int len) {
    int p[len];
    for (int i = 0; i < len; i++) {
        p[i] = rand() % (len*len*len) + 1;
    }
    quick_sort(list, list + len, p, p + len);
}

// [al, ar)
void quick_sort(int *al, int *ar, int *pl, int *pr) {
    int len = ar -al;
    if (len <= 1) {
        return;
    } else {
        int pt = *pl, at = *al;
        int *aleft = al, *aright = ar - 1, *pleft = pl, *pright = pr - 1;
        while(pleft < pright) {
            while(pleft < pright && *pright >= pt) {
                pright = pright - 1;
                aright = aright - 1;
            }
            if (pleft < pright) {
                *pleft = *(pright);
                *aleft = *(aright);
                pleft = pleft + 1;
                aleft = aleft + 1;
            }
            while(pleft < pright && *pleft <= pt) {
                pleft = pleft + 1;
                aleft = aleft + 1;
            }
            if (pleft < pright) {
                *(pright) = *pleft;
                *(aright) = *aleft;
                pright = pright - 1;
                aright = aright - 1;
            }
        }
        *pleft = pt;
        *aleft = at;
        quick_sort(al, aleft-1, pl, pleft-1);
        quick_sort(aleft+1, ar, pleft+1, pr);
    }
}

int main() {
    srand(time(NULL));
    int list[] = {4, 1, 3, 5, 6, 7, 2, 9};
    permute_by_sort(list, 8);
    for (int i = 0; i < 8; i++) {
        cout << list[i] << ", ";
    }
    return 0;
}
```
