<?php

/**
 * page callback when there are arguments
 */
function menufun_helloargs($first='',$last='',$first2='',$last2='') {
  return t('Hello @first @last! I know you have the hots for @first2 @last2', array('@first'=>$first, '@last'=>$last,'@first2'=>$first2, '@last2'=>$last2));
}

/**
 * page callback for navigation link
 */
function menufunnav_hello() {
  return t('Hello from a link in a menu');
}
