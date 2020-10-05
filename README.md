<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>

> # Warning: This is a work-in-progress app, it's not stable yet.

Airtable App - Bases compare
===

The goal of this app is to compare multiple Airtable bases together to detect differences between structure or configuration.

For instance, it can be used to detect whether a base has a table that another base doesn't have.

It is very useful if you run similar bases that should eventually be sync with one another, in order to know what's not identical.

Common use cases are:
- staging/production bases where staging is ahead of production (but eventually gets caught)
- SaaS where each customer has its own base

> The ultimate goal would be to compare an unlimited amount of bases together, but the v1 will try to make it work for comparing 2 bases for starters.

---

# Documentation

![image](https://user-images.githubusercontent.com/3807458/95138868-8a698b80-076b-11eb-88a2-16d3c17d38dc.png)

Using the output given by the app within a diffing tool such as [diffchecker](https://www.diffchecker.com/diff) will help you locate the Schema differences between 2 different bases.

---

# Quick start

TODO

---

# FAQ

TODO

---

# CHANGELOG

`alpha.0` (2020-10-06): Can be used in your own bases, might break under some untested conditions, feel free to open a PR or an issue if so.

---

# Contributing

TODO

---

# Roadmap

Will be used in alpha version for some time (internally at Unly) until it gets improved and maybe eventually released as an official Airtable App.

---

# License

[GNU-GPL](LICENSE.md)

---

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being authored by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education.
> Unly is committed to making education more inclusive, through responsible funding for students.

We provide technological solutions to help students find the necessary funding for their studies.

We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit :
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL
