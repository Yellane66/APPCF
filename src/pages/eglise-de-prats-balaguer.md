---
layout: page.html
title: Eglise de Prats-Balaguer
description: Information lié à l'Eglise de Prats-Balaguer
permalink: /eglise-de-prats-balaguer.html
---

<div class="row">
    <div class="col-md-6">
        <div style="text-align: center;">
            <img src= "img\patrimoine\eglisePB\1-eglise-PB.png" 
                alt="team picture" 
                style="max-width: 90%;"/>
        </div>
    </div>
</div>
<br>

## Actualités

{% for item in news %}
{% if item.tags contains 'eglise-pb' %}
<div class="row">
<div class="news-item" style="margin: 20px 0; padding: 15px; border-left: 4px solid #2c5282;">
    <h3>{% if item.url %}<a href="{{ item.url }}" target="_blank">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
    <p><small><em>{{ item.date }}</em></small></p>
    <p>{{ item.description }}</p>
</div>
</div>
{% endif %}
{% endfor %}