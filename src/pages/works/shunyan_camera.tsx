import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const ShunyanCameraPage = () => (
  <Layout title="しゅうニャン思い出カメラ">
    <ContentsWrapper>
        <WorkHeader title="しゅうニャン思い出カメラ" />
        <WorkDescription>
            <p>
            「しゅうニャン思い出カメラ」は、駅や観光地にある記念撮影ボードとお土産の紙袋にメディアアートの要素をミックスして、もっと楽しく思い出に残る写真が撮れるサービスです。「駅」をテーマに開催された石巻ハッカソン in 周南 2018において制作した作品で、同ハッカソンにてグランプリを受賞しました。
            </p>
            <p>
            この作品では同ハッカソンのテーマである「駅」から、駅でお土産を購入した際にもらえる紙袋に着目し、紙袋をインタラクションにした作品を作れないか？というアイデアからスタートしました。お土産の袋を持った利用者が作品に近づくと、紙袋に動物（周南市にある徳山動物園に着想を得ています）の映像が近寄ってくる仕掛けになっています。また、その状態で記念撮影し、撮影した画像をQRコードを読み取ってダウンロードすることができます。
            </p>
            <p>
            チームメンバーと協力し、紙袋の取っ手の動きに連動して袋側面のしっぽが動く機構も搭載し、もらって楽しいお土産袋を実現しました。お土産袋に新たな付加価値をつけることができる作品です。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/shunyan_camera/shunyan_camera_1.jpg",
             "/images/works/individual/shunyan_camera/shunyan_camera_2.jpg",
             "/images/works/individual/shunyan_camera/shunyan_camera_3.jpg",
             "/images/works/individual/shunyan_camera/shunyan_camera_4.jpg"
        ]} />
        <WorkYoutube 
            VideoID={"549oz-qvqzc"}
        />
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/yu9S3cbNGzHCt8" width="595" height="485" frameBorder="0" scrolling="no" allowFullScreen style={{margin: "0 auto"}}></iframe>
        <WorkInfo 
            period="2018/03"
            award="石巻ハッカソン in 周南 2018 グランプリ"
            technologies="Processing / Python / OpenCV / Node.js"
            member="8名"
            responsible="サーバサイドとProcessingによる動物の映像表示、記念撮影画像のダウンロード部分の実装を担当"
        />
    </ContentsWrapper>
  </Layout>
);

export default ShunyanCameraPage;