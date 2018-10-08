function ZodiacChecker(){
    
    var day = document.getElementById('zodiac_day').value;
    var month = document.getElementById('zodiac_month').value;
    if(month == 1 && day>=20 || month == 2 && day<=18){
        document.getElementById("pic").innerHTML = "<img src='images/vodoley.png'>"
        document.getElementById("zodiac").innerHTML = ("Водолей (лат. Aquarius) — одиннадцатый знак зодиака, соответствующий сектору эклиптики от 300° до 330° \
            считая от точки весеннего равноденствия; постоянный знак тригона Воздух. Обычно изображается в виде человека мужского пола с кувшином, льющего воду");
    }
    else if (month==2 && day>=19 || month==3 && day<=20){
        document.getElementById("pic").innerHTML = "<img src='images/ribi.png'>"
        document.getElementById("zodiac").innerHTML = ("Рыбы (лат. Pisces) — двенадцатый знак зодиака, соответствующий сектору эклиптики от 330° до 360°, считая от \
            точки весеннего равноденствия; мутабельный знак тригона Вода. Управляющая планета Рыб — Нептун.");
    }
    else if (month==3 && day>=21 || month==4 && day<=19){
        document.getElementById("pic").innerHTML = "<img src='images/oven.png'>"
        document.getElementById("zodiac").innerHTML = ("О́ве́н[1][2] (лат. Aries) — первый знак зодиака, соответствующий сектору эклиптики от 0° до 30°,\
            считая от точки весеннего равноденствия; кардинальный знак тригона Огонь.");
    }
    else if (month==4 && day>=20 || month==5 && day<=20){
        document.getElementById("pic").innerHTML = "<img src='images/telec.png'>"
        document.getElementById("zodiac").innerHTML = ("Теле́ц (лат. Taurus) — второй знак зодиака, соответствующий сектору эклиптики от 30° до 60°, считая\
            от точки весеннего равноденствия, и созвездию Телец; постоянный знак тригона Земля.");
    }
    else if (month==5 && day>=21 || month==6 && day<=21){
        document.getElementById("pic").innerHTML = "<img src='images/bliznec.png'>"
        document.getElementById("zodiac").innerHTML = ("Близнецы (лат. Gemini) — третий знак зодиака. Следует после Тельца, соответствующий сектору эклиптики от 60° до 90°,\
            считая от точки весеннего равноденствия; мутабельный знак тригона Воздух.");
    }
    else if (month==6 && day>=22 || month==7 && day<=22){
        document.getElementById("pic").innerHTML = "<img src='images/rak.png'>"
        document.getElementById("zodiac").innerHTML = ("Рак (лат. Cancer) — четвёртый знак зодиака, соответствующий сектору эклиптики от 90° до 120°, считая от точки весеннего равноденствия;\
            кардинальный знак тригона Вода. Правит четвёртым домом гороскопа.");
    }
    else if (month==7 && day>=23 || month==8 && day<=22){
        document.getElementById("pic").innerHTML = "<img src='images/leo.png'>"
        document.getElementById("zodiac").innerHTML = ("Лев (лат. Leo) — пятый знак зодиака, соответствующий сектору эклиптики от 120° до 150°, считая от точки весеннего равноденствия;\
            постоянный знак тригона Огонь.");
    }
    else if (month==8 && day>=23 || month==9 && day<=22){
        document.getElementById("pic").innerHTML = "<img src='images/deva.jpg'>"
        document.getElementById("zodiac").innerHTML = ("Дева (лат. Virgo) — шестой знак зодиака, соответствующий сектору эклиптики от 150° до 180°, считая от точки весеннего равноденствия;\
            мутабельный знак тригона Земля.");
    }   
    else if (month==9 && day>=23 || month==10 && day<=22){
        document.getElementById("pic").innerHTML = "<img src='images/vesi.jpg'>"
        document.getElementById("zodiac").innerHTML = ("Весы (лат. Libra) — седьмой знак зодиака, соответствующий сектору эклиптики от 180° до 210°, считая от точки весеннего равноденствия;\
            кардинальный знак тригона Воздух. Планетами-покровительницами знака Весов считаются Венера и Сатурн.");
    }
    else if (month==10 && day>=23 || month==11 && day<=21){
        document.getElementById("pic").innerHTML = "<img src='images/skorpion.png'>"
        document.getElementById("zodiac").innerHTML = ("Скорпион (лат. Scorpius) — восьмой знак зодиака, соответствующий сектору эклиптики от 210° до 240°, считая от точки весеннего равноденствия;\
            постоянный знак тригона Вода.");
    }
    else if (month==11 && day>=22 || month==12 && day<=21){
        document.getElementById("pic").innerHTML = "<img src='images/strelec.png'>"
        document.getElementById("zodiac").innerHTML = ("Стреле́ц (лат. Sagittarius) — девятый знак зодиака, соответствующий сектору эклиптики от 240° до 270°, считая от точки весеннего равноденствия;\
         мутабельный знак тригона Огонь.");
    }
    else if (month==12 && day>=22 || month==1 && day<=19){
        document.getElementById("pic").innerHTML = "<img src='images/kozerog.png'>"
        document.getElementById("zodiac").innerHTML = ("Козерог (лат. Capricornus) — десятый знак зодиака, соответствующий сектору эклиптики от 270° до 300°, считая от точки весеннего равноденствия;\
         кардинальный знак тригона Земля.");
    }
    }

