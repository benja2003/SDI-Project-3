// JS Data Structure
// Author: Elizabeth Adcock
// Data File
// Created on: 10/11/2012	

// an Object of JSON data

/* 
The data in this file represent those shoppers who have signed up early for the sales event.  This 
file only contains ID, name and age. For the lab purpose it does not contain all the real life data items.
*/

var json = {
	"buyers" : {
		"1" : {
			"id": 1,
			"name": "Bettie Rivard", 
			"age": 30,
			"payment" : { type : "Visa", limit : 100, spending : "credit"} 
		},

		"2" : {
			"id": 2,
			"name": "Alyssa Adcock", 
			"age": 10,
			"payment" : { type : "Cash", limit : 30, spending : "cash"} 
		},

		"3" : {
			"id": 3,
			"name": "Nico Vietts", 
			"age": 21,
			"payment" : { type : "Mastercard", limit : 1000, spending : "credit"} 
		},

		"4" : {
			"id": 4,
			"name": "Jeff Gable",
			"age": 34,
			"payment" : { type : "Cash", size : 50, spending : "cash"} 
		}
	}
};


// an Array of JSON data
var json2 = {
	"buyers": [
		{
			"id": 1,
			"name": "Bettie Rivard", 
			"age": 30
		},
		{
			"id": 2,
			"name": "Alyssa Adcock", 
			"age": 10
		},
		{
			"id": 3,
			"name": "Nico Vietts", 
			"age": 21
		},
		{
			"id": 4,
			"name": "Jeff Gable", 
			"age": 34
		}
	]
};