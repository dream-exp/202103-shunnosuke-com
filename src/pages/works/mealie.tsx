import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const MealiePage = () => (
  <Layout title="Mealie">
    <ContentsWrapper>
        <WorkHeader title="Mealie ― 学食食券オンライン予約システム" />
        <WorkDescription>
            <p>
            Mealie(ミライ)は、「学食をもっと手軽に」をコンセプトに作られた、学食の食券を教室のタブレットから予約できるシステムです。
            </p>
            <p>
            従来の徳山高専の学食は食券方式で、また売り切れが発生していることも多くありました。Mealie は教室からメニューを閲覧することができるため、売り切れ情報をリアルタイムに確認することができ、食べたいメニューのためにわざわざ朝早くに学食へ食券を買いに行ったり、いざ学食に行ったら売り切れていた、という悩みを解決します。
            </p>
            <p>
            Mealieは商品の販売数、人気商品のランキング、在庫数、未払いのユーザなどの情報を記録しています。これらの情報は管理画面から簡単に確認できるため、例えば「このメニューは人気があるから在庫を増やそう」などといった対策を行えるようになります。また、管理者のスマートフォンからメニューの追加・編集も可能となっており、日替わりメニューの更新作業も簡単に行えるようになっています。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/mealie/mealie_3.png",
             "/images/works/individual/mealie/mealie_1.png",
             "/images/works/individual/mealie/mealie_4.png",
             "/images/works/individual/mealie/mealie_5.jpg"
        ]} />
        <WorkDescription>
            <p>
            Mealieは高専5年在学時に4名のチームで制作。プロジェクトマネジメント、UI/UXデザイン、コーディングのほぼ全てを担当しました。テーマの設定に当たっては、自分が学食を利用していて不便だと感じていることをなるべくこのシステムで改善すると共に、導入する側のメリットにもこだわりました。その結果が、学生は食券をオンライン予約できる、食堂側は購買データを簡単に得ることができる、という機能に繋がりました。また、既存サービスの仕組みに近い手続き（ECサイトにおけるカートの概念をMealieではトレーとして用意）にする、ICカード付き学生証をかざすだけでログインできるようにするなど、学生が誰でも簡単に利用できるようなUXにもこだわりました。
            </p>
        </WorkDescription>
        <WorkYoutube 
            VideoID={"MiFkeutR3ZU"}
        />
        <WorkInfo 
            period="2016/04 - 2016/06"
            award="U-22 プログラミング・コンテスト 2016 経済産業省商務情報政策局長賞・スポンサー企業賞 / 独立行政法人国立高等専門学校機構 理事長表彰"
            technologies="Ruby on Rails / Ruby / HTML / CSS / JavaScript / jQuery"
            member="4名"
            responsible="開発リーダーとしてプロジェクトマネジメントを担当しつつ、システムの要件定義、UIデザインから、Ruby on Railsを使用したシステムの開発まで一貫して担当。"
            github={<a href="http://github.com/dream-exp/mealie">http://github.com/dream-exp/mealie</a>}
            others={<><a href="/files/mealie/mealie_pamphlet_reduce.pdf">作品パンフレット</a></>}
        />
    </ContentsWrapper>
  </Layout>
);

export default MealiePage;