---
layout: page.html
title: Liens utils
description: Information lié à la commune
permalink: /links.html
---

<p class="lead">Si vous souhaitez en découvrir un peu plus sur notre commune et la région voici quelques liens utiles.</p>

<div class="row g-3">
    {% for link in links %}<div class="col-md-3">
            <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                <img src="{{ link.img }}" alt="Link" class="img-fluid">
            </a>
        </div>{% endfor %}
</div>