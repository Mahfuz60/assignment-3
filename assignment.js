//problem-1:convert kilometerToMeter
//main function
function kilometerToMeter(kilometer) {
  if (kilometer >= 0) {
    //1 km=1000 meter
    var meter = kilometer * 1000;
  }

  //kilometer value are not negative
  else {
    //error message
    return " Distance value do not be negative";
  }

  return meter;
}

//problem-2:Electronics Product budgetCalculator
//main function

function budgetCalculator(watch, phone, laptop) {
  //Basic Price
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;
  //condition apply
  if (watch >= 0 && phone >= 0 && laptop >= 0) {
    watchPrice = 50 * watch;
    phonePrice = 100 * phone;
    laptopPrice = 500 * laptop;
    //total price all electronic products
    var totalPrice = watchPrice + phonePrice + laptopPrice;
  } else {
    //error message
    return "Sorry! Do not due to Product price";
  }

  return totalPrice;
}

//problem-3:hotelCost Calculation
//main function
function hotelCost(stayDay) {
  var roomCost = 0;

  if (stayDay >= 0) {
    //1 to 10 day roomCost

    if (stayDay <= 10) {
      roomCost = stayDay * 100;
    }
    //11 to 20 day roomCost
    else if (stayDay <= 20) {
      var firstTenDayCost = 10 * 100;
      var remaining = stayDay - 10;
      var secondTenDayCost = remaining * 80; //20% offer rate
      roomCost = firstTenDayCost + secondTenDayCost;
    }
    //20 to over day roomCost
    else if (stayDay) {
      var firstTenDayCost = 10 * 100;
      var secondTenDayCost = 10 * 80;
      var remaining = stayDay - 20;
      var lastDayCost = remaining * 50; //50% offer rate
      roomCost = firstTenDayCost + secondTenDayCost + lastDayCost;
    }
  }

  //You are do not due roomcost
  else {
    return "Sorry! You have Booking first this room ";
  }

  return roomCost;
}

//problem-4:Largest name search megaFriend list
//main function
function megaFriend(friendsName) {

  if (friendsName.length > 0  ) {

    var largestName = friendsName[0];
    for (var i = 1; i < friendsName.length; i++) {

      var element = friendsName[i];
      //compare value length
      if (largestName.length < element.length) {
        largestName = element;

        return largestName; //return result
      }
    }
    if(friendsName.length !="") {
      return "you have only name submit please!";
    }
    
  }
  
  
}
