---
layout: mydefault
title: mathematical constants
color: eee
---
<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a class="pagination" style="float: right;" href=" {{ '/facts_of_science.html' | relative_url }}" >Facts of science</a>
<h1>{{ page.title | capitalize }}</h1>

<ul class="b8t_list">
  {% for constant in site.mathematical_constants %}
    <li style="background-color: #{{ constant.color }}; padding: 0 2px 0 5px;">
      <h2>
        <a href="{{ constant.url | relative_url}}">
            [ {{ constant.symbol }} ] {{ constant.name }}
        </a>
      </h2>
      <p>{{ constant.symbol }} = {{ constant.value }}</p>
    </li>
  {% endfor %}
</ul>
<a class="pagination" href=" {{ '/facts_of_science.html' | relative_url }}" >Facts of science</a>
</div>