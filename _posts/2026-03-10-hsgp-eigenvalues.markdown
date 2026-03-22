---
layout: post
title:  "Numerical Stability and Numpyro Hilbert Space Gaussian Processes"
date:   2026-03-10
categories: post
external_url: https://neutrons.streamlit.app
external_site: streamlit.app
authors: Elliott Perryman
tag: post
---

I have been working on Gaussian processes now for quite some time, and there is a paper I am excited about, [Hilbert Space Gaussian Processes](https://link.springer.com/article/10.1007/s11222-019-09886-w).

<!--more-->

The paper identifies an eigenbasis and eigenfunctions for approximating Gaussian processes. To understand this method, I recommend:
* [A blog post describing HSGPs](https://juanitorduz.github.io/hsgp_intro/)
* Numpyro examples [example 1](https://num.pyro.ai/en/stable/examples/hsgp.html) and [example 2](https://num.pyro.ai/en/stable/tutorials/hsgp_nd_example.html)
* [The original paper](https://link.springer.com/article/10.1007/s11222-019-09886-w)
* Another [paper](https://arxiv.org/pdf/2004.11408) talking about how to set the parameters of the method

In short, the Gaussian process model is reduced to a linear model with some penalties for higher order terms:

$$
f(x) \approx \sum_i \alpha_i \phi_i(x) \beta_i
$$

Where $$\alpha_i$ is the penalty for higher order terms and $$\beta_i$$ is drawn from a standard normal:

$$
\beta_i \sim \mathcal{N}(0,1)
$$

If you are familiar with GPs, you know that this is a huge simplification in terms of the complexity. Now, rather than the matrix inverse necessary for a full GP, you are doing linear regression. 

But, here's a catch. $$\alpha$$ is a penalty term that encodes lengthscale and amplitude. It decreases with increasing $$i$$ because of course the sum must converge, and it is always positive. However, in its numpyro implementation, it is unstable for at least the squared exponential kernel. Here is the equation for computing $$\alpha^2$$ where D is the dimension, $$\sqrt A$$ is the kernel amplitude, and $$ell$$ is the kernel lengthscale. 

$$
\alpha^2 = A (\sqrt{2\pi})^D \ell^D \exp\left(-\frac{1}{2} \ell^2 \boldsymbol{\omega}^\top \boldsymbol{\omega}\right)
$$

When this is used in a numpyro model with Stochastic Variational Inference (SVI), I kept getting nan values. And wouldn't you believe it, it was not my code! Here's the fix.

First, what is the problem? The problem is that $$\boldsymbol{\omega}^\top \boldsymbol{\omega}\right$$ can be very large and is in an exponential. This causes underflows/overflows and is just not stable. But the fix is simple. Because $$\alpha$$ is always positive, let's just consider the $$\log \alpha^2$$:

$$
\log \alpha^2 = \log A + \frac{D}{2} \log(2\pi) + D \log \ell - \frac{1}{2} \ell^2 \boldsymbol{\omega}^\top \boldsymbol{\omega}
$$

Now this is linear in $$\boldsymbol{\omega}^\top \boldsymbol{\omega}$$. Additionally, we are going to take a square root, which in log space is just a multiplication by 1/2. 

Now, when we need $$\sqrt \alpha^2$$, we can compute $$\exp \frac{1}{2} \log \alpha^2$$ and avoid nan values. 