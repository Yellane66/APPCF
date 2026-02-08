---
layout: page.html
title: Patrimoine Naturel
description: Découvrez les randonnées conseillée par l'APPCF
permalink: /hikes.html
---

<div class="row">
<p>Pour le plaisir des petits et des grands, il existe de nombreuses de randonnées au niveau de difficultés variées pour découvrir le parc naturel des Pyrénées aux alentours de Fontpédrouse. Au detours de ces sentiers nos aventuriers auront la chance d'y découvrir une faune et une flore préservées. Les plus chanceux d'entre vous decouvriront que les Izards prennent la pose pour les photographes.
</p>
</div>

<div class="row">
    <div class="col-md-6 mb-4">
        <div style="text-align: center;">
            <img src= "img/patrimoine/hikes/regulation/legend.png" 
                alt="team picture" 
                style="max-width: 90%;"/>
        </div>
    </div><div class="col-md-6 mb-8">
        <div>
            <p>
                Pour faciliter votre organisation voici les randonnées les plus notables avec leur niveau de dificultée. Nous utilisons la classification national expliquée sur le site 
                <a href="https://www.ffrandonnee.fr">de la Fédération Française de Randonnée</a>. 
                Pour plus de détail cliquez sur le nom de la randonnée. Certaine de ces randonnées peuvent être combinées si vous le souhaitez.
            </p>
        </div>
    </div>
</div>

<div class="row" style="padding-top: 10px;">
    <div class="col-md-6">
        {% for hike in hikes %}
        {% if hike.column == 1 %}
        <div class="row">
            <a href="{{ hike.url }}">
                <div class="col-md-12 regulation-div">
                    <img src="img/patrimoine/hikes/regulation/E{{ hike.effort }}.jpg" 
                        alt="Effort level {{ hike.effort }}" 
                        class="regulation-img">
                    <img src="img/patrimoine/hikes/regulation/T{{ hike.technicity }}.jpg" 
                        alt="Technicity level {{ hike.technicity }}" 
                        class="regulation-img">
                    <img src="img/patrimoine/hikes/regulation/R{{ hike.risk }}.jpg" 
                        alt="Risk level {{ hike.risk }}" 
                        class="regulation-img">
                    <h4 class="hike-name">{{ hike.name }}</h4>
                </div>
            </a>
        </div>
        {% endif %}
        {% endfor %}
    </div>
    <div class="col-md-6">
        {% for hike in hikes %}
        {% if hike.column == 2 %}
        <div class="row">
            <a href="{{ hike.url }}">
                <div class="col-md-12 regulation-div">
                    <img src="img/patrimoine/hikes/regulation/E{{ hike.effort }}.jpg" 
                        alt="Effort level {{ hike.effort }}" 
                        class="regulation-img">
                    <img src="img/patrimoine/hikes/regulation/T{{ hike.technicity }}.jpg" 
                        alt="Technicity level {{ hike.technicity }}" 
                        class="regulation-img">
                    <img src="img/patrimoine/hikes/regulation/R{{ hike.risk }}.jpg" 
                        alt="Risk level {{ hike.risk }}" 
                        class="regulation-img">
                        <h4 class="hike-name">{{ hike.name }}</h4>
                </div>
            </a>
        </div>
        {% endif %}
        {% endfor %}
    </div>
</div>
