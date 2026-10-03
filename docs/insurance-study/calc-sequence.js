(()=>{
const Q=window.STUDY_QUESTIONS||[];
const configs={
calc_survivor_family_1:{label:'末子独立までの家族生活資金',planChoices:['末子独立までの家族生活資金','妻の独立後生活資金','老後生活資金の総額','相続税の基礎控除額'],planCorrect:0},
calc_survivor_wife_1:{label:'末子独立後の妻の生活資金',planChoices:['末子独立までの家族生活資金','末子独立後の妻の生活資金','夫婦の老後生活資金','死亡保険金の非課税限度額'],planCorrect:1},
calc_oldage_couple_2:{label:'夫婦2人で生活する期間の老後生活資金',planChoices:['夫婦2人で生活する期間の老後生活資金','妻1人になった後の生活資金','遺族の必要保障額','相続税額'],planCorrect:0},
calc_oldage_total_3:{label:'老後生活資金の総額',planChoices:['夫婦生活資金だけ','妻1人の生活資金だけ','老後生活資金の総額','生命保険料控除額'],planCorrect:2},
calc_tax_income_90k:{label:'所得税の生命保険料控除額の合計',planChoices:['年間払込保険料の合計','所得税の生命保険料控除額の合計','住民税額','満期保険金の一時所得'],planCorrect:1},
calc_tax_income_80k:{label:'所得税の生命保険料控除額の合計',planChoices:['所得税の生命保険料控除額の合計','住民税の生命保険料控除額','相続税の基礎控除額','課税所得そのもの'],planCorrect:0},
calc_tax_resident_20k:{label:'住民税の生命保険料控除額',planChoices:['所得税の生命保険料控除額','住民税の生命保険料控除額','支払保険料総額','贈与税額'],planCorrect:1},
calc_tax_resident_30k:{label:'住民税の生命保険料控除額',planChoices:['住民税の生命保険料控除額','所得税額','相続税額','保険金額'],planCorrect:0},
calc_inherit_insurance_3:{label:'死亡保険金の非課税限度額',planChoices:['相続税の基礎控除額','死亡保険金の非課税限度額','一時所得の特別控除額','生命保険料控除額'],planCorrect:1},
calc_inherit_insurance_taxable:{label:'死亡保険金のうち課税対象となる部分',planChoices:['死亡保険金の総額','非課税限度額','死亡保険金のうち課税対象となる部分','相続税の基礎控除額'],planCorrect:2},
calc_inherit_basic_3:{label:'相続税の基礎控除額',planChoices:['死亡保険金の非課税限度額','相続税の基礎控除額','所得税の控除額','贈与税の基礎控除額'],planCorrect:1},
calc_inherit_basic_4:{label:'相続税の基礎控除額',planChoices:['相続税の基礎控除額','死亡保険金の非課税限度額','一時所得額','所得控除額'],planCorrect:0},
calc_lumpsum_income_700:{label:'総所得金額に算入される一時所得',planChoices:['受取保険金の総額','払込保険料総額','総所得金額に算入される一時所得','相続税額'],planCorrect:2},
calc_lumpsum_income_1000:{label:'総所得金額に算入される一時所得',planChoices:['死亡保険金の非課税限度額','総所得金額に算入される一時所得','相続税の基礎控除額','生命保険料控除額'],planCorrect:1}
};
const additions=[];
for(const base of Q){
 const cfg=configs[base.id];
 if(!cfg||!base.mcq)continue;
 base.sequenceGroup=base.id;
 base.sequenceOrder=2;
 base.sequenceRole='calculate';
 const planId=base.id+'__plan';
 if(Q.some(x=>x.id===planId)||additions.some(x=>x.id===planId))continue;
 const context=String(base.mcq.prompt||base.text||'').replace(/(?:いくらか。?|となる。?)$/,'').trim();
 additions.push({
   id:planId,
   src:base.src,
   topic:base.topic,
   text:context+'\n\nこの問題で、まず計算すべきものはどれか。',
   answer:true,
   ex:'まず「何を求める問題か」を特定します。正解は「'+cfg.label+'」です。次の問題で実際に金額を計算します。',
   focus:true,
   calc:true,
   sequenceGroup:base.id,
   sequenceOrder:1,
   sequenceRole:'plan',
   mcq:{prompt:context+'\n\nこの問題で、まず計算すべきものはどれか。',choices:cfg.planChoices,correct:cfg.planCorrect}
 });
}
window.STUDY_QUESTIONS.push(...additions);
window.STUDY_META=window.STUDY_META||{};
window.STUDY_META.calcSequencePairs=additions.length;
})();