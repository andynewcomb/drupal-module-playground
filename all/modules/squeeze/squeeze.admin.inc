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
  $current = variable_get('squeeze_enable', 'ERROR: Could not retrieve squeeze_enable from variables table');
  switch ($current) {
    case 0:
      $current='Off';
      break;
    case 1:
      $current='Timer';
      break;
    case 2:
      $current='Clicks';
    case 3:
      $current='Individial nodes';
  }
      
  $form['squeeze_enable'] = array(
    '#type' => 'select',
    '#title' => t('Enable squeeze page functionality'),
    '#options' => array(t('Off'),t('Timer'),t('Clicks'),t('Individual nodes')),
    '#default_value' => variable_get('squeeze_enable', 0), //must match form element name
    '#description' => t('Please enable the type of squeeze functionality. Current squeeze setting is: @current', array('@current'=>$current)),
  );
  
  $form['squeeze_time_props'] = array(
    '#type' => 'fieldset',
    '#access' => user_access('administer nodes'),
    '#title' => t('Properties for your timer squeeze functionality'),
    '#collapsible'=>FALSE,
  );
  $form['squeeze_time_props']['squeeze_timer'] = array(
    '#type' => 'textfield',
    '#title' => t('Time in seconds'),
    '#description' => t('Enter the delay in seconds before registration is required'),
    '#default_value' => variable_get('squeeze_timer','0'),
    '#maxlength' => 3,
    '#required' => TRUE,
    '#size' => 3,
  );
  $form['squeeze_clicks_props'] = array(
    '#type' => 'fieldset',
    '#access' => user_access('administer nodes'),
    '#title' => t('Properties for your timer squeeze functionality'),
    '#collapsible'=>FALSE,
  );
  $form['squeeze_clicks_props']['squeeze_clicks'] = array(
    '#type' => 'textfield',
    '#title' => t('Number of clicks'),
    '#description' => t('Enter the number of clicks allowed by user until registration is required'),
    '#default_value' => variable_get('squeeze_clicks','1'),
    '#maxlength' => 2,
    '#required' => TRUE,
    '#size' => 2,
  );
  
  $form['#submit'][] = 'squeeze_admin_settings_submit';
  return system_settings_form($form);
}

/**
 * Process squeeze settings submission.
 */
function squeeze_admin_settings_submit($form, $form_state) {
  // Grab the values store them in the 'variable DB' database (and print to log)
  $squeeze_enable_value = $form_state['values']['squeeze_enable']; 
  variable_set('enable_squeeze_for', $squeeze_enable_value);
  watchdog("Squeeze", 'Changed squeeze enable setting to: %value', array('%value'=>$squeeze_enable_value));
    
  $squeeze_timer_value = $form_state['values']['squeeze_timer']; 
  variable_set('squeeze_timer', $squeeze_timer_value);
  watchdog("Squeeze", 'Changed squeeze timer setting to: %value', array('%value'=>$squeeze_timer_value));
  
  $squeeze_clicks_value = $form_state['values']['squeeze_timer']; 
  variable_set('squeeze_timer', $squeeze_clicks_value);
  watchdog("Squeeze", 'Changed squeeze timer setting to: %value', array('%value'=>$squeeze_clicks_value));
  
  
  
    
  
}
