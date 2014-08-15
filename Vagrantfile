# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provision :shell, :inline => "apt-get update --fix-missing"
  config.vm.provision :shell, :path => "provision/shell/provision_prereqs.sh"

  config.vm.provision "puppet" do |puppet|
  	puppet.manifests_path = "provision/puppet/manifests"
	puppet.manifest_file = "main.pp"
	puppet.module_path = ["provision/puppet/public_modules"]
  end
end


