# Site officiel de Hadj Ismael Bohlaly

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Lucide, blog Markdown (gray-matter) et administration Decap CMS.

## Contenu

- Accueil, Djinns, Protection spirituelle, Rituels (50 rituels, une page chacun), Produits (21 produits, une page chacun), Accompagnement, À propos, FAQ, Blog, Contact, Confidentialité.
- Bouton WhatsApp avec message prérempli sur chaque rituel, produit et article, plus un bouton flottant.
- SEO : titres et descriptions uniques, URL canoniques, Open Graph, sitemap.xml et robots.txt automatiques, Schema.org (Person, WebSite, Article, BreadcrumbList, Product, FAQPage), fils d'Ariane, articles similaires.

## 1. Installation locale

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                  # http://localhost:3000
```

## 2. Variables d'environnement (dans Vercel, jamais dans le code)

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Adresse du site, ex. `https://www.hadjismaelbohlaly.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (facultatif) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Vérification Google Search Console (facultatif) |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | Connexion à /admin |

## 3. Mise en ligne (GitHub puis Vercel)

1. Créez un dépôt GitHub et envoyez ce dossier (`git init`, `git add .`, `git commit -m "Site"`, `git push`).
2. Sur vercel.com : « Add New Project », choisissez le dépôt. Vercel détecte Next.js.
3. Ajoutez les variables d'environnement (Production et Preview).
4. Settings > Domains : ajoutez votre nom de domaine et suivez les instructions DNS.
5. Chaque modification sur `main` redéploie automatiquement ; les autres branches créent une prévisualisation.

## 4. Administration /admin (Decap CMS)

1. GitHub : Settings > Developer settings > OAuth Apps > New OAuth App.
   - Homepage URL : `https://www.votre-domaine.com`
   - Authorization callback URL : `https://www.votre-domaine.com/api/callback`
2. Mettez le Client ID et le Client Secret dans Vercel, puis redéployez.
3. Dans `public/admin/config.yml`, remplacez `VOTRE-COMPTE/hadj-ismael-bohlaly` et l'adresse du site.
4. Ouvrez `/admin` et connectez-vous avec GitHub. Seuls les comptes ayant accès en écriture au dépôt peuvent modifier le contenu.

### Publier un article

1. `/admin` > « Articles du blog » > « Nouvel article ».
2. Remplissez titre, description pour Google (150 à 160 caractères), catégorie, mots-clés, image et sa description.
3. Rédigez le texte avec des sous-titres (Titre 2) et des liens vers les rituels, la protection ou les produits.
4. « Publier » : le site se met à jour en 1 à 2 minutes et l'article entre dans le sitemap.

Produits et rituels : « Produits et rituels » dans /admin. Un article sans titre, description, date, catégorie ou image bloque la mise en ligne avec un message clair.

## 5. À vérifier avant le lancement

- **Rituels** (`content/rituels.json`) : textes provisoires, à relire et adapter aux vraies pratiques de Hadj Ismael.
- **Prix** : tous en « Prix sur demande ». Ajoutez un prix en FCFA dans /admin pour l'afficher.
- **À propos** : parcours, pèlerinage, années d'expérience et citation sont provisoires.
- **Photos produits** : certaines viennent de catalogues ou d'internet (dont une avec le logo « Juanyu Jewelry »). Remplacez-les par vos propres photos.
- **E-mail** : « bolaly » contre « Bohlaly », à confirmer.
- **Réseaux sociaux** : à ajouter dans `src/lib/site.ts` (`socials`).
- **Témoignages** : le type est prêt, n'ajoutez que de vrais témoignages avec accord.

## 6. Après la mise en ligne

- Search Console : soumettre `/sitemap.xml`.
- Analytics : l'événement `whatsapp_click` (avec sa source) mesure les conversions ; marquez-le comme conversion clé dans GA4.
- Vérifier PageSpeed Insights.
- Publier 1 à 2 articles de qualité par semaine.

## Structure

```
content/          Articles Markdown (blog, djinns), produits et rituels en JSON
public/admin/     Decap CMS
public/images/    Photos optimisées (WebP)
src/app/          Pages, sitemap, robots, connexion GitHub
src/components/   Composants
src/data/         Catalogue, familles de rituels, FAQ
src/lib/          SEO, Schema.org, WhatsApp, Markdown
src/types/        Types TypeScript
```
