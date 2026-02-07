---
layout: page.html
title: Eglise Trinité et Sainte-Marie de Prats-Balaguer
description: Information lié à l'Eglise de Prats-Balaguer
permalink: /eglise-de-prats-balaguer.html
---

<div class="row">
    <div class="col-md-6">
        <div style="text-align: center;">
            <img src= "img\patrimoine\eglisePB\eglisePB.jpg" 
                alt="team picture" 
                style="max-width: 90%;"/>
        </div>
    </div>
    <div class="col-md-6">
        <p>
        L'église de la Trinité et Sainte-Marie, située au hameau de Prats-Balaguer sur la commune de Fontpédrouse à 1300 mètres d'altitude, est un édifice roman datant du XIe siècle. Elle représente un exemple remarquable de l'architecture religieuse romane des Pyrénées catalanes, avec ses caractéristiques typiques : chevet orienté et clocher qui ponctue le paysage.
        </p><p>
        Au fil des siècles, l'église a été transformée par des ajouts successifs, notamment l'ajout de chapelles latérales et d'une sacristie au XVIIIe siècle. Un vieux cimetière borde l'édifice au sud. L'église domine la vallée de la Têt et demeure un témoignage architectural important de la région.
        </p><p>
        Elle se distingue particulièrement par son rare ensemble classé de toiles constituant le décor de la Semaine Sainte, appelé « Monument » en catalan. Elle est l'unique église du département à avoir conservé la quasi-totalité des éléments composant ce décor et à l'avoir installé de manière permanente.
        </p>
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