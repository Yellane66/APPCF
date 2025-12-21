---
layout: page.html
title: Vierge et Martyre Sainte Catherine d’Alexandrie
description: Information lié à la Vierge et Martyre Sainte Catherine d’Alexandrie
permalink: /vierge-msca.html
---

<div class="row">
    <div class="col-md-6">
        <div style="text-align: center;">
            <img src= "img\patrimoine\vierge-msca\st_catherine.png" 
                alt="image of the statue in black and white" 
                style="max-width: 90%;"/>
        </div>
    </div>
    <div class="col-md-6">
        Statue d’environ 50 cm de haut, en bois sculpté. Elle est datée du XIVème siècle.
Cette statue a été volée en juin 1991.
    </div>
</div>

<br/>

## Actualités

{% for item in news %}
{% if item.tags contains 'vierge-msca' %}
<div class="row">
<div class="news-item" style="margin: 20px 0; padding: 15px; border-left: 4px solid #2c5282;">
    <h3>{% if item.url %}<a href="{{ item.url }}" target="_blank">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
    <p><small><em>{{ item.date }}</em></small></p>
    <p>{{ item.description }}</p>
</div>
</div>
{% endif %}
{% endfor %}