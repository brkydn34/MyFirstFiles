// const fs= require('fs');



// fs.readFile('oku.txt',(error,data)=>{
//   console.log(data.toString());
// });

// fs.appendFile('oku.txt',' yapalımm',(err) =>{
//   // let deger=prompt('ne diyorsun evet mi hayır mı?');
//   // if(deger=='evet'){
//   //   return ' Yapalım o zaman)';
//   // }else{
//   //   return ' yapalım yinede '
//   // }
//   try{
//     console.log('işlendi');
//   }catch{
//     console.log(err);
//   }

// });

// setTimeout
// const calistir = setTimeout(() => {
//   console.log('kahveni al');
// }, 2000);

//setInverval

// let i = 0;
// let d = 0;
// const interval = setInterval(() => {
//   console.log(`Dakika: ${d} Saniye: ${i}`);
//   i++;
//   if(i===60){
//     d++;
//     i=0;
//   }else if(d === 2){
//     clearInterval(interval);
//   }

// }, 100);

// belirtilen saniye içinde sayıyı bul

// let saniye =parseInt(prompt('Kaç saniyede bileceksin')); 
// let i = Math.round(Math.random()*10);
// let d = Math.round(Math.random()*10);
// if(!saniye){
//   alert('bi şey gir sikerim');
// }else{
  
//   let sonuc = i+d;
//   let cevap = parseInt(prompt(`${i} + ${d} sonucu nedir?`));
//   const interval = setInterval(() => {
    
//     console.log('bilemedin');
    
      
    
//   }, saniye*1000);

//   for(let z = 0;z<10;z++)
// {
//   if(cevap === sonuc){
//     clearInterval(interval);
//     console.log('aferin');
//     break;
//   }else{
//     cevap = parseInt(prompt(`${i} + ${d} sonucu nedir?`));
//   }
// }
// }

//Throw (hata fırlatır) if ile yap 

// var ad = "mehmet";

// if(ad == "burak")
//   {console.log(ad);}else{
//     throw new "hata";
//   }
  


//try catch finally

// try{
//   var sayi1=5;
//   var sayi2=2;
//   var sayi3=1;
//   let sonuc = sayi1+sayi2+sayi3;
//   if(sonuc>10)
//     throw "10dan büyük!";
//     else
//     console.log(sonuc);
// }catch(error){
//   console.log(error);
// }


// Destructing

// const degerler={
//   deger1: 'deger1',
//   deger2: 'deger2',
//   deger3: {
//     isim: "burak"
//   }
// }
// const {deger3:{isim}}=degerler;
// console.log(isim);

//Promise yapısı

// let okullar = {
//   sau: {
//     id: 1,
//     tamad: "Sakarya Üniversitesi",
//     lokasyon: "Sakarya"
//   },
//   bau: {
//     id: 2,
//     tamad: "Bahçeşehir Üniversitesi",
//     lokasyon: "İstanbul"
//   },
//   itu: {
//     id: 3,
//     tamad: "İstanbul Teknik Üniversitesi",
//     lokasyon: "İstanbul"
//   }
// };
// let ogrenciler={
//   ogrenci: {
//     okulid: 1,
//     ad: 'Burak',
//     yas: 22
//   },
//   ogrenci: {
//     okulid: 2,
//     ad: 'Mert',
//     yas: 22
//   },
//   ogrenci: {
//     okulid: 3,
//     ad: 'Hüseyin',
//     yas: 20
//   }
// }

// const ogrencibul = ()=>{
//   return new Promise((resolve, reject)=>{
//     resolve('sorun yok');
//   })
// }

// ogrencibul()
//   .then((data)=>{
//     console.log('haha');
//   });

// const ogrencibul= (kisaad) =>{
//   let okulid= okullar[kisaad].id;
//   let okulad= okullar[kisaad].tamad;
//   console.log(okulad);
  

  
  
// } 

// ogrencibul('bau')
// .then((data)=>{
//   console.log(data);
// })


//// PROMISE YAPISI

// const fonk= () =>{
//   return new Promise((resolve,reject)=>{
//     resolve('her şey yolunda');
//   })
// }
// fonk()
//   .then((data)=>{
//   console.log(data);
//   return 2;
// }).then((data)=>{
//   console.log(data);
// })

// PROMISE DEVAM

// let ogrenci ={id:1,ad:'burak',yas:22};
// let arkadas= [{id:2,ad:'hüseyin',yas:22},{id:3,ad:'ilyas',yas:22}];

// const getuser = ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(ogrenci);
//     }, 2000);
      
    
//   });
// }
// const getfriend=(userid)=>{
//   return new Promise((resolve, reject)=>{
    
//     setTimeout(() => {
//       resolve(arkadas);  
//     }, 1000);
//   });
// }

// getuser()
// .then(data=>{
//   console.log(data);
//   return getfriend(data.id);
// }).then(data=>{
//   console.log(data);
// })

// Aynısını ASYNC / AWAIT

// async function fonksi (){
//   const first = await getuser();
//   const second= await getfriend(first.id);
//   console.log(first);
//   console.log(second);
  
// }

// fonksi();

//Kullanıcıdan aldığı id ye göre öğrenci bilgilerini getiren sistem

let ogrenciler =  [
  { id: 1,
    ad: "Burak Aydın",
    yas: 22
  },
  { id: 2,
    ad: "Can Aydın",
    yas: 22
  },
  { id: 3,
    ad: "Ali Aydın",
    yas: 22
  },
  { id: 4,
    ad: "Mehmet Aydın",
    yas: 22
  },
  { id: 5,
    ad: "Fulya Aydın",
    yas: 22
  },
  { id: 6,
    ad: "Mert Aydın",
    yas: 22
  },
  { id: 7,
    ad: "Melih Aydın",
    yas: 22
  },
  { id: 8,
    ad: "Olga Aydın",
    yas: 22
  },
];


const getUser=(deger)=>{
  return new Promise((resolve,reject)=>{
    resolve(deger);
  });
};
let getInfo = parseInt(prompt('Öğrenci ID giriniz: ',3));
let again=0;
getUser(getInfo)
.then((data,again)=>{

    console.log(ogrenciler.find(b=>{
      if(b.id == data) return true;
      
      
    }));
  
  
});



