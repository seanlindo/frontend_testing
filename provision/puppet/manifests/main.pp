class { "nodejs": version=> "stable" }
	-> package {'phantomjs': ensure => present, provider => npm }
	-> package {'casperjs': ensure => present, provider => npm }

package { "libfontconfig1": ensure => present }
