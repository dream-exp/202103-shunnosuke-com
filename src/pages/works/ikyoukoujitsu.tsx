import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const IkyoukoujitsuPage = () => (
  <Layout title="異郷好実 ― フォトブログ">
    <ContentsWrapper>
        <WorkHeader title="異郷好実 ― フォトブログ" />
        <WorkDescription>
            <p>
                <a href="https://photos.dream-exp.net" target="blank">異郷好実 ― フォトブログ</a>
            </p>
            <p>
            『異郷好実』は、自らが運営するフォトブログです。
            </p>
            <p>
            サイトのタイトルとなっている『異郷好実』は、山口県出身の著名な写真家・林忠彦氏が出版した『異郷好日』になぞらえて名付けたタイトルです。 スマートフォンの普及によって、個人がスクリーンに没入する時間が増えたこの時代。しかし、顔を上げてみると美しい景色、面白い光景が世の中にはたくさん広がっています。 この時代に、異なる様々な故郷=異郷を見ることで、スクリーンでは感じられない実世界をもっと好きになる、というコンセプトに基づいて名付けました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/ikyoukoujitsu/ikyoukoujitsu_2.png",
             "/images/works/individual/ikyoukoujitsu/ikyoukoujitsu_1.png",
        ]} />
        <WorkInfo 
            period="2018/09 -"
            technologies="Hugo / SCSS / jQuery"
            member="1名"
            responsible="デザイン、写真撮影、原稿執筆まですべてを担当"
        />
    </ContentsWrapper>
  </Layout>
);

export default IkyoukoujitsuPage;