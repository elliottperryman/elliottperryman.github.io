---
layout: post
title:  "HGDL v1"
date: 2020-12-15
categories: code
external_url: https://www.osti.gov/biblio/code-52818
external_site: osti.gov
authors: Marcus Noack, David Perryman
published: US Department of Energy (DOE) Software
tag: code
---

I co-wrote a global optimization method with my colleague Marcus. The core of the method is to take a global optimization method such as differential evolution that gives global convergence and mix in local optimization methods that use gradient descent. The local optimization method usually converges to a local minimum quickly. Then you use a modification of the gradient that prevents future local minimization steps from converging to the same minimum. 

<!--more-->