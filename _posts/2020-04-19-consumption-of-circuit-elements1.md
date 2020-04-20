---
layout: post
author: emi
category: electra
title: consumption of circuit elements&nbsp;1. basic&nbsp;led&nbsp;circuit
meta: consumption circuit resistor led
shortcontent: effeciency of 1 W led is 0,
tag: [electronics]
image: battery9v-led-resistor.jpg
subtitle: the basic led circuit
sitemap:
    lastmod: 2020-04-19
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---
## The basic datas of cirquit

White led 5 mm.

|attribute            | value | unit |
|:---                 | ---:  | :--- |
|V<sub>source</sub>   |9,0| V|
|V<sub>LED</sub>      |3,6| V|
|I<sub>LED</sub>      |30,0|mA|
|P<sub>LED</sub> (P=V×I)|0,108|W|

## Calculating resistor power with R470

The voltage drop across the resistor: `9,0 V - 3,6 V = 5,4 V`.  
The power dissipated by the resistor (P<sup>2</sup> = V<sup>2</sup> / R): `5,4<sup>2</sup> / 470 = 0,061 W`.  

## Calculating resistor power with R220

The voltage drop across the resistor: `9,0 V - 3,6 V = 5,4 V`.  
The power dissipated by the resistor (P<sup>2</sup> = V<sup>2</sup> / R): `5,4<sup>2</sup> / 220 = 0,133 W`.  

## Calculating efficiency (η) with R470

The efficiency according to the layout (η = P<sub>LED</sub>/P<sub>sum</sub>): `0,108 / (0,108 + 0,061) = 0,639 = 63,9 %`.  

## Calculating efficiency (η) with R220

The efficiency according to the layout (η = P<sub>LED</sub>/P<sub>sum</sub>): `0,108 / (0,108 + 0,133) = 0,450 = 45,0 %`.  

## LED effeciency in the timeline

| time period |-1990| 1990-2000 | 2000-2010 | 2010-2020 |
|:---         |:---:| :---:     | :---:     | :---:     |
|effeciency η<sub>LED</sub>|0,03%| 0,5-2%    | 2-15%     | 5-20%(?)  |

## Links:

[Simple LED Circuits](https://www.electronicshub.org/simple-led-circuits/)  
[LED lighting from 230V mains](http://skory.gylcomp.hu/kapcs/led230.html)  




