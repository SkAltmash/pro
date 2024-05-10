const gname = document.getElementById("gname");
contaner = document.querySelector(".contaner");
const bt = document.getElementById("bt");
const massage = document.getElementById("massage");
const indianGirlNames = [
  "Amisha",
  "Aadhya",
  "Aahana",
  "Aaradhya",
  "Aarti",
  "Aarohi",
  "Aashna",
  "Aashi",
  "Aarushi",
  "Aanya",
  "Aashika",
  "Aditi",
  "Ahana",
  "Akanksha",
  "Alia",
  "Amaira",
  "Amaya",
  "Amrita",
  "Ananya",
  "Anika",
  "Anushka",
  "Aria",
  "Arya",
  "Avani",
  "Avni",
  "Bhavya",
  "Chahat",
  "Dia",
  "Divya",
  "Esha",
  "Gauri",
  "Isha",
  "Ishani",
  "Ishika",
  "Ishita",
  "Jahanvi",
  "Jiya",
  "Kavya",
  "Kiara",
  "Krisha",
  "Kyra",
  "Mahi",
  "Mahek",
  "Manya",
  "Meera",
  "Misha",
  "Myra",
  "Neha",
  "Nia",
  "Nikita",
  "Nisha",
  "Pari",
  "Prisha",
  "Riya",
  "Saumya",
  "Saanvi",
  "Samaira",
  "Sana",
  "Sanvi",
  "Sarah",
  "Shreya",
  "Siya",
  "Sneha",
  "Tanisha",
  "Tanya",
  "Trisha",
  "Vaishnavi",
  "Vanya",
  "Yashvi",
  "Zara",
  "Aahana",
  "Aaira",
  "Aaliyah",
  "Aanya",
  "Aaradhya",
  "Aarav",
  "Aarohi",
  "Aashi",
  "Aashirya",
  "Aayat",
  "Abha",
  "Abhaya",
  "Adhya",
  "Advika",
  "Akanksha",
  "Alia",
  "Alina",
  "Amaira",
  "Amaya",
  "Amita",
  "Amrita",
  "Anamika",
  "Ananya",
  "Anaya",
  "Anisha",
  "Anita",
  "Anjali",
  "Anjika",
  "Anusha",
  "Anushka",
  "Aria",
  "Arpita",
  "Arshia",
  "Arshiya",
  "Arundhati",
  "Arya",
  "Ashima",
  "Avani",
  "Avantika",
  "Avni",
  "Bhavana",
  "Bhumika",
  "Bhuvana",
  "Chahna",
  "Chaitali",
  "Chaitra",
  "Charu",
  "Charvi",
  "Chaya",
  "Chetna",
  "Daksha",
  "Darshini",
  "Devanshi",
  "Devika",
  "Dhara",
  "Diksha",
  "Divya",
  "Diya",
  "Eesha",
  "Ekta",
  "Esha",
  "Falaq",
  "Falguni",
  "Ganga",
  "Gayatri",
  "Grishma",
  "Gulab",
  "Hamsika",
  "Hansa",
  "Hari",
  "Harini",
  "Harsha",
  "Hemali",
  "Hemani",
  "Iha",
  "Ila",
  "Ira",
  "Isha",
  "Ishani",
  "Ishita",
  "Jagruti",
  "Janaki",
  "Janhvi",
  "Jasmin",
  "Jhanvi",
  "Jia",
  "Jigna",
  "Jinal",
  "Joshita",
  "Jyoti",
  "Kajal",
  "Kajol",
  "Kamala",
  "Kamini",
  "Kanak",
  "Kanchan",
  "Kanika",
  "Kavya",
  "Kiran",
  "Kirti",
  "Komal",
  "Kumari",
  "Kusum",
  "Lakshmi",
  "Leela",
  "Madhavi",
  "Madhu",
  "Madhulika",
  "Madhuri",
  "Mahi",
  "Mala",
  "Malati",
  "Malika",
  "Mallika",
  "Manasi",
  "Manisha",
  "Manjari",
  "Manju",
  "Manvi",
  "Mansi",
  "Manya",
  "Mira",
  "Mishti",
  "Mohana",
  "Mohini",
  "Mona",
  "Monisha",
  "Myra",
  "Nandini",
  "Neha",
  "Neelam",
  "Neerja",
  "Nidhi",
  "Nikita",
  "Nila",
  "Nishi",
  "Nisha",
  "Nitya",
  "Nivedita",
  "Nupur",
  "Nutan",
  "Padma",
  "Pallavi",
  "Pankaja",
  "Parineeta",
  "Parul",
  "Pavitra",
  "Payal",
  "Pooja",
  "Poonam",
  "Prajakta",
  "Prarthana",
  "Prisha",
  "Priti",
  "Priya",
  "Priyanka",
  "Purva",
  "Puspita",
  "Radha",
  "Ragini",
  "Rajani",
  "Rajshri",
  "Rakhi",
  "Raksha",
  "Ramya",
  "Rani",
  "Ranjana",
  "Rashmi",
  "Rati",
  "Raveena",
  "Reema",
  "Rekha",
  "Renu",
  "Renuka",
  "Reshma",
  "Ria",
  "Riddhi",
  "Ritu",
  "Riya",
  "Roshni",
  "Ruchi",
  "Rukmini",
  "Rupal",
  "Saanvi",
  "Sadhana",
  "Sagarika",
  "Sakshi",
  "Saloni",
  "Sampada",
  "Sana",
  "Sanika",
  "Sanjana",
  "Sanya",
  "Sapna",
  "Sarada",
  "Sarala",
  "Saraswati",
  "Sarika",
  "Sarita",
  "Saroj",
  "Savita",
  "Shabnam",
];

const muslimGirlNames = [
  "Aisha","Aaysha", "Fatima", "Khadija", "Zainab", "Maryam", "Hafsa", "Sumaya", "Safiya", "Amira", "Layla",
  "Sara", "Yasmin", "Nour", "Mariam", "Zahra", "Sana", "Rahma", "Zara", "Noor", "Ruqayyah",
];



let flage;
function main() {
    
    
   for(let i =0;i<indianGirlNames.length;i++)
   {
    if(indianGirlNames[i]==gname.value)
    {
       flage ='r';
       massage.innerText="Error 404";
       massage.style.color="red";
    }
   }
   for(let i =0;i<muslimGirlNames.length;i++)
   {
    if(muslimGirlNames[i]==gname.value)
    {
       flage ='m';
       let song = new Audio("marjawaa.mp3");
       song.play();
    }
   }
   if(gname.value==='Asmit')
   {
    let song = new Audio("kya-re-bhangaar-ki-sakal-ke-hindustani-bhau-made-with-Voicemod.mp3");
    song.play();
    massage.innerHTML=`<img src="bandarkishakal.jpg">`;
   }
   if(gname.value==='Sujal')
   {
    let song = new Audio("kya-re-bhangaar-ki-sakal-ke-hindustani-bhau-made-with-Voicemod.mp3");
    song.play();
    massage.innerHTML=`<img src="bandarkishakal.jpg">`;
   }
   if(flage=='r')
   {
    let song = new Audio("elec.mp3");
    song.play();
    flage =' k';
   }
   if(flage=='m')
   {
    flage =' k';

     massage.innerHTML=`<h3>${gname.value}</h3>would you make me the happiest person by being my partner in this journey called life?"`;
   }

}
