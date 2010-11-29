// Name: 300
// Description: Sony PRS-300 bootstrap code
//	Receives variables: bootLog, Core, loadAddons, loadCore
//		must call loadAddons, loadCore and Core.init at appropriate times
//
// History:
//	2010-09-02 kartu - Initial version

//-----------------------------------------------------------------------------------------------------
// Localization related code is model specific.  
// Replacing default  "choose language" menu & "choose keyboard" menu
//-----------------------------------------------------------------------------------------------------
var localize, localizeKeyboard, oldSetLocale, oldChangeKeyboardType, oldReadPreference, getRandomImage, wallpapers;

localize = function(Core) {
	try {
		var i, n, currentLang, settingsNode, langNode, languages, langNames, enter, 
			node, prspLanguages, langFile;
		currentLang = kbook.model.language;
		settingsNode = kbook.root.nodes[6].nodes[2];
		languages = ["en", "de", "fr", "nl", "ru"];
		prspLanguages = {
			en: "English.js",
			de: "Deutsch.js",
			fr: "French.js",
			nl: "English.js", // missing Dutch PRS+ translation
			ru: "Russian.js"
		};
		langNames = {
			en: "English",
			de: "Deutsch", 
			fr: "Français", 
			nl: "Nederlands", 
			ru: "Русский"
		};

		// Load core js		
		loadCore();
		
		// Load PRS+ strings
		langFile = Core.config.corePath + "lang/" + prspLanguages[currentLang];
		Core.lang.init(langFile);
		
		// FIXME localize date strings
		for (i = 0, n = languages.length; i < n; i++) {
			if (!Date.prototype.strings[languages[i]]) {
				Date.prototype.strings[languages[i]] = xs.newInstanceOf(Date.prototype.strings.en);
				Number.prototype.strings[languages[i]] = xs.newInstanceOf(Number.prototype.strings.en);
			}
		}

		// Custom language node
		langNode = Core.ui.createContainerNode({
			title: "fskin:/l/strings/STR_NODE_TITLE_LANG_SETTINGS".idToString(),
			icon: "LANGUAGE",
			comment: function() {
				return langNames[kbook.model.language];
			},
			parent: settingsNode
		});
		
		// Enter function for language children, changes locale and moves to parent
		// FIXME add "requires restart" popup message
		enter = function() {
			try {
				// Code from kbook.xsb
				Fskin.localize.setLocale({language: this.tag, region: "XX"});
				kbook.model.language = this.tag;
				kbook.model.clearTitleSorters();
				kbook.root.update(kbook.model);
				kbook.model.writeFilePreference();
				this.parent.gotoParent(kbook.model);
			} catch (e) {
				bootLog("changing language", e);
			}
		};
		
		// Create language node's children
		for (i = 0, n = languages.length; i < n; i++) {
			node = Core.ui.createContainerNode({
					title: langNames[languages[i]],
					icon: "CROSSED_BOX",
					parent: langNode
			});
			node.tag = languages[i];
			node.enter = enter;
			if (currentLang === languages[i]) {
				node.selected = true;
			}
			langNode.nodes.push(node);
		}
		
		// Replace "language" node with custom node
		settingsNode.nodes[5]= langNode;
		localizeKeyboard(Core);
		
		// TOOD hide menu customizer
		
		// self destruct :)
		localize = null;
	} catch (e) {
		bootLog("localize", e);
	}
};

// Init language related stuff once setLocale was called and strings were loaded
oldSetLocale = Fskin.localize.setLocale;
Fskin.localize.setLocale = function() {
	try {
		oldSetLocale.apply(this, arguments);
		// restore "old" set locale
		Fskin.localize.setLocale = oldSetLocale;
		
		localize(Core);
	} catch (e) {
		bootLog("in overriden setLocale", e);
	}
};

// Keyboard related stuff
localizeKeyboard = function (Core) {
	var i, n, node, advancedSettingsNode, keyboardNode, keyboardTypes, keyboardNames, enter;
	keyboardTypes = [
			"French-France", 
			"German-Germany", 
			"Georgian", 
			"Dutch-Netherlands", 
			"Russian",
			"English-UK", 
			"English-US" 
	];
	keyboardNames = {
		"French-France": "Français",
		"German-Germany": "Deutsch",
		"Georgian": "ქართული",
		"Dutch-Netherlands": "Nederlands",
		"Russian": "Русская",
		"English-UK": "United Kingdom",
		"English-US": "United States"
	};
	advancedSettingsNode = kbook.root.nodes[6].nodes[2].nodes[6];

	
	// Enter function for keyboard children, changes keyboard and moves to parent
	enter = function() {
		try {
			kbook.model.keyboard = this.tag;
			kbook.model.writeFilePreference();
			this.parent.gotoParent(kbook.model);			
		} catch (e) {
			bootLog("changing keyboard", e);
		}
	};	
	
	// Custom language node
	keyboardNode = Core.ui.createContainerNode({
		title: "fskin:/l/strings/STR_UI_NODE_TITLE_KEYBOARD".idToString(),
		icon: "KEYBOARD",
		comment: function() {
			return keyboardNames[kbook.model.keyboard];
		},
		parent: advancedSettingsNode
	});
	
	// Create language node's children
	for (i = 0, n = keyboardTypes.length; i < n; i++) {
		node = Core.ui.createContainerNode({
				title: keyboardNames[keyboardTypes[i]],
				icon: "CROSSED_BOX",
				parent: keyboardNode
		});
		node.tag = keyboardTypes[i];
		node.enter = enter;
		keyboardNode.nodes.push(node);
	}	
	
	advancedSettingsNode.nodes[2] = keyboardNode;

	// self destruct :)	
	localizeKeyboard = null;
};

oldChangeKeyboardType = Fskin.kbookKeyboard.keyboardLayout.changeKeyboardType;
Fskin.kbookKeyboard.keyboardLayout.changeKeyboardType = function (langType) {
	var url, path, keyboardPaths;
	try {
		keyboardPaths = {
			"English-US": "KeyboardLayout103P.xml",
			"English-UK": "KeyboardLayout166.xml",
			"French-France": "KeyboardLayout189.xml",
			"German-Germany": "KeyboardLayout129.xml",
			"Dutch-Netherlands": "KeyboardLayout143.xml",
			"Russian": "languages/KeyboardLayoutRussian.xml"
			// FIXME
			//"Georgian": "languages/KeyboardLayoutGeorgian.xml"
		};
		path = System.applyEnvironment('[keyboardLayoutPath]') ;
		bootLog("changeKeyboardType " + langType + " path is " + path);
		url = 'file://' + path + keyboardPaths[langType] ;
		this.layoutData = null;
		this.setURI(url);
	} catch (e) {
		// call the default version
		oldChangeKeyboardType.apply(this, arguments);
		bootLog("changeKeyboardType " + langType, e);
	}
};

// Init core here
oldReadPreference = kbook.model.readPreference;
kbook.model.readPreference = function() {
	try {
		oldReadPreference.apply(this, arguments);
		// restore "old" readPreference
		kbook.model.readPreference = oldReadPreference;
		
		loadAddons();
		Core.init();

		// Fix home icons of "All Notes" &  "Collections"
		Core.ui.nodes.collections.homekind = Core.config.compat.NodeKinds.HOME_COLLECTIONS;
		Core.ui.nodes.notes.homekind = Core.config.compat.NodeKinds.HOME_NOTES;
		
		// Fix large icons in home menu
		// bottom right icon
		if (kbook.root.nodes[2].hasOwnProperty("homelargekind")) {
			Fskin.kbookMenuHome.homeMenu.vertical.items[3].kind = kbook.root.nodes[2].homelargekind;
		}
		// bottom left icon
		if (kbook.root.nodes[3].hasOwnProperty("homelargekind")) {
			Fskin.kbookMenuHome.homeMenu.vertical.items[2].kind = kbook.root.nodes[3].homelargekind;
		}
	} catch (e) {
		bootLog("in overriden readPreference " + e);
	}
};

// FIXME test
var oldCallback = FskCache._diskSource.synchronizeCallback;
FskCache._diskSource.synchronizeCallback = function() {
	try {
		if (Core && Core.config && Core.config.disableCardScan) {
			this.target.synchronizedSource();
			this.target.synchronizeDone();
			this.stack.pop();
		} else {
			oldCallback.apply(this, arguments);
		}
		//bootLog("Finished syncronizing: " +  this.stack.pop().path);
	} catch (e) {
		bootLog("Error in callback: " + e);
		oldCallback.apply(this, arguments);
	}
};

getRandomImage = function(folder) {
	try {
		var  path, idx;
		if (!wallpapers) {
			wallpapers = Core.io.listFiles(folder, ".jpg", ".jpeg", ".gif", ".png"); 
		}
		while (wallpapers.length > 0) {
			idx = Math.floor(Math.random() * wallpapers.length);
			path = wallpapers[idx];
			if (Core.media.isImage(path)) {
				return folder + path;
			} else {
				wallpapers.splice(idx, 1);
			}
		}
	} catch (e) {
		bootLog("error in random image " + e);
	}
};

standbyImage.draw = function() {
	var window, path, bitmap, temp, port, x, y, bounds, ratio, width, height, ditheredBitmap, color;
	window = this.root.window;

	path = getRandomImage(System.applyEnvironment("[prspPublicPath]wallpaper/"));
	
	if (FileSystem.getFileInfo(path)) {
		try {
			bitmap = new Bitmap(path);
			temp = new Bitmap(this.width, this.height, 12);
			port = new Port(temp);
			port.setPenColor(Color.white);
			port.fillRectangle(0, 0, this.width, this.height);
			x = 0;
			y = 0;
			bounds = bitmap.getBounds();
			ratio = (bounds.height > bounds.width)?this.height / bounds.height:this.width / bounds.width;
			width = Math.floor(bounds.width * ratio);
			height = Math.floor(bounds.height * ratio);
			if (height > width) {
				x = Math.floor(this.width - width) / 2;
			} else {
				y = Math.floor(this.height - height) / 2;
			}
			bitmap.draw(port, x, y, width, height);
			bitmap.close();
			ditheredBitmap = temp.dither(true);
			port.close();
			temp.close();
			window.drawBitmap(ditheredBitmap, this.x, this.y, this.width, this.height);
			ditheredBitmap.close();
		} catch (e) {
			bootLog("Exception in standby image draw " + e);
		}
	} else {
		color = window.getPenColor();
		window.setPenColor(this.color);
		window.fillRectangle(this);
		window.setPenColor(color);
	}
};