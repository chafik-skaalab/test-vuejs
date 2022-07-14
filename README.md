
# Création d'une interface CRUD

L'objectif de cet exercice est de réaliser une interface CRUD (pour Create, Read, Update, Delete) permettant à un utilisateur de voir, créer, modifier et supprimer des items.
Suite à l'exercice, un échange aura lieu afin de faire le point sur l'implémentation choisie des différents composants de l'interface.

## Contexte
CBM (Customer Bot Manager) est une interface permettant à des clients de créer des chatbots adaptés à leurs besoins. Le code de ce dépôt est une réplique de la stack technique de CBM dans sa forme la plus simple (pas d'authentification, une seule page, deux entités).

Cette stack comprend notamment :
- Vue 2
- Vuex
- Vue Router
- Vue i18n
- Tailwind CSS (v1)
- Buefy
- SASS
- BEM/ITCSS pour les composants CSS personnalisés
- TypeScript
- ESLint
- Lodash
- Axios
- Font Awesome

## Backlog
- US01 - En tant qu'utilisateur je veux pouvoir visualiser une liste d'items sous la forme d'un tableau en accédant à la route /items.
- US02 - En tant qu'utilisateur je veux pouvoir visualiser une liste d'items sous la forme d'une grille de cards sur la même route /items (https://material.io/components/cards).
- US03 - En tant qu'utilisateur je veux pouvoir créer un item depuis une page spécifique (et non une modale). Exemple possible d'URL : '/items/add'.
- US04 - En tant qu'utilisateur je veux pouvoir éditer un item depuis une page spécifique. Exemple possible d'URL : '/items/edit/:id'.
- US05 - En tant qu'utilisateur je veux pouvoir supprimer un item depuis la vue tableau ou la vue liste.
- US06 - En tant qu'utilisateur je veux pouvoir filtrer les items d'après leur nom côté frontend à l'aide d'une barre de recherche avec debounce.
- US07 (bonus) - Le candidat devra implémenter une fonctionnalité pertinente de son choix.

## Prérequis
- Node 16 / npm 8

## Consignes
- Les ressources mises à la disposition du candidat sont les suivantes :
  - Le code source initiale de l'application contenant plusieurs composants communs et une page /users pouvant servir d'exemple pour la vue tableau et la page d'édition.
  - La documentation des appels API permettant d'effectuer les requêtes CRUD sur les items (en suite de ce README).

- Le candidat peut utiliser/installer des librairies ou composants tiers s'il le souhaite, du moment qu'il le justifie et qu'il en fait un usage mesuré.
- La production ainsi que la livraison devra se faire sur le présent dépôt Git.
- Le mode opératoire pour tester localement la solution devra être inchangé par rapport à ce qui est fourni.
- Une attention toute particulière sera apportée à la qualité et le style du code ainsi qu'aux bonnes pratiques. 
- Tout choix devra pouvoir être défendu pendant le débriefing de l'exercice.
- La date limite de rendu de l'exercice sera communiquée au candidat par mail.
- L'exercice a été conçu pour être réalisable dans une durée moyenne de 4h (+/- 1h) approximativement.
- En cas de problème ou question, n'hésitez pas à contacter mathieu.morainville@skaalab.io ou remy.jeanjean@skaalab.io.

## Notes
- Concernant les US03 et US04, il est à noter que le champ 'name' des items est obligatoire.

## Ressources

### Setup du projet
```
npm install
```

### Compilation et hot-reload pour le développement
```
npm run serve
```

### Documentation API

L'API a été créé avec Supabase (https://supabase.com/docs).
La clé d'API SUPABASE_KEY nécessaire pour les requêtes est définie dans le fichier .env à la racine du projet.

- READ
```
curl 'https://bafepwueirdanzwqmycw.supabase.co/rest/v1/items?select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

- CREATE
```
curl -X POST 'https://bafepwueirdanzwqmycw.supabase.co/rest/v1/items' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-d '{ "name": "Jus d'orange", "quantity": 1 }'
```

- UPDATE
```
curl -X PATCH 'https://bafepwueirdanzwqmycw.supabase.co/rest/v1/items?id=eq.${id}' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-d '{ "name": "Jus d'orange", "quantity": 2 }'
```

- DELETE
```
curl -X DELETE 'https://bafepwueirdanzwqmycw.supabase.co/rest/v1/items?id=eq.${id}' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

Le modèle de l'entité `items` est le suivant :
```
interface Item {
  id: number
  createdAt: string
  name: string
  quantity: number
}
```

