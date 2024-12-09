#!/bin/bash

# Update and upgrade system packages
sudo apt-get update -y
sudo apt-get upgrade -y

# Install Apache
sudo apt-get install apache2 -y

# Enable firewall and allow Apache traffic
sudo ufw enable
sudo ufw allow 'Apache Full'
sudo ufw allow ssh

# Enable firewall service
sudo systemctl enable firewalld

# Clone the GitHub repository
git clone https://github.com/menakajanith/menakajanith.git
sudo mv test /var/www

# Configure Apache
sudo bash -c 'cat <<EOF > /etc/apache2/sites-available/menakajanith.cloud.conf
<VirtualHost *:80>
    ServerName www.menakajanith.cloud
    ServerAdmin contact@menakajanith.cloud
    DocumentRoot /var/www/menakajanith
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOF'

# Enable the site and disable default site
sudo a2ensite menakajanith.cloud.conf
sudo a2dissite 000-default.conf

# Reload Apache
sudo systemctl reload apache2

# Install Certbot and enable SSL
sudo apt-get install certbot python3-certbot-apache -y
sudo certbot --apache

# Final message
echo "VPS setup complete!"
