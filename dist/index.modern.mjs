class a{constructor(a,r,t,i,h,n){this.year=void 0,this.month=void 0,this.day=void 0,this.hours=void 0,this.minutes=void 0,this.seconds=void 0,this.year=a,this.month=r,this.day=t,this.hours=i,this.minutes=h,this.seconds=n}}function r(a){return a.hours+a.minutes/60+a.seconds/3600}function t(a,r){return h(a.year,a.month,a.day,a.hours,a.minutes,a.seconds,r)}function i(a){const r=new Date(Date.UTC(a.year,a.month-1,a.day,a.hours,a.minutes,a.seconds));return Math.floor(r.getTime()/1e3)}function h(r,t,i,h,s,e,u){let o=h+s/60+e/3600+-u;for(;o<0;)o+=24,--i<1&&(--t<1&&(r--,t=12),i=n(r,t));for(;o>=24;)o-=24,++i>n(r,t)&&(i=1,++t>12&&(r++,t=1));const d=function(a){const r=Math.floor(a),t=60*(a-r),i=Math.floor(t);return{hours:r,minutes:i,seconds:Math.floor(60*(t-i))}}(o);return new a(r,t,i,d.hours,d.minutes,d.seconds)}function n(a,r){return 2===r?a%4==0&&a%100!=0||a%400==0?29:28:-1!=[4,6,9,11].indexOf(r)?30:31}function s(a,r,t,i,h,n){const s=Math.floor((14-r)/12),e=a+4800-s;let u=t+Math.floor((153*(r+12*s-3)+2)/5)+365*e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400)-32045;return u+=(i+(h+n/60)/60)/24-.5,u}function e(r){const t=Math.floor(r+.5),i=r+.5-t,h=Math.floor((t-1867216.25)/36524.25),s=t+1+h-Math.floor(h/4)+1524,e=Math.floor((s-122.1)/365.25),u=Math.floor(365.25*e),o=Math.floor((s-u)/30.6001);let d=s-u-Math.floor(30.6001*o)+i,c=o<14?o-1:o-13,l=c>2?e-4716:e-4715;const v=24*(d-Math.floor(d));let S=Math.floor(v),f=60*(v-S),m=Math.floor(f),y=Math.floor(60*(f-m));return 60*(f-m)-y>=.5&&(y+=1,y>=60&&(y=0,m+=1,m>=60&&(m=0,S+=1,S>=24)))&&(S=0,d+=1,d>n(l,c)&&(d=1,c+=1,c>12&&(c=1,l+=1))),new a(l,c,Math.floor(d),S,m,y)}function u(a,r){const t=e(a+r/24);return t.year+"/"+(t.month<10?`0${t.month}`:t.month)+"/"+(t.day<10?`0${t.day}`:t.day)+" "+(t.hours<10?`0${t.hours}`:t.hours)+":"+(t.minutes<10?`0${t.minutes}`:t.minutes)+":"+(t.seconds<10?`0${t.seconds}`:t.seconds)}var o;!function(a){a.surya="surya",a.chandra="chandra",a.mangal="mangal",a.budha="budha",a.guru="guru",a.shukra="shukra",a.shani="shani",a.rahu="rahu",a.ketu="ketu"}(o||(o={}));const d=[o.surya,o.chandra,o.mangal,o.budha,o.guru,o.shukra,o.shani],c=[o.surya,o.chandra,o.mangal,o.budha,o.guru,o.shukra,o.shani,o.rahu,o.ketu];var l;!function(a){a.one="one",a.two="two",a.three="three",a.four="four",a.five="five",a.six="six",a.seven="seven",a.eight="eight",a.nine="nine",a.ten="ten",a.eleven="eleven",a.twelve="twelve"}(l||(l={}));const v=[l.one,l.two,l.three,l.four,l.five,l.six,l.seven,l.eight,l.nine,l.ten,l.eleven,l.twelve];var S,f,m,y,k,g;!function(a){a.chitrapaksha="chitrapaksha",a.pushyapaksha="pushyapaksha",a.lahiri="lahiri",a.bvraman="bvraman",a.tropical="tropical"}(S||(S={})),function(a){a.equal="equal",a.placidus="placidus",a.sripati="sripati",a.porphyry="porphyry"}(f||(f={})),function(a){a.meannode="meannode",a.truenode="truenode"}(m||(m={})),function(a){a.tropical="tropical",a.vedic="vedic"}(y||(y={})),function(a){a.northindian="North",a.southindian="South",a.eastindian="East"}(k||(k={}));class K{constructor(a,r,t,i,h){this.ayanamsha=void 0,this.riseType=void 0,this.nodeType=void 0,this.cuspSystem=void 0,this.chartDisplayStyle=void 0,this.ayanamsha=a,this.riseType=r,this.nodeType=t,this.cuspSystem=i,this.chartDisplayStyle=h}static default(){return new K(S.chitrapaksha,y.tropical,m.meannode,f.equal,k.southindian)}}class b{constructor({lat:a,lon:r,alt:t=0,location:i}){this.lat=void 0,this.lon=void 0,this.alt=void 0,this.location=void 0,this.lat=a,this.lon=r,this.alt=t||0,this.location=i}toString(){return`Gps(lat: ${this.lat}, lon: ${this.lon}, alt: ${this.alt}, location: ${this.location})`}}class V{constructor(a,r,t,i){this.dateTime=void 0,this.gps=void 0,this.config=void 0,this.gmtOffset=void 0,this.dateTime=a,this.gps=r,this.config=t,this.gmtOffset=i}}!function(a){a.Ravi="sunday",a.Soma="monday",a.Mangal="tuesday",a.Budha="wednesday",a.Guru="thursday",a.Shukra="friday",a.Shani="saturday"}(g||(g={}));const M=[g.Ravi,g.Soma,g.Mangal,g.Budha,g.Guru,g.Shukra,g.Shani],P=(a,r)=>{const t=e(a+r/24),i=new Date(t.year,t.month-1,t.day,t.hours,t.minutes,t.seconds);return M[i.getDay()]},p=a=>{switch(a){case g.Ravi:return o.surya;case g.Soma:return o.chandra;case g.Mangal:return o.mangal;case g.Budha:return o.budha;case g.Guru:return o.guru;case g.Shukra:return o.shukra;case g.Shani:return o.shani;default:throw new Error("This should not happen")}},w={};var D,B;w[g.Ravi]=[26,10],w[g.Soma]=[22,6],w[g.Mangal]=[18,2],w[g.Budha]=[14,26],w[g.Guru]=[10,22],w[g.Shukra]=[6,18],w[g.Shani]=[2,14],function(a){a[a.S01=1]="S01",a[a.S02=2]="S02",a[a.S03=3]="S03",a[a.S04=4]="S04",a[a.S05=5]="S05",a[a.S06=6]="S06",a[a.S07=7]="S07",a[a.S08=8]="S08",a[a.S09=9]="S09",a[a.S10=10]="S10",a[a.S11=11]="S11",a[a.S12=12]="S12",a[a.S13=13]="S13",a[a.S14=14]="S14",a[a.S15=15]="S15",a[a.K01=16]="K01",a[a.K02=17]="K02",a[a.K03=18]="K03",a[a.K04=19]="K04",a[a.K05=20]="K05",a[a.K06=21]="K06",a[a.K07=22]="K07",a[a.K08=23]="K08",a[a.K09=24]="K09",a[a.K10=25]="K10",a[a.K11=26]="K11",a[a.K12=27]="K12",a[a.K13=28]="K13",a[a.K14=29]="K14",a[a.K15=30]="K15"}(D||(D={})),function(a){a.Prabhava="Prabhava",a.Vibhava="Vibhava",a.Sukla="Sukla",a.Pramodyuta="Pramodyuta",a.Prajothpatti="Prajothpatti",a.Aangeerasa="Aangeerasa",a.Sreemukha="Sreemukha",a["Bhāva"]="Bhāva",a.Yuva="Yuva",a["Dhāta"]="Dhāta",a["Īswara"]="Īswara",a["Bahudhānya"]="Bahudhānya",a["Pramādhi"]="Pramādhi",a.Vikrama="Vikrama",a.Vrisha="Vrisha",a["Chitrabhānu"]="Chitrabhānu",a["Svabhānu"]="Svabhānu",a["Tārana"]="Tārana",a["Pārthiva"]="Pārthiva",a.Vyaya="Vyaya",a.Sarvajithu="Sarvajithu",a["Sarvadhāri"]="Sarvadhāri",a.Virodhi="Virodhi",a.Vikruti="Vikruti",a.Khara="Khara",a.Nandana="Nandana",a.Vijaya="Vijaya",a.Jaya="Jaya",a.Manmadha="Manmadha",a.Durmukhi="Durmukhi",a.Hevalambi="Hevalambi",a.Vilambi="Vilambi",a["Vikāri"]="Vikāri",a["Sārvari"]="Sārvari",a.Plava="Plava",a.Subhakritu="Subhakritu",a.Sobhakritu="Sobhakritu",a.Krodhi="Krodhi",a["Viswāvasu"]="Viswāvasu",a["Parābhava"]="Parābhava",a.Plavanga="Plavanga",a["Kīlaka"]="Kīlaka",a.Soumya="Soumya",a["Sādhārana"]="Sādhārana",a.Virodhikritu="Virodhikritu",a["Paridhāvi"]="Paridhāvi",a["Pramādeecha"]="Pramādeecha",a["Ānanda"]="Ānanda",a["Rākshasa"]="Rākshasa",a.Nala="Nala",a.Pingala="Pingala",a["Kālayukti"]="Kālayukti",a["Siddhārthi"]="Siddhārthi",a.Roudri="Roudri",a.Durmathi="Durmathi",a.Dundubhi="Dundubhi",a["Rudhirodgāri"]="Rudhirodgāri",a["Raktākshi"]="Raktākshi",a.Krodhana="Krodhana",a.Kshaya="Kshaya"}(B||(B={}));const T=[B.Prabhava,B.Vibhava,B.Sukla,B.Pramodyuta,B.Prajothpatti,B.Aangeerasa,B.Sreemukha,B.Bhāva,B.Yuva,B.Dhāta,B.Īswara,B.Bahudhānya,B.Pramādhi,B.Vikrama,B.Vrisha,B.Chitrabhānu,B.Svabhānu,B.Tārana,B.Pārthiva,B.Vyaya,B.Sarvajithu,B.Sarvadhāri,B.Virodhi,B.Vikruti,B.Khara,B.Nandana,B.Vijaya,B.Jaya,B.Manmadha,B.Durmukhi,B.Hevalambi,B.Vilambi,B.Vikāri,B.Sārvari,B.Plava,B.Subhakritu,B.Sobhakritu,B.Krodhi,B.Viswāvasu,B.Parābhava,B.Plavanga,B.Kīlaka,B.Soumya,B.Sādhārana,B.Virodhikritu,B.Paridhāvi,B.Pramādeecha,B.Ānanda,B.Rākshasa,B.Nala,B.Pingala,B.Kālayukti,B.Siddhārthi,B.Roudri,B.Durmathi,B.Dundubhi,B.Rudhirodgāri,B.Raktākshi,B.Krodhana,B.Kshaya];var A;!function(a){a.Chaitra="Chaitra",a.Vaisakha="Vaisākha",a.Jyeshta="Jyeshta",a.Ashada="Āshāda",a.Shraavana="Shraavana",a.Bhaadra="Bhādra",a.Ashwina="Ashwina",a.Kartika="Kartika",a.Margasirsa="Mārgasirsa",a.Pushya="Pausha",a.Magha="Māgha",a.Phalguna="Phālguna"}(A||(A={}));const R=[A.Chaitra,A.Vaisakha,A.Jyeshta,A.Ashada,A.Shraavana,A.Bhaadra,A.Ashwina,A.Kartika,A.Margasirsa,A.Pushya,A.Magha,A.Phalguna];var j,$,q,G;function N(a,r){let t=Math.floor((a+r)/(13+20/60));return t%=27,C(t+1)}function C(a){return a<1?j[27+a]:a>27?j[a-27]:j[a]}function H(a,r){let t=a-r+360;return t%=360,t/=6,x(Math.floor(t)+1)}function x(a){let r;switch(r=a<1?60+a:a>60?a-60:a,r){case 1:return $.Kintughna;case 58:return $.Shakuni;case 59:return $.Chatushpada;case 60:return $.Naga;case 2:case 9:case 16:case 23:case 30:case 37:case 44:case 51:return $.Bava;case 3:case 10:case 17:case 24:case 31:case 38:case 45:case 52:return $.Balava;case 4:case 11:case 18:case 25:case 32:case 39:case 46:case 53:return $.Kaulava;case 5:case 12:case 19:case 26:case 33:case 40:case 47:case 54:return $.Taitila;case 6:case 13:case 20:case 27:case 34:case 41:case 48:case 55:return $.Gara;case 7:case 14:case 21:case 28:case 35:case 42:case 49:case 56:return $.Vanij;case 8:case 15:case 22:case 29:case 36:case 43:case 50:case 57:return $.Vishti;default:throw console.log(r),new Error("Invalid Karana number")}}function U(a){const r=360/27;let t=Math.floor(a/r);return 27===t&&(t=0),{nakshatra:t+1,pada:Math.floor(a%r/(360/108))+1}}!function(a){a[a.Vishakumbha=1]="Vishakumbha",a[a.Priti=2]="Priti",a[a.Ayushman=3]="Ayushman",a[a.Saubhagya=4]="Saubhagya",a[a.Shobhana=5]="Shobhana",a[a.Atiganda=6]="Atiganda",a[a.Sukarma=7]="Sukarma",a[a.Dhriti=8]="Dhriti",a[a.Shula=9]="Shula",a[a.Ganda=10]="Ganda",a[a.Vridhi=11]="Vridhi",a[a.Dhruva=12]="Dhruva",a[a.Vyaghata=13]="Vyaghata",a[a.Harshana=14]="Harshana",a[a.Vajra=15]="Vajra",a[a.Siddi=16]="Siddi",a[a.Vyatipata=17]="Vyatipata",a[a.Variyan=18]="Variyan",a[a.Prigha=19]="Prigha",a[a.Shiva=20]="Shiva",a[a.Siddha=21]="Siddha",a[a.Sadhya=22]="Sadhya",a[a.Shubha=23]="Shubha",a[a.Shukla=24]="Shukla",a[a.Brahma=25]="Brahma",a[a.Indra=26]="Indra",a[a.Vaidhriti=27]="Vaidhriti"}(j||(j={})),function(a){a.Bava="Bava",a.Balava="Balava",a.Kaulava="Kaulava",a.Taitila="Taitila",a.Gara="Gara",a.Vanij="Vanij",a.Vishti="Vishti",a.Shakuni="Shakuni",a.Chatushpada="Chatushpada",a.Naga="Naga",a.Kintughna="Kintughna"}($||($={})),function(a){a[a.Pada1=1]="Pada1",a[a.Pada2=2]="Pada2",a[a.Pada3=3]="Pada3",a[a.Pada4=4]="Pada4"}(q||(q={})),function(a){a[a.Ashwini=1]="Ashwini",a[a.Bharani=2]="Bharani",a[a.Krittika=3]="Krittika",a[a.Rohini=4]="Rohini",a[a.Mrigashira=5]="Mrigashira",a[a.Ardra=6]="Ardra",a[a.Punarvasu=7]="Punarvasu",a[a.Pushya=8]="Pushya",a[a.Ashlesha=9]="Ashlesha",a[a.Magha=10]="Magha",a[a.PurvaPhalguni=11]="PurvaPhalguni",a[a.UttaraPhalguni=12]="UttaraPhalguni",a[a.Hasta=13]="Hasta",a[a.Chitra=14]="Chitra",a[a.Swati=15]="Swati",a[a.Vishaka=16]="Vishaka",a[a.Anuradha=17]="Anuradha",a[a.Jyesta=18]="Jyesta",a[a.Moola=19]="Moola",a[a.Purvashada=20]="Purvashada",a[a.Uttarashada=21]="Uttarashada",a[a.Shravana=22]="Shravana",a[a.Dhanista=23]="Dhanista",a[a.Shatabhisha=24]="Shatabhisha",a[a.Purvabhadra=25]="Purvabhadra",a[a.Uttarabhadra=26]="Uttarabhadra",a[a.Revati=27]="Revati"}(G||(G={}));const E=[o.shani,o.guru,o.mangal,o.surya,o.shukra,o.budha,o.chandra];function J(a){let r=E.indexOf(a);return r+=1,7==r&&(r=0),E[r]}var O,I;!function(a){a.Equal="Equal",a.Unequal="Unequal"}(O||(O={}));class Y{constructor(a,r,t,i){this.sunrise=void 0,this.sunset=void 0,this.sunriseNextDay=void 0,this.vaara=void 0,this.equalHoraSequence=void 0,this.speedOrderGrahaSequence=void 0,this.sunrise=a,this.sunset=r,this.sunriseNextDay=t,this.vaara=i;let h=[p(i)];for(let a=1;a<24;a++)h.push(J(h[h.length-1]));this.speedOrderGrahaSequence=h;let n=(t-a)/24,s=[];h.forEach((r,t)=>{const i=a+t*n;s.push({index:t+1,startjd:i,endjd:i+n,lord:r})}),this.equalHoraSequence=s}horaLord(a,r){if(!(this.sunrise<=a&&a<this.sunriseNextDay))throw new Error("Hora Time out of bounds");const t=this.equalHoraSequence;for(let r=0;r<t.length;r++){const i=t[r];if(i.startjd<=a&&a<i.endjd)return this.speedOrderGrahaSequence[r]}throw new Error("Hora Time out of bounds")}}!function(a){a[a.Mesha=1]="Mesha",a[a.Vrishabha=2]="Vrishabha",a[a.Mithuna=3]="Mithuna",a[a.Karka=4]="Karka",a[a.Simha=5]="Simha",a[a.Kanya=6]="Kanya",a[a.Tula=7]="Tula",a[a.Vrischika=8]="Vrischika",a[a.Dhanus=9]="Dhanus",a[a.Makara=10]="Makara",a[a.Kumbha=11]="Kumbha",a[a.Meena=12]="Meena"}(I||(I={}));const L=[I.Mesha,I.Vrishabha,I.Mithuna,I.Karka,I.Simha,I.Kanya,I.Tula,I.Vrischika,I.Dhanus,I.Makara,I.Kumbha,I.Meena];function z(a){return[30*(a-1),30*a]}function F(a){return I[a]}function Q(a){switch(a){case I.Mesha:return[o.mangal];case I.Vrischika:return[o.mangal,o.ketu];case I.Vrishabha:return[o.shukra,o.chandra];case I.Tula:return[o.shukra];case I.Mithuna:case I.Kanya:return[o.budha];case I.Karka:return[o.chandra];case I.Simha:return[o.surya];case I.Dhanus:case I.Meena:return[o.guru];case I.Makara:return[o.shani];case I.Kumbha:return[o.shani,o.rahu]}}function W(a,r){return(a+12-r)%12+1}function X(a,r){let t=a+(r-1);return t%=12,0===t&&(t=12),t}function Z(a){const r=L.filter(a=>"number"==typeof a);for(const t of r){const[r,i]=z(t);if(a>=r&&a<=i)return t}}function _(a){return G[a]}const aa=[o.ketu,o.shukra,o.surya,o.chandra,o.mangal,o.rahu,o.guru,o.shani,o.budha];function ra(a){let r=a%9;return r=0===r?9:r,aa[r-1]}function ta(a){return q[a]}function ia(a){return sa(new na(a.value%30))}function ha(a){return new na(a.value%30)}class na{constructor(a){this.value=void 0,this.degrees=void 0,this.minutes=void 0,this.seconds=void 0,this.value=Math.abs(a),this.degrees=Math.floor(this.value);const r=60*(this.value-this.degrees);this.minutes=Math.floor(r),this.seconds=Math.round(r),60===this.seconds&&(this.minutes++,this.seconds=0)}toString(){return`${this.degrees}° ${this.minutes}' ${this.seconds}"`}}function sa(a){return`${a.degrees}° ${a.minutes}' ${a.seconds}"`}function ea(a){return Math.floor(a.value/30)+"s "+ia(a)}class ua{constructor(a,r,t){this.lat=void 0,this.lon=void 0,this.speed=void 0,this.lat=a,this.lon=r,this.speed=t}toString(){return`Det(lat: ${this.lat}, lon: ${this.lon}, speed: ${this.speed})`}}function oa(a){return a<0?360+a:a>360?a-360:a}function da(a){const r=a.value;return r<0?new na(360+r):r>360?new na(r-360):a}function ca(a){return a<0?360+a:a>360?a-360:a}export{a as AHDateTime,S as Ayanamsha,k as ChartDisplayStyle,K as Config,l as Cusp,f as CuspSystem,na as Deg,ua as Det,b as Gps,o as Graha,O as HoraDivType,Y as HoraManager,V as Input,$ as Karana,A as Masa,G as Nakshatra,m as NodeType,q as Pada,I as Rashi,y as RiseType,B as Samvat,D as Tithi,g as Vaara,j as Yoga,v as allCusps,M as allDaysOfWeek,c as allGrahas,R as allMasa,L as allRashis,T as allSamvat,U as calculateNakshatraAndPada,h as calculateUTC,r as decimalHours,u as displayableString,H as findKarana,N as findYoga,e as fromJulianDate,W as getBhava,_ as getNakshatraStringValue,X as getNthRashi,ta as getPadaStringValue,Z as getRashiForDeg,Q as getRashiLords,z as getRashiRange,F as getRashiStringValue,ra as getVimsottariLord,P as getWeekdayFromJulianDate,d as grahasMinusNodes,x as initKarana,C as initYoga,J as nextInSpeedOrder,oa as normalize,da as normalizeDeg,ca as normalizeNum,ea as sdmsString,ha as signDeg,ia as signDegString,E as speedOrder,sa as stringValue,s as toJulianDate,i as toUnixTimestamp,w as uk_maandi_rising_ghatikas,t as utcDateTime,p as vaaresha,aa as vimsottariGrahaSeq};
