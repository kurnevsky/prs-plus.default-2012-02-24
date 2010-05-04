// Language: French
// Description: Localization file
// Translator:  VICTORSJG
//
// History:
//	2010-05-04 Initial version by VICTORSJG

var FUNC_X_SOMETHING = function (n, s) {
	if (n > 1) {
		return n + " " + s[0];
	}
	if (n == 1) {
		return s[1];
	}
	return s[2];
};

var FUNC_X_BOOKS = function (n) {
	return FUNC_X_SOMETHING(n, ["livres", "1 livre", "Aucun livre"]);
};

var FUNC_X_SETTINGS = function (n) {
	return FUNC_X_SOMETHING(n, ["param" + String.fromCharCode(232) + "tres", "1 param" + String.fromCharCode(232) + "tres", "Aucun param" + String.fromCharCode(232) + "tres"]);
};

var FUNC_X_ITEMS = function (n) {
	return FUNC_X_SOMETHING(n, [String.fromCharCode(233) + "l" + String.fromCharCode(233) + "ments", "1" + String.fromCharCode(233) + "l" + String.fromCharCode(233) + "ment", "Aucun param" + String.fromCharCode(232) + "tres"]);
};

var FUNC_X_PAGES = function (n) {
	return FUNC_X_SOMETHING(n, ["pages", "1 page", "Pas de page"]);
};

var FUNC_X_PICTURES = function (n) {
	return FUNC_X_SOMETHING(n, ["images", "1 image", "Pas de image"]);
};

var FUNC_X_SONGS = function (n) {
	return FUNC_X_SOMETHING(n, ["chansons", "1 chanson", "Pas de chanson"]);
};

var FUNC_X_BOOKMARKS = function (n) {
	return FUNC_X_SOMETHING(n, ["tous les signets", "1 marcador", "Aucun marcador"]);
};

var FUNC_X_COLLECTIONS = function (n) {
	return FUNC_X_SOMETHING(n, ["collections", "1 collections", "Pas de collections"]);
};

// Utility function, no need to localize
var toDoubleDigit = function (num) {
	if (num < 10) {
		return "0" + num;
	}
	return num;
};

var FUNC_GET_DATE = function (date) {
	var day, month, year;
	day = toDoubleDigit(date.getDate());
	month = toDoubleDigit(date.getMonth() + 1);
	year = date.getFullYear();
	return month + "/" + day + "/" + year;
};

var FUNC_GET_TIME = function (date) {
	var hour, minute;
	hour = toDoubleDigit(date.getHours());
	minute = toDoubleDigit(date.getMinutes());
	return hour + ":" + minute;
};

var FUNC_GET_DATE_TIME = function (date) {
	return date.toLocaleDateString() + " " + FUNC_GET_TIME(date);
};

return {
	// Standard stuff
	Sony: {
		// USB connected
		DO_NOT_DISCONNECT: "Ne d" + String.fromCharCode(233) + "branchez pas!",
		USB_CONNECTED: "USB connect" + String.fromCharCode(233) + "",
		DEVICE_LOCKED: "Dispositif de verrouillage",

		// About, translate either all or none
		ABOUT_PRSP: "PRS+ Script: @@@script@@@\n" + "PRS+ Firmware: @@@firmware@@@\n" + "Author: Mikheil Sukhiashvili aka kartu (kartu3@gmail.com) using work of: " + "igorsk, boroda, obelix, pepak, llasram and others.\n" + "© GNU Lesser General Public License.",
		ABOUT_1: "Copyright ©2006-2008 Sony Corporation",
		ABOUT_2: "Adobe, the Adobe logo, Reader and PDF are either registered trademarks or" + " trademarks of Adobe Systems Incorporated in the United States and/or other countries.",
		ABOUT_3: "MPEG Layer-3 audio coding technology and patents licensed by Fraunhofer IIS and Thomson." + " MPEG-4 AAC audio coding technology licensed by Fraunhofer IIS (www.iis.fraunhofer.de/amm/).",
		ABOUT_4: "Application software designed and implemented by Kinoma (www.kinoma.com). Portions Copyright ©2006,2007 Kinoma, Inc.",
		ABOUT_5: "Bitstream is a registered trademark, and Dutch, Font Fusion, and Swiss are trademarks, of Bitstream, Inc.",
		ABOUT_6: "Portions of this software are Copyright ©2005 The FreeType Project (www.freetype.org). All rights reserved.",
		ABOUT_7: "This software is based in part on the work of the Independent JPEG Group.",
		AUTHORIZED_SONY: "Authorized for the eBook Store.",
		NOT_AUTHORIZED_SONY: "Not authorized for the eBook Store.",
		AUTHORIZED_ADOBE: "This device is authorized for Adobe DRM protected content.",
		NOT_AUTHORIZED_ADOBE: "This device is not authorized for Adobe DRM protected content.",
		SONY_FW_VERSION: "Version",
		DEVICE_ID: "Device",

		// Mime & card names
		RICH_TEXT_FORMAT: "Rich Text Format",
		ADOBE_PDF: "Adobe PDF",
		EPUB_DOCUMENT: "Document EPUB",
		BBEB_BOOK: "Livre BBeB",
		PLAIN_TEXT: "Texte plaine",
		INTERNAL_MEMORY: "Mémoire Interne",
		MEMORY_STICK: "Memory Stick",
		SD_CARD: "Carte SD",

		// Main.xml & kbook.so stuff
		INVALID_FORMAT: "Format non valide",
		FORMATTING: "Formatage en cours...",
		LOADING: "Chargement en cours...",
		LOW_BATTERY: "Batterie faible!",
		HR_WARNING: "Vous voulez effacer tout le contenu et restaurer les param" + String.fromCharCode(232) + "tres initiaux et le statut de la DRM Auteurizaci" + String.fromCharCode(243) + "n?\n\nOui - Presse 5\nAucun - Presse MENU",
		DEVICE_SHUTDOWN: String.fromCharCode(201) + "teindre l'appareil",
		PRESS_MARK_TO_SHUTDOWN: "Marque de presse pour " + String.fromCharCode(233) + "teindre",
		THIS_DEVICE: "dispositif.",
		PRESS_MARK_TO_DELETE: "Marque de presse pour",
		THIS_BOOK: "supprimer le livre.",
		FORMAT_INTERNAL_MEMORY: "Formater Mémoire Interne",
		PRESS_MARK_TO_FORMAT: "Marque de presse pour formater",
		MSG_INTERNAL_MEMORY: "m" + String.fromCharCode(233) + "moire Interne.",
		RESTORE_DEFAULTS: "Restaurer les param" + String.fromCharCode(232) + "tres par d" + String.fromCharCode(233) + "faut",
		PRESS_MARK_TO_RESTORE: "Marque de presse pour restaurer",
		DEFAULT_SETTINGS: "param" + String.fromCharCode(232) + "tres par d" + String.fromCharCode(233) + "faut.",
		UPPER_PAGE: "PAGE",
		ONE_OF_ONE: "1 de 1",
		NO_BATTERY: "Batterie faible!",
		FORMATTING_INTERNAL_MEMORY: "Formatage M" + String.fromCharCode(233) + "moire Interne en cours...",
		SHUTTING_DOWN: String.fromCharCode(201) + "teindre l'appareil",

		// Root menu
		CONTINUE: "Continuer la lecture",
		BOOKS_BY_TITLE: "Livres par Titre",
		BOOKS_BY_AUTHOR: "Livres par Auteur",
		BOOKS_BY_DATE: "Livres par Date",
		COLLECTIONS: "Collections",
		ALL_BOOKMARKS: "Tous les signets",
		NOW_PLAYING: "Lecture en cours",
		MUSIC: "Audio",
		PICTURES: "Images",
		SETTINGS: "Param" + String.fromCharCode(232) + "tres",

		// In Settings
		// orientation
		ORIENTATION: "Orientation",
		HORIZONTAL: "Horizontal",
		VERTICAL: "Vertical",
		// set date
		SET_DATE: "Date et heure",
		YEAR: "Ann" + String.fromCharCode(233) + "e",
		MONTH: "Mois",
		DATE: "Jour", // Day
		HOUR: "Heure",
		MINUTE: "Minute",
		SETDATE_OK: "OK",
		// width in pixels = ..._SIZE * 35
		SETDATE_OK_SIZE: 2,
		// slideshow
		SLIDESHOW: "Mode Diaporamas",
		SS_ON: "On",
		SS_OFF: "Off",
		SS_TURN: "Turn",
		SS_DURATION: "Dur" + String.fromCharCode(233) + "e de la diapositive",
		// width in pixels = ..._SIZE * 35
		SS_SIZE: 2,
		SS_OK: "OK",
		// width in pixels = ..._SIZE * 35
		SS_OK_SIZE: 2,
		SECONDS: "Seconde",
		// auto standby (aka sleep mode)
		AUTOSTANDBY: "Mode veille",
		AS_ON: "On",
		AS_OFF: "Off",
		AS_TURN: "Turn",
		// width in pixels = ..._SIZE * 35
		AS_SIZE: 2,
		AS_OK: "OK",
		// width in pixels = ..._SIZE * 35
		AS_OK_SIZE: 2,
		// about
		ABOUT: "À propos de Reader",
		// reset to factory settings
		RESET_TO_FACTORY: "Restaurer les param" + String.fromCharCode(232) + "tres par d" + String.fromCharCode(233) + "faut",

		// In Advanced Settings
		ADVANCED_SETTINGS: "Param" + String.fromCharCode(232) + "tres avanc" + String.fromCharCode(233) + "s",
		// screen lock (aka device lock)
		SCREEN_LOCK: "Verrouillage de l'appareil",
		SL_OFF: "Off",
		SL_ON: "On",
		SL_CODE: "Code",
		SL_TURN: "Turn",
		// width in pixels = ..._SIZE * 35
		SL_SIZE: 2,
		SL_OK: "OK",
		SL_OK_SIZE: 2,
		SL_OK_UNLOCK: "OK", // unlock
		// width in pixels = ..._SIZE * 35
		SL_OK_UNLOCK_SIZE: 2,
		// format device
		FORMAT_DEVICE: "Formater M" + String.fromCharCode(233) + "moire Interne",

		// In Book menu
		BEGIN: "Commencer",
		END: "Fin",
		BOOKMARKS: "Signets",
		CONTENTS: "Table des mati" + String.fromCharCode(232) + "res",
		HISTORY: "Historique",
		INFO: "Information",
		UTILITIES: "Utilitaires",

		// In Book Utilities
		REMOVE_ALL_BOOKMARKS: "Quitar Tous les signets",
		CLEAR_HISTORY: "Supprimer le Historique",
		DELETE_BOOK: "Supprimer le livre",

		// In Books by Date
		TODAY: "Hoy",
		EARLIER_THIS_WEEK: "Plus t" + String.fromCharCode(234) + "t cette semaine",
		LAST_WEEK: "La semaine derni" + String.fromCharCode(232) + "re",
		EARLIER_THIS_MONTH: "Plus t" + String.fromCharCode(244) + "t ce mois-ci",
		LAST_MONTH: "Mois dernier",
		EARLIER_THIS_QUARTER: "Ant" + String.fromCharCode(233) + "rieures ce trimestre",
		LAST_QUARTER: "Dernier trimestre",
		EARLIER_THIS_YEAR: "Plus t" + String.fromCharCode(244) + "t cette année",
		LAST_YEAR: "El Ann" + String.fromCharCode(233) + "e Pasado",
		OLDER: "Plus",

		PAGE: "Page",
		PART: "Parte",
		OF: "de",
		NO_BOOK: "Aucun livre",
		NO_SONG: "Pas de chanson",

		// Info title strings, comma separated, no spaces after comma
		INFO_TITLES: "Couvrir,Titre,Auteur,Éditeur,Categoria,eBook ID,Type,Date,Taille,Emplacement,Fichier,Des droits numériques,Expire",

		// Titles and criterions for "Books by Title" and "Books by Folder"
		// title is displayed, "criterion" is used for sorting.
		//
		// NOTE: if localization doesn't need custom Books by sorting, just remove CUSTOM_SORT, TITLE_*, CRITERION_* items
		CUSTOM_SORT: true,
		TITLE_1: "0-9",
		CRITERION_1: "0123456789",
		TITLE_2: "A B C",
		CRITERION_2: "ABCabc",
		TITLE_3: "D E F",
		CRITERION_3: "DEFdef",
		TITLE_4: "G H I",
		CRITERION_4: "GHIghi",
		TITLE_5: "J K L",
		CRITERION_5: "JKLjkl",
		TITLE_6: "M N O",
		CRITERION_6: "MNOmno",
		TITLE_7: "P Q R S",
		CRITERION_7: "PQRSpqrs",
		TITLE_8: "T U V W",
		CRITERION_8: "TUVWtuvw",
		TITLE_9: "X Y Z",
		CRITERION_9: "XYZxyz",
		TITLE_0: "Autres",
		CRITERION_0: "",

		FUNC_GET_DATE_TIME: FUNC_GET_DATE_TIME,
		FUNC_GET_DATE: FUNC_GET_DATE,
		FUNC_GET_TIME: FUNC_GET_TIME,

		FUNC_X_PAGES: FUNC_X_PAGES,
		FUNC_X_ITEMS: FUNC_X_ITEMS,
		FUNC_X_SETTINGS: FUNC_X_SETTINGS,
		FUNC_X_PICTURES: FUNC_X_PICTURES,
		FUNC_X_SONGS: FUNC_X_SONGS,
		FUNC_X_BOOKMARKS: FUNC_X_BOOKMARKS,
		FUNC_X_COLLECTIONS: FUNC_X_COLLECTIONS,
		FUNC_X_BOOKS: FUNC_X_BOOKS
	},

	// PRS+ stuff
	Core: {
		FUNC_X_BOOKS: FUNC_X_BOOKS,
		FUNC_X_SETTINGS: FUNC_X_SETTINGS,
		FUNC_X_ITEMS: FUNC_X_ITEMS,
		NODE_PRSP_SETTINGS: "PRS+ param" + String.fromCharCode(232) + "tres",
		NODE_OTHERS: "Multim" + String.fromCharCode(233) + "dia",
		NODE_GAMES_AND_UTILS: "Jeux - Utilitaires",
		GROUP_MENU_TITLE: "R" + String.fromCharCode(233) + "glages de menu",
		GROUP_VIEWER_TITLE: "Param" + String.fromCharCode(232) + "tres Viewer"
	},

	CoreLang: {
		TITLE: "Emplacement",
		COMMENT: "N" + String.fromCharCode(233) + "cessite un red" + String.fromCharCode(233) + "marrage",
		OPTION_LANG: "Langue",

		OPTION_DATE_FORMAT: "Format Date",
		ddMMMYY: "31/Jan/99",
		ddMONTHYY: "31/Janvier/99",
		ddMMMYYYY: "31/Jan/1999",
		ddMONTHYYYY: "31/Janvier/1999",

		OPTION_DATE_SEPARATOR: "Separador Date",
		VALUE_SPACE: "Espace",
		VALUE_NONE: "Aucun",

		MONTH_SHORT_1: "Jan",
		MONTH_SHORT_2: "F" + String.fromCharCode(233) + "v",
		MONTH_SHORT_3: "Mar",
		MONTH_SHORT_4: "Abr",
		MONTH_SHORT_5: "May",
		MONTH_SHORT_6: "Jun",
		MONTH_SHORT_7: "Jul",
		MONTH_SHORT_8: "Ago",
		MONTH_SHORT_9: "Sep",
		MONTH_SHORT_10: "Oct",
		MONTH_SHORT_11: "Nov",
		MONTH_SHORT_12: "Dic",

		MONTH_1: "Janvier",
		MONTH_2: "F" + String.fromCharCode(233) + "vrier",
		MONTH_3: "Mars",
		MONTH_4: "Avril",
		MONTH_5: "Mai",
		MONTH_6: "Juin",
		MONTH_7: "Juillet",
		MONTH_8: "Ao" + String.fromCharCode(251) + "t",
		MONTH_9: "Septembre",
		MONTH_10: "Octobre",
		MONTH_11: "Novembre",
		MONTH_12: "Décembre"
	},

	MenuCaptions: {
		OPTION_STYLE: "Menu L" + String.fromCharCode(233) + "gendes Style",
		VALUE_SONY_DEFAULT: "Original Sony",
		VALUE_ALWAYS_SMALL: "Toujours petits",
		VALUE_ALWAYS_BIG: "Toujours grandes"
	},

	TextEncoding: {
		OPTION_TITLE: "TXT et RTF Livres Encoding",
		MSG_RESTART: "N" + String.fromCharCode(233) + "cessite un red" + String.fromCharCode(233) + "marrage!",
		LATIN: "Latin",
		RUSSIAN: "Russe(Windows-1251)"
	},

	KeyBindings: {
		TITLE: "Cl" + String.fromCharCode(233) + "s de configuration",
		DESCRIPTION: "Permet d'actions aux touches",

		DEFAULT_VALUE: "Par d" + String.fromCharCode(233) + "faut",

		// Contexts
		GLOBAL: String.fromCharCode(192) + " tout moment",
		IN_MENU: "Lorsque dans le menu",
		IN_BOOK: "Lorsque la lecture de livres",

		// Button groups
		NUM_BUTTONS: "Touches num" + String.fromCharCode(233) + "riques",
		JP_BUTTONS: "Touches Joypad",
		OTHER_BUTTONS: "Autres boutons",
		VOLUME_BUTTONS: "Touches de volume",

		// Buttons
		BN_SIZE: "Zoom",
		BN_BOOKMARK: "Signet",
		BN_BL_NEXT: "Vers le bas " + String.fromCharCode(224) + " gauche 'suivante'",
		BN_BL_PREVIOUS: "Vers le bas " + String.fromCharCode(224) + " gauche 'précédent'",
		BN_SB_NEXT: "Sidebar 'suivante'",
		BN_SB_PREVIOUS: "Sidebar 'pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent'",
		BN_MENU: "Menu",
		BN_JP_LEFT: "Joypad " + String.fromCharCode(224) + "  gauche",
		BN_JP_RIGHT: "Joypad droit",
		BN_JP_UP: "Joypad jusqu'" + String.fromCharCode(224) + " ",
		BN_JP_DOWN: "Joypad vers le bas",
		BN_JP_CENTER: "Joypad centre",
		BN_H_SIZE: "Garder zoom",
		BN_H_BOOKMARK: "Garder marque",
		BN_H_BL_NEXT: "Garder vers le bas " + String.fromCharCode(224) + "  ga. 'suivante'",
		BN_H_BL_PREVIOUS: "Garder vers le bas " + String.fromCharCode(224) + "  ga. 'pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent'",
		BN_H_MENU: "Garder menu",
		BN_H_SB_NEXT: "Garder sidebar 'suivante'",
		BN_H_SB_PREVIOUS: "Garder sidebar 'pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent''",
		BN_H_JP_CENTER: "Garder joypad centre",
		BN_H_1: "Garder 1",
		BN_H_2: "Garder 2",
		BN_H_3: "Garder 3",
		BN_H_4: "Garder 4",
		BN_H_5: "Garder 5",
		BN_H_6: "Garder 6",
		BN_H_7: "Garder 7",
		BN_H_8: "Garder 8",
		BN_H_9: "Garder 9",
		BN_H_0: "Garder 0",
		BN_VOLUME_DOWN: "Volume -",
		BN_H_VOLUME_DOWN: "Garder Volume -",
		BN_VOLUME_UP: "Volume +",
		BN_H_VOLUME_UP: "Garder Volume +",

		// Actions
		ACTION_SHUTDOWN: String.fromCharCode(201) + "teindre l'appareil",
		ACTION_NEXT_PAGE: "Page suivante",
		ACTION_PREVIOUS_PAGE: "Page pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent",
		ACTION_NEXT_IN_HISTORY: "Suivante en el Historique",
		ACTION_PREVIOUS_IN_HISTORY: "Pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent en el Historique",
		ACTION_PREVIOUS_SONG: "Chanson pr" + String.fromCharCode(233) + "c" + String.fromCharCode(233) + "dent ",
		ACTION_NEXT_SONG: "Chanson suivante ",
		ACTION_GOTO_LINK: "Goto Link"
	},

	Screenshot: {
		TITLE: "Capture d'" + String.fromCharCode(233) + "cran",
		ACTION_TITLE: "Prendre une capture d'" + String.fromCharCode(233) + "cran",
		SAVING_TO: "Enregistrement " + String.fromCharCode(224) + "",
		FAILED_TO_SAVE: "Impossible d'enregistrer",
		OPT_SAVETO: "Enregistrer...",
		OPT_FEEDBACK: "Afficher Enregistrer progr" + String.fromCharCode(232) + "s",
		MEMORY_STICK: "Memory Stick",
		FEEDBACK_ON: "On",
		FEEDBACK_OFF: "Off",
		SD_CARD: "Carte SD",
		INTERNAL_MEMORY: "M" + String.fromCharCode(233) + "moire Interne"
	},

	BrowseFolders: {
		TITLE: "Parcourir les dossiers",
		OPTION_SORTING_MODE: "Tri Mode",
		VALUE_BY_TITLE: "Par Titre",
		VALUE_BY_AUTHOR_THEN_TITLE: "Par auteur, puis le titre",
		VALUE_BY_AUTHOR_SWAPPING: "Par auteur " + String.fromCharCode(233) + "change Nom / Pr" + String.fromCharCode(233) + "nom",
		VALUE_BY_FILENAME: "Par nom de fichier",
		OPTION_TITLE_SORTER: "Trier par type d'ordre",
		ENABLED: "Permettre",
		DISABLED: "Handicap" + String.fromCharCode(233) + "",
		OPTION_IM_ROOT: "Mémoire interne dossier Root",
		OPTION_CARD_SCAN: "Carte SD / MS Scan",
		OPTION_MOUNT: "Utilisez mount avec les cartes SD / MS",
		NODE_RESCAN_INTERNAL_MEMORY: "Rescan m" + String.fromCharCode(233) + "moire interne",
		NODE_COPY_TO_INTERNAL_MEMORY: "Copier sur la m" + String.fromCharCode(233) + "moire interne",
		NODE_COPY_TO_INTERNAL_MEMORY_COMMENT: "Des copies de fichiers " + String.fromCharCode(224) + " la racine de la m" + String.fromCharCode(233) + "moire interne",
		NODE_COPY_AND_RESCAN: "Copy & Rescan m" + String.fromCharCode(233) + "moire interne",
		NODE_COPY_AND_RESCAN_COMMENT: "Des copies de fichiers à la racine de la mémoire interne et livres rescans",
		ERROR_TARGET_EXISTS: "Fichier d'erreur cible, il existe",
		NODE_BROWSE_FOLDERS: "Parcourir les dossiers",
		NODE_BROWSE_FOLDERS_COMMENT: "Parcourir le syst" + String.fromCharCode(232) + "me de fichiers",
		NODE_INTERNAL_MEMORY: "M" + String.fromCharCode(233) + "moire interne",
		NODE_MEMORY_STICK: "Memory Stick",
		NODE_MEMORY_STICK_MOUNT: "Memory Stick via le mont",
		NODE_SD_CARD: "Carte SD",
		NODE_SD_CARD_MOUNT: "Carte SD via le mont"
	},

	Clock: {
		TITLE: "Horloge",
		OPTION_STYLE: "Style de l'Horloge",
		VALUE_24H: "Format 24 Heures",
		VALUE_12H: "Format 12 Heures",
		OPTION_MODE: "Utiliser l'horloge",
		VALUE_ALWAYS_SHOWN: "Affiche toujours",
		VALUE_SHOWN_ONLY_IN_MENU: "Affiché uniquement dans le menu",
		VALUE_SHOWN_WHEN_READING: "Affiché uniquement lors de la lecture",
		VALUE_OFF: "Handicap" + String.fromCharCode(233) + "",
		ACTION_TOGGLE_CLOCK: "Toggle horloge",
		AM: "am",
		PM: "pm"
	},

	PageIndex: {
		TITLE: "Pagination des livres et des menus",
		INDEX_STYLE_BOOK: "Style Index en Livres",
		INDEX_MODE_BOOK: "Mode Index en Livres",
		INDEX_MODE_MENU: "Mode Index dans le menu",
		INDEX_STYLE_MENU: "Style Index dans le menu",
		OF: "de",
		ALWAYS_SHOWN: "Toujours",
		NEVER_SHOWN: "Jamais",
		NOT_SHOWN_IF_SINGLE_PAGE: "Ne figure pas sur une seule page"
//		PAGES_LEFT: "Autres pages: 95",
//		PAGES_LEFT_PER: "Autres pages %: 95 (95%)",
//		Pag_Left: "Aut pag:"
	},

	EpubUserStyle: {
		OPTION_EPUB_CSS_FILE: "Style EPUB utilisateur (Fichier CSS)",
		MSG_WARNING: "Affecte uniquement les livres ouverts apr" + String.fromCharCode(232) + "s!",
		VALUE_DISABLED: "Handicap" + String.fromCharCode(233) + ""
	},

	BookHistory: {
		FUNC_X_BOOKS: FUNC_X_BOOKS,
		TITLE: "Book History",
		VALUE_DISABLED: "Disabled",
		OPTION_REPLACE: "History into Continue Reading",
		VALUE_ON: "On",
		VALUE_OFF: "Off"
	},

//ReadMark	ReadMark: {
//		TITLE_UNREAD: "Signets - D" + String.fromCharCode(233) + "j" + String.fromCharCode(224) + " lu",
//		TITLE_READ: "Signets - Pas encore lu",
//	},

	TextScale: {
		OPTION_SCALE_DEFAULT: String.fromCharCode(233) + "chelle par d" + String.fromCharCode(201) + "faut",
		VALUE_SMALL: "(S)Petite taille",
		VALUE_MEDIUM: "(M)Taille moyenne",
		VALUE_LARGE: "(L)Grande taille",
		VALUE_DISABLED: "Handicap" + String.fromCharCode(233) + "",
		VALUE_ENABLED: "Permettre" + String.fromCharCode(233) + "e"
	},

	MenuTuning: {
		OPTION_OUTER: "Menu niveau sup" + String.fromCharCode(233) + "rieur ne contient"
	},

	Dictionary: {
		TITLE: "Dictionnaire",
		WARN_DICT_DISABLED: "Dictionnaire est d" + String.fromCharCode(233) + "sactiv" + String.fromCharCode(233) + "!",
		WARN_DICT_DOESNT_EXIST: "Dictionary file doesn't exist!",
		ACTION_DICTIONARY: "Lancement dictionnaire",
		OPTION_DICTIONARY: "Dictionnaire fichier",
		VALUE_DISABLED: "Handicap" + String.fromCharCode(233) + ""
	}
};