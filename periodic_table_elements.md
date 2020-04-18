---
layout: mydefault
title: elements
color: eee
---
<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a style="float: right;" href=" {{ '/facts_of_science.html' | relative_url }}" >Facts of science</a>
<h1>{{ page.title | capitalize }}</h1>

<ul class="b8t_list">
  {% for element in site.periodic_table_elements %}
    <li style="background-color: #{{ element.color }}; padding: 0 2px 0 5px;">
      <h2>
        <a href="{{ element.url | relative_url}}">
            {{ element.atomic_number }} {{ element.atomic_name }}
        </a>
      </h2>
      <p>{{ element.symbol }} - {{ element.appearance }}</p>
    </li>
  {% endfor %}
</ul>
<div class="pagination">
    <a class="pagination" href=" {{ '/facts_of_science.html' | relative_url }}" >Facts of science</a>
</div>
</div>

