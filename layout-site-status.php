<?php
/* Site Status - local, staging, live =============================== */
$SiteStatus='local';


/* Root Paths ====================================================== */
if ($SiteStatus=='local') {
  define('ROOT_PATH', '/Oakland-University/engineering-institute');
} else if ($SiteStatus=='staging') {
  define('ROOT_PATH', '/misc/oakland-university/engineering-institute');
} else if ($SiteStatus=='live') {
  define('ROOT_PATH', '');
}
?>