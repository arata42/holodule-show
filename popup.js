document.getElementById('reload_button').onclick = function() {
	location.reload();
};

setTimeout(function() {
  document.querySelectorAll('.col.text-right.name').forEach(function(element) {
    const names = ['ホロスターズ', '花咲みやび', '奏手イヅル', 'アルランディス', '律可', 
                   'アステル・レダ', '岸堂天真', '夕刻ロベル', '影山シエン', '荒咬オウガ', '夜十神封魔', 
                   '羽継烏有', '水無世燐央', 'HOLOSTARS EN', 'Altare', 'Syrios', 'Bettel', 
                   'Flayon', 'Hakka', 'Shinri', 'Jurard', 'Goldbullet', 
                   'Octavio', 'Crimzon'];
    if (names.includes(element.textContent.trim())) {
      let parent = element.closest('.col-6.col-sm-4.col-md-3');
      if (parent) {
        parent.style.display = 'none';
      }
    }
    
    document.getElementById('reload_button').title = 'あ';
  });
}, 3000); // 3秒後に実行
