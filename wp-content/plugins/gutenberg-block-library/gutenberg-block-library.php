<?php
/**
 * Plugin Name: Gutenberg Block Library
 * Description: Custom Gutenberg blocks for learning.
 * Version: 1.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function gbl_register_blocks() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'gbl_register_blocks' );
