---
layout: post
title:  "What is my thesis about?"
date:   2026-01-10
categories: post
authors: Elliott Perryman
tag: post
published: Blog Post
---

I thought that I should write a description of what my thesis is. In short, it is about effective use of resources. For a game that hopes to explain the idea, check out [my game](neutrons.streamlit.app).

Unlike x-rays, neutron research facilities are quite sparse. There are maybe a handful of high flux sources in the world. Building one costs more than a billion (any currency) and operating one costs ~100 mil. euros a year. So, one hopes to extract as much information from these facilities as possible. The way these facilities work is that for the most part there are a series of individual experiments done by users of the facilities, which can last from a few hours to a few weeks. I focus on the longer experiments, which take weeks. I am working on the [Thales instrument](https://www.ill.eu/for-all-users/instruments/instruments-list/thales/description/instrument-layout).

So, some notation. Let's imagine that a user can control some parameters such as temperature, scattering angles, magnetic fields, pressure, etc. In return they measure a count of neutrons relative to the flux output of the reactor, as measured by a monitor. We group the controlled parameters into a single name $\vec{\xi}$. We call the observed count of neutrons $y$ and the monitor is called $M_1$. Then one has that there is some relationship $f$ between the controlled and observed parameters governed by parameters $\vec{\Phi}$. Then the model is:
$$
y \sim \text{Poisson}(M_1 * f(\vec{\xi}; \vec{\Phi}))
$$
Sometimes the notation gets confusing for folks who are used to more detailed models. This is quite general. For example, you may wonder where the background is. One can consider $f$ the "Total Model" including background and every other effect that determines the count besides the monitor. For example, a constant background can be written as $f(\vec{\xi}; \vec{\Phi}) = f_1(\vec{\xi}; \vec{\Phi}) + \theta_{\text{bg}}$.

Anyhow, back to the goal: identify $\vec \Phi$ as quickly as possible. One nuance is that not all of $\Phi$ is of interest, as there can be nuisance parameters, such as background. 

That's really it. There are many ways to go about this, but all of them have the same aim. As I make posts on specific methods, I will link them here.