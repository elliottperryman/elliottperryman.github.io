---
layout: post
title:  "High-performance hybrid-global-deflated-local optimization with applications to active learning"
date:   2021-11-19
categories: code
external_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11211647/pdf/nihms-1948132.pdf
external_site: ieeexplore.ieee.org
authors: Marcus Michael Noack, David Perryman, Harinarayan Krishnan, Petrus H Zwart
published: 2021 3rd Annual Workshop on Extreme-scale Experiment-in-the-Loop Computing (XLOOP)
tag: paper
---

I co-wrote a global optimization method with my colleague Marcus. The core of the method is to take a global optimization method such as differential evolution that gives global convergence and mix in local optimization methods that use gradient descent. The local optimization method usually converges to a local minimum quickly. Then you use a modification of the gradient that prevents future local minimization steps from converging to the same minimum. 

<!--more-->