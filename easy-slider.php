<?php

/**
 * Easy Slider
 *
 * Add custom carousels to your site using Gutenberg Editor.
 *
 * @link              http://woofx.kaizenflow.xyz
 * @since             1.0.0
 * @package           Easy_Slider
 *
 * @wordpress-plugin
 * Plugin Name:       Easy Slider
 * Plugin URI:        https://github.com/woofx/easy-slider
 * Description:       An easy to use carousel block for Gutenberg editor.
 * Version:           1.0.0
 * Author:            WooFx
 * Author URI:        http://woofx.kaizenflow.xyz
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       easy-slider
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'EASY_SLIDER_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-easy-slider-activator.php
 */
function activate_easy_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-easy-slider-activator.php';
	Easy_Slider_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-easy-slider-deactivator.php
 */
function deactivate_easy_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-easy-slider-deactivator.php';
	Easy_Slider_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_easy_slider' );
register_deactivation_hook( __FILE__, 'deactivate_easy_slider' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-easy-slider.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_easy_slider() {

	$plugin = new Easy_Slider();
	$plugin->run();

}
run_easy_slider();
