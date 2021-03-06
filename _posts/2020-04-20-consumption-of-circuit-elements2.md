---
layout: post
author: emi
category: electra
title: consumption of circuit elements&nbsp;2. advanced&nbsp;led&nbsp;circuit
meta: consumption circuit resistor led optimization
shortcontent: consumption of led
tag: [electronics]
image: battery9v-4led-resistor.jpg
subtitle: the advanced led circuit
sitemap:
    lastmod: 2020-04-22
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---
## The basic datas of cirquit

White led 5 mm × 2 pcs (or 4 pcs).

|attribute              | value | unit |attribute              | value | unit |
|:---                   | ---:  | :--- |:---                   | ---:  | :--- |
|V<sub>source</sub>     |9,0| V|||||
|V<sub>LED</sub>        |7,2| V|V<sub>LED</sub>        |7,2| V|
|I<sub>LED</sub> 1 line |30|mA|I<sub>LED</sub> 2 lines |60|mA|
|P<sub>LED</sub> (P=V×I)|0,216|W||P<sub>LED</sub> (P=V×I)|0,432|W|

## Calculating resistor power R60 (v = 1,8V, I = 30mA)

The voltage drop across the resistor: `9,0 V - 7,2 V / 2 = 1,8 V`.  
The power dissipated by the resistor (P<sup>2</sup> = V<sup>2</sup> / R): `1,8<sup>2</sup> / 54 = 0,054 W`.  

## Calculating efficiency (η) with one line of leds

The efficiency according to the layout (P<sub>LED</sub>/P<sub>sum</sub>): `0,216 / (0,216 + 0,054) = 0,80 = 80,0 %`.  

## Calculating resistor power R30 (v = 1,8V, I = 60mA)

The voltage drop across the resistor: `9,0 V - 7,2 V / 2 = 1,8 V`.  
The power dissipated by the resistor (P<sup>2</sup> = V<sup>2</sup> / R): `1,8<sup>2</sup> / 30 = 0,108 W`.  

## Calculating efficiency (η) with two line of leds

The efficiency according to the layout (P<sub>LED</sub>/P<sub>sum</sub>): `0,432 / (0,432 + 0,108) = 0,80 = 80,0 %`.  

---
## Links:

[Simple LED Circuits](https://www.electronicshub.org/simple-led-circuits/)  
[LED lighting from 230V mains](http://skory.gylcomp.hu/kapcs/led230.html)  

---
>Display `η`:  
html: `&asymp;` => &Eta;, `&eta;` = &Eta;  
css / javascript: '/u03B7';  
linux keyboard: `left-ctrl` + `shift` + `u` and "03B7".  

[w3school.com](https://www.w3schools.com/charsets/ref_utf_greek.asp)


