var words = {
// Syntax: 'Search word' : 'Replace word',
"Lv" : "Sv",
"Meh" : "Kötü!",
"Grab" : "Ekle!",
"Woot" : "Dans",
"Current dj" : "Şu an ki DJ",
"hosted by: " : "Oda kurucusu: ",
"Communities":"Topluluk",
"Event Calendar" : "Etkinlikler",
"Support":"Destek",
"About":"Hakkında",
"Terms":"Şartlar",
"Privacy":"Gizlilik",
"Logout":"Çıkış",
"My Profile":"Profilin",
"Avatars":"Avatarlar",
"Recently Played":"Son açtıkların",
"My Topluluk":"Topluluk'ların",
"Settings":"Ayarlar",
"LEVELS":"Seviye",
"Joined":"Katıldın :",
"PLUG POINTS":"Plug Puan",
"AVAILABLE":"Mevcut",
"Away":"Dışarıda",
"Working":"Çalışıyor",
"Gaming":"Oyunda",
"Your Playlists":"Listeleriniz",
"Search YouTube":"YouTube Ara",
"Active":"Aktif",
"hosted by":"Oda Kurucusu",
"Import":"Aktar",
"Create":"Oluştur",
"Import From Other Services":"Diger Hizmetlerden Aktar",
"Favorites":"Favoriler",
"Import Tracks":"Parçalardan Aktar",
"Import Sets":"Setleri Aktar",
"Roll over the different levels for more information about what you will unlock.":"Seviyeler Hakkında bilgi almak istiyorsan üzerine doğru gelmen gerek",
"My Avatars":"Avatarların",
"Avatar Shop":"Avatar Magzası",
"BASE / CASUAL":"Basit avatarlar",
"CLASSIC":"Klasik",
"for tips on how to grow your community, host events and more":"",
"These are your communities. Check out our":"Topluluk'a Yeni katıldın ve kendi odanı acıcaksın fakat oda acmadan önce kurullara bi bakmak istersin belki :",
"Create Community":"Topluluk Oluştur",
"Back To Community":"Topluluk'a Geri dön",
"Join Community":"Topluluk'a Katıl",
"Performance":"Performans",
"Dancing Avatars":"Avatarların Dans'ı",
"Cap Avatars":"Odadaki Avatar Sayısı",
"BEHAVIOR":"DAVRANIŞ",
"Show Tooltips":"İpuçlarını göster",
"DJ Score After Play":"Şarkı Sonu Skorunu Göster",
"DJ Announcements":"DJ Duyuruları",
"NOTIFICATIONS":"BİLDİRİMLER",
"Application":"Uygulama",
"Account":"Hesap",
"Language":"Dil",
"Welcome to plug.dj. Version":"Plug.dj Hoşgeldin. Versiyon ",
"People here now":"Buradaki insanlar",
"Available":"Mevcut",
"AWAY":"Dışarıda",
"WORKING":"Çalışıyor",
"GAMING":"Oyunda",
"COMMUNITY NAME":"Oda ismi",
"COMMUNITY DESCRIPTION":"Oda Hakkında",
"WELCOME MESSAGE":"Hosgeldin Mesajı",
"DJ Cycle":"DJ Döngüsü",
"Wait List":"Bekle listesi",
"EDIT":"Düzenle",
"Enabled":"ACIK",
"Disabled":"KAPALI",
"Unlocked":"Acık",
"Locked":"Kilitli",
"Refresh":"Yenile",
"Snooze":"Sustur",
"Share Video":"Sarkı paylas",
"Invite Friends":"Arkadas Davet et",
"Follow":"Takip et",
"Level":"Seviye",
"Friends":"Arkadaşlar"};

String.prototype.prepareRegex = function() {
return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
};

function isOkTag(tag) {
return (",pre,blockquote,code,input,button,textarea".indexOf(","+tag) == -1);
}

var regexs=new Array(),
	replacements=new Array();
for(var word in words) {
if(word != "") {
regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b", 'gi'));
replacements.push(words[word]);
}
}

var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="";
for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
	if(isOkTag(this_text.parentNode.tagName.toLowerCase()) && (text=this_text.textContent)) {
	for(var x=0,l=regexs.length; x<l; x++) {
	text = text.replace(regexs[x], replacements[x]);
	this_text.textContent = text;
	}
	}
}
