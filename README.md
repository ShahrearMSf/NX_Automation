<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ShahrearMSf/NX_Automation">
    <img src="https://ps.w.org/notificationx/assets/icon-256x256.gif?rev=2783824" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">NotificationX End-To-End Test Automation</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <!-- <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> 
    ·-->
    <a href="https://github.com/ShahrearMSf/NX_Automation/issues/new">Report A Bug</a>
    ·
    <a href="https://github.com/ShahrearMSf/NX_Automation/pulls">Contribute</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
<a href="https://notificationx.co">
    <img src="https://ps.w.org/notificationx/assets/icon-256x256.gif?rev=2783824" alt="Logo" width="80" height="80">
  </a>
</div>

Want to boost business trust & conversions? 97% of visitors hesitate to buy because of credibility. Instantly succeed with WooCommerce Sales Alert!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Node][Node.js]][Node-url]

* [![Playwright][Playwright.js]][Playwright-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Let's get started!!

### Prerequisites

The project requires Node.js version 22 LTS and npm.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/ShahrearMSf/NX_Automation.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create the `.env` file and provide necessary details
   ```sh
   cp .env.example .env
   ```
4. Update/Install playwright browsers.
   ```sh
   npx playwright install --with-deps
   ```
5. Create storage state files.
  ```sh
  mkdir -p playwright/.auth && cd playwright/.auth
  for role in admin editor author contributor subscriber; do echo "{}" > "$role.json"; done
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run the tests:

```sh
npx playwright test
```

_For more examples, please refer to the [Documentation](https://playwright.dev)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Begin Project
- [x] All shortcodes
- [ ] All gutenberg blocks
- [ ] All elementor widgets
    - [ ] BetterDocs Category Grid
    - [ ] BetterDocs Category Box

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/ShahrearMSf/BDS_Automation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ShahrearMSf/NX_Automation" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Abu Hurayra - [@hurayraiit](https://twitter.com/hurayraiit) - hurayraiit@gmail.com
<br>
Muammar Shahrear - [@Muammar Shahrear](https://www.linkedin.com/in/muammarshahrear/) - shahrearmuammar@gmail.com

Project Link: [https://github.com/ShahrearMSf/BDS_Automation](https://github.com/ShahrearMSf/NX_Automation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/main/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ShahrearMSf/BDS_Automation.svg?style=for-the-badge
[contributors-url]: https://github.com/ShahrearMSf/BDS_Automation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ShahrearMSf/BDS_Automation.svg?style=for-the-badge
[forks-url]: https://github.com/ShahrearMSf/BDS_Automation/network/members
[stars-shield]: https://img.shields.io/github/stars/ShahrearMSf/BDS_Automation.svg?style=for-the-badge
[stars-url]: https://github.com/ShahrearMSf/BDS_Automation/stargazers
[issues-shield]: https://img.shields.io/github/issues/ShahrearMSf/BDS_Automation.svg?style=for-the-badge
[issues-url]: https://github.com/ShahrearMSf/BDS_Automation/issues
[license-shield]: https://img.shields.io/github/license/ShahrearMSf/BDS_Automation.svg?style=for-the-badge
[license-url]: https://github.com/ShahrearMSf/BDS_Automation/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hurayraiit
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
