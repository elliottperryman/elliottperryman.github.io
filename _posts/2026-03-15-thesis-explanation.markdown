---
layout: post
title:  "What is my thesis about?"
date:   2026-01-10
categories: post
authors: Elliott Perryman
tag: post
published: Blog Post
---

In this post, I plan to write out an informal description of my PhD thesis.

The main idea is answering the question of how to do experiments most effectively. This is most relevant when there are:
* costly experiments
* slow experiments
* many parameters to control
If the experiments are fast or cheap, then there is no point to optimize the experiments, one can just make more measurements. If the number of controllable features are small, then it also does not matter what you do. 

The problem I am addressing is neutron scattering. I made a simple [demo game](neutrons.streamlit.app) (you may need to wake the app up), that is intented to teach what the intuition behind the problem is. 

Neutrons are very costly to extract, because they need to be extracted from the nucleus of an atom via nuclear fission or spallation. In comparison, photon methods are very cheap. Additionally, neutron experiments are very slow, since there are few neutrons to use, and the parameters are many (magnetic field, temperature, etc).

So, we want to make neutron experiments more efficient, and we think that neutron experiments are a good choice for design of experiments. What does it mean to say that the experiment is efficient? To answer this requires some notation:

Let's imagine that a user can control some parameters, $\xi$, such as temperature, scattering angles, magnetic fields, pressure, etc. In return they measure a count of neutrons, $y$, relative to the flux output of the reactor, as measured by a monitor, $M_1$. There is some model $f$ that contains all the physics of the problem and depends on parameters $\Phi$. Then the model is:
$$
y \sim \text{Poisson}(M_1 * f({\xi}; {\Phi}))
$$
and one seeks to identify the parameters $ \Phi$.

Sometimes the notation gets confusing for folks who are used to more detailed models. This is quite general. For example, you may wonder where the background is. One can consider $f$ the "Total Model" including background and every other effect that determines the count besides the monitor. For example, a constant background can be written as $f({\xi}; {\Phi}) = f_1({\xi}; {\Phi}) + \theta_{\text{bg}}$.

In physics, uncertainties are almost always reported as Gaussian, so the result of a study could be that some subset of the parameters $\phi \subseteq \Phi$ have an uncertainty given by:
$$
\phi \sim \mathcal{N}(\hat \phi, \Sigma_\phi)
$$

The goal of the experiment is give precise description of the parameters of interest, which means reducing the determinant of $\Sigma_\phi$. 

There are many ways to do this, which I hope to describe in the future posts.