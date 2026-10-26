// 1-Masala let mevalar= ["olma","banan","gosht","nok"];
// console.log("olma","nok");


// 2-Masala let son = [10,20,30,40];
// console.log(40,30,20,10);


// 3-Massala const arr =["A","B"];
// if(arr.length >= 5){
//     console.log("Uzun massiv");
// }else{
//     console.log("Qisqa massiv");
// }

// 4-Masala const x = [1,2,3];

// x.push(4)
// x.shift();

// console.log(x);


// 4-Topshiriq const color = ["Qizil","Yashil","Kok"];
// let natija = ""
// for(let i = color.length-1;i>=0;i--){
//     natija+=color[i]
// }
// console.log(natija);


// let harfMassiv = ["A", "B", "C", "D", "E"];
// for (let i = 0; i < harfMassiv.length; i += 2) {
//     console.log(harfMassiv[i]);
// }



// let buyumlar = ["kitob", "daftar", "qalam"];
// let qidirilayotgan = "daftar";
// let bormi = buyumlar.includes(qidirilayotgan);
// console.log(bormi);



// let mevaTurlari = ["olma", "banan"];
// for (let i = 0; i < mevaTurlari.length; i++) {
//     console.log(`"${mevaTurlari[i]} - meva"`);
// }



// let tahlilMassiv = [1, 2, 3, 4, 5, 6];
// let birinchiYarim = tahlilMassiv.slice(0, 3);
// let ikkinchiYarim = tahlilMassiv.slice(3, 6);
// console.log(birinchiYarim);
// console.log(ikkinchiYarim);



// let massiv1 = [1, 2];
// let massiv2 = [3, 4];
// let birlashgan = massiv1.concat(massiv2);
// console.log(birlashgan);

// -----------------------------------------------------------------

// let foydalanuvchi = { ism: "Ali", yosh: 20 };
// console.log(`${foydalanuvchi.ism} ${foydalanuvchi.yosh} yoshda`);



// let shahar = { nom: "Toshkent" };
// shahar.mamlakat = "O'zbekiston";
// console.log(shahar);


// let avtomobil = { brend: "BMW", rang: "oq" };
// avtomobil.rang = "qora";
// console.log(avtomobil);



// let foydalanuvchiMaqom = { login: "user1", parol: "12345" };
// delete foydalanuvchiMaqom.parol;
// console.log(foydalanuvchiMaqom);



// let mahsulot = { nom: "Telefon", brend: "Samsung" };
// let bormi = "narx" in mahsulot;
// console.log(bormi);


// let malumot = { talaba: "Hasan", manzil: { shahar: "Samarqand" } };
// console.log(malumot.manzil.shahar);


// let asar = { kitob: "Xamsa", muallif: "Navoiy", yil: 1485 };
// let kalitlar = Object.keys(asar);
// console.log(kalitlar);

// let kompyuter = { noutbuk: "HP", xotira: "512GB" };
// let qiymatlar = Object.values(kompyuter);
// console.log(qiymatlar);


// let juftlik = { a: 10, b: 20 };
// for (let kalit in juftlik) {
//     console.log(kalit + ": " + juftlik[kalit]);
// }



// let shaxs = { ism: "Vali" };
// if (!("status" in shaxs)) {
//     shaxs.status = "faol";
// }
// console.log(shaxs);