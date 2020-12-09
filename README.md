# jeu-du-labyrinthe
Projet Labyrinthe
## Etape 1 : Construction du labyrinthe
La première étape nécessaire à ce projet est la construction du labyrinthe en lui-même. Un
fichier JSON contenant les informations nécessaires à la création du labyrinthe vous est
fourni. Il est structuré de la manière qui suit :
Vous avez à votre disposition 144 labyrinthes dans ce fichier JSON : trois exemples de
labyrinthe pour différentes tailles, allant de 3 x 3 cases à 25 x 25 cases. Commencez bien
par les plus petits, ce qui vous permettra de débugger votre code.
Objectif de cette étape :
1. Servez vous de ce fichier JSON pour créer le fameux labyrinthe. Le rendu final doit
ressembler à la figure 1.
2. Passez du temps hors ordinateur pour réfléchir à la structure des données la plus
adaptée au projet (j’ai déjà dit ça ?). La “qualité” de votre représentation des
données déterminera la difficulté des étapes suivantes !

## Etape 2 : Résolution du labyrinthe - Intuition :
Objectif de cette étape :
Etablir une première méthode de résolution “à votre sauce”.
Etapes :
● Chacun de votre côté, pendant 15 minutes, imaginez vous dans le labyrinthe, et
décrivez comment vous pourriez trouver la sortie (en vert) depuis l’entrée (en
orange).
● Ecrivez votre algorithme sous forme de pseudo-code (pas de formalisme particulier
attendu : ​https://fr.wikipedia.org/wiki/Pseudo-code)
● Expliquez votre algorithme à votre îlot. Comparez les pour ensuite votre algorithme
à celui de votre binôme. Êtes-vous arrivés indépendamment au même algorithme
de recherche ?
● Il n’est pas demandé d’optimisation​. C’est normal que votre algorithme se perde en
chemin, et que ce ne soit pas “le plus court”. Assurez vous simplement que quelsoit le labyrinthe fourni, vous puissiez trouver à coup sûr la sortie du labyrinthe.