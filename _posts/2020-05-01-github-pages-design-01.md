---
layout: post
author: emi
category: programming
title: github pages - design 01 (text headings)
meta: github page design text
shortcontent: github pages design text heading
tag: [web, github, computing]
image: heading-styles.png
subtitle: heading styles
sitemap:
    lastmod: 2020-05-01
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---
This chapter contains copy / paste examples.
These are snippets of code that can be used to develop the website.  

# 1. Headings

---

## 1.1. Headings h1, h2, h2, h3, h4, h5, h6 - markdown

>source:
>
> `# Heading 1`
>
>view:  

# Heading 1  

>source:
>
> `## Heading 2`
>
>view:  

## Heading 2

>source:
>
> `### Heading 3`
>
>view:  

### Heading 3

>source:
>
> `#### Heading 4`
>
>view:`  

#### Heading 4

>source:
>
> `##### Heading 5`
>
>view:`  

##### Heading 5

>source:
>
> `###### Heading 6`
>
>view:  

###### Heading 6

---

## 1.2. Headings h1, h2, h2, h3, h4, h5, h6 - html

### 1.2.1. Default content (left aligned)

source:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
view:

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

---

### 1.2.2. Centered content

source:

```html
<h1 style="text-align: center;">Heading 1</h1>
<h2 style="text-align: center;">Heading 2</h2>
<h3 style="text-align: center;">Heading 3</h3>
<h4 style="text-align: center;">Heading 4</h4>
<h5 style="text-align: center;">Heading 5</h5>
<h6 style="text-align: center;">Heading 6</h6>
```
view:

<h1 style="text-align: center;">Heading 1</h1>
<h2 style="text-align: center;">Heading 2</h2>
<h3 style="text-align: center;">Heading 3</h3>
<h4 style="text-align: center;">Heading 4</h4>
<h5 style="text-align: center;">Heading 5</h5>
<h6 style="text-align: center;">Heading 6</h6>

---

### 1.2.3. Right aligned content

source:

```html
<h1 style="text-align: right;">Heading 1</h1>
<h2 style="text-align: right;">Heading 2</h2>
<h3 style="text-align: right;">Heading 3</h3>
<h4 style="text-align: right;">Heading 4</h4>
<h5 style="text-align: right;">Heading 5</h5>
<h6 style="text-align: right;">Heading 6</h6>
```
view:

<h1 style="text-align: right;">Heading 1</h1>
<h2 style="text-align: right;">Heading 2</h2>
<h3 style="text-align: right;">Heading 3</h3>
<h4 style="text-align: right;">Heading 4</h4>
<h5 style="text-align: right;">Heading 5</h5>
<h6 style="text-align: right;">Heading 6</h6>

---

## 1.3. Unique style headline

source:

```css
<style>
    .myh1 {
        text-align: center;
        width: 80%;
        margin: 1em auto 2em;
        padding: 0.5em 5% 1em;
        color: darkred;
        background-color: chocolate;
        letter-spacing: -0.075em;
        font-weight: bold;
        text-shadow: 2px 2px 5px white, -2px -2px 5px white;
        border: 10px ridge darkgoldenrod;
        border-radius: 10px;
    }
</style>

<h1 class="myh1">Headline sample</h1>
```
view:  

<style>
    .myh1 {
        text-align: center;
        width: 80%;
        margin: 1em auto 2em;
        padding: 0.5em 5% 1em;
        color: darkred;
        background-color: chocolate;
        letter-spacing: -0.075em;
        font-style: italic;
        font-weight: bold;
        text-shadow: 2px 2px 10px white, -2px -2px 10px white;
        border: 10px ridge darkgoldenrod;
        border-radius: 10px;
    }
</style>

<h1 class="myh1">Headline sample</h1>

[Colors](https://www.w3schools.com/colors/colors_names.asp)  
[Heading](https://www.w3schools.com/csS/css_text.asp)

