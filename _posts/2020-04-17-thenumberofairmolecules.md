---
layout: post
author: emi
category: facts
title: Calculating the number of molecules in the air
meta: number of molecules in the air
shortcontent: 1 g of water has in n = 6,022 x 10<sup>23</sup> molecules
tag: [physics, calculations, examples]
image: horizon.jpg
subtitle: above the clouds
sitemap:
    lastmod: 2020-04-17
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---

## 1. The atmosphere of Earth

The atmosphere of Earth is the layer of gases, commonly known as air.
To calculate the number of molecules in, assume the following:
1. the air pressure is 1 atm
2. the air temperature is 293,15 K
3. the composition of the mixture:
    - 77,5106% nitrogen
    - 20,7939% oxygen
    - &nbsp;0,9340% argon
    - &nbsp;0,7000% water vapor (strongly varies locally 0-3%)
    - &nbsp;0,0415% carbon dioxide
    - &nbsp;0,0200% other gases

I took the courage to put out exactly 100,0000 % of their amount

## 2. The molar mass of air

### a. Calculate the weighted average of the molar masses of the components:

| Gas               | molar mass (M)                    | part (%)       |
| ----------------: | -------------:                    | -------------: |
| N<sub>2</sub>     | 14,007 × 2 = 28,014 g/mol         | 77,5106        |
| O<sub>2</sub>     | 15,999 × 2 = 31,998 g/mol         | 20,7939        |
| Ar                | 39,948 g/mol                      | 0,9340         |
| H<sub>2</sub>O    | 15,999 + 1,008 × 2 = 18,015 g/ml  | 0,7000         |
| CO<sub>2</sub>    | 12,011 + 15,999 × 2 = 44,009 g/ml | 0,0415         |
| other gases       | 20,000 g/ml                       | 0,0200         |

### b. The calculation:

        (77,5840×28,014 + 31,998×20,7205 + 39,948×0,9340 + 18,015×0,7000 + 44,009×0,0415 + 20,000×0,0200)/100

### c. M<sub>air3</sub> = <u>&nbsp;28,889 g/mol&nbsp;</u>.

Table of molar masses with different water content:  

| Gas            | p<sub>w</sub> 0.0  | p<sub>w</sub> 0.3 | p<sub>w</sub> 0.7 | p<sub>w</sub> 1.0 | p<sub>w</sub> 1,5 | p<sub>w</sub> 2,0 | p<sub>w</sub> 3,0 | p<sub>w</sub> 5,0 |
|    ----------: | ----:   | ------: | ------: | ------: | ------: | ------: | ------: | ------: |
| N<sub>2</sub>  | 78,0625 | 77,8260 | 77,5106 | 77,2740 | 76,8798 | 76,4856 | 75,6971 | 74,1201 |
| O<sub>2</sub>  | 20,9420 | 20,8785 | 20,7939 | 20,7305 | 20,6247 | 20,5189 | 20,3074 | 19,8844 |
| Ar             | 0,9340  | 0,9340  | 0,9340  | 0,9340  | 0,9340  | 0,9340  | 0,9340  | 0,9340  |
| H<sub>2</sub>O | 1. 0,0% | 2. 0,3% | 3. 0,7% | 4. 1,0% | 5. 1,5% | 6. 2,0% | 7. 3,0% | 8. 5,0% |
| CO<sub>2</sub> | 0,0415  | 0,0415  | 0,0415  | 0,0415  | 0,0415  | 0,0415  | 0,0415  | 0,0415  |
| other          | 0,0200  | 0,0200  | 0,0200  | 0,0200  | 0,0200  | 0,0200  | 0,0200  | 0,0200  |
| sum            | 100     | 100     | 100     | 100     | 100     | 100     | 100     | 100     |
| M<sub>air</sub>| 28,9648 | 28,9323 | 28,8889 | 28,8564 | 28,8022 | 28,7480 | 28,6396 | 28,4227 |


        and so on...



