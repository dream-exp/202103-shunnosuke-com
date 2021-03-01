import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const WienXmasMenuPage = () => (
  <Layout title="オーストリッヒカフェウィーン リーフレットデザイン">
    <ContentsWrapper>
        <WorkHeader title="オーストリッヒカフェウィーン リーフレットデザイン" />
        <WorkDescription>
            <p>
            山口県周南市のカフェ「オーストリッヒカフェ ウィーン」様のクリスマスケーキ販促リーフレットのデザインを担当しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/wien_xmas_menu/wien_xmas_menu_1.png",
             "/images/works/individual/wien_xmas_menu/wien_xmas_menu_2.png",
        ]} />
        <WorkInfo 
            period="2016/12 - （毎年継続）"
            technologies="Sketch / Illustrator"
            member="1名"
            responsible="デザイン全般を担当"
        />
    </ContentsWrapper>
  </Layout>
);

export default WienXmasMenuPage;