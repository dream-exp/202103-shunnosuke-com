import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const LightSyncPage = () => (
  <Layout title="LightSync">
    <ContentsWrapper>
        <WorkHeader title="LightSync" />
        <WorkDescription>
            <p>
            LightSyncは、観客が持つスマートフォンをサイリウムライトにする取り組みです。毎年11月に開催される徳山高専の学園祭のステージダンス企画に向けて開発しました。観客はQRコードまたはURLから、あらかじめ用意されたWebページにアクセスします。ダンスが始まると、Webページの画面が様々な色に発光し、サイリウムライトのような効果が得られます。画面に表示される色はプログラムによって制御され、会場全体のスマートフォンで同じ色が表示されるため、会場に一体感を生みだすことができます。色のコントロールは、あらかじめ決められたプリセットをコントローラから切り替えることで実現しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/lightsync/lightsync_1.png",
             "/images/works/individual/lightsync/lightsync_2.png"
        ]} />
        <WorkDescription>
            <p>
            高専専攻科1年在学時に、2名のチームで制作。企画立案、フロントエンドの実装、Node.jsを用いたサーバの構築と本番環境へのデプロイを担当しました。元々高専祭のステージダンス企画が好きで、自分も演出に携わってみたいと思ったことがこの作品を制作するきっかけとなりました。テーマの設定にあたっては、従来の高専祭ステージ企画は、観客がダンスを見て楽しむという一方向的な演出であったため、さらに企画を盛り上げるためには観客とダンサーの双方向的な演出が必要だと考え、LightSyncの制作が決定しました。制作にあたっては、観客にアプリをインストールしてもらうのは現実的ではないという判断から、Webアプリとして提供することにし、WebSocketを用いてスマートフォンの色を非同期的に変化させる方法を採用しました。運用面では、会場内に無線ネットワークを構築し、そのネットワーク内でWebアプリを動作させることを最初に検証しましたが、接続台数の問題やWi-Fi接続の手間を考慮し、WebアプリをVPSにデプロイする方法を採用しました。
            </p>
        </WorkDescription>
        <WorkYoutube 
            VideoID={"fdmjOjeI4Qo"}
        />
        <WorkInfo 
            period="2017/08 - 2017/11"
            technologies="React.js / Node.js / Python / WebSocket"
            member="2名"
            responsible="企画立案、フロントエンドの実装、Node.jsを用いたサーバの構築と本番環境へのデプロイを担当"
            others={<>2017年11月に開催された徳山高専高専祭のステージダンス企画の演出にLightSyncを使用</>}
        />
    </ContentsWrapper>
  </Layout>
);

export default LightSyncPage;