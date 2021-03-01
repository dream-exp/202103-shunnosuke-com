import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const MealiePage = () => (
  <Layout title="Smart枕">
    <ContentsWrapper>
        <WorkHeader title="Smart枕" />
        <WorkDescription>
            <p>
            Smart枕は、Android 端末と連携する枕型デバイス(圧力センサ、バイブレーション内蔵)を用いて、ユーザを確実に起こすと共に、睡眠の記録をもとにユーザにとって最適な睡眠時間を提供するプロダクトです。 他の目覚ましアプリとの大きな違いは、枕内部に圧力センサが組み込まれていることです。センサが組み込まれていることにより、今寝ているかどうかを自動で判断することができ、もし寝過ごしているようならバイブレーションとサウンドを使い、起きるまで起こし続けてくれます。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
            "/images/works/individual/smartmakura/smartmakura_3.png",
            "/images/works/individual/smartmakura/smartmakura_2.jpg",
            "/images/works/individual/smartmakura/smartmakura_1.jpg",
        ]} />
        <WorkDescription>
            <p>
            高専3年在学時に3名のチームで制作。アプリのUIデザインとAndroidアプリ内のUI部分のコードを書きました。テーマの設定においては、パソコン甲子園2014モバイル部門のテーマ「チャレンジ!!〜苦手を得意にするアプリ〜」に基づいて、開発者3名ともに苦手だった早起きを得意にするアプリの開発に決定しました。当時、IoTブームが徐々に到来しており、ハードウェア連携するアプリが増えてきていたため、本アプリにおいてもハードウェア連携によって睡眠に関する詳細なデータを取る、ハードウェア内蔵のバイブレーションによる物理フィードバックを行うアプリを開発することにしました。パソコン甲子園の本戦では惜しくも受賞はなりませんでしたが、自分が担当したUIデザインの部分に関しては参加企業・審査員の方々から好評をいただいたことから、デザインもできるエンジニアという立ち位置を自分の中で確立することができたコンテストとなりました。
            </p>
        </WorkDescription>
        <WorkYoutube 
            VideoID={"MoNLpyuXeA8"}
        />
        <WorkInfo 
            period="2014/04 - 2014/10"
            award="パソコン甲子園2014 モバイル部門 本戦出場"
            technologies="Java / Android SDK"
            member="3名"
            responsible="主にAndroidアプリのフロントエンドを実装。アプリデザイン、パンフレットデザインなどの、デザイン全般についても担当。"
            others={<><a href="/files/smartmakura/smartmakura_manual_reduce.pdf">作品パンフレット</a></>}
        />
    </ContentsWrapper>
  </Layout>
);

export default MealiePage;