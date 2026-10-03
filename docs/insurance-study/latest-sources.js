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
function refresh(){const fb=document.getElementById('feedback'),sr=document.getElementById('sourceRef'),topicEl=document.getElementById('source'),qEl=document.getElementById('question');if(!fb||!sr||!topicEl||!qEl||!fb.classList.contains('show'))return;const base=(sr.textContent||'').split(' ｜ 最新確認：')[0].trim();if(!base)return;const topic=(topicEl.textContent||'').replace(/^重点・/,'');const s=pick(topic,qEl.textContent||'');const key=base+'|'+s.url;if(sr.dataset.latestKey===key&&sr.querySelector('a[data-latest-source]'))return;sr.dataset.latestKey=key;sr.innerHTML=esc(base)+' <span style="color:#60769c">｜</span> <span style="color:#9fb2d9">最新確認：</span><a data-latest-source href="'+s.url+'" target="_blank" rel="noopener noreferrer" style="color:#49d7a0;text-decoration:none;font-weight:900">'+esc(s.label)+' ↗</a>'}
function init(){const fb=document.getElementById('feedback');if(!fb)return;new MutationObserver(()=>queueMicrotask(refresh)).observe(fb,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']});refresh()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));else setTimeout(init,0);
})();