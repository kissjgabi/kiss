---
layout: mydefault
---
<ul class="pagination">
  {% for constant in site.physical_constants %}
    {% if constant <> page %}
    <li>
        <a href="{{ constant.url | relative_url}}">
            {{ constant.symbol }}
        </a>
    </li>
    {% else %}
    <li>
        <a style="border-color: transparent; color: red;">{{ constant.symbol }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>

<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a class="pagination" style="float: right;" href=" {{ '/physical_constants.html' | relative_url }}" >Physical constans</a>

<h1>{{ page.name }} ( {{ page.symbol }} )</h1>

<ul class="b8t_list">
    <li>
    Name: {{ page.name }}
    </li>
    <li>
    Symbol: {{ page.symbol }}
    </li>
    <li>
    Value: {{ page.value }}
    </li>
    <li>
    Dimension:  {{ page.dimension }}
    </li>
</ul>
</div>

{{ content }}


