var currentAudio = null;
var currentButton = null;

var numberOfSurah = document.querySelectorAll(".Surah").length;
console.log(numberOfSurah);

//A for loop runs through each "Surah" element.
for (var i = 0; i < numberOfSurah; i++) {
    document.querySelectorAll(".Surah")[i].addEventListener("click", function() { //An event listener is added to each "Surah" element to execute a function when clicked.
        //alert("BismAllah");

        //buttonInnerHTML stores the HTML content of the clicked button.
        var buttonInnerHTML = this.innerHTML;

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentButton) {
                currentButton.classList.remove("rgbEffect");
                currentButton.classList.remove("pausedEffect");
            }
        }
        // Here starts the switch case, we can literally do it the easy way with "ForEach Parameter" //
        // but i want to play around with switch case function (as i am a beginner) //

        switch (buttonInnerHTML) {
// 1. Surah Al-Faatihah
            case "1. Al-Faatihah":
                currentAudio = new Audio("sounds/Alfatiha.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
                break;
// 2. Surah Al-Baqarah
            case "2. Al-Baqarah":
                currentAudio = new Audio("sounds/002-al-baqarah.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;    
// 3. Surah Al-Imran
            case "3. Al-Imran":
                currentAudio = new Audio("sounds/003-al-imran.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;  
// 4. Surah Al-Nisa
            case "4. An-Nisaa":
                currentAudio = new Audio("sounds/004-an-nisa.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 5. Surah Al-Maida
            case "5. Al-Maa'idah":
                currentAudio = new Audio("sounds/005-al-maidah.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
 // 6. Surah Al-Anam
            case "6. Al-An'aam":
                currentAudio = new Audio("sounds/006-al-anam.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 7. Surah Al-araf
            case "7. Al-Aaraaf":
                currentAudio = new Audio("sounds/007-al-araf.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
// 8. Surah Al-Anfal
            case "8. Al-Anfaal":
                currentAudio = new Audio("sounds/008-al-anfal.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
// 9. Al-Taubah           
            case "9. At-Tawbah":
                currentAudio = new Audio("sounds/009-at-taubah.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 10. Al-Taubah           
            case "9. Yoonus":
                currentAudio = new Audio("sounds/010-yunus.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
// 11. Hood           
            case "11. Hood":
                currentAudio = new Audio("sounds/011-hud.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 12. Al-Yusuf           
            case "12. Yoosuf":
                currentAudio = new Audio("sounds/012-yusuf.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 13. Ar-Raad          
            case "13. Ar-Raad":
                currentAudio = new Audio("sounds/013-ar-rad.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
// 14. Ibraheem         
            case "14. Ibraheem":
                currentAudio = new Audio("sounds/014-ibrahim.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//15. Al-Hijr       
            case "15. Al-Hijr":
                currentAudio = new Audio("sounds/015-al-hijr.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
//16. An-Nahl      
            case "16. An-Nahl":
                currentAudio = new Audio("sounds/016-an-nahl.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;  
//17. Al-Israa      
            case "17. Al-Israa":
                currentAudio = new Audio("sounds/017-al-isra.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//17. Al-Israa      
            case "17. Al-Israa":
                currentAudio = new Audio("sounds/017-al-isra.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//18. Al-Kahf      
            case "18. Al-Kahf":
                currentAudio = new Audio("sounds/018-al-kahf.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
//19. Maryam      
            case "19. Maryam":
                currentAudio = new Audio("sounds/019-maryam.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//20. TaaHaa      
            case "20. TaaHaa":
                currentAudio = new Audio("sounds/020-ta-ha.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//21. Al-Anbiyaa            
            case "21. Al-Anbiyaa":
                currentAudio = new Audio("sounds/021-al-anbiya.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//22. Al-Hajj            
            case "22. Al-Hajj":
                currentAudio = new Audio("sounds/022-al-hajj.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//23. Muminoon           
            case "23. Muminoon":
                currentAudio = new Audio("sounds/023-al-muminun.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//24. An-Noor         
            case "24. An-Noor":
                currentAudio = new Audio("sounds/024-an-nur.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//25. Al-Furqaan       
            case "25. Al-Furqaan":
                currentAudio = new Audio("sounds/025-al-furqan.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//26. Ash-Shuara      
            case "26. Ash-Shuara":
                currentAudio = new Audio("sounds/026-ash-shuara.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break; 
//27. An-Naml     
            case "27. An-Naml":
                currentAudio = new Audio("sounds/027-an-naml.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//28. Al-Qasas     
            case "28. Al-Qasas":
                currentAudio = new Audio("sounds/028-al-qasas.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//29. Al-Ankabot     
            case "29. Al-Ankabot":
                currentAudio = new Audio("sounds/029-al-ankabut.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//30. Ar-Room    
            case "30. Ar-Room":
                currentAudio = new Audio("sounds/030-ar-rum.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//31. Luqmaan   
            case "31. Luqmaan":
                currentAudio = new Audio("sounds/031-luqman.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//32. As-Sajdah  
            case "32. As-Sajdah":
                currentAudio = new Audio("sounds/032-as-sajdah.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//33. Al-Ahzaab  
            case "33. Al-Ahzaab":
                currentAudio = new Audio("sounds/033-al-ahzab.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//34. Sabaa  
            case "34. Sabaa":
                currentAudio = new Audio("sounds/034-saba.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//35. Faatir 
            case "35. Faatir":
                currentAudio = new Audio("sounds/035-fatir.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//36. Yaa Seen
            case "36. Yaa Seen":
                currentAudio = new Audio("sounds/036-ya-sin.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//37. As-Saaffaat
            case "37. As-Saaffaat":
                currentAudio = new Audio("sounds/037-as-saffat.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//38. Saad 
            case "38. Saad ":
                currentAudio = new Audio("sounds/038-sad.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//39. Az-Zumar
            case "39. Az-Zumar":
                currentAudio = new Audio("sounds/039-az-zumar.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//40. Ghaafir
            case "40. Ghaafir":
                currentAudio = new Audio("sounds/040-ghafir.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//41. Fussilat
            case "41. Fussilat":
                currentAudio = new Audio("sounds/041-fussilat.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//42. Ash-Shoraa
            case "42. Ash-Shoraa":
                currentAudio = new Audio("sounds/042-ash-shura.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//43. Az-Zukhruf
            case "43. Az-Zukhruf":
                currentAudio = new Audio("sounds/043-az-zukhruf.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//44. Ad-Dukhan
            case "44. Ad-Dukhan":
                currentAudio = new Audio("sounds/044-ad-dukhan.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//45. Al-Jaathiyah
            case "45. Al-Jaathiyah":
                currentAudio = new Audio("sounds/045-al-jathiyah.mp3");
                currentAudio.play();
                currentButton = this;
                currentButton.classList.add("rgbEffect");
            break;
//46. Al-Ahqaaf           
            case "46. Al-Ahqaaf":
                currentAudio = new Audio("sounds/046-al-ahqaf.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//47. Muhammad           
            case "47. Muhammad":
                currentAudio = new Audio("sounds/047-muhammad.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//48. Al-Fat-h          
            case "48. Al-Fat-h":
                currentAudio = new Audio("sounds/048-al-fath.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//49. Al-Hujuraat         
            case "49. Al-Hujuraat":
                currentAudio = new Audio("sounds/049-al-hujurat.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//50. Qaaf         
            case "50. Qaaf":
                currentAudio = new Audio("sounds/050-qaf.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//51. Qaaf         
            case "51. Ad-Dhāriyāt":
                currentAudio = new Audio("sounds/051-adh-dhariyat.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//52. At-Tūr         
            case "52. At-Tūr":
                currentAudio = new Audio("sounds/052-at-tur.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//53. An-Najm         
            case "53. An-Najm":
                currentAudio = new Audio("sounds/053-an-najm.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//54. Al-Qamar        
            case "54. Al-Qamar":
                currentAudio = new Audio("sounds/054-al-qamar.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//55. Ar-Rahmān       
            case "55. Ar-Rahmān":
                currentAudio = new Audio("sounds/055-ar-rahman.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//55. Ar-Rahmān       
            case "55. Ar-Rahmān":
                currentAudio = new Audio("sounds/055-ar-rahman.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//56. Al-Wāqiah      
            case "56. Al-Wāqiah":
                currentAudio = new Audio("sounds/056-al-waqiah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//57. Al-Hadīd      
            case "57. Al-Hadīd":
                currentAudio = new Audio("sounds/057-al-hadid.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//58. Al-Mujādalah    
            case "58. Al-Mujādalah":
                currentAudio = new Audio("sounds/058-al-mujadilah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//58. Al-Mujādalah    
            case "58. Al-Mujādalah":
                currentAudio = new Audio("sounds/058-al-mujadilah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//59. Al-Hashr    
            case "59. Al-Hashr":
                currentAudio = new Audio("sounds/059-al-hashr.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//60. Al-Mumtahinh 
            case "60. Al-Mumtahinh":
                currentAudio = new Audio("sounds/060-al-mumtahanah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//61. As-Saff
            case "61. As-Saff":
                currentAudio = new Audio("sounds/061-as-saff.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//62. Al-Jumuah
            case "62. Al-Jumuah":
                currentAudio = new Audio("sounds/062-al-jumuah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//63. Al-Munafiqun
            case "63. Al-Munafiqun":
                currentAudio = new Audio("sounds/063-al-munafiqun.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//64. At-Taghabun
            case "64. At-Taghabun":
                currentAudio = new Audio("sounds/064-at-taghabun.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//65. At-Talaq
            case "65. At-Talaq":
                currentAudio = new Audio("sounds/065-at-talaq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//66. At-Tahreem
            case "66. At-Tahreem":
                currentAudio = new Audio("sounds/066-at-tahrim.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//67. Al-Mulk
            case "67. Al-Mulk":
                currentAudio = new Audio("sounds/067-al-mulk.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//68. Al-Qalam
            case "68. Al-Qalam":
                currentAudio = new Audio("sounds/068-al-qalam.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//69. Al-Haaqqa
            case "69. Al-Haaqqa":
                currentAudio = new Audio("sounds/069-al-haqqah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//70. Al-Ma'arij
            case "70. Al-Ma'arij":
                currentAudio = new Audio("sounds/070-al-maarij.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//71. Nuh
            case "71. Nuh":
                currentAudio = new Audio("sounds/071-nuh.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//72. Al-Jinn
            case "72. Al-Jinn":
                currentAudio = new Audio("sounds/072-al-jinn.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//73. Al-Muzammil
            case "73. Al-Muzammil":
                currentAudio = new Audio("sounds/073-al-muzammil.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//74. Al-Mudahthir
            case "74. Al-Mudahthir":
                currentAudio = new Audio("sounds/074-al-muddaththir.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//75. Al-Qiyamah
            case "75. Al-Qiyamah":
                currentAudio = new Audio("sounds/075-al-qiyamah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//76. Al-Insaan
            case "76. Al-Insaan":
                currentAudio = new Audio("sounds/076-al-insan.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//77. Al-Mursalaat
            case "77. Al-Mursalaat":
                currentAudio = new Audio("sounds/077-al-mursalat.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//78. An-Naba
            case "78. An-Naba":
                currentAudio = new Audio("sounds/078-an-naba.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//79. An-Naaziat
            case "79. An-Naaziat":
                currentAudio = new Audio("sounds/079-an-naziat.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//80. Abasa
            case "80. Abasa":
                currentAudio = new Audio("sounds/080-abasa.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//81. At-Takweer
            case "81. At-Takweer":
                currentAudio = new Audio("sounds/081-at-takwir.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//82. Al-Infitar
            case "82. Al-Infitar":
                currentAudio = new Audio("sounds/082-al-infitar.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//83. Al-Mutafifen
            case "83. Al-Mutafifen":
                currentAudio = new Audio("sounds/083-al-mutaffifin.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//84. Al-Inshiqaq
            case "84. Al-Inshiqaq":
                currentAudio = new Audio("sounds/084-al-inshiqaq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//85. Al-Burooj
            case "85. Al-Burooj":
                currentAudio = new Audio("sounds/085-al-buruj.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//86. At-Tariq
            case "86. At-Tariq":
                currentAudio = new Audio("sounds/086-at-tariq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//87. Al-A'laa
            case "87. Al-A'laa":
                currentAudio = new Audio("sounds/087-al-ala.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//88. Al-Ghashiyah
            case "88. Al-Ghashiyah":
                currentAudio = new Audio("sounds/088-al-ghashiyah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//89. Al-Fajr
            case "89. Al-Fajr":
                currentAudio = new Audio("sounds/089-al-fajr.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//90. Al-Balad
            case "90. Al-Balad":
                currentAudio = new Audio("sounds/090-al-balad.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//91. Ash-Shams
            case "91. Ash-Shams":
                currentAudio = new Audio("sounds/091-ash-shams.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//92. Al-Layl
            case "92. Al-Layl":
                currentAudio = new Audio("sounds/092-al-lail.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//93. Ad-Dhuha
            case "93. Ad-Dhuha":
                currentAudio = new Audio("sounds/093-ad-duha.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//94. Ash-Sharh
            case "94. Ash-Sharh":
                currentAudio = new Audio("sounds/094-ash-sharh.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//95. At-Teen
            case "95. At-Teen":
                currentAudio = new Audio("sounds/095-at-tin.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//96. Al-Alaq
            case "96. Al-Alaq":
                currentAudio = new Audio("sounds/096-al-alaq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;            
//96. Al-Alaq
            case "96. Al-Alaq":
                currentAudio = new Audio("sounds/096-al-alaq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//97. Al-Qadr
            case "97. Al-Qadr":
                currentAudio = new Audio("sounds/097-al-qadr.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//98. Al-Bayyinahh
            case "98. Al-Bayyinahh":
                currentAudio = new Audio("sounds/098-al-baiyyinah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//99. Az-Zalzalah
            case "99. Az-Zalzalah":
                currentAudio = new Audio("sounds/099-az-zalzalah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//100. Al-'Aadiyaat
            case "100. Al-'Aadiyaat":
                currentAudio = new Audio("sounds/100-al-adiyat.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//101. Al-Qaari'ah
            case "101. Al-Qaari'ah":
                currentAudio = new Audio("sounds/101-al-qariah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//102. At-Takathur
            case "102. At-Takathur":
                currentAudio = new Audio("sounds/102-at-takathur.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//103. Al-'Asr
            case "103. Al-'Asr":
                currentAudio = new Audio("sounds/103-al-asr.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//104. Al-Humazh
            case "104. Al-Humazh":
                currentAudio = new Audio("sounds/104-al-humazah.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//105. Al-Feel
            case "105. Al-Feel":
                currentAudio = new Audio("sounds/105-al-fil.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//106. Quraysh
            case "106. Quraysh":
                currentAudio = new Audio("sounds/106-quraish.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//107. Al-Maa'oon
            case "107. Al-Maa'oon":
                currentAudio = new Audio("sounds/107-al-maun.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//108. Al-Kawthar
            case "108. Al-Kawthar":
                currentAudio = new Audio("sounds/108-al-kauthar.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//109. Al-Kafiroon
            case "109. Al-Kafiroon":
                currentAudio = new Audio("sounds/109-al-kafirun.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//110. An-Nasr
            case "110. An-Nasr":
                currentAudio = new Audio("sounds/110-an-nasr.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//111. At-Tabbat
            case "111. At-Tabbat":
                currentAudio = new Audio("sounds/111-al-masad.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//112. Al-Ikhlaas
            case "112. Al-Ikhlaas":
                currentAudio = new Audio("sounds/112-al-ikhlas.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//113. Al-Falaq
            case "113. Al-Falaq":
                currentAudio = new Audio("sounds/113-al-falaq.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;
//114.Al-Naas
            case "113. Al-Falaq":
                currentAudio = new Audio("sounds/114-an-nas.mp3");
                currentAudio.play();
                currentButton= this;
                currentButton.classList.add("rgbEffect")
            break;

            default:
                console.error("Invalid Surah:", buttonInnerHTML);
        }
    });
}

// Function to handle audio control buttons
function handleAudio(action) {
    if (currentAudio) {     //var currentaudio = null;
        switch (action) { //Switch Case starts 
            case "play":
                currentAudio.play();
                if (currentButton) { // var currentButton = null;
                    currentButton.classList.remove("pausedEffect");
                    currentButton.classList.add("rgbEffect");
                }
                break;
            case "pause":
                currentAudio.pause();
                if (currentButton) {
                    currentButton.classList.remove("rgbEffect");
                    currentButton.classList.add("pausedEffect");
                }
                break;
            case "stop":
                currentAudio.currentTime = 0;
                currentAudio.pause();
                if (currentButton) {
                    currentButton.classList.remove("rgbEffect");
                    currentButton.classList.remove("pausedEffect");
                }
                break;
            default:
                console.error("Invalid action:", action);
        }
    } else {
        console.error("No audio loaded to control.");
    }
}

// Add event listeners to control buttons
document.getElementById("play").addEventListener("click", function() {
    handleAudio("play");
});

document.getElementById("pause").addEventListener("click", function() {
    handleAudio("pause");
});

document.getElementById("stop").addEventListener("click", function() {
    handleAudio("stop");
});