---
layout: page.html
title: Randonnée du château de Prats-Balaguer
description: Randonnée du château de Prats-Balaguer
permalink: /hikes-chateau-pb.html
---
<div class="row">
    <div class="col-md-5 col-sd-6">
        <iframe width="450px" height="580px" src="https://www.openrunner.com/route/9756329/embed/fr/336e78585272344d6f6a6a68665076387a534c6e6d584f6a6a705852626c49756644436645674c54325a733d3a3a8533a03adabacf5e777c1a26b48dd6b5" frameborder="0" allowfullscreen>
        </iframe>
    </div>
    <div class="col-md-7">
        <table class="hikes-sum">
            <tr>
            <td class="hikes-label">Départ</td>
            <td class="hikes-value">Fontpédrouse monument aux morts</td>
            </tr>
            <tr>
            <td class="hikes-label">Accessibilité</td>
            <td class="hikes-value">Toutes saisons</td>
            </tr>
            <tr>
            <td class="hikes-label">Classification de la randonnée</td>
            <td class="hikes-value">
                Effort: E2 <br/>
                Technicité: T2 / T3 ponctuellement <br/>
                Risque: R2
            </td>
            </tr>
            <tr>
            <td class="hikes-label">Denivelé Psitif</td>
            <td class="hikes-value">320m</td>
            </tr>
            <tr>
            <td class="hikes-label">Distance A/R</td>
            <td class="hikes-value">5 km</td>
            </tr>
            <tr>
            <td class="hikes-label">Durée A/R estimée</td>
            <td class="hikes-value">2h00</td>
            </tr>
            <tr>
            <td class="hikes-label">Caracteristique de la balade</td>
            <td class="hikes-value">
                Chateau de Prats-Balaguer, </br>
                Eglise de Prats-Balaguer, </br>
                Pont Romain de Fontpédrouse
            </td>
            </tr>
        </table>
    </div>
</div>
<div class="row" style="padding-top: 10px;">
    <div class="col-md-12">
        <p>
            <span style="font-weight: bold;">
            Itinéraire:
            </span> En partant de Fontpédrouse à pied, prendre la route 
            qui se dirige vers Prats-Balaguer, Saint-Thomas pendant 500m où se trouve un 
            petit pont. Une fois passé le pont, prendre le chemin qui monte 
            et continuer tout droit sur ce chemin, à chaque intersections 
            et ce, jusqu'à Prats-Balaguer. Une fois arrivé dans Prats-Balaguer,
            passer devant le clocher, puis le lavoir et prendre le chemin
            qui débute quelques dizaines de mètres derrière  le lavoir
            et qui découche au château.
            Il existe un possibilité de faire une boucle à Prats-Balaguer
            en redescendant par la piste devant le chateau qui vous ramène 
            au niveau de l'église de Prats-Balaguer. Il existe un très beau point
            de vue au niveau de l'église et celle-ci peut être visitée. 
        </p>
    </div>
</div>
<div class="row">
     <div class="col-md-4">
        <h6> Chemin après pont Romain</h6>
        <img src="img\patrimoine\hikes\prats_castle\bifurcation_pont_romain.jpg" 
        alt="chemin après pont romain" 
        class="img-responsive hikes-vertical">
    </div>
     <div class="col-md-4">
        <h6> Clocher de Prats-Balaguer</h6>
        <img src="img\patrimoine\hikes\prats_castle\clocher.jpg" 
        alt="Clocher de Prats-Balaguer" 
        class="img-responsive hikes-vertical"> 
    </div>
     <div class="col-md-4">
        <h6> Lavoir de Prats-Balaguer. <br/>
                Prendre la chemin visible sur la photo. </h6>
        <img src="img\patrimoine\hikes\prats_castle\lavoir.jpg" 
        alt="lavoir de Prats-Balaguer" 
        class="img-responsive"> 
    </div>
     <div class="col-md-4">
        <h6> Chateau de Prats-Balaguer </h6>
        <img src="img\patrimoine\hikes\prats_castle\castel.jpg" 
        alt="chateau de Prats-Balaguer" 
        class="img-responsive"> 
    </div>
    <div class="col-md-4">
        <h6> Eglise de Prats-Balaguer. </h6>
        <img src="img\patrimoine\hikes\prats_castle\church_prats.jpg" 
        alt="eglise de Prats-Balaguer" 
        class="img-responsive"> 
    </div>
</div>
<br>

## Actualités

{% for item in news %}
{% if item.tags contains 'hike-chateau-pb' %}
<div class="row">
<div class="news-item" style="margin: 20px 0; padding: 15px; border-left: 4px solid #2c5282;">
    <h3>{% if item.url %}<a href="{{ item.url }}" target="_blank">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
    <p><small><em>{{ item.date }}</em></small></p>
    <p>{{ item.description }}</p>
</div>
</div>
{% endif %}
{% endfor %}