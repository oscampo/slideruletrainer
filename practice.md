<!--

author:   Oscar Campo

email:    oscampo@gmail.com

version:  0.0.1

language: sp

narrator: Spanish Latin American Female

comment:  Write a short abstract of your course, that
          might contain multiple lines and sentences.

-->




## Cálculo del Factor de Seguridad usando la Regla de Cálculo

Supongamos el siguiente caso:

$\sigma=30 \pm 8 kpsi$

$\sigma_y=40 \pm 6 kpsi$

$$z=\frac{-(\sigma_y-\sigma)}{\sqrt{SD_y^2+SD_{\sigma}^2}}=\frac{-10}{10}=-1$$

|
|          * *
|        *r     *
|     *rrr         *
| *rrrrrrr            *
+----------------------
-5                    5


Con ese valor de z se encuentra una pf=0.1587

El fs se puede calcular como:

$$fs=\frac{1+\sqrt{1-(1-z^2Cy^2)(1-z^2C\sigma^2)}}{1-z^2Cy^2}$$

$$z^2= 1$$
$$Cy^2=(6/40)^2=0.15^2=2.25E-2$$
$$C\sigma^2=(8/30)^2=0.267^2=7.1E-2$$
$$1-z^2Cy^2=1-0.0225=7.75E-2$$
$$1-z^2C\sigma^2=1-0.071=2.9E-2$$
$$\sqrt{1-(1-z^2Cy^2)(1-z^2C\sigma^2)}=\sqrt{1-2.25E-1}=\sqrt{0.775}=8.8E-1$$
