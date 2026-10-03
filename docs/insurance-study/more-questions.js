(()=>{
const A=[
{id:'calc_survivor_family_1',src:'2026対応演習 第1回 第9問',topic:'計算・遺族生活資金',text:'夫35歳・妻30歳・末子2歳、月間生活費30万円。末子は22歳で独立し、夫死亡後の家族生活費を現在の70％とする。この場合、末子独立までの家族の生活資金は5,040万円となる。',answer:true,ex:'○。30万円×70％×12か月×20年＝5,040万円。',focus:true,calc:true},
{id:'calc_survivor_wife_1',src:'2026対応演習 第1回 第9問',topic:'計算・遺族生活資金',text:'夫35歳・妻30歳・末子2歳、月間生活費30万円。末子22歳独立時の妻は50歳、女性50歳の平均余命を38年、妻の生活費を現在の50％とする。この場合、妻の生活資金は6,660万円となる。',answer:false,ex:'×。30万円×50％×12か月×38年＝6,840万円です。',focus:true,calc:true},
{id:'calc_oldage_couple_2',src:'2026対応演習 第2回 第9問',topic:'計算・老後生活資金',text:'夫39歳・妻35歳、月間生活費30万円、夫60歳定年。定年時の夫の平均余命23年、妻の平均余命32年、夫婦の老後生活費を現在の70％とする。この場合、夫婦の老後生活資金は5,796万円となる。',answer:true,ex:'○。短い方の23年を使い、30万円×70％×12か月×23年＝5,796万円。',focus:true,calc:true},
{id:'calc_oldage_total_3',src:'2026対応演習 第3回 第9問',topic:'計算・老後生活資金',text:'夫40歳・妻35歳、月間生活費30万円。夫60歳定年後の夫婦生活資金が5,796万円、夫死亡後の妻の生活資金が2,340万円なら、老後生活資金の総計は8,316万円である。',answer:false,ex:'×。5,796万円＋2,340万円＝8,136万円です。',focus:true,calc:true},
{id:'calc_tax_income_90k',src:'2026対応演習 第2回 第8問',topic:'計算・生命保険料控除',text:'2012年1月1日以後の契約で、年間保険料が一般生命保険料30,000円、個人年金保険料60,000円の場合、所得税の生命保険料控除額の合計は60,000円となる。',answer:true,ex:'○。一般は25,000円、個人年金は35,000円。合計60,000円。',focus:true,calc:true},
{id:'calc_tax_income_80k',src:'2026対応演習 第3回 第8問',topic:'計算・生命保険料控除',text:'2012年1月1日以後の契約で、一般生命保険料20,000円、個人年金保険料60,000円の場合、所得税の生命保険料控除額の合計は50,000円となる。',answer:false,ex:'×。一般20,000円＋個人年金35,000円＝55,000円です。',focus:true,calc:true},
{id:'calc_tax_resident_20k',src:'2026対応演習 第2回 第8問',topic:'計算・生命保険料控除',text:'2012年1月1日以後の契約で、介護医療保険料だけを年間20,000円支払った場合、住民税の生命保険料控除額は16,000円となる。',answer:true,ex:'○。20,000円×1/2＋6,000円＝16,000円。',focus:true,calc:true},
{id:'calc_tax_resident_30k',src:'2026対応演習 第3回 第8問',topic:'計算・生命保険料控除',text:'2012年1月1日以後の契約で、介護医療保険料だけを年間30,000円支払った場合、住民税の生命保険料控除額は21,000円となる。',answer:true,ex:'○。30,000円×1/2＋6,000円＝21,000円。',focus:true,calc:true},
{id:'calc_inherit_insurance_3',src:'2026年現行税制・国税庁確認',topic:'計算・相続税',text:'法定相続人が配偶者と子2人の合計3人で、相続人が受け取る死亡保険金の非課税限度額を計算すると1,500万円となる。',answer:true,ex:'○。500万円×法定相続人3人＝1,500万円。',focus:true,calc:true},
{id:'calc_inherit_insurance_taxable',src:'2026年現行税制・国税庁確認',topic:'計算・相続税',text:'法定相続人が3人で、相続人が受け取った死亡保険金の合計が2,500万円の場合、生命保険金の非課税限度額だけを考えると課税対象となる部分は1,000万円である。',answer:true,ex:'○。非課税限度額1,500万円なので、2,500万円－1,500万円＝1,000万円。',focus:true,calc:true},
{id:'calc_inherit_basic_3',src:'2026年現行税制・国税庁確認',topic:'計算・相続税',text:'法定相続人が3人の場合、相続税の基礎控除額は4,800万円である。',answer:true,ex:'○。3,000万円＋600万円×3人＝4,800万円。',focus:true,calc:true},
{id:'calc_inherit_basic_4',src:'2026年現行税制・国税庁確認',topic:'計算・相続税',text:'法定相続人が4人の場合、相続税の基礎控除額は5,000万円である。',answer:false,ex:'×。3,000万円＋600万円×4人＝5,400万円です。',focus:true,calc:true},
{id:'calc_lumpsum_income_700',src:'2026年現行税制・国税庁確認',topic:'計算・保険金と税金',text:'保険料負担者本人が満期保険金700万円を一時金で受け取り、払込保険料総額が500万円、他に一時所得がない場合、総所得金額に算入される一時所得は75万円となる。',answer:true,ex:'○。（700万円－500万円－50万円）×1/2＝75万円。',focus:true,calc:true},
{id:'calc_lumpsum_income_1000',src:'2026年現行税制・国税庁確認',topic:'計算・保険金と税金',text:'保険料負担者と死亡保険金受取人が同一人で、死亡保険金1,000万円を一時金で受け取り、払込保険料総額が700万円、他に一時所得がない場合、総所得金額に算入される一時所得は250万円となる。',answer:false,ex:'×。（1,000万円－700万円－50万円）×1/2＝125万円です。',focus:true,calc:true},
{id:'extra_conversion_new',src:'2026対応演習 第1回 第7問',topic:'契約転換制度',text:'契約転換制度を利用すると、保障内容・保険金額・保険料などは新しい契約内容に切り替わる。',answer:true,ex:'○。転換前後の保障内容や保険料を比較して確認することが重要です。',focus:false},
{id:'extra_conversion_age',src:'2026対応演習 第1回 第7問',topic:'契約転換制度',text:'契約転換後の保険料は、転換前の契約時年齢と当時の保険料率をそのまま使って計算される。',answer:false,ex:'×。転換時の契約年齢・保険料率で計算されます。',focus:false},
{id:'extra_conversion_doc',src:'2026対応演習 第1回 第7問',topic:'契約転換制度',text:'転換契約の募集では、転換前後の重要事項を対比した書面を契約者へ交付して説明し、受領確認を得る必要がある。',answer:true,ex:'○。転換前後の比較説明と書面交付が重要です。',focus:false},
{id:'extra_variable_guarantee',src:'2026対応演習 第1回 第1問-1',topic:'個人保険',text:'変額保険の終身型では、運用実績により積立金等は変動するが、死亡・高度障害保険金について基本保険金額は保証される。',answer:true,ex:'○。運用実績で変動しても、死亡・高度障害の基本保険金額は保証されます。',focus:false},
{id:'extra_child_policyholder',src:'2026対応演習 第1回 第1問-1',topic:'個人保険',text:'こども保険は、通常、子ども自身が契約者となって加入する。',answer:false,ex:'×。通常は親が契約者となります。',focus:false},
{id:'extra_annuity_death',src:'2026対応演習 第1回 第1問-1',topic:'個人年金',text:'個人年金保険では、保険料払込期間中に被保険者が死亡した場合、一般に払込保険料相当額の死亡給付金が支払われる。',answer:true,ex:'○。払込期間中の死亡給付金の基本的な扱いです。',focus:false},
{id:'extra_dc_individual',src:'2026対応演習 第3回 第3問-3',topic:'確定拠出年金',text:'確定拠出年金制度には、企業型と個人型がある。',answer:true,ex:'○。個人型はiDeCoとして知られています。',focus:false},
{id:'extra_dc_guarantee',src:'2026対応演習 第3回 第3問-3',topic:'確定拠出年金',text:'企業型確定拠出年金で加入者が元本割れする運用商品を選んだ場合、企業には元本を補てんする義務がある。',answer:false,ex:'×。企業に元本補てん義務はありません。',focus:false},
{id:'extra_dc_portability',src:'2026対応演習 第3回 第3問-3',topic:'確定拠出年金',text:'確定拠出年金には、転職・離職時に年金資産を移換できるポータビリティの仕組みがある。',answer:true,ex:'○。転職先の制度等へ資産を移換できる仕組みがあります。',focus:false},
{id:'extra_dc_benefits',src:'2026対応演習 第3回 第3問-3',topic:'確定拠出年金',text:'確定拠出年金の給付には、老齢給付金・障害給付金・死亡一時金がある。',answer:true,ex:'○。代表的な給付の3区分です。',focus:false}
];
const ids=new Set((window.STUDY_QUESTIONS||[]).map(q=>q.id));
for(const q of A){if(!ids.has(q.id)){window.STUDY_QUESTIONS.push(q);ids.add(q.id)}}
window.STUDY_META=window.STUDY_META||{};
window.STUDY_META.moreAdded=A.length;
window.STUDY_META.questions=window.STUDY_QUESTIONS.length;
window.STUDY_META.focusQuestions=window.STUDY_QUESTIONS.filter(q=>q.focus).length;
window.STUDY_META.calcQuestions=window.STUDY_QUESTIONS.filter(q=>q.calc).length;
const s=document.createElement('script');s.src='./latest-sources.js?v=7';document.head.appendChild(s);
})();