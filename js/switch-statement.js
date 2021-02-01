/* Agar bizda bitta variable bo'lsa, uni har xil qiymat bilan tekshirmoqchi bo'lsak switch-dan foydalanamiz: */

/* let weather = "rain";

if (weather === "sunny"){
  console.log("Sunny Weather");
}

else if (weather === "rain"){
  console.log("Rainy Weather");
}

else if (weather === "storm"){
  console.log("Storm Weather");
}

else if (weather === "cloudly"){
  console.log("Cloudly Weather");
}

else{
  console.log("This is not weather :) ");
} */

/* Tepadagi if va else if bilan qilingan uzun ishni biz switch bilan qisqa qilsak bo'ladi */
let weather = "sunny";

switch(weather){
  case "sunny":
  console.log("Sunny Weather");
  break; /* break bizga shundan pastiga ustmasin deyishimiz uchun aytyabmiz ya'ni switch-da qaysi qiymat 
  true bo'lsa ushandan pastdagilarni hammasini oladi shuning  uchun break bilan to'xtatib qo'yabmiz */
  
  case "rain":
  console.log("Rainy Weather");
  break;

  case "storm":
  console.log("Storm Weather");
  break;

  case "cloudly":
  console.log("Cloudly Weather");
  break;
}