# Next Gen App

&nbsp;

> [!NOTE]
> The project is an introduction to mastering HTML and Css and a continuation of smaller tasks I have undertaken.
> It is a simple implementation of the site, helping to practically apply the skills I have acquired.

&nbsp;

# I've learned:

- Appy practical knowledge of HTML structure and CSS styling.
- Utilized various HTML tags such as `<header>`, `<section>`, `<article>`, `<ul>`, `<li>`, etc.
- I have used basic CSS styles, text colouring, background colouring, element positioning and colour manipulation for SVG file
- I tried to use semantic tags as much as possible and avoided overuse of divs.


![screenshot](https://github.com/Rafk2022/PROJECT_html-and-css-basics/blob/master/assets/demo.png)

&nbsp;
 
## 🤔 Solutions provided in the project

- Manually changing the colour  from white to black of an SVG file or ... down below:
```
<?xml version="1.0" encoding="UTF-8"?>
<svg width="14px" height="27px" viewBox="0 0 14 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
    <title>facebook</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD-Copy-5" transform="translate(-1315.000000, -2102.000000)" fill-rule="nonzero" fill="#efefef">
            <g id="facebook" transform="translate(1315.000000, 2102.000000)">
                <g id="Artboard-1">
                    <g id="line-icons">
                        <g id="row-4-line-icons">
                            <path d="M9.06541176,0.684529412 C8.20070588,0.684529412 7.37058824,0.784588235 6.40211765,1.15147059 C4.43058824,1.91858824 3.42752941,3.71964706 3.42752941,6.52129412 L3.42752941,9.25623529 L0.660470588,9.25623529 L0.660470588,13.8255882 L3.42752941,13.8255882 L3.42752941,27 L9.06541176,27 L9.06541176,13.8255882 L12.9047059,13.8255882 L13.4235294,9.25623529 L9.06541176,9.25623529 L9.06541176,7.18835294 C9.06541176,6.55464706 9.13458824,6.08770588 9.30752941,5.82088235 C9.54964706,5.42064706 10.0338824,5.22052941 10.7948235,5.22052941 L13.3543529,5.22052941 L13.3543529,0.684529412 L9.06541176,0.684529412 Z" id="facebook_L"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
```
 &nbsp;
 
- Using the filter property in CSS styles
```
.filter-black {
  filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(327deg) brightness(0) contrast(104%);
  opacity: 0.9;
}
```
 &nbsp;


- I also encountered a problem with the positioning of the buttons relative to the text within a tab, and the horizontal alignment relative to each other , but I managed
<img width="420" alt="image" src="https://github.com/Rafk2022/PROJECT_html-and-css-basics/assets/105544593/1c9c60b9-43ef-45f4-b27b-5b633bc14a7b">

&nbsp;

- Reusable parts of the design that reduce time in building the site: the features and pricing sections 
<img width="655" alt="image" src="https://github.com/Rafk2022/PROJECT_html-and-css-basics/assets/105544593/bb7877dc-f8bc-4cc0-9796-1d56b630bf3a">

AND

<img width="601" alt="image" src="https://github.com/Rafk2022/PROJECT_html-and-css-basics/assets/105544593/651d1722-9cc3-4e66-8f08-4fa0ae15ca6b">


&nbsp;

## 💭 Conclusions for future projects

I would like to improve...

#### This is the first issue:
```
    <header class="container header">
      <nav class="container__section nav">
        <img src="./images/logo.svg" alt="logo" class="nav-logo" />

        <div class="content links">
          <ul class="nav__links">
            <li class="link"><a href="#theTeam">The Team</a></li>
            <li class="link"><a href="#features">Features</a></li>
            <li class="link"><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
      </nav>

      <article class="container__section hero">
        <div class="hero__title">
          <h1><br />Beautiful Free Nova<br />template</h1>
          <p>
            <br />A top notch premium quality<br />template for your next web
            <br />
            project
          </p>
          <button class="hero__button">Download FREE!</button>
        </div>
        <img src="./images/screen.png" alt="picture" class="hero-photo" />
      </article>
    </header>
```
- :hammer_and_wrench: Need to adjust the display of images on different devices, so-called responsiveness

#### This is the second issue:
```
        <div class="container__section pricing-cards">
          <div class="pricing__card">
            <h2 class="pricing__card-header">BASIC</h2>
            <h2 class="pricing__card-price">$15</h2>
            <p>per month</p>
            <ul class="pricing__card-description">
              <li>Up to 7 Projects</li>
              <li>2 Additional Developers</li>
            </ul>
            <button class="pricing__button">Get Started</button>
          </div>
          <div class="pricing__card middle-card">
            <h2 class="pricing__card-header">AGENCY</h2>
            <h2 class="pricing__card-price">$55</h2>
            <p>per month</p>
            <ul class="pricing__card-description">
              <li>Up to 25 Projects</li>
              <li>2 Additional Developers</li>
              <li>Unlimited Support</li>
            </ul>
            <button class="pricing__button">Get Started</button>
          </div>
          <div class="pricing__card">
            <h2 class="pricing__card-header">PRO</h2>
            <h2 class="pricing__card-price">$75</h2>
            <p>per month</p>
            <ul class="pricing__card-description">
              <li>Up to 25 Projects</li>
              <li>2 Additional Developers</li>
              <li>Unlimited Support</li>
              <li>1.5GB Disk Space</li>
            </ul>
            <button class="pricing__button">Get Started</button>
          </div>
        </div>
      </section
```
- :rage: The positioning of the buttons gave me the most problems, I found it difficult to make them horizontal and level with the content in the text

&nbsp;

> [!IMPORTANT]
> Crucial information necessary for users to succeed.
> Don't give up, relax and try to look for answers. Practice is the goal and not knowledge per se.
> Learn to seek support, avoid perfectionism as this only slows down progress.
> Enjoy your mistakes because you learn from them. Good luck with your learning

&nbsp;
 
## 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

&nbsp;
 
## 🔗 See also

Are you interested in **IT**? See podcasts. The podcast is in Polish, but nothing prevents you from going to Youtube and changing the language :+1: of the subtitles [Podcasts](https://devmentor.pl/podcast).

&nbsp;

## 🙋‍♂️ Feel free to contact me 
Write sth nice ;) Find me on... www.linkedin.com/in/rafal-krutul-5966aa299


&nbsp;

## 👏 Thanks / Special thanks / Credits
Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.
