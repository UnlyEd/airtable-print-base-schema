<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>

> # Warning: This is a work-in-progress app, it's not stable yet.

Airtable App - Print base schema
===

The goal of this app is to print the schema of one Airtable base.
**Combined with a text diff tool**, it can be used to detect differences between two versions of the same base, or different bases.

> For instance, it can be used to detect whether a base has a table that another base doesn't have.

It is very useful if you run similar bases that should eventually be sync with one another, in order to know what's not identical.

Common use cases are:
- staging/production bases where staging is ahead of production (but eventually gets caught)
- SaaS where each customer has its own base

---

# Documentation

![image](https://user-images.githubusercontent.com/3807458/95138868-8a698b80-076b-11eb-88a2-16d3c17d38dc.png)

Using the output given by the app within a diffing tool such as [diffchecker](https://www.diffchecker.com/diff) will help you locate the Schema differences between 2 different bases.

---

# Quick start

[Follow the official tutorial to install an open-source Airtable app from GitHub into your own Airtable base](https://airtable.com/developers/apps/guides/remix-from-github)

Additional resources:
- [https://support.airtable.com/hc/en-us/articles/360042807073-Adding-an-app-to-a-base](https://support.airtable.com/hc/en-us/articles/360042807073-Adding-an-app-to-a-base)


---

# FAQ

## 1. Is it Free?
Yes, install it yourself and use it in your bases.

## 1. Can I resell this?
No, code source is under GNU-GPL. 
You can change it for yourself but cannot package it to resell it to other people.

---

# CHANGELOG

- `1.0.0` (2020-11-06): No difference with alpha-0, was released as official version after 1 month of internal use at Unly.
- `1.0.0-alpha.0` (2020-10-06): Can be used in your own bases, might break under some untested conditions, feel free to open a PR or an issue if so.

---

# Contributing

Feel free to open an issue if you wish to contribute.

---

# Roadmap

No big change planned. Project is maintained and bug fix that are reported will be looked into.

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
