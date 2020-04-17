---
layout: mydefault
---
    <small style="float: right">
        {% for tag in page.tags %}
        <a class="b8t_label" href="{{ site.baseurl }}/tags/{{ tag }}.html">{{ tag }}</a>
        {% endfor %}
    </small>
   <h1>{{ page.title | capitalize }}</h1>

    <p>
      {{ page.date | split: " " | first }}
      {% assign author = site.authors | where: 'short_name', page.author | first %}
      {% if author %}
        - <a href="{{ author.url | relative_url }}">{{ author.name }}</a>
      {% endif %}
    </p>
      {% if page.image %}
            <img class="b8t_cell" src="{{site.baseurl}}/assets/images/{{ page.image }}"
             width="100%" height="auto" alt="{{ page.title }}" title="{{ page.title }}" /> 
      {% endif %}

      {% if page.subtitle %}
            <p style="text-align: center; font-style: italic; font-size: small">
                {{ page.subtitle | capitalize }}
            </p> 
      {% endif %}

    {{ content }}

    <small>
        {% for tag in page.tags %}
        <a class="b8t_label" href="{{ site.baseurl }}/tags/{{ tag }}.html">{{ tag }}</a>
        {% endfor %}
    </small>
