(()=>{
const Q=window.STUDY_QUESTIONS||[];
const groups=[
 ['calc-family',['calc_survivor_family_1','calc_survivor_wife_1']],
 ['calc-oldage',['calc_oldage_couple_2','calc_oldage_total_3']],
 ['calc-tax-income',['calc_tax_income_90k','calc_tax_income_80k']],
 ['calc-tax-resident',['calc_tax_resident_20k','calc_tax_resident_30k']],
 ['calc-inherit-insurance',['calc_inherit_insurance_3','calc_inherit_insurance_taxable']],
 ['calc-inherit-basic',['calc_inherit_basic_3','calc_inherit_basic_4']],
 ['calc-income-lumpsum',['calc_lumpsum_income_700','calc_lumpsum_income_1000']]
];
for(const [group,ids] of groups){
 ids.forEach((id,i)=>{
   const q=Q.find(x=>x.id===id);
   if(!q)return;
   q.sequenceGroup=group;
   q.sequenceOrder=i+1;
   q.sequenceRole='method';
   q.calc=true;
   q.formula=true;
   q.focus=true;
 });
}
window.STUDY_META=window.STUDY_META||{};
window.STUDY_META.calcSequencePairs=groups.length;
window.STUDY_META.calcQuestions=groups.reduce((n,g)=>n+g[1].length,0);
})();