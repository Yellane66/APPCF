---
layout: page.html
title: Actualités
description: Les dernières actualités de l'APPCF
permalink: /events.html
---

{% for item in news %}
<div class="news-item" style="display: flex; gap: 15px; margin: 20px 0; padding: 15px; border-left: 4px solid #2c5282; align-items: flex-start;">
    <div style="flex: 1;">
        <h3>{% if item.url %}<a href="{{ item.url }}" target="_blank">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
        <h6>{{ item.linked-monument }}</h6>
        <p><small><em>{{ item.date }}</em></small></p>
        <p>{{ item.description }}</p>
    </div>
    {% if item.img %}
    <div style="flex-shrink: 0; min-width: 150px;">
        <img src="{{ item.img }}" alt="{{ item.title }}" style="max-width: 200px; height: auto; border-radius: 4px;">
    </div>
    {% endif %}
</div>
{% endfor %}
