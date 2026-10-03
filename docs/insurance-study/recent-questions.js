(()=>{
const A=[
{id:'r_trait_disaster180',src:'2026対応演習 第2回1-1',topic:'特約',text:'災害入院特約では、災害による事故の日から180日以内に開始した所定の入院について、入院給付金が支払われる。',answer:true,ex:'○。事故の日から180日以内に開始した所定の入院が対象となる点が重要です。',focus:false},
{id:'r_trait_injury_death',src:'2026対応演習 第2回1-1',topic:'特約',text:'傷害特約では、災害で所定の身体障害になった場合だけが対象で、災害死亡の場合の保険金は支払われない。',answer:false,ex:'×。傷害特約は災害による身体障害だけでなく、災害死亡も保障対象となります。',focus:false},
{id:'r_trait_disease_injury',src:'2026対応演習 第2回1-1',topic:'特約',text:'疾病入院特約は、事故によるケガで入院した場合にも入院給付金が支払われる特約である。',answer:false,ex:'×。疾病入院特約の入院給付は病気による入院が中心です。事故による入院は災害入院特約の論点です。',focus:false},
{id:'r_terms_contract_type',src:'2026対応演習 第2回1-2',topic:'約款・しおり',text:'生命保険の約款は、契約者ごとではなく保険種類ごとに作成される。',answer:true,ex:'○。すべての契約者を公平な条件で扱うため、保険種類ごとに定められます。',focus:false},
{id:'r_terms_approval',src:'2026対応演習 第2回1-2',topic:'約款・しおり',text:'生命保険の約款の作成や改正には、法務大臣の認可が必要である。',answer:false,ex:'×。専門課程の論点では、内閣総理大臣の認可が必要とされています。',focus:false},
{id:'r_terms_shiori',src:'2026対応演習 第2回1-2',topic:'約款・しおり',text:'「ご契約のしおり」は、申込みを受ける際に契約者へ渡し、重要事項を説明して理解してもらう必要がある。',answer:true,ex:'○。申込時の重要事項説明と理解確認が重要です。',focus:false},
{id:'r_premium_grace_death',src:'2026対応演習 第2回1-3',topic:'保険料の払込み',text:'保険料払込猶予期間中に死亡事故が起きた場合、未払込保険料があっても死亡保険金から差し引かれない。',answer:false,ex:'×。猶予期間中の死亡事故では、死亡保険金から未払込保険料を差し引いて支払う扱いがあります。',focus:false},
{id:'r_premium_auto_loan',src:'2026対応演習 第2回1-3',topic:'保険料の払込み',text:'一時的に保険料の払込みが困難でも、解約返戻金の範囲内で自動的に立て替え、契約を継続させる制度がある。',answer:true,ex:'○。自動振替貸付制度の基本です。',focus:false},
{id:'r_premium_paidup_rider',src:'2026対応演習 第2回1-3',topic:'払済・延長保険',text:'払済保険や延長（定期）保険へ変更しても、元契約の各種特約は原則そのまま継続する。',answer:false,ex:'×。払済・延長保険へ変更すると、各種特約の保障は原則なくなります。',focus:false},
{id:'r_selection_three',src:'2026対応演習 第3回5-1',topic:'契約の選択',text:'契約選択の基準となる危険には、身体上の危険、環境上の危険、道徳上の危険（モラルリスク）がある。',answer:true,ex:'○。この3分類は頻出です。',focus:false},
{id:'r_selection_special',src:'2026対応演習 第3回5-1',topic:'契約の選択',text:'危険度が一定範囲を超えていても、保険料割増や保険金削減、特定疾病・部位の不担保などの条件を付けて引き受ける場合がある。',answer:true,ex:'○。特別条件付契約の代表的な条件です。',focus:false},
{id:'r_selection_reverse',src:'2026対応演習 第3回5-1',topic:'契約の選択',text:'危険度の高い人ほど生命保険に加入しようとする傾向を、逆選択という。',answer:true,ex:'○。保険制度の公平性に関わる重要用語です。',focus:false},
{id:'r_selection_route',src:'2026対応演習 第1回4-4',topic:'契約の選択',text:'申込経路や、保険金受取人が第三者であるなど不自然な点は、契約選択上確認する必要がない。',answer:false,ex:'×。モラルリスクの観点から、申込経路や受取人などの不自然な点も確認対象です。',focus:false},
{id:'r_compliance_consumer',src:'2026対応演習 第2回2-1',topic:'コンプライアンス',text:'消費者契約法では、不適切な勧誘で誤認・困惑して締結した契約について、一定の場合に意思表示を取り消せる。',answer:true,ex:'○。消費者保護の基本論点です。',focus:false},
{id:'r_compliance_finservice',src:'2026対応演習 第2回2-1',topic:'コンプライアンス',text:'金融商品の販売で重要なリスク説明を怠り顧客に損害が生じた場合の損害賠償責任を定める法律として、金融サービス提供法がある。',answer:true,ex:'○。旧称等との混同に注意します。',focus:false},
{id:'r_compliance_inslaw',src:'2026対応演習 第2回2-1',topic:'コンプライアンス',text:'保険法は、保険会社と契約者等の間の契約ルールを定める法律である。',answer:true,ex:'○。保険契約者等の保護を目的とする契約法上の基本法です。',focus:false},
{id:'r_prohibit_discount',src:'2026対応演習 第3回1-4',topic:'禁止行為',text:'「加入してくれれば第1回保険料をサービスする」と約束して申込みを得る行為は、禁止行為に該当する。',answer:true,ex:'○。保険料の割引・割戻にあたり、禁止行為です。',focus:false},
{id:'r_prohibit_dividend',src:'2026対応演習 第3回1-4',topic:'禁止行為',text:'過去の配当実績を根拠に「将来も高配当が確保できる」と断定して説明しても、禁止行為には該当しない。',answer:false,ex:'×。断定的な予想配当の説明は不適切です。',focus:false},
{id:'r_prohibit_position',src:'2026対応演習 第3回1-4',topic:'禁止行為',text:'取引先に「保険に加入しないなら今後の取引を考え直す」とほのめかして加入させる行為は、業務上の地位の不当利用に当たる。',answer:true,ex:'○。禁止行為として扱われます。',focus:false},
{id:'r_prohibit_short_cancel',src:'2026対応演習 第2回7',topic:'禁止行為',text:'短期解約を前提とした契約募集など、保険本来の趣旨を逸脱する募集行為は規制対象となる。',answer:true,ex:'○。「保険募集に関して著しく不当な行為」の代表例です。',focus:false},
{id:'r_claim_prestart',src:'2026対応演習 第1回10',topic:'保険金・給付金',text:'高度障害保険金や入院給付金等は、原因となる疾病・傷害などが責任開始期前に生じていた場合、約款上支払われないことがある。',answer:true,ex:'○。責任開始期前発病・事故は支払要件に関わる重要論点です。',focus:false},
{id:'r_loan_dividend',src:'2026対応演習 第1回10',topic:'契約者貸付',text:'契約者貸付を受けている契約は、貸付を受けていない契約より配当金が必ず少なくなる。',answer:false,ex:'×。専門課程演習では、契約者貸付の有無で配当金額は変わらないと扱われています。',focus:false},
{id:'r_revive_gap',src:'2026対応演習 第1回10',topic:'失効・復活',text:'失効した契約を後に復活しても、失効期間中に発生した保険事故は保障対象にならない。',answer:true,ex:'○。復活しても失効期間中まで遡って保障されるわけではありません。',focus:false},
{id:'r_social_base_types',src:'2026対応演習 第2回3-1',topic:'公的年金',text:'国民年金の基礎年金には、老齢基礎年金・障害基礎年金・遺族基礎年金の3種類がある。',answer:true,ex:'○。「退職基礎年金」ではありません。',focus:false},
{id:'r_social_employee_premium',src:'2026対応演習 第2回3-1',topic:'公的年金',text:'厚生年金加入の会社員とその被扶養配偶者は、国民年金保険料を厚生年金保険料とは別に必ず納付する。',answer:false,ex:'×。基礎年金に必要な費用は厚生年金制度側で負担され、個別に国民年金保険料を納める扱いではありません。',focus:false},
{id:'r_social_fund_first',src:'2026対応演習 第2回3-1',topic:'公的年金',text:'国民年金基金は、国民年金の第1号被保険者である自営業者などが公的年金に上乗せするための制度である。',answer:true,ex:'○。第1号被保険者の上乗せ年金制度です。',focus:false},
{id:'r_tax_new_three',src:'2026対応演習 第2回8',topic:'生命保険料控除',text:'2012年1月1日以後の契約では、一般生命保険料・個人年金保険料に加え、介護医療保険料の控除区分がある。',answer:true,ex:'○。新制度では3区分です。',focus:false},
{id:'r_tax_income_max',src:'2026対応演習 第2回8',topic:'生命保険料控除',text:'2012年1月1日以後の契約のみの場合、所得税の生命保険料控除は3区分それぞれ最高4万円、合計最高12万円である。',answer:true,ex:'○。現行の新制度の上限です。',focus:false},
{id:'r_tax_resident_max',src:'2026対応演習 第2回8',topic:'生命保険料控除',text:'2012年1月1日以後の契約のみの場合、住民税の生命保険料控除は3区分それぞれ最高2万8千円で、合計上限は7万円である。',answer:true,ex:'○。3区分を単純合計した8万4千円ではなく、合計上限は7万円です。',focus:false},
{id:'r_inherit_deadline',src:'2026対応演習＋国税庁現行確認',topic:'相続税',text:'相続税の申告・納税期限は、原則として被相続人が死亡したことを知った日の翌日から10か月以内である。',answer:true,ex:'○。国税庁の現行ルールでも10か月以内です。',focus:false},
{id:'r_inherit_basic_current',src:'国税庁 令和8年現行確認',topic:'相続税',text:'相続税の基礎控除額は、3,000万円＋600万円×法定相続人の数で計算する。',answer:true,ex:'○。現在の基礎控除額です。古い教材の5,000万円＋1,000万円×人数と混同しないよう注意します。',focus:false},
{id:'r_inherit_insurance_exempt',src:'国税庁 令和8年現行確認',topic:'相続税',text:'相続人が受け取る死亡保険金の相続税非課税限度額は、原則500万円×法定相続人の数である。',answer:true,ex:'○。相続人以外が受け取る死亡保険金にはこの非課税枠はありません。',focus:false},
{id:'r_inherit_spouse_relief',src:'国税庁 令和8年現行確認',topic:'相続税',text:'配偶者が実際に取得した正味の遺産額は、1億6,000万円または配偶者の法定相続分相当額のいずれか多い金額まで、配偶者の税額軽減の対象となる。',answer:true,ex:'○。1億6,000万円と法定相続分相当額の「多い方」が基準です。',focus:false},
{id:'r_inherit_contribution',src:'2026対応演習 第1回10',topic:'相続',text:'被相続人の財産の維持・増加に特に貢献した相続人が、その貢献に応じた額を取得できる制度を寄与分制度という。',answer:true,ex:'○。遺留分制度との混同に注意します。',focus:false},
{id:'r_need_two_events',src:'2026対応演習 第2回6-4',topic:'顧客ニーズ',text:'生活設計では、死亡・事故など不意の出来事と、結婚・教育・住宅取得など予測できる出来事の両方を考える必要がある。',answer:true,ex:'○。コンサルティングの基本的な考え方です。',focus:false},
{id:'r_need_design_sales',src:'2026対応演習 第2回6-4',topic:'顧客ニーズ',text:'コンサルティングセールスでは、顧客情報を収集・整理し、生活設計書や保険設計書を作成したうえで提案する設計販売の手順が重要である。',answer:true,ex:'○。ニーズ把握から設計・提案へ進む流れです。',focus:false},
{id:'r_need_compensatory_division',src:'2026対応演習 第2回6-4',topic:'相続・顧客ニーズ',text:'1人が家業や財産を承継し、他の相続人に相応分の現金等を渡す方法を代償分割という。',answer:true,ex:'○。代襲相続ではありません。生命保険金を代償資金に活用する考え方があります。',focus:false},
{id:'r_stock_profit',src:'2026対応演習 第1回10',topic:'資産運用',text:'株式投資の収益には、株主としての利益配当と、株価値上がりによる売却益がある。',answer:true,ex:'○。インカムゲインとキャピタルゲインに相当する基本論点です。',focus:true},
{id:'r_social_welfare',src:'2026対応演習 第1回10',topic:'社会保障',text:'社会福祉制度は、高齢者、障害者、児童、母子世帯などの福祉を図ることを目的とする。',answer:true,ex:'○。社会保障制度の一分野です。',focus:false},
{id:'r_group_medical_benefits',src:'2026対応演習 第1回10',topic:'企業保障制度',text:'医療保障保険（団体型）の給付内容は、治療給付金・入院給付金・死亡給付金などで構成される。',answer:true,ex:'○。個人向け医療特約の給付項目と混同しないよう注意します。',focus:false}
];
const ids=new Set((window.STUDY_QUESTIONS||[]).map(q=>q.id));
for(const q of A){if(!ids.has(q.id)){window.STUDY_QUESTIONS.push(q);ids.add(q.id)}}
window.STUDY_META=window.STUDY_META||{};
window.STUDY_META.recentAdded=A.length;
window.STUDY_META.questions=window.STUDY_QUESTIONS.length;
window.STUDY_META.focusQuestions=window.STUDY_QUESTIONS.filter(q=>q.focus).length;
})();