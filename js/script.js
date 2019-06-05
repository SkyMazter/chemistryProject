$("#start").click(function(){
    window.open("game.html","_self");
});
//Game Code
let groupNumber = 1;
let qNumber = 0;
let y = 0;

$("#yes").click(function(){
    $("img").attr("src","https://i.redd.it/4s45dyyp0tz01.png");
    y= y + 1;
    gameLogic();
    return  y 
    

});


$("#no").click(function(){
    $("img").attr("src","https://i.imgur.com/UOCEbLn.png");
    if(y === 1){
        increase_qNumber();
        
    }else if(y===2){
        y =  y - 1
         
    }

   gameLogic();
   console.log(qNumber);
   return qNumber,y
   
});

const questions = {
    groupOne:[
        "Is it in the sun and stars?",
        "Is it used in batteries?",
        "Is it used to make table salt?",
        "Is it found in bananas?",
        "Is your element used for gps?",
        "Can it be used in Atomic Clocks?",
        "Is it used for Laser atom traps?"
    ],
    groupTwo:[
        "Is it found in emeralds?",
        "Is it used in flares?",
        "Does it make your Bones Stronger?",
        "Is it used for FireWorks?",
        "Is it used in X-Ray Machines?",
        "Is it used for Luminouse watches?"
    ],
    groupThree:[
        "Is it used for bicycle frames?",
        "Does it give color to tv?"
    ],
    groupFour:[
        "Is your element the strongest lightweight metal?",
        "Is this elemant commonly used for chemical pipelines?",
        "Is it used for Nuclear Submarines?",
    ],
    groupFive:[
        "Does it make a strong resilient steel?",
        "Is it commonly used in Maglev Trains?",
        "Is it used for artificial joints?",
    ],
    groupSix:[
        "Is it commonly used to make stainless steel?",
        "Do people use it to make cutting tools?",
        "Does it hae the highest melting point of any metal?",
    ],
    groupSeven:[
        "Is it commonly used for fertalizers?",
        "Is it the first man made element?",
        "Is it used for rocket engines?",
    ],
    groupEight:[
        "Can it be cound in your blood and the earth's core?",
        "Is it used for electrical switches?",
        "Is it used for fingerprint powder?",
    ],
    groupNine:[
        "Is it commonly used for magnets?",
        "Is it used for searchlights?",
        "Is it used to make spark plugs?",
    ],
    groupTen:[
        "Is it used to make the five cent coins?",
        "Does it help with pollution control?",
        "Do people use it for jewelry?",
    ],
    groupEleven:[
        "Do people commonly use it for electrical wires?",
        "Do people use it for second place medals and trophies?",
        "Is it commonly used for expensive jewelry?",
    ],
    groupTwelve:[
        "Is it used to make brass instruments?",
        "Is it used to make paint?",
        "Is it used for Thermometers?",
    ],
    groupThirteen:[
        "Is it used for sports equipment?",
        "Can u find it in the kitchen as foil?",
        "Is it used for LEDs?",
        "Is it used for LCDs?",
        "Is it used for lowtemp thermometers?",
    ],
    groupFourteen:[
        "Is its isotope used to determine the age of fossils?",
        "Is it commonly used for breast implants?",
        "Is it used for semi-conductors?",
        "Is it used to make cans?",
        "Is it commonly found in NYC'S water supply?",
    ],
    groupFifteen:[
        "Is it found in protein?",
        "Is it found in our bones?",
        "Is it used to make poison?",
        "Is it found in car batteries?",
        "Is it used for fire sprinklers?",
    ],
    groupSixteen:[
        "Do we breath it in every day and need it to live?",
        "Does it smell like rotten eggs?",
        "Is it found in copiers?",
        "Is it used for electric cooler?",
        "Is it used for anti-static brushe?s",
    ],
    groupSeventeen:[
        "Is it used for our tooth paste?",
        "Do people use it to clean pools?",
        "Is it used for Photo film?",
        "Is it commonly found in disinfectants?",
        "Is it in Radioactive Medicine?",
    ],
    groupEightteen:[
        "Does it maka Ballons float?",
        "Is it used for neon signs?",
        "Is it used to make light bulbs?",
        "Is it used to make flashlights?",
        "Is it used for high intensity lamps?",
        "Is it used for surgical implants?",
    ],
}
const elements = {
    groupOne: [
        "Hydrogen",
        "Lthium",
        "Sodium",
        "Potassium",
        "Rubidium",
        "Cesium",
        "Francium"
    ],
    groupTwo:[
        "Beryllium",
        "Magnesium",
        "Calcium",
        "Strontium",
        "Barium",
        "Radium"
    ],
    groupThree:[
        "Scandium",
        "Yttrium"
    ],
    groupFour:[
        "Titanium",
        "Zirconium",
        "Hafnium",
    ],
    groupFive:[
        "Vanadium",
        "Niobium",
        "Tantalum",
    ],
    groupSix:[
        "Chromium",
        "Molybdenum",
        "Tungsten",
    ],
    groupSeven:[
        "Manganese",
        "Technetium",
        "Rhenium",
    ],
    groupEight:[
        "Iron",
        "Ruthenium",
        "Osmium",
    ],
    groupNine:[
        "Cobalt",
        "Rhodium",
        "Iridium",
    ],
    groupTen:[
        "Nickel",
        "Palladium",
        "Platinum",
    ],
    groupEleven:[
        "Copper",
        "Silver",
        "Gold",
    ],
    groupTwelve:[
        "Zinc",
        "Cadmium",
        "Murcury",
    ],
    groupThirteen:[
        "Boron",
        "Aluminum",
        "Gallium",
        "Indium",
        "Thallium"
    ],
    groupFourteen:[
        "Carbon",
        "Silicon",
        "Germanium",
        "Tin",
        "Lead",
    ],
    groupFifteen:[
        "Nitrogen",
        "Phosphorus",
        "Arsenic",
        "Antimony",
        "Bismuth",
    ],
    groupSixteen:[
        "Oxygen",
        "Sulfur",
        "Selenium",
        "Tellurium",
        "Polonium",
    ],
    groupSeventeen:[
        "Flouride",
        "Chlorine",
        "Bromine",
        "Iodine",
        "Astatine",
    ],
    groupEightteen:[
        "Helium",
        "Neon",
        "Argon",
        "Krypton",
        "Xenon",
        "Radon",
    ],
} 
function gameLogic(){
    
    if(y===0){
        groupNumber = groupNumber + 1;
        $("#question").html("Is it in group "+ groupNumber + "?");
        if(groupNumber ===19){
            groupNumber = 0
            return groupNumber
        }else{
        
        }
        return groupNumber
    }else{
        console.log(qNumber);
        
            if(groupNumber === 1){
                const arrayLength = questions.groupOne.length;

                $("#question").html(questions.groupOne[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupOne[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }

            }else if(groupNumber === 2){
                const arrayLength = questions.groupTwo.length;
                
                $("#question").html(questions.groupTwo[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupTwo[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }

            }else if(groupNumber === 3){
                const arrayLength = questions.groupThree.length;
                
                $("#question").html(questions.groupThree[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupThree[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }

            }else if(groupNumber === 4){
                const arrayLength = questions.groupFour.length;
                
                $("#question").html(questions.groupFour[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupFour[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }

            }else if(groupNumber === 5){
                const arrayLength = questions.groupFive.length;
                
                $("#question").html(questions.groupFive[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupFive[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 6){
                const arrayLength = questions.groupSix.length;
                
                $("#question").html(questions.groupSix[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupSix[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 7){
                const arrayLength = questions.groupSeven.length;
                
                $("#question").html(questions.groupSeven[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupSeven[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 8){
                const arrayLength = questions.groupEight.length;
                
                $("#question").html(questions.groupEight[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupEight[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 9){
                const arrayLength = questions.groupNine.length;
                
                $("#question").html(questions.groupNine[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupNine[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 10){
                const arrayLength = questions.groupTen.length;
                
                $("#question").html(questions.groupTen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupTen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 11){
                const arrayLength = questions.groupEleven.length;
                
                $("#question").html(questions.groupEleven[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupEleven[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 12){
                const arrayLength = questions.groupTwelve.length;
                
                $("#question").html(questions.groupTwelve[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupTwelve[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 13){
                const arrayLength = questions.groupThirteen.length;
                
                $("#question").html(questions.groupThirteen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupThirteen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 14){
                const arrayLength = questions.groupFourteen.length;
                
                $("#question").html(questions.groupFourteen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupFourteen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 15){
                const arrayLength = questions.groupFifteen.length;
                
                $("#question").html(questions.groupFifteen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupFifteen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 16){
                const arrayLength = questions.groupSixteen.length;
                
                $("#question").html(questions.groupSixteen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupSixteen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 17){
                const arrayLength = questions.groupSeventeen.length;
                
                $("#question").html(questions.groupSeventeen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupSeventeen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }else if(groupNumber === 18){
                const arrayLength = questions.groupEightteen.length;
                
                $("#question").html(questions.groupEightteen[qNumber]);
                if(y === 2){
                    $("#question").html(" Is your element is "+ elements.groupEightteen[qNumber] +" ?");
                    
                }else if(y === 3){
                    $("#yes").hide();
                    $("#no").hide();
                    $("#question").html("Yayyyy");
                }

                if(qNumber === arrayLength -1){
                    qNumber = -1
                    return qNumber
                }
                
            }
    }
}   
function increase_qNumber(){
    qNumber = qNumber + 1
    return qNumber
}


$("#exit").click(function(){
    $("#question").html("Good Bye");
    $("#yes").hide();
    $("#no").hide();
    $("#exit").html("Okay...");
    $("img").attr("src","https://gifimage.net/wp-content/uploads/2018/04/konosuba-megumin-gif-3.gif");
    $("#exit").click(function(){
        window.open("index.html","_self");
    });
});