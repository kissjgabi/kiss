---
layout: mydefault
title: Tags
color: ffe0ff
---
<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<h1>Tags</h1>

<ul class="b8t_list">
  {% for tag in site.tags %}
<li>
    <a href="{{ tag.url | relative_url}}">
    {{ tag.tagname | capitalize }}</a>&nbsp;{{ tag.content }}
</li>
  {% endfor %}
</ul>
</div>

