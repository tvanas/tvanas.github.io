/* net.pretopia.DEVICE
 *
 * Copyright (c) 2010, Thijs van As <t.vanas@gmail.com>
 *
 * http://pretopia.net
 * http://pretopia.googlecode.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * DEVICE.js
 */

/* See DEVICE_example.html for example usage.
 *
 * net.pretopia.DEVICE is the globally accessible variable upon loading
 * this file.
 *
 * Currently, only a limited number of mobile devices is recognized.
 * 
 * The following properties can be accessed:
 *
 * net.pretopia.DEVICE.isMobile            boolean  | true on mobile devices
 * net.pretopia.DEVICE.isAppMode           boolean  | true on app-loaded sites (iOS)
 * net.pretopia.DEVICE.device.family       string   | device family (eg 'iPhone', 'iPad' or 'Desire')
 * net.pretopia.DEVICE.device.generation   string   | device generation ('4' on retina display iPhones/iPods
 * net.pretopia.OS.name                    string   | 'iOS' or 'Android'
 * net.pretopia.OS.version                 string   | version number of the OS
 */
var net;
if (!net) {
	net = {};
}
else if (typeof net != 'object') {
	throw new Error('net already exists and is not an object');
}

if (!net.pretopia) {
	net.pretopia = {};
}
else if (typeof net.pretopia != 'object') {
	throw new Error('net.pretopia already exists and is not an object');
}

if (net.pretopia.DEVICE) {
	throw new Error('net.pretopia.DEVICE already exists');
}

net.pretopia.DEVICE = {
	// public properties
	isMobile:   false,
	isAppMode:  false,
	device:     {
	              family: '',
	              generation: ''
	            },
	OS:         {
	              name: '',
	              version: ''
	            },

	// private properties
	_userAgent: navigator.userAgent,
	_devices:   [
	              {
	                regExpr: /iPhone/,
	                device: 'iPhone',
	                OS: 'iOS'
	              },
	              {
	                regExpr: /iPod/,
	                device: 'iPod',
	                OS: 'iOS'
	              },
	              {
	                regExpr: /iPad/,
	                device: 'iPad',
	                OS: 'iOS'
	              },
	              {
	                regExpr: /Android/,
	                device: '',
	                OS: 'Android'
	              }
	            ],
	
	_init: function() {
		for (var i = 0; i < this._devices.length; i++) {
			if (this._userAgent.match(this._devices[i].regExpr)) {
				this.device.family = this._devices[i].device;
				this.OS.name = this._devices[i].OS;
				switch (this.OS.name) {
					case 'iOS':
						this.isMobile = true;
						this.OS.version = this._userAgent.match(/OS\s(\S+)/)[1].replace(/_/g, '.');
						if (window.devicePixelRatio == 2 && 
						    (this.device.family == 'iPhone' || this.device.family == 'iPod')) {
							// retina display iPhone/iPod
							this.device.generation = '4';
						}
						break;
					case 'Android':
						this.isMobile = true;
						this.OS.version = this._userAgent.match(/Android\s(\S+);/)[1];
						this.device.family = this._userAgent.match(/(\S+\s?\S*)\sBuild/)[1];
						break;
					default:
						break;
				}
				break;
			}
		}
		this.isAppMode = navigator.standalone || (screen.height-document.documentElement.clientHeight < 40);
	}
};

net.pretopia.DEVICE._init();
