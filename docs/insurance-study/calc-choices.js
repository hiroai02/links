(()=>{
const M={
calc_survivor_family_1:{prompt:'末子が独立するまでの家族生活資金を求める計算式はどれか。',choices:['月間生活費 × 70％ × 12 ×（末子の独立年齢－現在の末子年齢）','月間生活費 × 50％ × 12 × 妻の平均余命','3,000万円 ＋ 600万円 × 法定相続人','受取保険金 － 払込保険料 － 50万円'],correct:0,formula:true},
calc_survivor_wife_1:{prompt:'末子独立後の妻の生活資金を求める計算式はどれか。',choices:['月間生活費 × 70％ × 12 × 末子独立までの年数','月間生活費 × 50％ × 12 × 末子独立時の妻の平均余命','月間生活費 × 50％ × 12 × 夫の平均余命','500万円 × 法定相続人'],correct:1,formula:true},
calc_oldage_couple_2:{prompt:'夫婦2人で生活する期間の老後生活資金を求める計算式はどれか。',choices:['月間生活費 × 70％ × 12 × 夫婦2人で生活する年数','月間生活費 × 50％ × 12 × 妻1人の期間','月間生活費 × 70％ × 夫婦2人で生活する年数','月間生活費 × 12 × 妻の平均余命'],correct:0,formula:true},
calc_oldage_total_3:{prompt:'老後生活資金の総額を求める計算式はどれか。',choices:['夫婦2人の生活資金 － 妻1人の生活資金','夫婦2人の生活資金 ＋ 妻1人の生活資金','月間生活費 × 50％だけ','死亡保険金 ＋ 相続税の基礎控除額'],correct:1,formula:true},
calc_tax_income_90k:{prompt:'新制度の所得税・生命保険料控除で、一般生命保険料3万円と個人年金保険料6万円を計算する式の組合せはどれか。',choices:['一般：3万円×1/2＋1万円 ／ 年金：6万円×1/4＋2万円','一般：3万円×1/4＋2万円 ／ 年金：6万円×1/2＋1万円','一般：3万円そのまま ／ 年金：6万円そのまま','一般：3万円×1/2＋6千円 ／ 年金：6万円×1/4＋1万4千円'],correct:0,formula:true},
calc_tax_income_80k:{prompt:'新制度の所得税・生命保険料控除で、一般生命保険料2万円と個人年金保険料6万円を計算する式の組合せはどれか。',choices:['一般：2万円そのまま ／ 年金：6万円×1/4＋2万円','一般：2万円×1/2＋1万円 ／ 年金：6万円そのまま','一般：2万円×1/2＋6千円 ／ 年金：6万円×1/4＋1万4千円','一般：2万円×1/4＋2万円 ／ 年金：6万円×1/2＋1万円'],correct:0,formula:true},
calc_tax_resident_20k:{prompt:'新制度の住民税・生命保険料控除で、年間保険料2万円の控除額を求める式はどれか。',choices:['2万円 × 1/2 ＋ 6千円','2万円 × 1/2 ＋ 1万円','2万円 × 1/4 ＋ 1万4千円','2万円そのまま'],correct:0,formula:true},
calc_tax_resident_30k:{prompt:'新制度の住民税・生命保険料控除で、年間保険料3万円の控除額を求める式はどれか。',choices:['3万円 × 1/4 ＋ 1万4千円','3万円 × 1/2 ＋ 6千円','3万円 × 1/2 ＋ 1万円','3万円そのまま'],correct:1,formula:true},
calc_inherit_insurance_3:{prompt:'相続人が受け取る死亡保険金の非課税限度額を求める計算式はどれか。',choices:['3,000万円 ＋ 600万円 × 法定相続人','500万円 × 法定相続人','110万円 × 法定相続人','死亡保険金 × 1/2'],correct:1,formula:true},
calc_inherit_insurance_taxable:{prompt:'死亡保険金のうち、非課税限度額を超える課税対象部分を求める式はどれか。',choices:['死亡保険金総額 ＋ 非課税限度額','死亡保険金総額 － 非課税限度額','非課税限度額 － 死亡保険金総額','死亡保険金総額 × 1/2'],correct:1,formula:true},
calc_inherit_basic_3:{prompt:'相続税の基礎控除額を求める計算式はどれか。',choices:['500万円 × 法定相続人','3,000万円 ＋ 600万円 × 法定相続人','5,000万円 ＋ 1,000万円 × 法定相続人','110万円 ＋ 600万円 × 法定相続人'],correct:1,formula:true},
calc_inherit_basic_4:{prompt:'法定相続人の人数から相続税の基礎控除額を求める正しい式はどれか。',choices:['3,000万円 ＋ 600万円 × 法定相続人','3,000万円 ＋ 500万円 × 法定相続人','500万円 × 法定相続人','受取保険金 － 50万円'],correct:0,formula:true},
calc_lumpsum_income_700:{prompt:'保険料負担者本人が満期保険金を一時金で受け取った場合、総所得金額に算入する一時所得を求める基本式はどれか。',choices:['（受取保険金－払込保険料－特別控除50万円）×1/2','受取保険金－払込保険料','（受取保険金＋払込保険料－50万円）×1/2','受取保険金×1/2－払込保険料'],correct:0,formula:true},
calc_lumpsum_income_1000:{prompt:'保険料負担者と受取人が同一で、死亡保険金を一時金で受け取る場合の一時所得の基本式はどれか。',choices:['（受取保険金－払込保険料－特別控除50万円）×1/2','500万円 × 法定相続人','3,000万円 ＋ 600万円 × 法定相続人','受取保険金－非課税限度額'],correct:0,formula:true}
};
for(const q of (window.STUDY_QUESTIONS||[])){if(M[q.id]){q.mcq=M[q.id];q.formula=true;q.calc=true;}}
window.STUDY_META=window.STUDY_META||{};
window.STUDY_META.mcqQuestions=Object.keys(M).length;
window.STUDY_META.calcMode='formula-selection';
})();