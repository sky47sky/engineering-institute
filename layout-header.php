<div class="off-canvas-wrapper">


<div id="bodyintro">
  <a href="#sitewrap" class="screen-reader-text">Skip to main content</a>
  <a href="#sr-first-menu-item" class="screen-reader-text">Skip to navigation</a>
</div>





<div id="header-container">

  <div class="header-top">
    <div class="sw">
      <ul class="header-top__right">
        <li class="bull">
          <a <?php if (PAGE_LOCATION == 'blog') { ?>class="current-page" <?php } ?>href="">Blog</a>
        </li>
        <li class="bull">
          <a <?php if (PAGE_LOCATION == 'virtual-tours') { ?>class="current-page" <?php } ?>href="/virtual-tours.php">Testimonials</a>
        </li>
        <li class="bull">
          <a <?php if (PAGE_LOCATION == 'virtual-tours') { ?>class="current-page" <?php } ?>href="/virtual-tours.php">About</a>
        </li>
        <li>
          <a <?php if (PAGE_LOCATION == 'contact-us') { ?>class="current-page" <?php } ?>href="/contact-us.php">Contact</a>
        </li>
        <!--
        <li class="socials">
          <a class="fb" href="" target="_blank"></a>
          <a class="ig" href="" target="_blank"></a>
        </li>
        -->
      </ul>
    </div>
  </div>

  <header id="header">
    <div class="hfsw">

      <a href="<?php echo ROOT_PATH; ?>/" class="logo">
        <img class="white" src="<?php echo ROOT_PATH; ?>/img/logo/Color logo - no background.svg" alt="Engineering Institute">
        <img class="black" src="<?php echo ROOT_PATH; ?>/img/logo/Black logo - no background.svg" alt="">
      </a>

      <div id="off-canvas-wrap" class="off-canvas off-canvas-main-menu in-canvas-for-large position-right" data-off-canvas data-transition="overlap" data-transition-time=".4s">
        <nav class="header-menu" role="navigation">
          <ul id="menu" class="vertical large-horizontal menu menu--main" data-responsive-menu="drilldown large-dropdown" data-hover-delay="100" data-closing-time="200">
            <li <?php if ( (defined('PAGE_LOCATION')) && (PAGE_LOCATION == 'learn') ) { ?>class="current-page"<?php } ?>>
              <a class="cursor-default"><span>Home</span></a>
            </li>
            <li <?php if ( (defined('PAGE_LOCATION')) && (PAGE_LOCATION == 'learn') ) { ?>class="current-page"<?php } ?>>
              <a href=""><span>What We Offer</span></a>
            </li>
            <li <?php if ( (defined('PAGE_LOCATION')) && (PAGE_LOCATION == 'about') ) { ?>class="current-page"<?php } ?>>
              <a href=""><span>Who Benefits?</span></a>
            </li>
            <li <?php if ( (defined('PAGE_LOCATION')) && (PAGE_LOCATION == 'about') ) { ?>class="current-page"<?php } ?>>
              <a href=""><span>Research Team</span></a>
            </li>
            <li class="cta-button mh">
              <a href="">Contact Us</a>
            </li>
            <li class="hum">
              <a href="">Contact Us</a>
            </li>
            <li class="hum">
              <a>Support</a>
              <ul class="menu vertical nested">
                <li class="external">
                  <a href="https://cpaperless.zendesk.com/hc/en-us" target="_blank"><span>Help Center</span></a>
                </li>
                <li class="external">
                  <a href="https://safesend.statuspage.io/" target="_blank"><span>Status</span></a>
                </li>
              </ul>
            </li>
            <li class="navindicator navindicator--blue mh" style="background-image: url(img/dog-blue-32.png)"></li>
          </ul>
        </nav>
      </div><!--off-canvas-wrap-->

      <button class="hamburger-icon hide-for-large" data-toggle="off-canvas-wrap" aria-expanded="false" aria-controls="off-canvas-wrap">
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </button>

    </div>
  </header>
</div><!--header-container-->






<main class="sitewrap" id="sitewrap">