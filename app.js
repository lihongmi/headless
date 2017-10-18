const Nightmare= require('nightmare');
const nightmare = Nightmare({ show: true });



nightmare
  .goto('http://www.sina.com.cn/')
  .mouseover("#SI_Top_Login a.tn-tab")
  .type("[name='loginname']","15720188999")
  .type("[name='password']","abc123321")
  .click(".login_btn")
  .wait(1000)
  //.click("#SI_Top_Weibo a.tn-tab")
  .goto('http://weibo.com/messages')
  .click('.ficon_send')
  .wait(".W_layer .input textarea")
  .type(".input textarea",msg())
  .click('a.W_btn_a')
  .wait(5000)
  .end()
  .catch((error) => {
    console.error('Search failed:', error);
  });
function msg(){
  var now=new Date();
 
  return '现在时间是'+ now.toLocaleString();
}

  