# c.food online store
This digital store is open-source and built openly by kb (Kabolobari Benakole) from "open-sourced" technologies and generous contributions and help from both free and premium tutorials, blogs, and courses.


## Technologies
* Nuxt 3
* Vue 3
* TailwindCSS
* Gitlab
* Supabase (SQL, PostgreSQL)
* Storyblok


## Summaries of code used
### How to pull up to date main into dev branch
My own shorthand, all in one fell swoop.

`git checkout branch-name; git fetch origin; git merge origin/main;`

Link to this is down in References & credits.

### How do I delete a branch both locally and remotely?
From source:

```
git push -d <remote_name> <branchname>
git branch -d <branchname>
```

Note: In most cases, `<remote_name>` will be `origin`.

My shorthand:

`git push -d origin branch-name; git branch -d branch-name`


### How to rename a branch locally/remotely
In one fell swoop:

`git branch -m old-name new-name; git push origin -d old-name; git push origin -u new-name;`


### Nuxt 3 authentication with Supabase
At the time when doing this was fuzzy, Feb 12, 2023, [this tutorial](https://vuenoob.com/tutorial/nuxt-3-authentication-with-supabase/) came in handy, with good code samples how to authenticate "users" into Nuxt 3 app with supabase, and then publishing such "profiles" to own table on supabase.

At this same time, I intend to research more on the subject to be sure it can handle my brief fully -- as customers create account at the cfood.studio, their accounts should be pushed to the customers table on supabase. Of course, when they actually order, they'll be "upserted" to same table and their order to the orders table, these actions only happening as they can now be authenticated having already registered (and are signed in when they purchase).


## References & credits
1. [Build and deploy a static online shop with Nuxt3 using Pinia Store and Stripe Checkout to Firebase](https://keith-mifsud.me/blog/build-and-deploy-nuxt3-static-site-with-pinia-and-stripe-checkout-on-firebase)
2. [Seed, simplicity of cart page as inspiration](https://seed.com/cart?cart=syn-wk)
3. [How To Make A Input Number / Counter With Tailwind CSS From Scratch](https://www.tailwindcsscomponent.com/number-input-counter)
4. [How to build an E-commerce Store with Nuxt.js and Strapi](https://strapi.io/blog/how-to-build-an-e-commerce-store-with-nuxt-js-and-strapi)
5. [Because I love crazy class/style bindings in Vue!](https://vuejs.org/guide/essentials/class-and-style.html)
6. [Shopping Carts: Two column with quantity dropdown](https://tailwindui.com/components/ecommerce/components/shopping-carts#component-62d97a81daaa3dbe21ece61a58cdd0f8)
7. [Product Overviews: Split with image](https://tailwindui.com/components/ecommerce/components/product-overviews#component-7343b727d03bb437b9617fb26bf35021)
8. [Promo Sections: Full-width with overlapping image tiles](https://tailwindui.com/components/ecommerce/components/promo-sections#component-a63bf3a5e5430e5ba171ad153687d87d)
9. [Nuxt Context: where is it in Nuxt 3](https://krutiepatel.com/blog/nuxt-context-where-is-it-in-nuxt-3/)
10. [Beautiful Tailwind gradient generator](https://hypercolor.dev/generator)
11. [Regexp to check if file type is image](https://stackoverflow.com/questions/30994015/regexp-to-check-if-file-is-image#30994033)
12. [Embed SVG as a cool section divider](https://adelkov.medium.com/embed-svgs-as-cool-section-dividers-3b762639befd)
13. [Global State Management with Pinia In Nuxt 3](https://vueschool.io/articles/vuejs-tutorials/global-state-management-with-pinia-in-nuxt-3/)
14. [How to push local code to new branch on gitlab. need specific steps (looks like a duplicate question but i need some specific steps)](https://stackoverflow.com/questions/63225255/how-to-push-local-code-to-new-branch-on-gitlab-need-specific-steps-looks-like)
15. [-u is shorthand for --set-upstream first push to create matching local branch on remote](https://stackoverflow.com/questions/18031946/what-does-set-upstream-do#18032014)
16. [How to "git pull" from master into the development branch](https://stackoverflow.com/questions/20101994/how-to-git-pull-from-master-into-the-development-branch#20103414)
17. [How do I delete a Git branch locally and remotely?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely#2003515)
18. [How to Rename a Branch in Git](https://www.howtogeek.com/851425/git-rename-branch/)
19. [Nuxt 3 authentication with Supabase](https://vuenoob.com/tutorial/nuxt-3-authentication-with-supabase/)
20. [Nuxt 3 authentication with Supabase](https://vuenoob.com/tutorial/nuxt-3-authentication-with-supabase/)