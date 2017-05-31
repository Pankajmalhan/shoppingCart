var Product=require('../database/product');
var mongoose = require('mongoose'); 
var db = 'mongodb://localhost:27017/shopping';  
    // Use connect method to connect to the Server  
mongoose.Promise = global.Promise;
 mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
})

var product=[
    new Product({
        imagePath:"http://assets2.ignimgs.com/2016/11/30/03doomjpg-36b6c4_1024w.jpg",
        title:"Doom",
        description:"Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:100
    }),
    new Product({
        imagePath:"http://assets1.ignimgs.com/2016/11/30/06half-life2jpg-6c615c_640w.jpg",
        title:"Half-Life 2",
        description:"Its dynamic cast of memorable characters led an outstanding sci-fi story that is still smarter than most games since. Tack on its two episodic expansions, and the Half-Life 2 saga is a brilliant shooter with unforgettable and empowering action, as well as a heartbreaking cliffhanger that, even now, and every time I think about it, cuts just as deep as it did in the moment.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:150
    }),
    new Product({
        imagePath:"http://assets2.ignimgs.com/2016/11/30/08tlozocarinaoftimejpg-6c615b_1024w.jpg",
        title:"The Legend of Zelda: Ocarina of Time",
        description:"That's when I realized this wasn't a simple hack-and-slash action game set inside strange structures -- this is a world full of fun people and memorable places, bizarre quirks, and a subtle, brooding atmosphere. This enthralling, incredible open world captured our imagination, stunning us with its scale, and hooking us on its exploration. Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:120
    }),
    new Product({
        imagePath:"http://assets1.ignimgs.com/2016/11/30/09halo2jpg-36b6e7_1024w.jpg",
        title:"Halo 2",
        description:"When November 9 finally came and Halo 2 released (as Peter Moore's tattooed bicep promised), Halo 2 somehow lived up to the hype. Single-player was a well-told interweaving tale between Chief and the Arbiter that was, in hindsight, probably underrated, while multiplayer literally changed gaming.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:160
    }),
    new Product({
        imagePath:"http://assets2.ignimgs.com/2016/11/30/12sidmeierspiratesjpg-565a2a_1024w.jpg",
        title:"Sid Meier's Pirates!",
        description:"Sid Meier and the team at Microprose created one of the richest, most dynamic virtual worlds at the time. When you played Pirates! you were immersed in a salty high seas adventure. Not only was the game fun, but you learned a little history in the process. Pirates! made me want to learn more about the Golden Age of Piracy, and I was often at my local library reading about the real-life exploits of the historical pirates I would meet in the game.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:180
    }),
    new Product({
        imagePath:"http://assets1.ignimgs.com/2016/11/30/22halocombatevolvedjpg-36b6e3_1024w.jpg",
        title:"Halo: Combat Evolved",
        description:"Halo blew my teenage mind when it introduced the Flood. It’s rare to see a new enemy added halfway through the game – let alone one so terrifying and important to Halo’s overall story. Flood infection forms are funny little things now, but at the time, I held down my assault rifle trigger like there was no tomorrow.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:160
    }),

    new Product({
        imagePath:"http://assets1.ignimgs.com/2016/11/30/25metalgearsolid3snakeeaterjpg-565a24_640w.jpg",
        title:"Metal Gear Solid 3: Snake Eater",
        description:"You could have all the stealth know-how and military training in the world, but out there in the unpredictable jungle of the Russian wilderness, you were exposed, vulnerable… a Naked Snake. And it worked.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you.",
        price:150
    }),
    new Product({
        imagePath:"http://assets1.ignimgs.com/2016/11/30/36bioshockjpg-6c6154_1024w.jpg",
        title:"BioShock",
        description:"A lot of pieces needed to come together to support such an ambitious vision, but in a rare way, they actually did. An evocative score that mixed licensed post-depression-era tunes with original orchestral arrangements, Art-Deco-inspired architecture, and excellent performances of a nuanced, well-written script fused together to reinforce the heady central themes.Everything about DOOM was incredible. Graphics were colorful and convincing. Lightning was spooky. It felt like you were on a Martian moon. Music was memorable. Weapon design was brilliant, and enemy design even more so. From the imps to the Cacodemons to the Cyberdemon, nearly every creature in DOOM was the stuff of nightmares – and in a then-unheard-of gameplay twist, they hated each other as much as they hated you. ",
        price:220
    })
];
var done=0;
for(var i=0;i<product.length;i++){
    product[i].save(function(err,result){
        done++;
        if(done==product.length){
            exit();
        }
    });
}

function exit(){
mongoose.disconnect();
}
