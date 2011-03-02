// Name: 350 config
// Description: Sony PRS-350 model specific configuration
//
// History:
//	2011-02-07 kartu - Initial version, based on 650
//	2011-02-08 kartu - "More" is now by default attached to the root folder
//	2011-02-27 kartu - Periodicals node no longer "unmovable", replaced with "Browse Folders" by default
//	2011-02-28 kartu -  ALL: Added 
//		Calculator by Mark Nord
//		Chess by Ben Chenoweth / Stefano Gioffre
//		Five in a Row by Ben Chenoweth
//		Five Balls by Clemenseken
//		Free Cell by Ben Chenoweth
//		Mahjong by Clemenseken
//		Sudoku by Obelix

return {
	// Menu icon indices 
	NodeKinds: {
		EMPTY: 1000,
		BOOK: 17, // 2
		FILE: 2,
		AUDIO: 3,
		PICTURE: 18,  // 4 
		SETTINGS: 5,
		AUTHOR: 6,
		CONTINUE: 7,
		PREVIOUS_PAGE: 8,
		NEXT_PAGE: 9,
		BOOKMARK: 10,
		LIST: 11,
		BOOK_HISTORY: 11,
		CLOCK: 12,
		PAUSE: 13,
		PLAY: 14,
		INFO: 15,
		LOCK: 16,
		BOOKS: 17,
		PICTURES: 18,
		CROSSED_BOX: 19,
		DATE: 22,
		ABOUT: 25,
		BACK: 26,
		ABC: 27,
		DATETIME: 28,
		DB: 29,
		SHUTDOWN: 31,
		TEXT_SCALE: 39,
		KEYBOARD: 51,
		INTERNAL_MEM: 54,
		MS: 55,
		SD: 56,
		LANGUAGE: 57,
		TIMEZONE: 62,
		HOME: 26, // missing
		
		UNCHECKED: 85,
		CHECKED: 86,
		
		FOLDER: 87,
		GAME: 88,
		
		DEFAULT: 112,
		
		// big icons shonw in home menu
		LARGE_BOOK_HISTORY: 2,
		LARGE_FOLDER: 4,
		LARGE_MORE: 5,		
		
		// At least 600 and 900 have more than one type of icons
		getIcon: function (strKind, type) {
			var kind;
			if (type === "home") {
				kind = this["HOME_" + strKind];
				if (typeof kind === "undefined") {
					kind = this.HOME_FOLDER;
				}
			} else if (type === "homeLarge") {
				// if it is undefined, leave it as is
				kind = this["LARGE_" + strKind];
			} else {
				kind = this[strKind];
				if (typeof kind === "undefined") {
					kind = this.FOLDER;
				}
			}
			
			return kind;
		}
	},
	
	// PRS+ abstract key code to actual key code, model specific
	keyCodes: {
		volume_down: "kVolumeMinus", 
		volume_down_h: "kVolumeMinus-hold", 
		volume_up: "kVolumePlus",
		volume_up_h: "kVolumePlus-hold",
		home: "kHome",
		home_h: "kHome-hold",
		size: "kSize",
		size_h: "kSize-hold",
		menu: "kOption",
		menu_h: "kOption-hold"
	},
	// does device have numeric keys
	hasNumericButtons: false,
	// are there volume keys
	hasVolumeButtons: false,
	// are there paging buttons
	hasPagingButtons: false,
	// are there joypad buttons
	hasJoypadButtons: false,
	// are there "other" buttons
	hasOtherButtons: true,
	// Are there SD/MS card slots
	hasCardSlots: false,
	
	// Where to find which node, relative to kbook.root
	standardMenuLayout: {
		"continue": [0, 0],
		books: [0, 1],
		periodicals: [0, 2],
		collections: [0, 3],
		notes: [0, 4],
		//newdelivery: [0, 5],
		//textMemo: [2, 3],
		//handwriting: [2, 2],
		//audio: [2, 0],
		//pictures: [2, 1],
		apps: [1],
		settings: [2]
	},
	
	// Root node for menu customizer
	rootNode: kbook.root.nodes[0],
	
	// Menu configuration
	prspMenu: {
		// Container nodes
		customContainers: [
			// TODO add games / calc
			//{ name: "gamesAndUtils", title: "NODE_GAMES_AND_UTILS", icon: "GAME"},
			{ name: "more", title: "NODE_MORE", icon: "MORE", parent: "root"}
		],
		// Nodes assigned to certain nodes
		customNodes: [
			{ name: "PRSPSettings", parent: "settings", position: 0},
			{ name: "collections", parent: "more" },
			{ name: "periodicals", parent: "more" },
			{ name: "notes", parent: "more" },
			{ name: "Calculator", parent: "more" },	
			{ name: "Chess", parent: "more" },
			{ name: "FiveBalls", parent: "more" },	
			{ name: "FiveRow", parent: "more" },	
			{ name: "FreeCell", parent: "more" },
			{ name: "Mahjong", parent: "more" },
			{ name: "Sudoku", parent: "more" }		
		],
		movableNodes: [0, 0, 1, 1, 1],
		defaultLayout: [
			{ name: "continue"},
			{ name: "books"},
			{ name: "BrowseFolders"},
			{ name: "BookHistory"},
			{ name: "more" }
		]		
	},

	media: {
		// types to be used to determine media type using "xs.isInstanceOf"
		types: [ FskCache.text  , FskCache.image, FskCache.notepad],
		// what kind it is, supported are: "book", "picture", "note", "audio"
		kinds: [ "book", "picture", "note"],
		// node prototypes to use when creating media nodes
		prototypes: [ FskCache.tree.bookNode, kbook.root.children.applicationRoot.children.pictures.prototype, FskCache.tree.notepadFreehandNode]
	}, 

	
	compareStrings: function(a, b) {
		if (a === b) {
			return 0;
		}
		return a > b ? 1 : -1;
	}
};