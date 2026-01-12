# WordPress Installation

A complete WordPress installation running on XAMPP local development environment.

## 📋 Overview

This is a WordPress content management system (CMS) installation configured for local development. WordPress is a free and open-source CMS written in PHP and paired with a MySQL or MariaDB database.

## 🚀 Features

- **Content Management**: Create and manage posts, pages, and media
- **Theme Support**: Customizable themes for different designs
- **Plugin System**: Extend functionality with thousands of available plugins
- **User Management**: Multiple user roles and permissions
- **SEO Friendly**: Built-in SEO capabilities and optimization options
- **Responsive Design**: Mobile-friendly interface and themes

## 📦 Prerequisites

- **XAMPP** (Apache + MySQL + PHP)
  - PHP 7.4 or higher
  - MySQL 5.7 or higher / MariaDB 10.3 or higher
- **Web Browser** (Chrome, Firefox, Safari, Edge)

## 🔧 Installation

### 1. XAMPP Setup

1. Install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)
2. Start Apache and MySQL services from XAMPP Control Panel

### 2. Database Configuration

1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Create a new database for WordPress
3. Note down the database name, username, and password

### 3. WordPress Configuration

1. Clone this repository to your XAMPP htdocs folder:
   ```bash
   git clone <repository-url> C:\xampp\htdocs\wordpress
   ```

2. Navigate to `http://localhost/wordpress` in your browser

3. If `wp-config.php` doesn't exist, WordPress will guide you through the setup:
   - Enter your database details
   - Set up admin username and password
   - Configure site title and description

### 4. Existing Installation

If `wp-config.php` already exists, update the database credentials:

```php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASSWORD', 'your_database_password');
define('DB_HOST', 'localhost');
```

## 🎯 Usage

### Accessing WordPress

- **Frontend**: `http://localhost/wordpress`
- **Admin Dashboard**: `http://localhost/wordpress/wp-admin`

### Admin Login

Use the credentials you set up during installation to access the admin dashboard.

### Common Tasks

- **Create Posts**: Dashboard → Posts → Add New
- **Create Pages**: Dashboard → Pages → Add New
- **Install Themes**: Dashboard → Appearance → Themes → Add New
- **Install Plugins**: Dashboard → Plugins → Add New
- **Manage Users**: Dashboard → Users

## 📁 Project Structure

```
wordpress/
├── wp-admin/           # WordPress admin panel files
├── wp-content/         # Themes, plugins, and uploads
│   ├── themes/         # WordPress themes
│   ├── plugins/        # WordPress plugins
│   └── uploads/        # Media uploads
├── wp-includes/        # Core WordPress files
├── wp-config.php       # WordPress configuration
├── index.php           # Main entry point
└── README.md           # This file
```

## ⚙️ Configuration

### Important Files

- **wp-config.php**: Database and WordPress configuration
- **.htaccess**: URL rewriting and security rules
- **wp-content/**: Your custom themes, plugins, and uploads

### Security Recommendations

1. **Change Default Prefix**: Use a custom database table prefix instead of `wp_`
2. **Strong Passwords**: Use strong passwords for admin accounts
3. **Regular Updates**: Keep WordPress, themes, and plugins updated
4. **Backup Regularly**: Backup your database and files regularly
5. **SSL Certificate**: Use HTTPS in production environments

### Performance Optimization

- Enable caching plugins (e.g., WP Super Cache, W3 Total Cache)
- Optimize images before uploading
- Use a CDN for static assets
- Minimize plugins to essential ones only

## 🛠️ Development

### Local Development Workflow

1. Make changes to themes/plugins in `wp-content/`
2. Test changes locally at `http://localhost/wordpress`
3. Commit changes to version control
4. Deploy to staging/production environments

### Debugging

Enable debugging in `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Debug logs will be saved to `wp-content/debug.log`

## 📝 Version Control

### Files to Ignore

The `.gitignore` file excludes:
- `wp-config.php` (contains sensitive credentials)
- `wp-content/uploads/` (media files)
- Cache and temporary files
- System files

### Sensitive Data

**Never commit**:
- Database credentials
- API keys and secrets
- User uploaded content (unless necessary)

## 🚢 Deployment

### Production Deployment

1. Export database from phpMyAdmin
2. Upload files to production server via FTP/SSH
3. Import database on production server
4. Update `wp-config.php` with production database credentials
5. Update site URL in database or via wp-cli:
   ```bash
   wp search-replace 'http://localhost/wordpress' 'https://yourdomain.com'
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

WordPress is released under the GPL v2 (or later) license. See [license.txt](license.txt) for details.

## 🔗 Resources

- [WordPress Official Documentation](https://wordpress.org/support/)
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress Developer Resources](https://developer.wordpress.org/)
- [XAMPP Documentation](https://www.apachefriends.org/docs/)


**Made by nisxzn with ❤️ using WordPress**
