// Name: bootstrap 350
// Description: Sony PRS-350 bootstrap code
//
//	Receives the following parameters: 
//		Core, bootLog, loadCore, loadAddons, getFileContent, compatPath
//		must call loadAddons, loadCore and Core.init at appropriate times
//
// History:
//	2011-01-12 kartu - Initial version, based on 600
//	2011-02-06 kartu - Fixed #64 "Wrong german translation file"
//	2011-02-07 kartu - Implemented #? possibility to download files using web browser
//	2011-02-08 kartu - Deleted irrelevant "fixTimeZones" code
//	2011-02-09 kartu - Fixed # Text Memo open => press root leads to reboot
//	2011-02-10 kartu - Implemented # Russian phonetic keyboard (keyboard xml by boroda)
//	2011-02-26 kartu - Refactored, moved code common to x50 models into common_x50.js
//	2011-02-27 kartu - Refactored parameters into PARAMS object
//
//-----------------------------------------------------------------------------------------------------
// Localization related code is model specific.  
// Replacing default  "choose language" menu & "choose keyboard" menu
//-----------------------------------------------------------------------------------------------------


var tmp = function() {
	// Workaround for # Text Memo open => press root leads to reboot
	kbook.kbookNotepad.exit = function(param) {
		var note = this.note;
		this.note = null;
		if (note && note.type === "text" && note.newbie) {
			return;
		}
		this.bubble('doMenuClose');
	};
	
	// Call code common to x50 models	
	try {
		var f = new Function("PARAMS", PARAMS.getFileContent(PARAMS.compatPath + "common_350_650_950.js"));
		PARAMS.langNodeIndex = 3;
		PARAMS.keyboardNodeIndex = 4;
		f(PARAMS);
	} catch (ee) {
		PARAMS.bootLog("error calling common x50 " + ee);
	}
};

tmp();