const Nightmare= require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.baidu.com')
  .type('#kw', '新闻')
  .click('#su')
  .wait('#content_left div.c-container')
  .evaluate(fnA)
  .end()
  .then(console.log)
  .catch((error) => {
    console.error('Search failed:', error);
  });

  function fnA(){
    return Array.prototype.map.call(document.querySelectorAll('#content_left div.c-container h3 a'),function(item){
      return item.href;
    });
  }