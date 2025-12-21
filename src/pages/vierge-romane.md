---
layout: page.html
title: Vierge Romane à l’enfant
description: Information lié à la Vierge Romane à l’enfant
permalink: /vierge-romane.html
---

<div class="row">
    <div class="col-md-6">
        <div style="text-align: center;">
            <img src= "img\patrimoine\vierge-romane\vierge.jpg" 
                alt="image of the statue in black and white" 
                style="max-width: 90%;"/>
        </div>
    </div>
    <div class="col-md-6">
        <p>
        Statue d’environ 70 cm de haut, en bois et dont la couronne est amovible. Elle est datée de la fin du XIIème / début du XIIIème siècle.
        </p><p>
        Une particularité notable est la position de l’enfant, assis les jambes croisées, qui est peu courante
        </p><p>
        En 1954 elle est classée monument historique.
        </p><p>
        Elle a été volée en juin 1975, nous avons retrouvé sa trace en 2024.
    </div>
</div>

<br/>

## Actualités

{% for item in news %}
{% if item.tags contains 'vierge-romane' %}
<div class="row">
<div class="news-item" style="margin: 20px 0; padding: 15px; border-left: 4px solid #2c5282;">
    <h3>{% if item.url %}<a href="{{ item.url }}" target="_blank">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
    <p><small><em>{{ item.date }}</em></small></p>
    <p>{{ item.description }}</p>
</div>
</div>
{% endif %}
{% endfor %}