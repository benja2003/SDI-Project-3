// Author: Elizabeth Adcock
// Created for: SDI (SDI 1210) : Project 3 / Deliverable 3
// Created on: 10/11/2012


// Define & set Global variables for this JS file
var	niceShoppingDay = true,
	idealShoppingDay = false,
	personObject = {},
	idealShoppigTime = 14,  //using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	waitTime = 0,
	shoppers = [], 
	slang1 = "I hate shopping",
	slangPhase = ""
;


//Define the SHOPPING OBJECT
var shopping = {						
		shoppingDay: true,
		storesOpen: false,
		personObj: {},
		totalWaitTime: 0,
		shoppingList: [],
		numOfRegistersOpen: 4,	//X is number of registers open.
		numOfShoppersInStore: 0,
		nextShopper: "",
		slang2: "I should have sent my wife to do this",

		// (Method Function): Check to see if it is a nice shopping day or not
		goodShoppingDay: function (goodDay) { 
			if (goodDay === true) {   
				console.log ("(Method Function / Returned Boolean): It is a great day to go shopping!!");
				return (true);
			}else {
				console.log ("(Method Function / Returned Boolean): It is NOT a great day for shopping, too busy.");
				return (false);
			}
		},  //end goodShoppingDay function


		// (Method Function): Check to see if it will be a good shopping day and check to see if the "stores open".
		goodShopDay: function () { 
			shop.storeOpenTrue (true);   //Calls a "Method Mutator". Set the storeOpen object property
			console.log ("(Method Mutator): Set the property storeOpenTrue to always be true");
			if (this.shoppingDay && this.storeOpen) {   
				console.log ("(Method Function): It is a great day for Christmas shopping because the store is open and they are not very busy!");
				return (true);
			}else {     
				console.log ("(Method Function): It is NOT a great day to shop because the stores are not open.");
				return (false);
			}
		},  //end goodShopDay function


		// (Method Mutator): Set the storeOpen object property
		storeOpenTrue: function (boolean) { 
			this.storeOpen = boolean;
		},  //end storeOpenTrue function


		//(JSON Object Argument, Returns a Javascript Object): Extracting the JSON data and returning a Javascript object	
		extractEarlierShoppers: function (json) {			
			for (var key in json.buyer){
				var	competitor = json.buyer[key];
					this.personObj[key] = new Object (); 
					this.personObj[key].id = buyer.id;
					this.personObj[key].name = buyer.name;
					this.personObj[key].age = buyer.age;
					this.personObj[key].payment = buyer.payment;
			};			
			return (this.personObj);  //returns the person Object
		},  //end extractEarlierShoppers function


		//(Method Function) : Add one new early buyer to the personObject
		addToEarlyShopper: function (personObject, id, name, age) { 
			personObject[id] = new Object ();
			personObject[id].id = id;
			personObject[id].name = name;
			personObject[id].age = age;
			return (personObject);
		},	//end addToEarlyShopper function	


		//(Method Procedure): Determine if it is the ideal time of day to go out and shop
		shopTime: function (timeOfDay) { 
			var	currentTime = 9,	//for this lab this should be less then "timeOfDay". Using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...			
				timeRemaining = 0
			;

			console.log ("((Method Procedure): Below is the Output From The While loop): Listing shows the number of hrs remaining before the shopping is at it's best.");
			this.totalWaitTime = timeOfDay - currentTime;  //Math

			while (currentTime < timeOfDay) {
				timeRemaining = this.totalWaitTime;
				console.log ("Current time is " + currentTime +":00.  The ideal time to shop is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till shopping");
				currentTime = currentTime + 1;  //Math
			};
			console.log ("Time to go shopping!");
		},  //end shopTime function


		// (Method Function): Return Number
		waitTime: function () { 
			return (this.totalWaitTime);
		},  //end waitTime function


		// (Method Function): extract the list of early buyer for an object.
		getEarlyBirdShoppers: function (personObject) {
			for (var key in personObject){
				this.shoppingList.push(personObject[key].name);
			};			
			return (this.shoppingList);  //returns the array of Shoppers for the early bird shoppers.
		},  //end getEarlyBirdShoppers function	


		//(Method Procedure): Add Shoppers to the Array
		addBuyers: function (shoppingList, shopperName) { 
			shoppingList.push(buyerName);
		}, //end addBuyer


		//(Method Accessor): Get the number of shoppers in the store	
		getNumOfShoppers: function (numShoppers) {
			return (numShoppers.length);
		}, //end getNumOfShoppers


		//(Method Accessor): Get the next buyer's name who is in line cash out
		getBuyer: function (shoppersArray) { 
			return (shoppersArray[0]);
		}, 	//end getBuyer	


		//(Array Function / Returned Array): Shoppers to cash out in the store.  Returns the number of remaining customers waiting to cash out.
		cashOut: function (shopper) { 
			var numOfShoppers = 2,
				percentOfRegistersOpen = 1,
				x = 1,
				totalNumOfShoppers = 2,
				i = 1
			;

			//Call a "Method Procedure" : Pushes new shoppers into the end of an array.
			this.shoppingList = shopper;
			shoppers.addBuyer(this.shopperList, "Robyn Darby");
			shoppers.addBuyer(this.shopperList, "Tracy Stavninski");
			console.log ("(Method Procedure): added 2 more buyers: This represents shoppers who are shopping the day of a sale.");
			console.log (this.shoppingList);

			//Call a "Method Accessor" : get the number of shoppers in the object array of buyer names.
			console.log ("(Menthod Accessor): Shoppers's getting deals on SALE.  A SALE is X number of items on sale.");
			this.numOfBuyers = shopping.getNumOfShoppers (this.shopperList);
			console.log ("There are " + this.numOfRegistersOpen + " registers open today, and there are " + this.numOfBuyers + " shoppers ready to cash out. " + totalNumOfShoppers + " registers open and shoppers listed below:");

			while (x <= totalNumOfShoppers) {   //loops through the number of SALEs we want to run sample date on
				console.log ("SET OF SALES: " + x);
				if (this.shoppersList.length <= this.numOfRegistersOpen) {   //heck if there are less shoppers then registers open
					while (i <= this.numOfRegistersOpen) {
						if (numOfShoppers <= this.shoppersList.length) {
							percentOfRegistersOpen = (((numOfShoppers / this.numOfRegistersOpen).toFixed(2)) * 100);  //Math calculation
							console.log (this.shopperList [0] + " gets checked out " + i + ". " + percentOfRegistersOpen + "% of the shoppers in the store for the SALE have now cashed out." );
							this.shopperList.push(this.shopperListShopper[0]);
							this.shopperList.shift();
						}else {	
							percentOfRegistersOpen = (((numOfShoppers / this.numOfRegistersOpen).toFixed(2)) * 100);  //Math calculation
							console.log ("NO SHOPPERS cashing out " + i + ". " + percentOfRegistersOpen + "% of the shoppers in the store for the SALE have now cashed out." );
						};
						i++;
						numOfShoppers++;
					};					

				}else {
					while (i <= this.numOfRegistersOpen) {
						percentOfRegistersOpen = (((numOfShoppers / this.numOfRegistersOpen).toFixed(2)) * 100);  //Math Calculation
						console.log (this.shoppersList [0] + " cashed out " + i + ". " + percentOfRegistersOpen + "% of the shoppers in the store for the SALE have now cashed out." );
						this.shopperList.push(this.shopperList [0]);
						this.shopperList.shift();
						i++;
						numOfShoppers++;
					};
				};
				numOfShoppers = 2;
				percentOfRegistersOpen = 1;
				i = 1;
				x++;
			};

			//Calls a "Method Accessor": Gets the next shopper in line to cash out at the next register.
			this.nextShopper = shopper.getBuyer(this.shopperList);
			console.log ("(Method Accessor) " + this.nextShopper + " will be the next shopper to cash out at the next register available.");

			return (this.shopperList);	
		},  //end cashOut function


		//(Method Function) Concatenated slang words.
		slangVerse: function (phase1) { 
			var phase = "";

			phase = "(Method Function : Return String): Why do men shoppers's have to complain?  They say things like " + phase1 + ", " + this.phase2 + ", etc...";
			return (phase);	
		}  //end slangVerse function
};


// MAIN BODY AREA BELOW

//Conditional Statement :: Calls a "Method Function" :: Returns a Boolean
if (shopping.goodShoppingDay (niceShoppingDay)) {

	//Calls a "Method Function" :: Returns Boolean
	idealShoppingDay = shopping.goodShoppingDay ();
	if (idealShoppingDay) {
		console.log ("(Returned Boolean):Is it a good day for some shopping: ", idealShoppingDay);

		//Calls two "Method Functions" ::  Returned Object :: Extract the Buyers from a JSON Object, and return a Javascript object. Then add one shopper to the object
		personObject = shopping.extractEarlierShoppers(json);
		personObject = shopping.addToEarlyBirdShoppers(personObject, 5, "Bill Adcock", 18);
		console.log ("((Method Function / Returned Object) : JSON Object Argument / Returned an Object with a new buyer added): ", personObject);

		//Calls a "Method Procedure"
		shopping.shoppingTime(idealShoppingTime);

		//Calls a "Method Function" : Returns Number
		waitTime = shopping.waitTime();
		console.log ("(Method Function / Returned Number): The total hours the shopper's had to wait before going cashing out: ", waitTime +" hrs.");

		//Calls a "Method Function" : (Creates an array, from an object, of those surfers who signed up early for the sales shopping event
		shopper = shopping.getEarlyBirdShoppers (personObject);
		console.log ("(Method Function / Return Array): Created an ARRAY, from an OBJECT, of those shoppers who signed up early for the sales shopping event.  See array below.");
		console.log (shoppers);

		//Calls a "Method Function" :: Returned Array
		shoppers = shopping.cashOut(shoppers);
		console.log ("(Method Function / Returned Array): Here is a list of buyers in the sales event: ", shoppers);

		//Calls a "Method Function" :: Returned String
		slangPhase = shoppers.slangVerse(slang1);
		console.log (slangPhase);

	};
};