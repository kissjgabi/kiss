---
layout: mydefault
title: science basics
color: ffffe0
---
<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a class="pagination" style="float: right;" href=" {{ '/' | relative_url }}" >Home</a>
<h1>{{ page.title | capitalize }}</h1>

<ul class="b8t_list">

    <li style="background-color: #{{ constant.color }}; padding: 0 2px 0 5px;">
      <h2>
        <a href="{{ "/physical_constants.html" | relative_url}}">
            Physical constants
        </a>
      </h2>
      <p>A physical constant is a physical quantity that is generally believed to be universal in nature and have constant value in time.</p>
    </li>

    <li style="background-color: #{{ constant.color }}; padding: 0 2px 0 5px;">
      <h2>
        <a href="{{ "/mathematical_constants.html" | relative_url}}">
            Mathematical constants
        </a>
      </h2>
      <p>A mathematical constant is a number whose value is fixed by an unambiguous definition,.</p>
    </li>

    <li style="background-color: #{{ constant.color }}; padding: 0 2px 0 5px;">
      <h2>
        <a href="{{ "/periodic_table_elements.html" | relative_url}}">
            Elements
        </a>
      </h2>
      <p>Elements of the periodic table with their atomic number, electron configuration, and recurring chemical properties.</p>
    </li>
</ul>
<a class="pagination" href=" {{ '/' | relative_url }}" >Home</a>
</div>
