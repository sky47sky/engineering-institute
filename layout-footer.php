</main><!--sitewrap-->






<div class="color-border" data-in-view="once">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>





<footer id="footer" data-in-view="once">
  <div class="sw">
    <div class="footer__top">
      <a href="<?php echo ROOT_PATH; ?>/" class="logo">
        <img class="white" src="<?php echo ROOT_PATH; ?>/img/logo/Color logo - no background.svg" alt="Engineering Institute">
      </a>
    </div>
    <div class="footer__columns">
      <div class="column column--1">
        <ul>
          <li>
            <p>Address</p>
            <a href="mailto:email@email.com" class="email"><span>email@email.com</span></a>
          </li>
        </ul>
        <div class="socials">
          <a href="" target="_blank" class="fb"></a>
          <a href="" target="_blank" class="ig"></a>
        </div>
      </div>
      <div class="column column--2">
        <ul class="menu">
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
        </ul>
      </div>
      <div class="column column--3">
        <ul class="menu">
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
        </ul>
      </div>
      <div class="column column--4">
        <a href="" class="cta">Get Started</a>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="sw">
      <p>Copyright &copy; <?php date_default_timezone_set('America/Detroit'); echo date("Y"); ?> Engineering Institute</p>
    </div>
  </div>
</footer>




<!-- back to top button -->
<a href="#" class="back-to-top" aria-label="Back to Top" title="Back to Top"></a>



</div><!--off-canvas-wrapper-->





<script src="<?php echo ROOT_PATH; ?>/js/vendor/jquery/jquery.min.js"></script>
<script src="<?php echo ROOT_PATH; ?>/js/vendor/foundation/foundation.min.js"></script>
<script src="<?php echo ROOT_PATH; ?>/js/jquery.validate.min.js"></script>
<script src="<?php echo ROOT_PATH; ?>/js/dist/app.js"></script>










<!-- save location after form submit -->
<?php
$scrollx = 0;
$scrolly = 0;
if(!empty($_REQUEST['scrollx'])) {
$scrollx = htmlentities($_REQUEST['scrollx'], ENT_QUOTES);
}
if(!empty($_REQUEST['scrolly'])) {
$scrolly = htmlentities($_REQUEST['scrolly'], ENT_QUOTES);
}
?>
<script>
window.scrollTo(<?= "$scrollx" ?>, <?= "$scrolly" ?>);
</script>
