(()=>{
'use strict';
function apply(){
 if(document.getElementById('study-light-ui-v14'))return;
 const st=document.createElement('style');
 st.id='study-light-ui-v14';
 st.textContent=`
#question.question{display:block!important;padding:16px 8px 8px!important;text-align:left!important;font-size:clamp(17px,2.02dvh,20px)!important;line-height:1.58!important;font-weight:820!important;white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;line-break:strict!important}
#question.question.long{font-size:clamp(16px,1.87dvh,18.5px)!important;line-height:1.54!important}
#question.question.xlong{font-size:clamp(14.5px,1.68dvh,17px)!important;line-height:1.48!important}
#question .keypoint{color:#ffd45e!important;background:rgba(255,212,94,.09)!important;border-radius:.2em!important;padding:0 .06em!important;font-weight:950!important;text-shadow:none!important}
#question .conceptpoint{color:#72d9ff!important;font-weight:950!important;text-shadow:none!important}
#qCard.mcq-mode #question.question{padding-top:10px!important;font-size:clamp(14.5px,1.65dvh,16.5px)!important;line-height:1.42!important}
#qCard.mcq-mode .action-zone{flex-basis:156px!important}
#qCard.mcq-mode .mcq-choices{grid-template-columns:1fr!important;gap:5px!important}
#qCard.mcq-mode .mcq-choice{text-align:left!important;font-size:11px!important;line-height:1.2!important;padding:6px 9px!important;border-radius:10px!important;white-space:normal!important}
#qCard.mcq-mode.answered .feedback-slot{flex-basis:126px!important}
#qCard.mcq-mode.answered .answerline{white-space:normal!important;overflow:hidden!important;text-overflow:clip!important;line-height:1.22!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important}
#feedback.show{visibility:visible!important;opacity:1!important;display:block!important}
nav{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.card{box-shadow:0 8px 24px rgba(0,0,0,.18)!important}
@media(max-height:740px){#question.question{padding:10px 5px 5px!important;font-size:15.5px!important;line-height:1.46!important}#question.question.long{font-size:14.5px!important}#question.question.xlong{font-size:13.5px!important}#qCard.mcq-mode #question.question{font-size:12.8px!important;padding-top:7px!important}#qCard.mcq-mode .action-zone{flex-basis:142px!important}#qCard.mcq-mode .mcq-choice{font-size:10px!important;padding:4px 7px!important}}
`;
 document.head.appendChild(st);
 const sub=document.querySelector('.sub');
 if(sub)sub.textContent='弱点自動分析・模試・計算式4択・近年論点・進捗自動保存';
 const info=document.querySelector('.info');
 if(info)info.textContent='計算分野は「正しい計算式を選ぶ」4択です。金額の暗算は不要。計算式問題は分野ごとに連続出題し、通常問題はランダムで出題します。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();