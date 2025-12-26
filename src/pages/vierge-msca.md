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
        <div class="row">
            <h4>Description</h4>
            <p>
            Statue d’environ 50 cm de haut, en bois sculpté. Elle est datée du XIVème siècle.
            Cette statue a été volée en juin 1991.
            </p>
        </div>
        <div class="row">
            <h4>Avis de Recherche</h4>
            <div style="text-align: center; margin: 20px 0;">
                <a href="avis-recherche/SteCatherine/FR-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/french.png" alt="French" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/CAT-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/catalan.png" alt="Catalan" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/ESP-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/spanish.png" alt="Spanish" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/EN-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/english.png" alt="English" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/CH-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/china.png" alt="Chinese" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/DE-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/german.png" alt="German" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/IT-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/italian.png" alt="Italian" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/JP-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/japanese.png" alt="Japanese" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/NL-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/netherlands.png" alt="Dutch" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/PL-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/polish.png" alt="Polish" style="margin: 10px; height: 40px;"/>
                </a>
                <a href="avis-recherche/SteCatherine/RU-SteCatherine.pdf" target="_blank">
                    <img src="img/flags/russian.png" alt="Russian" style="margin: 10px; height: 40px;"/>
                </a>
            </div>
        </div>
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