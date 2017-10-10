<?php

/** 
 * @file
 * Implements the squeeze settings for the squeeze modules.
 * 
 * Callback and form for the squeeze settings that site administrators would
 * fill out when configuring the squeeze functionality. 
 */


/**
 * Form builder. Configure squeeze behavior.
 * 
 * @ingroup forms
 * @see system_settings_form().
 */
function squeeze_admin_settings() {
  //enable the squeeze functionality
  //first retrieve the current setting so admin knows what it is
  $current = variable_get('enable_squeeze_for', 'ERROR: Could not retrieve enable_squeeze_for from variables table');
  switch ($current) {
    case 0:
      $current='None';
      break;
    case 1:
      $current='Every page on the siet';
      break;
    case 2:
      $current='Individial nodes';
  }
      
  $form['enable_squeeze'] = array(
    '#type' => 'select',
    '#title' => t('Enable squeeze page functionality'),
    '#options' => array(t('None'),t('Every page on the site'),t('Individual nodes')),
    '#defaul_value' => variable_get('enable_squeeze_for', 'None'), //this doesn't seem to do anything. Not sure if default value works with 'select' type.
    '#description' => t('Please select which pages should have a squeeze page. Current squeeze setting is: @current', array('@current'=>$current)),
  );
  
  $form['#submit'][] = 'squeeze_admin_settings_submit';
  return system_settings_form($form);
}

/**
 * Process squeeze settings submission.
 */
function squeeze_admin_settings_submit($form, $form_state) {
  // Grab the value and for now print it to log
  $value = $form_state['values']['enable_squeeze']; 
  variable_set('enable_squeeze_for', $value);
  watchdog("Squeeze", 'Changed squeeze enable setting to: %value', array('%value'=>$value));
    
  
}
