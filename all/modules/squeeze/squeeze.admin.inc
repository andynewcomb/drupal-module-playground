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
  $form['enable_squeeze'] = array(
    '#type' => 'select',
    '#title' => t('Enable squeeze page functionality'),
    '#options' => array(t('Off'),t('Entire Site'),t('Individual Nodes')),
    '#defaul_value' => variable_get('enable_squeeze', 'Off'),
    '#description' => t('Please select how you would like to enable the squeeze page'),
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
  variable_set('enable_squeeze', $value);
  watchdog("Squeeze", 'Changed squeeze enable setting to: %value', array('%value'=>$value));
    
  
}
