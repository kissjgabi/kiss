---
layout: mydefault
title: Categories
color: e0ffff
---
<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a class="pagination" style="float: right;" href=" {{ '/' | relative_url }}" >Home</a>
<h1>Categories</h1>

<ul class="b8t_list">
  {% for category in site.categories %}
    <li>
        <a href="{{ category.url | relative_url}}">
            {{ category.modulname | capitalize }}
        </a>&nbsp;{{ category.content | markdownify }}
    </li>
  {% endfor %}
</ul>
<a class="pagination" href=" {{ '/' | relative_url }}" >Home</a>
</div>

