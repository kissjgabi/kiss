---
layout: mydefault
---
<ul class="pagination">
    <li>
        <a href="{{ '/tags.html' | relative_url}}">
            Tags
        </a>
    </li>
    <li>
        <h2>/</h2>
    </li>
  {% for element in site.tags %}
    {% if element <> page %}
    <li>
        <a href="{{ element.url | relative_url}}">
            {{ element.title | capitalize }}
        </a>
    </li>
    {% else %}
    <li>
        <a style="border-color: transparent; color: red;">{{ element.title  | capitalize }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>

    <h1>{{ page.title | capitalize }}</h1>

    {{ content }}

    <h2>Posts</h2>
    <ul>
      {% assign filtered_posts = site.posts | where: 'tag', page.tagname %}
      {% for post in filtered_posts %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>

