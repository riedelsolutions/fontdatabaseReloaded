//burger menu toggle

function menu(){
	if (document.getElementById("mobilemenu").className = "toHide"){
		document.getElementById("mobilemenu").className = "toDisplay";
	}else{
		document.getElementById("mobilemenu").className = "toDisplay";
	}
}

//nightmode
function night(){
            body.className='night';
            document.getElementById("regularMode").style.display = "none";
            document.getElementById("nightMode").style.display = "block";
            document.getElementById("logo").src= "images/daymode.png"
        }
function day(){
            body.className='day';
            document.getElementById("regularMode").style.display = "block";
            document.getElementById("nightMode").style.display = "none";
            document.getElementById("logo").src= "images/alt.png"
}


//Toggle menu

function toggleMenu(){
	let propName = document.getElementsByClassName("fullNav")[0];
	
	if(propName.style.display =="none" || propName.style.display == ""){
		propName.style.display = "block";
	}else{
		propName.style.display = "none";
	}
}

//Setting up the variables
		var fontCharacteristic;
		var fontInput;

		//Sets the characteristic according to what the user chooses on the 'select' menu.
		function setCharacteristic(){
			fontCharacteristic = document.getElementById('characteristic').value;
			
		}

		//Sets the font according to what the user chooses on the 'select' menu.
		function setFont(){
			fontInput = document.getElementById('font').value;
		
		}
//Font objects

	var ComicSansMS = {
		name: "Comic Sans MS",
		link: "https://www.fonts.com/font/microsoft-corporation/comic-sans",
		img: "images/comicsansms.png",
	}

	var Forte = {
		name: "Forte",
		link: "https://catalog.monotype.com/family/monotype/forte",
		img: "images/forte.png",
	}

	var Luna = {
		name: "Luna",
		link: "https://www.behance.net/gallery/27812357/LUNA-Free-Font",
		img:"images/luna.png",
	}

	var BrushScriptMT = {
		name: "Brush Script MT",
		link: "https://www.fonts.com/font/adobe/brush-script",
		img:"images/brushscriptmt.png",
	}

	var FreestyleScript ={
		name: "Freestyle Script",
		link:"https://www.fonts.com/font/adobe/freestyle-script" ,
		img:"images/freestylescript.png",
	}

	var Mistral = {
		name: "Mistral",
		link: "https://www.fonts.com/font/adobe/mistral/regular",
		img:"images/mistral.png",
	}

	var HarlowSolidItalic = {
		name: "Harlow Solid",
		link:"https://www.fonts.com/font/itc/harlow",
		img:"images/harlowsoliditalic.png",
	}


	var Impact = {
		name: "Impact", 
		link:"https://www.wfonts.com/font/impact",
		img:"images/impact.png",
	}

	var Bauhaus93 = {
		name: "Bauhaus 93",
		link:"https://www.fonts.com/font/urw/bauhaus-93/regular" ,
		img:"images/bauhaus93.png",
	}

	var Haettenschweiler = {
		name: "Haettenschweiler",
		link:"https://www.fonts.com/font/microsoft-corporation/haettenschweiler",
		img:"images/haettenschweiler.png",
	}

	var Muskaters = {
		name: "Muskaters",
		link:"https://fontbundles.net/font-bundles-store/58592-muskaters-duo-style-font-bonus",
		img:"images/muskaters.png",
	}

	var HighTide = {
		name: "High Tide",
		link:"https://blkbk.ink/products/high-tides",
		img:"images/hightide.png",
	}


	var Bebas = {
		name: "Bebas",
		link:"https://www.dafont.com/bebas.font",
		img: "images/bebas.png",
	}

	var LemonMilk = {
		name: "LemonMilk",
		link:"https://www.dafont.com/lemon-milk.font",
		img: "images/lemonmilk.png",

	}

	var Code = {
		name: "Code",
		link:"http://www.myfonts.com/fonts/font-fabric/code-pro/",
		img: "images/code.png",
	}

	var CocomatLight ={
		name: "Cocomat Light",
		link:"https://www.dafont.com/cocomat.font",
		img:"images/cocomatlight.png",
	}

	var BerlinSansFB = {
		name: "Berlin Sans FB",
		link:"http://fontsgeek.com/fonts/Berlin-Sans-FB-Regular",
		img:"images/berlinsansfb.png",
	}

	var museoslab500 = {
		name: "museo slab 500",
		link:"https://www.myfonts.com/fonts/exljbris/museo-slab/500/",
		img:"images/museoslab500.png",
	}


	var Consolas = {
		name: "Consolas",
		link:"https://www.microsoft.com/en-us/download/details.aspx?id=17879",
		img:"images/consolas.png",
	}


	var Frutiger = {
		name: "Frutiger",
		link:"https://www.fonts.com/font/linotype/frutiger/complete-family-pack",
		img:"images/frutiger.png",
	}

	var Calibri = {
		name: "Calibri",
		link: "https://docs.microsoft.com/ru-ru/typography/font-list/calibri",
		img: "images/calibri.png",
	}

	var Candara = {
		name: "Candara",
		link:"https://docs.microsoft.com/en-us/typography/font-list/candara",
		img:"images/candara.png",
	}

	var Myriad = {
		name: "Myriad",
		link:"https://www.fonts.com/font/adobe/myriads",
		img: "images/myriad.png",
	}

	var CalistoMT ={
		name: "Calisto MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/calisto-mt",
		img: "images/calistomt.png",
	}


	var CalifornianFB = {
		name: "CalifornianFB",
		link:"https://docs.microsoft.com/en-us/typography/font-list/californian-fb",
		img:"images/californianfb.png",
	}


	var Gravity = {
		name: "Gravity",
		link:"https://www.behance.net/gallery/3407691/Gravity-New-free-font-experiment",
		img:"images/gravity.png",
	}

	var OpenSans = {
		name: "Open Sans",
		link:"https://fonts.google.com/specimen/Open+Sans",
		img:"images/opensans.png",
	}

	var Raleway = {
		name: "Raleway",
		link:"https://fonts.google.com/specimen/Raleway",
		img:"images/raleway.png",
	}

	var BlairITC ={
		name: "ITC Blair",
		link:"https://www.myfonts.com/fonts/itc/blair/",
		img:"images/blairitc.png",
	}


	var Cocon = {
		name: "Cocon",
		link:"https://www.myfonts.com/fonts/fontfont/ff-cocon/",
		img:"images/cocon.png",
	}

	var Agent = {
		name: "Agent",
		link:"https://befonts.com/agent-typeface.html",
		img:"images/agent.png",
	}

	var CourierNew = {
		name: "Courier New",
		link:"https://docs.microsoft.com/en-us/typography/font-list/courier-new",
		img:"images/couriernew.png",
	}

	var Arial = {
		name: "Arial",
		link:"https://docs.microsoft.com/en-us/typography/font-list/arial",
		img: "images/arial.png",
	}

	var Centaur = {
		name: "Centaur",
		link:"https://www.myfonts.com/fonts/mti/centaur/#index",
		img:"images/centaur.png",
	}

	var GillSans = {
		name: "Gill Sans",
		link:"https://www.myfonts.com/fonts/mti/gill-sans/",
		img:"images/gillsans.png",
	}

	var MinionPro = {
		name: "Minion Pro",
		link:"https://www.myfonts.com/fonts/adobe/minion/",
		img:"images/minionpro.png",
	}

	var Verdana = {
		name: "Verdana",
		link:"https://docs.microsoft.com/en-us/typography/font-list/verdana",
		img:"images/verdana.png",
	}


	var LetterGothicstd = {
	  	name: "Letter Gothic std",
	  	link:"https://www.myfonts.com/fonts/mti/letter-gothic/" ,
	  	img:"images/lettergothicstd.png",
	  }


	var EncodeSansCondensed = {
	  	name: "Encode Sans Condensed",
	  	link:"https://fonts.google.com/specimen/Encode+Sans+Condensed",
	  	img:"images/encodesanscondensed.png",
	  }


	var Montserrat = {
		name: "Montserrat",
		link:"https://fonts.google.com/specimen/Montserrat",
		img:"images/montserrat.png",
	}

	var Roboto = {
		name: "Roboto",
		link:"https://fonts.google.com/specimen/Roboto",
		img:"images/roboto.png",
	}

	var DIN = {
		name: "DIN",
		link:"https://www.myfonts.com/fonts/fontfont/ff-din/",
		img:"images/din.png",
	}

	var TimesNewRoman = {
		name: "Times New Roman",
		link:"https://docs.microsoft.com/en-us/typography/font-list/times-new-roman",
		img:"images/timesnewroman.png",
	}

	var CenturyGothic = {
		name: "Century Gothic",
		link:"https://www.myfonts.com/fonts/mti/century-gothic/",
		img:"images/centurygothic.png",
	}

	var FranklinGothicBook = {
		name: "Franklin Gothic Book",
		link:"https://www.fonts.com/font/urw/franklin-gothic/book",
		img:"images/franklingothicbook.png",
	}

	var BookAntiqua = {
		name: "Book Antiqua",
		link:"https://docs.microsoft.com/en-us/typography/font-list/book-antiqua",
		img:"images/bookantiqua.png",
	}

	var Garamond = {
		name: "Garamond",
		link:"https://typekit.com/fonts/adobe-garamond",
		img:"images/garamond.png",
	}

	var Georgia = {
		name: "Georgia",
		link:"https://www.myfonts.com/fonts/ascender/georgia/",
		img:"images/georgia.png",
	}

	var Avenir = {
		name: "Avenir",
		link:"https://www.myfonts.com/fonts/linotype/avenir/",
		img:"images/avenir.png",
	}

	var FFMetaProHairline = {
		name: "FF Meta Pro Hairline",
		link:"https://www.fonts.com/font/fontfont/ff-meta/hairline",
		img:"images/ffmetaprohairline.png",
	}

	var Univers = {
		name: "Univers",
		link:"https://www.myfonts.com/fonts/linotype/univers/",
		img:"images/univers.png",
	}

	var Futura = {
		name: "Futura",
		link:"https://www.myfonts.com/fonts/bitstream/futura/",
		img:"images/futura.png",
	}

	var Elephant = {
		name: "Elephant",
		link:"https://www.fonts.com/font/carter-and-cone/elephant/regular",
		img:"images/elephant.png",
	}

	var BodoniMT = {
		name: "Bodoni MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/bodoni-mt",
		img:"images/bodonimt.png",
	}

	var ModernNo20 = {
		name: "Modern no. 20",
		link:"https://www.myfonts.com/fonts/bitstream/modern-no-20/",
		img:"images/modernno20.png",
	}
	
	var Didot = {
		name: "Didot",
		link:"https://www.myfonts.com/fonts/linotype/didot/",
		img:"images/didot.png",
	}

	var Trajan = {
		name: "Trajan",
		link:"https://www.fonts.com/font/adobe/trajan/regular",
		img:"images/trajan.png",	
	}

	var MarbreSans = {
		name: "Marbre Sans",
		link:"https://www.dafont.com/marbre-sans.font",
		img:"images/marbresans.png",
	}
	
	var BickhamScript = {
		name: "Bickham Script",
		link:"https://www.fonts.com/font/adobe/bickham-script",
		img:"images/bickhamscript.png",

	}

	var AgencyFB = {
		name: "Agency FB",
		link: "http://allfont.net/download/agency-fb/",
		img:"images/agencyfb.png",
	}

	var Asgalt = {
		name: "Asgalt",
		link: "https://www.dafont.com/asgalt.font",
		img: "images/asgalt.png",
	}

	var NeotericBold = {
		name: "NEOTERIC Bold",
		link: "https://www.dafont.com/neoteric.font",
		img: "images/neotericbold.png",
	}

	var BlackladderITC = {
		name:"Blackladder ITC",
		link: "https://docs.microsoft.com/en-us/typography/font-list/blackadder-itc#blackadder-itc",
		img:"images/blackladderitc.png",
	}

	var MagnetoBold = {
		name: "Magneto Bold",
		link: "https://fontzone.net/font-details/magneto-bold",
		img: "images/magnetobold.png",
	}

	var ToxTypewriter = {
		name: "Tox Typewriter",
		link:"https://www.dafont.com/tox-typewriter.font",
		img:"images/toxtypewriter.png",
	}

	var Bahnschrift = {
		name: "Bahnschrift",
		link: "",
		img: "images/bahnschrift.png",
	}

	var BaskervilleOldFace = {
		name: "Baskerville Old Face",
		link: "https://www.myfonts.com/fonts/urw/baskerville-old-face/alternate_cuts.html",
		img: "images/baskervilleoldface.png",
	}

	var ErasBoldITC = {
		name: "Eras Bold ITC",
		link: "https://www.dafontfree.net/freefonts-eras-bold-itc-f123435.htm",
		img: "images/erasbolditc.png",
	}

	var Ebrima = {
		name: "Ebrima",
		link: "https://fontzone.net/font-details/ebrima",
		img: "images/ebrima.png",
	}

	var Constantia = {
		name: "Constantia",
		link: "https://docs.microsoft.com/en-us/typography/font-list/constantia",
		img: "images/constantia.png",
	}

	var Corbel = {
		name: "Corbel",
		link: "https://www.fonts.com/font/microsoft-corporation/corbel",
		img: "images/corbel.png",
	}

	var Rockwell = {
		name: "Rockwell",
		link: "https://www.myfonts.com/fonts/mti/rockwell/",
		img: "images/rockwell.png",
	}

	var BrittanicBold = {
		name: "BrittanicBold",
		link: "http://fontsgeek.com/fonts/Britannic-Bold-Regular",
		img: "images/brittanicbold.png",
	}



//Font arrays
		var seriousnessArray = ["none", BlackladderITC, ComicSansMS, Forte, Luna, BrushScriptMT, FreestyleScript, Mistral, HarlowSolidItalic, MagnetoBold, Impact, BrittanicBold, Bauhaus93,
								Haettenschweiler, Muskaters, HighTide, ToxTypewriter, ErasBoldITC, Bebas, LemonMilk, Code, CocomatLight, BerlinSansFB, Bahnschrift, museoslab500, Constantia, Consolas, Ebrima, Corbel, Frutiger,
								Calibri, Candara, Myriad, CalistoMT, CalifornianFB, Asgalt, Gravity, OpenSans, Raleway, Rockwell, BlairITC, AgencyFB, Cocon, Agent, CourierNew, Arial,
								Centaur, GillSans, MinionPro, Verdana, BaskervilleOldFace, LetterGothicstd, EncodeSansCondensed, Montserrat, Roboto, DIN, TimesNewRoman,
								CenturyGothic, FranklinGothicBook, BookAntiqua, Garamond, Georgia, Avenir, FFMetaProHairline, NeotericBold,Univers, Futura, Elephant,
								BodoniMT, ModernNo20, Didot, Trajan, MarbreSans, BickhamScript];

		var informalArray = ["none", BickhamScript, MarbreSans, Trajan, Didot, ModernNo20, BodoniMT, Elephant, Futura, Univers, NeotericBold, FFMetaProHairline, Avenir,
							Georgia, Garamond, BookAntiqua, FranklinGothicBook, CenturyGothic, TimesNewRoman, DIN, Roboto, Montserrat, EncodeSansCondensed,
							LetterGothicstd, BaskervilleOldFace, Verdana, MinionPro, GillSans, Centaur, Arial, CourierNew, Agent, Cocon, AgencyFB, BlairITC, Rockwell, Raleway, OpenSans, Gravity, Asgalt,
							CalifornianFB, CalistoMT, Myriad, Candara, Calibri, Frutiger, Corbel, Ebrima, Consolas, Constantia, museoslab500,Bahnschrift, BerlinSansFB, CocomatLight, Code, LemonMilk,
							Bebas, ErasBoldITC, ToxTypewriter,HighTide, Muskaters, Haettenschweiler, Bauhaus93, BrittanicBold,Impact, MagnetoBold,HarlowSolidItalic, Mistral, FreestyleScript, BrushScriptMT,
							Luna, Forte, ComicSansMS, BlackladderITC];

		var serifArray = ["none", BlairITC, Univers, Bebas, Code, Haettenschweiler, Bauhaus93, Avenir, Futura, CenturyGothic, Arial, Gravity, Raleway, DIN,
						FFMetaProHairline, NeotericBold,OpenSans, LemonMilk, ErasBoldITC, AgencyFB,MarbreSans,BrittanicBold,Asgalt, Cocon, ComicSansMS, Consolas, EncodeSansCondensed, Calibri, Roboto, FranklinGothicBook,
						Montserrat, CocomatLight, Verdana, Bahnschrift,Frutiger, Corbel, Ebrima,LetterGothicstd, Impact,Constantia, GillSans, BerlinSansFB, Candara, Myriad, CourierNew, CalistoMT,
						CalifornianFB, Rockwell,Elephant, BodoniMT, ModernNo20, MinionPro, museoslab500, BookAntiqua, Garamond, BaskervilleOldFace,Georgia, ToxTypewriter,TimesNewRoman, Centaur, Trajan,
						Didot, HarlowSolidItalic, Agent, Forte, Luna, MagnetoBold,Mistral, BrushScriptMT, FreestyleScript, Muskaters, HighTide, BlackladderITC,BickhamScript ];
		
		var sansSerifArray = ["none", BickhamScript, BlackladderITC,HighTide, Muskaters, FreestyleScript, BrushScriptMT, Mistral, MagnetoBold,Luna, Forte, Agent, HarlowSolidItalic, Didot,
							Trajan, Centaur, TimesNewRoman, ToxTypewriter ,Georgia, BaskervilleOldFace,Garamond, BookAntiqua, museoslab500, MinionPro, ModernNo20, BodoniMT, Elephant, Rockwell,CalifornianFB,
							CalistoMT, CourierNew, Myriad, Candara, BerlinSansFB, GillSans, Constantia,Impact, LetterGothicstd, Corbel, Ebrima, Frutiger, Bahnschrift, Verdana, CocomatLight, Montserrat,
							FranklinGothicBook, Roboto, Calibri, EncodeSansCondensed, Consolas, ComicSansMS, Cocon,Asgalt,BrittanicBold, MarbreSans,AgencyFB, ErasBoldITC, LemonMilk, OpenSans, NeotericBold,FFMetaProHairline,
							DIN, Raleway, Gravity, Arial, CenturyGothic, Futura, Avenir, Bauhaus93, Haettenschweiler, Code, Bebas, Univers, BlairITC];

//Helper variables
		var index;		//Index of where in the original array the results list should start.
		var indexOfNewArray = 0; //Helps initialize and fill the result[] array.
		var finalResArray = [];
		var Download = "Download";



//algorithm
		
		//noneFound(); runs if there are no fonts to be suggested.
		function noneFound(){ 
			var noResults = "Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput + ".";
   			var newParagraph = document.createElement('p');
   			newParagraph.textContent = noResults;
   			document.getElementById("resultDiv").appendChild(newParagraph);
   			
    	}

		


		// results(chosenArray); prints the output.
		function results(chosenArray){ 

			if (index >= chosenArray.length - 1){ //if the font the user looked up is the most w/e already

			noneFound();

			} else { // if it isn't, it prints the rest
					var result = [];
					for (var i = index + 1; i < chosenArray.length; i++){
					result[indexOfNewArray] = chosenArray[i];
					indexOfNewArray++;
					}

				ind = 0;
			var fontsMoreEtc = "Fonts more " + fontCharacteristic +  " than " + fontInput + ": ";										
   				
   			//Prints fontsMoreEtc
   			var resultTitle = document.createElement('h3');	
   			resultTitle.textContent = fontsMoreEtc;
   			document.getElementById("resultDiv").appendChild(resultTitle);


				for (var i = 0; i < finalResArray.length; ++i) {
  					  
  					 this["paragraph"+i] = document.createElement('p');
  					  this["paragraph"+i].textContent = "\n";
  					 document.getElementById("resultDiv").appendChild(this["paragraph"+i]);
  					  i++;
  					 
  					  this['link'+i] = document.createElement('a');
					  this['link'+i].setAttribute('href',finalResArray[i]);
					  this['link'+i].innerHTML = Download;
					  document.getElementById("resultDiv").appendChild(this['link'+i]);
					i++;
					  
  					  this['image'+i] = document.createElement("IMG");
   					  this['image'+i].setAttribute("src", finalResArray[i]);
   					  document.getElementById("resultDiv").appendChild(this['image'+i]);
  					  

				}

			}


			
  			//resets variables so the user can reuse the program
   			result = 0;
   			indexOfNewArray = 0;
   			finalResArray = [];
    }
				
			
			
			
		
//createResultsArray(arrayType); creates the new array with the results -> Creates the output.
		function createResultsArray(arrayType){
					//Goes through all the objects.
					//If the object at index i matches the user's chosen font,
					//we get the index to start copying from that to the results array.
				
					for (var i = 0; i < arrayType.length; i++){
						if (arrayType[i].name == fontInput){
							index = i;
							//console.log(index);
							
						}

					}

					//Creates array with each object quality as a component = Array with all the results.
					var ind = 0;
					for (var i = index + 1; i<arrayType.length - 1; i++){
			
						for(let key in arrayType[i]){
							finalResArray[ind] = arrayType[i][key];
							ind++;
						
					}

						}

					ind = 0;




				
		
	}

		function algo(){ //Change this name once I get rid of the original results function.
		

			if(fontCharacteristic == "formal"){ //If the user looks for more formal fonts, we create the serious results array 


				createResultsArray(seriousnessArray);
				results(seriousnessArray);
				
			} else if (fontCharacteristic == "informal"){ //If the user looks for more formal fonts, we create the informal results array 

				createResultsArray(informalArray);
				results(informalArray);

			}else if (fontCharacteristic == "serif"){ //If the user looks for more formal fonts, we create the serif results array 

				createResultsArray(serifArray);
				results(serifArray);

				
			} else if (fontCharacteristic == "minimal"){ //If the user looks for more formal fonts, we create the sans serif results array 

				createResultsArray(sansSerifArray);
				results(sansSerifArray);

			
			}else{
				//nothing.
			}


	}

	function resetDiv(){
		document.getElementById("resultDiv").innerHTML = "";
	}
