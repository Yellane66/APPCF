# Guide d'utilisation - Gestion des Randonnées

## Vue d'ensemble

Les randonnées sont maintenant gérées via un fichier JSON simple, ce qui facilite grandement l'ajout, la modification et la suppression de randonnées sans toucher au code HTML.

## Structure des fichiers

- **`src/_data/hikes.json`** : Contient toutes les données des randonnées
- **`src/pages/hikes.md`** : Template qui affiche automatiquement les randonnées
- **`css/style.css`** : Contient les styles pour l'affichage des badges de régulation

## Format du fichier JSON

Chaque randonnée dans `src/_data/hikes.json` suit cette structure :

```json
{
    "name": "Nom de la randonnée",
    "url": "/hikes_details/nom-fichier.html",
    "effort": 2,        // Niveau d'effort : 1-4
    "technicity": 3,    // Niveau de technicité : 1-3
    "risk": 2,          // Niveau de risque : 1-3
    "column": 1         // Colonne d'affichage : 1 ou 2
}
```

### Paramètres détaillés

- **name** : Le nom complet de la randonnée (affiché comme titre)
- **url** : Le lien vers la page de détails de la randonnée
- **effort** : Niveau d'effort physique requis (1 = facile, 4 = très difficile)
- **technicity** : Niveau technique du parcours (1 = facile, 3 = technique)
- **risk** : Niveau de risque (1 = faible, 3 = élevé)
- **column** : Dans quelle colonne afficher la randonnée (1 = gauche, 2 = droite)

## Comment ajouter une nouvelle randonnée

1. Ouvrez le fichier `src/_data/hikes.json`
2. Ajoutez une nouvelle entrée à la fin du tableau (avant le `]`) :

```json
,
{
    "name": "Nouvelle Randonnée",
    "url": "/hikes_details/nouvelle-randonnee.html",
    "effort": 3,
    "technicity": 2,
    "risk": 2,
    "column": 1
}
```

3. Sauvegardez le fichier
4. Lancez la compilation : `npm run build` ou `npm run serve`

## Comment modifier une randonnée existante

1. Ouvrez `src/_data/hikes.json`
2. Trouvez la randonnée à modifier
3. Changez les valeurs souhaitées
4. Sauvegardez et recompilez

## Comment supprimer une randonnée

1. Ouvrez `src/_data/hikes.json`
2. Supprimez l'objet JSON complet de la randonnée (y compris les accolades)
3. Vérifiez que la virgule avant/après est correcte
4. Sauvegardez et recompilez

## Affichage sur deux colonnes

Le système affiche automatiquement les randonnées sur deux colonnes :
- **column: 1** : Colonne de gauche
- **column: 2** : Colonne de droite

Pour équilibrer l'affichage, essayez de répartir les randonnées équitablement entre les deux colonnes.

## Images des badges de régulation

Les badges sont automatiquement générés à partir des valeurs :
- `E{effort}.jpg` : Badge d'effort
- `T{technicity}.jpg` : Badge de technicité
- `R{risk}.jpg` : Badge de risque

Ces images doivent exister dans : `img/patrimoine/hikes/regulation/`

## Commandes utiles

```bash
# Compiler le site
npm run build

# Lancer le serveur de développement avec rechargement automatique
npm run serve

# Déboguer si besoin
npm run debug
```

## Exemple complet

Voici un exemple avec 3 randonnées :

```json
[
    {
        "name": "Le château de Prats-Balaguer",
        "url": "/hikes_details/prats_castel.html",
        "effort": 2,
        "technicity": 2,
        "risk": 2,
        "column": 1
    },
    {
        "name": "Col Mitja (par le GR10)",
        "url": "/hikes_details/mitja.html",
        "effort": 3,
        "technicity": 3,
        "risk": 3,
        "column": 1
    },
    {
        "name": "Le Pic du Redoun",
        "url": "/hikes_details/redoun.html",
        "effort": 4,
        "technicity": 3,
        "risk": 3,
        "column": 2
    }
]
```

## Dépannage

### Les randonnées ne s'affichent pas
- Vérifiez que le fichier JSON est valide (pas de virgules manquantes ou en trop)
- Assurez-vous d'avoir recompilé le site après les modifications
- Vérifiez la console du navigateur pour les erreurs

### Les badges ne s'affichent pas
- Vérifiez que les fichiers d'images existent dans `img/patrimoine/hikes/regulation/`
- Les noms doivent correspondre exactement : `E1.jpg`, `E2.jpg`, etc.

### Mise en forme incorrecte
- Vérifiez que le fichier `css/style.css` contient bien les règles CSS pour `.regulation-div`, `.regulation-img`, et `.hike-name`
