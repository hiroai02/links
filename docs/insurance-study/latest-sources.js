(()=>{
const S={
 taxDeduction:{label:'国税庁・生命保険料控除（令和8年4月1日現在）',url:'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm'},
 inheritInsurance:{label:'国税庁・死亡保険金の相続税（令和8年4月1日現在）',url:'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4114.htm'},
 inheritCalc:{label:'国税庁・相続税の計算（令和8年現行）',url:'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm'},
 incomeInsurance:{label:'国税庁・生命保険の一時所得（令和8年4月1日現在）',url:'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1903.htm'},
 ssi:{label:'金融庁・少額短期保険業制度（現行）',url:'https://www.fsa.go.jp/ordinary/syougaku/index.html'},
 dc:{label:'厚生労働省・確定拠出年金制度（現行）',url:'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/nenkin/nenkin/kyoshutsu/gaiyou.html'},
 pension:{label:'日本年金機構・年金制度（現行）',url:'https://www.nenkin.go.jp/service/'},
 ja:{label:'JA共済・公式現行情報（令和8年）',url:'https://www.ja-kyosai.or.jp/okangae/person/lifeadvisor/'},
 zenrosai:{label:'こくみん共済 coop・公式現行情報',url:'https://www.zenrosai.coop/kyousai/kokumin/warimodoshikin.html'},
 prefecture:{label:'都道府県民共済・公式現行情報（2026年）',url:'https://www.kyosai-cc.or.jp/lp/seimei_all/index.html'},
 nonlife:{label:'日本損害保険協会・損害保険Q&A（現行）',url:'https://soudanguide.sonpo.or.jp/basic/1_2.html'},
 conversion:{label:'生命保険文化センター・転換制度（現行）',url:'https://www.jili.or.jp/knows_learns/basic/change/101.html'},
 compliance:{label:'金融庁・保険会社向け監督指針（現行）',url:'https://www.fsa.go.jp/common/law/guide/ins/'},
 securities:{label:'日本証券業協会・現行情報',url:'https://www.jsda.or.jp/'},
 life:{label:'生命保険文化センター・生命保険の基礎知識（現行）',url:'https://www.jili.or.jp/knows_learns/basic/'}
};
function pick(topic,text){const x=(topic+' '+text);
 if(/生命保険料控除/.test(x))return S.taxDeduction;
 if(/相続税/.test(x)){if(/死亡保険金|非課税限度額/.test(x))return S.inheritInsurance;return S.inheritCalc}
 if(/保険金と税金|一時所得|満期保険金/.test(x))return S.incomeInsurance;
 if(/少額短期保険/.test(x))return S.ssi;
 if(/確定拠出年金|iDeCo|ポータビリティ/.test(x))return S.dc;
 if(/公的年金|国民年金|厚生年金|基礎年金|社会保障/.test(x))return S.pension;
 if(/JA共済|ライフロード|予定利率変動型年金共済/.test(x))return S.ja;
 if(/こくみん共済|全労済/.test(x))return S.zenrosai;
 if(/都道府県民共済|全国生協連/.test(x))return S.prefecture;
 if(/損害保険|傷害保険|第三分野/.test(x))return S.nonlife;
 if(/契約転換制度|転換契約|転換時/.test(x))return S.conversion;
 if(/コンプライアンス|禁止行為|消費者契約法|金融サービス提供法|保険法/.test(x))return S.compliance;
 if(/証券|債券|投資信託|MRF|株式|資産運用/.test(x))return S.securities;
 return S.life;
}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function refresh(){const fb=document.getElementById('feedback'),sr=document.getElementById('sourceRef'),topicEl=document.getElementById('source'),qEl=document.getElementById('question');if(!fb||!sr||!topicEl||!qEl||!fb.classList.contains('show'))return;const base=(sr.textContent||'').split(' ｜ 最新確認：')[0].trim();if(!base)return;const topic=(topicEl.textContent||'').replace(/^重点・/,'').replace(/^計算・/,'').replace(/^計算式・/,'').replace(/^計算セット [①②] (?:読み取り|計算)・/,'');const s=pick(topic,qEl.textContent||'');const key=base+'|'+s.url;if(sr.dataset.latestKey===key&&sr.querySelector('a[data-latest-source]'))return;sr.dataset.latestKey=key;sr.innerHTML=esc(base)+' <span style="color:#60769c">｜</span> <span style="color:#9fb2d9">最新確認：</span><a data-latest-source href="'+s.url+'" target="_blank" rel="noopener noreferrer" style="color:#49d7a0;text-decoration:none;font-weight:900">'+esc(s.label)+' ↗</a>'}
const ruleTerms=['必ず','原則として','原則','一切','のみ','だけ','以内','以上','以下','未満','超える','同額','異なる','多い','少ない','高い','低い','対象外','不要','必要','支払われない','支払われる','消滅','継続','非課税','控除','免許','登録','認可','監督'];
const conceptTerms=['予定利率','予定死亡率','予定事業費率','運用収入見込額','実際の運用収入','利差益','死差益','費差益','純保険料','付加保険料','生命保険料控除','解約返戻金','死亡保険金','高度障害保険金','満期保険金','責任開始期','保険料払込猶予期間','自動振替貸付','契約者貸付','告知義務','失効','復活','終身保険','定期保険','養老保険','個人年金保険','変額保険','JA共済','こくみん共済','都道府県民共済','少額短期保険','損害保険','第三分野','国民年金','厚生年金','確定拠出年金','iDeCo','相続税','贈与税','一時所得','法定相続人','割戻金','契約転換制度','ポータビリティ'];
const ruleSet=new Set(ruleTerms);
function rxEscape(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
const terms=[...new Set([...ruleTerms,...conceptTerms])].sort((a,b)=>b.length-a.length).map(rxEscape);
const numberPattern='\\d[\\d,]*(?:\\.\\d+)?(?:％|%|兆円|億円|万円|千円|円|年|か月|ヶ月|月|日|歳|名|回|分の\\d+)?';
const focusRe=new RegExp('('+terms.join('|')+'|'+numberPattern+')','g');
const numberOnly=new RegExp('^'+numberPattern+'$');
function enhanceQuestion(){const q=document.getElementById('question');if(!q)return;const text=(q.textContent||'').replace(/\s+/g,' ').trim();if(!text||q.dataset.cleanLayoutText===text)return;q.dataset.cleanLayoutText=text;const html=esc(text).replace(focusRe,m=>'<span class="'+(ruleSet.has(m)||numberOnly.test(m)?'keypoint':'conceptpoint')+'">'+m+'</span>');q.innerHTML=html}
function tidySource(){const e=document.getElementById('source');if(!e)return;const before=e.textContent||'';let after=before;if(/^重点・計算・/.test(after))after=after.replace(/^重点・計算・/,'計算式・');if(/^計算・計算・/.test(after))after=after.replace(/^計算・計算・/,'計算式・');if(after!==before)e.textContent=after}
function forceFeedback(){const mock=document.querySelector('[data-modebtn="mock"].active');if(mock)return;const card=document.getElementById('qCard'),fb=document.getElementById('feedback'),ans=document.getElementById('answerLine');if(!card||!fb||!ans||!ans.textContent.trim())return;card.classList.add('answered');fb.classList.add('show');fb.style.visibility='visible';fb.style.opacity='1';fb.style.display='block';const next=document.getElementById('next');if(next&&next.parentElement)next.parentElement.style.display='block';refresh()}
function injectLayoutFix(){if(document.getElementById('study-ui-fix-v12'))return;const st=document.createElement('style');st.id='study-ui-fix-v12';st.textContent=`
#question.question{display:block!important;padding:18px 8px 8px!important;text-align:left!important;font-size:clamp(17px,2.02dvh,20px)!important;line-height:1.62!important;font-weight:820!important;white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;line-break:strict!important;letter-spacing:.01em!important}
#question.question.long{font-size:clamp(16px,1.87dvh,18.5px)!important;line-height:1.58!important}
#question.question.xlong{font-size:clamp(14.5px,1.68dvh,17px)!important;line-height:1.52!important}
#qCard.mcq-mode #question.question{padding-top:12px!important;font-size:clamp(15px,1.72dvh,17px)!important;line-height:1.48!important}
#question .keypoint{color:#ffd45e!important;background:rgba(255,212,94,.10)!important;border-radius:.22em!important;padding:0 .07em!important;font-weight:950!important;text-shadow:none!important}
#question .conceptpoint{color:#72d9ff!important;font-weight:950!important;text-shadow:none!important}
#qCard.mcq-mode .action-zone{flex-basis:156px!important}
#qCard.mcq-mode .mcq-choices{grid-template-columns:1fr!important;gap:5px!important}
#qCard.mcq-mode .mcq-choice{text-align:left!important;font-size:11px!important;line-height:1.22!important;padding:6px 10px!important;border-radius:11px!important;white-space:normal!important}
#qCard.mcq-mode.answered .feedback-slot{flex-basis:126px!important}
#qCard.mcq-mode.answered .answerline{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;line-height:1.25!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important}
#feedback.show{visibility:visible!important;opacity:1!important;display:block!important}
@media(max-height:740px){#question.question{padding:12px 5px 6px!important;font-size:15.5px!important;line-height:1.5!important}#question.question.long{font-size:14.5px!important}#question.question.xlong{font-size:13.5px!important}#qCard.mcq-mode #question.question{font-size:13px!important;padding-top:8px!important}#qCard.mcq-mode .action-zone{flex-basis:142px!important}#qCard.mcq-mode .mcq-choice{font-size:10px!important;padding:4px 8px!important}}
`;document.head.appendChild(st)}
function updateCopy(){const sub=document.querySelector('.sub');if(sub)sub.textContent='弱点自動分析・模試・計算式4択・近年論点・進捗自動保存';const info=document.querySelector('.info');if(info)info.textContent='計算分野は「正しい計算式を選ぶ」4択問題です。金額の暗算は不要。計算式問題は分野ごとに連続出題し、通常問題はランダムで出題します。'}
function init(){injectLayoutFix();updateCopy();const fb=document.getElementById('feedback'),q=document.getElementById('question'),src=document.getElementById('source');if(fb)new MutationObserver(()=>queueMicrotask(()=>{forceFeedback();refresh()})).observe(fb,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']});const rerender=()=>queueMicrotask(()=>{tidySource();enhanceQuestion();forceFeedback();refresh()});if(q)new MutationObserver(rerender).observe(q,{subtree:true,childList:true,characterData:true});if(src)new MutationObserver(rerender).observe(src,{subtree:true,childList:true,characterData:true});document.addEventListener('click',e=>{if(e.target.closest('.choice,.mcq-choice'))setTimeout(forceFeedback,0)},true);rerender()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));else setTimeout(init,0);
})();