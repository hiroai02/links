(()=>{
const MARK='insurance-study-reset-20261003-v13';
try{
  if(localStorage.getItem(MARK)==='done') return;
  ['life-specialist-study-v4','life-specialist-study-v3','life-specialist-study-v2','specialistStudyStandaloneV1'].forEach(k=>localStorage.removeItem(k));
  localStorage.setItem(MARK,'done');
}catch(e){}
})();
