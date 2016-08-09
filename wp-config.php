<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'maxiroa_wp');

/** MySQL database username */
define('DB_USER', 'maxiroa_itris1');

/** MySQL database password */
define('DB_PASSWORD', 'ITRIS0101');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'S<HSTVj,hcxWOI74+h+u)-=v9d_EB1>BLZ|Y=| ;eg4zi^-f2$vlh(i0!!zl{sVl');
define('SECURE_AUTH_KEY',  '8y%|?(kf:FhO8ukRgXlwXt2{UE-TUB4B.6!Fbf~MOT_YMkfm<[8JA|@$h>|7{{<s');
define('LOGGED_IN_KEY',    'jVfp!`:AH]P(FiLZvg=@:V.2E=-Wq4<w>ix+H&GR<T~Q1:BHajrSHYZdc14K9w6r');
define('NONCE_KEY',        'bprNBaasUO<zstm)DGYa4AR7R,Szmecw1Mqbj)x!~?Wqc7#Zt{j|=Z1w%qpOlQO>');
define('AUTH_SALT',        '/;q&4TIAiv a?Gel$Tt`1^BDQbB$pFpev=Hr[gWzc*i%F+Vl$4#O1Q64kD2{Agr^');
define('SECURE_AUTH_SALT', 'ff(!pAU2.9-G%iv$@nyeEYJk fYU-M+6)UM*zOgD`L{-k-:L5eHUx`@$U(>MdKx`');
define('LOGGED_IN_SALT',   ',PbSf/l[tX_`<xRRj7=4Z;j^1o@~Gkj1f$JJL.@g54!(WdQ&S7SKj-&rhYYOdH?S');
define('NONCE_SALT',       '1FyU=`y;:!gM+WyUE:#7;~g LXH5n]PjI52VG^%(S[1 X]?~|lm8Y @}>t%ER+6 ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'es_ES');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
