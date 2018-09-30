function ZodiacChecker(){
    
    var day = document.getElementById('zodiac_day').value;
    var month = document.getElementById('zodiac_month').value;
    if(month == 1 && day>=20 || month == 2 && day<=18){
        document.getElementById("vodoley").style.display = "block";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==2 && day>=19 || month==3 && day<=20){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "block";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==3 && day>=21 || month==4 && day<=19){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "block";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==4 && day>=20 || month==5 && day<=20){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "block";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==5 && day>=21 || month==6 && day<=21){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "block";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==6 && day>=22 || month==7 && day<=22){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "block";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==7 && day>=23 || month==8 && day<=22){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "block";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==8 && day>=23 || month==9 && day<=22){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "block";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }   
    else if (month==9 && day>=23 || month==10 && day<=22){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "block";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==10 && day>=23 || month==11 && day<=21){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "block";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==11 && day>=22 || month==12 && day<=21){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "block";
        document.getElementById("kozerog").style.display = "none";
    }
    else if (month==12 && day>=22 || month==1 && day<=19){
        document.getElementById("vodoley").style.display = "none";
        document.getElementById("ribi").style.display = "none";
        document.getElementById("oven").style.display = "none";
        document.getElementById("telec").style.display = "none";
        document.getElementById("bliznec").style.display = "none";
        document.getElementById("rak").style.display = "none";
        document.getElementById("lev").style.display = "none";
        document.getElementById("deva").style.display = "none";
        document.getElementById("vesi").style.display = "none";
        document.getElementById("skorpion").style.display = "none";
        document.getElementById("strelec").style.display = "none";
        document.getElementById("kozerog").style.display = "block";
    }
    }
